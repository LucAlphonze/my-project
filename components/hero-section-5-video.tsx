'use client'

import { useEffect, useState } from 'react'

export default function HeroVideo() {
    const [shouldPlay, setShouldPlay] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)')
        const update = () => setShouldPlay(mediaQuery.matches)

        update()
        mediaQuery.addEventListener('change', update)

        return () => mediaQuery.removeEventListener('change', update)
    }, [])

    if (!shouldPlay) {
        return null
    }

    return (
        <video
            aria-hidden
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/portada4.JPG"
            className="size-full object-cover"
            src="/assets/clideo_editor_3cb5911593cd4ca38bd25bcf70037f1e.mp4"
            onLoadedMetadata={(event) => {
                event.currentTarget.playbackRate = 0.5
            }}
        />
    )
}
