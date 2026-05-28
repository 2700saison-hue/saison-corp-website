import type { Metadata } from "next";
import AiServiceContent from "./AiServiceContent";
import JsonLd from "@/components/seo/JsonLd";

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
  title: "SoloptiLink AI",
  description:
    "エンジニア不要・IT知識ゼロでDXを実現。日本語で指示するだけで業務システム・コンテンツ・フローを自動生成するAIツール「SoloptiLink AI」。月500万円以上の経費削減事例あり。中小企業でも大手と同じ戦略を。",
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
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/service/ai",
  },
  openGraph: {
    title: "SoloptiLink AI | 株式会社セゾン",
    description:
      "日本語で指示するだけ。エンジニア不要・月500万円以上の経費削減を実現するAI業務自動化ツール。",
    url: "https://seasonsezon.co.jp/service/ai",
    type: "website",
  },
};

export default function AiServicePage() {
  return (
    <>
      <JsonLd data={softwareAppSchema} />
      <AiServiceContent />
    </>
  );
}
