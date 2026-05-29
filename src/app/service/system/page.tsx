import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Code2,
  Database,
  ShoppingCart,
  Zap,
  Shield,
  RefreshCw,
} from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeader from "@/components/ui/SectionHeader";
import JsonLd from "@/components/seo/JsonLd";

const systemServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://seasonsezon.co.jp/service/system",
  name: "システム開発・業務システム構築",
  alternateName: "カスタムシステム開発・CRM開発・ECサイト開発",
  provider: {
    "@type": "Organization",
    name: "株式会社セゾン",
    url: "https://seasonsezon.co.jp",
  },
  description:
    "業務管理システム・CRM・ECサイト・自社ツール開発。SoloptiLink AIとの連携でスピード開発を実現。中小企業でも大手企業と同じITインフラを構築可能。",
  serviceType: "システム開発・業務システム構築",
  areaServed: "JP",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "JPY",
      description: "まずは無料相談・無料見積もり。",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "システム開発メニュー",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "業務管理システム開発" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM・顧客管理システム" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ECサイト開発" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI連携システム開発" } },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://seasonsezon.co.jp" },
    { "@type": "ListItem", position: 2, name: "サービス", item: "https://seasonsezon.co.jp/service" },
    { "@type": "ListItem", position: 3, name: "システム開発", item: "https://seasonsezon.co.jp/service/system" },
  ],
};

export const metadata: Metadata = {
  title: "システム開発・業務システム構築",
  description:
    "ビジネスに最適化されたシステム開発。業務管理システム・CRM・ECサイト・自社ツール・基幹システムなどを構築。SoloptiLink AIとの連携でスピード開発を実現。中小企業でも大手企業と同じITインフラを。",
  keywords: [
    "システム開発",
    "業務システム構築",
    "CRM開発",
    "ECサイト開発",
    "受託システム開発 東京",
    "SoloptiLink AI システム",
    "AI システム開発",
    "中小企業 システム開発",
    "株式会社セゾン システム",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/service/system",
  },
  openGraph: {
    title: "システム開発・業務システム構築 | 株式会社セゾン",
    description:
      "業務管理・CRM・ECなどビジネス最適化システムをSoloptiLink AIでスピード開発。",
    url: "https://seasonsezon.co.jp/service/system",
    type: "website",
  },
};

const systemTypes = [
  {
    icon: Database,
    title: "業務管理システム",
    desc: "受注・在庫・請求・勤怠・プロジェクト管理など、業務フローを丸ごとシステム化。Excelからの脱却を支援。",
  },
  {
    icon: Code2,
    title: "CRM・顧客管理システム",
    desc: "顧客情報・商談進捗・コミュニケーション履歴を一元管理。営業効率と顧客満足度を同時に向上。",
  },
  {
    icon: ShoppingCart,
    title: "ECサイト・自社通販",
    desc: "ブランドに最適化したECサイト構築。カート・決済・在庫連携・顧客管理まで一気通貫で開発。",
  },
  {
    icon: Zap,
    title: "SoloptiLink AI連携",
    desc: "SoloptiLink AIとの連携でシステム開発をさらに高速化。AIが自動でコードを生成・改善し続ける次世代の開発体制。",
  },
  {
    icon: Shield,
    title: "セキュリティ・認証システム",
    desc: "二要素認証・権限管理・ログ監査・暗号化など、エンタープライズグレードのセキュリティを標準実装。",
  },
  {
    icon: RefreshCw,
    title: "既存システムのリプレース",
    desc: "レガシーシステムの現代化。データ移行・並行稼働・段階的移行など、リスクを最小化した移行計画を設計。",
  },
];

const steps = [
  { num: "01", title: "要件定義・設計", desc: "業務フローのヒアリングから要件を整理。システム構成・DB設計・UI設計まで詳細に設計します。" },
  { num: "02", title: "プロトタイプ開発", desc: "コア機能を優先してプロトタイプを開発。早期にフィードバックをいただき、認識ズレを防止します。" },
  { num: "03", title: "本開発・テスト", desc: "プロトタイプを基に本開発を進行。単体テスト・結合テスト・ユーザーテストを徹底実施。" },
  { num: "04", title: "リリース・移行支援", desc: "本番環境への移行・データ移行・ユーザー研修まで含めてサポート。安全に切り替えを完了します。" },
  { num: "05", title: "保守・改善", desc: "リリース後も継続して保守・機能追加・パフォーマンス改善を行います。SoloptiLink AIで改善サイクルを加速。" },
];

const faqs = [
  {
    q: "どのくらいの規模から対応できますか？",
    a: "小規模の社内ツール（10万円〜）から大規模エンタープライズシステムまで対応しています。まずは要件をお聞かせください。",
  },
  {
    q: "SoloptiLink AIを使うとどれくらい速くなりますか？",
    a: "通常のシステム開発と比較して、開発期間を最大70%短縮できた事例があります。AIがコード生成・テスト・改善を自動化するため、エンジニアはビジネスロジックの設計に集中できます。",
  },
  {
    q: "クラウド・オンプレミスどちらにも対応できますか？",
    a: "AWS・GCP・Azure等のクラウド環境、および社内サーバーへのオンプレミス導入どちらも対応しています。セキュリティ要件・コスト・運用体制を踏まえて最適な構成をご提案します。",
  },
];

export default function SystemServicePage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <JsonLd data={systemServiceSchema} />
      <JsonLd data={breadcrumbSchema} />
      {/* Hero */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#F8F8F8 1px, transparent 1px), linear-gradient(90deg, #F8F8F8 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#CC2222]/10 blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">
              SYSTEM DEVELOPMENT
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              ビジネスに最適化された<br />
              <span className="text-[#CC2222]">システムを構築</span>
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              業務管理・CRM・ECサイト・自社ツールなど。<br />
              SoloptiLink AIとの連携で従来比最大70%短縮のスピード開発を実現。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#CC2222] text-white font-black text-sm tracking-widest rounded hover:bg-[#E53333] transition-all duration-200 hover:shadow-2xl hover:shadow-[#CC2222]/30"
            >
              無料相談する
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* System Types */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="SERVICES"
              title="開発できるシステムの種類"
              subtitle="業種・規模・用途を問わず、ビジネスの課題に最適化したシステムを構築します。"
            />
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemTypes.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeInSection key={s.title} delay={i * 80}>
                  <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-7 hover:border-[#CC2222]/20 transition-all duration-300 h-full">
                    <div className="w-11 h-11 rounded-xl bg-[#CC2222]/10 border border-[#CC2222]/20 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-[#CC2222]" />
                    </div>
                    <h3 className="text-white font-bold mb-2">{s.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="STRENGTHS"
              title="株式会社セゾンのシステム開発の強み"
            />
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="space-y-3">
              {[
                "SoloptiLink AIとの連携で開発期間を最大70%短縮",
                "AI・SNS・マーケティングとの連携を前提にしたシステム設計",
                "要件定義から保守まで一気通貫の責任体制",
                "IT導入補助金・システム開発補助金の申請サポートも対応",
                "中小企業の予算感に合わせた段階的な開発も可能",
                "リリース後の改善・拡張も継続的にサポート",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-[#0f0f0f] border border-white/5 rounded-xl px-5 py-4"
                >
                  <CheckCircle className="w-4 h-4 text-[#CC2222] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="PROCESS"
              title="開発の流れ"
            />
          </FadeInSection>
          <div className="space-y-5">
            {steps.map((s, i) => (
              <FadeInSection key={s.num} delay={i * 80}>
                <div className="flex gap-6 bg-[#0f0f0f] border border-white/5 rounded-2xl p-7 hover:border-[#CC2222]/20 transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#CC2222]/10 border border-[#CC2222]/20 flex items-center justify-center">
                    <span className="text-[#CC2222] text-lg font-black">{s.num}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <SectionHeader eyebrow="FAQ" title="よくある質問" />
          </FadeInSection>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-7">
                  <p className="text-[#CC2222] text-xs font-bold tracking-widest mb-3">Q</p>
                  <p className="text-white font-bold mb-4">{faq.q}</p>
                  <div className="w-8 h-px bg-white/10 mb-4" />
                  <p className="text-[#C9A84C] text-xs font-bold tracking-widest mb-3">A</p>
                  <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#CC2222] py-20 px-4">
        <FadeInSection>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/70 text-xs font-bold tracking-[0.4em] uppercase mb-4">
              CONTACT
            </p>
            <h2
              className="text-white text-3xl sm:text-4xl font-black mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              業務の課題を、<br />システムで解決しませんか？
            </h2>
            <p className="text-white/70 text-base mb-10 max-w-xl mx-auto">
              どんな機能が必要か整理できていなくても大丈夫です。まずは現状の課題をお聞かせください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#CC2222] font-black text-sm tracking-widest rounded hover:bg-[#F8F8F8] transition-all duration-200 hover:shadow-2xl hover:shadow-black/20"
            >
              無料相談・お問い合わせ
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
