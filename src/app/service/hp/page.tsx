import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  ArrowRight,
  Globe,
  Smartphone,
  Search,
  Zap,
  BarChart3,
  FileText,
  ExternalLink,
} from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeader from "@/components/ui/SectionHeader";
import JsonLd from "@/components/seo/JsonLd";

const hpServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://seasonsezon.co.jp/service/hp",
  name: "ホームページ制作",
  alternateName: "企業サイト制作・コーポレートサイト制作",
  provider: {
    "@type": "Organization",
    name: "株式会社セゾン",
    url: "https://seasonsezon.co.jp",
  },
  description:
    "AI活用で最短1日納品・業界最安値水準のホームページ制作。SEO対策・デザイン・コンテンツ制作を一気通貫で対応。中小企業・スタートアップ向け。",
  serviceType: "ホームページ制作・Web制作",
  areaServed: "JP",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "JPY",
      description: "最短1日納品。業界最安値水準。まずは無料相談。",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "ホームページ制作メニュー",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "コーポレートサイト制作" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "採用サイト制作" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO対策込みサイト制作" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "LP（ランディングページ）制作" } },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://seasonsezon.co.jp" },
    { "@type": "ListItem", position: 2, name: "サービス", item: "https://seasonsezon.co.jp/service" },
    { "@type": "ListItem", position: 3, name: "ホームページ制作", item: "https://seasonsezon.co.jp/service/hp" },
  ],
};

export const metadata: Metadata = {
  title: "ホームページ制作",
  description:
    "AI活用で最短1日納品・業界最安値水準のホームページ制作。SEO対策・デザイン・コンテンツ制作を一気通貫で対応。中小企業・スタートアップ・個人事業主向け。東京都発。補助金活用で実質負担ゼロも可能。",
  keywords: [
    "ホームページ制作",
    "ホームページ制作 東京",
    "ホームページ制作 格安",
    "AI ホームページ制作",
    "最短1日 ホームページ",
    "SEO対策 ホームページ",
    "中小企業 ホームページ",
    "補助金 ホームページ制作",
    "株式会社セゾン ホームページ",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/service/hp",
  },
  openGraph: {
    title: "ホームページ制作 | 株式会社セゾン",
    description:
      "AI活用で最短1日納品。SEO・デザイン・コンテンツを一気通貫。補助金活用で実質負担を大幅削減。",
    url: "https://seasonsezon.co.jp/service/hp",
    type: "website",
  },
};

const features = [
  {
    icon: Zap,
    title: "最短1日納品",
    desc: "AIを活用した超高速制作フローにより、最短1日でホームページを公開。急ぎの案件・リニューアルにも対応します。",
  },
  {
    icon: BarChart3,
    title: "業界最安値水準",
    desc: "AI生成を最大活用することで制作コストを大幅圧縮。高品質なサイトを従来の制作会社の数分の一の価格で提供。",
  },
  {
    icon: Smartphone,
    title: "レスポンシブデザイン",
    desc: "スマートフォン・タブレット・PCすべてで最適な表示を実現。モバイルファーストの設計で機会損失ゼロ。",
  },
  {
    icon: Search,
    title: "SEO最適化",
    desc: "検索エンジンに評価される構造・コンテンツ・技術SEOを完全対応。公開後から検索流入を最大化。",
  },
  {
    icon: FileText,
    title: "CMS対応",
    desc: "お知らせ・ブログ・実績など、コード不要で更新できるCMS環境を構築。公開後の運用コストを最小化。",
  },
  {
    icon: Globe,
    title: "ブランド価値向上",
    desc: "デザイン・コピーライティング・UXを統合設計。初見の訪問者が「信頼できる会社だ」と感じるサイトを構築。",
  },
];

/* ============================================================
   HP制作実績データ
   url だけ入れればトップページのスクリーンショットが自動表示されます！
   name: サイト名（クライアント名など）
   category: カテゴリ（企業サイト / 採用サイト / ECサイト 等）
   url: 実際のサイトURL（https://〜）
   ============================================================ */
const works = [
  { name: "銀座deホワイトニング", category: "美容・エステ", url: "https://zagin-whitening.com", image: "/images/works/ginza-whitening.png" },
  { name: "Re:Meo", category: "ECサイト", url: "https://remeo.base.shop" },
  { name: "五徳帝王道場", category: "飲食店", url: "https://gotokuteiou.com/", image: "/images/works/gotoku.png" },
  { name: "カワヤマファーム", category: "観光・アウトドア", url: "https://kanna-camp-clone.vercel.app/" },
];

const steps = [
  { num: "01", title: "ヒアリング（最短30分）", desc: "ターゲット・目的・ブランドイメージをヒアリング。AIがリアルタイムでサイト構成案を提案。最短その場で方向性が確定します。" },
  { num: "02", title: "AIによるデザイン自動生成", desc: "ヒアリング内容をもとにAIが即座にデザイン・コピー・構成を生成。従来数週間かかっていたデザイン工程を大幅短縮。" },
  { num: "03", title: "実装・調整", desc: "AI生成ベースに人間のプロが品質チェック・細部調整を実施。SEO・レスポンシブ・CMS設定も同時に完了。" },
  { num: "04", title: "確認・即日公開", desc: "ご確認いただき、修正があれば即対応。最短1日でサイトを公開。アクセス解析ツール設定済みでお渡しします。" },
];

const faqs = [
  {
    q: "本当に最短1日で公開できますか？",
    a: "はい、AIを活用した制作フローにより最短1日での納品が可能です。ヒアリング→AI生成→確認→公開を1日で完結。ただし要件の複雑さによって期間は異なります。まずはお気軽にご相談ください。",
  },
  {
    q: "価格はどのくらいですか？",
    a: "AI活用により従来の制作会社と比べて大幅にコストを抑えています。シンプルなLP・ランディングページは数万円〜、企業サイトも業界最安値水準でご提供。詳細はお見積りにてご確認ください。",
  },
  {
    q: "AIで作ったサイトでもクオリティは大丈夫ですか？",
    a: "AIはあくまで高速化のツール。デザイン・コピー・SEO最適化はプロが必ずチェック・調整します。スピードとクオリティを両立した仕上がりをお届けします。",
  },
  {
    q: "公開後の更新は自分でできますか？",
    a: "はい、CMS導入プランを選択いただければ、コード不要でコンテンツ更新が可能です。操作方法のレクチャーも含まれています。",
  },
  {
    q: "既存サイトのリニューアルも対応できますか？",
    a: "もちろん対応可能です。現状サイトの課題分析から始め、データ移行・SEO引き継ぎも含めてスピード対応します。",
  },
];

export default function HpServicePage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <JsonLd data={hpServiceSchema} />
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
              AI-POWERED WEBSITE PRODUCTION
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              最短<span className="text-[#CC2222]">1日納品</span>。<br />
              AI時代のホームページ制作
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              AIを最大活用した超高速制作フローで、<br />
              業界最安値水準・最短1日で成果に直結するサイトをお届け。
            </p>
            {/* バッジ */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["最短1日納品", "AI活用で低コスト", "SEO完全対応", "スマホ対応"].map((tag) => (
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

      {/* Works Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="WORKS"
              title="制作実績"
              subtitle="セゾンが手がけた実際のホームページ。クリックしてサイトを確認できます。"
            />
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {works.map((w, i) => (
              <FadeInSection key={i} delay={i * 60}>
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-[#0f0f0f] border border-white/5 rounded-2xl overflow-hidden hover:border-[#CC2222]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#CC2222]/10"
                >
                  {/* ブラウザ風クローム */}
                  <div className="bg-[#1a1a1a] px-3 py-2 flex items-center gap-1.5 border-b border-white/5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="ml-2 text-white/20 text-[10px] truncate flex-1">{w.url}</span>
                  </div>
                  {/* URLから自動でトップ画面を表示 */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#141414]">
                    <Image
                      src={w.image ?? `https://s0.wordpress.com/mshots/v1/${encodeURIComponent(w.url)}?w=1280&h=800&vpw=1280&vph=960`}
                      alt={w.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                  {/* 情報 */}
                  <div className="p-4">
                    <p className="text-[#CC2222] text-[10px] font-bold tracking-widest mb-1">{w.category}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-white font-bold text-sm">{w.name}</p>
                      <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-[#CC2222] transition-colors" />
                    </div>
                  </div>
                </a>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="FEATURES"
              title="制作で対応する全機能"
              subtitle="単なるデザイン制作ではない。SEO・速度・CMS・解析まで、成果を出すためのすべてを網羅。"
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

      {/* Why */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="WHY SAISON"
              title="株式会社セゾンが選ばれる理由"
            />
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="space-y-4">
              {[
                "AIを活用した超高速制作で業界唯一の最短1日納品を実現",
                "AI活用により従来の制作会社の数分の一のコストで高品質を提供",
                "SNS運用・SEO・広告との一気通貫対応でマーケティング全体を最適化",
                "SoloptiLink AIとの連携でシステム構築もワンストップ対応",
                "補助金・IT導入補助金活用でさらにコスト削減も可能",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-[#0f0f0f] border border-white/5 rounded-xl px-6 py-4"
                >
                  <CheckCircle className="w-4 h-4 text-[#CC2222] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm leading-relaxed">{item}</span>
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
              title="制作の流れ"
              subtitle="ヒアリングから公開まで、丁寧に進めます。"
            />
          </FadeInSection>
          <div className="space-y-5">
            {steps.map((s, i) => (
              <FadeInSection key={s.num} delay={i * 100}>
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
              最短1日・業界最安値で<br />ホームページを作りましょう
            </h2>
            <p className="text-white/70 text-base mb-10 max-w-xl mx-auto">
              まずはお気軽にご相談ください。AIを使って最速・最安値でご提案します。
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
