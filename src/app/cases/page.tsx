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

export default function CasesPage() {
  return (
    <div className="bg-[#080808] text-[#F8F8F8] min-h-screen">
      <JsonLd data={breadcrumbSchema} />
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
