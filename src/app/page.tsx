import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  TrendingUp,
  Award,
  BarChart3,
  Cpu,
  Users,
  ArrowRight,
  Play,
  Search,
  Lightbulb,
  Rocket,
  Star,
} from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeader from "@/components/ui/SectionHeader";
import HeroSection from "@/components/sections/HeroSection";
import { teamMembers } from "@/data/team";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const BASE_URL = "https://seasonsezon.co.jp";

export const metadata: Metadata = {
  title: {
    absolute:
      "株式会社セゾン | SNS運用代行・AI導入・DXで企業変革を牽引するパートナー",
  },
  description:
    "株式会社セゾンは、SNS運用代行・SoloptiLink AI・ホームページ制作・LP制作・公式LINE構築を提供するデジタルマーケティング会社。累計100社以上の導入実績。東京都足立区。無料相談・資料請求受付中。",
  keywords: [
    "株式会社セゾン",
    "SNS運用代行",
    "SoloptiLink AI",
    "SNSマーケティング",
    "Instagram運用代行",
    "ホームページ制作 東京",
    "LP制作",
    "公式LINE構築",
    "DX支援 中小企業",
    "AI導入支援",
    "ドラマ型SNS動画",
    "マーケティング支援",
    "古田太陽",
    "セゾン 東京",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "株式会社セゾン | SNS運用代行・AI導入・DXで企業変革を牽引するパートナー",
    description:
      "SNS運用・AI・DXで企業を変革する伴走者。累計100社以上の実績。無料相談受付中。",
    url: BASE_URL,
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: `${BASE_URL}/images/services/sns-drama2.jpg`,
        width: 1200,
        height: 630,
        alt: "株式会社セゾン - SNS×AI×DXマーケティング",
      },
    ],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#localbusiness`,
  name: "株式会社セゾン",
  alternateName: "SAISON Co., Ltd.",
  description:
    "SNS運用代行・SoloptiLink AI・ホームページ制作・LP制作・公式LINE構築など累計100社以上の導入実績を持つデジタルマーケティング会社",
  url: BASE_URL,
  telephone: "090-1251-6837",
  address: {
    "@type": "PostalAddress",
    streetAddress: "新田3-37-12-708",
    addressLocality: "足立区",
    addressRegion: "東京都",
    postalCode: "120-0014",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.7772,
    longitude: 139.8031,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "¥¥",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "87",
    bestRating: "5",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "サービス一覧",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SNS運用代行" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SoloptiLink AI" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ホームページ制作" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "LP制作" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "公式LINE構築・運用" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "PR動画制作" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "株式会社セゾンはどんな会社ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "株式会社セゾンは、SNS運用代行・AI導入支援・ホームページ制作・LP制作・公式LINE構築・補助金申請支援などを提供するデジタルマーケティング会社です。東京都足立区に拠点を置き、累計100社以上の企業変革を支援してきた実績があります。",
      },
    },
    {
      "@type": "Question",
      name: "SNS運用代行の費用はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SNS運用代行の費用はご要望・運用規模・投稿頻度によって異なります。まずは無料相談・無料見積もりにてお気軽にお問い合わせください。補助金・助成金の活用で実質負担を大幅に抑えられる場合があります。",
      },
    },
    {
      "@type": "Question",
      name: "SoloptiLink AIとは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SoloptiLink AIは、株式会社セゾンが提供するAI業務自動化ツールです。日本語で指示するだけで、業務フロー・システム・コンテンツを自動生成します。エンジニア不要で中小企業でも大手企業と同じレベルのDXを実現できます。",
      },
    },
    {
      "@type": "Question",
      name: "導入実績はどのくらいありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "累計100社以上の導入実績があります。アトレ恵比寿・サイゼリヤ・ミサワホーム・ファミリーマートなどの大手企業から中小企業まで、業種を問わず幅広くご支援しています。",
      },
    },
    {
      "@type": "Question",
      name: "相談・見積もりは無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、相談・見積もり・資料請求はすべて無料です。お問い合わせページからお気軽にご連絡ください。",
      },
    },
    {
      "@type": "Question",
      name: "東京以外の企業でも対応できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、全国対応しています。オンラインでの相談・運用管理が可能なため、全国の企業様にご利用いただいています。",
      },
    },
  ],
};

const tickerLogos = [
  { name: "アトレ恵比寿",        image: "/images/実績/atre.png" },
  { name: "サイゼリヤ",          image: "/images/実績/saizeriya.png" },
  { name: "ミサワホーム",        image: "/images/実績/misawahome.png" },
  { name: "ファミリーマート",     image: "/images/実績/famliymart.png" },
  { name: "WORLD FILM",         image: "/images/実績/worldfilm.png" },
  { name: "山﨑組",              image: "/images/実績/yamazakigumi.png" },
  { name: "浜トピ",              image: "/images/実績/hamatopi.png" },
  { name: "キャトルセゾン浜松",   image: "/images/実績/quatresaison.png" },
  { name: "アラジン",            image: "/images/実績/aladdin.png" },
  { name: "ひかり",              image: "/images/実績/hikari.png" },
  { name: "金太郎",              image: "/images/実績/kintaro.png" },
  { name: "マザアス",            image: "/images/実績/mazasu.png" },
  { name: "DARA",                image: "/images/実績/DARA.png" },
  { name: "DUAL",                image: "/images/実績/DUAL.png" },
  { name: "まつ屋",              image: "/images/実績/mathuya.png" },
  { name: "Floom",               image: "/images/実績/23.png" },
];

const results = [
  {
    client: "アトレ恵比寿店様",
    industry: "商業施設・駅ビル",
    metric: "5.5倍",
    metricLabel: "フォロワー成長率",
    detail: "フォロワー2,200→12,000人に成長。月間リーチ+7万回、イベント動員数10〜20%増加を実現。",
    highlights: ["イベント動員数 +10〜20%", "月間リーチ +7万回"],
    accent: "#CC2222",
    image: "/images/account/atre1.png",
    image2: "/images/account/atre2.png",
    logo: "/images/実績/atre.png",
  },
  {
    client: "建設会社 山﨑組様",
    industry: "建設・施工",
    metric: "32倍",
    metricLabel: "フォロワー成長（349→11,287人）",
    detail: "建設業の採用難を克服。Instagram＋LINEの強化で3名採用成功、採用費120万円削減を実現。",
    highlights: ["採用費120万円削減", "3名採用成功"],
    accent: "#C9A84C",
    image: "/images/account/yamazakigumi1.png",
    image2: "/images/account/ymazakigumi2.png",
    logo: "/images/実績/yamazakigumi.png",
  },
  {
    client: "株式会社マザアス様",
    industry: "サービス業",
    metric: "1万人",
    metricLabel: "7ヶ月でフォロワー達成",
    detail: "7ヶ月で1万フォロワーを突破。SNS経由で毎月3〜5件の採用応募を継続的に獲得中。",
    highlights: ["毎月3〜5件の採用応募獲得", "広告費ゼロで継続運用"],
    accent: "#CC2222",
    image: "/images/account/mazasu1.png",
    image2: "/images/account/mazasu2.png",
    logo: "/images/実績/mazasu.png",
  },
];

const steps = [
  {
    number: "01",
    icon: Search,
    title: "現状分析・ヒアリング",
    desc: "御社のビジネス課題・競合・ターゲット・現在の施策を徹底的にヒアリング。数値化できる課題に落とし込みます。",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "戦略設計・提案",
    desc: "100社以上の実績データをもとに、ROIが最大化される最適な施策を設計。明確なKPIとロードマップを提示します。",
  },
  {
    number: "03",
    icon: Rocket,
    title: "実行・伴走・改善",
    desc: "施策の実行から成果測定まで一気通貫で対応。毎月のレポートと改善提案で、数値が出るまで伴走します。",
  },
];

const whySaison = [
  {
    icon: Award,
    title: "大手企業との実績",
    desc: "丸亀製麺・アトレ恵比寿・サイゼリヤなど業界をリードするブランドとの豊富な実績。再現性ある「勝ちパターン」を確立しています。",
    image: "/images/why/why1.jpg",
  },
  {
    icon: BarChart3,
    title: "ROI重視の経営",
    desc: "感覚ではなく数値で判断。投資対効果を常にトレースし、ROI平均195%を実現する戦略的アプローチで成長を加速します。",
    image: "/images/why/why2.jpg",
  },
  {
    icon: Cpu,
    title: "AI×SNS最前線",
    desc: "最新AI技術とSNSマーケティングを組み合わせた独自の運用モデル。時代の変化に先んじた施策を常に提供します。",
    image: "/images/why/why3.jpg",
  },
  {
    icon: Users,
    title: "伴走型サポート",
    desc: "担当者が変わっても品質が下がらない仕組みを構築。数字が出るまで一緒に走り続ける柔軟性と対応力を持つ伴走者です。",
    image: "/images/why/why4.jpg",
  },
];

const otherServices = [
  { label: "ホームページ・LP制作", href: "/service/hp", desc: "高品質なWebサイトで集客を強化", image: "/images/services/hp.jpg" },
  { label: "PR動画制作", href: "/service/pr-movie", desc: "ブランドを伝えるプロ品質の動画", image: "/images/services/pr-movie.jpg" },
  { label: "公式LINE構築・運用", href: "/service/line", desc: "顧客との関係を深めるLINE活用", image: "/images/services/line.jpg" },
  { label: "システム開発", href: "/service/system", desc: "業務効率化のカスタムシステム", image: "/images/services/system.jpg" },
  { label: "補助金・助成金支援", href: "/service/subsidy", desc: "活用できる補助金の申請支援", image: "/images/services/subsidy.jpg" },
  { label: "SNS・AI研修", href: "/service/training", desc: "社内チームのスキルアップ支援", image: "/images/services/training.jpg" },
];

const teamColors = ["#CC2222", "#C9A84C", "#5B7FA6"];
const teamInitials = ["古", "西", "奥"];

export default function HomePage() {
  return (
    <div className="bg-[#080808] text-[#F8F8F8]">
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
      <HeroSection />

      {/* ==============================
          CLIENT LOGO TICKER
      ============================== */}
      <section className="py-10 bg-white border-y border-black/[0.06] overflow-hidden">
        <p className="text-center text-black/40 text-xs font-bold tracking-[0.3em] mb-8">
          導入実績企業
        </p>
        <div className="relative">
          <div className="animate-marquee flex items-center gap-12">
            {[...tickerLogos, ...tickerLogos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-44 h-24 flex items-center justify-center px-4"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={176}
                  height={96}
                  className="w-auto h-20 object-contain opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ==============================
          2 CORE SERVICES
      ============================== */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="OUR CORE SERVICES"
              title="2つのコア事業"
              subtitle="AI×SNS の最前線で、企業の変革を確実に実現する2つの主力ソリューション"
            />
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* SoloptiLink AI */}
            <FadeInSection direction="left" delay={100}>
              <div className="bg-[#141414] border border-white/[0.06] rounded-3xl overflow-hidden hover:border-[#CC2222]/40 transition-all duration-500 hover:shadow-[0_0_60px_rgba(204,34,34,0.08)] h-full flex flex-col group">
                {/* Visual header */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/services/soloptilink-ai.jpg"
                    alt="SoloptiLink AI"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase">SoloptiLink AI</p>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-5 text-[#F8F8F8]" style={{ fontFamily: "Noto Serif JP, serif" }}>
                    AIで大手の戦略を、<br />中小企業でも取れる時代へ
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                    システムを1〜10まで全て開発するAIによって日本中全ての企業が、大規模プラットフォーム開発、月100件以上のリード獲得、AIを活用した自動分析システム開発を可能にします。
                  </p>
                  <div className="space-y-3 mb-10">
                    {[
                      { label: "開発可能規模", value: "100億円以上" },
                      { label: "営業リード獲得", value: "月100件以上" },
                      { label: "導入コスト回収", value: "平均3ヶ月" },
                    ].map((m, i) => (
                      <div key={i} className="flex items-center justify-between border-t border-white/[0.06] pt-3">
                        <span className="text-white/40 text-sm">{m.label}</span>
                        <span className="text-[#CC2222] font-bold text-sm">{m.value}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/service/ai"
                    className="inline-flex items-center justify-center gap-2 bg-[#CC2222]/10 hover:bg-[#CC2222] border border-[#CC2222]/30 hover:border-[#CC2222] text-[#CC2222] hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-sm tracking-wide"
                  >
                    SoloptiLink AI を詳しく見る <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeInSection>

            {/* ドラマ型SNS動画 */}
            <FadeInSection direction="right" delay={100}>
              <div className="bg-[#141414] border border-white/[0.06] rounded-3xl overflow-hidden hover:border-[#C9A84C]/40 transition-all duration-500 hover:shadow-[0_0_60px_rgba(201,168,76,0.08)] h-full flex flex-col group">
                {/* Visual header - video */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/services/sns-drama2.jpg"
                    alt="ドラマ型SNS動画"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <p className="text-[#C9A84C] text-xs font-bold tracking-[0.4em] uppercase">Drama-type SNS Video</p>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-5 text-[#F8F8F8]" style={{ fontFamily: "Noto Serif JP, serif" }}>
                    日本一の動画クオリティを<br />最安値で提供する
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                    ストーリー性のあるドラマ型ショート動画で、ブランドの世界観と訴求力を最大化。
                    再生数ではなく売上に直結するコンテンツで、SNSを事業成長のエンジンに変えます。
                  </p>
                  <div className="space-y-3 mb-10">
                    {[
                      { label: "1万フォロワー", value: "平均７ヶ月" },
                      { label: "平均年間採用人数", value: "10名" },
                      { label: "SNS経由売上UP", value: "最大2億円/年" },
                    ].map((m, i) => (
                      <div key={i} className="flex items-center justify-between border-t border-white/[0.06] pt-3">
                        <span className="text-white/40 text-sm">{m.label}</span>
                        <span className="text-[#C9A84C] font-bold text-sm">{m.value}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/service/sns"
                    className="inline-flex items-center justify-center gap-2 bg-[#C9A84C]/10 hover:bg-[#C9A84C] border border-[#C9A84C]/30 hover:border-[#C9A84C] text-[#C9A84C] hover:text-[#080808] font-bold px-8 py-4 rounded-full transition-all duration-300 text-sm tracking-wide"
                  >
                    ドラマ型SNS動画を詳しく見る <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ==============================
          3-STEP PROCESS
      ============================== */}
      <section className="py-32 px-6 bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="HOW IT WORKS"
              title="3ステップで変革へ"
              subtitle="初回ヒアリングから成果が出るまで、一気通貫でサポートします"
            />
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8 mt-16 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-px bg-gradient-to-r from-[#CC2222]/40 via-[#C9A84C]/40 to-[#CC2222]/40" />

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <FadeInSection key={i} delay={i * 150}>
                  <div className="relative text-center group">
                    {/* Step number */}
                    <div className="relative mx-auto w-32 h-32 mb-8">
                      <div className="absolute inset-0 rounded-full bg-[#CC2222]/5 border border-[#CC2222]/20 group-hover:bg-[#CC2222]/10 transition-all duration-300" />
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#CC2222] flex items-center justify-center text-white font-bold text-xs">
                        {step.number}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="w-12 h-12 text-[#CC2222]/70 group-hover:text-[#CC2222] transition-colors duration-300" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-[#F8F8F8] mb-4" style={{ fontFamily: "Noto Serif JP, serif" }}>
                      {step.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>

          <FadeInSection delay={500}>
            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#CC2222] hover:bg-[#E53333] text-white font-bold px-14 py-6 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(204,34,34,0.4)] text-lg hover:scale-105"
              >
                まずは無料相談する
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ==============================
          RESULTS
      ============================== */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="RESULTS"
              title="お客様の実績"
              subtitle="日本を代表する企業から中小・個人まで、確かな数字を出してきた実績"
            />
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {results.map((r, i) => (
              <FadeInSection key={i} delay={i * 150}>
                <div className="bg-[#141414] border border-white/[0.06] rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.04)] group h-full flex flex-col">
                  {/* SNS account screenshots × 2 */}
                  <div className="relative overflow-hidden flex-shrink-0 bg-[#f5f5f5]" style={{ height: 210 }}>
                    <div className="flex h-full gap-2 px-3 pt-2 pb-10">
                      <div className="relative flex-1 h-full">
                        <Image
                          src={r.image}
                          alt={r.client}
                          fill
                          className="object-contain object-top"
                          sizes="(max-width: 768px) 50vw, 16vw"
                        />
                      </div>
                      <div className="relative flex-1 h-full">
                        <Image
                          src={r.image2}
                          alt={r.client}
                          fill
                          className="object-contain object-top"
                          sizes="(max-width: 768px) 50vw, 16vw"
                        />
                      </div>
                    </div>
                    {/* 下部グラデーション */}
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#141414] to-transparent" />
                    {/* 数値オーバーレイ */}
                    <div className="absolute bottom-3 left-4">
                      <p
                        className="text-3xl font-black leading-none"
                        style={{ color: r.accent, fontFamily: "Noto Serif JP, serif", textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}
                      >
                        {r.metric}
                      </p>
                      <p className="text-white font-bold text-[11px] mt-0.5 tracking-wide" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}>{r.metricLabel}</p>
                    </div>
                    {/* ロゴバッジ */}
                    <div className="absolute top-2 right-2 bg-white rounded-lg px-2.5 py-1.5 shadow-md">
                      <Image
                        src={r.logo}
                        alt={r.client}
                        width={64}
                        height={24}
                        className="h-5 w-auto object-contain"
                      />
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: r.accent }}>
                      {r.industry}
                    </p>
                    <h4 className="text-xl font-bold text-[#F8F8F8] mb-3" style={{ fontFamily: "Noto Serif JP, serif" }}>
                      {r.client}
                    </h4>
                    {/* ハイライトバッジ */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {r.highlights.map((h: string, j: number) => (
                        <span
                          key={j}
                          className="text-xs font-bold px-3 py-1.5 rounded-full border"
                          style={{ color: r.accent, borderColor: `${r.accent}40`, background: `${r.accent}12` }}
                        >
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed flex-1">{r.detail}</p>
                    <div className="mt-6 flex items-center gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-[#C9A84C] text-[#C9A84C]" />
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={500}>
            <div className="text-center mt-14">
              <Link
                href="/cases"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/20 hover:border-[#CC2222] text-[#F8F8F8] hover:text-[#CC2222] font-bold px-12 py-5 rounded-full transition-all duration-300 text-base hover:bg-[#CC2222]/5"
              >
                全ての導入事例を見る <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ==============================
          WHY SAISON
      ============================== */}
      <section className="py-32 px-6 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="WHY SAISON"
              title="セゾンが選ばれる理由"
              subtitle="単なる制作会社ではなく、数値にこだわる経営パートナー"
            />
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {whySaison.map((w, i) => {
              const Icon = w.icon;
              return (
                <FadeInSection key={i} delay={i * 100}>
                  <div className="bg-[#141414] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#CC2222]/30 transition-all duration-300 h-full flex flex-col group">
                    {/* 画像エリア */}
                    <div className="relative h-44 overflow-hidden flex-shrink-0">
                      <Image
                        src={w.image}
                        alt={w.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/20 to-transparent" />
                      {/* アイコンバッジ */}
                      <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-[#CC2222] flex items-center justify-center shadow-lg">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    {/* テキストエリア */}
                    <div className="p-6 flex flex-col flex-1">
                      <h4 className="text-base font-bold text-[#F8F8F8] mb-3" style={{ fontFamily: "Noto Serif JP, serif" }}>
                        {w.title}
                      </h4>
                      <p className="text-white/40 text-sm leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==============================
          MISSION
      ============================== */}
      <section className="py-40 px-6 bg-[#CC2222] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white opacity-[0.03] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#080808] opacity-[0.1] blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeInSection>
            <p className="text-white/50 text-[10px] font-bold tracking-[0.6em] uppercase mb-8">MISSION</p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.35] mb-10"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              激しく移り変わる世界から
              <br />
              誰一人置いていかない
              <br />
              社会を実現する
            </h2>
            <div className="w-20 h-0.5 bg-white/30 mx-auto mb-10" />
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              AIとSNSが当たり前になった時代。
              変化についていけない企業を一社でも多く変革し、
              全ての人が豊かになれる社会をつくります。
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ==============================
          TEAM PREVIEW
      ============================== */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="OUR TEAM"
              title="私たちのチーム"
              subtitle="それぞれの専門領域を持ち、一体となって企業変革を牽引するプロ集団"
            />
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {teamMembers.map((member, i) => (
              <FadeInSection key={i} delay={i * 120}>
                <div className="bg-[#141414] border border-white/[0.06] rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.04)] group">
                  {/* Photo area */}
                  <div className="relative h-64 overflow-hidden">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center text-6xl font-black"
                        style={{ background: `linear-gradient(135deg, ${teamColors[i]}18 0%, #0a0a0a 100%)`, color: teamColors[i], fontFamily: "Noto Serif JP, serif" }}
                      >
                        {teamInitials[i]}
                      </div>
                    )}
                    {/* Gradient overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#141414] to-transparent" />
                    {/* Color accent top bar */}
                    <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: teamColors[i] }} />
                  </div>

                  <div className="p-8">
                    <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: teamColors[i] }}>
                      {member.position}
                    </p>
                    <h4 className="text-xl font-bold text-[#F8F8F8] mb-1" style={{ fontFamily: "Noto Serif JP, serif" }}>
                      {member.name}
                    </h4>
                    <p className="text-white/25 text-xs mb-5">{member.nameRoman}</p>
                    <p
                      className="text-base font-bold mb-5 leading-relaxed"
                      style={{ color: teamColors[i] }}
                    >
                      &ldquo;{member.catchphrase}&rdquo;
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.domains.map((d, j) => (
                        <span
                          key={j}
                          className="text-[10px] px-3 py-1 rounded-full border font-medium"
                          style={{ borderColor: `${teamColors[i]}30`, color: `${teamColors[i]}90` }}
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={400}>
            <div className="text-center mt-12">
              <Link
                href="/about/team"
                className="inline-flex items-center justify-center gap-2 text-white/40 hover:text-white text-sm font-medium transition-colors duration-200 border border-white/10 hover:border-white/30 px-8 py-4 rounded-full"
              >
                チーム全体を見る <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ==============================
          OTHER SERVICES
      ============================== */}
      <section className="py-32 px-6 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="ALL SERVICES"
              title="その他のサービス"
              subtitle="企業変革に必要なすべてのソリューションを一気通貫で提供"
            />
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
            {otherServices.map((s, i) => (
              <FadeInSection key={i} delay={i * 70}>
                <Link
                  href={s.href}
                  className="bg-[#141414] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#CC2222]/50 hover:shadow-[0_0_30px_rgba(204,34,34,0.06)] transition-all duration-300 group flex flex-col"
                >
                  {/* サムネイル画像 */}
                  <div className="relative h-36 overflow-hidden flex-shrink-0">
                    <Image
                      src={s.image}
                      alt={s.label}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/50 to-transparent" />
                  </div>
                  {/* テキストエリア */}
                  <div className="flex items-center gap-4 px-6 py-5">
                    <div className="w-8 h-8 rounded-lg bg-[#CC2222]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#CC2222]/20 transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 text-[#CC2222]" />
                    </div>
                    <div>
                      <p className="font-bold text-white/80 group-hover:text-[#F8F8F8] transition-colors text-sm mb-0.5">
                        {s.label}
                      </p>
                      <p className="text-white/30 text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================
          FINAL CTA
      ============================== */}
      <section className="py-40 px-6 bg-[#CC2222] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white opacity-[0.04] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#080808] opacity-[0.08] blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeInSection>
            <p className="text-white/50 text-[10px] font-bold tracking-[0.6em] uppercase mb-8">GET STARTED TODAY</p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-[1.3]"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              まずは無料相談から
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-14 max-w-xl mx-auto">
              御社の課題をお聞かせください。
              最適な解決策を無料でご提案します。
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#CC2222] font-bold px-14 py-7 rounded-full hover:bg-[#F8F8F8] transition-all duration-300 hover:shadow-[0_15px_50px_rgba(0,0,0,0.25)] text-lg hover:scale-105"
              >
                無料相談を申し込む
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/50 hover:border-white text-white font-bold px-14 py-7 rounded-full transition-all duration-300 text-lg hover:bg-white/10"
              >
                導入事例を見る
              </Link>
            </div>

          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
