'use client'
import { Spotify } from '@/components/ui/svgs/spotify'
import { VercelFull } from '@/components/ui/svgs/vercel'
import { SupabaseFull } from '@/components/ui/svgs/supabase'
import { Hulu } from '@/components/ui/svgs/hulu'
import { Bolt } from '@/components/ui/svgs/bolt'
import { Beacon } from '@/components/ui/svgs/beacon'
import { useMedia } from '@/hooks/use-media'
import { InfiniteSlider } from '@/components/ui/motion-primitives/infinite-slider'
import { Ypf } from './ui/svgs/ypf'
import { Cammesa } from './ui/svgs/cammesa'
import { Gulf } from './ui/svgs/Gulf'
import { Porta } from './ui/svgs/porta'
import { Holcim } from './ui/svgs/holcim'
import { C_Avellaneda } from './ui/svgs/C_Avellaneda'
import { Ypf_gas } from './ui/svgs/ypf_gas'

export default function LogoCloud() {
    const isLarge = useMedia('(min-width: 64rem)')

    const Logos = () => {
        return (
            <>
                <Ypf className="mx-auto h-10 w-full" />
                <Gulf className="mx-auto h-20 w-full" />
                <Porta className="mx-auto h-10 w-full" />
                <Cammesa className="mx-auto h-10 w-full" />
                <Holcim className="mx-auto h-10 w-full" />
                <Ypf_gas className="mx-auto h-10 w-full" />    
                <C_Avellaneda className="mx-auto h-20 w-full" />
                {/* <Hulu
                    height={20}
                    width={60}
                />

                <VercelFull
                    height={24}
                    width={100}
                />

                <Bolt
                    height={24}
                    width={58}
                />

                <SupabaseFull className="h-7" />

                <Beacon
                    height={26}
                    width={92}
                />

                <Spotify
                    height={28}
                    width={90}
                /> */}
            </>
        )
    }

    return (
        <section className="bg-background">
            <h4 className="text-center text-foreground  md:text-4xl">Clientes Satisfechos</h4>

            <div className=" relative m-auto max-w-9xl">
                {isLarge ? (
                    <div className="relative flex items-center justify-between px-6 py-12">
                        <Logos />
                    </div>
                ) : (
                    <InfiniteSlider
                        gap={44}
                        className="mask-x-from-85% mask-x-to-99% *:[&>svg]:scale-80 py-8"
                    >
                        <Logos />
                    </InfiniteSlider>
                )}
            </div>
        </section>
    )
}
