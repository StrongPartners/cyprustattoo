"use client";

import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";
import { useLanguage } from "@/components/LanguageContext";

export default function BlogClient() {
    const { t, language } = useLanguage();

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
                    {blogPosts.map((post) => (
                        <article key={post.id} className="group bg-surface rounded-3xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2">
                            <Link href={`/blog/${post.slug}`}>
                                <div className="aspect-[16/9] overflow-hidden relative">
                                    <Image
                                        src={post.image}
                                        alt={post.imageAlt[language]}
                                        fill
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
                                        <span>{post.readTime}</span>
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
            </div>
        </div>
    );
}
