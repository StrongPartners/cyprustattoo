import type { Metadata } from "next";
import IletisimClient from "./IletisimClient";
import { buildFAQPageJsonLd } from "@/lib/seo-schema";

const siteUrl = "https://cyprustattoo.ink";

export const metadata: Metadata = {
    title: "İletişim | Cyprus Tattoo - Girne, Kuzey Kıbrıs",
    description:
        "Cyprus Tattoo Ink ile iletişime geçin. WhatsApp, telefon, adres ve yol tarifi. Pazartesi–Cumartesi 10:00–21:00.",
    alternates: {
        canonical: `${siteUrl}/iletisim`,
        languages: {
            "tr-TR": `${siteUrl}/iletisim`,
            "en-US": `${siteUrl}/en/iletisim`,
            "x-default": `${siteUrl}/iletisim`,
        },
    },
};

const faqs = [
    {
        question: "Cyprus Tattoo Ink nerede bulunuyor?",
        answer:
            "Stüdyomuz Girne (Kyrenia), Kuzey Kıbrıs'ta yer alıyor: Emin Alpkaya Sk Şehit Emin Alpkaya Sokak Çelebi Apartmanı No:1, Girne 9000.",
    },
    {
        question: "Çalışma saatleriniz nedir?",
        answer:
            "Pazartesi'den Cumartesi'ye 10:00 – 21:00 saatleri arasında hizmet veriyoruz. Pazar günleri randevu ile açığız.",
    },
    {
        question: "Randevu nasıl alabilirim?",
        answer:
            "En hızlı yol WhatsApp üzerinden +90 548 891 0673 numarasından yazmanız. Tasarım fikrinizi ve referans görsellerinizi paylaşın, kısa sürede geri dönüş yapalım.",
    },
    {
        question: "Danışmanlık ücreti alıyor musunuz?",
        answer:
            "Hayır. Hayalindeki dövme için ilk danışmanlık tamamen ücretsizdir. WhatsApp üzerinden konsept, boyut ve fiyatlandırma hakkında bilgi alabilirsiniz.",
    },
    {
        question: "Hangi dövme stillerinde çalışıyorsunuz?",
        answer:
            "Custom tasarım, realistik portre, minimalist fine-line, geleneksel & neo-traditional, blackwork & tribal ve cover-up (eski dövme kapatma) çalışmalarını yapıyoruz.",
    },
    {
        question: "Kuzey Kıbrıs dışından gelen müşteriler için rehberlik sunuyor musunuz?",
        answer:
            "Evet. Türkiye, İngiltere, Almanya başta olmak üzere dünyanın her yerinden gelen misafirlerimize randevu planlaması, konaklama önerisi ve dil desteği (Türkçe / İngilizce) sunuyoruz.",
    },
];

export default function IletisimPage() {
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
