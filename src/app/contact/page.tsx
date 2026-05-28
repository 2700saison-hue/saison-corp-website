import FadeInSection from "@/components/ui/FadeInSection";
import ContactForm from "@/components/contact/ContactForm";
import DocumentRequestSection from "@/components/contact/DocumentRequestSection";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://seasonsezon.co.jp" },
    { "@type": "ListItem", position: 2, name: "お問い合わせ", item: "https://seasonsezon.co.jp/contact" },
  ],
};

export const metadata: Metadata = {
  title: "お問い合わせ・資料請求",
  description:
    "株式会社セゾンへの無料相談・お問い合わせ・資料請求はこちら。SoloptiLink AI・SNS運用代行・ホームページ制作など各サービスの詳細資料を無料でダウンロード。相談・見積もりも完全無料。",
  keywords: [
    "株式会社セゾン お問い合わせ",
    "SNS運用代行 無料相談",
    "SoloptiLink AI 資料請求",
    "ホームページ制作 見積もり",
    "マーケティング支援 無料相談",
    "株式会社セゾン 資料",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/contact",
  },
  openGraph: {
    title: "お問い合わせ・資料請求 | 株式会社セゾン",
    description:
      "相談・見積もり・資料請求はすべて無料。SNS運用・AI・DX支援のご相談お待ちしています。",
    url: "https://seasonsezon.co.jp/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#080808] text-[#F8F8F8] min-h-screen">
      <JsonLd data={breadcrumbSchema} />
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
              CONTACT
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              お問い合わせ・資料請求
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              資料のダウンロードも、相談・見積もりも完全無料です。お気軽にご利用ください。
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* 資料請求セクション */}
      <DocumentRequestSection />

      {/* 区切り線 */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="border-t border-white/[0.06]" />
        <div className="text-center mt-10 mb-2">
          <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-4">CONTACT</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#F8F8F8]"
            style={{ fontFamily: "Noto Serif JP, serif" }}
          >
            お問い合わせ
          </h2>
        </div>
      </div>

      {/* クライアントコンポーネント（2カラム: 会社情報＋フォーム） */}
      <ContactForm />
    </div>
  );
}
