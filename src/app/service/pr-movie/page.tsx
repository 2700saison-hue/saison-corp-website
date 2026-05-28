import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  ArrowRight,
  Video,
  Film,
  Star,
  Play,
  Clapperboard,
  TrendingUp,
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
    { "@type": "ListItem", position: 3, name: "PR動画制作", item: "https://seasonsezon.co.jp/service/pr-movie" },
  ],
};

export const metadata: Metadata = {
  title: "PR動画制作・ブランディング動画",
  description:
    "企業の価値を映像で最大化するPR動画制作。採用動画・ブランディング動画・商品PR動画・会社紹介動画など。VFX・CG・ドローン撮影対応。三菱地所レジデンス・LSIメディエンスなどの大手実績あり。",
  keywords: [
    "PR動画制作",
    "ブランディング動画",
    "採用動画制作",
    "会社紹介動画",
    "商品PR動画",
    "企業動画制作 東京",
    "VFX 動画制作",
    "動画マーケティング",
    "株式会社セゾン 動画",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/service/pr-movie",
  },
  openGraph: {
    title: "PR動画制作・ブランディング動画 | 株式会社セゾン",
    description:
      "採用動画・ブランディング動画・商品PRなどプロの映像制作。大手企業の実績多数。",
    url: "https://seasonsezon.co.jp/service/pr-movie",
    type: "website",
  },
};

const videoTypes = [
  {
    icon: Film,
    title: "ブランディング動画",
    desc: "企業の理念・ビジョン・文化を映像で伝える。採用・営業・IR・周年記念など多目的に活用できる企業の顔となる動画。",
  },
  {
    icon: Star,
    title: "採用動画",
    desc: "求職者の心に刺さる採用動画。職場環境・社員の声・仕事のやりがいをリアルに伝え、ミスマッチを減らして優秀人材を獲得。",
  },
  {
    icon: Play,
    title: "商品・サービスPR動画",
    desc: "商品の魅力を最大限に引き出す映像制作。EC・SNS広告・展示会など様々な用途に最適化したバリエーションで展開。",
  },
  {
    icon: Clapperboard,
    title: "VFX・CG対応",
    desc: "最先端のVFX・3DCG技術でリアルには撮影できない世界観も映像化。製品の内部構造・建築イメージ・未来ビジョンを映像で表現。",
  },
];

const youtubeWorks = [
  "fI721GYnk6Y",
  "26502QBOIOE",
  "2yApw8YpNVY",
  "4tYhzANXgXs",
  "ugc421m7MLw",
  "Oc0d_6sAIqQ",
  "95GWHIbJptc",
  "jS1ABfk42oQ",
  "fM19NU3qUWg",
  "jcj6CtX7gsU",
  "y20eikGQpGc",
  "NcVi06sLznU",
];

const steps = [
  { num: "01", title: "ヒアリング・企画", desc: "目的・ターゲット・使用媒体・予算をヒアリング。コンセプトとストーリーラインを設計します。" },
  { num: "02", title: "脚本・絵コンテ", desc: "シーン構成・台詞・映像イメージを詳細に設計。クライアント確認を経てから撮影に進みます。" },
  { num: "03", title: "撮影・収録", desc: "プロのクルーが撮影を担当。ロケ・スタジオ・CG合成など最適な撮影方法を選択。" },
  { num: "04", title: "編集・仕上げ", desc: "カラーグレーディング・BGM・ナレーション・テロップ・VFXなど、クオリティに妥協なし。" },
  { num: "05", title: "納品・展開支援", desc: "各媒体・サイズに最適化したフォーマットで納品。SNS・広告への展開サポートも対応。" },
];

const faqs = [
  {
    q: "どのくらいの制作期間がかかりますか？",
    a: "尺・内容によりますが、1〜3分程度のPR動画で1〜2ヶ月が目安です。VFX・CGを含む場合はさらに期間が必要になります。急ぎの場合もご相談ください。",
  },
  {
    q: "SNS広告用の縦型動画も制作できますか？",
    a: "はい、TikTok・Instagram Reels・YouTube Shorts用の縦型フォーマットにも対応しています。1回の撮影で横型・縦型・スクエアなど複数フォーマットを同時制作することも可能です。",
  },
  {
    q: "ナレーションやBGMはどうなりますか？",
    a: "プロのナレーターとの協業および著作権フリーBGMを標準で対応しています。タレントや人気アーティストの楽曲を使用する場合は別途調整が必要です。",
  },
];

export default function PrMovieServicePage() {
  return (
    <div className="min-h-screen bg-[#080808]">
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
              PR VIDEO PRODUCTION
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              企業の価値を<br />
              <span className="text-[#CC2222]">映像で最大化</span>
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              ブランディング動画・採用動画・商品PR動画など。<br />
              VFX・CG対応で、リアルを超えた映像表現を実現します。
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

      {/* Video Types */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="VIDEO TYPES"
              title="制作できる動画の種類"
              subtitle="目的・ターゲット・予算に合わせて最適な動画制作プランをご提案します。"
            />
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videoTypes.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeInSection key={v.title} delay={i * 100}>
                  <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-8 hover:border-[#CC2222]/20 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[#CC2222]/10 border border-[#CC2222]/20 flex items-center justify-center mb-6">
                      <Icon className="w-5 h-5 text-[#CC2222]" />
                    </div>
                    <h3
                      className="text-xl font-bold text-white mb-3"
                      style={{ fontFamily: "Noto Serif JP, serif" }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* YouTube Works Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="WORKS"
              title="制作実績"
              subtitle="実際に制作した動画をご覧ください。クリックするとYouTubeで視聴できます。"
            />
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {youtubeWorks.map((id, i) => (
              <FadeInSection key={id} delay={i * 60}>
                <a
                  href={`https://youtu.be/${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block rounded-2xl overflow-hidden border border-white/5 hover:border-[#CC2222]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#CC2222]/10"
                >
                  {/* サムネイル */}
                  <div className="relative w-full aspect-video bg-[#141414]">
                    <Image
                      src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                      alt={`PR動画実績 ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    {/* 暗めオーバーレイ */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                    {/* 再生ボタン */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#CC2222]/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-black/40">
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                      </div>
                    </div>
                    {/* YouTubeバッジ */}
                    <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-white/70 text-[10px] font-bold tracking-wider">
                      YouTube
                    </div>
                  </div>
                </a>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="STRENGTHS"
              title="株式会社セゾンの強み"
            />
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="space-y-3">
              {[
                "ドラマ型SNS動画運用で培ったストーリーテリングの知見を活用",
                "プロの舞台俳優・映像クリエイターとのネットワーク",
                "SNS広告・HP・LPなどとの一貫したブランディング設計",
                "VFX・3DCG対応でリアル撮影不可な映像も実現",
                "SNSショート動画〜長尺企業動画まで幅広く対応",
                "納品後の広告運用・SNS投稿まで一気通貫でサポート",
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
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="PROCESS"
              title="制作の流れ"
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
              御社のブランド価値を<br />映像で伝えませんか？
            </h2>
            <p className="text-white/70 text-base mb-10 max-w-xl mx-auto">
              どんな動画を作るべきかわからない方も歓迎です。課題をお聞かせください。
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
