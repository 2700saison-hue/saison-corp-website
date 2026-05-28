import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeInSection from "@/components/ui/FadeInSection";
import JsonLd from "@/components/seo/JsonLd";
import { columnsData, COLUMN_CATEGORY_LABELS } from "@/data/columns";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";

const BASE_URL = "https://seasonsezon.co.jp";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return columnsData.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const col = columnsData.find((c) => c.slug === slug);
  if (!col) return { title: "記事が見つかりません" };
  return {
    title: col.title,
    description: col.description,
    keywords: col.tags,
    alternates: { canonical: `${BASE_URL}/column/${slug}` },
    openGraph: {
      title: `${col.title} | 株式会社セゾン`,
      description: col.description,
      url: `${BASE_URL}/column/${slug}`,
      type: "article",
      publishedTime: col.publishedAt,
      authors: ["株式会社セゾン"],
    },
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  sns: "#CC2222",
  ai: "#C9A84C",
  marketing: "#5B7FA6",
  subsidy: "#4CAF50",
  case: "#9C27B0",
};

export default async function ColumnDetailPage({ params }: Props) {
  const { slug } = await params;
  const col = columnsData.find((c) => c.slug === slug);
  if (!col) notFound();

  const catColor = CATEGORY_COLORS[col.category] ?? "#CC2222";
  const catLabel = COLUMN_CATEGORY_LABELS[col.category];

  // 関連記事（同カテゴリ or 他記事から最大3件）
  const related = columnsData
    .filter((c) => c.slug !== col.slug)
    .sort((a, b) => (a.category === col.category ? -1 : 1))
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BASE_URL}/column/${col.slug}`,
    headline: col.title,
    description: col.description,
    datePublished: col.publishedAt,
    dateModified: col.publishedAt,
    author: {
      "@type": "Organization",
      name: "株式会社セゾン",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "株式会社セゾン",
      url: BASE_URL,
    },
    keywords: col.tags.join(", "),
    articleSection: catLabel,
    url: `${BASE_URL}/column/${col.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/column/${col.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "コラム", item: `${BASE_URL}/column` },
      { "@type": "ListItem", position: 3, name: col.title, item: `${BASE_URL}/column/${col.slug}` },
    ],
  };

  return (
    <div className="bg-[#080808] text-[#F8F8F8] min-h-screen">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* パンくずリスト */}
      <div className="px-6 pt-24 pb-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-white/30 text-xs">
            <Link href="/" className="hover:text-white/60 transition-colors">ホーム</Link>
            <span>/</span>
            <Link href="/column" className="hover:text-white/60 transition-colors">コラム</Link>
            <span>/</span>
            <span className="text-white/50 truncate max-w-[200px]">{col.title}</span>
          </nav>
        </div>
      </div>

      {/* 記事ヘッダー */}
      <article className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            {/* カテゴリ・メタ情報 */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
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
              <span className="text-white/30 text-xs">
                {new Date(col.publishedAt).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {/* タイトル */}
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F8F8F8] leading-[1.4] mb-8"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              {col.title}
            </h1>

            {/* リード文 */}
            <p className="text-white/60 text-base leading-[2] mb-12 border-l-2 pl-4" style={{ borderColor: catColor }}>
              {col.description}
            </p>
          </FadeInSection>

          {/* 記事本文 */}
          <FadeInSection delay={100}>
            <div
              className="prose-custom text-white/80 leading-[2] text-sm sm:text-base"
              style={{
                "--accent-color": catColor,
              } as React.CSSProperties}
              dangerouslySetInnerHTML={{ __html: col.content }}
            />
          </FadeInSection>

          {/* タグ */}
          <FadeInSection delay={150}>
            <div className="mt-12 pt-8 border-t border-white/[0.06]">
              <div className="flex flex-wrap gap-2">
                {col.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-xs text-white/40 border border-white/[0.1] rounded-full px-3 py-1"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </article>

      {/* 著者情報（E-E-A-T強化） */}
      <section className="px-6 py-12 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-[#CC2222]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#CC2222] font-bold text-sm">セ</span>
              </div>
              <div>
                <p className="text-white/80 font-bold text-sm mb-1">株式会社セゾン 編集部</p>
                <p className="text-white/40 text-xs leading-relaxed">
                  SNS運用代行・AI導入支援・ホームページ制作を提供するデジタルマーケティング会社。
                  累計100社以上の支援実績から得たノウハウを発信しています。
                </p>
                <Link
                  href="/about/company"
                  className="inline-flex items-center gap-1 text-[#CC2222] text-xs font-bold mt-2 hover:underline"
                >
                  会社情報を見る <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 関連記事 */}
      {related.length > 0 && (
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <p className="text-[#CC2222] text-xs font-bold tracking-[0.3em] uppercase mb-4">
                RELATED
              </p>
              <h2
                className="text-2xl font-bold text-[#F8F8F8] mb-8"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                関連記事
              </h2>
            </FadeInSection>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r, i) => {
                const rColor = CATEGORY_COLORS[r.category] ?? "#CC2222";
                return (
                  <FadeInSection key={r.slug} delay={i * 80}>
                    <Link
                      href={`/column/${r.slug}`}
                      className="group bg-[#141414] border border-white/[0.06] rounded-xl overflow-hidden hover:border-[#CC2222]/40 transition-all duration-300 flex flex-col h-full"
                    >
                      <div className="h-0.5 w-full" style={{ backgroundColor: rColor }} />
                      <div className="p-4 flex flex-col flex-1">
                        <span
                          className="text-xs font-bold mb-2"
                          style={{ color: rColor }}
                        >
                          {COLUMN_CATEGORY_LABELS[r.category]}
                        </span>
                        <h3 className="text-white/80 text-sm font-medium leading-[1.6] group-hover:text-[#CC2222] transition-colors flex-1">
                          {r.title}
                        </h3>
                        <p className="text-white/30 text-xs mt-3">
                          {new Date(r.publishedAt).toLocaleDateString("ja-JP", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </Link>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </section>
      )}

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
              まずは無料で相談してみる
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-10">
              相談・見積もり・資料請求はすべて無料です。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#CC2222] text-white font-bold px-10 py-4 rounded-full hover:bg-[#aa1a1a] transition-colors duration-300"
              >
                無料で相談する
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/column"
                className="inline-flex items-center gap-2 border border-white/20 text-white/70 font-bold px-8 py-4 rounded-full hover:border-white/40 transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                コラム一覧に戻る
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
