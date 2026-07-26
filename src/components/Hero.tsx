"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { galleryVideos } from "@/data/assets-data";
import { useLanguage } from "@/components/LanguageContext";
import AnimatedHeading from "@/components/AnimatedHeading";
import Link from "next/link";

const HERO_CLIP_COUNT = 4;

export default function Hero() {
    const [videoIndex, setVideoIndex] = useState(0);
    const [videoReady, setVideoReady] = useState(false);
    const { t, localePath } = useLanguage();
    const containerRef = useRef<HTMLElement | null>(null);
    const shouldReduce = useReducedMotion();

    // Video is the heaviest asset on the page — hold it back until the section
    // is nearly in view so it stays off the LCP critical path.
    useEffect(() => {
        if (typeof window === "undefined") return;

        const prefersReduced =
            window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) return;

        const el = containerRef.current;
        if (!el) return;

        const io = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    setVideoReady(true);
                    io.disconnect();
                }
            },
            { rootMargin: "200px" }
        );

        io.observe(el);
        return () => io.disconnect();
    }, []);

    // Cycling the full 37-clip set meant a fresh multi-MB download every 8s for
    // as long as anyone sat on the homepage. Four is enough to read as motion.
    const heroClips = galleryVideos.slice(0, HERO_CLIP_COUNT);

    useEffect(() => {
        if (!videoReady) return;
        const interval = setInterval(() => {
            setVideoIndex((prev) => (prev + 1) % heroClips.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [videoReady, heroClips.length]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Three depths: the plate lags, the copy leads, the cue drops out first.
    const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
    const videoScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
    const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
    const cueOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative flex min-h-[95vh] items-center justify-center overflow-hidden bg-[#0a0a0a]"
        >
            {videoReady && (
                <motion.div
                    key={videoIndex}
                    className="absolute inset-0 h-full w-full opacity-30 transition-opacity duration-1000"
                    style={
                        shouldReduce
                            ? undefined
                            : { y: videoY, scale: videoScale, willChange: "transform" }
                    }
                >
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="h-full w-full object-cover"
                        src={heroClips[videoIndex]}
                    />
                </motion.div>
            )}

            {/* Depth scrims */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-background via-background/40 to-background" />
            <div className="absolute left-0 top-0 z-10 h-1/4 w-full bg-gradient-to-b from-background to-transparent" />
            <div className="absolute bottom-0 left-0 z-10 h-1/3 w-full bg-gradient-to-t from-background to-transparent" />

            <motion.div
                className="relative z-20 mx-auto mt-20 max-w-5xl px-4 text-center"
                style={
                    shouldReduce
                        ? undefined
                        : { y: contentY, opacity: contentOpacity, willChange: "transform, opacity" }
                }
            >
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
                        {t.hero.location}
                    </p>
                </div>

                {/* Two weights, not two sizes of the same thing: the brand
                    leads, the service line sits under it. "TATTOO & PIERCING"
                    is ~2.5x the character count of the old "TATTOO", so it
                    steps down a tier to stay on one line at every breakpoint. */}
                <h1 className="mb-8 flex flex-col overflow-hidden">
                    <AnimatedHeading
                        text={t.hero.title1}
                        className="text-5xl font-black uppercase leading-none tracking-tighter sm:text-7xl md:text-9xl"
                    />
                    <AnimatedHeading
                        text={t.hero.title2}
                        color="text-primary"
                        delay={0.25}
                        className="mt-1 text-2xl font-black uppercase leading-none tracking-[0.08em] sm:text-4xl md:text-5xl"
                    />
                </h1>

                <p className="mx-auto mb-12 max-w-2xl text-sm font-light leading-relaxed text-white/50 sm:text-lg">
                    {t.hero.desc}
                </p>

                <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                    <a
                        href="https://wa.me/9005488910673"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold w-full text-center sm:w-auto"
                    >
                        {t.hero.cta_whatsapp}
                    </a>
                    <Link
                        href={localePath("/galeri")}
                        className="btn-outline w-full text-center sm:w-auto"
                    >
                        {t.hero.cta_gallery}
                    </Link>
                </div>

                <div className="mx-auto mt-24 grid max-w-3xl grid-cols-3 gap-8 border-t border-white/5 pt-12">
                    <div>
                        <p className="text-2xl font-black italic text-white sm:text-4xl">1000+</p>
                        <p className="mt-2 text-[10px] uppercase tracking-widest text-white/30">
                            {t.hero.stats_customers}
                        </p>
                    </div>
                    <div>
                        <p className="text-2xl font-black italic text-primary sm:text-4xl">5.0</p>
                        <p className="mt-2 text-[10px] uppercase tracking-widest text-white/30">
                            {t.hero.stats_rating}
                        </p>
                    </div>
                    <div>
                        <p className="text-2xl font-black italic text-white sm:text-4xl">12+</p>
                        <p className="mt-2 text-[10px] uppercase tracking-widest text-white/30">
                            {t.hero.stats_experience}
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-4 sm:flex"
                style={shouldReduce ? undefined : { opacity: cueOpacity }}
            >
                <span className="origin-center rotate-90 text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">
                    {t.hero.explore}
                </span>
                <motion.div
                    className="h-16 w-[1px] bg-gradient-to-b from-primary to-transparent"
                    animate={shouldReduce ? {} : { scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: "top" }}
                />
            </motion.div>
        </section>
    );
}
