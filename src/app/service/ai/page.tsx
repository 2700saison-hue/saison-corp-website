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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "SoloptiLink AIとはどんなサービスですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SoloptiLink AIは、日本語で指示するだけで業務システム・コンテンツ・フローを自動生成するAI業務自動化ツールです。エンジニア不要・IT知識ゼロで中小企業でも大手企業と同レベルのDXを実現できます。CRM構築・問い合わせ自動化・業務フロー最適化など幅広い用途に対応し、月500万円以上の経費削減事例もあります。",
      },
    },
    {
      "@type": "Question",
      name: "AI導入に専門知識は必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "必要ありません。SoloptiLink AIは日本語で指示するだけで動作します。プログラミングやITの専門知識は一切不要です。中小企業の経営者・管理部門のスタッフ・マーケティング担当者など、IT未経験の方でも直感的に使いこなせます。",
      },
    },
    {
      "@type": "Question",
      name: "AI導入でどのくらいコスト削減できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "導入企業の事例では月500万円以上の経費削減を実現したケースがあります。具体的には、手作業で行っていたデータ入力・報告書作成・問い合わせ対応などを自動化することで、人件費と作業時間を大幅に削減できます。業務内容によって効果は異なりますので、まずは無料相談でシミュレーションをご提示します。",
      },
    },
    {
      "@type": "Question",
      name: "既存の業務システムと連携できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、API連携に対応しています。Salesforce・kintone・HubSpot・Slack・ChatworkなどのSaaSツールや、既存の社内システムとの連携が可能です。お使いのシステム環境に合わせてカスタマイズしてご提供します。",
      },
    },
    {
      "@type": "Question",
      name: "AI導入の費用はどのくらいかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "導入内容・規模によって異なります。初回相談・見積もりは完全無料です。IT導入補助金を活用することで実質負担をさらに抑えることも可能です。まずはお問い合わせください。",
      },
    },
    {
      "@type": "Question",
      name: "コンサルティング会社やマーケティング会社でも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、特にコンサル・マーケ・IT業界のお客様に多くご活用いただいています。提案書・レポート自動生成・クライアント管理・データ分析レポート作成など、知識労働の自動化に最適です。自社サービスへのAI組み込み開発にも対応しています。",
      },
    },
  ],
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
    "AI 月500万円削減",
    "kintone AI連携",
    "Salesforce AI自動化",
    "HubSpot AI連携",
    "AI 業務自動化 費用",
    "DX 費用対効果",
    "AI ツール 比較 中小企業",
    "AIシステム 導入事例",
    "ChatGPT 業務活用",
    "生成AI 業務効率化",
    "AI 補助金 IT導入",
    "SoloptiLink 評判",
    "AI 経費削減 実績",
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
    images: [{ url: "https://seasonsezon.co.jp/images/logos/ogp.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIシステム開発・業務自動化 SoloptiLink AI | 株式会社セゾン",
    description: "日本語で指示するだけ。エンジニア不要・月500万円以上の経費削減を実現するAI業務自動化ツール。",
    images: ["https://seasonsezon.co.jp/images/logos/ogp.png"],
  },
};

export default function AiServicePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={softwareAppSchema} />
      <JsonLd data={faqSchema} />
      <AiServiceContent />
    </>
  );
}
