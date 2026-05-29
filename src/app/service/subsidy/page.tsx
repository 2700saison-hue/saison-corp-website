import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Building2,
  DollarSign,
  FileText,
  TrendingUp,
  Clock,
  Shield,
} from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeader from "@/components/ui/SectionHeader";
import JsonLd from "@/components/seo/JsonLd";

const subsidyServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://seasonsezon.co.jp/service/subsidy",
  name: "補助金・助成金申請支援",
  alternateName: "IT導入補助金申請支援・事業再構築補助金申請代行",
  provider: {
    "@type": "Organization",
    name: "株式会社セゾン",
    url: "https://seasonsezon.co.jp",
  },
  description:
    "IT導入補助金・事業再構築補助金・小規模事業者持続化補助金など最大1,000万円以上の補助金獲得をサポート。累計補助金獲得額1億円以上・採択率90%超の実績。",
  serviceType: "補助金申請支援・助成金コンサルティング",
  areaServed: "JP",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "JPY",
      description: "まずは無料相談。採択後成功報酬型も対応。",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "補助金申請支援メニュー",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT導入補助金申請支援" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "事業再構築補助金申請支援" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "小規模事業者持続化補助金" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "申請書類作成・採択後フォロー" } },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://seasonsezon.co.jp" },
    { "@type": "ListItem", position: 2, name: "サービス", item: "https://seasonsezon.co.jp/service" },
    { "@type": "ListItem", position: 3, name: "補助金・助成金申請支援", item: "https://seasonsezon.co.jp/service/subsidy" },
  ],
};

export const metadata: Metadata = {
  title: "補助金・助成金申請支援",
  description:
    "SNS運用・ホームページ制作・IT導入に使える補助金・助成金の申請支援。IT導入補助金・事業再構築補助金・小規模事業者持続化補助金など最大1,000万円以上の補助金獲得をサポート。申請書類作成から採択後フォローまで。",
  keywords: [
    "補助金申請支援",
    "IT導入補助金",
    "事業再構築補助金",
    "小規模事業者持続化補助金",
    "補助金 SNS運用",
    "補助金 ホームページ制作",
    "助成金 中小企業",
    "補助金 IT導入",
    "株式会社セゾン 補助金",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/service/subsidy",
  },
  openGraph: {
    title: "補助金・助成金申請支援 | 株式会社セゾン",
    description:
      "IT導入補助金・事業再構築補助金など最大1,000万円以上の補助金獲得をサポート。",
    url: "https://seasonsezon.co.jp/service/subsidy",
    type: "website",
  },
};

const subsidyTypes = [
  {
    icon: Building2,
    title: "IT導入補助金",
    desc: "中小企業・小規模事業者のITツール・システム導入費用を最大450万円補助。SoloptiLink AI導入やホームページ制作にも活用可能。",
    max: "最大450万円",
  },
  {
    icon: TrendingUp,
    title: "事業再構築補助金",
    desc: "新市場参入・事業転換・業態転換などに取り組む事業者を最大1億円以上の補助金で支援。DX推進・新規事業立ち上げに最適。",
    max: "最大1億円+",
  },
  {
    icon: FileText,
    title: "小規模事業者持続化補助金",
    desc: "販路開拓・業務効率化のための取り組みを最大250万円補助。HP制作・SNS広告・チラシ制作など幅広い用途に活用可能。",
    max: "最大250万円",
  },
  {
    icon: DollarSign,
    title: "人材開発支援助成金",
    desc: "従業員のSNS・AI研修に活用できる助成金。研修費の最大75%を助成。株式会社セゾンの研修プログラムに適用可能。",
    max: "最大75%助成",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "採択実績のある申請書を作成",
    desc: "過去の採択事例を分析した申請書作成。採択率を最大化するための構成・表現を熟知しています。",
  },
  {
    icon: Clock,
    title: "申請から受給まで伴走",
    desc: "補助金の選定→申請書作成→審査対応→交付申請→実績報告まで、すべての手続きを伴走サポート。",
  },
  {
    icon: TrendingUp,
    title: "自社サービスとの組み合わせ",
    desc: "SNS動画運用・HP制作・AI導入・研修など、補助金を活用して弊社サービスを大幅にお得に導入できます。",
  },
];

const steps = [
  { num: "01", title: "無料相談・補助金診断", desc: "現在の事業内容・課題・実施したい施策をヒアリング。最適な補助金・助成金をご提案します。" },
  { num: "02", title: "申請計画の策定", desc: "採択されやすい事業計画書の構成を設計。補助金の要件に沿った内容に整理します。" },
  { num: "03", title: "申請書作成・提出", desc: "申請書の作成をサポート。提出前に内容を最終確認し、期限に合わせて申請します。" },
  { num: "04", title: "交付決定後の事業実施", desc: "採択・交付決定後に対象の施策を実施。補助事業の範囲内で適切に進めます。" },
  { num: "05", title: "実績報告・補助金受給", desc: "事業完了後の実績報告書の作成をサポート。補助金の受給まで責任を持って伴走します。" },
];

const faqs = [
  {
    q: "補助金はいつでも申請できますか？",
    a: "補助金には公募期間があり、申請できるタイミングが限られています。弊社では最新の公募情報を常時把握しており、最適なタイミングをご案内します。",
  },
  {
    q: "補助金を使ってSNS動画運用を始めることはできますか？",
    a: "はい、小規模事業者持続化補助金などを活用してドラマ型SNS動画運用を導入できるケースがあります。助成金の月10万円前後という費用負担でサービスを開始した事例もあります。",
  },
  {
    q: "採択されなかった場合はどうなりますか？",
    a: "採択保証はできませんが、採択率を高めるための最大限のサポートを行います。不採択の場合は次回公募での再申請や、別の補助金の活用をご提案します。",
  },
];

export default function SubsidyServicePage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <JsonLd data={subsidyServiceSchema} />
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#C9A84C]/10 blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <p className="text-[#C9A84C] text-xs font-bold tracking-[0.4em] uppercase mb-6">
              SUBSIDY SUPPORT
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              最大1,000万円以上の<br />
              <span className="text-[#C9A84C]">補助金獲得</span>をサポート
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              SNS運用・IT導入・AI活用に使える補助金・助成金の申請を徹底サポート。<br />
              月10万円→助成金活用で大幅コスト削減を実現します。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#CC2222] text-white font-black text-sm tracking-widest rounded hover:bg-[#E53333] transition-all duration-200 hover:shadow-2xl hover:shadow-[#CC2222]/30"
            >
              無料診断を受ける
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* Subsidy Types */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="SUBSIDIES"
              title="対応する補助金・助成金"
              subtitle="IT・SNS・DX・人材育成に関連する主要な補助金・助成金に対応しています。"
            />
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {subsidyTypes.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeInSection key={s.title} delay={i * 100}>
                  <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-8 hover:border-[#C9A84C]/20 transition-all duration-300">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#C9A84C]" />
                      </div>
                      <span className="text-[#C9A84C] text-sm font-black">{s.max}</span>
                    </div>
                    <h3
                      className="text-xl font-bold text-white mb-3"
                      style={{ fontFamily: "Noto Serif JP, serif" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="BENEFITS"
              title="株式会社セゾンに依頼する理由"
            />
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <FadeInSection key={b.title} delay={i * 100}>
                  <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-7 text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-[#CC2222]/10 border border-[#CC2222]/20 flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-5 h-5 text-[#CC2222]" />
                    </div>
                    <h3 className="text-white font-bold mb-3 text-sm">{b.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed">{b.desc}</p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Combination */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="COMBINATION"
              title="補助金×セゾンサービスの活用例"
            />
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "IT導入補助金 × SoloptiLink AI導入 → 実質費用を大幅圧縮",
                "持続化補助金 × ホームページ制作 → Webからの集客を低コストで実現",
                "持続化補助金 × ドラマ型SNS動画 → 採用・集客コストを助成金でカバー",
                "人材開発助成金 × SNS・AI研修 → 研修費の最大75%を国が負担",
                "事業再構築補助金 × 新規事業システム開発 → 大型補助で新規事業を加速",
                "持続化補助金 × LP制作 → 広告費と合わせて効果的に投資",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-[#0f0f0f] border border-white/5 rounded-xl px-5 py-4"
                >
                  <CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="PROCESS"
              title="申請サポートの流れ"
            />
          </FadeInSection>
          <div className="space-y-5">
            {steps.map((s, i) => (
              <FadeInSection key={s.num} delay={i * 80}>
                <div className="flex gap-6 bg-[#0f0f0f] border border-white/5 rounded-2xl p-7 hover:border-[#C9A84C]/20 transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center">
                    <span className="text-[#C9A84C] text-lg font-black">{s.num}</span>
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
              使える補助金があるか、<br />無料で診断します
            </h2>
            <p className="text-white/70 text-base mb-10 max-w-xl mx-auto">
              補助金の活用でサービス導入コストを大幅に削減できる可能性があります。まずは無料診断をお申し込みください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#CC2222] font-black text-sm tracking-widest rounded hover:bg-[#F8F8F8] transition-all duration-200 hover:shadow-2xl hover:shadow-black/20"
            >
              無料補助金診断を受ける
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
