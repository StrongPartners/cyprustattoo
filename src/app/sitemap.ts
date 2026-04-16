import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";

const BASE_URL = "https://cyprustattoo.ink";

const STATIC_PAGES = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/galeri", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/hakkimizda", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/iletisim", priority: 0.8, changeFrequency: "monthly" as const },
];

function buildAlternates(path: string) {
    const trUrl = path === "/" ? BASE_URL : `${BASE_URL}${path}`;
    const enUrl = path === "/" ? `${BASE_URL}/en` : `${BASE_URL}/en${path}`;
    return {
        languages: {
            "tr-TR": trUrl,
            "en-US": enUrl,
            "x-default": trUrl,
        },
    };
}

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = STATIC_PAGES.flatMap((page) => {
        const trUrl = page.path === "/" ? BASE_URL : `${BASE_URL}${page.path}`;
        const enUrl = page.path === "/" ? `${BASE_URL}/en` : `${BASE_URL}/en${page.path}`;
        const alternates = buildAlternates(page.path);
        return [
            {
                url: trUrl,
                lastModified: now,
                changeFrequency: page.changeFrequency,
                priority: page.priority,
                alternates,
            },
            {
                url: enUrl,
                lastModified: now,
                changeFrequency: page.changeFrequency,
                priority: Math.max(page.priority - 0.1, 0.1),
                alternates,
            },
        ];
    });

    const blogRoutes: MetadataRoute.Sitemap = blogPosts.flatMap((post) => {
        const trUrl = `${BASE_URL}/blog/${post.slug}`;
        const enUrl = `${BASE_URL}/en/blog/${post.slug}`;
        const postDate = new Date(post.date || now);
        const alternates = {
            languages: {
                "tr-TR": trUrl,
                "en-US": enUrl,
                "x-default": trUrl,
            },
        };
        return [
            {
                url: trUrl,
                lastModified: postDate,
                changeFrequency: "monthly" as const,
                priority: 0.6,
                alternates,
            },
            {
                url: enUrl,
                lastModified: postDate,
                changeFrequency: "monthly" as const,
                priority: 0.5,
                alternates,
            },
        ];
    });

    return [...staticRoutes, ...blogRoutes];
}
