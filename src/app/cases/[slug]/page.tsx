import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import { casesData } from "@/data/cases";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const BASE_URL = "https://seasonsezon.co.jp";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return casesData.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseItem = casesData.find((c) => c.slug === slug);
  if (!caseItem) return { title: "事例が見つかりません" };
  const categoryLabel: Record<string, string> = {
    sns: "SNS運用代行",
    video: "動画制作",
    web: "WEB制作",
    line: "LINE構築",
    meo: "MEO対策",
  };
  const cat = categoryLabel[caseItem.category] ?? "デジタルマーケティング";
  return {
    title: `${caseItem.clientName} 導入事例`,
    description: `${caseItem.clientName}の${cat}導入事例。${caseItem.roi}を実現。課題：${caseItem.challenge} 解決策：${caseItem.solution}`,
    keywords: [
      `${caseItem.clientName} 導入事例`,
      `${cat} 事例`,
      `${caseItem.industry} SNS運用`,
      "株式会社セゾン 実績",
      cat,
    ],
    alternates: {
      canonical: `${BASE_URL}/cases/${slug}`,
    },
    openGraph: {
      title: `${caseItem.clientName} 導入事例 | 株式会社セゾン`,
      description: `${caseItem.roi}を実現。${caseItem.solution}`,
      url: `${BASE_URL}/cases/${slug}`,
      type: "article",
      ...(caseItem.image
        ? {
            images: [
              {
                url: `${BASE_URL}${caseItem.image}`,
                width: 800,
                height: 600,
                alt: `${caseItem.clientName} 導入事例`,
              },
            ],
          }
        : {}),
    },
  };
}

const CATEGORY_LABELS: Record<string, string> = {
  sns: "SNS運用",
  video: "動画制作",
  web: "WEB制作",
  line: "LINE",
  meo: "MEO",
};

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const caseItem = casesData.find((c) => c.slug === slug);

  if (!caseItem) {
    notFound();
  }

  // JSON-LD構造化データ
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "導入事例",
        item: `${BASE_URL}/cases`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${caseItem.clientName} 導入事例`,
        item: `${BASE_URL}/cases/${caseItem.slug}`,
      },
    ],
  };

  const caseSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${BASE_URL}/cases/${caseItem.slug}`,
    headline: `${caseItem.clientName} 導入事例 | 株式会社セゾン`,
    description: `${caseItem.roi}を実現。${caseItem.solution}`,
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
    ...(caseItem.testimonial
      ? {
          review: {
            "@type": "Review",
            reviewBody: caseItem.testimonial,
            author: {
              "@type": "Person",
              name: caseItem.testimonialName ?? caseItem.clientName,
              jobTitle: caseItem.testimonialRole ?? "ご担当者様",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
          },
        }
      : {}),
  };

  return (
    <div className="bg-[#080808] text-[#F8F8F8] min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={caseSchema} />
      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(248,248,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,248,248,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#CC2222] opacity-[0.05] blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <FadeInSection>
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 text-sm mb-10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              導入事例一覧に戻る
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-[#CC2222]/20 text-[#CC2222] text-xs font-bold px-4 py-1.5 rounded-full tracking-wider">
                {CATEGORY_LABELS[caseItem.category] ?? caseItem.category}
              </span>
              <span className="text-white/30 text-xs">{caseItem.industry}</span>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              {caseItem.clientName}
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-bold text-[#C9A84C]" style={{ fontFamily: "Noto Serif JP, serif" }}>
                {caseItem.roi}
              </span>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ─── CHALLENGE ────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0c0c0c]">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.3em] uppercase mb-4">CHALLENGE</p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#F8F8F8] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              課題・背景
            </h2>
            <div className="w-12 h-0.5 bg-[#CC2222] mb-8" />
            {caseItem.challengeDetail ? (
              <div className="max-w-3xl space-y-5">
                {caseItem.challengeDetail.split("\n\n").map((para, i) => (
                  <p key={i} className="text-white/70 text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-white/70 text-base leading-relaxed max-w-3xl">{caseItem.challenge}</p>
            )}
          </FadeInSection>
        </div>
      </section>

      {/* ─── SOLUTION ─────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-[#C9A84C] text-xs font-bold tracking-[0.3em] uppercase mb-4">SOLUTION</p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#F8F8F8] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              セゾンの解決策
            </h2>
            <div className="w-12 h-0.5 bg-[#C9A84C] mb-8" />
            {caseItem.solutionDetail ? (
              <div className="max-w-3xl space-y-5">
                {caseItem.solutionDetail.split("\n\n").map((para, i) => (
                  <p key={i} className="text-white/70 text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-white/70 text-base leading-relaxed max-w-3xl">{caseItem.solution}</p>
            )}
          </FadeInSection>
        </div>
      </section>

      {/* ─── ACCOUNT IMAGES ───────────────────────────── */}
      {caseItem.accountImages && caseItem.accountImages.length > 0 && (
        <section className="py-20 px-6 bg-[#0c0c0c]">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <p className="text-[#CC2222] text-xs font-bold tracking-[0.3em] uppercase mb-4">SNS ACCOUNT</p>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#F8F8F8] mb-6"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                SNSアカウント
              </h2>
              <div className="w-12 h-0.5 bg-[#CC2222] mb-10" />
            </FadeInSection>
            <div className={`grid gap-4 ${caseItem.accountImages.length === 1 ? "grid-cols-1 max-w-sm" : "grid-cols-2"}`}>
              {caseItem.accountImages.map((img, i) => (
                <FadeInSection key={i} delay={i * 100}>
                  <div className="relative w-full aspect-[9/16] sm:aspect-[3/5] rounded-2xl overflow-hidden border border-white/[0.08]">
                    <Image
                      src={img}
                      alt={`${caseItem.clientName} SNSアカウント ${i + 1}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 50vw, 400px"
                    />
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── PROCESS ──────────────────────────────────── */}
      {caseItem.processSteps && caseItem.processSteps.length > 0 && (
        <section className="py-20 px-6 bg-[#0c0c0c]">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-4">PROCESS</p>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#F8F8F8] mb-6"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                実施プロセス
              </h2>
              <div className="w-12 h-0.5 bg-[#CC2222] mb-12" />
            </FadeInSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseItem.processSteps.map((step, i) => (
                <FadeInSection key={i} delay={i * 80}>
                  <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-7 h-full flex flex-col gap-4 hover:border-[#CC2222]/30 transition-colors">
                    <span
                      className="text-4xl font-bold text-[#CC2222]/25"
                      style={{ fontFamily: "Noto Serif JP, serif" }}
                    >
                      {step.num}
                    </span>
                    <h3 className="text-base font-bold text-[#F8F8F8]">{step.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed flex-1">{step.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── RESULTS (Before / After) ─────────────────── */}
      <section className="py-20 px-6 bg-[#0c0c0c]">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-4">RESULTS</p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#F8F8F8] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              Before / After
            </h2>
            <div className="w-12 h-0.5 bg-[#CC2222] mb-12" />
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <FadeInSection direction="left" delay={100}>
              <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-8">
                <p className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase mb-6">Before</p>
                <div className="space-y-6">
                  {caseItem.beforeStats.map((stat, i) => (
                    <div key={i} className="border-b border-white/[0.06] pb-5 last:border-0 last:pb-0">
                      <p className="text-white/40 text-sm mb-2">{stat.label}</p>
                      <p className="text-2xl font-bold text-white/60" style={{ fontFamily: "Noto Serif JP, serif" }}>
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* After */}
            <FadeInSection direction="right" delay={100}>
              <div className="bg-[#141414] border border-[#CC2222]/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(204,34,34,0.08)]">
                <p className="text-[#CC2222] text-xs font-bold tracking-[0.3em] uppercase mb-6">After</p>
                <div className="space-y-6">
                  {caseItem.afterStats.map((stat, i) => (
                    <div key={i} className="border-b border-white/[0.06] pb-5 last:border-0 last:pb-0">
                      <p className="text-white/40 text-sm mb-2">{stat.label}</p>
                      <p className="text-2xl font-bold text-[#CC2222]" style={{ fontFamily: "Noto Serif JP, serif" }}>
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* ROI ハイライト */}
          <FadeInSection delay={300}>
            <div className="mt-8 bg-gradient-to-r from-[#CC2222]/10 to-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-2xl p-8 text-center">
              <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-3">総合成果</p>
              <p
                className="text-4xl sm:text-5xl font-bold text-[#C9A84C]"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                {caseItem.roi}
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ─── INTERVIEW ────────────────────────────────── */}
      {caseItem.interviewQA && caseItem.interviewQA.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <p className="text-[#CC2222] text-xs font-bold tracking-[0.3em] uppercase mb-4 text-center">
                INTERVIEW
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#F8F8F8] mb-12 text-center"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                お客様インタビュー
              </h2>
            </FadeInSection>
            <div className="space-y-6">
              {caseItem.interviewQA.map((item, i) => (
                <FadeInSection key={i} delay={i * 100}>
                  <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-8">
                    <div className="flex gap-4 mb-5">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-[#CC2222] flex items-center justify-center text-white text-xs font-bold">
                        Q
                      </span>
                      <p className="font-bold text-[#F8F8F8] text-base leading-relaxed">{item.q}</p>
                    </div>
                    <div className="flex gap-4 pl-0">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] text-xs font-bold">
                        A
                      </span>
                      <p className="text-[#C9A84C]/90 text-base leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
              {(caseItem.testimonialName || caseItem.testimonialRole) && (
                <FadeInSection delay={caseItem.interviewQA.length * 100 + 50}>
                  <p className="text-white/40 text-sm text-right mt-2">
                    — {caseItem.testimonialName}
                    {caseItem.testimonialRole && (
                      <span className="ml-2 text-white/30">{caseItem.testimonialRole}</span>
                    )}
                  </p>
                </FadeInSection>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ─── TESTIMONIAL ──────────────────────────────── */}
      {caseItem.testimonial && (
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-4 text-center">
                TESTIMONIAL
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#F8F8F8] mb-12 text-center"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                お客様の声
              </h2>
              <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-10 relative">
                <Quote className="w-10 h-10 text-[#CC2222]/30 absolute top-8 left-8" />
                <p className="text-white/80 text-lg leading-relaxed text-center italic pl-4">
                  {caseItem.testimonial}
                </p>
                <p className="text-white/30 text-sm text-right mt-6">
                  — {caseItem.testimonialName ?? caseItem.clientName}
                  {caseItem.testimonialRole && (
                    <span className="ml-2 text-white/20">{caseItem.testimonialRole}</span>
                  )}
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* ─── CTA ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#CC2222] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white opacity-[0.04] blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              貴社でも同じ結果を
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-10">
              まずはお気軽にご相談ください。御社の課題に合った最適な解決策をご提案します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#CC2222] font-bold px-10 py-5 rounded-full hover:bg-[#F8F8F8] transition-all duration-300 text-base"
              >
                無料相談を申し込む
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold px-10 py-5 rounded-full hover:border-white transition-all duration-300 text-base"
              >
                他の事例を見る
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
