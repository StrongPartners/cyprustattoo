"use client";

import { useEffect, useState } from "react";

/**
 * True once the viewport is at least `minWidth`. Starts false so SSR and the
 * first client render agree — effects that depend on it kick in after mount.
 */
export function useIsDesktop(minWidth = 1024) {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const mq = window.matchMedia(`(min-width: ${minWidth}px)`);
        const update = () => setIsDesktop(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, [minWidth]);

    return isDesktop;
}
