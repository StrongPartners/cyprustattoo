"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
    text: string;
    className?: string;
    color?: string;
    delay?: number;
};

/**
 * Letter-by-letter rise. The full string is exposed via aria-label and each
 * letter is aria-hidden, so screen readers read the word, not the characters.
 */
export default function AnimatedHeading({
    text,
    className = "",
    color = "text-white",
    delay = 0,
}: Props) {
    const shouldReduce = useReducedMotion();

    if (shouldReduce) {
        return <span className={`${color} ${className}`}>{text}</span>;
    }

    return (
        <motion.span
            className={`${color} ${className} inline-block`}
            aria-label={text}
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: { transition: { delayChildren: delay, staggerChildren: 0.045 } },
            }}
        >
            {Array.from(text).map((char, i) => (
                <motion.span
                    key={i}
                    aria-hidden="true"
                    className="inline-block"
                    variants={{
                        hidden: { opacity: 0, y: "110%", rotateX: -40 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                        },
                    }}
                >
                    {char === " " ? " " : char}
                </motion.span>
            ))}
        </motion.span>
    );
}
