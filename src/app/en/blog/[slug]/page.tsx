import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import BlogPostClient from "@/app/blog/[slug]/BlogPostClient";
import { buildBlogPostingJsonLd } from "@/lib/seo-schema";

const siteUrl = "https://cyprustattoo.ink";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title.en} | JBA Cyprus Blog`,
        description: post.description.en,
        alternates: {
            canonical: `${siteUrl}/en/blog/${post.slug}`,
            languages: {
                "tr-TR": `${siteUrl}/blog/${post.slug}`,
                "en-US": `${siteUrl}/en/blog/${post.slug}`,
                "x-default": `${siteUrl}/blog/${post.slug}`,
            },
        },
        openGraph: {
            type: "article",
            locale: "en_US",
            url: `${siteUrl}/en/blog/${post.slug}`,
            title: post.title.en,
            description: post.description.en,
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.image,
                    alt: post.imageAlt.en,
                },
            ],
        },
    };
}

export default async function EnBlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) notFound();

    const jsonLd = buildBlogPostingJsonLd(post, "en");

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
