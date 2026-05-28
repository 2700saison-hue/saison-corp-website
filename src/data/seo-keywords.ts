/**
 * SEOターゲットキーワード設定ファイル
 * カテゴリ別に分類し、ローテーション機能付き
 */

export interface SeoKeyword {
  keyword: string;
  category: "sns" | "ai" | "web" | "subsidy" | "recruitment";
  priority: "high" | "medium" | "low";
  slug?: string; // 記事生成済みの場合にslugを設定
}

export const SEO_KEYWORDS: SeoKeyword[] = [
  // ===== SNS運用カテゴリ =====
  {
    keyword: "SNS運用代行 費用",
    category: "sns",
    priority: "high",
  },
  {
    keyword: "Instagram 企業 フォロワー増加",
    category: "sns",
    priority: "high",
  },
  {
    keyword: "SNS運用代行 中小企業",
    category: "sns",
    priority: "high",
  },
  {
    keyword: "TikTok 企業 集客 方法",
    category: "sns",
    priority: "medium",
  },
  {
    keyword: "SNS採用 効果 実例",
    category: "sns",
    priority: "medium",
  },
  {
    keyword: "Instagram リール 企業 活用",
    category: "sns",
    priority: "medium",
  },
  {
    keyword: "SNS運用 外注 メリット デメリット",
    category: "sns",
    priority: "medium",
  },
  {
    keyword: "YouTube ショート 企業 集客",
    category: "sns",
    priority: "low",
  },
  {
    keyword: "X Twitter 企業 運用 方法",
    category: "sns",
    priority: "low",
  },

  // ===== AI・DXカテゴリ =====
  {
    keyword: "中小企業 DX AI 導入",
    category: "ai",
    priority: "high",
  },
  {
    keyword: "AI 業務効率化 中小企業 事例",
    category: "ai",
    priority: "high",
  },
  {
    keyword: "ChatGPT 業務活用 方法",
    category: "ai",
    priority: "high",
  },
  {
    keyword: "DX推進 補助金 中小企業",
    category: "ai",
    priority: "medium",
  },
  {
    keyword: "AI ツール 経営 自動化",
    category: "ai",
    priority: "medium",
  },
  {
    keyword: "業務自動化 AI コスト削減",
    category: "ai",
    priority: "medium",
  },

  // ===== Web制作カテゴリ =====
  {
    keyword: "LP制作 費用",
    category: "web",
    priority: "high",
  },
  {
    keyword: "ホームページ 制作 中小企業 費用",
    category: "web",
    priority: "high",
  },
  {
    keyword: "LP ランディングページ 効果 高め方",
    category: "web",
    priority: "medium",
  },
  {
    keyword: "コーポレートサイト SEO 対策",
    category: "web",
    priority: "medium",
  },
  {
    keyword: "ホームページ リニューアル 集客 効果",
    category: "web",
    priority: "low",
  },

  // ===== 補助金カテゴリ =====
  {
    keyword: "IT導入補助金 SNS 申請方法",
    category: "subsidy",
    priority: "high",
  },
  {
    keyword: "小規模事業者持続化補助金 ホームページ",
    category: "subsidy",
    priority: "high",
  },
  {
    keyword: "事業再構築補助金 採択 ポイント",
    category: "subsidy",
    priority: "medium",
  },
  {
    keyword: "補助金 デジタル化 2025年",
    category: "subsidy",
    priority: "medium",
  },

  // ===== 採用カテゴリ =====
  {
    keyword: "SNS 採用 若者 効果的",
    category: "recruitment",
    priority: "high",
  },
  {
    keyword: "採用 Instagram TikTok 活用",
    category: "recruitment",
    priority: "high",
  },
  {
    keyword: "採用コスト 削減 方法",
    category: "recruitment",
    priority: "medium",
  },
  {
    keyword: "Wantedly SNS 採用 比較",
    category: "recruitment",
    priority: "low",
  },
];

/**
 * カテゴリ別のラベルマッピング
 */
export const SEO_CATEGORY_LABELS: Record<SeoKeyword["category"], string> = {
  sns: "SNS運用",
  ai: "AI・DX",
  web: "Web制作",
  subsidy: "補助金",
  recruitment: "採用",
};

/**
 * 既存記事に使用済みのスラッグ一覧（columns.tsから取得したもの）
 */
export const EXISTING_SLUGS: string[] = [
  "sns-unyo-daikou-erabikata",
  "instagram-followers-increase",
  "dx-ai-introduction-sme",
  "lp-landing-page-cost",
  "it-subsidy-2025",
  "tiktok-business-strategy",
  "sns-recruitment-strategy",
  "line-official-business",
  "youtube-short-business",
  "web-seo-basics",
  "ai-chatgpt-business-use",
  "subsidy-saikochiku",
  "sns-roi-measurement",
  "drama-sns-video-effect",
  "instagram-reel-business",
];

/**
 * 未使用のキーワードをローテーション順に取得する
 * @param usedKeywords - すでに記事化されているキーワードの配列
 * @param count - 取得する件数
 * @param category - カテゴリフィルター（省略時は全カテゴリ）
 */
export function getNextKeywords(
  usedKeywords: string[] = [],
  count: number = 1,
  category?: SeoKeyword["category"]
): SeoKeyword[] {
  const filtered = SEO_KEYWORDS.filter((kw) => {
    // 使用済みキーワードを除外
    if (usedKeywords.includes(kw.keyword)) return false;
    // カテゴリフィルター
    if (category && kw.category !== category) return false;
    return true;
  });

  // 優先度順にソート (high > medium > low)
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  filtered.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return filtered.slice(0, count);
}

/**
 * キーワードからSEO記事カテゴリを取得
 */
export function keywordToColumnCategory(
  category: SeoKeyword["category"]
): "sns" | "ai" | "marketing" | "subsidy" | "case" {
  const map: Record<SeoKeyword["category"], "sns" | "ai" | "marketing" | "subsidy" | "case"> = {
    sns: "sns",
    ai: "ai",
    web: "marketing",
    subsidy: "subsidy",
    recruitment: "sns",
  };
  return map[category];
}
