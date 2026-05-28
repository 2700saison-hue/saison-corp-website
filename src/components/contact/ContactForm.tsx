"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle, Send } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";

const SERVICES = [
  "SoloptiLink AI",
  "ドラマ型SNS動画",
  "ホームページ制作",
  "LP制作",
  "PR動画制作",
  "公式LINE",
  "システム開発",
  "補助金・助成金",
  "SNS・AI研修",
  "その他",
];

const BUDGET_OPTIONS = [
  "〜50万円",
  "50〜100万円",
  "100〜300万円",
  "300万円以上",
  "未定・相談したい",
];

interface FormData {
  companyName: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  services: string[];
  challenge: string;
  budget: string;
  contactPref: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  companyName: "",
  name: "",
  email: "",
  phone: "",
  position: "",
  services: [],
  challenge: "",
  budget: "",
  contactPref: "email",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceToggle = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const payload = {
        companyName: form.companyName,
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        position: form.position || undefined,
        service: form.services.join(", ") || undefined,
        challenge: form.challenge || undefined,
        budget: form.budget || undefined,
        contactPref: form.contactPref || undefined,
        message: form.message,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("送信に失敗しました");

      setSubmitted(true);
      setForm(INITIAL_FORM);
    } catch {
      setError("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-6 pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          {/* 左: 会社情報 */}
          <FadeInSection direction="left">
            <div className="space-y-8">
              <div>
                <p className="text-[#CC2222] text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  COMPANY INFO
                </p>
                <h2
                  className="text-2xl font-bold text-[#F8F8F8] mb-2"
                  style={{ fontFamily: "Noto Serif JP, serif" }}
                >
                  株式会社セゾン
                </h2>
                <div className="w-8 h-0.5 bg-[#CC2222] mb-6" />
                <p className="text-white/50 text-sm leading-relaxed">
                  AI・SNS・DXを軸に、日本中の企業変革を牽引するパートナー。
                  まずはお気軽にご相談ください。
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#CC2222]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#CC2222]" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs font-bold tracking-wider mb-1">
                      電話番号
                    </p>
                    <a
                      href="tel:090-1251-6837"
                      className="text-white/80 text-sm hover:text-[#CC2222] transition-colors"
                    >
                      090-1251-6837
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#CC2222]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#CC2222]" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs font-bold tracking-wider mb-1">
                      メールアドレス
                    </p>
                    <p className="text-white/80 text-sm">info@seasonsezon.co.jp</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#CC2222]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#CC2222]" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs font-bold tracking-wider mb-1">
                      所在地
                    </p>
                    <p className="text-white/80 text-sm">東京都足立区新田3-37-12-708</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#141414] border border-white/[0.06] rounded-xl p-6">
                <p className="text-white/30 text-xs font-bold tracking-wider mb-3">
                  返信について
                </p>
                <div className="space-y-2">
                  {["48時間以内にご返信", "完全無料・無理な営業なし", "秘密厳守"].map(
                    (item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-white/60 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-[#CC2222] shrink-0" />
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* 右: フォーム */}
          <FadeInSection direction="right" delay={100}>
            {submitted ? (
              <div className="bg-[#141414] border border-[#CC2222]/30 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#CC2222]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#CC2222]" />
                </div>
                <h3
                  className="text-2xl font-bold text-[#F8F8F8] mb-4"
                  style={{ fontFamily: "Noto Serif JP, serif" }}
                >
                  お問い合わせを受け付けました
                </h3>
                <p className="text-white/50 text-base leading-relaxed">
                  お送りいただきありがとうございます。
                  <br />
                  48時間以内に担当者よりご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 会社名・お名前 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs font-bold tracking-wider mb-2">
                      会社名 <span className="text-[#CC2222]">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={form.companyName}
                      onChange={handleChange}
                      placeholder="株式会社〇〇"
                      className="w-full bg-[#141414] border border-white/[0.08] rounded-xl px-4 py-3 text-[#F8F8F8] text-sm placeholder-white/20 focus:outline-none focus:border-[#CC2222] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs font-bold tracking-wider mb-2">
                      お名前 <span className="text-[#CC2222]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="山田 太郎"
                      className="w-full bg-[#141414] border border-white/[0.08] rounded-xl px-4 py-3 text-[#F8F8F8] text-sm placeholder-white/20 focus:outline-none focus:border-[#CC2222] transition-colors"
                    />
                  </div>
                </div>

                {/* メール・電話 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs font-bold tracking-wider mb-2">
                      メールアドレス <span className="text-[#CC2222]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@company.com"
                      className="w-full bg-[#141414] border border-white/[0.08] rounded-xl px-4 py-3 text-[#F8F8F8] text-sm placeholder-white/20 focus:outline-none focus:border-[#CC2222] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs font-bold tracking-wider mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="03-0000-0000"
                      className="w-full bg-[#141414] border border-white/[0.08] rounded-xl px-4 py-3 text-[#F8F8F8] text-sm placeholder-white/20 focus:outline-none focus:border-[#CC2222] transition-colors"
                    />
                  </div>
                </div>

                {/* 役職 */}
                <div>
                  <label className="block text-white/50 text-xs font-bold tracking-wider mb-2">
                    役職
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    placeholder="代表取締役 / マーケティング部長 など"
                    className="w-full bg-[#141414] border border-white/[0.08] rounded-xl px-4 py-3 text-[#F8F8F8] text-sm placeholder-white/20 focus:outline-none focus:border-[#CC2222] transition-colors"
                  />
                </div>

                {/* 興味のあるサービス */}
                <div>
                  <label className="block text-white/50 text-xs font-bold tracking-wider mb-3">
                    興味のあるサービス（複数選択可）
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => handleServiceToggle(s)}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                          form.services.includes(s)
                            ? "bg-[#CC2222] text-white"
                            : "border border-white/20 text-white/50 hover:border-[#CC2222] hover:text-white/80"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 現在の課題 */}
                <div>
                  <label className="block text-white/50 text-xs font-bold tracking-wider mb-2">
                    現在の課題
                  </label>
                  <textarea
                    name="challenge"
                    value={form.challenge}
                    onChange={handleChange}
                    rows={3}
                    placeholder="SNSの運用に課題を感じている、採用がうまくいかない など"
                    className="w-full bg-[#141414] border border-white/[0.08] rounded-xl px-4 py-3 text-[#F8F8F8] text-sm placeholder-white/20 focus:outline-none focus:border-[#CC2222] transition-colors resize-none"
                  />
                </div>

                {/* 売上規模 */}
                <div>
                  <label className="block text-white/50 text-xs font-bold tracking-wider mb-2">
                    ご予算感
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full bg-[#141414] border border-white/[0.08] rounded-xl px-4 py-3 text-[#F8F8F8] text-sm focus:outline-none focus:border-[#CC2222] transition-colors appearance-none"
                  >
                    <option value="">選択してください</option>
                    {BUDGET_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 希望連絡方法 */}
                <div>
                  <label className="block text-white/50 text-xs font-bold tracking-wider mb-3">
                    希望連絡方法
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { value: "phone", label: "電話" },
                      { value: "email", label: "メール" },
                      { value: "line", label: "LINE" },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="contactPref"
                          value={opt.value}
                          checked={form.contactPref === opt.value}
                          onChange={handleChange}
                          className="accent-[#CC2222]"
                        />
                        <span className="text-white/60 text-sm">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* メッセージ */}
                <div>
                  <label className="block text-white/50 text-xs font-bold tracking-wider mb-2">
                    メッセージ <span className="text-[#CC2222]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="お気軽にご相談内容をお書きください"
                    className="w-full bg-[#141414] border border-white/[0.08] rounded-xl px-4 py-3 text-[#F8F8F8] text-sm placeholder-white/20 focus:outline-none focus:border-[#CC2222] transition-colors resize-none"
                  />
                </div>

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
                      送信する
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
