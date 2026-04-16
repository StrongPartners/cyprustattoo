import type { Metadata } from "next";

const siteUrl = "https://cyprustattoo.ink";

export const metadata: Metadata = {
    title: {
        default: "Cyprus Tattoo | The Best Tattoo Studio in North Cyprus (Kyrenia)",
        template: "%s | Cyprus Tattoo",
    },
    description:
        "Professional tattoo studio in Kyrenia, North Cyprus. Custom designs, realism, minimalist fine line, traditional and cover-up by award-winning artists. Book via WhatsApp.",
    keywords: [
        "tattoo studio Kyrenia",
        "North Cyprus tattoo",
        "Cyprus tattoo",
        "tattoo artist Cyprus",
        "custom tattoo Cyprus",
        "piercing North Cyprus",
        "tattoo parlor Girne",
        "Kyrenia tattoo",
        "best tattoo studio Cyprus",
    ],
    alternates: {
        canonical: `${siteUrl}/en`,
        languages: {
            "tr-TR": siteUrl,
            "en-US": `${siteUrl}/en`,
            "x-default": siteUrl,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        alternateLocale: "tr_TR",
        url: `${siteUrl}/en`,
        siteName: "Cyprus Tattoo",
        title: "Cyprus Tattoo | The Best Tattoo Studio in North Cyprus",
        description:
            "Professional tattoo studio in Kyrenia. Custom designs, realism, fine line, traditional. Book via WhatsApp.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Cyprus Tattoo Studio - North Cyprus Tattoo Parlor",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cyprus Tattoo | North Cyprus Tattoo Studio",
        description:
            "Professional tattoo studio in Kyrenia, North Cyprus. Custom designs by award-winning artists.",
        images: ["/og-image.png"],
    },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
    return children;
}
