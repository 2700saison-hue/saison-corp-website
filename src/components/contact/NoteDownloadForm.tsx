"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Send, FileText } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";

const DOCUMENTS = [
  {
    title: "SNS運用 月次レポートテンプレート",
    desc: "見る数字と捨てる数字を分けたレポート様式。記入例つき",
  },
  {
    title: "採用SNS立ち上げチェックリスト30項目",
    desc: "建設・介護の採用SNSを始める前に決めておくこと",
  },
  {
    title: "投稿カレンダー 年間テンプレート",
    desc: "業種別の年間投稿計画。表計算ソフトでそのまま使えます",
  },
];

export default function NoteDownloadForm() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [source, setSource] = useState("direct");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // どの記事シリーズから来たかを記録する（利用者の入力は増やさない）
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm = params.get("utm_content");
    const allowed = ["data", "fail", "industry", "other", "hp_column"];
    setSource(utm && allowed.includes(utm) ? utm : "direct");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/note-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ companyName, email, source }),
      });

      if (!res.ok) throw new Error("送信に失敗しました");

      router.push("/note-download/thanks");
    } catch {
      setError("送信に失敗しました。時間をおいて再度お試しください。");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-6 pb-32">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* 左: 何がもらえるか */}
          <FadeInSection direction="left">
            <div className="space-y-6">
              <div>
                <p className="text-[#CC2222] text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  FOR NOTE READERS
                </p>
                <h2
                  className="text-2xl font-bold text-[#F8F8F8] mb-2"
                  style={{ fontFamily: "Noto Serif JP, serif" }}
                >
                  お送りする資料
                </h2>
                <div className="w-8 h-0.5 bg-[#CC2222] mb-6" />
                <p className="text-white/50 text-sm leading-relaxed">
                  記事でご紹介した、実際に運用で使っているテンプレートです。
                  そのままコピーして自社のアカウントにお使いください。
                </p>
              </div>

              <div className="space-y-3">
                {DOCUMENTS.map((doc, i) => (
                  <div
                    key={i}
                    className="bg-[#141414] border border-white/[0.06] rounded-xl p-5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#CC2222]/10 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-[#CC2222]" />
                    </div>
                    <div>
                      <p className="text-[#F8F8F8] text-sm font-bold mb-1">
                        {doc.title}
                      </p>
                      <p className="text-white/40 text-xs leading-relaxed">
                        {doc.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* 右: フォーム */}
          <FadeInSection direction="right" delay={100}>
            <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-8">
              <h3
                className="text-xl font-bold text-[#F8F8F8] mb-2"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                2項目のご入力で受け取れます
              </h3>
              <p className="text-white/40 text-xs leading-relaxed mb-8">
                お電話番号やご予算はお伺いしません。
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/50 text-xs font-bold tracking-wider mb-2">
                    メールアドレス <span className="text-[#CC2222]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@company.com"
                    className="w-full bg-[#0A0A0A] border border-white/[0.08] rounded-xl px-4 py-3 text-[#F8F8F8] text-sm placeholder-white/20 focus:outline-none focus:border-[#CC2222] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-bold tracking-wider mb-2">
                    会社名 <span className="text-[#CC2222]">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="株式会社〇〇"
                    className="w-full bg-[#0A0A0A] border border-white/[0.08] rounded-xl px-4 py-3 text-[#F8F8F8] text-sm placeholder-white/20 focus:outline-none focus:border-[#CC2222] transition-colors"
                  />
                </div>

                {/* 流入元の記録（利用者には見えません） */}
                <input type="hidden" name="source" value={source} />

                {error && <p className="text-[#CC2222] text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#CC2222] hover:bg-[#E53333] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,34,34,0.4)] text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "送信中..."
                  ) : (
                    <>
                      資料を受け取る
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-white/30 text-xs leading-relaxed">
                  ご入力いただいたメールアドレスには、資料に関するご案内を数回お送りします。
                  配信の停止はいつでも可能です。
                </p>
              </form>

              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <p className="text-white/40 text-xs leading-relaxed">
                  すでにご相談内容がお決まりの方は、
                  <a
                    href="/contact"
                    className="text-[#CC2222] hover:underline font-bold"
                  >
                    お問い合わせフォーム
                  </a>
                  から直接どうぞ。
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
