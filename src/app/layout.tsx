import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ConversionTracker from "@/components/ConversionTracker";
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
    default: "JBA Cyprus Tattoo & Piercing | Kuzey Kıbrıs Dövme Salonu",
    template: "%s | JBA Cyprus",
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
    "tattoo studio Kyrenia",
    "Girne dövme",
  ],
  authors: [{ name: "JBA Cyprus Tattoo & Piercing" }],
  creator: "JBA Cyprus Tattoo & Piercing",
  publisher: "JBA Cyprus Tattoo & Piercing",
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
    siteName: "JBA Cyprus Tattoo & Piercing",
    title: "JBA Cyprus Tattoo & Piercing | Kuzey Kıbrıs Dövme Salonu",
    description:
      "Kuzey Kıbrıs'ta profesyonel dövme salonu. Custom tasarım, geleneksel ve modern dövme stilleri. WhatsApp ile hızlı rezervasyon!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JBA Cyprus Tattoo & Piercing - Kuzey Kıbrıs Dövme Salonu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JBA Cyprus Tattoo & Piercing | Girne Dövme & Piercing",
    description:
      "Kuzey Kıbrıs'ın en iyi dövme salonu. Custom tasarım, profesyonel sanatçılar.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "tr-TR": siteUrl,
      "en-US": `${siteUrl}/en`,
      "x-default": siteUrl,
    },
  },
  verification: {
    google: "20b924f3fcd680cd",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "JBA Cyprus",
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TattooParlor"],
  "@id": `${siteUrl}/#organization`,
  name: "JBA Cyprus Tattoo & Piercing",
  alternateName: ["JBA Cyprus", "Cyprus Tattoo Ink", "Cyprus Tattoo"],
  description:
    "Professional tattoo studio in Kyrenia, North Cyprus. Custom designs, realism, fine line, traditional and cover-up tattoos by award-winning artists.",
  url: siteUrl,
  telephone: "+9005488910673",
  priceRange: "$$",
  currenciesAccepted: "EUR, GBP, TRY, USD",
  paymentAccepted: "Cash, Credit Card",
  image: [`${siteUrl}/og-image.png`, `${siteUrl}/logo.png`],
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo.png`,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Emin Alpkaya Sk Şehit Emin Alpkaya Sokak Çelebi Apartmanı No:1",
    addressLocality: "Girne",
    addressRegion: "Kyrenia",
    addressCountry: "CY",
    postalCode: "9000",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "35.3325467",
    longitude: "33.3302902",
  },
  hasMap: "https://maps.app.goo.gl/ZuaX3EaQKwaTyrmbA",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "21:00",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+9005488910673",
      contactType: "customer service",
      availableLanguage: ["Turkish", "English"],
      areaServed: ["CY", "TR", "GB"],
    },
  ],
  sameAs: [
    "https://wa.me/9005488910673",
    "https://www.instagram.com/cyprustatt00",
    "https://maps.app.goo.gl/ZuaX3EaQKwaTyrmbA",
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Girne",
      alternateName: "Kyrenia",
    },
    {
      "@type": "AdministrativeArea",
      name: "North Cyprus",
    },
  ],
  knowsLanguage: ["tr", "en"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tattoo & Piercing Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Tattoo Styles",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Design Tattoo",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Realism Tattoo",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Minimalist & Fine Line Tattoo",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Traditional & Neo-Traditional Tattoo",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Blackwork & Tribal Tattoo",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cover-Up Tattoo",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Piercing",
            },
          },
        ],
      },
    ],
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "JBA Cyprus Tattoo & Piercing",
  inLanguage: ["tr-TR", "en-US"],
  publisher: { "@id": `${siteUrl}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
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
        {/* Google Tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17997372323"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17997372323');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="alternate" hrefLang="tr-TR" href={siteUrl} />
        <link rel="alternate" hrefLang="en-US" href={`${siteUrl}/en`} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
        <meta name="geo.region" content="CY-01" />
        <meta name="geo.placename" content="Girne, Kyrenia" />
        <meta name="geo.position" content="35.3325467;33.3302902" />
        <meta name="ICBM" content="35.3325467, 33.3302902" />
        <meta name="language" content="Turkish, English" />
      </head>
      <body className={`${inter.variable} antialiased bg-[#0a0a0a]`}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <ConversionTracker />
        </LanguageProvider>
      </body>
    </html>
  );
}
