import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Target,
  TrendingUp,
  BarChart3,
  TestTube,
  Layers,
  MousePointer,
} from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeader from "@/components/ui/SectionHeader";
import JsonLd from "@/components/seo/JsonLd";

const lpServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://seasonsezon.co.jp/service/lp",
  name: "LP制作（ランディングページ制作）",
  alternateName: "高CVR LPデザイン・ランディングページ作成",
  provider: {
    "@type": "Organization",
    name: "株式会社セゾン",
    url: "https://seasonsezon.co.jp",
  },
  description:
    "高CVRを実現するLP（ランディングページ）をスピード＆低コストで制作。A/Bテスト・ヒートマップ分析・継続的な改善まで対応。最短1日納品。",
  serviceType: "LP制作・ランディングページ制作",
  areaServed: "JP",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "JPY",
      description: "業界最安値水準。まずは無料相談。",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "LP制作メニュー",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "商品・サービスLP制作" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "採用LPデザイン" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "A/Bテスト・CVR改善" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "広告用LP制作" } },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://seasonsezon.co.jp" },
    { "@type": "ListItem", position: 2, name: "サービス", item: "https://seasonsezon.co.jp/service" },
    { "@type": "ListItem", position: 3, name: "LP制作", item: "https://seasonsezon.co.jp/service/lp" },
  ],
};

export const metadata: Metadata = {
  title: "LP制作（ランディングページ制作）",
  description:
    "AI活用で最短1日納品・業界最安値水準のLP（ランディングページ）制作。高CVRを実現するLPをスピード＆低コストで提供。A/Bテスト・ヒートマップ分析・継続的な改善まで対応。補助金活用で費用負担を軽減可能。",
  keywords: [
    "LP制作",
    "ランディングページ制作",
    "LP制作 格安",
    "LP制作 東京",
    "高CV LP",
    "AI LP制作",
    "コンバージョン率改善",
    "A/Bテスト LP",
    "補助金 LP制作",
    "株式会社セゾン LP",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/service/lp",
  },
  openGraph: {
    title: "LP制作（ランディングページ制作） | 株式会社セゾン",
    description:
      "AI活用で最短1日納品。高CVRランディングページをスピード＆低コストで制作。A/Bテスト・改善対応。",
    url: "https://seasonsezon.co.jp/service/lp",
    type: "website",
  },
};

const features = [
  {
    icon: Layers,
    title: "最短1日納品",
    desc: "AIを活用した超高速制作フローにより、最短1日でLPを公開。広告出稿のタイミングを逃しません。",
  },
  {
    icon: BarChart3,
    title: "業界最安値水準",
    desc: "AI生成を最大活用することで制作コストを大幅圧縮。高品質LPを従来の制作会社の数分の一の価格で提供。",
  },
  {
    icon: Target,
    title: "マーケティング戦略設計",
    desc: "ターゲットペルソナ・訴求軸・競合差別化を徹底的に設計してからLP制作を開始。戦略なきデザインは作りません。",
  },
  {
    icon: TrendingUp,
    title: "CVR最大化設計",
    desc: "ファーストビュー・ベネフィット訴求・CTA配置・フォーム最適化まで、コンバージョンから逆算した構成設計。",
  },
  {
    icon: TestTube,
    title: "A/Bテスト対応",
    desc: "ヘッドラインやCTAのバリエーションを作成しA/Bテストを実施。データに基づいて勝ちパターンを確立。",
  },
  {
    icon: MousePointer,
    title: "継続改善サポート",
    desc: "公開後もデータを見ながら改善を継続。CVRを定期的に測定し、目標達成まで伴走します。",
  },
];

const steps = [
  { num: "01", title: "ヒアリング・戦略設計（最短30分）", desc: "商品・ターゲット・競合・広告媒体を整理し、AIがリアルタイムでLP構成案を提案。その場で方向性を確定します。" },
  { num: "02", title: "AIによる構成・コピー自動生成", desc: "ヒアリング内容をもとにAIが即座に構成・コピーライティングを生成。従来数日かかっていた工程を大幅短縮。" },
  { num: "03", title: "デザイン・コーディング", desc: "AI生成ベースにプロが品質チェック・調整。高速・レスポンシブ・広告トラッキング設定も同時に完了。" },
  { num: "04", title: "確認・即日公開", desc: "ご確認後、最短1日でLP公開。A/Bテスト環境・計測ツールも設定済みでお渡しします。" },
  { num: "05", title: "分析・継続改善", desc: "定期レポートをご提供しながらCVRを継続改善。目標達成まで伴走します。" },
];

const faqs = [
  {
    q: "本当に最短1日でLPを公開できますか？",
    a: "はい、AIを活用した制作フローにより最短1日での納品が可能です。ヒアリング→AI生成→確認→公開を1日で完結。急ぎの広告出稿にも対応します。",
  },
  {
    q: "価格はどのくらいですか？",
    a: "AI活用により従来の制作会社と比べて大幅にコストを抑えています。シンプルなLP1ページから数万円〜、業界最安値水準でご提供。詳細はお見積りにてご確認ください。",
  },
  {
    q: "制作するLPはどの広告媒体にも使えますか？",
    a: "はい。Google・Meta・TikTok・X広告など主要媒体への対応を前提に設計します。媒体ごとに最適化が必要な場合はバリエーション制作も対応します。",
  },
  {
    q: "既存のLPを改善してもらうことはできますか？",
    a: "はい、既存LPの診断・改善にも対応しています。AIで現状分析→改善案生成→即日修正が可能です。スピード対応もお気軽にご相談ください。",
  },
];

export default function LpServicePage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <JsonLd data={lpServiceSchema} />
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
              AI-POWERED LANDING PAGE PRODUCTION
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              最短<span className="text-[#CC2222]">1日納品</span>。<br />
              AI時代の高CVR LP制作
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              AIを最大活用した超高速制作フローで、<br />
              業界最安値水準・最短1日でコンバージョンを最大化するLPをお届け。
            </p>
            {/* バッジ */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["最短1日納品", "AI活用で低コスト", "CVR最大化設計", "広告媒体全対応"].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 text-white/60 text-xs font-medium bg-white/5">
                  {tag}
                </span>
              ))}
            </div>
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

      {/* Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="FEATURES"
              title="LP制作で提供する価値"
              subtitle="デザインを作るだけのLP制作会社とは違います。CVR最大化を目的にした戦略的LP制作。"
            />
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <FadeInSection key={f.title} delay={i * 80}>
                  <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-7 hover:border-[#CC2222]/20 transition-all duration-300 h-full">
                    <div className="w-11 h-11 rounded-xl bg-[#CC2222]/10 border border-[#CC2222]/20 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-[#CC2222]" />
                    </div>
                    <h3 className="text-white font-bold mb-2">{f.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="IDEAL FOR"
              title="こんな課題を解決します"
            />
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "広告費をかけているのにCVRが改善しない",
                "LPのファーストビューで離脱されている",
                "フォーム到達率が低い",
                "競合他社のLPより見劣りしている",
                "A/Bテストを試したことがない",
                "LP公開後に改善をしていない",
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
              title="制作・改善の流れ"
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
              最短1日・業界最安値で<br />高CVR LPを作りましょう
            </h2>
            <p className="text-white/70 text-base mb-10 max-w-xl mx-auto">
              AIを使った超スピード制作で、低コスト・高品質なLPをお届けします。まずはお気軽にご相談ください。
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
