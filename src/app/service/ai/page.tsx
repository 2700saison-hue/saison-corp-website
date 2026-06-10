import type { Metadata } from "next";
import AiServiceContent from "./AiServiceContent";
import JsonLd from "@/components/seo/JsonLd";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://seasonsezon.co.jp" },
    { "@type": "ListItem", position: 2, name: "サービス", item: "https://seasonsezon.co.jp/service" },
    { "@type": "ListItem", position: 3, name: "SoloptiLink AI", item: "https://seasonsezon.co.jp/service/ai" },
  ],
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SoloptiLink AI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description: "日本語で指示するだけで業務システム・コンテンツ・フローを自動生成するAI業務自動化ツール。エンジニア不要・IT知識ゼロで中小企業でも大手企業と同レベルのDXを実現。",
  provider: {
    "@type": "Organization",
    name: "株式会社セゾン",
    url: "https://seasonsezon.co.jp",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "JPY",
    },
  },
  featureList: [
    "日本語による自然言語入力でシステム自動生成",
    "エンジニア不要",
    "業務フロー自動化",
    "コンテンツ自動生成",
    "既存システムとのAPI連携対応",
    "月500万円以上の経費削減実績",
  ],
  screenshot: "https://seasonsezon.co.jp/images/services/soloptilink-ai.jpg",
  url: "https://seasonsezon.co.jp/service/ai",
};

export const metadata: Metadata = {
  title: "AIシステム開発・業務自動化｜SoloptiLink AI｜中小企業向けDX支援",
  description:
    "エンジニア不要・IT知識ゼロでDXを実現。日本語で指示するだけで業務システム・コンテンツ・フローを自動生成するAIツール「SoloptiLink AI」。CRM・顧客管理・問い合わせ自動化など中小企業の業務効率化を一から構築。月500万円以上の経費削減事例あり。コンサル・マーケ・IT企業向けAI導入支援も対応。",
  keywords: [
    "SoloptiLink AI",
    "AI業務自動化",
    "中小企業 DX",
    "AI導入支援",
    "エンジニア不要 システム開発",
    "業務効率化 AI",
    "AI ツール 日本語",
    "DXツール 中小企業",
    "株式会社セゾン AI",
    // ミーティング分析による追加キーワード（ニッチ・長尾）
    "AIシステム開発 中小企業",
    "業務フロー AI自動化",
    "CRM AI構築",
    "問い合わせ自動化 AI",
    "コンサル AI導入",
    "マーケティング AI効率化",
    "東京 AI導入支援",
    "AI 一から構築",
    "業務システム AI開発",
    "IT会社向け AI",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/service/ai",
  },
  openGraph: {
    title: "AIシステム開発・業務自動化 SoloptiLink AI | 株式会社セゾン",
    description:
      "日本語で指示するだけ。エンジニア不要・月500万円以上の経費削減を実現するAI業務自動化ツール。中小企業の業務を一から構築。",
    url: "https://seasonsezon.co.jp/service/ai",
    type: "website",
  },
};

export default function AiServicePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={softwareAppSchema} />
      <AiServiceContent />
    </>
  );
}
