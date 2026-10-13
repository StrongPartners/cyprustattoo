"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { BlogSummary } from "@/lib/blog-summaries";
import { useLanguage } from "@/components/LanguageContext";

const PAGE = 24;

export default function BlogClient({ posts }: { posts: BlogSummary[] }) {
    const { t, language, localePath } = useLanguage();
    // 300+ cards at once made a 50k-px page; show a page at a time (the sitemap lists every post).
    const [shown, setShown] = useState(PAGE);
    const orderedPosts = posts.slice(0, shown);

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <p className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-4">{t.blog_preview.subtitle}</p>
                    <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 uppercase tracking-tighter">{t.nav.blog}</h1>
                    <div className="w-16 h-1 bg-primary mx-auto" />
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {orderedPosts.map((post) => (
                        <article key={post.id} className="group bg-surface rounded-3xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2">
                            <Link href={localePath(`/blog/${post.slug}`)}>
                                <div className="aspect-[16/9] overflow-hidden relative">
                                    <Image
                                        src={post.image}
                                        alt={post.imageAlt[language]}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-primary text-black text-[10px] font-black uppercase px-3 py-1 rounded-full">
                                        {post.category[language]}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-4 text-white/20 text-[10px] font-bold uppercase tracking-widest mb-4">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-primary/30" />
                                        <span>{post.readTime[language]}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title[language]}
                                    </h2>
                                    <p className="text-white/40 text-sm leading-relaxed mb-8 line-clamp-3">
                                        {post.description[language]}
                                    </p>
                                    <div className="flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest">
                                        {t.blog_preview.read_more}
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>

                {shown < posts.length && (
                    <div className="mt-16 text-center">
                        <button type="button" onClick={() => setShown((n) => n + PAGE)} className="btn-outline">
                            {t.blog_preview.load_more} ({posts.length - shown})
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
