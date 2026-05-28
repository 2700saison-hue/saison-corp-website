import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Users,
  BookOpen,
  Zap,
  TrendingUp,
  Award,
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
    { "@type": "ListItem", position: 3, name: "SNS・AI研修", item: "https://seasonsezon.co.jp/service/training" },
  ],
};

export const metadata: Metadata = {
  title: "SNS・AI研修・社内人材育成",
  description:
    "社内にSNS・AIのプロを育てる企業研修。SNS運用研修・ChatGPT/AI活用研修・ショート動画制作研修。累計100社以上の現場知識を凝縮した実践型プログラム。座学＋実習形式。1日〜複数回対応。",
  keywords: [
    "SNS研修",
    "AI研修 企業",
    "社内SNS人材育成",
    "ChatGPT 社員研修",
    "ショート動画 研修",
    "Instagram運用 研修",
    "企業研修 マーケティング",
    "株式会社セゾン 研修",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/service/training",
  },
  openGraph: {
    title: "SNS・AI研修・社内人材育成 | 株式会社セゾン",
    description:
      "100社以上の現場ノウハウを凝縮した実践型SNS・AI研修。社内に人材を育てる。",
    url: "https://seasonsezon.co.jp/service/training",
    type: "website",
  },
};

const programs = [
  {
    icon: TrendingUp,
    title: "SNS運用研修",
    tag: "SNS",
    desc: "TikTok・Instagram・YouTube ShortsなどのSNS運用の基礎から応用まで。アカウント設計・コンテンツ制作・分析・改善のすべてを体系的に学ぶ。",
    items: ["アカウント戦略設計", "コンテンツ制作の実践", "アルゴリズム対策", "エンゲージメント向上施策", "数値分析とPDCA"],
  },
  {
    icon: Zap,
    title: "AI活用研修",
    tag: "AI",
    desc: "ChatGPT・Claude・SoloptiLink AIなどの最新AIツールを業務に活用する実践研修。プロンプトエンジニアリングから業務自動化まで。",
    items: ["AIツール基礎・使い方", "プロンプトエンジニアリング", "業務自動化の実装", "AI×SNSコンテンツ生成", "SoloptiLink AI活用法"],
  },
  {
    icon: BookOpen,
    title: "SNS×AI統合研修",
    tag: "COMBO",
    desc: "SNS運用とAI活用を組み合わせた最上位プログラム。コンテンツの企画からAIによる自動生成・投稿管理まで、次世代のSNS運用体制を社内に構築。",
    items: ["SNS戦略とAI活用の融合", "AIによるコンテンツ大量生成", "SNS自動化・効率化", "社内運用体制の構築", "成果測定と継続改善"],
  },
];

const features = [
  {
    icon: Award,
    title: "100社以上の現場知識を凝縮",
    desc: "教科書的な内容ではなく、累計100社以上の実際の運用現場から生まれたリアルなノウハウを提供。",
  },
  {
    icon: Users,
    title: "座学＋実践形式",
    desc: "理論を学んだらすぐに実際に手を動かす実践形式。研修後すぐに現場で使えるスキルを習得。",
  },
  {
    icon: GraduationCap,
    title: "カスタマイズ対応",
    desc: "業種・職種・SNSプラットフォーム・習熟度に合わせてカスタマイズ。御社の状況に最適なプログラムを設計。",
  },
  {
    icon: TrendingUp,
    title: "人材開発助成金の活用",
    desc: "研修費の最大75%を人材開発支援助成金でカバー可能。補助金サポートと組み合わせて低コストで社内人材を育成。",
  },
];

const steps = [
  { num: "01", title: "ヒアリング・プログラム設計", desc: "現状の課題・スキルレベル・目標をヒアリング。貴社に最適な研修プログラムをカスタマイズします。" },
  { num: "02", title: "事前学習コンテンツ提供", desc: "研修当日の効果を最大化するための事前学習資料をご提供。インプットを済ませた状態で研修に参加できます。" },
  { num: "03", title: "研修実施（座学＋実践）", desc: "現役SNSマーケター・AIエンジニアが直接指導。座学と実践ワークを組み合わせた濃密な研修を実施します。" },
  { num: "04", title: "フォローアップ・相談サポート", desc: "研修後も実践の中で生まれる疑問・課題に対応するフォローアップサポートを提供します。" },
];

const faqs = [
  {
    q: "1日だけの研修でも効果はありますか？",
    a: "はい、1日集中研修でも十分な効果を発揮します。ただし、継続的なスキル定着のためには複数回の研修や実践サポートの組み合わせが最も効果的です。",
  },
  {
    q: "全くSNSを使ったことがない社員でも参加できますか？",
    a: "はい、まったく問題ありません。参加者のレベルに合わせた入門コースから上級コースまでご用意しています。事前にレベルをお聞きしてカスタマイズします。",
  },
  {
    q: "人材開発支援助成金は必ず受給できますか？",
    a: "申請条件・手続きを正しく行えば高い確率で受給できます。弊社では補助金申請サポートも対応しており、研修とセットでご活用いただくと費用負担を大幅に軽減できます。",
  },
];

export default function TrainingServicePage() {
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
              SNS & AI TRAINING
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              社内に<span className="text-[#CC2222]">SNS・AIのプロ</span>を<br />
              育てる
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              累計100社以上の現場知識を研修プログラムに凝縮。<br />
              座学＋実践形式で、研修後すぐに使えるスキルを習得。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#CC2222] text-white font-black text-sm tracking-widest rounded hover:bg-[#E53333] transition-all duration-200 hover:shadow-2xl hover:shadow-[#CC2222]/30"
            >
              研修について相談する
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="PROGRAMS"
              title="研修プログラム"
              subtitle="目的・レベル・業種に合わせて最適なプログラムをカスタマイズします。"
            />
          </FadeInSection>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeInSection key={p.title} delay={i * 100}>
                  <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-8 hover:border-[#CC2222]/20 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#CC2222]/10 border border-[#CC2222]/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#CC2222]" />
                      </div>
                      <div>
                        <span className="text-[#CC2222] text-xs font-bold tracking-widest">{p.tag}</span>
                        <h3
                          className="text-lg font-bold text-white mt-1"
                          style={{ fontFamily: "Noto Serif JP, serif" }}
                        >
                          {p.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed mb-6">{p.desc}</p>
                    <div className="mt-auto space-y-2">
                      {p.items.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-[#CC2222] flex-shrink-0" />
                          <span className="text-white/60 text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="FEATURES"
              title="セゾンの研修が選ばれる理由"
            />
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <FadeInSection key={f.title} delay={i * 80}>
                  <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-7 text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-[#CC2222]/10 border border-[#CC2222]/20 flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-5 h-5 text-[#CC2222]" />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-3">{f.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="PROCESS"
              title="研修実施の流れ"
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
              SNS・AIの内製化で、<br />コスト削減と競争力強化を同時に
            </h2>
            <p className="text-white/70 text-base mb-10 max-w-xl mx-auto">
              研修内容・費用・助成金活用について、まずはお気軽にご相談ください。
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
