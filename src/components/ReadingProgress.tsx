"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const ratio = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
            setProgress(ratio);
        };

        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return (
        <div
            className="reading-progress"
            style={{ transform: `scaleX(${progress})`, width: "100%" }}
            aria-hidden="true"
        />
    );
}
