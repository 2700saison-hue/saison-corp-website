import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, Building2 } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { companyInfo } from "@/data/team";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://seasonsezon.co.jp" },
    { "@type": "ListItem", position: 2, name: "会社情報", item: "https://seasonsezon.co.jp/about/company" },
  ],
};

const companySchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://seasonsezon.co.jp/#organization",
  name: "株式会社セゾン",
  alternateName: "SAISON Co., Ltd.",
  url: "https://seasonsezon.co.jp",
  description: "SNS運用代行・AI導入支援・ホームページ制作・DX支援を提供するデジタルマーケティング会社。累計100社以上の導入実績。",
  foundingDate: "2023",
  founder: {
    "@type": "Person",
    name: "古田太陽",
    jobTitle: "代表取締役",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "新田3-37-12-708",
    addressLocality: "足立区",
    addressRegion: "東京都",
    addressCountry: "JP",
    postalCode: "120-0012",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Japanese",
    url: "https://seasonsezon.co.jp/contact",
  },
  areaServed: {
    "@type": "Country",
    name: "Japan",
  },
  knowsAbout: [
    "SNSマーケティング",
    "デジタルマーケティング",
    "AI業務自動化",
    "DX支援",
    "ホームページ制作",
    "動画制作",
  ],
};

export const metadata: Metadata = {
  title: "会社情報",
  description:
    "株式会社セゾン（SAISON Co., Ltd.）の会社情報。東京都足立区を拠点に、SNS運用代行・AI導入支援・ホームページ制作・DX支援を提供。代表取締役 古田太陽。設立・事業内容・アクセス情報をご確認いただけます。",
  keywords: [
    "株式会社セゾン 会社情報",
    "SAISON Co., Ltd.",
    "セゾン 東京 足立区",
    "古田太陽 会社",
    "デジタルマーケティング会社 東京",
    "SNS運用代行会社",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/about/company",
  },
};

const tableRows = [
  { label: "会社名", value: `${companyInfo.name}（${companyInfo.nameEn}）` },
  { label: "設立", value: companyInfo.established },
  { label: "代表者", value: `代表取締役　${companyInfo.representative}` },
  { label: "所在地", value: companyInfo.address },
  { label: "電話番号", value: companyInfo.phone },
  { label: "メールアドレス", value: companyInfo.email },
];

export default function CompanyPage() {
  return (
    <div className="bg-[#080808] text-[#F8F8F8]">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={companySchema} />
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
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#CC2222] opacity-[0.04] blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">COMPANY INFO</p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F8F8F8] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              会社情報
            </h1>
            <div className="w-16 h-0.5 bg-[#CC2222] mx-auto mb-8" />
            <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto">
              株式会社セゾンの基本情報・所在地・事業内容
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* 会社概要テーブル */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="OVERVIEW"
              title="会社概要"
              centered={false}
              light={false}
            />
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="bg-[#141414] border border-white/[0.06] rounded-2xl overflow-hidden">
              {tableRows.map((row, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row border-b border-white/[0.06] last:border-b-0"
                >
                  <div className="sm:w-40 flex-shrink-0 bg-[#1a1a1a] px-6 py-5 flex items-center">
                    <span className="text-white/50 text-sm font-medium">{row.label}</span>
                  </div>
                  <div className="flex-1 px-6 py-5 flex items-center">
                    <span className="text-[#F8F8F8] text-sm leading-relaxed">{row.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 事業内容 */}
      <section className="py-16 px-6 bg-[#0c0c0c]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="BUSINESS"
              title="事業内容"
              centered={false}
              light={false}
            />
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-8 sm:p-10">
              <div className="grid sm:grid-cols-2 gap-4">
                {companyInfo.business.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#CC2222]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#CC2222]" />
                    </div>
                    <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* アクセス・地図 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="ACCESS"
              title="所在地・アクセス"
              centered={false}
              light={false}
            />
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Google Maps */}
            <FadeInSection direction="left" delay={100}>
              <div className="bg-[#141414] border border-white/[0.06] rounded-2xl overflow-hidden h-64 md:h-80 relative">
                <iframe
                  src="https://maps.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%B6%B3%E7%AB%8B%E5%8C%BA%E6%96%B0%E7%94%B33-37-12&output=embed&hl=ja&z=16"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="株式会社セゾン 本社所在地"
                />
              </div>
            </FadeInSection>

            {/* 住所・連絡先 */}
            <FadeInSection direction="right" delay={150}>
              <div className="space-y-5">
                <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#CC2222]/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-[#CC2222]" />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs font-bold tracking-wider uppercase mb-1">本社所在地</p>
                      <p className="text-[#F8F8F8] text-sm leading-relaxed">{companyInfo.address}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#CC2222]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#CC2222]" />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs font-bold tracking-wider uppercase mb-1">電話番号</p>
                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="text-[#F8F8F8] text-sm hover:text-[#CC2222] transition-colors"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#CC2222]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#CC2222]" />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs font-bold tracking-wider uppercase mb-1">メールアドレス</p>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-[#F8F8F8] text-sm hover:text-[#CC2222] transition-colors break-all"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* お問い合わせCTA */}
      <section className="py-24 px-6 pb-32 bg-[#0c0c0c]">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <div className="bg-[#CC2222] rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative z-10">
                <p className="text-white/70 text-xs font-bold tracking-[0.4em] uppercase mb-4">CONTACT</p>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-white mb-4"
                  style={{ fontFamily: "Noto Serif JP, serif" }}
                >
                  お気軽にお問い合わせください
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  ご相談・お見積もりは無料です。まずはお気軽にご連絡ください。
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#CC2222] font-bold px-8 py-4 rounded-full hover:bg-[#F8F8F8] transition-all duration-300"
                >
                  お問い合わせはこちら <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
