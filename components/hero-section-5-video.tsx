'use client'

export default function HeroVideo() {
    return (
        <video
            aria-hidden
            autoPlay
            muted
            loop
            playsInline
            className="size-full object-cover"
            // src="https://videos.pexels.com/video-files/18419650/18419650-uhd_2560_1440_30fps.mp4"
            src='/assets/clideo_editor_3cb5911593cd4ca38bd25bcf70037f1e.mp4'
            onLoadedMetadata={(event) => {
                event.currentTarget.playbackRate = 0.5
            }}
        />
    )
}
