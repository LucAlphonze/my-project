'use client'

import { useState, useEffect } from 'react'

export function useMedia(query: string): boolean {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const matchMedia = window.matchMedia(query)

        const updateMatches = () => setMatches(matchMedia.matches)
        const scheduleUpdate = () => {
            window.requestAnimationFrame(updateMatches)
        }

        scheduleUpdate()
        matchMedia.addEventListener('change', updateMatches)

        return () => {
            matchMedia.removeEventListener('change', updateMatches)
        }
    }, [query])

    return matches
}
