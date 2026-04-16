import type { Metadata } from "next";
import IletisimClient from "@/app/iletisim/IletisimClient";
import { buildFAQPageJsonLd } from "@/lib/seo-schema";

const siteUrl = "https://cyprustattoo.ink";

export const metadata: Metadata = {
    title: "Contact | Cyprus Tattoo - Kyrenia, North Cyprus",
    description:
        "Get in touch with Cyprus Tattoo Ink in Kyrenia. WhatsApp, phone, address and directions. Open Mon-Sat 10:00-21:00.",
    alternates: {
        canonical: `${siteUrl}/en/iletisim`,
        languages: {
            "tr-TR": `${siteUrl}/iletisim`,
            "en-US": `${siteUrl}/en/iletisim`,
            "x-default": `${siteUrl}/iletisim`,
        },
    },
};

const faqs = [
    {
        question: "Where is Cyprus Tattoo Ink located?",
        answer:
            "Our studio is in Kyrenia (Girne), North Cyprus: Emin Alpkaya Sk Şehit Emin Alpkaya Sokak Çelebi Apartmanı No:1, Kyrenia 9000.",
    },
    {
        question: "What are your opening hours?",
        answer:
            "We are open Monday to Saturday, 10:00 – 21:00. Sundays by appointment only.",
    },
    {
        question: "How do I book an appointment?",
        answer:
            "The fastest way is WhatsApp at +90 548 891 0673. Share your design idea and reference images — we'll get back to you shortly.",
    },
    {
        question: "Do you charge for consultations?",
        answer:
            "No. Initial consultations are entirely free. Reach out on WhatsApp for concept, sizing and pricing information.",
    },
    {
        question: "Which tattoo styles do you specialise in?",
        answer:
            "We cover custom design, realistic portraits, minimalist fine line, traditional & neo-traditional, blackwork & tribal, and cover-up work.",
    },
    {
        question: "Do you accommodate international clients visiting North Cyprus?",
        answer:
            "Yes. We welcome guests from the UK, Germany, Turkey and beyond, offering appointment scheduling, accommodation tips and bilingual support (Turkish / English).",
    },
];

export default function EnIletisimPage() {
    const jsonLd = buildFAQPageJsonLd(faqs);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <IletisimClient />
        </>
    );
}
