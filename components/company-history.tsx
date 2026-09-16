import { companyFacts, companyMilestones } from '@/lib/company-history'

export default function CompanyHistory() {
    return (
        <section id="historia" className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                    <div>
                        <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-[0.2em]">
                            Nuestra historia
                        </p>
                        <h2 className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium tracking-tight lg:text-5xl">
                            <span className="text-foreground">Más de cinco décadas.</span>{' '}
                            <br />
                            Una forma de trabajar que perdura.
                        </h2>
                    </div>
                    <p className="text-muted-foreground text-balance text-lg md:pt-10">
                        Desde Córdoba, construimos una historia familiar basada en la
                        seguridad, la confianza y el compromiso con cada servicio.
                    </p>
                </div>

                <div className="relative mt-16">
                    <div
                        aria-hidden="true"
                        className="bg-border absolute bottom-0 left-[0.45rem] top-0 w-px md:left-1/2"
                    />
                    <div className="space-y-10 md:space-y-0">
                        {companyMilestones.map((milestone, index) => (
                            <article
                                className="relative grid gap-4 pl-8 md:grid-cols-2 md:gap-16 md:pl-0"
                                key={milestone.year}
                            >
                                <div
                                    className={`pb-2 md:pb-20 ${
                                        index % 2 === 0
                                            ? 'md:pr-16 md:text-right'
                                            : 'md:order-2 md:pl-16'
                                    }`}
                                >
                                    <p className="text-primary text-4xl font-semibold tracking-tight">
                                        {milestone.year}
                                    </p>
                                    <h3 className="mt-2 text-xl font-medium capitalize">
                                        {milestone.title}
                                    </h3>
                                </div>
                                <div
                                    className={`border-t pt-4 md:pt-1 ${
                                        index % 2 === 0
                                            ? 'md:order-2 md:pl-16'
                                            : 'md:pr-16 md:text-right'
                                    }`}
                                >
                                    <p className="text-muted-foreground text-balance leading-relaxed">
                                        {milestone.description}
                                    </p>
                                </div>
                                <span
                                    aria-hidden="true"
                                    className="bg-primary absolute left-0 top-1.5 size-2 rounded-full ring-4 ring-background md:left-1/2 md:-translate-x-1/2"
                                />
                            </article>
                        ))}
                    </div>
                </div>

                <div className="mt-4 border-t pt-8 md:mt-0 md:pt-10">
                    <div className="grid gap-8 md:grid-cols-3 md:gap-12">
                        {companyFacts.map((fact) => (
                            <div className="space-y-3" key={fact.label}>
                                <div className="text-4xl font-semibold tracking-tight">
                                    {fact.value}
                                </div>
                                <p className="text-muted-foreground">{fact.label}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-muted-foreground mt-8 max-w-3xl text-balance text-lg">
                        Nuestra base cuenta con taller propio, gomería, lavadero,
                        centro de lubricación y oficinas. Hoy brindamos cobertura
                        nacional con una flota preparada para acompañar las
                        necesidades de cada cliente.
                    </p>
                </div>
            </div>
        </section>
    )
}
