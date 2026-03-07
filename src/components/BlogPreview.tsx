"use client";

import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";
import { useLanguage } from "@/components/LanguageContext";

export default function BlogPreview() {
    const { t, language } = useLanguage();
    // Get latest 3 posts
    const latestPosts = blogPosts.slice(0, 3);

    return (
        <section className="py-24 px-4 bg-surface/30">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row items-end justify-between mb-16 gap-8">
                    <div>
                        <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4">{t.blog_preview.subtitle}</p>
                        <h2 className="text-4xl sm:text-6xl font-black text-white uppercase leading-none">{t.blog_preview.title}</h2>
                    </div>
                    <Link
                        href="/blog"
                        className="text-primary font-bold uppercase tracking-widest text-xs border-b border-primary pb-1 hover:text-white hover:border-white transition-all"
                    >
                        {t.blog_preview.view_all} →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                            <div className="bg-surface rounded-3xl border border-white/5 overflow-hidden transition-all group-hover:border-primary/20 hover:-translate-y-2 duration-500">
                                <div className="aspect-video relative overflow-hidden">
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
                                        <span>{post.readTime[language]}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title[language]}
                                    </h3>
                                    <p className="text-white/40 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {post.description[language]}
                                    </p>
                                    <span className="text-primary text-xs font-black uppercase tracking-widest border-b border-primary/20 group-hover:border-primary transition-all">
                                        {t.blog_preview.read_more}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
