import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";
import * as path from "path";
import { isAdminAuthenticated, unauthorizedResponse } from "@/lib/adminAuth";

// turbopackIgnore: true コメントで不要なファイルトレースを防止
const GENERATED_DIR = path.join(/*turbopackIgnore: true*/ process.cwd(), "generated");

// GET: 自動化ステータスと最新ログを返す
export async function GET(req: NextRequest) {
  if (!await isAdminAuthenticated(req)) return unauthorizedResponse();
  try {
    const today = new Date().toISOString().split("T")[0];

    // 最新のサマリーファイルを探す
    let latestSummary: {
      executedAt: string;
      successSteps: number;
      failedSteps: number;
      totalSteps: number;
      results: { step: string; success: boolean; error?: string }[];
    } | null = null;
    let latestDate = "";

    if (fs.existsSync(GENERATED_DIR)) {
      const files = fs.readdirSync(GENERATED_DIR)
        .filter((f) => f.startsWith("automation-summary-") && f.endsWith(".json"))
        .sort()
        .reverse();

      if (files.length > 0) {
        latestDate = files[0].replace("automation-summary-", "").replace(".json", "");
        const content = fs.readFileSync(path.join(GENERATED_DIR, files[0]), "utf-8");
        latestSummary = JSON.parse(content);
      }
    }

    // 最新記事を取得
    const articleFiles = fs.existsSync(GENERATED_DIR)
      ? fs.readdirSync(GENERATED_DIR)
          .filter((f) => f.startsWith("article-") && f.endsWith(".json"))
          .sort()
          .reverse()
          .slice(0, 5)
      : [];

    const recentArticles = articleFiles.map((f) => {
      try {
        const content = fs.readFileSync(path.join(GENERATED_DIR, f), "utf-8");
        return JSON.parse(content);
      } catch {
        return null;
      }
    }).filter(Boolean);

    // 最新SNS投稿を取得
    const snsFiles = fs.existsSync(GENERATED_DIR)
      ? fs.readdirSync(GENERATED_DIR)
          .filter((f) => f.startsWith("sns-posts-") && f.endsWith(".json"))
          .sort()
          .reverse()
          .slice(0, 3)
      : [];

    const recentSnsPosts: unknown[] = [];
    for (const f of snsFiles) {
      try {
        const content = fs.readFileSync(path.join(GENERATED_DIR, f), "utf-8");
        const posts = JSON.parse(content);
        if (Array.isArray(posts)) {
          recentSnsPosts.push(...posts.slice(0, 3));
        }
      } catch {
        // skip
      }
    }

    // ログの最新100行
    let recentLogs: string[] = [];
    const logFile = path.join(GENERATED_DIR, "automation-log.txt");
    if (fs.existsSync(logFile)) {
      const logContent = fs.readFileSync(logFile, "utf-8");
      recentLogs = logContent.split("\n").filter(Boolean).slice(-100).reverse();
    }

    return NextResponse.json({
      lastRunDate: latestDate || null,
      lastSummary: latestSummary,
      todayRun: latestDate === today,
      recentArticles,
      recentSnsPosts: recentSnsPosts.slice(0, 5),
      recentLogs: recentLogs.slice(0, 30),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "ステータス取得に失敗しました: " + String(error) },
      { status: 500 }
    );
  }
}

// POST: 自動化トリガー（Vercel環境ではGitHub Actions経由で実行）
export async function POST(request: NextRequest) {
  if (!isAdminAuthenticated(request)) return unauthorizedResponse();
  try {
    const body = await request.json().catch(() => ({})) as { step?: string };
    const step = body.step || "all";

    const validSteps = ["all", "article", "faq", "sns"];
    if (!validSteps.includes(step)) {
      return NextResponse.json({ error: "無効なステップ" }, { status: 400 });
    }

    // Vercel環境ではサーバーレス関数からスクリプト実行不可
    // GitHub Actions の手動実行（workflow_dispatch）を使用してください
    return NextResponse.json({
      message: `SEO自動化はGitHub Actionsで実行されます。GitHubリポジトリの「Actions」タブから「Weekly SEO Content Generation」を手動実行してください。`,
      step,
      githubActionsUrl: "https://github.com/2700saison-hue/saison-corp-website/actions",
      note: "毎週月曜日9時に自動実行されます",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "リクエスト処理に失敗しました: " + String(error) },
      { status: 500 }
    );
  }
}
