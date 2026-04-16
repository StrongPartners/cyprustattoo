import type { Metadata } from "next";
import GaleriClient from "./GaleriClient";

const siteUrl = "https://cyprustattoo.ink";

export const metadata: Metadata = {
    title: "Galeri | Cyprus Tattoo Portföyü - Kuzey Kıbrıs",
    description:
        "Cyprus Tattoo Ink'in Girne'deki portföyünü keşfet. Custom tasarım, realistik, fine line, geleneksel, blackwork ve cover-up çalışmalarımız.",
    alternates: {
        canonical: `${siteUrl}/galeri`,
        languages: {
            "tr-TR": `${siteUrl}/galeri`,
            "en-US": `${siteUrl}/en/galeri`,
            "x-default": `${siteUrl}/galeri`,
        },
    },
};

export default function GaleriPage() {
    return <GaleriClient />;
}
