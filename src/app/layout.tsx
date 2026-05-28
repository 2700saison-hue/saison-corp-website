import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import JsonLd from "@/components/seo/JsonLd";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";

const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

const BASE_URL = "https://seasonsezon.co.jp";

export const metadata: Metadata = {
  title: {
    default: "株式会社セゾン | SNS×AI×DXで企業変革を牽引するマーケティングパートナー",
    template: "%s | 株式会社セゾン",
  },
  description:
    "株式会社セゾンは、SNS運用代行・SoloptiLink AI・ホームページ制作・LP制作・公式LINE構築など幅広いデジタルマーケティングを提供。累計100社以上の導入実績。東京都足立区発。無料相談受付中。",
  keywords: [
    "株式会社セゾン",
    "SNS運用代行",
    "SoloptiLink AI",
    "デジタルマーケティング",
    "ホームページ制作",
    "LP制作",
    "公式LINE構築",
    "SNS×AI",
    "DX支援",
    "ドラマ型SNS動画",
    "SNSマーケティング",
    "Instagram運用",
    "中小企業 マーケティング",
    "補助金 SNS運用",
    "古田太陽",
  ],
  authors: [{ name: "株式会社セゾン", url: BASE_URL }],
  creator: "株式会社セゾン",
  publisher: "株式会社セゾン",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: BASE_URL,
    siteName: "株式会社セゾン",
    title: "株式会社セゾン | SNS×AI×DXで企業変革を牽引するマーケティングパートナー",
    description:
      "SNS運用・AI導入・DX支援で企業を変革する伴走者。累計100社以上の実績。無料相談受付中。",
    images: [
      {
        url: `${BASE_URL}/images/services/sns-drama2.jpg`,
        width: 1200,
        height: 630,
        alt: "株式会社セゾン",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社セゾン | SNS×AI×DXで企業変革を牽引するマーケティングパートナー",
    description:
      "SNS運用・AI導入・DX支援で企業を変革する伴走者。累計100社以上の実績。無料相談受付中。",
    images: [`${BASE_URL}/images/services/sns-drama2.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

// グローバルJSON-LD: Organization + WebSite
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "株式会社セゾン",
  alternateName: "SAISON Co., Ltd.",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/images/services/soloptilink-ai.jpg`,
    width: 400,
    height: 400,
  },
  description:
    "SNS運用代行・SoloptiLink AI・ホームページ制作・LP制作・公式LINE構築など幅広いデジタルマーケティングを提供する会社。累計100社以上の導入実績。",
  foundingDate: "2022",
  founders: [
    {
      "@type": "Person",
      name: "古田太陽",
      jobTitle: "代表取締役",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    addressRegion: "東京都",
    addressLocality: "足立区",
  },
  areaServed: "JP",
  serviceType: [
    "SNS運用代行",
    "AIシステム導入支援",
    "ホームページ制作",
    "LP制作",
    "公式LINE構築",
    "PR動画制作",
    "システム開発",
    "補助金申請支援",
    "SNS・AI研修",
  ],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 3,
  },
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Japanese",
    url: `${BASE_URL}/contact`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "株式会社セゾン",
  description:
    "SNS×AI×DXで企業変革を牽引するデジタルマーケティングパートナー",
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/cases?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "ja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`h-full ${notoSerifJP.variable} ${notoSansJP.variable}`}>
      <head>
        <GoogleAnalytics />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="min-h-full flex flex-col bg-[#080808] text-[#F8F8F8]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
