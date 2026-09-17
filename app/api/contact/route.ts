import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const destinationEmail = 'sanztransporte@gmail.com'
const maxMessageLength = 5000
const maxFileSize = 10 * 1024 * 1024
const allowedFileTypes = new Set([
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/jpeg',
    'image/png',
])

function jsonError(message: string, status: number) {
    return Response.json({ error: message }, { status })
}

export async function POST(request: Request) {
    const smtpHost = process.env.SMTP_HOST
    const smtpUser = process.env.SMTP_USER
    const smtpPassword = process.env.SMTP_PASSWORD

    if (!smtpHost || !smtpUser || !smtpPassword) {
        console.error('Contact form email delivery is not configured.')
        return jsonError('El formulario no está configurado en este momento.', 503)
    }

    const formData = await request.formData()
    const category = formData.get('category')
    const email = formData.get('email')
    const message = formData.get('message')
    const name = formData.get('name')
    const phone = formData.get('phone')
    const service = formData.get('service')
    const file = formData.get('file')

    const formCategory =
        category === 'cotizacion' || category === 'trabaja-con-nosotros' ? category : 'contacto'

    if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return jsonError('Ingresá una dirección de email válida.', 400)
    }

    if (
        typeof message !== 'string' ||
        message.trim().length === 0 ||
        message.length > maxMessageLength
    ) {
        return jsonError('El mensaje debe tener entre 1 y 5000 caracteres.', 400)
    }

    if (typeof name !== 'string' && name !== null) {
        return jsonError('El nombre no es válido.', 400)
    }

    if (typeof phone !== 'string' && phone !== null) {
        return jsonError('El teléfono no es válido.', 400)
    }

    if (typeof service !== 'string' && service !== null) {
        return jsonError('La opción seleccionada no es válida.', 400)
    }

    if (!(file instanceof File || file === null)) {
        return jsonError('El archivo adjunto no es válido.', 400)
    }

    if (file instanceof File && file.size > 0) {
        if (file.size > maxFileSize) {
            return jsonError('El archivo no puede superar los 10 MB.', 400)
        }

        if (!allowedFileTypes.has(file.type)) {
            return jsonError('El tipo de archivo adjunto no está permitido.', 400)
        }
    }

    const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: smtpUser,
            pass: smtpPassword,
        },
    })

    const attachments =
        file instanceof File && file.size > 0
            ? [
                  {
                      filename: file.name,
                      content: Buffer.from(await file.arrayBuffer()),
                      contentType: file.type,
                  },
              ]
            : undefined

    const categoryLabel =
        formCategory === 'cotizacion'
            ? 'Cotización'
            : formCategory === 'trabaja-con-nosotros'
              ? 'Postulación'
              : 'Contacto'

    const details = [
        name && typeof name === 'string' ? `Nombre: ${name}` : null,
        phone && typeof phone === 'string' ? `Teléfono: ${phone}` : null,
        service && typeof service === 'string' ? `Servicio: ${service}` : null,
    ].filter(Boolean)

    const emailText = [message, ...(details.length ? [details.join('\n')] : [])].join('\n\n')

    try {
        await transporter.sendMail({
            from: process.env.SMTP_FROM ?? smtpUser,
            to: destinationEmail,
            replyTo: email,
            subject: `Nuevo ${categoryLabel} desde la web: ${email}`,
            text: emailText,
            attachments,
        })
    } catch (error) {
        console.error('Unable to send contact form email.', error)
        return jsonError('No pudimos enviar tu mensaje. Intentá nuevamente.', 502)
    }

    return Response.json({ message: 'Mensaje enviado correctamente.' })
}
