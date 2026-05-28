"use client";

import { useState } from "react";
import { FileText, Download, CheckCircle, Send, BookOpen, TrendingUp, Cpu } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";

const DOCUMENTS = [
  {
    id: "soloptilink",
    icon: Cpu,
    label: "SoloptiLink AI",
    title: "SoloptiLink AI 提案資料",
    desc: "AIを活用した業務効率化・売上向上の仕組みを詳しく解説。導入フロー・料金プランも掲載。",
    pages: "提案資料",
    file: "/documents/soloptilink-ai.pdf",
    accent: "#CC2222",
  },
  {
    id: "sns",
    icon: TrendingUp,
    label: "SNS運用代行",
    title: "SNS運用代行 サービス資料",
    desc: "ドラマ型動画×SNS戦略の全貌。サービス内容・実績・料金プランを網羅した公式資料。",
    pages: "サービス資料",
    file: "/documents/sns-service.pdf",
    accent: "#CC2222",
  },
  {
    id: "cases",
    icon: BookOpen,
    label: "導入事例集",
    title: "公開可能 87社 導入事例集",
    desc: "大手〜中小企業まで87社の実績を大公開。業種別の成果・ROI・施策内容を詳細に掲載。",
    pages: "事例集",
    file: "/documents/case-studies-87.pdf",
    accent: "#C9A84C",
  },
];

interface RequestState {
  [key: string]: "idle" | "open" | "submitting" | "done";
}

interface FormState {
  [key: string]: { name: string; email: string; company: string };
}

export default function DocumentRequestSection() {
  const [states, setStates] = useState<RequestState>({
    soloptilink: "idle",
    sns: "idle",
    cases: "idle",
  });
  const [forms, setForms] = useState<FormState>({
    soloptilink: { name: "", email: "", company: "" },
    sns: { name: "", email: "", company: "" },
    cases: { name: "", email: "", company: "" },
  });

  const openForm = (id: string) => {
    setStates((prev) => ({ ...prev, [id]: "open" }));
  };

  const handleChange = (id: string, field: string, value: string) => {
    setForms((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  const handleSubmit = async (id: string, docTitle: string, file: string) => {
    setStates((prev) => ({ ...prev, [id]: "submitting" }));
    const f = forms[id];
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: f.company || "未記入",
          name: f.name,
          email: f.email,
          message: `【資料請求】${docTitle} のダウンロードリクエストがありました。`,
        }),
      });
    } catch {
      // エラーがあっても資料は提供する
    }
    // ダウンロード実行
    const a = document.createElement("a");
    a.href = file;
    a.download = docTitle + ".pdf";
    a.click();
    setStates((prev) => ({ ...prev, [id]: "done" }));
  };

  return (
    <section className="px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-12">
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-4">
              DOCUMENTS
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#F8F8F8] mb-4"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              資料請求
            </h2>
            <p className="text-white/40 text-sm">
              お名前・メールアドレスをご入力いただくと、すぐにダウンロードできます。
            </p>
          </div>
        </FadeInSection>

        <div className="grid sm:grid-cols-3 gap-6">
          {DOCUMENTS.map((doc, i) => {
            const Icon = doc.icon;
            const state = states[doc.id];
            const form = forms[doc.id];

            return (
              <FadeInSection key={doc.id} delay={i * 80}>
                <div className="bg-[#111] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-[#CC2222]/30 transition-all duration-300 flex flex-col h-full">
                  {/* ヘッダー */}
                  <div className="px-6 pt-6 pb-4 border-b border-white/[0.05]">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${doc.accent}18`, border: `1px solid ${doc.accent}30` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: doc.accent }} />
                    </div>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: doc.accent }}>
                      {doc.label}
                    </p>
                    <h3 className="text-[#F8F8F8] font-bold text-base leading-snug mb-3" style={{ fontFamily: "Noto Serif JP, serif" }}>
                      {doc.title}
                    </h3>
                    <p className="text-white/40 text-xs leading-relaxed">{doc.desc}</p>
                  </div>

                  {/* アクション */}
                  <div className="px-6 py-5 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-white/30" />
                      <span className="text-white/30 text-xs">{doc.pages}</span>
                    </div>

                    {state === "done" ? (
                      <div className="flex items-center gap-2 text-[#CC2222] text-sm font-bold mt-auto">
                        <CheckCircle className="w-4 h-4" />
                        ダウンロード完了
                      </div>
                    ) : state === "idle" ? (
                      <button
                        onClick={() => openForm(doc.id)}
                        className="mt-auto w-full flex items-center justify-center gap-2 bg-[#CC2222] hover:bg-[#E53333] text-white text-sm font-bold px-4 py-3 rounded-xl transition-all duration-200"
                      >
                        <Download className="w-4 h-4" />
                        無料でダウンロード
                      </button>
                    ) : state === "open" || state === "submitting" ? (
                      <div className="mt-auto space-y-2.5">
                        <input
                          type="text"
                          placeholder="会社名"
                          value={form.company}
                          onChange={(e) => handleChange(doc.id, "company", e.target.value)}
                          className="w-full bg-[#1a1a1a] border border-white/[0.1] rounded-lg px-3 py-2.5 text-[#F8F8F8] text-xs placeholder-white/20 focus:outline-none focus:border-[#CC2222] transition-colors"
                        />
                        <input
                          type="text"
                          placeholder="お名前 *"
                          required
                          value={form.name}
                          onChange={(e) => handleChange(doc.id, "name", e.target.value)}
                          className="w-full bg-[#1a1a1a] border border-white/[0.1] rounded-lg px-3 py-2.5 text-[#F8F8F8] text-xs placeholder-white/20 focus:outline-none focus:border-[#CC2222] transition-colors"
                        />
                        <input
                          type="email"
                          placeholder="メールアドレス *"
                          required
                          value={form.email}
                          onChange={(e) => handleChange(doc.id, "email", e.target.value)}
                          className="w-full bg-[#1a1a1a] border border-white/[0.1] rounded-lg px-3 py-2.5 text-[#F8F8F8] text-xs placeholder-white/20 focus:outline-none focus:border-[#CC2222] transition-colors"
                        />
                        <button
                          onClick={() => {
                            if (!form.name || !form.email) return;
                            handleSubmit(doc.id, doc.title, doc.file);
                          }}
                          disabled={state === "submitting" || !form.name || !form.email}
                          className="w-full flex items-center justify-center gap-2 bg-[#CC2222] hover:bg-[#E53333] disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-all duration-200"
                        >
                          {state === "submitting" ? "処理中..." : (
                            <>
                              <Send className="w-3.5 h-3.5" />
                              ダウンロードする
                            </>
                          )}
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
