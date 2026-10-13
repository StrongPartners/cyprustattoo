"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredWork } from "@/data/assets-data";
import { useLanguage } from "@/components/LanguageContext";
import MotionReveal from "@/components/MotionReveal";

/**
 * Editorial split: a real portfolio piece beside the studio's statement. This used to be a
 * 250vh pinned scroll-scrub, which left one to two screens of near-black page before the
 * headline assembled — people scrolled past an empty frame. Now everything is on screen as
 * soon as the section is.
 */
export default function ManifestoSection() {
    const { t, localePath } = useLanguage();

    return (
        <section className="relative overflow-hidden bg-background px-4 py-24 sm:py-32">
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[5fr_6fr] lg:gap-20">
                <MotionReveal>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/5">
                        <Image
                            src={featuredWork.manifesto}
                            alt={t.manifesto.eyebrow}
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    </div>
                </MotionReveal>

                <div>
                    <MotionReveal>
                        <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                            {t.manifesto.eyebrow}
                        </p>
                    </MotionReveal>
                    <MotionReveal delay={0.08}>
                        <h2 className="mb-10 flex flex-col text-5xl font-black uppercase leading-[0.92] tracking-tighter text-white sm:text-7xl">
                            <span>{t.manifesto.line1}</span>
                            <span className="italic text-primary">{t.manifesto.line2}</span>
                            <span>{t.manifesto.line3}</span>
                        </h2>
                    </MotionReveal>
                    <MotionReveal delay={0.16}>
                        <p className="mb-12 max-w-xl text-lg font-light leading-relaxed text-white/60 sm:text-xl">
                            {t.manifesto.desc}
                        </p>
                        <Link href={localePath("/galeri")} className="btn-outline inline-block">
                            {t.manifesto.cta}
                        </Link>
                    </MotionReveal>
                </div>
            </div>
        </section>
    );
}
