import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import JsonLd from "@/components/seo/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要",
  description: "株式会社セゾンの会社概要。経営理念・代表メッセージ・チーム紹介・会社情報をご覧いただけます。SNS×AI×DXで100社以上の企業変革を支援する東京都足立区のデジタルマーケティング会社。",
  keywords: ["株式会社セゾン 会社概要", "セゾン 代表", "古田太陽", "足立区 マーケティング会社", "SNS運用代行 会社"],
  alternates: { canonical: "https://seasonsezon.co.jp/about" },
  openGraph: {
    title: "会社概要 | 株式会社セゾン",
    description: "SNS×AI×DXで100社以上の企業変革を支援する株式会社セゾンの会社概要ページ。",
    url: "https://seasonsezon.co.jp/about",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://seasonsezon.co.jp" },
    { "@type": "ListItem", position: 2, name: "会社概要", item: "https://seasonsezon.co.jp/about" },
  ],
};

const cards = [
  {
    image: "/images/about/philosophy.png",
    title: "経営理念",
    subtitle: "PHILOSOPHY",
    desc: "セゾンが目指す世界観と、事業を通じて実現したい社会へのビジョン",
    href: "/about/philosophy",
    accent: "#CC2222",
  },
  {
    image: "/images/team/CEO2.jpeg",
    title: "代表メッセージ",
    subtitle: "CEO MESSAGE",
    desc: "代表取締役 古田太陽からのメッセージ。セゾンが持つ強みと信念",
    href: "/about/ceo",
    accent: "#C9A84C",
  },
  {
    image: "/images/about/team.png",
    title: "チーム紹介",
    subtitle: "OUR TEAM",
    desc: "セゾンを支える精鋭チーム。各メンバーの役割と専門領域をご紹介",
    href: "/about/team",
    accent: "#CC2222",
  },
  {
    image: "/images/about/company.png",
    title: "会社情報",
    subtitle: "COMPANY INFO",
    desc: "株式会社セゾンの基本情報・所在地・事業内容の詳細",
    href: "/about/company",
    accent: "#C9A84C",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#080808] text-[#F8F8F8]">
      <JsonLd data={breadcrumbSchema} />
      {/* ヒーローバナー */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(248,248,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,248,248,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#CC2222] opacity-[0.05] blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">ABOUT SAISON</p>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#F8F8F8] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              会社概要
            </h1>
            <div className="w-16 h-0.5 bg-[#CC2222] mx-auto mb-8" />
            <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto">
              AI・SNS・DXで日本中の企業を変革する伴走者、株式会社セゾンについて
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* カードグリッド */}
      <section className="py-16 px-6 pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <Link
                  href={card.href}
                  className="group block relative rounded-3xl overflow-hidden border border-white/[0.06] hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:-translate-y-1"
                  style={{ aspectRatio: "4/3" }}
                >
                  {/* 背景画像 */}
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* グラデーションオーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/80 transition-all duration-500" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: `radial-gradient(ellipse at bottom left, ${card.accent}, transparent 70%)` }}
                  />

                  {/* テキスト */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                    <p
                      className="text-xs font-bold tracking-[0.35em] mb-2 transition-colors duration-300"
                      style={{ color: card.accent }}
                    >
                      {card.subtitle}
                    </p>
                    <h2
                      className="text-2xl sm:text-3xl font-bold text-white mb-3"
                      style={{ fontFamily: "Noto Serif JP, serif" }}
                    >
                      {card.title}
                    </h2>
                    <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-xs">
                      {card.desc}
                    </p>
                    <span
                      className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3"
                      style={{ color: card.accent }}
                    >
                      詳しく見る <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
