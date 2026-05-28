"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  X,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";

/* ─────────────────────────────────────────
   リードゲートモーダル
───────────────────────────────────────── */
function LeadGateModal({
  url,
  title,
  onClose,
}: {
  url: string;
  title: string;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.phone || !form.email) {
      setError("お名前・電話番号・メールアドレスを入力してください。");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          message: `デモ閲覧リクエスト: ${title}`,
        }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error ?? "送信に失敗しました");
      }
      window.open(url, "_blank", "noopener,noreferrer");
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "送信に失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#CC2222]/60 transition-colors";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.85)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#111111] border border-white/10 rounded-2xl w-full max-w-md p-8 shadow-2xl">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.3em] uppercase mb-2">
              デモを見る前に
            </p>
            <h3
              className="text-xl font-bold text-white leading-snug"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              「{title}」を<br />無料で確認する
            </h3>
            <p className="text-white/40 text-sm mt-2">
              情報を入力後、すぐにご覧いただけます。
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/30 hover:text-white transition-colors ml-4 flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            placeholder="お名前 *"
            className={inputClass}
            required
          />
          <input
            value={form.companyName}
            onChange={(e) =>
              setForm((p) => ({ ...p, companyName: e.target.value }))
            }
            placeholder="会社名（任意）"
            className={inputClass}
          />
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            placeholder="電話番号 *"
            className={inputClass}
            required
          />
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            placeholder="メールアドレス *"
            className={inputClass}
            required
          />
          {error && <p className="text-red-400 text-xs">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#CC2222] hover:bg-[#E53333] text-white font-bold py-4 rounded-xl transition-all duration-300 mt-2 flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading ? (
              "確認中…"
            ) : (
              <>
                デモを見る <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
          <p className="text-white/20 text-xs text-center">
            強引な営業電話はいたしません。24時間以内にご連絡します。
          </p>
        </form>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   ROI 計算機
───────────────────────────────────────── */
const INDUSTRY_MULTIPLIERS: Record<string, number> = {
  製造業: 1.3,
  "IT・ソフトウェア": 1.2,
  "小売・EC": 1.15,
  "金融・保険": 1.25,
  "医療・介護": 1.1,
  "建設・不動産": 1.2,
  "物流・運輸": 1.15,
  その他: 1.1,
};

function RoiCalculator() {
  const [employees, setEmployees] = useState(10);
  const [industry, setIndustry] = useState("IT・ソフトウェア");
  const [hoursPerMonth, setHoursPerMonth] = useState(160);
  const [hourlyRate, setHourlyRate] = useState(3000);

  const multiplier = INDUSTRY_MULTIPLIERS[industry] ?? 1.1;
  const automationRate = 0.35;
  const monthlyHoursSaved =
    employees * hoursPerMonth * automationRate * multiplier;
  const monthlySavings = Math.round(monthlyHoursSaved * hourlyRate);
  const annualSavings = monthlySavings * 12;

  const formatYen = (n: number) =>
    n >= 10000
      ? `${(n / 10000).toFixed(1)}万円`
      : `${n.toLocaleString()}円`;

  const labelClass =
    "block text-white/50 text-xs font-semibold mb-2 tracking-wider";

  return (
    <div className="bg-[#111111] border border-white/[0.08] rounded-2xl p-6 sm:p-10">
      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        {/* 従業員数 */}
        <div>
          <label className={labelClass}>
            従業員数：
            <span className="text-white font-black text-base ml-1">
              {employees}人
            </span>
          </label>
          <input
            type="range"
            min={1}
            max={200}
            step={1}
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            className="w-full accent-[#CC2222]"
          />
          <div className="flex justify-between text-xs text-white/20 mt-1">
            <span>1人</span>
            <span>200人</span>
          </div>
        </div>

        {/* 月間作業時間 */}
        <div>
          <label className={labelClass}>
            月間業務時間（1人）：
            <span className="text-white font-black text-base ml-1">
              {hoursPerMonth}h
            </span>
          </label>
          <input
            type="range"
            min={40}
            max={300}
            step={10}
            value={hoursPerMonth}
            onChange={(e) => setHoursPerMonth(Number(e.target.value))}
            className="w-full accent-[#CC2222]"
          />
          <div className="flex justify-between text-xs text-white/20 mt-1">
            <span>40h</span>
            <span>300h</span>
          </div>
        </div>

        {/* 時給 */}
        <div>
          <label className={labelClass}>
            平均時給換算：
            <span className="text-white font-black text-base ml-1">
              {hourlyRate.toLocaleString()}円
            </span>
          </label>
          <input
            type="range"
            min={1500}
            max={8000}
            step={500}
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full accent-[#CC2222]"
          />
          <div className="flex justify-between text-xs text-white/20 mt-1">
            <span>1,500円</span>
            <span>8,000円</span>
          </div>
        </div>

        {/* 業種 */}
        <div>
          <label className={labelClass}>業種</label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#CC2222]/50"
          >
            {Object.keys(INDUSTRY_MULTIPLIERS).map((k) => (
              <option key={k} value={k} className="bg-[#111]">
                {k}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 結果 */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 text-center">
          <div className="text-white/40 text-xs mb-1">削減できる月間工数</div>
          <div className="text-2xl font-black text-white">
            {Math.round(monthlyHoursSaved).toLocaleString()}
            <span className="text-base font-normal ml-1">時間</span>
          </div>
        </div>
        <div className="bg-[#CC2222]/10 border border-[#CC2222]/30 rounded-xl p-5 text-center">
          <div className="text-[#CC2222]/70 text-xs mb-1 font-semibold">
            月間削減コスト
          </div>
          <div className="text-3xl font-black text-[#CC2222]">
            {formatYen(monthlySavings)}
          </div>
        </div>
        <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-xl p-5 text-center">
          <div className="text-[#C9A84C]/70 text-xs mb-1 font-semibold">
            年間削減コスト
          </div>
          <div className="text-3xl font-black text-[#C9A84C]">
            {formatYen(annualSavings)}
          </div>
        </div>
      </div>

      <p className="text-center text-white/20 text-xs mt-5">
        ※ AI自動化率35%・業種係数を考慮した試算です。実際の効果は無料相談にてご確認ください。
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────
   FAQ アイテム
───────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#0f0f0f] border border-white/[0.06] rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-7 text-left"
      >
        <span className="text-white font-bold text-sm leading-relaxed">
          {q}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-[#CC2222] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-white/30 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-7 pb-7 text-white/50 text-sm leading-[2] border-t border-white/[0.06] pt-5">
          {a}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   デモシステム一覧
───────────────────────────────────────── */
const demoSystems = [
  {
    cmd: "「営業案件管理CRM作って」",
    title: "営業案件管理CRM",
    desc: "商談ステータス・顧客情報・売上予測をリアルタイム一元管理",
    icon: "📊",
    url: "https://sales-crm-ruby-theta.vercel.app",
    accent: "#3B82F6",
  },
  {
    cmd: "「請求書管理システム作って」",
    title: "請求書管理システム",
    desc: "請求書の発行・送付・入金管理を自動化。PDF出力対応",
    icon: "🧾",
    url: "https://invoice-system-nine-gamma.vercel.app",
    accent: "#F59E0B",
  },
  {
    cmd: "「弁護士向け契約書レビューツール作って」",
    title: "AI契約書レビューシステム",
    desc: "AIが契約書のリスクを自動分析。重要条項を即座に抽出",
    icon: "⚖️",
    url: "https://legal-check-system.vercel.app",
    accent: "#EF4444",
  },
  {
    cmd: "「業務管理システム作って」",
    title: "業務・プロジェクト管理",
    desc: "タスク・工数・チームを統合管理。ガントチャート対応",
    icon: "📋",
    url: "https://business-management-ruby.vercel.app/auth/login",
    accent: "#10B981",
  },
  {
    cmd: "「医薬品卸管理システム作って」",
    title: "医薬品卸管理システム",
    desc: "在庫・受発注・取引先を統合。業界コンプライアンス対応",
    icon: "💊",
    url: "https://pharma-wholesale-gamma.vercel.app/login",
    accent: "#14B8A6",
  },
  {
    cmd: "「収益分析ダッシュボード作って」",
    title: "ビジネス収益性分析",
    desc: "売上・コスト・利益率をリアルタイムで可視化",
    icon: "📈",
    url: "https://biz-intelligence-jp.vercel.app/",
    accent: "#6366F1",
  },
];

/* ─────────────────────────────────────────
   メインコンテンツ
───────────────────────────────────────── */
export default function AiServiceContent() {
  const [gate, setGate] = useState<{
    open: boolean;
    url: string;
    title: string;
  }>({ open: false, url: "", title: "" });

  const openGate = (url: string, title: string) =>
    setGate({ open: true, url, title });
  const closeGate = () => setGate({ open: false, url: "", title: "" });

  return (
    <div className="min-h-screen bg-[#080808] text-[#F8F8F8]">
      {gate.open && (
        <LeadGateModal url={gate.url} title={gate.title} onClose={closeGate} />
      )}

      {/* ── 01 ヒーロー ── */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#F8F8F8 1px, transparent 1px), linear-gradient(90deg, #F8F8F8 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#C9A84C]/8 blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#CC2222]/6 blur-[100px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <FadeInSection>
            <p className="text-[#C9A84C] text-xs font-bold tracking-[0.4em] uppercase mb-6">
              SOLOPTILINK AI
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.15]"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              大手と同じ戦略を、
              <br />
              <span className="text-[#C9A84C]">中小企業も。</span>
            </h1>
            <p className="text-white/50 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
              1つ入れるだけ。日本語で「作って」と伝えるだけで、
              <br className="hidden sm:block" />
              本番品質のシステムが完成する次世代AIサービス。
            </p>
            <p className="text-white/30 text-sm max-w-xl mx-auto mb-12">
              エンジニア不要・IT知識ゼロ・要件定義から本番公開まで全自動
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#CC2222] hover:bg-[#E53333] text-white font-black text-sm tracking-widest rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(204,34,34,0.5)] hover:scale-105"
              >
                無料相談・デモを見る
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() =>
                  openGate(
                    "https://solopti-roi-tracker.vercel.app/",
                    "経費削減シミュレーター"
                  )
                }
                className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white/20 hover:border-[#C9A84C] text-white/70 hover:text-[#C9A84C] font-bold text-sm tracking-wide rounded-full transition-all duration-300"
              >
                削減額を計算する
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </FadeInSection>

          {/* Stats */}
          <FadeInSection delay={200}>
            <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl mx-auto">
              {[
                { num: "30社+", label: "導入実績（2ヶ月）" },
                { num: "500万円+", label: "月間平均経費削減" },
                { num: "97%", label: "開発期間を短縮" },
                { num: "月80h+", label: "従業員の工数削減" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 backdrop-blur-sm"
                >
                  <p
                    className="text-[#C9A84C] text-xl sm:text-2xl font-black mb-1"
                    style={{ fontFamily: "Noto Serif JP, serif" }}
                  >
                    {s.num}
                  </p>
                  <p className="text-white/40 text-xs leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── 02 問題提起 ── */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-4">
                PROBLEM
              </p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                日本の中小企業の
                <span className="text-[#CC2222]">95.4%</span>が
                <br />
                DXを実施できていない
              </h2>
              <p className="text-white/40 text-base max-w-xl mx-auto">
                その理由は、コスト・人材・難しさの3つの壁。
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💸",
                title: "コストが高い",
                color: "border-[#CC2222]/30",
                titleColor: "text-[#CC2222]",
                items: [
                  "大手SIer：数百万〜数億円",
                  "高額AIサービス：年間1,200万円〜",
                  "エンタープライズSaaS：人数課金で膨大",
                ],
              },
              {
                icon: "👥",
                title: "人材がいない",
                color: "border-[#C9A84C]/30",
                titleColor: "text-[#C9A84C]",
                items: [
                  "エンジニア採用：月80〜150万円",
                  "IT人材不足：2030年に79万人不足",
                  "教育コスト：戦略化まで半年〜1年",
                ],
              },
              {
                icon: "⏰",
                title: "難しい・時間がかかる",
                color: "border-white/10",
                titleColor: "text-white",
                items: [
                  "要件定義〜本番稼働：6〜12ヶ月",
                  "追加改修のたびに費用が発生",
                  "技術の陳腐化リスク",
                ],
              },
            ].map((card, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div
                  className={`bg-[#0f0f0f] border-2 ${card.color} rounded-2xl p-8 h-full`}
                >
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3
                    className={`text-xl font-bold ${card.titleColor} mb-4`}
                    style={{ fontFamily: "Noto Serif JP, serif" }}
                  >
                    {card.title}
                  </h3>
                  <ul className="space-y-2">
                    {card.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-white/40 text-sm"
                      >
                        <span className="text-[#CC2222] mt-0.5 flex-shrink-0 font-bold">
                          ✕
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={300}>
            <div className="mt-10 bg-[#CC2222]/10 border border-[#CC2222]/30 rounded-2xl p-6 text-center">
              <p className="text-white font-bold text-lg">
                💡 SoloptiLink AIがこれら全ての壁を解決します
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── 03 解決策 ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-4">
                SOLUTION
              </p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                一言で、企画→設計→実装→テスト→
                <br />
                <span className="text-[#C9A84C]">本番公開まで全自動</span>
              </h2>
              <p className="text-white/40 text-base max-w-2xl mx-auto">
                ChatGPTやClaude Codeとは次元が違う。
                100台のAIエージェントが群知能で協調し、
                エンジニア不要・IT知識ゼロで本番品質のシステムを届けます。
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: "🤖",
                title: "要件定義〜本番まで全自動",
                body: "100台のAIが群知能で協調開発",
              },
              {
                icon: "💬",
                title: "エンジニア経験不要",
                body: "日本語で「作って」と伝えるだけ",
              },
              {
                icon: "💰",
                title: "競合の1/5のコスト",
                body: "年間290万円〜で大企業レベル",
              },
              {
                icon: "🛡️",
                title: "本番品質保証",
                body: "7軸品質検証 + セキュリティ監査",
              },
            ].map((card, i) => (
              <FadeInSection key={i} delay={i * 80}>
                <div className="bg-[#0f0f0f] border border-white/[0.06] hover:border-[#CC2222]/30 rounded-2xl p-6 text-center transition-all duration-300 h-full">
                  <div className="text-3xl mb-3">{card.icon}</div>
                  <h3 className="font-bold text-white text-sm mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-white/40 text-xs">{card.body}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* エージェント群 */}
          <FadeInSection delay={200}>
            <div className="mt-10 bg-[#0f0f0f] border border-white/[0.06] rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-6">
                「CRM作って」の
                <span className="text-[#C9A84C]">一言</span>
                で…
              </h3>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {[
                  "PM",
                  "バックエンド",
                  "フロントエンド",
                  "DB設計",
                  "セキュリティ",
                  "QA",
                  "DevOps",
                  "AI統合",
                  "テスト",
                  "本番公開",
                  "+90名",
                ].map((agent) => (
                  <span
                    key={agent}
                    className="bg-[#CC2222]/10 border border-[#CC2222]/20 text-[#CC2222]/80 text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    {agent}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-center gap-3 text-white/40 text-sm flex-wrap">
                {["要件定義", "設計", "実装", "テスト", "本番公開"].map(
                  (step, i, arr) => (
                    <span key={step} className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-[#CC2222] rounded-full animate-pulse" />
                        {step}
                      </span>
                      {i < arr.length - 1 && (
                        <span className="text-white/20">→</span>
                      )}
                    </span>
                  )
                )}
              </div>
              <p className="mt-4 text-xl font-black text-[#C9A84C]">
                全自動で完成
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── 04 デモシステム一覧 ── */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-4">
                DEMO SYSTEMS
              </p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                実際に作られたシステムを
                <br />
                <span className="text-[#C9A84C]">今すぐ体験</span>
              </h2>
              <p className="text-white/40 text-base max-w-xl mx-auto">
                下記は全て SoloptiLink AI が一言の指示から自動生成した
                本番稼働システムです。
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {demoSystems.map((sys, i) => (
              <FadeInSection key={i} delay={i * 80}>
                <div className="bg-[#0f0f0f] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col">
                  {/* Header */}
                  <div
                    className="p-5 border-b border-white/[0.06]"
                    style={{
                      background: `linear-gradient(135deg, ${sys.accent}15, transparent)`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{sys.icon}</span>
                      <span
                        className="text-xs font-mono font-bold text-white/50 leading-tight"
                        style={{ color: sys.accent }}
                      >
                        {sys.cmd}
                      </span>
                    </div>
                    <h3 className="font-bold text-white text-sm">{sys.title}</h3>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col gap-4 flex-1">
                    <p className="text-white/40 text-xs leading-relaxed flex-1">
                      {sys.desc}
                    </p>
                    <button
                      onClick={() => openGate(sys.url, sys.title)}
                      className="w-full inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/30 text-white/60 hover:text-white text-xs font-semibold px-4 py-3 rounded-xl transition-all duration-300"
                    >
                      実際のシステムを見る
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={300}>
            <p className="text-center text-white/30 text-xs mt-8">
              ※ デモ閲覧にはお名前・電話番号・メールアドレスの入力が必要です
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── 05 他AIとの比較 ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-4">
                COMPARISON
              </p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                「普通のAI」とは
                <br />
                <span className="text-[#C9A84C]">根本的に異なります</span>
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tool: "ChatGPT / GPT",
                subtitle: "ブラウザのチャット画面",
                badge: "従来AI",
                badgeStyle:
                  "bg-white/10 text-white/50 border border-white/10",
                cardStyle: "bg-[#0f0f0f] border border-white/[0.06]",
                items: [
                  { ok: false, text: "コードが断片（コピペ必要）" },
                  { ok: false, text: "自分でエラーを貼り付けて修正" },
                  { ok: false, text: "レシピを書いてくれるだけ" },
                  { ok: false, text: "エンジニアスキル必須" },
                ],
                result: "「道具」レシピを教えてくれるだけ",
                resultStyle: "bg-white/5 text-white/40",
              },
              {
                tool: "Claude Code",
                subtitle: "ターミナルでコマンド入力",
                badge: "進化版AI",
                badgeStyle:
                  "bg-white/10 text-white/60 border border-white/20",
                cardStyle: "bg-[#0f0f0f] border border-white/10",
                items: [
                  { ok: false, text: "自分でエラーを読んで修正指示" },
                  { ok: false, text: "ファイルを1つずつ作成" },
                  { ok: false, text: "コマンドライン知識が必要" },
                  { ok: false, text: "設計・テスト・公開は自分で" },
                ],
                result: "「コマンドライン型AI道具」",
                resultStyle: "bg-white/5 text-white/50",
              },
              {
                tool: "SoloptiLink AI",
                subtitle: "日本語で一言伝えるだけ",
                badge: "次世代",
                badgeStyle:
                  "bg-[#CC2222] text-white border border-[#CC2222]",
                cardStyle:
                  "bg-[#0f0f0f] border-2 border-[#CC2222]/40 shadow-[0_0_40px_rgba(204,34,34,0.15)]",
                highlight: true,
                items: [
                  { ok: true, text: "一式丸ごと実装・完成品が自動で届く" },
                  { ok: true, text: "7軸自動検証 + 自動修復" },
                  { ok: true, text: "OWASP Top10 自動セキュリティ監査" },
                  { ok: true, text: "スキル不要・誰でも即日使える" },
                ],
                result: "「完成品を届けるサービス」",
                resultStyle: "bg-[#CC2222] text-white",
              },
            ].map((col, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div
                  className={`rounded-2xl ${col.cardStyle} p-7 h-full flex flex-col`}
                >
                  <div className="mb-5">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${col.badgeStyle}`}
                    >
                      {col.badge}
                    </span>
                    <h3
                      className="font-black text-xl mt-3 text-white"
                      style={{ fontFamily: "Noto Serif JP, serif" }}
                    >
                      {col.tool}
                    </h3>
                    <p className="text-white/40 text-sm">{col.subtitle}</p>
                  </div>
                  <ul className="space-y-3 mb-6 flex-1">
                    {col.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-white/60"
                      >
                        <span
                          className={`mt-0.5 flex-shrink-0 font-bold ${item.ok ? "text-[#C9A84C]" : "text-[#CC2222]/60"}`}
                        >
                          {item.ok ? "✓" : "✕"}
                        </span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                  <div
                    className={`rounded-xl p-3 text-center text-xs font-bold ${col.resultStyle}`}
                  >
                    {col.result}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 ROI計算機 ── */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-4">
                ROI CALCULATOR
              </p>
              <h2
                className="text-3xl sm:text-4xl font-black text-white mb-4"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                あなたの会社は
                <br />
                <span className="text-[#C9A84C]">いくら削減できる？</span>
              </h2>
              <p className="text-white/40 text-base">
                スライダーを動かすだけで月間・年間の経費削減額がわかります。
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <RoiCalculator />
          </FadeInSection>

          {/* 外部シミュレーターへのリンク */}
          <FadeInSection delay={200}>
            <div className="mt-8 text-center">
              <p className="text-white/30 text-sm mb-4">
                さらに詳しいシミュレーションは専用ツールで
              </p>
              <button
                onClick={() =>
                  openGate(
                    "https://solopti-roi-tracker.vercel.app/",
                    "経費削減シミュレーター（詳細版）"
                  )
                }
                className="inline-flex items-center gap-3 border border-[#C9A84C]/30 hover:border-[#C9A84C] text-[#C9A84C] hover:text-white hover:bg-[#C9A84C] font-bold text-sm px-8 py-4 rounded-full transition-all duration-300"
              >
                詳細版シミュレーターを開く
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── 07 開発スピード比較 ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-4">
                SPEED
              </p>
              <h2
                className="text-3xl sm:text-4xl font-black text-white"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                開発スピードの
                <span className="text-[#C9A84C]">圧倒的な差</span>
              </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="bg-[#0f0f0f] border border-white/[0.06] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 bg-white/[0.04] border-b border-white/[0.06]">
                {["工程", "従来の所要時間", "SoloptiLink AI", "短縮効果"].map(
                  (h, i) => (
                    <div
                      key={h}
                      className={`p-4 text-xs font-bold tracking-wider text-white/40 ${i > 0 ? "text-center" : ""}`}
                    >
                      {h}
                    </div>
                  )
                )}
              </div>
              {[
                ["企画→設計書", "2〜4週間", "数分", "95%短縮"],
                ["設計→実装", "1〜3ヶ月", "数時間", "97%短縮"],
                ["テスト・品質保証", "2〜4週間", "自動（即時）", "98%短縮"],
                ["セキュリティ監査", "1〜2週間", "自動（即時）", "99%短縮"],
                ["インターネット公開", "1〜2週間", "自動", "95%短縮"],
              ].map(([process, before, after, effect], i) => (
                <div
                  key={i}
                  className="grid grid-cols-4 border-b border-white/[0.04] last:border-b-0 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="p-4 text-white/70 text-sm font-semibold">
                    {process}
                  </div>
                  <div className="p-4 text-center text-[#CC2222]/70 text-sm">
                    {before}
                  </div>
                  <div className="p-4 text-center text-[#C9A84C] text-sm font-bold">
                    {after}
                  </div>
                  <div className="p-4 text-center">
                    <span className="bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-bold px-3 py-1 rounded-full">
                      {effect}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── 08 導入の流れ ── */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-4">
                HOW TO START
              </p>
              <h2
                className="text-3xl sm:text-4xl font-black text-white"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                プログラミング知識は
                <span className="text-[#C9A84C]">一切不要</span>
              </h2>
              <p className="text-white/40 text-base mt-4">
                たった4ステップで本番システムが完成します
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                icon: "⚙️",
                title: "セットアップ",
                body: "初回のセットアップのみ。プログラミング知識がない方でも簡単に完了します。",
                time: "初回のみ5分",
              },
              {
                step: "02",
                icon: "💬",
                title: "開発指示",
                body: "「CRM作って」など、日本語でシステムを指示するだけ。",
                time: "30秒",
              },
              {
                step: "03",
                icon: "🤖",
                title: "自動開発",
                body: "100台のAIエージェントが実装を開始。自動で検証・修復まで完了。",
                time: "数分〜自動",
              },
              {
                step: "04",
                icon: "🌐",
                title: "本番公開",
                body: "「公開して」の一言で自動デプロイ。即日稼働開始。",
                time: "ワンクリック",
              },
            ].map((s, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="bg-[#0f0f0f] border border-white/[0.06] rounded-2xl p-7 text-center h-full flex flex-col">
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <p className="text-[#CC2222] text-xs font-black tracking-widest mb-2">
                    STEP {s.step}
                  </p>
                  <h3
                    className="font-bold text-white text-base mb-3"
                    style={{ fontFamily: "Noto Serif JP, serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed mb-4 flex-1">
                    {s.body}
                  </p>
                  <span className="inline-block bg-white/[0.04] border border-white/[0.08] text-white/40 text-xs font-bold px-3 py-1 rounded-full">
                    {s.time}
                  </span>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={300}>
            <div className="mt-8 bg-[#CC2222]/10 border border-[#CC2222]/30 rounded-2xl p-6 text-center">
              <p className="text-white font-bold">
                修正・機能追加も「ここを直して」と伝えるだけ。何度でも無制限に対応 🎉
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── 09 対象企業 ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-4">
                TARGET
              </p>
              <h2
                className="text-3xl sm:text-4xl font-black text-white"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                こんな企業に
                <span className="text-[#C9A84C]">選ばれています</span>
              </h2>
            </div>
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "業務効率化・DX推進を検討している経営者",
                "システム開発コストを削減したい企業",
                "IT担当者不在でもシステムを整備したい",
                "複数のSaaSツールの費用をまとめたい",
                "24時間対応のバックオフィスを構築したい",
                "B2B・B2C問わず全業種・全規模に対応",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-[#0f0f0f] border border-white/[0.06] rounded-xl px-5 py-4"
                >
                  <CheckCircle className="w-4 h-4 text-[#CC2222] flex-shrink-0" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── 10 FAQ ── */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-4">
                FAQ
              </p>
              <h2
                className="text-3xl sm:text-4xl font-black text-white"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                よくある質問
              </h2>
            </div>
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="space-y-3">
              {[
                {
                  q: "ITの知識がなくても使えますか？",
                  a: "はい、まったく問題ありません。70歳のユーザーも問題なく使いこなしています。スマートフォンが操作できる方であれば誰でもご利用いただけます。専門用語を知らなくても、普通の日本語で話しかけるだけで動きます。",
                },
                {
                  q: "月500万円の削減は本当ですか？",
                  a: "導入企業の平均実績値です。システム開発外注費・SaaS複数契約費・バックオフィス人件費などを合算した数字です。業種・規模により変動しますが、詳細は無料相談にてお伝えします。上記のROI計算機で概算を確認いただけます。",
                },
                {
                  q: "ChatGPTやClaude Codeと何が違うのですか？",
                  a: "ChatGPTやClaude Codeは「道具」です。コードの断片を生成してくれますが、実際に動くシステムを作るにはエンジニアスキルが必要です。SoloptiLink AIは「完成品を届けるサービス」です。一言の指示から要件定義・設計・実装・テスト・本番公開まで全自動で完成します。",
                },
                {
                  q: "セキュリティは大丈夫ですか？",
                  a: "エンタープライズグレードのセキュリティを標準搭載しています。OWASP Top10に準拠したセキュリティ監査を自動実施。データの暗号化・アクセス制御・ログ管理をすべて自動化しています。",
                },
                {
                  q: "導入後のサポートはありますか？",
                  a: "はい、セゾンチームが伴走型でサポートします。修正・機能追加も「ここを直して」と伝えるだけで対応します。導入後も継続的にAIを進化させ続けるため、一度導入したら使い続けるほど価値が上がります。",
                },
                {
                  q: "導入にどれくらいかかりますか？",
                  a: "最短1週間での稼働を実現しています。初回セットアップは5分程度で完了し、その後日本語で指示を出すだけで本番システムが完成します。複雑な手続きは一切ありません。",
                },
              ].map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── 11 最終CTA ── */}
      <section className="bg-[#CC2222] py-24 px-6">
        <FadeInSection>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/70 text-xs font-bold tracking-[0.4em] uppercase mb-4">
              CONTACT
            </p>
            <h2
              className="text-white text-3xl sm:text-4xl font-black mb-6 leading-[1.3]"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              まず、AIの実力を
              <br />
              無料で体感してください
            </h2>
            <p className="text-white/70 text-base mb-10 max-w-xl mx-auto leading-relaxed">
              デモを見れば「なぜ2ヶ月で30社が導入したか」がすぐにわかります。
              大手と同じ戦略を、今すぐ中小企業でも実現できます。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#CC2222] font-black text-sm tracking-widest rounded-full hover:bg-[#F8F8F8] transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:scale-105"
              >
                無料相談・デモを申し込む
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() =>
                  openGate(
                    "https://solopti-roi-tracker.vercel.app/",
                    "経費削減シミュレーター"
                  )
                }
                className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white/30 hover:border-white text-white/80 hover:text-white font-bold text-sm tracking-wide rounded-full transition-all duration-300"
              >
                削減額を今すぐ計算
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/50 text-xs">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white/40" />
                初回相談・お見積り完全無料
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white/40" />
                24時間以内にご返信
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white/40" />
                強引な営業電話なし
              </span>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
