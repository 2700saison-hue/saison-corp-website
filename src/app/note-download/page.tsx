import FadeInSection from "@/components/ui/FadeInSection";
import NoteDownloadForm from "@/components/contact/NoteDownloadForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "note読者の方へ｜資料3点を無料でお送りします",
  description:
    "noteでご紹介したSNS運用月次レポートテンプレート・採用SNS立ち上げチェックリスト・投稿カレンダー年間テンプレートを無料でお送りします。メールアドレスと会社名のみでお受け取りいただけます。",
  alternates: {
    canonical: "https://seasonsezon.co.jp/note-download",
  },
  openGraph: {
    title: "note読者の方へ｜資料3点を無料でお送りします | 株式会社セゾン",
    description:
      "実際の運用で使っているテンプレートをそのままお送りします。メールアドレスと会社名のみ。",
    url: "https://seasonsezon.co.jp/note-download",
    type: "website",
  },
};

export default function NoteDownloadPage() {
  return (
    <div className="bg-[#080808] text-[#F8F8F8] min-h-screen">
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
              DOCUMENT
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              note読者の方へ
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              記事でご紹介した資料3点を、無料でお送りします。
              <br className="hidden sm:block" />
              メールアドレスと会社名だけでお受け取りいただけます。
            </p>
          </FadeInSection>
        </div>
      </section>

      <NoteDownloadForm />
    </div>
  );
}
