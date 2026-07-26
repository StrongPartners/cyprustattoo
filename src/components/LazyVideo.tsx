"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
    src: string;
    className?: string;
    title?: string;
    poster?: string;
};

/**
 * Viewport-gated background video.
 *
 * The `autoPlay` attribute makes a browser fetch the file whether or not the
 * element is on screen — on the gallery page that meant every clip in the set
 * downloading at once. Here `src` is withheld until the element is near the
 * viewport and playback is driven manually, so an off-screen clip costs
 * nothing. Videos also pause on exit rather than decoding unseen.
 */
export default function LazyVideo({ src, className, title, poster }: Props) {
    const ref = useRef<HTMLVideoElement>(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    // Autoplay can reject (power saving, no user gesture); a
                    // paused poster frame is an acceptable outcome.
                    void el.play().catch(() => { });
                } else {
                    el.pause();
                }
            },
            { rootMargin: "200px", threshold: 0.1 }
        );

        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <video
            ref={ref}
            src={shouldLoad ? src : undefined}
            poster={poster}
            muted
            loop
            playsInline
            preload="none"
            title={title}
            className={className}
        />
    );
}
