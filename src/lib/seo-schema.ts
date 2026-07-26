import type { BlogPost } from "@/data/blog-posts";

const SITE_URL = "https://cyprustattoo.ink";
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export type Locale = "tr" | "en";

export function buildBlogPostingJsonLd(post: BlogPost, locale: Locale) {
    const urlPath = locale === "en" ? `/en/blog/${post.slug}` : `/blog/${post.slug}`;
    const url = `${SITE_URL}${urlPath}`;
    const image = post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`;

    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
        },
        headline: post.title[locale],
        description: post.description[locale],
        image: [image],
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: locale === "en" ? "en-US" : "tr-TR",
        articleSection: post.category[locale],
        author: {
            "@type": "Organization",
            name: post.author || "JBA Cyprus Tattoo & Piercing",
            url: SITE_URL,
        },
        publisher: {
            "@type": "Organization",
            "@id": ORGANIZATION_ID,
            name: "JBA Cyprus Tattoo & Piercing",
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/logo.png`,
            },
        },
    };
}

export function buildBreadcrumbJsonLd(
    items: { name: string; url: string }[]
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

export function buildFAQPageJsonLd(
    faqs: { question: string; answer: string }[]
) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
            },
        })),
    };
}
