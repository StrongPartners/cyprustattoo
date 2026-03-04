import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/components/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://cyprustattoo.ink";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

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
  manifest: "/manifest.json",
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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
    other: {
      "pinterst-site-verification": ["PLACEHOLDER_FOR_PINTEREST"], // Kullanıcı burayı güncelleyebilir
    },
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
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Cyprus Tattoo",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  "@id": `${siteUrl}/#organization`,
  name: "Cyprus Tattoo",
  description:
    "Kuzey Kıbrıs'ta profesyonel dövme salonu. Custom tasarım, geleneksel ve modern dövme stilleri.",
  url: siteUrl,
  telephone: "+9005488910673",
  priceRange: "$$",
  image: `${siteUrl}/og-image.png`,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo.png`,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kuzey Kıbrıs",
    addressLocality: "Lefkoşa",
    addressRegion: "KKTC",
    addressCountry: "CY",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "35.1856",
    longitude: "33.3823",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "21:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+9005488910673",
    contactType: "customer service",
    availableLanguage: ["Turkish", "English"],
  },
  sameAs: [
    `https://wa.me/9005488910673`,
    "https://www.instagram.com/cyprustattoo", // Varsayılan/Örnek
  ],
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
        <meta name="geo.region" content="CY-01" />
        <meta name="geo.placename" content="Lefkoşa" />
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
