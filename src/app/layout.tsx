import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/components/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://cyprustattoo.ink";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cyprus Tattoo | Kuzey Kıbrıs'ın En İyi Dövme Salonu",
    template: "%s | Cyprus Tattoo",
  },
  description:
    "Kuzey Kıbrıs'ta profesyonel dövme salonu. North Cyprus'un en deneyimli dövme sanatçıları ile özel tasarım, custom tattoo ve piercing hizmetleri. KKTC dövme - WhatsApp ile hızlı rezervasyon!",
  keywords: [
    "Kuzey Kıbrıs dövme",
    "North Cyprus tattoo",
    "KKTC dövme salonu",
    "Cyprus tattoo studio",
    "Kıbrıs dövme",
    "tattoo Kuzey Kıbrıs",
    "tattoo studio Cyprus",
    "dövme salonu Kıbrıs",
    "custom tattoo Cyprus",
    "piercing Kuzey Kıbrıs",
    "Kıbrıs dövme sanatçısı",
    "tattoo artist Cyprus",
    "cyprustattoo",
    "dövme KKTC",
    "North Cyprus piercing",
  ],
  authors: [{ name: "Cyprus Tattoo Studio" }],
  creator: "Cyprus Tattoo",
  publisher: "Cyprus Tattoo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "Cyprus Tattoo",
    title: "Cyprus Tattoo | Kuzey Kıbrıs'ın En İyi Dövme Salonu",
    description:
      "Kuzey Kıbrıs'ta profesyonel dövme salonu. Custom tasarım, geleneksel ve modern dövme stilleri. WhatsApp ile hızlı rezervasyon!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cyprus Tattoo Studio - Kuzey Kıbrıs Dövme Salonu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyprus Tattoo | Kuzey Kıbrıs Dövme Salonu",
    description:
      "Kuzey Kıbrıs'ın en iyi dövme salonu. Custom tasarım, profesyonel sanatçılar.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "tr-TR": siteUrl,
      "en-US": `${siteUrl}/en`,
    },
  },
  verification: {
    google: "20b924f3fcd680cd",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Cyprus Tattoo",
  description:
    "Kuzey Kıbrıs'ta profesyonel dövme salonu. Custom tasarım, geleneksel ve modern dövme stilleri.",
  url: siteUrl,
  telephone: "+9005488910673",
  priceRange: "$$",
  image: `${siteUrl}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "CY",
    addressRegion: "Kuzey Kıbrıs",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "21:00",
    },
  ],
  sameAs: [
    `https://wa.me/9005488910673`,
  ],
  hasMap: "https://maps.google.com",
  servesCuisine: "Tattoo & Piercing",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "47",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="geo.region" content="CY" />
        <meta name="geo.placename" content="Kuzey Kıbrıs" />
        <meta name="language" content="Turkish, English" />
      </head>
      <body className={`${inter.variable} antialiased bg-[#0a0a0a]`}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
