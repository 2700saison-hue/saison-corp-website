import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/seo/JsonLd";
import {
  Zap,
  Film,
  Globe,
  Target,
  Video,
  MessageSquare,
  Code2,
  Building2,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeader from "@/components/ui/SectionHeader";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://seasonsezon.co.jp" },
    { "@type": "ListItem", position: 2, name: "サービス一覧", item: "https://seasonsezon.co.jp/service" },
  ],
};

export const metadata: Metadata = {
  title: "サービス一覧",
  description:
    "株式会社セゾンのサービス一覧。SoloptiLink AI・ドラマ型SNS動画運用・ホームページ制作・LP制作・PR動画・公式LINE構築・システム開発・補助金申請支援・SNS・AI研修。中小企業から大手企業まで幅広く対応。無料相談受付中。",
  keywords: [
    "株式会社セゾン サービス",
    "SNS運用代行",
    "SoloptiLink AI",
    "ホームページ制作",
    "LP制作",
    "公式LINE構築",
    "補助金支援",
    "SNS研修",
    "デジタルマーケティング 東京",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/service",
  },
  openGraph: {
    title: "サービス一覧 | 株式会社セゾン",
    description:
      "SNS×AI×DXのあらゆる施策を一社完結で対応。累計100社以上の実績。無料相談受付中。",
    url: "https://seasonsezon.co.jp/service",
    type: "website",
  },
};

const services = [
  {
    href: "/service/ai",
    icon: Zap,
    image: "/images/services/soloptilink-ai.jpg",
    label: "SoloptiLink AI",
    catch: "1億円の仕事をするAI",
    desc: "たった一言で全システムを開発。月間500万円以上の経費削減実現。リリース2ヶ月で30社以上が導入。",
    badge: "NEW",
    color: "#C9A84C",
  },
  {
    href: "/service/sns",
    icon: Film,
    image: "/images/services/sns-drama2.jpg",
    label: "ドラマ型SNS動画運用",
    catch: "御社特化ドラマ型ショート動画運用",
    desc: "100社以上の運用実績。年間10名以上の採用・約2億円の売上UP実現。平均ROI195%。",
    badge: "人気No.1",
    color: "#CC2222",
  },
  {
    href: "/service/hp",
    icon: Globe,
    image: "/images/services/hp.jpg",
    label: "ホームページ制作",
    catch: "成果に直結するホームページを制作",
    desc: "SEO・デザイン・コンテンツを一気通貫で制作。企業の信頼性とブランド価値を最大化。",
    badge: null,
    color: "#CC2222",
  },
  {
    href: "/service/lp",
    icon: Target,
    image: "/images/services/sns-drama.jpg",
    label: "LP制作",
    catch: "コンバージョンを最大化するLPを制作",
    desc: "マーケティング戦略に基づいた高コンバージョンLP。A/Bテスト・ヒートマップ分析・継続改善対応。",
    badge: null,
    color: "#CC2222",
  },
  {
    href: "/service/pr-movie",
    icon: Video,
    image: "/images/services/pr-movie.jpg",
    label: "PR動画制作",
    catch: "企業の価値を映像で最大化",
    desc: "ブランディング動画・採用動画・商品PR動画など。VFX・CGも対応。大手企業の実績多数。",
    badge: null,
    color: "#CC2222",
  },
  {
    href: "/service/line",
    icon: MessageSquare,
    image: "/images/services/line.jpg",
    label: "公式LINE構築・運用",
    catch: "LINEを最強の集客・採用エンジンに",
    desc: "公式LINE構築から運用まで。配信日売上300%UP・1か月で1000人以上増加など実績あり。",
    badge: null,
    color: "#CC2222",
  },
  {
    href: "/service/system",
    icon: Code2,
    image: "/images/services/system.jpg",
    label: "システム開発",
    catch: "ビジネスに最適化されたシステムを構築",
    desc: "業務管理システム・CRM・ECサイト・自社ツールなど。SoloptiLink AIとの連携でスピード開発。",
    badge: null,
    color: "#CC2222",
  },
  {
    href: "/service/subsidy",
    icon: Building2,
    image: "/images/services/subsidy.jpg",
    label: "補助金・助成金支援",
    catch: "最大1,000万円以上の補助金獲得をサポート",
    desc: "SNS運用・IT導入に活用できる助成金の申請サポート。月10万円→助成金活用で大幅コスト削減。",
    badge: "お得",
    color: "#C9A84C",
  },
  {
    href: "/service/training",
    icon: GraduationCap,
    image: "/images/services/training.jpg",
    label: "SNS・AI研修",
    catch: "社内にSNS・AIのプロを育てる",
    desc: "SNS運用研修・AI活用研修。累計100社以上の現場知識を研修プログラムに凝縮。座学＋実践形式。",
    badge: null,
    color: "#CC2222",
  },
];

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "株式会社セゾン サービス一覧",
  description:
    "株式会社セゾンが提供するSNS×AI×DXサービスの一覧",
  numberOfItems: 9,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "SoloptiLink AI",
      url: "https://seasonsezon.co.jp/service/ai",
      description: "日本語で指示するだけでシステム・コンテンツを自動生成するAI業務自動化ツール",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "ドラマ型SNS動画運用・SNS運用代行",
      url: "https://seasonsezon.co.jp/service/sns",
      description: "プロ舞台役者出演のドラマ型ショート動画による採用・集客・ブランディング強化",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ホームページ制作",
      url: "https://seasonsezon.co.jp/service/hp",
      description: "AI活用で最短1日納品・SEO対策込みのホームページ制作",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "LP制作（ランディングページ制作）",
      url: "https://seasonsezon.co.jp/service/lp",
      description: "高CVRランディングページをスピード＆低コストで制作",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "公式LINE構築・運用代行",
      url: "https://seasonsezon.co.jp/service/line",
      description: "公式LINE構築から運用まで一気通貫でサポート",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "PR動画制作",
      url: "https://seasonsezon.co.jp/service/pr-movie",
      description: "ブランディング動画・採用動画・商品PR動画などプロの映像制作",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "システム開発",
      url: "https://seasonsezon.co.jp/service/system",
      description: "業務管理・CRM・ECサイトなどビジネス最適化システム開発",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "補助金・助成金申請支援",
      url: "https://seasonsezon.co.jp/service/subsidy",
      description: "IT導入補助金・事業再構築補助金など最大1,000万円以上の補助金獲得支援",
    },
    {
      "@type": "ListItem",
      position: 9,
      name: "SNS・AI研修",
      url: "https://seasonsezon.co.jp/service/training",
      description: "100社以上の現場ノウハウを凝縮した実践型SNS・AI企業研修",
    },
  ],
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceListSchema} />
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#F8F8F8 1px, transparent 1px), linear-gradient(90deg, #F8F8F8 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Red glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#CC2222]/10 blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">
              OUR SERVICES
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              企業変革を加速する<br />
              <span className="text-[#CC2222]">9つのサービス</span>
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              AI・SNS・DX領域で累計100社以上の変革を伴走してきた株式会社セゾンが提供する、
              成果にコミットしたサービスラインナップ。
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Service Cards */}
      <section className="pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <FadeInSection key={service.href} delay={i * 80}>
                  <Link
                    href={service.href}
                    className="group relative flex flex-col h-full bg-[#0f0f0f] border border-white/5 rounded-2xl overflow-hidden hover:border-[#CC2222]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#CC2222]/5 hover:-translate-y-1"
                  >
                    {/* サービス画像 */}
                    <div className="relative w-full aspect-video overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.catch}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      {/* グラデーションオーバーレイ */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60" />
                      {/* バッジ */}
                      {service.badge && (
                        <span
                          className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-full backdrop-blur-sm"
                          style={{
                            background: service.color === "#C9A84C" ? "#C9A84C30" : "#CC222230",
                            color: service.color,
                            border: `1px solid ${service.color}60`,
                          }}
                        >
                          {service.badge}
                        </span>
                      )}
                      {/* アイコン */}
                      <div
                        className="absolute bottom-3 left-3 w-9 h-9 rounded-lg flex items-center justify-center backdrop-blur-sm"
                        style={{
                          background: `${service.color}25`,
                          border: `1px solid ${service.color}40`,
                        }}
                      >
                        <Icon className="w-4 h-4" style={{ color: service.color }} />
                      </div>
                    </div>
                    {/* テキスト */}
                    <div className="flex flex-col flex-1 p-6">
                      <p
                        className="text-xs font-bold tracking-[0.3em] uppercase mb-2"
                        style={{ color: service.color }}
                      >
                        {service.label}
                      </p>
                      <h2
                        className="text-lg font-bold text-white mb-3 leading-snug"
                        style={{ fontFamily: "Noto Serif JP, serif" }}
                      >
                        {service.catch}
                      </h2>
                      <p className="text-white/40 text-sm leading-relaxed flex-1">
                        {service.desc}
                      </p>
                      <div className="flex items-center gap-2 mt-5 text-[#CC2222] text-sm font-medium">
                        <span>詳細を見る</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </FadeInSection>
              );
            })}
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
              どのサービスが最適か、<br />無料でご相談ください
            </h2>
            <p className="text-white/70 text-base mb-10 max-w-xl mx-auto">
              まずはお気軽にお問い合わせください。貴社の課題に合わせた最適なプランをご提案します。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#CC2222] font-black text-sm tracking-widest rounded hover:bg-[#F8F8F8] transition-all duration-200 hover:shadow-2xl hover:shadow-black/20"
            >
              無料でお問い合わせする
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
