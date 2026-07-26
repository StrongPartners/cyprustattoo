import type { Metadata } from "next";
import HakkimizdaClient from "@/app/hakkimizda/HakkimizdaClient";

const siteUrl = "https://cyprustattoo.ink";

export const metadata: Metadata = {
    title: "About | JBA Cyprus Tattoo & Piercing - Kyrenia, North Cyprus",
    description:
        "JBA Cyprus Tattoo & Piercing: 12+ years of professional tattoo experience in Kyrenia, North Cyprus. Hygiene-first, artist-led, custom designs.",
    alternates: {
        canonical: `${siteUrl}/en/hakkimizda`,
        languages: {
            "tr-TR": `${siteUrl}/hakkimizda`,
            "en-US": `${siteUrl}/en/hakkimizda`,
            "x-default": `${siteUrl}/hakkimizda`,
        },
    },
};

export default function EnHakkimizdaPage() {
    return <HakkimizdaClient />;
}
