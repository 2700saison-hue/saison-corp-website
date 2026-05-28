import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Megaphone, BarChart3 } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "SNS運用 ROI計算方法・費用対効果の測り方",
  description:
    "SNS運用代行のROI計算方法を解説。月額費用・売上増加・採用費削減から投資対効果を算出する具体的な手順と計算例を紹介。",
  keywords: [
    "SNS ROI 計算",
    "SNS運用 費用対効果",
    "SNS運用代行 ROI",
    "マーケティング ROI 計算方法",
    "投資対効果 測り方",
    "SNS集客 効果測定",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/roi-calculator",
  },
  openGraph: {
    title: "SNS運用 ROI計算方法・費用対効果の測り方 | 株式会社セゾン",
    description:
      "SNS運用代行のROI計算方法を解説。月額費用・売上増加・採用費削減から投資対効果を算出する具体的な手順と計算例を紹介。",
    url: "https://seasonsezon.co.jp/roi-calculator",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://seasonsezon.co.jp",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "SNS運用 ROI計算方法",
      item: "https://seasonsezon.co.jp/roi-calculator",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "SNS運用のROIを計算する方法",
  description:
    "SNS運用代行への投資に対する費用対効果（ROI）を計算するための手順を解説します。",
  totalTime: "PT10M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "JPY",
    value: "0",
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "SNS運用の月額投資費用を確認する",
      text:
        "SNS運用代行費用・広告費・ツール費用など、SNS関連の月額投資総額を算出します。",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "SNS経由の売上増加額を計測する",
      text:
        "SNS経由の来店数・問い合わせ件数・成約数を記録し、それによる売上増加額を計算します。",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "採用費・広告費の削減額を算出する",
      text:
        "SNS活用により削減できた求人サイト費・広告費・その他コストを合計します。",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "ROIを計算する",
      text:
        "ROI（%）=（売上増加額 + 削減コスト）÷ SNS運用投資額 × 100 の計算式でROIを算出します。",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "結果を評価・改善策を策定する",
      text:
        "ROI 100%以上であれば投資に見合う効果があると判断。ROIをさらに高めるための改善施策を検討します。",
    },
  ],
};

const roiExamples = [
  {
    icon: TrendingUp,
    color: "#CC2222",
    category: "集客・売上増加",
    company: "飲食店 F社（東京・恵比寿）",
    investment: "月額 20万円",
    period: "6ヶ月",
    result: "SNS経由売上 月45万円増加",
    roi: "225%",
    detail:
      "Instagram・TikTokの並行運用でリール動画が月500万回再生に到達。フォロワー0→1.2万人・予約問い合わせ月60件増加を実現。投資費用20万円に対し売上45万円増加。",
    formula: "（45万円 ÷ 20万円）× 100 = 225%",
  },
  {
    icon: Users,
    color: "#C9A84C",
    category: "採用費削減",
    company: "建設会社 G社（埼玉）",
    investment: "月額 15万円 × 6ヶ月 = 90万円",
    period: "6ヶ月",
    result: "3名採用成功・採用費150万円削減",
    roi: "167%",
    detail:
      "Instagram採用アカウントのドラマ型動画運用により、6ヶ月で3名採用成功。求人サイト経由なら1名あたり50万円 × 3名 = 150万円の採用費が、SNS運用90万円の投資で代替できた。",
    formula: "（150万円 ÷ 90万円）× 100 = 167%",
  },
  {
    icon: Megaphone,
    color: "#5B7FA6",
    category: "広告費削減",
    company: "美容室チェーン H社（神奈川・3店舗）",
    investment: "月額 25万円",
    period: "12ヶ月",
    result: "Web広告費 月35万円削減・リピート率42%→68%",
    roi: "340%",
    detail:
      "LINE公式アカウントのステップ配信＋Instagram運用代行により、有料広告に頼らずにオーガニックで同等の集客を実現。削減できたWeb広告費と売上増加を合算し、ROI 340%を達成。",
    formula: "（（35万円削減 + 50万円売上増）÷ 25万円）× 100 = 340%",
  },
  {
    icon: BarChart3,
    color: "#4CAF50",
    category: "総合ROI（複合型）",
    company: "介護施設 I社（千葉）",
    investment: "月額 30万円",
    period: "12ヶ月",
    result: "入居者問い合わせ3.2倍・スタッフ採用コスト60%削減",
    roi: "195%",
    detail:
      "採用と集客を同時にSNS運用で対応。Instagramで施設の日常・スタッフ紹介を発信し、入居検討者への認知と求職者へのアプローチを1つの施策で実現。月30万円投資で年間の採用費・広告費合計約700万円相当の効果を創出。",
    formula: "（58.5万円/月換算 ÷ 30万円）× 100 = 195%",
  },
];

export default function RoiCalculatorPage() {
  return (
    <div className="bg-[#080808] text-[#F8F8F8] min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />

      {/* HERO */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(248,248,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,248,248,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#CC2222] opacity-[0.05] blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">
              ROI CALCULATOR
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              SNS運用ROI
              <br className="block sm:hidden" />
              計算方法
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              「SNS運用に投資する価値があるのか」——その答えを
              <br className="hidden sm:block" />
              数値で明確にする方法を解説します。
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ROI基本解説 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="bg-[#141414] border border-white/[0.06] rounded-3xl p-8 sm:p-12">
              <h2
                className="text-2xl sm:text-3xl font-bold mb-6"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                ROIとは何か・なぜ重要か
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                ROI（Return on Investment：投資対効果）とは、投資した費用に対してどれだけの利益が得られたかを数値で示す指標です。マーケティング施策の「成功・失敗」を感覚ではなく、客観的な数値で判断するために不可欠です。
              </p>
              <div className="bg-[#080808] border border-[#CC2222]/20 rounded-2xl p-6 mb-6">
                <p className="text-[#CC2222] text-xs font-bold tracking-widest mb-3">基本計算式</p>
                <p
                  className="text-xl sm:text-2xl font-bold text-[#F8F8F8]"
                  style={{ fontFamily: "monospace" }}
                >
                  ROI（%）=（利益 ÷ 投資費用）× 100
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white/[0.03] rounded-xl p-4 text-center border border-white/[0.06]">
                  <p className="text-white/40 text-xs mb-2">ROI 100%未満</p>
                  <p className="text-white/70 font-bold">投資回収できていない</p>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 text-center border border-white/[0.06]">
                  <p className="text-white/40 text-xs mb-2">ROI 100%</p>
                  <p className="text-white/70 font-bold">投資分と同等の利益</p>
                </div>
                <div className="bg-[#CC2222]/10 rounded-xl p-4 text-center border border-[#CC2222]/20">
                  <p className="text-[#CC2222] text-xs mb-2">ROI 100%以上</p>
                  <p className="text-[#F8F8F8] font-bold">投資に見合う効果あり</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ROI計算5ステップ */}
      <section className="py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-4 text-center">
              HOW TO
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-12 text-center"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              SNS運用ROIを計算する5ステップ
            </h2>
          </FadeInSection>

          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "SNS運用の月額投資費用を確認する",
                desc: "運用代行費・広告費・ツール費用・内製なら人件費を合算。SNS関連のすべてのコストを洗い出します。",
                example: "例：運用代行 20万円 + 広告費 5万円 = 月額投資 25万円",
              },
              {
                step: "02",
                title: "SNS経由の売上増加額を計測する",
                desc: "「SNSを見て来店した」「SNS投稿から購入した」など、SNS起点のコンバージョンを記録。Google AnalyticsのSNS流入・コンバージョンデータも活用します。",
                example: "例：SNS経由の来店 月30件 × 客単価 1万円 = 月30万円の売上",
              },
              {
                step: "03",
                title: "採用費・広告費の削減額を算出する",
                desc: "SNS採用成功により不要になった求人サイト掲載費、オーガニックリーチ増加により削減できた広告費を計算します。",
                example: "例：求人サイト掲載不要 = 月5万円削減 / 広告費削減 = 月8万円削減",
              },
              {
                step: "04",
                title: "ROIを計算する",
                desc: "（売上増加額 + 削減コスト）を合計した「投資によって得られた利益」を、投資費用で割り100をかけます。",
                example: "例：（30万円 + 13万円）÷ 25万円 × 100 = ROI 172%",
              },
              {
                step: "05",
                title: "結果を評価し改善策を策定する",
                desc: "ROI 100%以上なら投資継続・拡大を検討。ROI 100%未満なら投稿内容・ターゲット・プラットフォームを見直します。月次でサイクルを回すことが重要です。",
                example: "例：ROI が低い月は「どのコンテンツが伸びなかったか」を分析し翌月の戦略に反映",
              },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 80}>
                <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-6 flex gap-6 hover:border-[#CC2222]/20 transition-colors duration-300">
                  <div className="flex-shrink-0">
                    <span
                      className="text-4xl font-bold text-[#CC2222]/20"
                      style={{ fontFamily: "monospace" }}
                    >
                      {item.step}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-[#F8F8F8] mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-3">{item.desc}</p>
                    <div className="bg-[#080808] rounded-lg px-4 py-2 border border-white/[0.04]">
                      <p className="text-[#C9A84C] text-xs">{item.example}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* セゾン実績数値を使った計算例4つ */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-4 text-center">
              CASE STUDIES
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-center"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              セゾン支援企業の
              <br className="block sm:hidden" />
              ROI計算実例
            </h2>
            <p className="text-white/40 text-sm text-center mb-12">
              実際の支援事例をもとに、ROI計算の具体的な数値を公開します。
            </p>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {roiExamples.map((ex, i) => {
              const Icon = ex.icon;
              return (
                <FadeInSection key={i} delay={i * 100}>
                  <div className="bg-[#141414] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.12] transition-all duration-300 h-full flex flex-col">
                    {/* カラーバー */}
                    <div className="h-1 w-full" style={{ backgroundColor: ex.color }} />
                    <div className="p-6 flex flex-col flex-1">
                      {/* ヘッダー */}
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${ex.color}20`, border: `1px solid ${ex.color}40` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: ex.color }} />
                        </div>
                        <div>
                          <p
                            className="text-xs font-bold"
                            style={{ color: ex.color }}
                          >
                            {ex.category}
                          </p>
                          <p className="text-white/60 text-xs">{ex.company}</p>
                        </div>
                      </div>

                      {/* 投資・結果 */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-white/[0.03] rounded-lg p-3 border border-white/[0.06]">
                          <p className="text-white/30 text-xs mb-1">月額投資</p>
                          <p className="text-[#F8F8F8] text-sm font-bold">{ex.investment}</p>
                        </div>
                        <div className="bg-white/[0.03] rounded-lg p-3 border border-white/[0.06]">
                          <p className="text-white/30 text-xs mb-1">運用期間</p>
                          <p className="text-[#F8F8F8] text-sm font-bold">{ex.period}</p>
                        </div>
                      </div>

                      {/* 成果 */}
                      <div className="bg-[#080808] rounded-xl p-4 mb-4 border border-white/[0.04] flex-1">
                        <p className="text-white/40 text-xs mb-2">達成成果</p>
                        <p className="text-[#F8F8F8] text-sm font-bold mb-3">{ex.result}</p>
                        <p className="text-white/40 text-xs leading-relaxed">{ex.detail}</p>
                      </div>

                      {/* ROI計算式 */}
                      <div
                        className="rounded-xl p-4 border"
                        style={{ backgroundColor: `${ex.color}10`, borderColor: `${ex.color}30` }}
                      >
                        <p className="text-white/40 text-xs mb-1">計算式</p>
                        <p
                          className="text-sm font-bold"
                          style={{ color: ex.color, fontFamily: "monospace" }}
                        >
                          {ex.formula}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-white/40 text-xs">最終ROI</p>
                          <p
                            className="text-2xl font-bold"
                            style={{ color: ex.color }}
                          >
                            {ex.roi}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROIを最大化するためのポイント */}
      <section className="py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-12 text-center"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              SNS運用ROIを最大化する3つの原則
            </h2>
          </FadeInSection>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "目的を1つに絞る",
                desc: "集客・採用・ブランディングを同時に狙うと分散し、ROIが下がります。最初の3〜6ヶ月は目的を1つに絞り集中投資することで、早期にROIを実感できます。",
              },
              {
                num: "02",
                title: "効果測定の仕組みを先に作る",
                desc: "「何を計測するか」を決めずに始めると、ROIの算出が困難になります。Google Analytics・LINE分析・SNSインサイトの設定を運用開始と同時に整備します。",
              },
              {
                num: "03",
                title: "最低6ヶ月継続する",
                desc: "SNS運用は初月から高いROIを期待できません。3〜6ヶ月でデータが蓄積され、効果的なコンテンツパターンが見えてきます。継続がROI向上の最大の鍵です。",
              },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-6 h-full hover:border-[#CC2222]/20 transition-colors duration-300">
                  <p
                    className="text-5xl font-bold text-[#CC2222]/15 mb-4"
                    style={{ fontFamily: "monospace" }}
                  >
                    {item.num}
                  </p>
                  <h3 className="text-lg font-bold text-[#F8F8F8] mb-3">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* セゾンの実績まとめ */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="bg-[#141414] border border-[#CC2222]/20 rounded-3xl p-8 sm:p-12">
              <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-4 text-center">
                SAISON RESULTS
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-8 text-center"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                株式会社セゾンの平均ROI実績
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "平均ROI", value: "195%", sub: "支援企業平均" },
                  { label: "累計支援実績", value: "100社+", sub: "中小企業中心" },
                  { label: "フォロワー増加", value: "32倍", sub: "最大実績" },
                  { label: "採用コスト削減", value: "120万円", sub: "1社あたり実績" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-[#080808] rounded-xl border border-white/[0.06]">
                    <p className="text-white/30 text-xs mb-1">{stat.label}</p>
                    <p className="text-2xl sm:text-3xl font-bold text-[#CC2222] leading-tight">{stat.value}</p>
                    <p className="text-white/30 text-xs mt-1">{stat.sub}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-sm text-center leading-relaxed">
                ROI計算の方法・自社の試算・相談はすべて無料で承っています。
                <br className="hidden sm:block" />
                お気軽にお問い合わせください。
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0c0c0c]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">
              FREE CONSULTATION
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#F8F8F8] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              自社のSNS運用ROIを
              <br className="block sm:hidden" />
              無料で試算します
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-10">
              業種・目的・現在の課題をお聞きし、
              <br className="hidden sm:block" />
              実現可能なROI目標と具体的な施策をご提案します。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#CC2222] text-white font-bold px-10 py-4 rounded-full hover:bg-[#aa1a1a] transition-colors duration-300"
            >
              無料でROI試算を依頼する
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
