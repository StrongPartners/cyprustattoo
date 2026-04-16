"use client";

import { useEffect, useRef, useState } from "react";
import { galleryVideos } from "@/data/assets-data";
import { useLanguage } from "@/components/LanguageContext";
import Link from "next/link";

export default function Hero() {
    const [videoIndex, setVideoIndex] = useState(0);
    const [videoReady, setVideoReady] = useState(false);
    const { t, localePath } = useLanguage();
    const containerRef = useRef<HTMLElement | null>(null);

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

    useEffect(() => {
        if (!videoReady) return;
        const interval = setInterval(() => {
            setVideoIndex((prev) => (prev + 1) % galleryVideos.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [videoReady]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
        >
            {videoReady && (
                <div
                    key={videoIndex}
                    className="absolute inset-0 w-full h-full transition-opacity duration-1000 opacity-30"
                >
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="w-full h-full object-cover"
                        src={galleryVideos[videoIndex]}
                    />
                </div>
            )}

            {/* Modern Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background z-10" />
            <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-background to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-background to-transparent z-10" />

            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <p className="text-white/60 uppercase tracking-[0.3em] text-[10px] font-bold">
                        {t.hero.location}
                    </p>
                </div>

                <h1 className="flex flex-col mb-8">
                    <span className="text-5xl sm:text-7xl md:text-9xl font-black text-white leading-none tracking-tighter uppercase">
                        {t.hero.title1}
                    </span>
                    <span className="text-5xl sm:text-7xl md:text-9xl font-black text-primary leading-none tracking-tighter uppercase -mt-2 sm:-mt-4">
                        {t.hero.title2}
                    </span>
                </h1>

                <p className="text-white/50 text-sm sm:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                    {t.hero.desc}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="https://wa.me/9005488910673"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold w-full sm:w-auto text-center"
                    >
                        {t.hero.cta_whatsapp}
                    </a>
                    <Link
                        href={localePath("/galeri")}
                        className="btn-outline w-full sm:w-auto text-center"
                    >
                        {t.hero.cta_gallery}
                    </Link>
                </div>

                {/* Floating Stats */}
                <div className="grid grid-cols-3 gap-8 mt-24 max-w-3xl mx-auto border-t border-white/5 pt-12">
                    <div>
                        <p className="text-2xl sm:text-4xl font-black text-white italic">1000+</p>
                        <p className="text-[10px] uppercase tracking-widest text-white/30 mt-2">{t.hero.stats_customers}</p>
                    </div>
                    <div>
                        <p className="text-2xl sm:text-4xl font-black text-primary italic">5.0</p>
                        <p className="text-[10px] uppercase tracking-widest text-white/30 mt-2">{t.hero.stats_rating}</p>
                    </div>
                    <div>
                        <p className="text-2xl sm:text-4xl font-black text-white italic">12+</p>
                        <p className="text-[10px] uppercase tracking-widest text-white/30 mt-2">{t.hero.stats_experience}</p>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold rotate-90 mb-8 origin-center">{t.hero.explore}</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
            </div>
        </section>
    );
}
