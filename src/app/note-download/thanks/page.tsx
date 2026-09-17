import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import { FileText, FileSpreadsheet, CheckCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

// フォームを通らずに検索から直接来られると、誰が受け取ったか分からなくなるため検索避けにする
export const metadata: Metadata = {
  title: "資料のダウンロード",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

const FILES = [
  {
    title: "SNS運用 月次レポートテンプレート",
    desc: "見る数字と捨てる数字を分けたレポート様式。記入例つき",
    links: [
      { label: "PDF", href: "/documents/note/saison-monthly-report-template.pdf", icon: "pdf" },
      { label: "表計算ソフト用（CSV一式）", href: "/documents/note/saison-monthly-report-csv.zip", icon: "csv" },
    ],
  },
  {
    title: "採用SNS立ち上げチェックリスト30項目",
    desc: "建設・介護の採用SNSを始める前に決めておくこと",
    links: [
      { label: "PDF", href: "/documents/note/saison-recruit-sns-checklist.pdf", icon: "pdf" },
    ],
  },
  {
    title: "投稿カレンダー 年間テンプレート",
    desc: "業種別の年間投稿計画。表計算ソフトでそのまま使えます",
    links: [
      { label: "PDF", href: "/documents/note/saison-post-calendar.pdf", icon: "pdf" },
      { label: "表計算ソフト用（CSV一式）", href: "/documents/note/saison-post-calendar-csv.zip", icon: "csv" },
    ],
  },
];

export default function NoteDownloadThanksPage() {
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
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeInSection>
            <div className="w-16 h-16 rounded-full bg-[#CC2222]/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#CC2222]" />
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              資料のご用意ができました
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              下のボタンからダウンロードしてください。
              <br className="hidden sm:block" />
              同じ内容をメールでもお送りしていますので、あとからでも受け取れます。
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ダウンロード一覧 */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-5">
          {FILES.map((f, i) => (
            <FadeInSection key={i} delay={i * 80}>
              <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-7">
                <p className="text-[#F8F8F8] text-lg font-bold mb-2">{f.title}</p>
                <p className="text-white/40 text-sm leading-relaxed mb-5">
                  {f.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {f.links.map((l, j) => (
                    <a
                      key={j}
                      href={l.href}
                      download
                      className="inline-flex items-center gap-2 border border-white/20 hover:border-[#CC2222] hover:text-white text-white/70 text-sm font-bold px-5 py-3 rounded-full transition-all duration-300"
                    >
                      {l.icon === "pdf" ? (
                        <FileText className="w-4 h-4 text-[#CC2222]" />
                      ) : (
                        <FileSpreadsheet className="w-4 h-4 text-[#CC2222]" />
                      )}
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* 相談への導線 */}
      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <div className="bg-[#141414] border border-[#CC2222]/30 rounded-2xl p-8 text-center">
              <h2
                className="text-xl sm:text-2xl font-bold text-[#F8F8F8] mb-4"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                御社の場合はどうか、30分でご説明することもできます
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-7">
                資料をご覧になって疑問が出てきましたら、そのままメールにご返信ください。
                建設・介護を中心に、実際の運用でどう使っているかをお話しします。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#CC2222] hover:bg-[#E53333] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,34,34,0.4)] text-base"
              >
                ご相談はこちら
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
