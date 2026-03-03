import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) return { title: "Yazı Bulunamadı" };

    return {
        title: `${post.title} | Cyprus Tattoo Blog`,
        description: post.description,
        alternates: { canonical: `https://cyprustattoo.ink/blog/${post.slug}` },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) notFound();

    return (
        <article className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-white/40 hover:text-[#c9a96e] text-xs uppercase tracking-widest mb-10 transition-colors"
                >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Geri Dön
                </Link>

                {/* Post Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-3 text-[#c9a96e] text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="bg-[#c9a96e]/10 px-2 py-1 rounded">{post.category}</span>
                        <span className="text-white/20">•</span>
                        <span className="text-white/40">{post.date}</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-8">
                        {post.title}
                    </h1>

                    <div className="aspect-video relative rounded-2xl overflow-hidden border border-[#c9a96e]/10">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </header>

                {/* Post Content */}
                <div className="prose prose-invert max-w-none">
                    {post.content.split("\n\n").map((paragraph, idx) => {
                        if (paragraph.startsWith("## ")) {
                            return <h2 key={idx} className="text-2xl font-bold text-[#c9a96e] mt-12 mb-6 uppercase tracking-wide">{paragraph.replace("## ", "")}</h2>;
                        }
                        return (
                            <p key={idx} className="text-white/70 text-lg leading-relaxed mb-6 font-light">
                                {paragraph}
                            </p>
                        );
                    })}
                </div>

                {/* Footer CTA */}
                <div className="mt-20 p-8 sm:p-12 bg-[#111] border border-[#c9a96e]/20 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Kuzey Kıbrıs&apos;ta Dövme İçin En Doğru Adres
                    </h3>
                    <p className="text-white/50 mb-8 max-w-lg mx-auto">
                        Hemen WhatsApp üzerinden bize ulaşın, hayalinizdeki dövmeyi birlikte planlayalım.
                    </p>
                    <a
                        href="https://wa.me/9005488910673?text=Merhaba%2C%20blogdaki%20yaz%C4%B1n%C4%B1z%C4%B1%20okudum%20ve%20rezervasyon%20yapmak%20istiyorum."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#c9a96e] hover:bg-[#e2c88a] text-black font-black px-10 py-4 rounded-lg text-sm uppercase tracking-widest transition-all"
                    >
                        WhatsApp ile İletişime Geç
                    </a>
                </div>
            </div>
        </article>
    );
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}
