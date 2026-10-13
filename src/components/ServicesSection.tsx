"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import { featuredWork } from "@/data/assets-data";
import MotionReveal from "@/components/MotionReveal";

export default function ServicesSection() {
    const { t } = useLanguage();
    const img = featuredWork.services;

    const services = [
        { image: img.custom, title: t.services.custom.title, desc: t.services.custom.desc, badge: t.services.custom.badge },
        { image: img.realism, title: t.services.realism.title, desc: t.services.realism.desc },
        { image: img.minimalist, title: t.services.minimalist.title, desc: t.services.minimalist.desc },
        { image: img.traditional, title: t.services.traditional.title, desc: t.services.traditional.desc },
        { image: img.blackwork, title: t.services.blackwork.title, desc: t.services.blackwork.desc },
        { image: img.coverup, title: t.services.coverup.title, desc: t.services.coverup.desc },
    ];

    return (
        <section className="relative overflow-hidden bg-background px-4 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl">
                <MotionReveal>
                    <div className="mb-16 sm:mb-20">
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">{t.services.subtitle}</p>
                        <h2 className="text-4xl font-black uppercase leading-none text-white sm:text-6xl">{t.services.title}</h2>
                    </div>
                </MotionReveal>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, idx) => (
                        <MotionReveal key={idx} delay={(idx % 3) * 0.08}>
                            {/* Real work behind every service: the photo carries the card, the copy sits on a scrim. */}
                            <article className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/5 bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                                {service.badge && (
                                    <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-[10px] font-black uppercase text-black">
                                        {service.badge}
                                    </span>
                                )}
                                <div className="absolute inset-x-0 bottom-0 p-8">
                                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                                        {String(idx + 1).padStart(2, "0")}
                                    </p>
                                    <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-primary">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-white/60">{service.desc}</p>
                                </div>
                            </article>
                        </MotionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
