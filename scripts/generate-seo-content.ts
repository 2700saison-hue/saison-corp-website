/**
 * SEOコンテンツ生成スクリプト
 * Claude APIを使用してSEO記事を生成し、columns.tsに追記する
 */

import Anthropic from "@anthropic-ai/sdk";
import * as fs from "fs";
import * as path from "path";
import {
  SEO_KEYWORDS,
  getNextKeywords,
  keywordToColumnCategory,
  EXISTING_SLUGS,
} from "../src/data/seo-keywords.js";

const COLUMNS_FILE = path.join(process.cwd(), "src/data/columns.ts");
const LLMS_FILE = path.join(process.cwd(), "src/app/llms.txt/route.ts");

/**
 * columns.tsから既存スラッグを抽出
 */
function extractExistingSlugs(content: string): string[] {
  const slugMatches = content.match(/slug:\s*["'`]([^"'`]+)["'`]/g);
  if (!slugMatches) return [];
  return slugMatches.map((m) => m.replace(/slug:\s*["'`]([^"'`]+)["'`]/, "$1"));
}

/**
 * columns.tsから既存キーワード/タイトルを抽出
 */
function extractExistingTitles(content: string): string[] {
  const titleMatches = content.match(/title:\s*["'`]([^"'`]+)["'`]/g);
  if (!titleMatches) return [];
  return titleMatches.map((m) => m.replace(/title:\s*["'`]([^"'`]+)["'`]/, "$1"));
}

/**
 * 使用済みキーワードを取得（タイトルから類推）
 */
function getUsedKeywords(titles: string[]): string[] {
  const used: string[] = [];
  for (const kw of SEO_KEYWORDS) {
    // タイトルにキーワードの主要語が含まれているかチェック
    const mainWord = kw.keyword.split(" ")[0];
    if (titles.some((t) => t.includes(mainWord))) {
      used.push(kw.keyword);
    }
  }
  return used;
}

/**
 * 今日の日付を YYYY-MM-DD 形式で取得
 */
function getTodayDate(): string {
  const now = new Date();
  return now.toISOString().split("T")[0];
}

/**
 * キーワードからslugを生成
 */
function generateSlug(keyword: string, date: string): string {
  const year = date.substring(0, 4);
  const base = keyword
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return `${base}-${year}`.substring(0, 60);
}

/**
 * Claude APIで記事を生成
 */
async function generateArticle(
  client: Anthropic,
  keyword: string,
  date: string
): Promise<{
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readMinutes: number;
  tags: string[];
  content: string;
}> {
  console.log(`  Claude APIで記事生成中: "${keyword}"`);

  const prompt = `あなたは株式会社セゾン（SNS運用代行・AI導入支援・ホームページ制作）のSEOライターです。
以下のキーワードをメインターゲットとした、SEOに最適化された記事を生成してください。

【ターゲットキーワード】
${keyword}

【記事の要件】
- 文字数: 2000〜3000字（日本語）
- 形式: HTML（h2, h3, p, ul, ol タグを使用、他のタグは使わない）
- タイトル: 30〜40文字、キーワードを含む、数字や具体性を入れる
- ディスクリプション: 120文字以内、自然な日本語
- 株式会社セゾンのサービスに自然につなげる（露骨な宣伝はNG）
- 実用的な情報を提供し、読者が「役に立った」と感じる内容

【株式会社セゾンのサービス情報（自然に組み込む）】
- SNS運用代行（Instagram/TikTok/YouTube/X対応）、平均ROI195%
- AI業務自動化ツール SoloptiLink AI
- ホームページ制作（最短1日納品）
- LP制作
- 補助金申請支援（IT導入補助金等）
- 無料相談対応

以下のJSON形式で出力してください（コードブロックなし、JSONのみ）:
{
  "slug": "英小文字ハイフン区切り（例: sns-cost-guide-2025）",
  "title": "記事タイトル",
  "description": "ディスクリプション120文字以内",
  "category": "${keyword.includes("補助金") ? "subsidy" : keyword.includes("AI") || keyword.includes("DX") ? "ai" : keyword.includes("LP") || keyword.includes("ホームページ") ? "marketing" : keyword.includes("採用") ? "sns" : "sns"}",
  "tags": ["タグ1", "タグ2", "タグ3", "タグ4"],
  "readMinutes": 数字,
  "content": "HTML形式の本文（改行は\\nでエスケープ）"
}`;

  const message = await client.messages.create({
    model: "claude-opus-4-5",
    max_tokens: 4096,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const responseText =
    message.content[0].type === "text" ? message.content[0].text : "";

  // JSONをパース
  let parsed: {
    slug: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    readMinutes: number;
    content: string;
  };

  try {
    // JSONの開始・終了を見つける
    const jsonStart = responseText.indexOf("{");
    const jsonEnd = responseText.lastIndexOf("}");
    if (jsonStart === -1 || jsonEnd === -1) {
      throw new Error("JSONが見つかりません");
    }
    const jsonStr = responseText.substring(jsonStart, jsonEnd + 1);
    parsed = JSON.parse(jsonStr);
  } catch (e) {
    console.error("JSONパースエラー:", e);
    throw new Error(`Claude APIのレスポンスをパースできません: ${responseText.substring(0, 200)}`);
  }

  // slugの重複チェックと調整
  let slug = parsed.slug || generateSlug(keyword, date);
  const currentSlugs = EXISTING_SLUGS;
  if (currentSlugs.includes(slug)) {
    slug = `${slug}-new`;
  }

  return {
    slug,
    title: parsed.title,
    description: parsed.description,
    category: parsed.category || "sns",
    publishedAt: date,
    readMinutes: parsed.readMinutes || 8,
    tags: parsed.tags || [keyword.split(" ")[0]],
    content: parsed.content,
  };
}

/**
 * columns.tsに記事を追記
 */
function appendToColumnsFile(
  article: {
    slug: string;
    title: string;
    description: string;
    category: string;
    publishedAt: string;
    readMinutes: number;
    tags: string[];
    content: string;
  }
): void {
  const content = fs.readFileSync(COLUMNS_FILE, "utf-8");

  // 配列の末尾（];の前）を見つける
  const insertPoint = content.lastIndexOf("];");
  if (insertPoint === -1) {
    throw new Error("columns.tsの配列末尾が見つかりません");
  }

  // 新しい記事オブジェクトを構築
  const tagsStr = article.tags.map((t) => `"${t}"`).join(", ");
  // contentのバックティック内のバックティックをエスケープ
  const safeContent = article.content.replace(/`/g, "\\`").replace(/\${/g, "\\${");

  const newArticle = `  {
    slug: "${article.slug}",
    title: "${article.title}",
    description:
      "${article.description}",
    category: "${article.category}" as const,
    publishedAt: "${article.publishedAt}",
    readMinutes: ${article.readMinutes},
    tags: [${tagsStr}],
    content: \`
${safeContent}
    \`.trim(),
  },
`;

  const newContent =
    content.substring(0, insertPoint) + newArticle + content.substring(insertPoint);

  fs.writeFileSync(COLUMNS_FILE, newContent, "utf-8");
  console.log(`  columns.ts に記事を追記: ${article.slug}`);
}

/**
 * llms.txtのコラムリストを更新
 */
function updateLlmsFile(article: {
  slug: string;
  title: string;
  publishedAt: string;
}): void {
  const content = fs.readFileSync(LLMS_FILE, "utf-8");

  // コラムセクションを探して追記
  const columnListMarker = "- コラム: https://seasonsezon.co.jp/column";
  const insertPoint = content.indexOf(columnListMarker);

  if (insertPoint === -1) {
    console.warn("  llms.txt: コラムリストのマーカーが見つかりません。スキップします。");
    return;
  }

  const newLine = `\n- ${article.title} (${article.publishedAt}): https://seasonsezon.co.jp/column/${article.slug}`;
  const insertAfter = insertPoint + columnListMarker.length;

  const newContent =
    content.substring(0, insertAfter) + newLine + content.substring(insertAfter);

  fs.writeFileSync(LLMS_FILE, newContent, "utf-8");
  console.log(`  llms.txt を更新しました`);
}

/**
 * メイン処理
 */
async function main(): Promise<void> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY が設定されていません");
  }

  const client = new Anthropic({ apiKey });

  // 既存のcolumns.tsを読み込む
  const columnsContent = fs.readFileSync(COLUMNS_FILE, "utf-8");
  const existingSlugs = extractExistingSlugs(columnsContent);
  const existingTitles = extractExistingTitles(columnsContent);
  const usedKeywords = getUsedKeywords(existingTitles);

  console.log(`既存記事数: ${existingSlugs.length}`);
  console.log(`使用済みキーワード数: ${usedKeywords.length}`);

  // 未使用のキーワードから次の1件を選択
  const nextKeywords = getNextKeywords(usedKeywords, 1);

  if (nextKeywords.length === 0) {
    console.log("生成できる新しいキーワードがありません");
    return;
  }

  const keyword = nextKeywords[0];
  console.log(`\n選択されたキーワード: "${keyword.keyword}" (${keyword.category})`);

  const today = getTodayDate();

  try {
    // 記事を生成
    const article = await generateArticle(client, keyword.keyword, today);
    console.log(`  生成タイトル: ${article.title}`);
    console.log(`  slug: ${article.slug}`);

    // columns.tsに追記
    appendToColumnsFile(article);

    // llms.txtを更新
    updateLlmsFile(article);

    console.log(`\n✓ 記事生成完了: ${article.title}`);

    // 結果をJSONで保存
    const resultPath = path.join(process.cwd(), "generated", `article-${today}.json`);
    fs.writeFileSync(resultPath, JSON.stringify(article, null, 2), "utf-8");
    console.log(`  結果保存: ${resultPath}`);
  } catch (error) {
    console.error(`記事生成エラー:`, error);
    throw error;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
