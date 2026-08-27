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

  // ===== 2025年9月追加ターゲット =====
  {
    keyword: "ドラマ型動画 企業 採用 費用",
    category: "recruitment",
    priority: "high",
  },
  {
    keyword: "Instagram 集客 飲食店 方法",
    category: "sns",
    priority: "high",
  },
  {
    keyword: "LINE公式アカウント 集客 活用 中小企業",
    category: "sns",
    priority: "high",
  },
  {
    keyword: "IT導入補助金 2025 対象 システム",
    category: "subsidy",
    priority: "high",
  },
  {
    keyword: "SNS運用 内製 外注 比較",
    category: "sns",
    priority: "medium",
  },
  {
    keyword: "ホームページ SEO 上位表示 方法",
    category: "web",
    priority: "medium",
  },
  {
    keyword: "採用動画 費用 相場",
    category: "recruitment",
    priority: "high",
  },
  {
    keyword: "中小企業 マーケティング 課題",
    category: "sns",
    priority: "medium",
  },
  {
    keyword: "SNS 売上 UP 事例",
    category: "sns",
    priority: "high",
  },
  {
    keyword: "AI ChatGPT SNS投稿文 自動生成",
    category: "ai",
    priority: "medium",
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
  // 初期記事群
  "sns-unyo-daikou-erabikata",
  "instagram-followers-increase",
  "sme-dx-success-cases",
  "it-hojo-kin-sns",
  "drama-sns-video-effect",
  "tiktok-kigyou-account",
  "saiyo-sns-instagram",
  "line-official-sales-up",
  "youtube-shorts-kigyou",
  "sns-koukoku-vs-unyo",
  "hp-seisaku-shippai",
  "chatgpt-gyoumu-katsuyou",
  "branding-sns-jidai",
  "pr-douga-saiyo",
  "sns-roi-keisan",
  "lp-production-cost-guide-2025",
  "small-business-subsidy-homepage-guide-2025",
  "sns-recruitment-effects-examples-2025",
  // 2025年6月追加
  "kaigo-sns-saiyo-hoho",
  "kensetsu-sns-saiyo-jirei",
  "drama-saiyo-doga-hiyo-kouka",
  "sns-daikou-hiyo-2025",
  "it-hojyokin-sns-2025",
  "line-official-chusho-katsuyo",
  "tiktok-inshoku-shuukyaku-houhou",
  "chusho-kigyo-seo-structure",
  // 2025年7月追加
  "dx-subsidy-guide-sme-2025",
  "business-automation-ai-cost-reduction-guide-2025",
  "corporate-site-seo-strategy-2025",
  "drama-sns-video-recruiting-cost-reduction",
  "sns-unyo-daikou-adachi-tokyo-guide",
  "kensetsu-sns-saiyo-daikou-guide",
  "instagram-follower-increase-guide-2026",
  "jigyou-saikouchiku-hojokin-saitaku-points-2025",
  "saiyo-cost-sakugen-method-2025",
  "wantedly-sns-recruitment-comparison-2025",
  // 2025年8月追加（今回）
  "ai-gyoumu-jidouka-chusho-jirei-2025",
  "sns-unyo-daikou-adachi-ku-tokyo-seo",
  "instagram-saiyo-cost-vs-recruit-agent-2025",
  "sns-unyo-daikou-hiyou-souba-2025",
  "chatgpt-gyoumu-katsuyou-chusho-kigyo-2025",
  // 2025年8月追加（Round10）
  "tiktok-kigyou-shuukyaku-2025",
  "shokibo-jizokukahojokin-hp-2025",
  "instagram-tiktok-saiyo-katsuyo-2025",
  // 2025年9月追加（今回）
  "drama-saiyo-video-cost-2025",
  "inshoku-instagram-shukyaku-2025",
  "line-official-chusho-shukyaku-2025",
  // 2025年9月追加（Round2）
  "sns-unyo-naisei-gaichu-hikaku-2025",
  "lp-seisaku-hiyou-souba-2025",
  "chusho-kigyo-marketing-kadai-2025",
  // 2025年10月追加
  "it-donyu-hojokin-sns-2025",
  "ai-chatbot-chusho-kigyo-2025",
  "jigyou-saikouchiku-hojokin-dx-2025",
  "instagram-dm-eigyo-chusho-2025",
  "google-meo-taisaku-chusho-2025",
  "youtube-shorts-business-marketing-2025",
  "sns-unyo-in-house-training-guide-2025",
  "b2b-sns-marketing-guide-2025",
  "instagram-reels-algorithm-2025",
  "sns-unyo-cost-reduction-2025",
  "ai-gyoumu-kaikaku-chusho-2025",
  "sns-account-start-guide-2025",
  "line-official-account-setup-guide-2025",
  "web-seo-local-search-guide-2025",
  "sns-marketing-kpi-settei-guide-2025",
  "instagram-story-marketing-guide-2025",
  "ec-sns-marketing-strategy-2025",
  "video-marketing-kigyou-guide-2025",
  "kaigogyo-dx-sns-guide-2025",
  "it-hojyokin-dx-kakusin-2026",
  "ai-chatbot-eigyo-jidouka-2025",
  "sns-unyo-kpi-report-template-2025",
  "kensetsu-sns-recruit-dx-2025",
  "saiyo-branding-sns-2025",
  "google-analytics-sns-renkei-2025",
  "lp-cta-design-guide-2025",
  "tiktok-eigyo-recruit-2025",
  "sme-digital-marketing-roadmap-2025",
  "instagram-hashtag-strategy-2025",
  "ai-content-marketing-2025",
  "web-accessibility-seo-2025",
  "sns-crisis-management-2025",
  "dx-investment-roi-guide-2025",
  "sns-advertising-guide-2025",
  "influencer-marketing-guide-2025",
  "subsidy-jizokukahojokin-2025",
  "email-marketing-vs-line-2025",
  "saison-case-study-sns-dx-2025",
  "ecommerce-sns-strategy-2026",
  "chatgpt-prompt-business-2025",
  "sns-personal-branding-ceo-2025",
  "medical-clinic-sns-guide-2025",
  "ai-sales-automation-2025",
  "social-media-policy-company-2025",
  "sns-outsource-checklist-2025",
  "dx-small-office-guide-2025",
  "instagram-reels-business-guide-2026",
  "google-my-business-optimization-2026",
  "line-official-account-rich-menu-guide-2026",
  "sns-content-calendar-template-2026",
  "tiktok-b2b-marketing-guide-2026",
  "ai-writing-assistant-business-2026",
  "web-marketing-funnel-guide-2026",
  "seo-internal-linking-strategy-2026",
  "email-newsletter-marketing-guide-2026",
  "sme-branding-strategy-2026",
  "store-sns-local-marketing-2026",
  "corporate-video-production-guide-2026",
  "ai-image-generation-business-2026",
  "outsourcing-marketing-guide-2026",
  "freelance-sns-manager-guide-2026",
  "subsidy-application-guide-2026",
  "instagram-dm-sales-strategy-2026",
  "saas-marketing-strategy-2026",
  "sns-account-growth-hack-2026",
  "ai-customer-support-automation-2026",
  "care-facility-sns-recruitment-2026",
  "construction-company-sns-guide-2026",
  "cx-improvement-digital-marketing-2026",
  "beauty-salon-sns-strategy-2026",
  "web-analytics-beginner-guide-2026",
  "restaurant-line-delivery-sns-2026",
  "personal-branding-sns-executive-2026",
  "real-estate-sns-marketing-2026",
  "ai-recruitment-screening-2026",
  "local-seo-adachi-guide-2026",
  "content-marketing-roi-2026",
  "saitama-kensetsu-sns-saiyo-2026",
  "kanagawa-kaigo-sns-saiyo-2026",
  "chiba-kaigo-kensetsu-sns-2026",
  "saitama-kaigo-sns-saiyo-2026",
  "kanagawa-kensetsu-sns-saiyo-2026",
  "saitama-kensetsu-kaigo-dx-sns-2026",
  "chiba-kensetsu-sns-saiyo-2026",
  "kanagawa-kaigo-kensetsu-sns-guide-2026",
  "saitama-chiba-kanagawa-sns-saiyo-comparison-2026",
  "kaigo-sns-local-saitama-chiba-kanagawa-2026",
  "kensetsu-tiktok-recruit-saitama-chiba-kanagawa-2026",
  "line-official-kaigo-kensetsu-saitama-chiba-kanagawa-2026",
  "sns-unyo-daikou-yokohama-2026",
  "sns-unyo-daikou-kawasaki-2026",
  "sns-unyo-daikou-saitama-city-2026",
  "sns-unyo-daikou-chiba-city-2026",
  "kaigo-sns-cost-reduction-saitama-chiba-kanagawa-2026",
  "kensetsu-instagram-branding-kanto-2026",
  "sns-unyo-daikou-sagamihara-funabashi-koshigaya-2026",
  "kensetsu-kaigo-meo-saitama-chiba-kanagawa-2026",
  "kaigo-kensetsu-sns-hojokin-saitama-chiba-kanagawa-2026",
  "kensetsu-shokunin-tiktok-profile-2026",
  "kaigo-drama-video-saiyo-kanto-2026",
  "kaigo-kensetsu-sns-toubu-saitama-2026",
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
