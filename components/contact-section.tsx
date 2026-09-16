import { MapPin, Paperclip } from 'lucide-react'

export default function ContactSection() {
    return (
        <section id="contacto" className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-10 overflow-hidden rounded-3xl bg-primary px-6 py-10 text-primary-foreground md:px-12 md:py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    <div className="max-w-2xl lg:pt-4">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                            Contacto
                        </p>
                        <h2 className="text-balance text-4xl font-medium tracking-tight md:text-5xl">
                            Hablemos de su próximo viaje.
                        </h2>
                        <p className="mt-6 max-w-xl text-balance text-lg text-primary-foreground/75">
                            Estamos listos para acompañar sus necesidades de transporte
                            y logística con la experiencia de siempre.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 lg:pt-4">
                        <div className="flex items-start gap-3 border-t border-primary-foreground/25 pt-4">
                            <MapPin className="mt-0.5 size-5 shrink-0" />
                            <div>
                                <p className="font-medium">Base operativa</p>
                                <p className="mt-1 text-sm text-primary-foreground/70">
                                    Córdoba, Argentina
                                </p>
                            </div>
                        </div>
                        <div className="border-t border-primary-foreground/25 pt-4">
                            <p className="font-medium">Atención personalizada</p>
                            <p className="mt-1 text-sm text-primary-foreground/70">
                                Coordinemos una conversación para conocer su necesidad.
                            </p>
                        </div>
                    </div>

                    <form
                        className="rounded-2xl bg-background p-5 text-foreground shadow-xl shadow-black/10 sm:p-7 lg:col-start-2 lg:row-span-2 lg:row-start-1"
                        onSubmit={(event) => event.preventDefault()}
                    >
                        <div className="grid gap-5">
                            <div className="grid gap-2">
                                <label className="text-sm font-medium" htmlFor="contact-email">
                                    Email
                                </label>
                                <input
                                    className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring h-11 rounded-md border px-3 text-sm outline-none focus-visible:ring-2"
                                    id="contact-email"
                                    name="email"
                                    placeholder="tu@email.com"
                                    required
                                    type="email"
                                />
                            </div>

                            <div className="grid gap-2">
                                <label className="text-sm font-medium" htmlFor="contact-message">
                                    Mensaje
                                </label>
                                <textarea
                                    className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring min-h-32 resize-y rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2"
                                    id="contact-message"
                                    name="message"
                                    placeholder="¿En qué podemos ayudarte?"
                                    required
                                />
                            </div>

                            <div className="grid gap-2">
                                <label className="text-sm font-medium" htmlFor="contact-file">
                                    Adjuntar CV o archivo de aplicación
                                </label>
                                <div className="border-input text-muted-foreground flex items-center gap-3 rounded-md border border-dashed px-3 py-2 text-sm">
                                    <Paperclip className="size-4 shrink-0" />
                                    <input
                                        className="min-w-0 flex-1 file:mr-3 file:rounded file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-primary-foreground"
                                        id="contact-file"
                                        name="file"
                                        type="file"
                                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                    />
                                </div>
                                <p className="text-muted-foreground text-xs">
                                    PDF, Word o imagen. Máximo 10 MB.
                                </p>
                            </div>

                            <button
                                className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-5 text-sm font-medium transition-colors"
                                type="submit"
                            >
                                Enviar mensaje
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
