"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { casesData } from "@/data/cases";

const CATEGORY_LABELS: Record<string, string> = {
  all: "全て",
  sns: "SNS運用",
  video: "動画制作",
  web: "WEB制作",
};

const LOGOS = [
  { name: "アトレ恵比寿",        image: "/images/実績/atre.png" },
  { name: "サイゼリヤ",          image: "/images/実績/saizeriya.png" },
  { name: "ミサワホーム",        image: "/images/実績/misawahome.png" },
  { name: "ファミリーマート",     image: "/images/実績/famliymart.png" },
  { name: "WORLD FILM",         image: "/images/実績/worldfilm.png" },
  { name: "山﨑組",              image: "/images/実績/yamazakigumi.png" },
  { name: "浜トピ",              image: "/images/実績/hamatopi.png" },
  { name: "キャトルセゾン浜松",   image: "/images/実績/quatresaison.png" },
  { name: "まつ屋",              image: "/images/実績/mathuya.png" },
  { name: "アラジン",            image: "/images/実績/aladdin.png" },
  { name: "ひかり",              image: "/images/実績/hikari.png" },
  { name: "金太郎",              image: "/images/実績/kintaro.png" },
  { name: "マザアス",            image: "/images/実績/mazasu.png" },
  { name: "DARA",                image: "/images/実績/DARA.png" },
  { name: "DUAL",                image: "/images/実績/DUAL.png" },
  { name: "リンク",              image: "/images/実績/rinku.png" },
  { name: "Floom",               image: "/images/実績/23.png" },
];

export default function CasesList() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? casesData
      : casesData.filter((c) => c.category === activeCategory);

  return (
    <>
      {/* カテゴリフィルター */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-[#CC2222] text-white shadow-[0_0_20px_rgba(204,34,34,0.4)]"
                    : "border border-white/20 text-white/60 hover:border-[#CC2222] hover:text-[#CC2222]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 事例カードグリッド */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c, i) => (
              <FadeInSection key={c.slug} delay={i * 80}>
                <div className="bg-[#141414] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#CC2222]/40 hover:shadow-[0_0_40px_rgba(204,34,34,0.06)] transition-all duration-300 flex flex-col h-full group">
                  {/* サムネイル画像 */}
                  {c.category === "sns" && c.accountImages && c.accountImages.length > 0 ? (
                    /* SNS運用: アカウント画像を並べて表示 */
                    <div className="relative h-44 overflow-hidden flex-shrink-0 bg-[#1a1a1a]">
                      <div className="flex gap-0.5 h-full">
                        {c.accountImages.slice(0, 2).map((img, idx) => (
                          <div key={idx} className="relative flex-1 overflow-hidden">
                            <Image
                              src={img}
                              alt={`${c.clientName} アカウント ${idx + 1}`}
                              fill
                              className="object-cover object-top"
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 17vw"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#CC2222] text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase">
                          SNS運用
                        </span>
                      </div>
                      {c.image && (
                        <div className="absolute bottom-2 right-3 h-8 w-20 bg-white rounded-md overflow-hidden flex-shrink-0">
                          <Image src={c.image} alt={c.clientName} fill className="object-contain p-1" sizes="80px" />
                        </div>
                      )}
                    </div>
                  ) : c.category === "sns" && c.image ? (
                    /* SNS運用: ロゴのみ */
                    <div className="h-16 bg-gradient-to-br from-[#CC2222]/10 to-transparent flex items-center justify-between px-5 flex-shrink-0">
                      <span className="text-[#CC2222] text-xs font-bold tracking-[0.2em] uppercase">
                        {CATEGORY_LABELS[c.category] ?? c.category}
                      </span>
                      <div className="relative h-9 w-24 bg-white rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={c.image}
                          alt={c.clientName}
                          fill
                          className="object-contain p-1.5"
                          sizes="96px"
                        />
                      </div>
                    </div>
                  ) : c.image ? (
                    /* 動画・WEB制作: フルサイズサムネイル */
                    <div className="relative h-44 overflow-hidden flex-shrink-0">
                      <Image
                        src={c.image}
                        alt={c.clientName}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#CC2222] text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase">
                          {CATEGORY_LABELS[c.category] ?? c.category}
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* 画像なし */
                    <div className="h-16 bg-gradient-to-br from-[#CC2222]/10 to-transparent flex items-center justify-start px-6">
                      <span className="text-[#CC2222] text-xs font-bold tracking-[0.2em] uppercase">
                        {CATEGORY_LABELS[c.category] ?? c.category}
                      </span>
                    </div>
                  )}

                  {/* カード本文 */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* 業種 */}
                    <p className="text-white/30 text-xs mb-2">{c.industry}</p>

                    {/* 会社名 */}
                    <h3
                      className="text-lg font-bold text-[#F8F8F8] mb-3 leading-snug"
                      style={{ fontFamily: "Noto Serif JP, serif" }}
                    >
                      {c.clientName}
                    </h3>

                    {/* ROI */}
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-4 h-4 text-[#C9A84C]" />
                      <span className="text-[#C9A84C] font-bold text-sm">{c.roi}</span>
                    </div>

                    {/* ビフォーアフター（最初の1件） */}
                    {c.beforeStats[0] && c.afterStats[0] && (
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="bg-white/[0.03] rounded-xl p-3">
                          <p className="text-white/30 text-xs mb-1">Before</p>
                          <p className="text-white/50 text-xs">{c.beforeStats[0].label}</p>
                          <p className="text-white font-bold text-sm mt-0.5">{c.beforeStats[0].value}</p>
                        </div>
                        <div className="bg-[#CC2222]/10 rounded-xl p-3">
                          <p className="text-[#CC2222] text-xs mb-1">After</p>
                          <p className="text-white/50 text-xs">{c.afterStats[0].label}</p>
                          <p className="text-[#CC2222] font-bold text-sm mt-0.5">{c.afterStats[0].value}</p>
                        </div>
                      </div>
                    )}

                    {/* 詳細リンク */}
                    <div className="mt-auto">
                      <Link
                        href={`/cases/${c.slug}`}
                        className="inline-flex items-center gap-2 text-[#CC2222] text-sm font-bold hover:gap-3 transition-all duration-300"
                      >
                        詳細を見る <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-white/30">
              該当する事例が見つかりませんでした。
            </div>
          )}
        </div>
      </section>

      {/* 大手実績ロゴ */}
      <section className="py-20 px-6 bg-[#0c0c0c] border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="MAJOR CLIENTS"
              title="大手実績"
              subtitle="日本を代表するブランドと共に、確かな結果を積み上げてきました"
            />
          </FadeInSection>
          <FadeInSection delay={200}>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
              {LOGOS.map((logo, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-xl py-5 px-6 flex items-center justify-center hover:border-gray-300 hover:shadow-md transition-all duration-300 group"
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={140}
                    height={50}
                    className="h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#CC2222] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white opacity-[0.04] blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              次はあなたの会社の番です
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-10">
              御社の課題をお聞かせください。最適な解決策をご提案します。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#CC2222] font-bold px-10 py-5 rounded-full hover:bg-[#F8F8F8] transition-all duration-300 text-base"
            >
              無料相談を申し込む
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
