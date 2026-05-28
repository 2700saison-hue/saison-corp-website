import Image from "next/image";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { teamMembers } from "@/data/team";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://seasonsezon.co.jp" },
    { "@type": "ListItem", position: 2, name: "チーム紹介", item: "https://seasonsezon.co.jp/about/team" },
  ],
};

export const metadata: Metadata = {
  title: "チーム紹介",
  description:
    "株式会社セゾンを支えるプロフェッショナルチームのご紹介。代表取締役 古田太陽を中心に、SNS運用・動画制作・AI導入の専門家が集まる精鋭チームです。",
  keywords: [
    "株式会社セゾン チーム",
    "セゾン メンバー",
    "古田太陽 チーム",
    "SNS運用 専門家",
    "デジタルマーケティング チーム",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/about/team",
  },
};

export default function TeamPage() {
  return (
    <div className="bg-[#080808] text-[#F8F8F8]">
      <JsonLd data={breadcrumbSchema} />
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
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#CC2222] opacity-[0.04] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C9A84C] opacity-[0.03] blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">OUR TEAM</p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F8F8F8] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              チーム紹介
            </h1>
            <div className="w-16 h-0.5 bg-[#CC2222] mx-auto mb-8" />
            <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto">
              それぞれの専門性を持ち寄り、お客様の変革を全力で支える精鋭チーム
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* チームメンバー */}
      <section className="py-16 px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="MEMBERS"
              title="メンバー"
              subtitle="株式会社セゾンを支える3名のプロフェッショナル"
            />
          </FadeInSection>

          <div className="space-y-8">
            {teamMembers.map((member, i) => (
              <FadeInSection key={i} delay={i * 150} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="bg-[#141414] border border-white/[0.06] rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row">
                    {/* 写真エリア */}
                    <div className="lg:w-72 xl:w-80 flex-shrink-0">
                      <div className="relative w-full h-64 lg:h-full min-h-[320px] overflow-hidden">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 1024px) 100vw, 320px"
                          />
                        ) : (
                          <div
                            className="w-full h-full flex items-center justify-center text-5xl font-bold"
                            style={{
                              background: i === 1 ? "linear-gradient(135deg, #1a1a1a 0%, #1e1410 100%)" : "linear-gradient(135deg, #1a1a1a 0%, #1a0a0a 100%)",
                              color: i === 1 ? "#C9A84C" : "#CC2222",
                            }}
                          >
                            {member.name.charAt(0)}
                          </div>
                        )}
                        {/* グラデーションオーバーレイ（右端に向けてフェード） */}
                        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-r from-transparent to-[#141414]" />
                        <div className="lg:hidden absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#141414] to-transparent" />
                      </div>
                    </div>

                    {/* コンテンツ */}
                    <div className="flex-1 p-8 sm:p-10 lg:p-12">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div>
                          <p
                            className="text-xs font-bold tracking-[0.3em] uppercase mb-2"
                            style={{ color: i === 1 ? "#C9A84C" : "#CC2222" }}
                          >
                            {member.position}
                          </p>
                          <h2
                            className="text-2xl sm:text-3xl font-bold text-[#F8F8F8]"
                            style={{ fontFamily: "Noto Serif JP, serif" }}
                          >
                            {member.name}
                          </h2>
                          <p className="text-white/30 text-sm mt-1">{member.nameRoman}</p>
                        </div>
                        <div
                          className="px-4 py-2 rounded-full border text-xs font-bold"
                          style={{
                            borderColor: i === 1 ? "rgba(201,168,76,0.3)" : "rgba(204,34,34,0.3)",
                            color: i === 1 ? "#C9A84C" : "#CC2222",
                            background: i === 1 ? "rgba(201,168,76,0.05)" : "rgba(204,34,34,0.05)",
                          }}
                        >
                          {member.position}
                        </div>
                      </div>

                      {/* キャッチコピー */}
                      <p
                        className="text-xl sm:text-2xl font-bold mb-6 leading-[1.5]"
                        style={{
                          fontFamily: "Noto Serif JP, serif",
                          color: i === 1 ? "#C9A84C" : "#CC2222",
                        }}
                      >
                        「{member.catchphrase}」
                      </p>

                      {/* Bio */}
                      <p className="text-white/50 text-sm leading-[2] mb-8">{member.bio}</p>

                      {/* 担当領域 */}
                      <div>
                        <p className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase mb-3">担当領域</p>
                        <div className="flex flex-wrap gap-2">
                          {member.domains.map((domain, j) => (
                            <span
                              key={j}
                              className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-white/50"
                            >
                              {domain}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 採用セクション */}
      <section className="py-24 px-6 bg-[#0c0c0c]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">JOIN US</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#F8F8F8] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              一緒に変革を起こしませんか
            </h2>
            <div className="w-12 h-0.5 bg-[#CC2222] mx-auto mb-8" />
            <p className="text-white/50 text-sm leading-relaxed mb-10">
              セゾンでは、AI・SNS・DXの最前線で活躍したい仲間を探しています。
              「行動」が好きな人、「結果」にこだわれる人、ぜひ一緒に働きましょう。
            </p>
            <a
              href="/recruit"
              className="inline-flex items-center justify-center gap-2 bg-[#CC2222] hover:bg-[#E53333] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,34,34,0.4)]"
            >
              採用情報を見る
            </a>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
