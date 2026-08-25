import FadeInSection from "@/components/ui/FadeInSection";
import CasesList from "@/components/cases/CasesList";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://seasonsezon.co.jp" },
    { "@type": "ListItem", position: 2, name: "導入事例", item: "https://seasonsezon.co.jp/cases" },
  ],
};

export const metadata: Metadata = {
  title: "導入事例・実績一覧",
  description:
    "株式会社セゾンの導入事例・実績一覧。アトレ恵比寿・サイゼリヤ・ミサワホーム・ファミリーマートなど大手企業から中小企業まで100社以上。SNS運用でフォロワー32倍・ROI195%・売上2億円UP等の具体的な成果をご紹介。",
  keywords: [
    "SNS運用代行 実績",
    "SNS運用代行 事例",
    "デジタルマーケティング 導入事例",
    "Instagram 運用事例",
    "フォロワー増加 事例",
    "SNS 売上UP 事例",
    "ROI SNSマーケティング",
    "株式会社セゾン 実績",
    "累計100社 SNS",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/cases",
  },
  openGraph: {
    title: "導入事例・実績一覧 | 株式会社セゾン",
    description:
      "100社以上の実績。フォロワー32倍・ROI195%・売上2億円UPなど具体的な成果事例。",
    url: "https://seasonsezon.co.jp/cases",
    type: "website",
  },
};

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "株式会社セゾン 導入事例・お客様の声",
  description: "株式会社セゾンのSNS運用代行・AI導入・ホームページ制作の導入事例一覧",
  numberOfItems: 100,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "SNS運用代行（ドラマ型）",
          provider: { "@type": "Organization", name: "株式会社セゾン" },
        },
        author: { "@type": "Organization", name: "山﨑組", description: "建設・施工会社" },
        reviewBody: "フォロワーが349人から11,287人に増加（32倍）し、採用費を年間120万円削減できました。ドラマ型の動画が若い求職者に刺さり、毎月コンスタントに採用応募が来るようになりました。",
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "SNS運用代行（ドラマ型）",
          provider: { "@type": "Organization", name: "株式会社セゾン" },
        },
        author: { "@type": "Organization", name: "株式会社マザアス", description: "介護・サービス会社" },
        reviewBody: "7ヶ月でInstagramフォロワーが1万人を突破し、毎月3〜5件の採用応募を獲得できるようになりました。介護業界の採用難を克服できています。",
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "SNS運用代行（ドラマ型）",
          provider: { "@type": "Organization", name: "株式会社セゾン" },
        },
        author: { "@type": "Organization", name: "アトレ恵比寿", description: "商業施設" },
        reviewBody: "Instagramフォロワーが2,200人から12,000人（5.5倍）に増加し、月間リーチが7万回以上増加しました。集客力が格段に上がりました。",
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      },
    },
  ],
};

export default function CasesPage() {
  return (
    <div className="bg-[#080808] text-[#F8F8F8] min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={reviewsSchema} />
      {/* HERO */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
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
              CASE STUDIES
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              導入事例
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              大手企業から中小・個人まで、100社以上の変革を牽引してきた実績をご紹介します。
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* クライアントコンポーネント（フィルター＋カード一覧） */}
      <CasesList />
    </div>
  );
}
