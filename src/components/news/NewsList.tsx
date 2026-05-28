"use client";

import { useState } from "react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeader from "@/components/ui/SectionHeader";

interface NewsItem {
  date: string;
  title: string;
  category: "press" | "media" | "notice";
}

const NEWS_ITEMS: NewsItem[] = [
  {
    date: "2024/11/01",
    title: "株式会社セゾンとして新たに出発いたします",
    category: "press",
  },
  {
    date: "2024/10/15",
    title: "累計導入企業が100社を突破しました",
    category: "notice",
  },
  {
    date: "2024/09/01",
    title: "SoloptiLink AI をリリースしました",
    category: "press",
  },
  {
    date: "2024/08/20",
    title: "丸亀製麺様のSNS動画が400万回再生を達成",
    category: "media",
  },
  {
    date: "2024/07/10",
    title: "補助金・助成金支援サービスを開始しました",
    category: "notice",
  },
];

const CATEGORY_CONFIG: Record<
  NewsItem["category"] | "all",
  { label: string; color: string; bg: string }
> = {
  all: { label: "全て", color: "text-white/60", bg: "" },
  press: {
    label: "プレスリリース",
    color: "text-[#CC2222]",
    bg: "bg-[#CC2222]/10 border-[#CC2222]/20",
  },
  media: {
    label: "メディア掲載",
    color: "text-[#C9A84C]",
    bg: "bg-[#C9A84C]/10 border-[#C9A84C]/20",
  },
  notice: {
    label: "お知らせ",
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
  },
};

export default function NewsList() {
  const [activeCategory, setActiveCategory] = useState<
    NewsItem["category"] | "all"
  >("all");

  const filtered =
    activeCategory === "all"
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((n) => n.category === activeCategory);

  return (
    <>
      {/* カテゴリフィルター */}
      <section className="px-6 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {(["all", "press", "media", "notice"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-[#CC2222] text-white shadow-[0_0_20px_rgba(204,34,34,0.4)]"
                    : "border border-white/20 text-white/60 hover:border-[#CC2222] hover:text-[#CC2222]"
                }`}
              >
                {CATEGORY_CONFIG[key].label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ニュース一覧 */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <SectionHeader eyebrow="LATEST NEWS" title="最新情報" subtitle="" />
          </FadeInSection>

          <div className="space-y-4">
            {filtered.map((item, i) => {
              const config = CATEGORY_CONFIG[item.category];
              return (
                <FadeInSection key={i} delay={i * 80}>
                  <div className="bg-[#141414] border border-white/[0.06] rounded-xl px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-white/20 transition-all duration-300 group">
                    {/* 日付 */}
                    <span className="text-white/30 text-sm font-mono shrink-0">
                      {item.date}
                    </span>

                    {/* カテゴリバッジ */}
                    <span
                      className={`inline-flex items-center border text-xs font-bold px-3 py-1 rounded-full shrink-0 ${config.bg} ${config.color}`}
                    >
                      {config.label}
                    </span>

                    {/* タイトル */}
                    <span className="text-white/80 text-sm sm:text-base font-medium group-hover:text-[#F8F8F8] transition-colors">
                      {item.title}
                    </span>
                  </div>
                </FadeInSection>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-white/30">
              該当するニュースが見つかりませんでした。
            </div>
          )}
        </div>
      </section>
    </>
  );
}
