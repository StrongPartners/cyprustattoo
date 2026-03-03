"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { BlogPost } from "@/data/blog-posts";

export default function BlogPostClient({ post }: { post: BlogPost }) {
    const { t, language } = useLanguage();

    return (
        <article className="min-h-screen bg-background pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-white/40 hover:text-primary text-[10px] uppercase font-bold tracking-[0.2em] mb-12 transition-colors"
                >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    {t.nav.blog}
                </Link>

                {/* Post Header */}
                <header className="mb-16">
                    <div className="flex items-center gap-4 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        <span className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20">{post.category[language]}</span>
                        <span className="text-white/20">|</span>
                        <span className="text-white/40">{post.date}</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.1] mb-12 tracking-tighter">
                        {post.title[language]}
                    </h1>

                    <div className="aspect-[21/9] relative rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
                        <Image
                            src={post.image}
                            alt={post.imageAlt[language]}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    </div>
                </header>

                {/* Post Content */}
                <div className="prose prose-invert max-w-none">
                    {post.content[language].split("\n\n").map((paragraph, idx) => {
                        if (paragraph.startsWith("## ")) {
                            return (
                                <h2 key={idx} className="text-3xl sm:text-4xl font-black text-white mt-20 mb-10 uppercase tracking-tight">
                                    <span className="text-primary mr-4">—</span>
                                    {paragraph.replace("## ", "")}
                                </h2>
                            );
                        }
                        return (
                            <p key={idx} className="text-white/60 text-lg sm:text-xl leading-relaxed mb-8 font-light italic">
                                {paragraph}
                            </p>
                        );
                    })}
                </div>

                {/* Footer CTA */}
                <div className="mt-24 p-12 sm:p-20 bg-surface border border-primary/10 rounded-[3rem] text-center relative overflow-hidden">
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                    <h3 className="text-3xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                        Hayalindeki Dövme İçin
                    </h3>
                    <p className="text-white/40 text-lg mb-12 max-w-lg mx-auto font-light leading-relaxed">
                        Hemen WhatsApp üzerinden bize ulaşın, hayalinizdeki dövmeyi birlikte planlayalım.
                    </p>
                    <a
                        href="https://wa.me/9005488910673"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 bg-primary text-black font-black px-12 py-6 rounded-2xl text-sm uppercase tracking-widest transition-all hover:bg-secondary hover:scale-105 shadow-2xl shadow-primary/20"
                    >
                        WhatsApp İle İletişime Geç
                    </a>
                </div>
            </div>
        </article>
    );
}
