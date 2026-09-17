'use client'

import { ArrowRight, BriefcaseBusiness, FileText, Mail, Phone } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function TrabajaConNosotrosSection() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setStatus('sending')
        setErrorMessage('')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: new FormData(event.currentTarget),
            })
            const result = (await response.json()) as { error?: string }

            if (!response.ok) {
                setStatus('error')
                setErrorMessage(result.error ?? 'No pudimos enviar tu postulación.')
                return
            }

            event.currentTarget.reset()
            setStatus('success')
        } catch {
            setStatus('error')
            setErrorMessage('No pudimos enviar tu postulación. Intentá nuevamente.')
        }
    }

    return (
        <section id="trabaja-con-nosotros" className="bg-muted/40 py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-8 rounded-3xl border border-border/80 bg-background px-6 py-10 shadow-sm md:px-10 md:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
                    <div className="max-w-xl lg:pt-4">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
                            Trabajá con nosotros
                        </p>
                        <h2 className="text-balance text-4xl font-medium tracking-tight md:text-5xl">
                            Sumate a nuestro equipo.
                        </h2>
                        <p className="mt-6 max-w-lg text-balance text-lg text-muted-foreground">
                            Estamos buscando personas comprometidas con la excelencia, la responsabilidad y el servicio.
                        </p>

                        <div className="mt-8 space-y-5">
                            <div className="flex items-start gap-3">
                                <BriefcaseBusiness className="mt-0.5 size-5 shrink-0 text-primary" />
                                <div>
                                    <p className="font-medium">Oportunidades en logística</p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Buscamos perfiles para conducción, operación y atención al cliente.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                                <div>
                                    <p className="font-medium">Comunicación directa</p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Te contactaremos para coordinar una entrevista con nuestro equipo.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
                                <div>
                                    <p className="font-medium">Atención personalizada</p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Te ayudaremos a evaluar el mejor rol según tu experiencia y disponibilidad.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form
                        className="rounded-2xl border border-border bg-muted/30 p-5 text-foreground shadow-sm sm:p-7"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="category" value="trabaja-con-nosotros" />

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid gap-2 md:col-span-1">
                                <label className="text-sm font-medium" htmlFor="trabajo-name">
                                    Nombre y apellido
                                </label>
                                <input
                                    className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring h-11 rounded-md border px-3 text-sm outline-none focus-visible:ring-2"
                                    id="trabajo-name"
                                    name="name"
                                    placeholder="Tu nombre"
                                    required
                                    type="text"
                                />
                            </div>

                            <div className="grid gap-2 md:col-span-1">
                                <label className="text-sm font-medium" htmlFor="trabajo-email">
                                    Email
                                </label>
                                <input
                                    className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring h-11 rounded-md border px-3 text-sm outline-none focus-visible:ring-2"
                                    id="trabajo-email"
                                    name="email"
                                    placeholder="tu@email.com"
                                    required
                                    type="email"
                                />
                            </div>

                            <div className="grid gap-2 md:col-span-1">
                                <label className="text-sm font-medium" htmlFor="trabajo-phone">
                                    Teléfono
                                </label>
                                <input
                                    className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring h-11 rounded-md border px-3 text-sm outline-none focus-visible:ring-2"
                                    id="trabajo-phone"
                                    name="phone"
                                    placeholder="+54 9 ..."
                                    type="tel"
                                />
                            </div>

                            <div className="grid gap-2 md:col-span-1">
                                <label className="text-sm font-medium" htmlFor="trabajo-role">
                                    Área de interés
                                </label>
                                <select
                                    className="border-input bg-background focus-visible:ring-ring h-11 rounded-md border px-3 text-sm outline-none focus-visible:ring-2"
                                    defaultValue=""
                                    id="trabajo-role"
                                    name="service"
                                >
                                    <option disabled value="">
                                        Seleccioná una opción
                                    </option>
                                    <option value="Conducción">Conducción</option>
                                    <option value="Operación">Operación</option>
                                    <option value="Administración">Administración</option>
                                    <option value="Atención al cliente">Atención al cliente</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>

                            <div className="grid gap-2 md:col-span-2">
                                <label className="text-sm font-medium" htmlFor="trabajo-message">
                                    Presentación
                                </label>
                                <textarea
                                    className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring min-h-32 resize-y rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2"
                                    id="trabajo-message"
                                    name="message"
                                    placeholder="Contanos tu experiencia, disponibilidad y por qué te gustaría formar parte del equipo."
                                    required
                                />
                            </div>

                            <div className="grid gap-2 md:col-span-2">
                                <label className="text-sm font-medium" htmlFor="trabajo-file">
                                    Adjuntar CV
                                </label>
                                <div className="border-input text-muted-foreground flex items-center gap-3 rounded-md border border-dashed px-3 py-2 text-sm">
                                    <FileText className="size-4 shrink-0" />
                                    <input
                                        className="min-w-0 flex-1 file:mr-3 file:rounded file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-primary-foreground"
                                        id="trabajo-file"
                                        name="file"
                                        type="file"
                                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                    />
                                </div>
                                <p className="text-muted-foreground text-xs">
                                    PDF, Word o imagen. Máximo 10 MB.
                                </p>
                            </div>
                        </div>

                        <button
                            className="mt-6 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-5 text-sm font-medium transition-colors"
                            disabled={status === 'sending'}
                            type="submit"
                        >
                            <span>{status === 'sending' ? 'Enviando...' : 'Enviar postulación'}</span>
                            {!status || status !== 'sending' ? <ArrowRight className="size-4" /> : null}
                        </button>

                        {status === 'success' && (
                            <p className="mt-4 text-sm text-green-700" role="status">
                                Tu postulación fue enviada correctamente. Nos comunicaremos pronto.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="mt-4 text-sm text-destructive" role="alert">
                                {errorMessage}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}
