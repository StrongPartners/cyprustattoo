import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import BlogPostClient from "./BlogPostClient";
import { buildBlogPostingJsonLd } from "@/lib/seo-schema";

const siteUrl = "https://cyprustattoo.ink";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) return { title: "Yazı Bulunamadı" };

    return {
        title: `${post.title.tr} | JBA Cyprus Blog`,
        description: post.description.tr,
        alternates: {
            canonical: `${siteUrl}/blog/${post.slug}`,
            languages: {
                "tr-TR": `${siteUrl}/blog/${post.slug}`,
                "en-US": `${siteUrl}/en/blog/${post.slug}`,
                "x-default": `${siteUrl}/blog/${post.slug}`,
            },
        },
        openGraph: {
            type: "article",
            locale: "tr_TR",
            url: `${siteUrl}/blog/${post.slug}`,
            title: post.title.tr,
            description: post.description.tr,
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.image,
                    alt: post.imageAlt.tr,
                },
            ],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) notFound();

    const jsonLd = buildBlogPostingJsonLd(post, "tr");

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogPostClient post={post} />
        </>
    );
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}
