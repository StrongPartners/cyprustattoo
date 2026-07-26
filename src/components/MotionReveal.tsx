"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
    delay?: number;
    y?: number;
    blur?: boolean;
    className?: string;
};

/** Fade + rise as the element enters the viewport. Fires once. */
export default function MotionReveal({
    children,
    delay = 0,
    y = 28,
    blur = false,
    className,
}: Props) {
    const shouldReduce = useReducedMotion();

    if (shouldReduce) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y, filter: blur ? "blur(8px)" : "blur(0px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}
