import type { Metadata } from "next";
import BlogClient from "@/app/blog/BlogClient";

const siteUrl = "https://cyprustattoo.ink";

export const metadata: Metadata = {
    title: "Blog | Cyprus Tattoo - North Cyprus Tattoo Guide",
    description:
        "The most up-to-date insights on North Cyprus tattoo culture, tattoo aftercare, trends, and pricing. Cyprus Tattoo Blog.",
    alternates: {
        canonical: `${siteUrl}/en/blog`,
        languages: {
            "tr-TR": `${siteUrl}/blog`,
            "en-US": `${siteUrl}/en/blog`,
            "x-default": `${siteUrl}/blog`,
        },
    },
};

export default function EnBlogPage() {
    return <BlogClient />;
}
