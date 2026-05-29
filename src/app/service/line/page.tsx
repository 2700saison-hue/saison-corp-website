import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Users,
  TrendingUp,
  Bell,
  Workflow,
  BarChart3,
} from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeader from "@/components/ui/SectionHeader";
import JsonLd from "@/components/seo/JsonLd";

const lineServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://seasonsezon.co.jp/service/line",
  name: "公式LINE構築・運用代行",
  alternateName: "LINE公式アカウント構築・LINEマーケティング",
  provider: {
    "@type": "Organization",
    name: "株式会社セゾン",
    url: "https://seasonsezon.co.jp",
  },
  description:
    "公式LINEを集客・採用・リピーター獲得の最強エンジンに。構築から運用まで一気通貫サポート。ステップ配信・リッチメニュー設計・配信日売上300%UP実績。",
  serviceType: "公式LINE構築・LINEマーケティング",
  areaServed: "JP",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "JPY",
      description: "まずは無料相談。",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "公式LINE構築メニュー",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "LINE公式アカウント構築" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ステップ配信設計・運用" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "リッチメニュー制作" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "LINE広告運用" } },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://seasonsezon.co.jp" },
    { "@type": "ListItem", position: 2, name: "サービス", item: "https://seasonsezon.co.jp/service" },
    { "@type": "ListItem", position: 3, name: "公式LINE構築・運用代行", item: "https://seasonsezon.co.jp/service/line" },
  ],
};

export const metadata: Metadata = {
  title: "公式LINE構築・運用代行",
  description:
    "公式LINEを集客・採用・リピーター獲得の最強エンジンに変える。構築から運用まで一気通貫サポート。配信日売上300%UP・1か月でLINE友達1,000人以上増加など実績多数。ステップ配信・リッチメニュー設計対応。",
  keywords: [
    "公式LINE構築",
    "LINE運用代行",
    "LINE公式アカウント 構築",
    "LINEマーケティング",
    "ステップ配信 LINE",
    "LINE 集客",
    "LINE 採用",
    "公式LINE 中小企業",
    "株式会社セゾン LINE",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/service/line",
  },
  openGraph: {
    title: "公式LINE構築・運用代行 | 株式会社セゾン",
    description:
      "LINEを集客・採用エンジンに変える。配信日売上300%UP・1か月で友達1,000人増加の実績。",
    url: "https://seasonsezon.co.jp/service/line",
    type: "website",
  },
};

const features = [
  {
    icon: Workflow,
    title: "導線設計・リッチメニュー構築",
    desc: "友だち登録→育成→購買・採用への導線を最適化設計。わかりやすいリッチメニューでユーザーを自然に誘導。",
  },
  {
    icon: Bell,
    title: "配信シナリオ・セグメント配信",
    desc: "ユーザーの属性・行動履歴に基づいたセグメント配信。一斉送信ではなく「刺さる配信」で開封率・CVRを最大化。",
  },
  {
    icon: TrendingUp,
    title: "友だち増加施策",
    desc: "SNS・店頭・Web広告など各接点でのQRコード活用・友だち追加特典設計で友だち数を加速度的に増やす。",
  },
  {
    icon: MessageSquare,
    title: "チャットボット・自動応答",
    desc: "よくある質問への自動回答、予約受付、資料請求対応などをチャットボットで自動化。24時間対応を実現。",
  },
  {
    icon: BarChart3,
    title: "データ分析・改善",
    desc: "ブロック率・開封率・クリック率などを定期分析。PDCAを回しながら継続的に効果を最大化します。",
  },
  {
    icon: Users,
    title: "採用LINEアカウント構築",
    desc: "採用専用LINEアカウントで求職者との距離を縮める。面接率・内定承諾率の向上に直結する採用LINE設計。",
  },
];

const results = [
  { label: "配信日の売上UP", value: "300%" },
  { label: "1か月での友だち増加", value: "1,000人+" },
  { label: "LINE経由の採用コスト削減", value: "60%" },
];

const steps = [
  { num: "01", title: "ヒアリング・目標設定", desc: "集客・採用・顧客育成など目的を明確化。現状の課題と目標KPIを設定します。" },
  { num: "02", title: "アカウント設計・構築", desc: "プロフィール・リッチメニュー・自動応答・シナリオ配信をすべて設計・実装します。" },
  { num: "03", title: "友だち増加施策実行", desc: "SNS・店頭・Web・広告などの各接点で友だち追加を促進する施策を展開します。" },
  { num: "04", title: "配信・運用・改善", desc: "定期配信とデータ分析を繰り返しながら、売上・採用数の最大化を継続的に追求します。" },
];

const faqs = [
  {
    q: "LINEの友だちを集めるにはどうすればいいですか？",
    a: "SNS・店頭・Web広告・ホームページなど複数の接点からの流入設計が重要です。特典設計（クーポン・資料・限定情報など）との組み合わせで友だち追加率を大幅に高めます。",
  },
  {
    q: "既存のLINEアカウントの改善も対応できますか？",
    a: "はい、既存アカウントの現状診断からお手伝いします。リッチメニューの刷新・配信コンテンツの改善・セグメント配信の導入など、課題に合わせた改善策をご提案します。",
  },
  {
    q: "配信内容は自社で作成する必要がありますか？",
    a: "フルサポートプランでは配信コンテンツの企画・制作も対応しています。テキスト・画像・動画すべて弊社で制作可能です。",
  },
];

export default function LineServicePage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <JsonLd data={lineServiceSchema} />
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
              LINE OFFICIAL ACCOUNT
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              LINEを最強の<br />
              <span className="text-[#CC2222]">集客・採用エンジン</span>に
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              公式LINE構築から運用まで一気通貫。<br />
              友だち登録から購買・採用への導線を設計し、ビジネスを加速させます。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#CC2222] text-white font-black text-sm tracking-widest rounded hover:bg-[#E53333] transition-all duration-200 hover:shadow-2xl hover:shadow-[#CC2222]/30"
            >
              無料相談する
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInSection>

          {/* Results */}
          <FadeInSection delay={200}>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
              {results.map((r) => (
                <div
                  key={r.label}
                  className="bg-[#0f0f0f] border border-white/5 rounded-xl p-6"
                >
                  <p className="text-[#CC2222] text-2xl sm:text-3xl font-black mb-1">{r.value}</p>
                  <p className="text-white/40 text-xs">{r.label}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="FEATURES"
              title="提供するサービス内容"
              subtitle="LINEの可能性を最大限に引き出す、6つのサービス機能。"
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

      {/* Use Cases */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="USE CASES"
              title="活用シーン"
            />
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "店舗・飲食店の来店促進・リピーター獲得",
                "ECサイトのカート離脱フォロー・再購入促進",
                "不動産・保険などのリード育成・商談化",
                "採用ブランディング・内定辞退防止",
                "セミナー・イベントへの集客",
                "既存顧客へのアップセル・クロスセル",
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
              title="導入の流れ"
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
              LINEで売上・採用を<br />加速させませんか？
            </h2>
            <p className="text-white/70 text-base mb-10 max-w-xl mx-auto">
              まずは現状の課題をお聞かせください。最適な公式LINE活用プランをご提案します。
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
