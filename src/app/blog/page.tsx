import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
    title: "Blog | Cyprus Tattoo - Kuzey Kıbrıs Dövme Rehberi",
    description:
        "Kuzey Kıbrıs dövme kültürü, dövme bakımı, trendler ve fiyatlar hakkında en güncel bilgiler. Cyprus Tattoo Blog.",
    alternates: { canonical: "https://cyprustattoo.ink/blog" },
};

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[#c9a96e] uppercase tracking-widest text-xs mb-3">Güncel Yazılar</p>
                    <h1 className="text-5xl sm:text-6xl font-black text-white mb-4 uppercase">BLOG</h1>
                    <div className="w-12 h-0.5 bg-[#c9a96e] mx-auto" />
                    <p className="text-white/40 mt-6 max-w-2xl mx-auto text-sm leading-relaxed">
                        Kuzey Kıbrıs&apos;ta dövme sanatı, bakımı ve trendleri üzerine hazırladığımız
                        profesyonel rehberleri inceleyin.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="group bg-[#111] rounded-xl overflow-hidden border border-[#c9a96e]/10 hover:border-[#c9a96e]/30 transition-all">
                            <Link href={`/blog/${post.slug}`}>
                                <div className="aspect-[16/9] overflow-hidden relative">
                                    <Image
                                        src={post.image}
                                        alt={post.imageAlt}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-[#c9a96e] text-black text-[10px] font-bold uppercase px-2 py-1 rounded">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 text-white/30 text-[10px] uppercase tracking-widest mb-3">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-[#c9a96e]/30" />
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#c9a96e] transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
                                        {post.description}
                                    </p>
                                    <div className="mt-6 flex items-center gap-2 text-[#c9a96e] text-xs font-bold uppercase tracking-widest">
                                        Devamını Oku
                                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
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
