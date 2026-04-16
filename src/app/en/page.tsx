import type { Metadata } from "next";
import Home from "@/app/page";

const siteUrl = "https://cyprustattoo.ink";

export const metadata: Metadata = {
    title: "Cyprus Tattoo | The Best Tattoo Studio in North Cyprus (Kyrenia)",
    description:
        "Professional tattoo studio in Kyrenia, North Cyprus. Custom designs, realism, minimalist fine line, traditional and cover-up by award-winning artists. Book via WhatsApp.",
    alternates: {
        canonical: `${siteUrl}/en`,
        languages: {
            "tr-TR": siteUrl,
            "en-US": `${siteUrl}/en`,
            "x-default": siteUrl,
        },
    },
};

export default Home;
