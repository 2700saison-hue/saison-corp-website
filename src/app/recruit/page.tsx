import Link from "next/link";
import { ArrowRight, Sparkles, Building2, TrendingUp, Users, CheckCircle } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const BASE_URL = "https://seasonsezon.co.jp";

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "株式会社セゾン 採用情報",
  url: `${BASE_URL}/recruit`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "JobPosting",
        title: "SNS運用ディレクター",
        description:
          "クライアントのSNSアカウント戦略立案・コンテンツ企画・投稿管理・効果測定・改善提案を担当。プロ舞台役者出演のドラマ型ショート動画制作にも携わります。",
        hiringOrganization: {
          "@type": "Organization",
          name: "株式会社セゾン",
          sameAs: BASE_URL,
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressCountry: "JP",
            addressRegion: "東京都",
            addressLocality: "足立区",
          },
        },
        employmentType: "FULL_TIME",
        datePosted: "2025-01-01",
        validThrough: "2025-12-31",
        jobBenefits: "成長中のデジタルマーケティング会社でのキャリアアップ機会",
        skills: "SNS運用、コンテンツ企画、データ分析",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "JobPosting",
        title: "営業（法人）",
        description:
          "法人クライアントへの新規営業・提案・契約クロージング・継続フォロー。SNS運用代行・AI導入支援・ホームページ制作など各種サービスの提案営業。",
        hiringOrganization: {
          "@type": "Organization",
          name: "株式会社セゾン",
          sameAs: BASE_URL,
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressCountry: "JP",
            addressRegion: "東京都",
            addressLocality: "足立区",
          },
        },
        employmentType: "CONTRACTOR",
        datePosted: "2025-01-01",
        validThrough: "2025-12-31",
        baseSalary: {
          "@type": "MonetaryAmount",
          currency: "JPY",
          value: {
            "@type": "QuantitativeValue",
            value: 0,
            unitText: "成果報酬型（実力次第で青天井）",
          },
        },
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "採用情報", item: `${BASE_URL}/recruit` },
  ],
};

export const metadata: Metadata = {
  title: "採用情報",
  description:
    "株式会社セゾンの採用情報。SNS運用ディレクター・法人営業の求人を募集中。日本中の企業変革を担う仲間を求めています。成長中のデジタルマーケティング会社で活躍しませんか。東京都足立区勤務。",
  keywords: [
    "株式会社セゾン 採用",
    "セゾン 求人",
    "SNS運用 求人",
    "デジタルマーケティング 転職",
    "マーケティング会社 採用 東京",
    "SNS運用ディレクター 求人",
    "法人営業 求人 東京",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/recruit",
  },
  openGraph: {
    title: "採用情報 | 株式会社セゾン",
    description:
      "SNS運用ディレクター・法人営業の求人募集中。日本中の企業変革に携わるやりがいある仕事。",
    url: "https://seasonsezon.co.jp/recruit",
    type: "website",
  },
};

const ATTRACTIONS = [
  {
    icon: Sparkles,
    title: "最先端のAI・SNSを日々の仕事で使う",
    desc: "最新のAIツールやSNSプラットフォームを実際の業務で活用。常に時代の最前線にいられる環境です。",
  },
  {
    icon: Building2,
    title: "大手企業と直接仕事ができる",
    desc: "丸亀製麺・アトレ・サイゼリヤなど日本を代表するブランドと直接向き合い、大きな仕事に挑戦できます。",
  },
  {
    icon: TrendingUp,
    title: "成果次第で青天井の報酬",
    desc: "年齢・年次に関係なく、出した成果が報酬に直結。月100万円以上を実現したメンバーも在籍しています。",
  },
  {
    icon: Users,
    title: "代表と共に日本を変える実感",
    desc: "小さなチームだからこそ、代表と直接仕事をする機会が多い。自分の仕事が会社の成長に直結する実感があります。",
  },
];

const DESIRED_PEOPLE = [
  "やるべきことをしっかりできる人",
  "人と人とのコミュニケーションがしっかり取れる人",
  "何事にもワクワクした気持ちで取り組める人",
];

const BENEFITS = [
  "リモートワーク可（週2日〜）",
  "フレックスタイム制",
  "交通費全額支給",
  "書籍・学習費補助（月5,000円）",
  "社内SNS・AIツール使い放題",
  "副業OK（事前申告制）",
  "成果連動型インセンティブ（青天井）",
];

export default function RecruitPage() {
  return (
    <div className="bg-[#080808] text-[#F8F8F8] min-h-screen">
      <JsonLd data={jobPostingSchema} />
      <JsonLd data={breadcrumbSchema} />
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(248,248,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,248,248,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#CC2222] opacity-[0.05] blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-8">
              RECRUIT
            </p>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.2] mb-8"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              ワクワクを
              <br />
              仕事にしよう
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              セゾンは、日本中の企業を変革する伴走者です。
              <br className="hidden sm:block" />
              あなたもその一員として、共に未来を創りませんか？
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* セゾンで働く魅力 */}
      <section className="py-24 px-6 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="WHY SAISON"
              title="セゾンで働く魅力"
              subtitle="ここでしか味わえない、リアルな仕事の醍醐味があります"
            />
          </FadeInSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ATTRACTIONS.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeInSection key={i} delay={i * 100}>
                  <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-8 hover:border-[#CC2222]/30 transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#CC2222]/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-[#CC2222]" />
                    </div>
                    <h3
                      className="text-base font-bold text-[#F8F8F8] mb-3 leading-snug"
                      style={{ fontFamily: "Noto Serif JP, serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 求める人物像 */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="PERSONA"
              title="求める人物像"
              subtitle="スキルより、マインドセットを大切にしています"
            />
          </FadeInSection>
          <div className="space-y-4 max-w-2xl mx-auto">
            {DESIRED_PEOPLE.map((item, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="flex items-center gap-5 bg-[#141414] border border-white/[0.06] rounded-xl px-8 py-6 hover:border-[#CC2222]/30 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#CC2222]/10 flex items-center justify-center shrink-0">
                    <span className="text-[#CC2222] font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="text-white/80 text-base font-medium">{item}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 募集職種 */}
      <section className="py-24 px-6 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="POSITIONS"
              title="募集職種"
              subtitle="あなたの強みを活かせるポジションで一緒に働きましょう"
            />
          </FadeInSection>
          <div className="grid md:grid-cols-2 gap-8">
            {/* SNS運用ディレクター */}
            <FadeInSection direction="left" delay={100}>
              <div className="bg-[#141414] border border-white/[0.06] rounded-3xl p-8 sm:p-10 hover:border-[#CC2222]/40 transition-all duration-300 h-full flex flex-col">
                <p className="text-[#CC2222] text-xs font-bold tracking-[0.3em] uppercase mb-4">POSITION 01</p>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-[#F8F8F8] mb-6"
                  style={{ fontFamily: "Noto Serif JP, serif" }}
                >
                  SNS運用ディレクター
                </h3>

                <div className="space-y-5 flex-1">
                  <div className="border-t border-white/[0.06] pt-5">
                    <p className="text-white/30 text-xs font-bold tracking-wider mb-2">雇用形態</p>
                    <p className="text-white/80 text-sm">正社員 / インターン</p>
                  </div>
                  <div className="border-t border-white/[0.06] pt-5">
                    <p className="text-white/30 text-xs font-bold tracking-wider mb-2">給与</p>
                    <p className="text-[#C9A84C] font-bold text-base">月給30万円〜（成果報酬あり）</p>
                    <p className="text-white/40 text-xs mt-1">※成果次第で月100万円も視野に</p>
                  </div>
                  <div className="border-t border-white/[0.06] pt-5">
                    <p className="text-white/30 text-xs font-bold tracking-wider mb-2">仕事内容</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      クライアント企業のSNS戦略立案・コンテンツ企画・運用管理・分析・改善提案
                    </p>
                  </div>
                  <div className="border-t border-white/[0.06] pt-5">
                    <p className="text-white/30 text-xs font-bold tracking-wider mb-3">求めるスキル</p>
                    <ul className="space-y-2">
                      {[
                        "SNSへの強い関心",
                        "コミュニケーション力",
                        "PDCAサイクルを回せる方",
                      ].map((s, j) => (
                        <li key={j} className="flex items-center gap-2 text-white/60 text-sm">
                          <CheckCircle className="w-4 h-4 text-[#CC2222] shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* 営業（法人） */}
            <FadeInSection direction="right" delay={100}>
              <div className="bg-[#141414] border border-white/[0.06] rounded-3xl p-8 sm:p-10 hover:border-[#C9A84C]/40 transition-all duration-300 h-full flex flex-col">
                <p className="text-[#C9A84C] text-xs font-bold tracking-[0.3em] uppercase mb-4">POSITION 02</p>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-[#F8F8F8] mb-6"
                  style={{ fontFamily: "Noto Serif JP, serif" }}
                >
                  営業（法人）
                </h3>

                <div className="space-y-5 flex-1">
                  <div className="border-t border-white/[0.06] pt-5">
                    <p className="text-white/30 text-xs font-bold tracking-wider mb-2">雇用形態</p>
                    <p className="text-white/80 text-sm">業務委託</p>
                  </div>
                  <div className="border-t border-white/[0.06] pt-5">
                    <p className="text-white/30 text-xs font-bold tracking-wider mb-2">給与</p>
                    <p className="text-[#C9A84C] font-bold text-base">成果報酬型（高水準）</p>
                    <p className="text-white/40 text-xs mt-1">※実力次第で青天井</p>
                  </div>
                  <div className="border-t border-white/[0.06] pt-5">
                    <p className="text-white/30 text-xs font-bold tracking-wider mb-2">仕事内容</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      法人クライアントへの新規営業・提案・契約クロージング・継続フォロー
                    </p>
                  </div>
                  <div className="border-t border-white/[0.06] pt-5">
                    <p className="text-white/30 text-xs font-bold tracking-wider mb-3">求めるスキル</p>
                    <ul className="space-y-2">
                      {[
                        "法人営業経験歓迎",
                        "人と話すことが好きな方",
                      ].map((s, j) => (
                        <li key={j} className="flex items-center gap-2 text-white/60 text-sm">
                          <CheckCircle className="w-4 h-4 text-[#C9A84C] shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 待遇・福利厚生 */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="BENEFITS"
              title="待遇・福利厚生"
              subtitle="働きやすい環境で、パフォーマンスを最大化できます"
            />
          </FadeInSection>
          <FadeInSection delay={200}>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {BENEFITS.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-[#141414] border border-white/[0.06] rounded-xl px-6 py-4 hover:border-white/20 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-[#CC2222] shrink-0" />
                  <span className="text-white/70 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 応募方法 */}
      <section className="py-24 px-6 bg-[#CC2222] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeInSection>
            <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-6">HOW TO APPLY</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              応募方法
            </h2>
            <div className="w-12 h-0.5 bg-white/40 mx-auto mb-8" />
            <p className="text-white/80 text-base leading-relaxed mb-10">
              お問い合わせフォームから
              <strong className="text-white">「採用希望」</strong>
              と記入して送信してください。
              <br />
              担当者より2営業日以内にご連絡いたします。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#CC2222] font-bold px-10 py-5 rounded-full hover:bg-[#F8F8F8] transition-all duration-300 text-base"
            >
              採用応募フォームへ
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
