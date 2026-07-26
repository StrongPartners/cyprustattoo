"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    motion,
    useScroll,
    useTransform,
    useReducedMotion,
} from "framer-motion";
import { galleryImages } from "@/data/assets-data";
import { useLanguage } from "@/components/LanguageContext";

/**
 * Cinematic pinned section. The viewport sticks for ~2.5 screens of scroll
 * while a real portfolio photo pushes in behind a headline that assembles
 * line by line, then releases. Uses actual client work — never stock or
 * generated imagery — since this is the studio's credibility moment.
 */
export default function ManifestoSection() {
    const { t, localePath } = useLanguage();
    const ref = useRef<HTMLElement>(null);
    const shouldReduce = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    // Background pushes in slowly and drifts up — the "camera move".
    const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.35]);
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
    const bgOpacity = useTransform(
        scrollYProgress,
        [0, 0.15, 0.8, 1],
        [0, 0.5, 0.5, 0.15]
    );

    // Headline lines stagger in across the first half of the scroll.
    const line1 = useTransform(scrollYProgress, [0.05, 0.22], [0, 1]);
    const line2 = useTransform(scrollYProgress, [0.14, 0.32], [0, 1]);
    const line3 = useTransform(scrollYProgress, [0.23, 0.42], [0, 1]);
    const line1Y = useTransform(scrollYProgress, [0.05, 0.22], [60, 0]);
    const line2Y = useTransform(scrollYProgress, [0.14, 0.32], [60, 0]);
    const line3Y = useTransform(scrollYProgress, [0.23, 0.42], [60, 0]);

    const bodyOpacity = useTransform(scrollYProgress, [0.42, 0.58], [0, 1]);
    const bodyY = useTransform(scrollYProgress, [0.42, 0.58], [30, 0]);

    const heroImage = galleryImages[3] ?? galleryImages[0];

    if (shouldReduce) {
        return (
            <section className="relative bg-background py-32 px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-25">
                    <Image src={heroImage} alt="" fill className="object-cover" sizes="100vw" />
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
                </div>
                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                        {t.manifesto.eyebrow}
                    </p>
                    <h2 className="mb-10 text-5xl font-black uppercase leading-[0.95] tracking-tighter text-white sm:text-7xl">
                        {t.manifesto.line1}{" "}
                        <span className="text-primary italic">{t.manifesto.line2}</span>{" "}
                        {t.manifesto.line3}
                    </h2>
                    <p className="mx-auto max-w-xl text-lg font-light leading-relaxed text-white/50">
                        {t.manifesto.desc}
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section ref={ref} className="relative h-[250vh] bg-background">
            <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
                {/* Background plate — real portfolio work */}
                <motion.div
                    className="absolute inset-0"
                    style={{ scale: bgScale, y: bgY, opacity: bgOpacity, willChange: "transform, opacity" }}
                >
                    <Image
                        src={heroImage}
                        alt=""
                        fill
                        priority={false}
                        sizes="100vw"
                        className="object-cover"
                    />
                </motion.div>

                {/* Legibility scrim */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
                <div className="absolute inset-0 bg-background/30" />

                <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
                    <motion.p
                        className="mb-10 text-[10px] font-bold uppercase tracking-[0.4em] text-primary"
                        style={{ opacity: line1 }}
                    >
                        {t.manifesto.eyebrow}
                    </motion.p>

                    <h2 className="flex flex-col text-6xl font-black uppercase leading-[0.9] tracking-tighter text-white sm:text-8xl md:text-9xl">
                        <motion.span style={{ opacity: line1, y: line1Y }}>
                            {t.manifesto.line1}
                        </motion.span>
                        <motion.span
                            className="italic text-primary"
                            style={{ opacity: line2, y: line2Y }}
                        >
                            {t.manifesto.line2}
                        </motion.span>
                        <motion.span style={{ opacity: line3, y: line3Y }}>
                            {t.manifesto.line3}
                        </motion.span>
                    </h2>

                    <motion.div
                        className="mt-14"
                        style={{ opacity: bodyOpacity, y: bodyY }}
                    >
                        <p className="mx-auto mb-12 max-w-xl text-lg font-light leading-relaxed text-white/60 sm:text-xl">
                            {t.manifesto.desc}
                        </p>
                        <Link href={localePath("/galeri")} className="btn-outline inline-block">
                            {t.manifesto.cta}
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
