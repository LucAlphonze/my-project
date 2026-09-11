import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/hero-section-5-header'
import { ChevronRight } from 'lucide-react'
import LogoCloud from '@/components/hero-section-5-logo-cloud'
import HeroVideo from './hero-section-5-video'
import { useRef } from 'react'

export default function HeroSection({ onClick }: { onClick: () => void }) {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="lg:min-h-200 sm:aspect-3/2 min-[1996px]:max-h-240 relative mx-auto flex aspect-square flex-col justify-end lg:aspect-auto xl:aspect-video">
                        <div className="relative z-10 flex flex-col justify-end">
                            <div className="mx-auto w-full max-w-7xl px-6 pb-6 lg:pb-12">
                                <div className="flex flex-wrap items-end justify-between gap-4 lg:w-2/3">
                                    <h1 className="max-w-md text-balance text-5xl md:text-6xl">Transporte Emiliano Sanz</h1>
                                    <p className="text-accent-foreground text-balance text-lg">Emiliano Sanz E Hijos SA ofrece soluciones seguras de transporte tanto de cargas generales como peligrosas en Córdoba, con más de 40 años de experiencia logística.</p>

                                    <div className="flex items-center gap-2">
                                        <Button
                                            className="pr-2.5"
                                            nativeButton={false}
                                            onClick={onClick}
                                            render={
                                                <Link href="#link">
                                                    <span className="text-nowrap">Conocenos</span>
                                                    <ChevronRight className="ml-1" />
                                                </Link>
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mask-y-from-60% mask-b-to-95% 2xl:mask-x-from-90% pointer-events-none absolute inset-0">
                            <HeroVideo />
                        </div>
                    </div>
                    
                </section>
                <LogoCloud />
            </main>
        </>
    )
}
