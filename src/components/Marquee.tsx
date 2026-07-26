"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
    items: string[];
    /** Seconds for one full cycle. Higher = slower. */
    duration?: number;
    reverse?: boolean;
};

/**
 * Infinite horizontal ticker. The list is tripled and animated by exactly one
 * third, so the loop point is invisible.
 */
export default function Marquee({ items, duration = 45, reverse = false }: Props) {
    const shouldReduce = useReducedMotion();
    const loop = [...items, ...items, ...items];

    return (
        <div
            className="relative overflow-hidden border-y border-white/5 bg-background py-7 select-none"
            aria-hidden="true"
        >
            {/* edge fade so words dissolve rather than clip */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

            <motion.div
                className="flex items-center gap-12 whitespace-nowrap will-change-transform"
                animate={shouldReduce ? {} : { x: reverse ? ["-33.3333%", "0%"] : ["0%", "-33.3333%"] }}
                transition={{ duration, ease: "linear", repeat: Infinity }}
            >
                {loop.map((item, i) => (
                    <div key={i} className="flex shrink-0 items-center gap-12">
                        <span className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white/25">
                            {item}
                        </span>
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
