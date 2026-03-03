import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import BlogPostClient from "./BlogPostClient";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) return { title: "Yazı Bulunamadı" };

    return {
        title: `${post.title.tr} | Cyprus Tattoo Blog`,
        description: post.description.tr,
        alternates: { canonical: `https://cyprustattoo.ink/blog/${post.slug}` },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) notFound();

    return <BlogPostClient post={post} />;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}
