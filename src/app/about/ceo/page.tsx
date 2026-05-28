import Image from "next/image";
import FadeInSection from "@/components/ui/FadeInSection";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "代表メッセージ",
  description:
    "株式会社セゾン 代表取締役 古田太陽からのメッセージ。「行動が、最強の戦略だ。」SNS×AIを事業成長のエンジンに変えるという信念のもと、100社以上の企業変革を牽引してきた代表のビジョンをご紹介します。",
  keywords: [
    "古田太陽",
    "株式会社セゾン 代表取締役",
    "セゾン 代表メッセージ",
    "古田太陽 SNS AI",
    "デジタルマーケティング 代表",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/about/ceo",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://seasonsezon.co.jp" },
    { "@type": "ListItem", position: 2, name: "会社概要", item: "https://seasonsezon.co.jp/about" },
    { "@type": "ListItem", position: 3, name: "代表メッセージ", item: "https://seasonsezon.co.jp/about/ceo" },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "古田太陽",
  alternateName: "Taiyo Furuta",
  jobTitle: "代表取締役",
  worksFor: {
    "@type": "Organization",
    name: "株式会社セゾン",
    url: "https://seasonsezon.co.jp",
  },
  description:
    "株式会社セゾン代表取締役。東京都足立区出身。SNS×AIを活用したデジタルマーケティングで累計100社以上の企業変革を牽引。",
  url: "https://seasonsezon.co.jp/about/ceo",
  image: "https://seasonsezon.co.jp/images/team/CEO2.jpeg",
};

export default function CeoPage() {
  return (
    <div className="bg-[#080808] text-[#F8F8F8]">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={personSchema} />
      {/* ヒーロー */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(248,248,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,248,248,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C9A84C] opacity-[0.04] blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">CEO MESSAGE</p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F8F8F8] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              代表メッセージ
            </h1>
            <div className="w-16 h-0.5 bg-[#CC2222] mx-auto" />
          </FadeInSection>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16 px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* 左: プロフィール */}
            <FadeInSection direction="left">
              <div>
                {/* 代表写真 */}
                <div className="w-full aspect-[3/4] rounded-3xl bg-[#141414] border border-white/[0.06] mb-8 relative overflow-hidden flex items-end">
                  <Image
                    src="/images/team/CEO2.jpeg"
                    alt="代表取締役 古田 太陽"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={100}
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="relative z-10 w-full p-8">
                    <p
                      className="text-[#C9A84C] text-xl sm:text-2xl font-bold italic mb-2"
                      style={{ fontFamily: "Noto Serif JP, serif" }}
                    >
                      「行動が、最強の戦略だ。」
                    </p>
                    <p className="text-white/60 text-sm">代表取締役 古田 太陽</p>
                  </div>
                </div>

                {/* 基本情報 */}
                <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-6 space-y-4">
                  {[
                    { label: "氏名", value: "古田 太陽（Taiyo Furuta）" },
                    { label: "役職", value: "代表取締役" },
                    { label: "出身", value: "東京都足立区" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 border-t border-white/[0.06] pt-4 first:border-t-0 first:pt-0">
                      <span className="text-[#CC2222] text-xs font-bold tracking-wider w-16 flex-shrink-0 pt-0.5">
                        {item.label}
                      </span>
                      <span className="text-white/60 text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* 右: メッセージ */}
            <FadeInSection direction="right" delay={100}>
              <div>
                <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">MESSAGE</p>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#F8F8F8] mb-8 leading-[1.5]"
                  style={{ fontFamily: "Noto Serif JP, serif" }}
                >
                  SNS×AIを事業成長の
                  <br />
                  エンジンに変える
                </h2>
                <div className="space-y-5 text-white/60 text-sm leading-[2] mb-12">
                  <p>
                    セゾンには、SNSを事業成長に直結させるための「高いマーケティング戦略力」、
                    100社以上の運用で確立した「再現性ある勝利の方程式」、
                    そしてこの方程式を形にする「一流の運用者による自社制作コンテンツ力」が揃っています。
                  </p>
                  <p>
                    現在は3期目を迎え、累計100社以上の企業変革を牽引してきました。
                    大手企業から中小企業まで、業種を問わず結果を出し続けてきた経験から言えることがあります。
                    SNS×AIは、正しく使えば圧倒的な成長エンジンになる——ということです。
                  </p>
                  <p>
                    セゾンは、SNS×AIを事業成長のエンジンに変える運用モデルで、
                    あなたの未来に確かな一歩を届けます。
                    高い柔軟性と対応力ですべてを一緒に並走する伴走者として、丁寧に運用いたします。
                  </p>
                </div>

                {/* 署名 */}
                <div className="border-t border-white/[0.06] pt-8">
                  <p className="text-white/30 text-sm mb-2">株式会社セゾン 代表取締役</p>
                  <p
                    className="text-[#F8F8F8] text-2xl font-bold"
                    style={{ fontFamily: "Noto Serif JP, serif" }}
                  >
                    古田 太陽
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}
