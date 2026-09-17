'use client'

import { useMedia } from '@/hooks/use-media'
import { InfiniteSlider } from '@/components/ui/motion-primitives/infinite-slider'
import { Ypf } from './ui/svgs/ypf'
import { Cammesa } from './ui/svgs/cammesa'
import { Gulf } from './ui/svgs/Gulf'
import { Porta } from './ui/svgs/porta'
import { Holcim } from './ui/svgs/holcim'
import { C_Avellaneda } from './ui/svgs/C_Avellaneda'
import { Ypf_gas } from './ui/svgs/ypf_gas'

const logos = (
    <>
        <Ypf className="mx-auto h-10 w-full" />
        <Gulf className="mx-auto h-20 w-full" />
        <Porta className="mx-auto h-10 w-full" />
        <Cammesa className="mx-auto h-10 w-full" />
        <Holcim className="mx-auto h-10 w-full" />
        <Ypf_gas className="mx-auto h-10 w-full" />
        <C_Avellaneda className="mx-auto h-20 w-full" />
    </>
)

export default function LogoCloud() {
    const isLarge = useMedia('(min-width: 64rem)')

    return (
        <section className="bg-background">
            <h4 className="text-center text-foreground md:text-4xl">Clientes Satisfechos</h4>

            <div className="relative m-auto max-w-9xl">
                {isLarge ? (
                    <div className="relative flex items-center justify-between px-6 py-12">
                        {logos}
                    </div>
                ) : (
                    <InfiniteSlider
                        gap={44}
                        className="mask-x-from-85% mask-x-to-99% *:[&>svg]:scale-80 py-8"
                    >
                        {logos}
                    </InfiniteSlider>
                )}
            </div>
        </section>
    )
}
