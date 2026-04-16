import type { Metadata } from "next";
import GaleriClient from "@/app/galeri/GaleriClient";

const siteUrl = "https://cyprustattoo.ink";

export const metadata: Metadata = {
    title: "Gallery | Cyprus Tattoo Portfolio - North Cyprus",
    description:
        "Explore the portfolio of Cyprus Tattoo Ink in Kyrenia. Custom designs, realism, fine line, traditional, blackwork and cover-up tattoos by our artists.",
    alternates: {
        canonical: `${siteUrl}/en/galeri`,
        languages: {
            "tr-TR": `${siteUrl}/galeri`,
            "en-US": `${siteUrl}/en/galeri`,
            "x-default": `${siteUrl}/galeri`,
        },
    },
};

export default function EnGaleriPage() {
    return <GaleriClient />;
}
