import FadeInSection from "@/components/ui/FadeInSection";
import NewsList from "@/components/news/NewsList";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const newsItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "株式会社セゾン ニュース一覧",
  url: "https://seasonsezon.co.jp/news",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "NewsArticle",
        headline: "株式会社セゾンとして新たに出発いたします",
        datePublished: "2024-11-01",
        publisher: { "@type": "Organization", name: "株式会社セゾン", url: "https://seasonsezon.co.jp" },
        url: "https://seasonsezon.co.jp/news",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "NewsArticle",
        headline: "累計導入企業が100社を突破しました",
        datePublished: "2024-10-15",
        publisher: { "@type": "Organization", name: "株式会社セゾン", url: "https://seasonsezon.co.jp" },
        url: "https://seasonsezon.co.jp/news",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "NewsArticle",
        headline: "SoloptiLink AI をリリースしました",
        datePublished: "2024-09-01",
        publisher: { "@type": "Organization", name: "株式会社セゾン", url: "https://seasonsezon.co.jp" },
        url: "https://seasonsezon.co.jp/news",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://seasonsezon.co.jp" },
    { "@type": "ListItem", position: 2, name: "ニュース", item: "https://seasonsezon.co.jp/news" },
  ],
};

export const metadata: Metadata = {
  title: "ニュース・お知らせ",
  description:
    "株式会社セゾンの最新ニュース・プレスリリース・メディア掲載・サービスアップデートなど。SNS×AI×DXの最新トレンドと共に、セゾンの取り組みをご紹介します。",
  keywords: [
    "株式会社セゾン ニュース",
    "セゾン プレスリリース",
    "SNSマーケティング ニュース",
    "AIマーケティング 最新情報",
    "デジタルマーケティング お知らせ",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/news",
  },
};

export default function NewsPage() {
  return (
    <div className="bg-[#080808] text-[#F8F8F8] min-h-screen">
      <JsonLd data={newsItemListSchema} />
      <JsonLd data={breadcrumbSchema} />
      {/* HERO */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(248,248,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,248,248,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#CC2222] opacity-[0.05] blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">
              NEWS
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              ニュース
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              株式会社セゾンの最新情報をお届けします。
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* クライアントコンポーネント（フィルター＋一覧） */}
      <NewsList />
    </div>
  );
}
