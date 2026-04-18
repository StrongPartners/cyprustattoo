"use client";

import Image from "next/image";
import Link from "next/link";
import { blogPosts, type BlogPost } from "@/data/blog-posts";
import { useLanguage } from "@/components/LanguageContext";

type Props = {
    currentSlug: string;
    categoryTr?: string;
    limit?: number;
};

function pickRelated(
    currentSlug: string,
    categoryTr: string | undefined,
    limit: number
): BlogPost[] {
    const pool = [...blogPosts]
        .filter((p) => p.slug !== currentSlug)
        .sort((a, b) => b.date.localeCompare(a.date));
    const sameCategory = categoryTr
        ? pool.filter((p) => p.category?.tr === categoryTr)
        : [];
    const picked = [...sameCategory];
    const remaining = limit - picked.length;
    if (remaining > 0) {
        const filler = pool
            .filter((p) => !picked.includes(p))
            .slice(0, remaining);
        picked.push(...filler);
    }
    return picked.slice(0, limit);
}

export default function RelatedPosts({ currentSlug, categoryTr, limit = 3 }: Props) {
    const { t, language, localePath } = useLanguage();
    const related = pickRelated(currentSlug, categoryTr, limit);

    if (related.length === 0) return null;

    return (
        <section className="mt-24 pt-16 border-t border-white/5">
            <div className="flex items-end justify-between mb-12 gap-8">
                <div>
                    <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4">
                        {t.blog_preview.subtitle}
                    </p>
                    <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                        {t.blog_preview.title}
                    </h2>
                </div>
                <Link
                    href={localePath("/blog")}
                    className="hidden sm:inline-flex text-primary font-bold uppercase tracking-widest text-xs border-b border-primary pb-1 hover:text-white hover:border-white transition-all"
                >
                    {t.blog_preview.view_all} →
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((post) => (
                    <Link
                        key={post.slug}
                        href={localePath(`/blog/${post.slug}`)}
                        className="group bg-surface rounded-3xl border border-white/5 overflow-hidden transition-all hover:border-primary/20 hover:-translate-y-1 duration-500"
                    >
                        <div className="aspect-video relative overflow-hidden">
                            <Image
                                src={post.image}
                                alt={post.imageAlt[language]}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 bg-primary text-black text-[10px] font-black uppercase px-3 py-1 rounded-full">
                                {post.category[language]}
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-3 text-white/20 text-[10px] font-bold uppercase tracking-widest mb-4">
                                <span>{post.date}</span>
                                <span className="w-1 h-1 rounded-full bg-primary/30" />
                                <span>{post.readTime[language]}</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                {post.title[language]}
                            </h3>
                            <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
                                {post.description[language]}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
