/**
 * FAQ自動追加スクリプト
 * Claude APIで新しいQ&Aを生成し、faq/page.tsxの faqData 配列に追記する
 */

import Anthropic from "@anthropic-ai/sdk";
import * as fs from "fs";
import * as path from "path";

const FAQ_FILE = path.join(process.cwd(), "src/app/faq/page.tsx");

interface FaqItem {
  q: string;
  a: string;
}

interface FaqGenerationResult {
  category: string;
  items: FaqItem[];
}

/**
 * 既存のQ一覧を抽出（重複チェック用）
 */
function extractExistingQuestions(content: string): string[] {
  const qMatches = content.match(/q:\s*"([^"]+)"/g);
  if (!qMatches) return [];
  return qMatches.map((m) => m.replace(/q:\s*"([^"]+)"/, "$1"));
}

/**
 * Claude APIで新しいFAQを生成
 */
async function generateFaqItems(
  client: Anthropic,
  existingQuestions: string[]
): Promise<FaqGenerationResult[]> {
  console.log("  Claude APIでFAQ生成中...");

  const existingQsText = existingQuestions.slice(0, 10).join("\n- ");

  const prompt = `あなたは株式会社セゾン（SNS運用代行・AI導入支援・ホームページ制作）のFAQ担当者です。
ウェブサイトのよくある質問ページに追加するための新しいFAQを生成してください。

【株式会社セゾンのサービス】
- SNS運用代行（Instagram/TikTok/YouTube/X対応）
- AI業務自動化ツール SoloptiLink AI
- ホームページ・LP制作
- 補助金申請支援
- PR動画制作
- SNS・AI研修

【既存の質問（重複禁止）】
- ${existingQsText}

【要件】
- 3〜5問の新しいQ&Aを生成
- 実際に顧客から聞かれそうな実用的な質問
- 回答は具体的かつ200字前後
- 既存の質問と重複しないこと
- カテゴリは以下から選ぶ: general（会社全般）, sns（SNS運用代行）, ai（AI・SoloptiLink）, web（Web制作）, subsidy（補助金）, contract（契約・料金）

以下のJSON形式で出力（コードブロックなし、JSONのみ）:
[
  {
    "category": "カテゴリID",
    "items": [
      {
        "q": "質問文",
        "a": "回答文（200字前後）"
      }
    ]
  }
]`;

  const message = await client.messages.create({
    model: "claude-opus-4-5",
    max_tokens: 2048,
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
  let parsed: FaqGenerationResult[];
  try {
    const jsonStart = responseText.indexOf("[");
    const jsonEnd = responseText.lastIndexOf("]");
    if (jsonStart === -1 || jsonEnd === -1) {
      throw new Error("JSONが見つかりません");
    }
    const jsonStr = responseText.substring(jsonStart, jsonEnd + 1);
    parsed = JSON.parse(jsonStr);
  } catch (e) {
    console.error("JSONパースエラー:", e);
    throw new Error(`Claude APIのレスポンスをパースできません: ${responseText.substring(0, 200)}`);
  }

  return parsed;
}

/**
 * faq/page.tsx の既存カテゴリに追記、または新しいカテゴリとして追加
 */
function appendFaqToFile(newFaqs: FaqGenerationResult[], existingQuestions: string[]): number {
  const content = fs.readFileSync(FAQ_FILE, "utf-8");

  let totalAdded = 0;
  let updatedContent = content;

  for (const faqGroup of newFaqs) {
    // 重複チェック
    const uniqueItems = faqGroup.items.filter(
      (item) =>
        !existingQuestions.includes(item.q) &&
        !updatedContent.includes(item.q.substring(0, 20))
    );

    if (uniqueItems.length === 0) {
      console.log(`  カテゴリ "${faqGroup.category}": 重複のためスキップ`);
      continue;
    }

    // 対応するカテゴリブロックを探す
    const categoryMarker = `id: "${faqGroup.category}"`;
    const categoryIndex = updatedContent.indexOf(categoryMarker);

    if (categoryIndex !== -1) {
      // 既存カテゴリの items 配列末尾を探して追記
      // "items: [" の後の "]," を探す
      const itemsStart = updatedContent.indexOf("items: [", categoryIndex);
      if (itemsStart !== -1) {
        // このカテゴリの items 配列の終わりを見つける（ネストを考慮）
        let depth = 0;
        let pos = itemsStart + "items: [".length;
        let itemsEnd = -1;
        while (pos < updatedContent.length) {
          if (updatedContent[pos] === "[") depth++;
          else if (updatedContent[pos] === "]") {
            if (depth === 0) {
              itemsEnd = pos;
              break;
            }
            depth--;
          }
          pos++;
        }

        if (itemsEnd !== -1) {
          const newItemsStr = uniqueItems
            .map(
              (item) =>
                `\n      {\n        q: "${item.q.replace(/"/g, '\\"')}",\n        a: "${item.a.replace(/"/g, '\\"')}",\n      },`
            )
            .join("");

          updatedContent =
            updatedContent.substring(0, itemsEnd) +
            newItemsStr +
            "\n    " +
            updatedContent.substring(itemsEnd);

          totalAdded += uniqueItems.length;
          console.log(`  カテゴリ "${faqGroup.category}" に ${uniqueItems.length} 件追加`);
        }
      }
    } else {
      // 新しいカテゴリとして追加（FAQ_DATA 配列の末尾に追加）
      const faqDataEnd = updatedContent.lastIndexOf("];", updatedContent.indexOf("allFaqItems"));
      if (faqDataEnd !== -1) {
        const itemsStr = uniqueItems
          .map(
            (item) =>
              `      {\n        q: "${item.q.replace(/"/g, '\\"')}",\n        a: "${item.a.replace(/"/g, '\\"')}",\n      },`
          )
          .join("\n");

        const newCategory = `  {\n    id: "${faqGroup.category}",\n    label: "追加FAQ",\n    color: "#607D8B",\n    items: [\n${itemsStr}\n    ],\n  },\n`;

        updatedContent =
          updatedContent.substring(0, faqDataEnd) +
          newCategory +
          updatedContent.substring(faqDataEnd);

        totalAdded += uniqueItems.length;
        console.log(`  新カテゴリ "${faqGroup.category}" を追加: ${uniqueItems.length} 件`);
      }
    }
  }

  if (totalAdded > 0) {
    fs.writeFileSync(FAQ_FILE, updatedContent, "utf-8");
    console.log(`  faq/page.tsx を更新しました（合計 ${totalAdded} 件追加）`);
  } else {
    console.log("  追加できる新しいFAQがありませんでした");
  }

  return totalAdded;
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

  // 既存FAQを読み込む
  const faqContent = fs.readFileSync(FAQ_FILE, "utf-8");
  const existingQuestions = extractExistingQuestions(faqContent);
  console.log(`既存FAQ数: ${existingQuestions.length}`);

  // 新しいFAQを生成
  const newFaqs = await generateFaqItems(client, existingQuestions);
  console.log(`生成されたFAQグループ数: ${newFaqs.length}`);

  // ファイルに追記
  const added = appendFaqToFile(newFaqs, existingQuestions);

  // 結果を保存
  const today = new Date().toISOString().split("T")[0];
  const resultPath = path.join(process.cwd(), "generated", `faq-${today}.json`);
  fs.writeFileSync(resultPath, JSON.stringify({ added, newFaqs }, null, 2), "utf-8");
  console.log(`\n✓ FAQ生成完了: ${added} 件追加`);
  console.log(`  結果保存: ${resultPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
