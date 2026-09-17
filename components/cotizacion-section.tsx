'use client'

import { ArrowRight, BadgeCheck, MapPin, Truck } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function CotizacionSection() {
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
                setErrorMessage(result.error ?? 'No pudimos enviar tu cotización.')
                return
            }

            event.currentTarget.reset()
            setStatus('success')
        } catch {
            setStatus('error')
            setErrorMessage('No pudimos enviar tu cotización. Intentá nuevamente.')
        }
    }

    return (
        <section id="cotizacion" className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-8 overflow-hidden rounded-3xl bg-primary px-6 py-10 text-primary-foreground md:px-10 md:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
                    <div className="max-w-xl lg:pt-4">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                            Cotización
                        </p>
                        <h2 className="text-balance text-4xl font-medium tracking-tight md:text-5xl">
                            Pedí una cotización a medida.
                        </h2>
                        <p className="mt-6 max-w-lg text-balance text-lg text-primary-foreground/75">
                            Contanos qué necesitás transportar y te ayudamos a definir la mejor solución de logística para tu operación.
                        </p>

                        <div className="mt-8 space-y-5">
                            <div className="flex items-start gap-3">
                                <BadgeCheck className="mt-0.5 size-5 shrink-0" />
                                <div>
                                    <p className="font-medium">Respuesta rápida</p>
                                    <p className="mt-1 text-sm text-primary-foreground/70">
                                        Revisamos tu solicitud con prioridad para coordinar el servicio.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Truck className="mt-0.5 size-5 shrink-0" />
                                <div>
                                    <p className="font-medium">Plan según tu necesidad</p>
                                    <p className="mt-1 text-sm text-primary-foreground/70">
                                        Calculamos rutas, volumen y tiempos en función de tu operación.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="mt-0.5 size-5 shrink-0" />
                                <div>
                                    <p className="font-medium">Cobertura nacional</p>
                                    <p className="mt-1 text-sm text-primary-foreground/70">
                                        Operamos con atención personalizada en todo el país.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form
                        className="rounded-2xl bg-background p-5 text-foreground shadow-xl shadow-black/10 sm:p-7"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="category" value="cotizacion" />

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid gap-2 md:col-span-1">
                                <label className="text-sm font-medium" htmlFor="cotizacion-name">
                                    Nombre y apellido
                                </label>
                                <input
                                    className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring h-11 rounded-md border px-3 text-sm outline-none focus-visible:ring-2"
                                    id="cotizacion-name"
                                    name="name"
                                    placeholder="Tu nombre"
                                    required
                                    type="text"
                                />
                            </div>

                            <div className="grid gap-2 md:col-span-1">
                                <label className="text-sm font-medium" htmlFor="cotizacion-email">
                                    Email
                                </label>
                                <input
                                    className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring h-11 rounded-md border px-3 text-sm outline-none focus-visible:ring-2"
                                    id="cotizacion-email"
                                    name="email"
                                    placeholder="tu@email.com"
                                    required
                                    type="email"
                                />
                            </div>

                            <div className="grid gap-2 md:col-span-1">
                                <label className="text-sm font-medium" htmlFor="cotizacion-phone">
                                    Teléfono
                                </label>
                                <input
                                    className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring h-11 rounded-md border px-3 text-sm outline-none focus-visible:ring-2"
                                    id="cotizacion-phone"
                                    name="phone"
                                    placeholder="+54 9 ..."
                                    type="tel"
                                />
                            </div>

                            <div className="grid gap-2 md:col-span-1">
                                <label className="text-sm font-medium" htmlFor="cotizacion-service">
                                    Servicio requerido
                                </label>
                                <select
                                    className="border-input bg-background focus-visible:ring-ring h-11 rounded-md border px-3 text-sm outline-none focus-visible:ring-2"
                                    defaultValue=""
                                    id="cotizacion-service"
                                    name="service"
                                >
                                    <option disabled value="">
                                        Seleccioná un servicio
                                    </option>
                                    <option value="Combustibles">Combustibles</option>
                                    <option value="Carga general">Carga general</option>
                                    <option value="Traslado de materiales">Traslado de materiales</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>

                            <div className="grid gap-2 md:col-span-2">
                                <label className="text-sm font-medium" htmlFor="cotizacion-message">
                                    Detalle de la necesidad
                                </label>
                                <textarea
                                    className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring min-h-32 resize-y rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2"
                                    id="cotizacion-message"
                                    name="message"
                                    placeholder="Indicá origen, destino, tipo de carga, fechas y cualquier detalle que antecendentes..."
                                    required
                                />
                            </div>
                        </div>

                        <button
                            className="mt-6 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-5 text-sm font-medium transition-colors"
                            disabled={status === 'sending'}
                            type="submit"
                        >
                            <span>{status === 'sending' ? 'Enviando...' : 'Solicitar cotización'}</span>
                            {!status || status !== 'sending' ? <ArrowRight className="size-4" /> : null}
                        </button>

                        {status === 'success' && (
                            <p className="mt-4 text-sm text-green-700" role="status">
                                Tu cotización fue enviada correctamente. En breve nos pondremos en contacto.
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
