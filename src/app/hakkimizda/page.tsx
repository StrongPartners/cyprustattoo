import type { Metadata } from "next";
import HakkimizdaClient from "./HakkimizdaClient";

const siteUrl = "https://cyprustattoo.ink";

export const metadata: Metadata = {
    title: "Hakkımızda | JBA Cyprus Tattoo & Piercing - Girne, Kuzey Kıbrıs",
    description:
        "JBA Cyprus Tattoo & Piercing: Girne'de 12+ yıllık profesyonel dövme deneyimi. Hijyen öncelikli, sanatçı odaklı, özel tasarımlar.",
    alternates: {
        canonical: `${siteUrl}/hakkimizda`,
        languages: {
            "tr-TR": `${siteUrl}/hakkimizda`,
            "en-US": `${siteUrl}/en/hakkimizda`,
            "x-default": `${siteUrl}/hakkimizda`,
        },
    },
};

export default function HakkimizdaPage() {
    return <HakkimizdaClient />;
}
