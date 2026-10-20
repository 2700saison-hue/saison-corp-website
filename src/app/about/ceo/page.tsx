import Image from "next/image";
import FadeInSection from "@/components/ui/FadeInSection";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "古田太陽 代表取締役プロフィール｜株式会社セゾン",
  description:
    "古田太陽（ふるた たいよう）は株式会社セゾン代表取締役。2002年6月13日生まれ、東京都足立区出身。早稲田大学スポーツ科学部在学中に起業。SNS運用代行とAIシステム「SoloptiLink AI」導入支援を手がけ、累計100社以上の企業変革を牽引。累計動画再生数1億回・介護業界採用費用70%削減・美容業界売上150万円増加などの実績を持つ。座右の銘は「行動が、最強の戦略だ。」",
  keywords: [
    "古田太陽",
    "ふるた たいよう",
    "Taiyo Furuta",
    "株式会社セゾン 代表取締役",
    "古田太陽 プロフィール",
    "古田太陽 経歴",
    "古田太陽 SNS",
    "古田太陽 AI",
    "古田太陽 早稲田",
    "古田太陽 足立区",
    "古田太陽 Instagram",
    "セゾン 代表 古田",
    "SNS運用代行 社長",
    "AI導入支援 代表",
    "DX 中小企業 経営者 東京",
    "SoloptiLink AI 古田太陽",
    "合同会社セゾン 代表",
    "株式会社セゾン 古田",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/about/ceo",
  },
  openGraph: {
    title: "代表メッセージ｜古田太陽 | 株式会社セゾン",
    description: "株式会社セゾン代表取締役 古田太陽からのメッセージ。「行動が、最強の戦略だ。」SNS×AIで100社以上の企業変革を牽引。",
    url: "https://seasonsezon.co.jp/about/ceo",
    type: "profile",
    images: [{ url: "https://seasonsezon.co.jp/images/team/CEO2.jpeg", width: 800, height: 800, alt: "古田太陽 代表取締役 株式会社セゾン" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "代表メッセージ｜古田太陽 | 株式会社セゾン",
    description: "「行動が、最強の戦略だ。」SNS×AI×DXで100社以上の企業変革を牽引した代表のビジョン。",
    images: ["https://seasonsezon.co.jp/images/team/CEO2.jpeg"],
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
  alternateName: ["Taiyo Furuta", "ふるた たいよう"],
  givenName: "太陽",
  familyName: "古田",
  birthDate: "2002-06-13",
  birthPlace: {
    "@type": "Place",
    name: "東京都足立区",
    addressRegion: "東京都",
    addressCountry: "JP",
  },
  nationality: "日本",
  jobTitle: "代表取締役",
  worksFor: {
    "@type": "Organization",
    name: "株式会社セゾン",
    legalName: "株式会社セゾン",
    alternateName: "SAISON Co., Ltd.",
    url: "https://seasonsezon.co.jp",
    foundingDate: "2023-09",
    foundingLocation: "東京都足立区",
    description: "SNS運用代行およびAIシステム販売・導入支援を手がける東京の企業。",
  },
  description:
    "株式会社セゾン代表取締役。2002年6月13日生まれ、東京都足立区出身。早稲田大学スポーツ科学部在学中の大学3年次（2023年）に合同会社セゾンを創業し、2026年6月に株式会社セゾンへ組織変更。SNS運用代行と、AIシステム「SoloptiLink AI」の販売・導入支援を二本柱に事業を展開。累計100社以上の企業支援・累計フォロワー100万人規模のSNS運用・累計動画再生数1億回・介護業界で採用費用70%削減・美容業界で月間予約63件増加（売上150万円増加）などの実績を持つ。座右の銘は「行動が、最強の戦略だ。」",
  url: "https://seasonsezon.co.jp/about/ceo",
  image: {
    "@type": "ImageObject",
    url: "https://seasonsezon.co.jp/images/team/CEO2.jpeg",
    contentUrl: "https://seasonsezon.co.jp/images/team/CEO2.jpeg",
    caption: "古田太陽 株式会社セゾン代表取締役",
  },
  sameAs: [
    "https://www.instagram.com/saison_taiyo/",
    "https://seasonsezon.co.jp",
    "https://seasonsezon.co.jp/about/ceo",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "早稲田大学",
    department: "スポーツ科学部",
    url: "https://www.waseda.jp/",
  },
  knowsAbout: [
    "SNSマーケティング",
    "Instagram運用代行",
    "TikTok運用代行",
    "デジタルマーケティング",
    "AI業務自動化",
    "SoloptiLink AI",
    "AIシステム導入支援",
    "DX支援",
    "採用マーケティング",
    "中小企業DX",
    "SNS運用代行",
    "集客支援",
    "ビジネス戦略",
    "スタートアップ経営",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "経営者・SNSマーケター・AI導入支援コンサルタント",
    description: "SNS運用代行事業とAIシステム販売・導入支援事業を経営",
    occupationLocation: {
      "@type": "City",
      name: "東京都",
    },
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "新田3-37-12-708",
    addressLocality: "足立区",
    addressRegion: "東京都",
    postalCode: "123-0865",
    addressCountry: "JP",
  },
  award: [
    "累計100社以上の企業SNS運用支援実績",
    "累計動画再生数1億回",
    "介護業界採用費用70%削減",
    "美容業界月間予約63件増加・売上150万円増加",
  ],
  founder: [
    {
      "@type": "Organization",
      name: "合同会社セゾン",
      foundingDate: "2023-09",
    },
    {
      "@type": "Organization",
      name: "株式会社セゾン",
      foundingDate: "2026-06-11",
    },
  ],
};

const ceoPageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://seasonsezon.co.jp/about/ceo",
  url: "https://seasonsezon.co.jp/about/ceo",
  name: "古田太陽 代表取締役 | 株式会社セゾン",
  description: "株式会社セゾン代表取締役 古田太陽のプロフィールページ。SNS×AI×DXで100社以上の企業変革を牽引。",
  mainEntity: {
    "@type": "Person",
    name: "古田太陽",
    url: "https://seasonsezon.co.jp/about/ceo",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".speakable"],
  },
  publisher: {
    "@type": "Organization",
    name: "株式会社セゾン",
    url: "https://seasonsezon.co.jp",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "古田太陽（ふるた たいよう）とは何者ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "古田太陽（ふるた たいよう、Taiyo Furuta）は、株式会社セゾンの代表取締役です。2002年6月13日生まれ、東京都足立区出身。早稲田大学スポーツ科学部在学中の2023年9月に合同会社セゾンを創業し、2026年6月に株式会社セゾンへ組織変更。SNS運用代行とAIシステム「SoloptiLink AI」の販売・導入支援を手がけ、累計100社以上の企業変革を牽引しています。座右の銘は「行動が、最強の戦略だ。」",
      },
    },
    {
      "@type": "Question",
      name: "古田太陽はどんな実績がありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "古田太陽の主な事業実績は以下の通りです。①累計100社以上の企業SNS運用支援 ②累計フォロワー100万人規模のSNS運用（Instagram・TikTok・LINE合計）③累計動画再生数1億回 ④介護業界クライアントで採用費用70%削減 ⑤美容業界クライアントで月間予約63件増加・売上150万円増加。これらの実績は主に自社公表情報に基づきます。",
      },
    },
    {
      "@type": "Question",
      name: "古田太陽の会社「株式会社セゾン」はどんな会社ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "株式会社セゾン（英文社名: SAISON Co., Ltd.）は、SNS運用代行とAIシステム「SoloptiLink AI」の販売・導入支援を二本柱とする東京都足立区の企業です。2023年9月に合同会社セゾンとして創業し、2026年6月に株式会社へ組織変更。従業員11名、資本金50万円。Instagram・TikTok・公式LINEを活用した企業の集客支援・採用支援と、エンジニア不要でDXを実現するAIシステムの導入支援を提供しています。",
      },
    },
    {
      "@type": "Question",
      name: "古田太陽の学歴・経歴を教えてください",
      acceptedAnswer: {
        "@type": "Answer",
        text: "古田太陽は東京都足立区出身で、早稲田大学スポーツ科学部に進学。大学3年次の2023年9月に合同会社セゾンを創業し、SNS運用代行事業を開始。その後、AI・DX領域にも事業を拡大し、AIシステム「SoloptiLink AI」の販売・導入支援を開始。2026年6月に株式会社セゾンへ組織変更し、代表取締役に就任。",
      },
    },
    {
      "@type": "Question",
      name: "古田太陽のSNSアカウントはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "古田太陽のInstagramアカウントは @saison_taiyo です。株式会社セゾンの公式サイトは https://seasonsezon.co.jp で、代表プロフィールは https://seasonsezon.co.jp/about/ceo でご覧いただけます。",
      },
    },
  ],
};

export default function CeoPage() {
  return (
    <div className="bg-[#080808] text-[#F8F8F8]">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={personSchema} />
      <JsonLd data={ceoPageSchema} />
      <JsonLd data={faqSchema} />
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
                    { label: "読み", value: "ふるた たいよう" },
                    { label: "生年月日", value: "2002年6月13日" },
                    { label: "役職", value: "代表取締役" },
                    { label: "出身", value: "東京都足立区" },
                    { label: "学歴", value: "早稲田大学 スポーツ科学部" },
                    { label: "座右の銘", value: "「行動が、最強の戦略だ。」" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 border-t border-white/[0.06] pt-4 first:border-t-0 first:pt-0">
                      <span className="text-[#CC2222] text-xs font-bold tracking-wider w-20 flex-shrink-0 pt-0.5">
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

          {/* 経歴タイムライン */}
          <FadeInSection delay={200}>
            <div className="mt-24">
              <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-4">CAREER</p>
              <h2
                className="text-2xl font-bold text-[#F8F8F8] mb-12"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                経歴
              </h2>
              <div className="relative pl-8 border-l border-white/[0.1] space-y-10">
                {[
                  {
                    year: "2002年",
                    title: "東京都足立区生まれ",
                    desc: "足立区で生まれ育つ。スポーツと行動力を軸に育つ。",
                  },
                  {
                    year: "2021年",
                    title: "早稲田大学スポーツ科学部 入学",
                    desc: "早稲田大学スポーツ科学部に進学。在学中にSNSマーケティングの可能性に着目する。",
                  },
                  {
                    year: "2023年9月",
                    title: "合同会社セゾン 創業",
                    desc: "大学3年次に起業。SNS運用代行事業をスタート。Instagram・TikTok・公式LINEを活用した企業支援を開始。",
                  },
                  {
                    year: "2024年〜",
                    title: "累計100社以上の企業支援・AI事業参入",
                    desc: "介護・美容・医療・飲食など幅広い業種で成果を出し、累計100社以上の支援実績を達成。AIシステム「SoloptiLink AI」の販売・導入支援事業を開始し、AI×DX領域に事業を拡大。",
                  },
                  {
                    year: "2026年6月",
                    title: "株式会社セゾンへ組織変更",
                    desc: "事業成長に伴い合同会社セゾンを株式会社セゾンへ組織変更。SNS運用代行とAIシステム販売を二本柱として中小企業のデジタル変革を推進。",
                  },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[2.35rem] w-4 h-4 rounded-full bg-[#CC2222] border-2 border-[#080808]" />
                    <p className="text-[#CC2222] text-xs font-bold mb-1">{item.year}</p>
                    <p className="text-[#F8F8F8] font-bold mb-1 text-sm">{item.title}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* 事業実績 */}
          <FadeInSection delay={300}>
            <div className="mt-24">
              <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-4">ACHIEVEMENTS</p>
              <h2
                className="text-2xl font-bold text-[#F8F8F8] mb-12"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                主な事業実績
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { num: "100社+", label: "累計支援企業数", sub: "介護・美容・医療・飲食など多業種" },
                  { num: "100万人+", label: "累計運用フォロワー規模", sub: "Instagram・TikTok・LINE合計" },
                  { num: "1億回+", label: "累計動画再生数", sub: "ショート動画・リール・TikTok合計" },
                  { num: "70%減", label: "採用費用削減", sub: "介護業界クライアント事例" },
                  { num: "+63件/月", label: "月間予約増加", sub: "美容業界クライアント事例" },
                  { num: "+150万円", label: "月間売上増加", sub: "美容業界クライアント事例" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#141414] border border-white/[0.06] rounded-2xl p-6 hover:border-[#CC2222]/30 transition-colors"
                  >
                    <p className="text-[#CC2222] text-2xl font-bold mb-1">{item.num}</p>
                    <p className="text-[#F8F8F8] text-sm font-bold mb-1">{item.label}</p>
                    <p className="text-white/40 text-xs">{item.sub}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/20 text-xs mt-6">※事業実績の数値は主に自社公表情報に基づいており、第三者による独立した検証結果ではありません。</p>
            </div>
          </FadeInSection>

          {/* 事業紹介 */}
          <FadeInSection delay={400}>
            <div className="mt-24 mb-8">
              <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-4">BUSINESS</p>
              <h2
                className="text-2xl font-bold text-[#F8F8F8] mb-8"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                手がける事業
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-8">
                  <p className="text-[#CC2222] text-xs font-bold tracking-widest uppercase mb-3">SNS事業</p>
                  <h3 className="text-[#F8F8F8] font-bold text-lg mb-3">SNS運用代行・コンサルティング</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Instagram・TikTok・公式LINEを活用した企業の集客支援・採用支援・ブランディング支援。
                    100社以上で確立した「再現性ある勝利の方程式」を基に、自社制作コンテンツで成果を出す。
                  </p>
                </div>
                <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-8">
                  <p className="text-[#CC2222] text-xs font-bold tracking-widest uppercase mb-3">AI事業</p>
                  <h3 className="text-[#F8F8F8] font-bold text-lg mb-3">SoloptiLink AI 販売・導入支援</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    日本語で指示するだけで業務システムを自動生成するAIツール「SoloptiLink AI」の販売・導入支援。
                    エンジニア不要・IT知識ゼロで中小企業のDXを実現。月500万円以上の経費削減事例あり。
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
