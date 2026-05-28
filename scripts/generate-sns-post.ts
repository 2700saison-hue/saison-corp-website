/**
 * SNS投稿テキスト生成スクリプト
 * 最新コラム記事からInstagram/X用の投稿テキストを生成して保存する
 */

import Anthropic from "@anthropic-ai/sdk";
import * as fs from "fs";
import * as path from "path";

// columnsDataを直接インポートする代わりに、ファイルを読み込んでパースする
const COLUMNS_FILE = path.join(process.cwd(), "src/data/columns.ts");
const GENERATED_DIR = path.join(process.cwd(), "generated");

interface SnsPost {
  articleSlug: string;
  articleTitle: string;
  publishedAt: string;
  instagram: {
    text: string;
    hashtags: string[];
  };
  twitter: {
    text: string;
  };
  generatedAt: string;
}

/**
 * columns.tsから最新記事のタイトル・スラッグ・概要を抽出
 */
function extractLatestArticle(): {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
} | null {
  const content = fs.readFileSync(COLUMNS_FILE, "utf-8");

  // すべての記事エントリを抽出
  const slugMatches = [...content.matchAll(/slug:\s*["'`]([^"'`]+)["'`]/g)];
  const titleMatches = [...content.matchAll(/title:\s*"([^"]+)"/g)];
  const descMatches = [...content.matchAll(/description:\s*\n?\s*"([^"]+)"/g)];
  const dateMatches = [...content.matchAll(/publishedAt:\s*"([^"]+)"/g)];
  const tagsMatches = [...content.matchAll(/tags:\s*\[([^\]]+)\]/g)];

  if (slugMatches.length === 0) return null;

  // 最後の記事（最新）を取得
  const lastIndex = slugMatches.length - 1;
  const slug = slugMatches[lastIndex]?.[1] ?? "";
  const title = titleMatches[lastIndex]?.[1] ?? "";
  const description = descMatches[lastIndex]?.[1] ?? "";
  const publishedAt = dateMatches[lastIndex]?.[1] ?? "";

  // タグを抽出
  const tagsRaw = tagsMatches[lastIndex]?.[1] ?? "";
  const tags = tagsRaw.match(/"([^"]+)"/g)?.map((t) => t.replace(/"/g, "")) ?? [];

  return { slug, title, description, publishedAt, tags };
}

/**
 * Claude APIでSNS投稿テキストを生成
 */
async function generateSnsTexts(
  client: Anthropic,
  article: {
    slug: string;
    title: string;
    description: string;
    publishedAt: string;
    tags: string[];
  }
): Promise<{ instagram: { text: string; hashtags: string[] }; twitter: { text: string } }> {
  console.log(`  SNS投稿生成中: "${article.title}"`);

  const articleUrl = `https://seasonsezon.co.jp/column/${article.slug}`;

  const prompt = `あなたは株式会社セゾンのSNSマーケターです。
以下の記事に基づいてInstagramとX（Twitter）の投稿文を生成してください。

【記事情報】
タイトル: ${article.title}
概要: ${article.description}
URL: ${articleUrl}
タグ: ${article.tags.join(", ")}

【Instagram用要件】
- 絵文字を積極的に使用（投稿文全体で5〜10個程度）
- 読者の興味を引くフックから始める
- 記事の価値・読むメリットを伝える
- 200〜400文字
- ハッシュタグは別フィールドとして出力（10〜15個）
- #SNS運用 #中小企業 #マーケティング などを含む
- 末尾にURLを記載: ${articleUrl}

【X（Twitter）用要件】
- 120文字以内（URLの22文字を除く）
- インパクトのあるコピー
- 末尾にURL: ${articleUrl}

以下のJSON形式で出力（コードブロックなし、JSONのみ）:
{
  "instagram": {
    "text": "投稿本文（ハッシュタグ・URL含む）",
    "hashtags": ["ハッシュタグ1", "ハッシュタグ2", ...]
  },
  "twitter": {
    "text": "X投稿文（URL含む、120文字以内）"
  }
}`;

  const message = await client.messages.create({
    model: "claude-opus-4-5",
    max_tokens: 1024,
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
    instagram: { text: string; hashtags: string[] };
    twitter: { text: string };
  };

  try {
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

  // X投稿の文字数確認（URLの22文字を考慮）
  const twitterText = parsed.twitter.text;
  const textWithoutUrl = twitterText.replace(/https?:\/\/\S+/, "").trim();
  if (textWithoutUrl.length > 120) {
    console.warn(`  X投稿が長すぎます（${textWithoutUrl.length}文字）。短縮を推奨します。`);
  }

  return parsed;
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

  // 最新記事を取得
  const latestArticle = extractLatestArticle();
  if (!latestArticle) {
    console.error("記事が見つかりません");
    process.exit(1);
  }

  console.log(`最新記事: "${latestArticle.title}"`);

  // SNS投稿テキストを生成
  const snsTexts = await generateSnsTexts(client, latestArticle);

  // 結果を構築
  const result: SnsPost = {
    articleSlug: latestArticle.slug,
    articleTitle: latestArticle.title,
    publishedAt: latestArticle.publishedAt,
    instagram: snsTexts.instagram,
    twitter: snsTexts.twitter,
    generatedAt: new Date().toISOString(),
  };

  // generated/ ディレクトリに保存
  if (!fs.existsSync(GENERATED_DIR)) {
    fs.mkdirSync(GENERATED_DIR, { recursive: true });
  }

  const today = new Date().toISOString().split("T")[0];
  const outputPath = path.join(GENERATED_DIR, `sns-posts-${today}.json`);

  // 既存のファイルがあれば配列に追加
  let posts: SnsPost[] = [];
  if (fs.existsSync(outputPath)) {
    try {
      const existing = JSON.parse(fs.readFileSync(outputPath, "utf-8"));
      posts = Array.isArray(existing) ? existing : [existing];
    } catch {
      posts = [];
    }
  }
  posts.push(result);

  fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2), "utf-8");

  console.log(`\n✓ SNS投稿テキスト生成完了`);
  console.log(`  保存先: ${outputPath}`);
  console.log(`\n--- Instagram 投稿 ---`);
  console.log(result.instagram.text);
  console.log(`\nハッシュタグ: ${result.instagram.hashtags.join(" ")}`);
  console.log(`\n--- X (Twitter) 投稿 ---`);
  console.log(result.twitter.text);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
