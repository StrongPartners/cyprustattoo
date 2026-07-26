"use client";

import { useRef, type ReactNode } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useReducedMotion,
} from "framer-motion";

type Props = {
    children: ReactNode;
    /**
     * Drift distance as a share of the element's own height.
     * Positive = the layer lags behind the scroll (reads as "further away").
     * Negative = it leads the scroll (reads as "closer to the viewer").
     */
    speed?: number;
    className?: string;
    /** Damp the motion so fast scrolls don't feel twitchy. */
    smooth?: boolean;
    /**
     * Render as a plain wrapper. Use when the layout collapses to one column —
     * differing drift rates on stacked blocks open visible gaps.
     */
    disabled?: boolean;
};

/**
 * Scroll-linked vertical drift. Wrap any block; the parent needs
 * `overflow-hidden` when the child is a full-bleed image or video, since the
 * child is scaled up to cover the drift range.
 */
export default function Parallax({
    children,
    speed = 0.2,
    className,
    smooth = true,
    disabled = false,
}: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const shouldReduce = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const raw = useTransform(
        scrollYProgress,
        [0, 1],
        [`${speed * 50}%`, `${speed * -50}%`]
    );
    const damped = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 });
    const y = smooth ? damped : raw;

    if (shouldReduce || disabled) {
        return <div className={className}>{children}</div>;
    }

    return (
        <div ref={ref} className={className}>
            <motion.div style={{ y, willChange: "transform" }}>
                {children}
            </motion.div>
        </div>
    );
}
