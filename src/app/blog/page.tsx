import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
    title: "Blog | JBA Cyprus - Kuzey Kıbrıs Dövme Rehberi",
    description: "Kuzey Kıbrıs dövme kültürü, dövme bakımı, trendler ve fiyatlar hakkında en güncel bilgiler. JBA Cyprus Blog.",
    alternates: { canonical: "https://cyprustattoo.ink/blog" },
};

export default function BlogPage() {
    return <BlogClient />;
}
