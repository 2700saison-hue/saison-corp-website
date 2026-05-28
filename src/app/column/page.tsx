import type { Metadata } from "next";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import JsonLd from "@/components/seo/JsonLd";
import { columnsData, COLUMN_CATEGORY_LABELS } from "@/data/columns";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "コラム・ブログ",
  description:
    "株式会社セゾンのSNS運用・AI・DX・補助金活用に関するコラム・ブログ。100社以上の支援実績から得たノウハウを分かりやすく解説。SNS運用代行の選び方・Instagramフォロワー増加法・DX成功事例・IT導入補助金活用法など。",
  keywords: [
    "SNS運用 コラム",
    "デジタルマーケティング ブログ",
    "SNS運用代行 選び方",
    "Instagram 集客方法",
    "DX 中小企業 事例",
    "IT導入補助金 使い方",
    "ドラマ型動画 効果",
    "株式会社セゾン ブログ",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/column",
  },
  openGraph: {
    title: "コラム・ブログ | 株式会社セゾン",
    description:
      "SNS運用・AI・DX・補助金活用のノウハウを100社以上の実績から解説するコラム。",
    url: "https://seasonsezon.co.jp/column",
    type: "website",
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  sns: "#CC2222",
  ai: "#C9A84C",
  marketing: "#5B7FA6",
  subsidy: "#4CAF50",
  case: "#9C27B0",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://seasonsezon.co.jp" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://seasonsezon.co.jp/column" },
  ],
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://seasonsezon.co.jp/column",
  name: "株式会社セゾン コラム",
  description:
    "SNS運用・AI・DX・補助金活用に関するノウハウコラム",
  url: "https://seasonsezon.co.jp/column",
  publisher: {
    "@type": "Organization",
    name: "株式会社セゾン",
    url: "https://seasonsezon.co.jp",
  },
  blogPost: columnsData.map((col) => ({
    "@type": "BlogPosting",
    headline: col.title,
    description: col.description,
    url: `https://seasonsezon.co.jp/column/${col.slug}`,
    datePublished: col.publishedAt,
    author: {
      "@type": "Organization",
      name: "株式会社セゾン",
    },
  })),
};

export default function ColumnPage() {
  // 新しい順にソート
  const sorted = [...columnsData].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="bg-[#080808] text-[#F8F8F8] min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={blogSchema} />

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#CC2222] opacity-[0.05] blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">
              COLUMN
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              コラム
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              SNS運用・AI・DX・補助金活用に関するノウハウを、
              <br className="hidden sm:block" />
              100社以上の支援実績から分かりやすく解説します。
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* 記事一覧 */}
      <section className="py-8 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((col, i) => {
              const catColor = CATEGORY_COLORS[col.category] ?? "#CC2222";
              const catLabel = COLUMN_CATEGORY_LABELS[col.category];
              return (
                <FadeInSection key={col.slug} delay={i * 80}>
                  <Link
                    href={`/column/${col.slug}`}
                    className="group bg-[#141414] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#CC2222]/40 hover:shadow-[0_0_40px_rgba(204,34,34,0.06)] transition-all duration-300 flex flex-col h-full"
                  >
                    {/* カラーバー */}
                    <div
                      className="h-1 w-full"
                      style={{ backgroundColor: catColor }}
                    />

                    <div className="p-6 flex flex-col flex-1">
                      {/* カテゴリ・読み時間 */}
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="text-xs font-bold px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: `${catColor}20`,
                            color: catColor,
                            border: `1px solid ${catColor}40`,
                          }}
                        >
                          {catLabel}
                        </span>
                        <span className="flex items-center gap-1 text-white/30 text-xs">
                          <Clock className="w-3 h-3" />
                          {col.readMinutes}分で読める
                        </span>
                      </div>

                      {/* タイトル */}
                      <h2
                        className="text-base font-bold text-[#F8F8F8] mb-3 leading-[1.6] group-hover:text-[#CC2222] transition-colors duration-300 flex-1"
                        style={{ fontFamily: "Noto Serif JP, serif" }}
                      >
                        {col.title}
                      </h2>

                      {/* 説明 */}
                      <p className="text-white/40 text-xs leading-relaxed mb-4 line-clamp-2">
                        {col.description}
                      </p>

                      {/* フッター */}
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                        <span className="text-white/30 text-xs">
                          {new Date(col.publishedAt).toLocaleDateString("ja-JP", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1 text-[#CC2222] text-xs font-bold group-hover:gap-2 transition-all duration-300">
                          読む <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0c0c0c]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">
              CONTACT
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#F8F8F8] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              実際に試してみませんか？
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-10">
              相談・見積もり・資料請求はすべて無料です。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#CC2222] text-white font-bold px-10 py-4 rounded-full hover:bg-[#aa1a1a] transition-colors duration-300"
            >
              無料で相談する
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
