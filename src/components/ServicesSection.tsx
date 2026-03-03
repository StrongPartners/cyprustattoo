"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function ServicesSection() {
    const { t } = useLanguage();

    const services = [
        { icon: "✦", title: t.services.custom.title, desc: t.services.custom.desc, badge: t.services.custom.badge },
        { icon: "◆", title: t.services.realism.title, desc: t.services.realism.desc },
        { icon: "⬡", title: t.services.minimalist.title, desc: t.services.minimalist.desc },
        { icon: "★", title: t.services.traditional.title, desc: t.services.traditional.desc },
        { icon: "◉", title: t.services.blackwork.title, desc: t.services.blackwork.desc },
        { icon: "◈", title: t.services.coverup.title, desc: t.services.coverup.desc },
    ];

    return (
        <section className="py-24 px-4 bg-background relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="mb-20">
                    <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4">{t.services.subtitle}</p>
                    <h2 className="text-4xl sm:text-6xl font-black text-white uppercase leading-none">{t.services.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group p-10 bg-surface rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 relative"
                        >
                            {service.badge && (
                                <span className="absolute top-6 right-6 bg-primary text-black text-[10px] font-black uppercase px-3 py-1 rounded-full">
                                    {service.badge}
                                </span>
                            )}
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl text-primary mb-8 group-hover:bg-primary group-hover:text-black transition-all">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-white/40 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
