import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Film,
  TrendingUp,
  Users,
  Play,
  BarChart3,
  DollarSign,
  BadgeCheck,
  X,
} from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeader from "@/components/ui/SectionHeader";
import JsonLd from "@/components/seo/JsonLd";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://seasonsezon.co.jp" },
    { "@type": "ListItem", position: 2, name: "サービス", item: "https://seasonsezon.co.jp/service" },
    { "@type": "ListItem", position: 3, name: "SNS運用代行", item: "https://seasonsezon.co.jp/service/sns" },
  ],
};

const snsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://seasonsezon.co.jp/service/sns",
  name: "ドラマ型SNS動画運用・SNS運用代行",
  provider: {
    "@type": "Organization",
    name: "株式会社セゾン",
    url: "https://seasonsezon.co.jp",
  },
  description:
    "プロ舞台役者出演のドラマ型ショート動画を活用したSNS運用代行サービス。採用・集客・ブランディングを強化し、平均ROI195%を実現。累計100社以上の実績。",
  serviceType: "SNSマーケティング",
  areaServed: "JP",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "JPY",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "100",
    bestRating: "5",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SNS運用代行オプション",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Instagram運用代行",
          description: "リール動画・フィード投稿・ストーリーズの企画・制作・投稿",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "TikTok運用代行",
          description: "ドラマ型ショート動画の企画・制作・投稿",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "YouTubeショート運用代行",
          description: "YouTubeショート動画の企画・制作・投稿",
        },
      },
    ],
  },
};

/* ── ギャラリー画像リスト（存在するファイルのみ） ── */
const ROW1 = [
  "13","14","15","16","17","18","19","20",
  "21","22","23","24","25","26","27","28","29","30",
  "atre1","atre2","floom1","floom2","mazasu1","mazasu2",
].map(n => `/images/account/${n}.png`);

const ROW2 = [
  "35","36",
  "quatresaison1","quatresaison2",
  "uratoku1","uratoku2","yamazakigumi1","ymazakigumi2",
  "hamatopi1","hamatopi2","oomugiapp1","oomugiapp2",
  "WORLD FILM IF1","WORLD FILM IF2",
].map(n => `/images/account/${n}.png`);

export const metadata: Metadata = {
  title: "ドラマ型SNS動画運用・SNS運用代行",
  description:
    "累計100社以上のSNS運用実績。プロ舞台役者出演のドラマ型ショート動画で採用・集客・ブランディングを強化。平均ROI195%・年間10名以上の採用・約2億円の売上UP実現。Instagram・TikTok・YouTubeショート対応。",
  keywords: [
    "SNS運用代行",
    "ドラマ型SNS動画",
    "Instagram運用代行",
    "TikTok運用代行",
    "ショート動画 企業",
    "SNS採用",
    "SNS集客",
    "SNSマーケティング 東京",
    "株式会社セゾン SNS",
    "ROI 195% SNS",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/service/sns",
  },
  openGraph: {
    title: "ドラマ型SNS動画運用・SNS運用代行 | 株式会社セゾン",
    description:
      "累計100社以上の実績。ドラマ型ショート動画で平均ROI195%。採用・集客・ブランディング強化。",
    url: "https://seasonsezon.co.jp/service/sns",
    type: "website",
  },
};

const features = [
  {
    icon: Film,
    image: "/images/sns-features/actor.jpg",
    title: "プロ舞台役者出演",
    desc: "一般人との違いが一目瞭然。舞台で鍛えられた役者が御社のストーリーを演じ、視聴者の心を掴む圧倒的な表現力。",
  },
  {
    icon: TrendingUp,
    image: "/images/sns-features/roi.jpg",
    title: "平均ROI 195%",
    desc: "100社以上の実績から算出した平均ROI。投資を大きく上回るリターンを多くの企業が実現している。",
  },
  {
    icon: Users,
    image: "/images/sns-features/hiring.jpg",
    title: "年間10名以上の採用実現",
    desc: "採用難の時代にドラマ動画で企業文化を伝え、応募数・質ともに劇的に改善。年間10名以上の採用を実現した事例多数。",
  },
  {
    icon: BarChart3,
    image: "/images/sns-features/support.jpg",
    title: "企画〜分析フルサポート",
    desc: "ヒアリング・企画・撮影・編集・投稿・分析・改善まで一気通貫。貴社は撮影への協力のみでOK。",
  },
];

const achievements = [
  { label: "運用実績", value: "100社+" },
  { label: "売上UP実績", value: "約2億円" },
  { label: "平均ROI", value: "195%" },
  { label: "年間投稿数", value: "144本" },
];

const clientLogos = [
  "atre","misawahome","saizeriya","famliymart",
  "mazasu","quatresaison","yamazakigumi","worldfilm",
  "aladdin","kintaro","hamatopi","hikari",
  "keamedikaru","rinku","rinkuberu","DARA",
  "DUAL","14","23","mathuya",
].map(n => `/images/実績/${n}.png`);

const platforms = [
  { name: "TikTok", desc: "Z世代・若年層への圧倒的リーチ" },
  { name: "Instagram", desc: "20〜40代女性・ライフスタイル層" },
  { name: "YouTube Shorts", desc: "検索流入・ロングテール施策" },
  { name: "X（旧Twitter）", desc: "バズ・拡散・トレンド活用" },
];

const steps = [
  { num: "01", title: "ヒアリング", desc: "採用・集客・ブランディングなど目的と現状課題を丁寧にヒアリングします。" },
  { num: "02", title: "企画立案", desc: "御社専用のドラマシナリオを制作。競合他社との差別化を設計します。" },
  { num: "03", title: "撮影", desc: "プロ舞台役者・撮影クルーで本格的なドラマ映像を収録。1日撮影で複数本分を制作。" },
  { num: "04", title: "編集・投稿", desc: "各SNSに最適化した形で編集し、最効果的なタイミングで投稿します。" },
  { num: "05", title: "分析・改善", desc: "毎月データを分析してレポートをご提供。PDCAを回し続けて成果を最大化します。" },
];

const problems = [
  {
    problem: "人材確保・採用に苦戦している",
    solution: "年間10名以上採用",
    sub: "採用費約480万円削減",
  },
  {
    problem: "新規顧客・販路開拓がうまくいかない",
    solution: "集客数1000件UP",
    sub: "売上1000万円 ⇒ 2億円",
  },
  {
    problem: "デジタル・DX化できない\n古典的な方法で仕事している",
    solution: "無料AI研修支援",
    sub: "人件費約100万削減",
  },
  {
    problem: "社員の定着が悪い\n教育に時間がかかる（約50人）",
    solution: "離職数9人 ⇒ 3人",
    sub: "約3000万円損失回避",
  },
  {
    problem: "会社の認知度が低い\n良い人脈を増やしたい",
    solution: "年間3000万再生",
    sub: "9件大手獲得",
  },
];

const servicePhases = [
  {
    num: "01", title: "戦略設計", subtitle: "誰に、何を、どうやって",
    items: ["市場分析", "コンセプト設計", "ペルソナ設計", "KPI設定", "経路設計", "炎上対策・体制構築"],
  },
  {
    num: "02", title: "制作戦略", subtitle: "再現性のある集客戦略",
    items: ["勝利の方程式活用", "フォーマット制作", "シリーズ設計", "企画台本作成", "キャラ設計", "ストーリーズ設計"],
  },
  {
    num: "03", title: "制作実行", subtitle: "すべてお任せフルサポート",
    items: ["撮影代行", "編集＆投稿代行", "MEO対策・HP導線", "コメント返信（一部）", "イベント・キャンペーン設計", "SNS広告設計"],
  },
  {
    num: "04", title: "検証改善", subtitle: "成果が出るまで止めないPDCA",
    items: ["レポート分析", "KPIギャップ抽出", "勝利の方程式再設計", "制作内容改善", "コンセプト再構築", "SNS内製化サポート"],
  },
];

const merits = [
  {
    num: "①",
    lead: "100社以上の運用実績で",
    highlight: "平均1年目7名採用・2年目10名以上採用、2億円の売上UP",
    detail: "を実現（25人→50人規模まで対応）",
  },
  {
    num: "②",
    lead: "企画・撮影・編集・投稿・分析まで",
    highlight: "フルサポート 月間12本",
    detail: "サポート",
  },
  {
    num: "③",
    lead: "月12本・ドラマ型動画を",
    highlight: "業界相場の1/10",
    detail: "月額10万円〜で実現",
  },
];

const goodPoints = [
  "制作物や撮影した素材を無償で全て提供",
  "炎上対策やプライバシーの保護を徹底",
  "会社の認知度やブランド力を伸ばすため集客や信頼度UPにもつながる",
  "PR動画、HP制作、研修サポート、福利厚生など幅広いサポートが可能",
  "CGやアニメーションを扱うトップレベルの制作者が実際に制作",
  "採用コンサルがSNS含め採用戦略のサポートを担当",
  "撮影不安もキャスティング含め全て弊社が実施し顔出し無しで運用可能",
];

const faqs = [
  {
    q: "なぜそんなに安いのですか？",
    a: "1日の撮影で複数本を同時収録する独自の仕組みと、自社一貫制作体制により、大幅なコスト削減を実現しています。制作品質は一切妥協せず、プロ舞台役者・専属クルーが担当します。",
  },
  {
    q: "撮影にはどのくらいの時間がかかりますか？",
    a: "通常1日の撮影で複数本分のコンテンツを収録します。ロケ地は弊社で手配するケースがほとんどです。",
  },
  {
    q: "効果が出るまでどのくらいかかりますか？",
    a: "多くの場合、投稿開始から3〜6ヶ月で顕著な変化が現れます。採用への効果は最短1ヶ月の事例もあります。",
  },
];

export default function SnsServicePage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={snsServiceSchema} />
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#CC2222]/12 blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">
              DRAMA-STYLE SNS VIDEO
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              御社特化<br />
              <span className="text-[#CC2222]">ドラマ型ショート動画</span>運用
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              プロ舞台役者が御社のストーリーを演じる。<br />
              100社以上の実績が証明する、圧倒的なROIを実現するSNS運用。
            </p>
            {/* 価格インパクトバッジ */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 mb-10 px-6 py-3 rounded-full border border-[#CC2222]/40 bg-[#CC2222]/8 backdrop-blur-sm">
              <span className="flex items-center gap-1.5 text-[#CC2222] font-black text-sm sm:text-base">
                <DollarSign className="w-4 h-4" />
                月額10万円〜
              </span>
              <span className="hidden sm:block w-px h-4 bg-white/20" />
              <span className="text-white/80 font-bold text-sm">月12本投稿</span>
              <span className="hidden sm:block w-px h-4 bg-white/20" />
              <span className="text-white/80 font-bold text-sm">プロ舞台役者出演</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#CC2222] text-white font-black text-sm tracking-widest rounded hover:bg-[#E53333] transition-all duration-200 hover:shadow-2xl hover:shadow-[#CC2222]/30"
              >
                無料相談する
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInSection>

          {/* Stats */}
          <FadeInSection delay={200}>
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-4xl mx-auto">
              {achievements.map((a) => (
                <div
                  key={a.label}
                  className="bg-[#0f0f0f] border border-white/5 rounded-xl p-6"
                >
                  <p className="text-[#CC2222] text-2xl sm:text-3xl font-black mb-1">{a.value}</p>
                  <p className="text-white/40 text-xs">{a.label}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── WORKS GALLERY ── */}
      <section className="py-20 overflow-hidden bg-[#080808]">
        <FadeInSection>
          <div className="text-center mb-12 px-6">
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-4">WORKS</p>
            <h2
              className="text-3xl sm:text-4xl font-black text-white"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              運用実績の一部
            </h2>
            <p className="text-white/40 text-sm mt-3">
              100社以上のSNSアカウントを運用してきた、リアルな投稿実績
            </p>
          </div>
        </FadeInSection>

        {/* Row 1 — 左へ流れる */}
        <div
          className="overflow-hidden mb-4"
          style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}
        >
          <div
            style={{
              display: "flex",
              width: "max-content",
              animation: "marquee 45s linear infinite",
            }}
          >
            {[...ROW1, ...ROW1].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-2 rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/20 transition-all duration-300"
                style={{ width: 160, height: 284 }}
              >
                <Image
                  src={src}
                  alt={`SNS運用実績 ${i + 1}`}
                  width={160}
                  height={284}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — 右へ流れる */}
        <div
          className="overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}
        >
          <div
            style={{
              display: "flex",
              width: "max-content",
              animation: "marquee 55s linear infinite reverse",
            }}
          >
            {[...ROW2, ...ROW2].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-2 rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/20 transition-all duration-300"
                style={{ width: 160, height: 284 }}
              >
                <Image
                  src={src}
                  alt={`SNS運用実績 ${i + 1}`}
                  width={160}
                  height={284}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        <FadeInSection delay={200}>
          <p className="text-center text-white/20 text-xs mt-8 px-6">
            ※ 掲載は一部です。詳細は無料相談にてご確認いただけます。
          </p>
        </FadeInSection>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="FEATURES"
              title="選ばれる4つの理由"
              subtitle="ただの動画制作会社とは違う。成果にコミットしたドラマ型SNS運用の本質。"
            />
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <FadeInSection key={f.title} delay={i * 100}>
                  <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl overflow-hidden hover:border-[#CC2222]/20 transition-all duration-300">
                    {/* 画像エリア */}
                    <div className="relative w-full aspect-video overflow-hidden">
                      <Image
                        src={f.image}
                        alt={f.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      {/* アイコンバッジ */}
                      <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#CC2222]" />
                      </div>
                    </div>
                    {/* テキストエリア */}
                    <div className="p-6">
                      <h3
                        className="text-xl font-bold text-white mb-3"
                        style={{ fontFamily: "Noto Serif JP, serif" }}
                      >
                        {f.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 課題解決 */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="PROBLEMS & RESULTS"
              title="企業が抱える課題を全て解決"
              subtitle="集客・採用・定着・効率化・認知——5つの課題にセゾンのSNS運用が答えを出す。"
            />
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map((p, i) => (
              <FadeInSection key={i} delay={i * 80}>
                <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 hover:border-[#CC2222]/20 transition-all duration-300">
                  {/* 課題 */}
                  <div className="mb-4">
                    <p className="text-white/30 text-[10px] font-bold tracking-widest mb-2">PROBLEM</p>
                    <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">{p.problem}</p>
                  </div>
                  <div className="w-full h-px bg-[#CC2222]/20 mb-4" />
                  {/* 成果 */}
                  <div>
                    <p className="text-[#CC2222] text-[10px] font-bold tracking-widest mb-2">RESULT</p>
                    <p className="text-white font-black text-xl leading-snug mb-1">{p.solution}</p>
                    <p className="text-[#C9A84C] text-sm font-bold">{p.sub}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* サービス内容 4フェーズ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="SERVICE FLOW"
              title="SNS運用 サービス内容"
              subtitle="以下の業務を一気通貫でコンサル・代行します。"
            />
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicePhases.map((phase, i) => (
              <FadeInSection key={phase.num} delay={i * 80}>
                <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl overflow-hidden h-full">
                  {/* フェーズヘッダー */}
                  <div className="bg-[#CC2222] px-5 py-4">
                    <p className="text-white/70 text-xs font-bold mb-1">PHASE {phase.num}</p>
                    <p className="text-white font-black text-lg leading-tight">{phase.title}</p>
                    <p className="text-white/80 text-xs mt-1">{phase.subtitle}</p>
                  </div>
                  {/* 項目リスト */}
                  <div className="p-5 space-y-2">
                    {phase.items.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#CC2222] flex-shrink-0" />
                        <p className="text-white/70 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* メリット */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="MERITS"
              title="企業様がセゾンを使うメリット"
            />
          </FadeInSection>
          <div className="space-y-5">
            {merits.map((m, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="flex gap-5 bg-[#0f0f0f] border border-white/5 rounded-2xl p-7 hover:border-[#CC2222]/20 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#CC2222]/10 border border-[#CC2222]/20 flex items-center justify-center">
                    <span className="text-[#CC2222] text-lg font-black">{m.num}</span>
                  </div>
                  <p className="text-white/70 text-base leading-relaxed self-center">
                    {m.lead}
                    <span className="text-white font-bold"> {m.highlight}</span>
                    {m.detail}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── なぜ月10万円で実現できるのか ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="WHY SO AFFORDABLE"
              title="なぜ月10万円で実現できるのか"
              subtitle="安いから手を抜く、ではない。仕組みが違う。"
            />
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {/* 他社カード */}
              <div className="relative bg-[#111111] border border-white/10 rounded-2xl p-8 overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20">
                    <X className="w-4 h-4 text-white/40" />
                  </div>
                </div>
                <p className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase mb-5">一般的な相場</p>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-white/40 text-xs mb-1">ドラマ型・役者あり</p>
                    <p className="text-white/70 text-lg font-bold">月8本投稿</p>
                  </div>
                  <div className="w-full h-px bg-white/8" />
                  <div>
                    <p className="text-white/40 text-xs mb-1">月額コスト</p>
                    <p className="text-4xl sm:text-5xl font-black text-white/50 leading-none">
                      100<span className="text-2xl ml-1">万円〜</span>
                    </p>
                  </div>
                </div>
                <p className="text-white/25 text-xs leading-relaxed">
                  プロ役者起用・外注制作のコストが積み重なる
                </p>
              </div>

              {/* セゾンカード */}
              <div className="relative bg-[#1a0a0a] border-2 border-[#CC2222]/60 rounded-2xl p-8 overflow-hidden shadow-[0_0_60px_rgba(204,34,34,0.12)]">
                {/* 相場の1/36バッジ */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 rounded-full bg-[#CC2222] text-white text-[11px] font-black tracking-widest">
                    相場の1/10
                  </div>
                </div>
                <p className="text-[#CC2222] text-xs font-bold tracking-[0.3em] uppercase mb-5">セゾンの仕組み</p>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-white/40 text-xs mb-1">1日撮影で複数本同時収録 + 自社一貫制作</p>
                    <p className="text-white/70 text-lg font-bold">コスト構造が根本的に違う</p>
                  </div>
                  <div className="w-full h-px bg-[#CC2222]/20" />
                  <div>
                    <p className="text-white/40 text-xs mb-1">月額コスト</p>
                    <p className="text-4xl sm:text-5xl font-black text-[#CC2222] leading-none">
                      10<span className="text-2xl ml-1">万円〜</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-[#CC2222] flex-shrink-0" />
                  <p className="text-white/60 text-xs leading-relaxed">
                    制作品質は一切妥協なし。プロ舞台役者・専属クルーが担当
                  </p>
                </div>
              </div>
            </div>

            {/* 差額ハイライト */}
            <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-7 text-center">
              <p className="text-white/40 text-sm mb-3">月あたりの差額</p>
              <p className="text-4xl sm:text-5xl font-black text-white mb-2">
                <span className="text-[#CC2222]">90万円以上</span>の差
              </p>
              <p className="text-white/30 text-sm mt-3">
                「安いから手を抜く、ではない。仕組みが違う。」
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* GOODポイント */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="GOOD POINTS"
              title="セゾンのSNS運用代行 GOODポイント"
            />
          </FadeInSection>
          <div className="space-y-4">
            {goodPoints.map((point, i) => (
              <FadeInSection key={i} delay={i * 60}>
                <div className="flex items-start gap-4 bg-[#0f0f0f] border border-white/5 rounded-xl px-6 py-5 hover:border-[#CC2222]/20 transition-all duration-300">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#CC2222] flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-black">{i + 1}</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{point}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="CLIENTS"
              title="導入実績一覧"
              subtitle="大手から中小まで、100社以上の企業様にご利用いただいています。"
            />
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {clientLogos.map((src, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 flex items-center justify-center"
                  style={{ aspectRatio: "3/2" }}
                >
                  <Image
                    src={src}
                    alt={`クライアントロゴ ${i + 1}`}
                    width={120}
                    height={80}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-white/20 text-xs mt-6">
              ※ 掲載は一部です。その他多数の企業様にご利用いただいています。
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="PLATFORMS"
              title="対応プラットフォーム"
              subtitle="全主要SNSに対応。目的・ターゲットに合わせて最適なプラットフォームを選択します。"
            />
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {platforms.map((p, i) => (
              <FadeInSection key={p.name} delay={i * 80}>
                <div className="flex items-center gap-4 bg-[#0f0f0f] border border-white/5 rounded-xl px-6 py-5">
                  <div className="w-10 h-10 rounded-lg bg-[#CC2222]/10 border border-[#CC2222]/20 flex items-center justify-center flex-shrink-0">
                    <Play className="w-4 h-4 text-[#CC2222]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{p.name}</p>
                    <p className="text-white/40 text-xs mt-0.5">{p.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="HOW IT WORKS"
              title="導入の流れ"
              subtitle="ヒアリングから分析・改善まで、すべて弊社が主導します。"
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
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

      {/* 関連導入事例（内部リンク強化） */}
      <section className="py-20 px-6 bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-4">CASES</p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#F8F8F8] mb-2"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              SNS運用代行の導入事例
            </h2>
            <p className="text-white/40 text-sm mb-10">実際に成果を出した企業の事例をご覧ください</p>
          </FadeInSection>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { slug: "yamazaki-gumi", name: "山﨑組", industry: "建設業", metric: "32倍", metricLabel: "フォロワー成長" },
              { slug: "atre-ebisu", name: "アトレ恵比寿", industry: "商業施設", metric: "5.5倍", metricLabel: "フォロワー成長" },
              { slug: "mazasu", name: "マザアス", industry: "サービス業", metric: "1万人", metricLabel: "7ヶ月で達成" },
            ].map((c, i) => (
              <FadeInSection key={c.slug} delay={i * 80}>
                <Link
                  href={`/cases/${c.slug}`}
                  className="group bg-[#141414] border border-white/[0.06] rounded-2xl p-6 hover:border-[#CC2222]/40 hover:shadow-[0_0_30px_rgba(204,34,34,0.06)] transition-all duration-300 flex flex-col"
                >
                  <span className="text-[#CC2222] text-xs font-bold mb-2">{c.industry}</span>
                  <h3 className="text-white/90 font-bold text-base mb-3 group-hover:text-[#CC2222] transition-colors">{c.name}</h3>
                  <div className="mt-auto">
                    <span className="text-2xl font-black text-[#CC2222]">{c.metric}</span>
                    <span className="text-white/40 text-xs ml-2">{c.metricLabel}</span>
                  </div>
                  <span className="flex items-center gap-1 text-white/30 text-xs mt-3 group-hover:text-[#CC2222] transition-colors">
                    詳しく見る <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </FadeInSection>
            ))}
          </div>
          <FadeInSection delay={300}>
            <div className="text-center mt-8">
              <Link
                href="/cases"
                className="inline-flex items-center gap-2 border border-white/20 text-white/60 text-sm font-bold px-8 py-3 rounded-full hover:border-[#CC2222] hover:text-[#CC2222] transition-all duration-300"
              >
                全ての導入事例を見る <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInSection>
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
              御社の採用・売上を<br />ドラマの力で変えませんか？
            </h2>
            <p className="text-white/70 text-base mb-10 max-w-xl mx-auto">
              まずは無料相談で、貴社に最適なドラマシナリオの方向性をご提案します。
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
