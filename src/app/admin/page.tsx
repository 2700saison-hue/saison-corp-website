"use client";

import { useState, useEffect, useCallback } from "react";

// ---- 型定義 ----
interface CaseRow {
  id: number;
  clientName: string;
  industry: string;
  category: string;
  roi: string | null;
  featured: boolean;
}

interface NewsRow {
  id: number;
  title: string;
  category: string;
  publishedAt: string;
}

interface ContactRow {
  id: number;
  companyName: string;
  name: string;
  email: string;
  service: string | null;
  createdAt: string;
  isRead: boolean;
}

// ---- ログイン画面 ----
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "saison2024!") {
      localStorage.setItem("saison_admin_auth", "true");
      onLogin();
    } else {
      setError("パスワードが正しくありません");
    }
  };

  return (
    <div
      style={{ background: "#0a0a0a" }}
      className="min-h-screen flex items-center justify-center"
    >
      <div
        className="w-full max-w-md p-8 border"
        style={{ borderColor: "#CC2222", background: "#141414" }}
      >
        <h1
          className="text-2xl font-bold text-center mb-8"
          style={{ color: "#F8F8F8" }}
        >
          SAISON 管理画面
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-sm mb-2"
              style={{ color: "#F8F8F8" }}
            >
              パスワード
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border outline-none focus:border-red-600"
              style={{
                background: "#080808",
                borderColor: "#CC2222",
                color: "#F8F8F8",
              }}
              placeholder="パスワードを入力"
              autoComplete="current-password"
            />
          </div>
          {error && (
            <p className="text-sm" style={{ color: "#CC2222" }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full py-3 font-bold transition-opacity hover:opacity-80"
            style={{ background: "#CC2222", color: "#F8F8F8" }}
          >
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
}

// ---- モーダル ----
function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div
        className="w-full max-w-lg p-6 border"
        style={{ background: "#141414", borderColor: "#CC2222" }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold" style={{ color: "#F8F8F8" }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-xl hover:opacity-70"
            style={{ color: "#F8F8F8" }}
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

// ---- フォーム入力 ----
function FormField({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
  const inputStyle = {
    background: "#080808",
    borderColor: "#CC2222",
    color: "#F8F8F8",
  };
  return (
    <div>
      <label className="block text-sm mb-1" style={{ color: "#F8F8F8" }}>
        {label}
        {required && <span style={{ color: "#CC2222" }}>*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={3}
          className="w-full px-3 py-2 border outline-none text-sm"
          style={inputStyle}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full px-3 py-2 border outline-none text-sm"
          style={inputStyle}
        />
      )}
    </div>
  );
}

// ---- 事例管理 ----
function CasesTab() {
  const [cases, setCases] = useState<CaseRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    slug: "",
    clientName: "",
    industry: "",
    category: "",
    challenge: "",
    solution: "",
    beforeStats: "[]",
    afterStats: "[]",
    roi: "",
    testimonial: "",
    featured: false,
    order: "0",
  });
  const [saving, setSaving] = useState(false);

  const fetchCases = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/admin/cases");
    const data: CaseRow[] = await res.json();
    setCases(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCases();
  }, [fetchCases]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setForm((f) => ({ ...f, [target.name]: target.checked }));
    } else {
      setForm((f) => ({ ...f, [target.name]: target.value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await fetch("/api/admin/cases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          featured: form.featured,
          order: parseInt(form.order, 10),
        }),
      });
      setShowModal(false);
      setForm({
        slug: "",
        clientName: "",
        industry: "",
        category: "",
        challenge: "",
        solution: "",
        beforeStats: "[]",
        afterStats: "[]",
        roi: "",
        testimonial: "",
        featured: false,
        order: "0",
      });
      await fetchCases();
    } finally {
      setSaving(false);
    }
  };

  const tableHeaderStyle = {
    background: "#141414",
    color: "#CC2222",
    borderColor: "#CC2222",
  };
  const tableCellStyle = { borderColor: "#CC2222", color: "#F8F8F8" };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold" style={{ color: "#F8F8F8" }}>
          事例管理
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 text-sm font-bold transition-opacity hover:opacity-80"
          style={{ background: "#CC2222", color: "#F8F8F8" }}
        >
          ＋ 新規追加
        </button>
      </div>

      {loading ? (
        <p style={{ color: "#F8F8F8" }}>読み込み中...</p>
      ) : (
        <div className="overflow-x-auto">
          <table
            className="w-full text-sm border-collapse border"
            style={{ borderColor: "#CC2222" }}
          >
            <thead>
              <tr>
                {["会社名", "業種", "カテゴリ", "ROI", "注目"].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left border"
                    style={tableHeaderStyle}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cases.map((c) => (
                <tr key={c.id} className="hover:bg-white/5">
                  <td className="px-4 py-3 border" style={tableCellStyle}>
                    {c.clientName}
                  </td>
                  <td className="px-4 py-3 border" style={tableCellStyle}>
                    {c.industry}
                  </td>
                  <td className="px-4 py-3 border" style={tableCellStyle}>
                    {c.category}
                  </td>
                  <td className="px-4 py-3 border" style={tableCellStyle}>
                    {c.roi ?? "-"}
                  </td>
                  <td className="px-4 py-3 border text-center" style={tableCellStyle}>
                    <input type="checkbox" checked={c.featured} readOnly />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {cases.length === 0 && (
            <p className="text-center py-6" style={{ color: "#F8F8F8" }}>
              データがありません
            </p>
          )}
        </div>
      )}

      {showModal && (
        <Modal title="事例 新規追加" onClose={() => setShowModal(false)}>
          <form onSubmit={handleSubmit} className="space-y-3">
            <FormField
              label="スラッグ"
              name="slug"
              required
              value={form.slug}
              onChange={handleChange}
            />
            <FormField
              label="会社名"
              name="clientName"
              required
              value={form.clientName}
              onChange={handleChange}
            />
            <FormField
              label="業種"
              name="industry"
              required
              value={form.industry}
              onChange={handleChange}
            />
            <FormField
              label="カテゴリ"
              name="category"
              required
              value={form.category}
              onChange={handleChange}
            />
            <FormField
              label="課題"
              name="challenge"
              type="textarea"
              required
              value={form.challenge}
              onChange={handleChange}
            />
            <FormField
              label="施策"
              name="solution"
              type="textarea"
              required
              value={form.solution}
              onChange={handleChange}
            />
            <FormField
              label="ROI"
              name="roi"
              value={form.roi}
              onChange={handleChange}
            />
            <FormField
              label="表示順"
              name="order"
              type="number"
              value={form.order}
              onChange={handleChange}
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="featured"
                id="featured"
                checked={form.featured}
                onChange={handleChange}
              />
              <label htmlFor="featured" style={{ color: "#F8F8F8" }} className="text-sm">
                注目事例
              </label>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm border"
                style={{ borderColor: "#CC2222", color: "#F8F8F8" }}
              >
                キャンセル
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-4 py-2 text-sm font-bold transition-opacity hover:opacity-80 disabled:opacity-50"
                style={{ background: "#CC2222", color: "#F8F8F8" }}
              >
                {saving ? "保存中..." : "保存"}
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

// ---- ニュース管理 ----
function NewsTab() {
  const [news, setNews] = useState<NewsRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    slug: "",
    title: "",
    category: "",
    content: "",
    publishedAt: new Date().toISOString().split("T")[0],
  });
  const [saving, setSaving] = useState(false);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/admin/news");
    const data: NewsRow[] = await res.json();
    setNews(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await fetch("/api/admin/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          publishedAt: new Date(form.publishedAt).toISOString(),
        }),
      });
      setShowModal(false);
      setForm({
        slug: "",
        title: "",
        category: "",
        content: "",
        publishedAt: new Date().toISOString().split("T")[0],
      });
      await fetchNews();
    } finally {
      setSaving(false);
    }
  };

  const tableHeaderStyle = {
    background: "#141414",
    color: "#CC2222",
    borderColor: "#CC2222",
  };
  const tableCellStyle = { borderColor: "#CC2222", color: "#F8F8F8" };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold" style={{ color: "#F8F8F8" }}>
          ニュース管理
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 text-sm font-bold transition-opacity hover:opacity-80"
          style={{ background: "#CC2222", color: "#F8F8F8" }}
        >
          ＋ 新規追加
        </button>
      </div>

      {loading ? (
        <p style={{ color: "#F8F8F8" }}>読み込み中...</p>
      ) : (
        <div className="overflow-x-auto">
          <table
            className="w-full text-sm border-collapse border"
            style={{ borderColor: "#CC2222" }}
          >
            <thead>
              <tr>
                {["タイトル", "カテゴリ", "公開日"].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left border"
                    style={tableHeaderStyle}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {news.map((n) => (
                <tr key={n.id} className="hover:bg-white/5">
                  <td className="px-4 py-3 border" style={tableCellStyle}>
                    {n.title}
                  </td>
                  <td className="px-4 py-3 border" style={tableCellStyle}>
                    {n.category}
                  </td>
                  <td className="px-4 py-3 border" style={tableCellStyle}>
                    {new Date(n.publishedAt).toLocaleDateString("ja-JP")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {news.length === 0 && (
            <p className="text-center py-6" style={{ color: "#F8F8F8" }}>
              データがありません
            </p>
          )}
        </div>
      )}

      {showModal && (
        <Modal title="ニュース 新規追加" onClose={() => setShowModal(false)}>
          <form onSubmit={handleSubmit} className="space-y-3">
            <FormField
              label="スラッグ"
              name="slug"
              required
              value={form.slug}
              onChange={handleChange}
            />
            <FormField
              label="タイトル"
              name="title"
              required
              value={form.title}
              onChange={handleChange}
            />
            <FormField
              label="カテゴリ"
              name="category"
              required
              value={form.category}
              onChange={handleChange}
            />
            <FormField
              label="内容"
              name="content"
              type="textarea"
              required
              value={form.content}
              onChange={handleChange}
            />
            <FormField
              label="公開日"
              name="publishedAt"
              type="date"
              required
              value={form.publishedAt}
              onChange={handleChange}
            />
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm border"
                style={{ borderColor: "#CC2222", color: "#F8F8F8" }}
              >
                キャンセル
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-4 py-2 text-sm font-bold transition-opacity hover:opacity-80 disabled:opacity-50"
                style={{ background: "#CC2222", color: "#F8F8F8" }}
              >
                {saving ? "保存中..." : "保存"}
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

// ---- お問い合わせ ----
function ContactsTab() {
  const [contacts, setContacts] = useState<ContactRow[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/admin/contacts");
    const data: ContactRow[] = await res.json();
    setContacts(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const toggleRead = async (id: number, current: boolean) => {
    await fetch("/api/admin/contacts", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, isRead: !current }),
    });
    await fetchContacts();
  };

  const tableHeaderStyle = {
    background: "#141414",
    color: "#CC2222",
    borderColor: "#CC2222",
  };
  const tableCellStyle = { borderColor: "#CC2222", color: "#F8F8F8" };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4" style={{ color: "#F8F8F8" }}>
        お問い合わせ
      </h2>

      {loading ? (
        <p style={{ color: "#F8F8F8" }}>読み込み中...</p>
      ) : (
        <div className="overflow-x-auto">
          <table
            className="w-full text-sm border-collapse border"
            style={{ borderColor: "#CC2222" }}
          >
            <thead>
              <tr>
                {["会社名", "名前", "メール", "サービス", "受信日", "既読"].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left border"
                      style={tableHeaderStyle}
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr key={c.id} className="hover:bg-white/5">
                  <td className="px-4 py-3 border" style={tableCellStyle}>
                    {c.companyName}
                  </td>
                  <td className="px-4 py-3 border" style={tableCellStyle}>
                    {c.name}
                  </td>
                  <td className="px-4 py-3 border" style={tableCellStyle}>
                    {c.email}
                  </td>
                  <td className="px-4 py-3 border" style={tableCellStyle}>
                    {c.service ?? "-"}
                  </td>
                  <td className="px-4 py-3 border" style={tableCellStyle}>
                    {new Date(c.createdAt).toLocaleDateString("ja-JP")}
                  </td>
                  <td className="px-4 py-3 border text-center" style={tableCellStyle}>
                    <input
                      type="checkbox"
                      checked={c.isRead}
                      onChange={() => toggleRead(c.id, c.isRead)}
                      className="cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {contacts.length === 0 && (
            <p className="text-center py-6" style={{ color: "#F8F8F8" }}>
              お問い合わせはありません
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ---- SEO自動化タブ ----
interface SeoStatus {
  lastRunDate: string | null;
  todayRun: boolean;
  lastSummary: {
    executedAt: string;
    successSteps: number;
    failedSteps: number;
    totalSteps: number;
    results: { step: string; success: boolean; error?: string }[];
  } | null;
  recentArticles: { title: string; slug: string; publishedAt: string; category: string }[];
  recentSnsPosts: { instagram?: string; twitter?: string; date?: string }[];
  recentLogs: string[];
}

function SeoTab() {
  const [status, setStatus] = useState<SeoStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [running, setRunning] = useState<string | null>(null);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const fetchStatus = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/seo");
      if (res.ok) {
        const data = await res.json();
        setStatus(data);
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStatus();
  }, [fetchStatus]);

  const triggerStep = async (step: string) => {
    setRunning(step);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ step }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage({ text: data.message, type: "success" });
        // 10秒後にステータスを再取得
        setTimeout(() => fetchStatus(), 10000);
      } else {
        setMessage({ text: data.error || "エラーが発生しました", type: "error" });
      }
    } catch {
      setMessage({ text: "通信エラーが発生しました", type: "error" });
    } finally {
      setRunning(null);
    }
  };

  const stepLabels: Record<string, string> = {
    all: "全ステップ一括実行",
    article: "コラム記事を生成",
    faq: "FAQを追加",
    sns: "SNS投稿テキスト生成",
  };

  const cardStyle = {
    background: "#141414",
    border: "1px solid rgba(204,34,34,0.2)",
    borderRadius: "8px",
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold" style={{ color: "#F8F8F8" }}>SEO/AIO 自動化</h2>
        <button
          onClick={fetchStatus}
          className="px-3 py-1.5 text-xs border transition-opacity hover:opacity-70"
          style={{ borderColor: "#CC2222", color: "#CC2222" }}
        >
          更新
        </button>
      </div>

      {message && (
        <div
          className="px-4 py-3 rounded text-sm"
          style={{
            background: message.type === "success" ? "rgba(34,197,94,0.1)" : "rgba(204,34,34,0.1)",
            border: `1px solid ${message.type === "success" ? "rgba(34,197,94,0.3)" : "rgba(204,34,34,0.3)"}`,
            color: message.type === "success" ? "#86efac" : "#fca5a5",
          }}
        >
          {message.text}
        </div>
      )}

      {/* 実行ボタン */}
      <div style={cardStyle} className="p-6">
        <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "#CC2222" }}>
          手動実行
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {(["all", "article", "faq", "sns"] as const).map((step) => (
            <button
              key={step}
              onClick={() => triggerStep(step)}
              disabled={running !== null}
              className="py-3 px-2 text-xs font-bold transition-all hover:opacity-80 disabled:opacity-40 rounded"
              style={{
                background: step === "all" ? "#CC2222" : "transparent",
                border: `1px solid ${step === "all" ? "#CC2222" : "rgba(204,34,34,0.4)"}`,
                color: "#F8F8F8",
              }}
            >
              {running === step ? "実行中..." : stepLabels[step]}
            </button>
          ))}
        </div>
        <p className="text-xs mt-4" style={{ color: "rgba(248,248,248,0.3)" }}>
          ※ 毎週月曜 9:00 に GitHub Actions で自動実行されます（GitHub Secrets に ANTHROPIC_API_KEY を設定が必要）
        </p>
      </div>

      {/* 最終実行ステータス */}
      {loading ? (
        <p style={{ color: "rgba(248,248,248,0.4)" }} className="text-sm">読み込み中...</p>
      ) : status ? (
        <div className="grid sm:grid-cols-2 gap-6">
          {/* 実行結果 */}
          <div style={cardStyle} className="p-6">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#CC2222" }}>
              最終実行結果
            </p>
            {status.lastSummary ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span
                    className="px-2 py-0.5 text-xs font-bold rounded"
                    style={{
                      background: status.lastSummary.failedSteps === 0
                        ? "rgba(34,197,94,0.2)" : "rgba(204,34,34,0.2)",
                      color: status.lastSummary.failedSteps === 0 ? "#86efac" : "#fca5a5",
                    }}
                  >
                    {status.lastSummary.failedSteps === 0 ? "成功" : "一部失敗"}
                  </span>
                  <span className="text-xs" style={{ color: "rgba(248,248,248,0.5)" }}>
                    {status.lastRunDate} 実行
                  </span>
                </div>
                <p className="text-sm" style={{ color: "rgba(248,248,248,0.6)" }}>
                  {status.lastSummary.successSteps}/{status.lastSummary.totalSteps} ステップ成功
                </p>
                <div className="space-y-1">
                  {status.lastSummary.results.map((r, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs" style={{ color: "rgba(248,248,248,0.5)" }}>
                      <span style={{ color: r.success ? "#86efac" : "#fca5a5" }}>
                        {r.success ? "✓" : "✗"}
                      </span>
                      {r.step}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-sm" style={{ color: "rgba(248,248,248,0.4)" }}>
                まだ実行されていません
              </p>
            )}
          </div>

          {/* 最近生成した記事 */}
          <div style={cardStyle} className="p-6">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#CC2222" }}>
              生成済みコラム記事
            </p>
            {status.recentArticles.length > 0 ? (
              <div className="space-y-3">
                {status.recentArticles.map((a, i) => (
                  <div key={i} className="border-b border-white/5 pb-2 last:border-0">
                    <p className="text-sm font-medium" style={{ color: "#F8F8F8" }}>{a.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(248,248,248,0.4)" }}>
                      {a.category} · {a.publishedAt}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm" style={{ color: "rgba(248,248,248,0.4)" }}>
                生成済み記事なし
              </p>
            )}
          </div>
        </div>
      ) : null}

      {/* SNS投稿テキスト */}
      {status && status.recentSnsPosts.length > 0 && (
        <div style={cardStyle} className="p-6">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#CC2222" }}>
            生成済みSNS投稿テキスト
          </p>
          <div className="space-y-4">
            {status.recentSnsPosts.slice(0, 3).map((post, i) => (
              <div key={i} className="border-b border-white/5 pb-4 last:border-0">
                {post.instagram && (
                  <div className="mb-2">
                    <p className="text-xs font-bold mb-1" style={{ color: "#CC2222" }}>Instagram</p>
                    <p className="text-xs whitespace-pre-wrap" style={{ color: "rgba(248,248,248,0.6)" }}>
                      {post.instagram.slice(0, 200)}{post.instagram.length > 200 ? "..." : ""}
                    </p>
                  </div>
                )}
                {post.twitter && (
                  <div>
                    <p className="text-xs font-bold mb-1" style={{ color: "#CC2222" }}>X (Twitter)</p>
                    <p className="text-xs whitespace-pre-wrap" style={{ color: "rgba(248,248,248,0.6)" }}>
                      {post.twitter}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ログ */}
      {status && status.recentLogs.length > 0 && (
        <div style={cardStyle} className="p-6">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#CC2222" }}>
            実行ログ（最新30件）
          </p>
          <div
            className="font-mono text-xs space-y-0.5 max-h-48 overflow-y-auto"
            style={{ color: "rgba(248,248,248,0.5)" }}
          >
            {status.recentLogs.map((line, i) => (
              <div key={i} style={{
                color: line.includes("[ERROR]") ? "#fca5a5"
                  : line.includes("[SUCCESS]") ? "#86efac"
                  : line.includes("[WARN]") ? "#fcd34d"
                  : "rgba(248,248,248,0.5)"
              }}>
                {line}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* GitHub Actions 設定ガイド */}
      <div style={{ ...cardStyle, borderColor: "rgba(201,168,76,0.2)" }} className="p-6">
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#C9A84C" }}>
          GitHub Actions 設定手順
        </p>
        <ol className="space-y-2 text-sm" style={{ color: "rgba(248,248,248,0.6)" }}>
          <li>1. GitHub リポジトリの <code className="px-1 py-0.5 rounded text-xs" style={{ background: "rgba(255,255,255,0.1)" }}>Settings → Secrets → Actions</code> を開く</li>
          <li>2. <code className="px-1 py-0.5 rounded text-xs" style={{ background: "rgba(255,255,255,0.1)" }}>ANTHROPIC_API_KEY</code> シークレットを追加</li>
          <li>3. <code className="px-1 py-0.5 rounded text-xs" style={{ background: "rgba(255,255,255,0.1)" }}>.github/workflows/seo-weekly.yml</code> が自動で週次実行</li>
          <li>4. 手動実行: GitHub → Actions → Weekly SEO Content Generation → Run workflow</li>
        </ol>
      </div>
    </div>
  );
}

// ---- メインダッシュボード ----
function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<"cases" | "news" | "contacts" | "seo">(
    "seo"
  );

  const tabs = [
    { key: "seo" as const, label: "🤖 SEO自動化" },
    { key: "cases" as const, label: "事例管理" },
    { key: "news" as const, label: "ニュース管理" },
    { key: "contacts" as const, label: "お問い合わせ" },
  ];

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      {/* ヘッダー */}
      <header
        className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 border-b"
        style={{ background: "#141414", borderColor: "#CC2222" }}
      >
        <h1 className="text-xl font-bold tracking-widest" style={{ color: "#F8F8F8" }}>
          SAISON 管理画面
        </h1>
        <button
          onClick={onLogout}
          className="px-4 py-2 text-sm border transition-opacity hover:opacity-70"
          style={{ borderColor: "#CC2222", color: "#CC2222" }}
        >
          ログアウト
        </button>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* タブ */}
        <div
          className="flex gap-0 mb-8 border-b"
          style={{ borderColor: "#CC2222" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="px-6 py-3 text-sm font-bold transition-colors"
              style={{
                background:
                  activeTab === tab.key ? "#CC2222" : "transparent",
                color: "#F8F8F8",
                borderBottom:
                  activeTab === tab.key
                    ? "2px solid #CC2222"
                    : "2px solid transparent",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* タブコンテンツ */}
        {activeTab === "seo" && <SeoTab />}
        {activeTab === "cases" && <CasesTab />}
        {activeTab === "news" && <NewsTab />}
        {activeTab === "contacts" && <ContactsTab />}
      </div>
    </div>
  );
}

// ---- エントリポイント ----
export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const auth = localStorage.getItem("saison_admin_auth");
    setIsAuthenticated(auth === "true");
  }, []);

  const handleLogin = () => setIsAuthenticated(true);

  const handleLogout = () => {
    localStorage.removeItem("saison_admin_auth");
    setIsAuthenticated(false);
  };

  // ハイドレーション中はローディング
  if (isAuthenticated === null) {
    return (
      <div
        style={{ background: "#0a0a0a" }}
        className="min-h-screen flex items-center justify-center"
      >
        <p style={{ color: "#F8F8F8" }}>読み込み中...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return <Dashboard onLogout={handleLogout} />;
}
