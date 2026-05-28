import { NextRequest, NextResponse } from "next/server";
import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

const GENERATED_DIR = path.join(process.cwd(), "generated");

// GET: 自動化ステータスと最新ログを返す
export async function GET() {
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

// POST: 自動化を手動トリガー
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({})) as { step?: string };
    const step = body.step || "all"; // "all" | "article" | "faq" | "sns"

    const scriptMap: Record<string, string> = {
      all: "scripts/seo-automation.ts",
      article: "scripts/generate-seo-content.ts",
      faq: "scripts/generate-faq.ts",
      sns: "scripts/generate-sns-post.ts",
    };

    const scriptPath = scriptMap[step];
    if (!scriptPath) {
      return NextResponse.json({ error: "無効なステップ" }, { status: 400 });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: "ANTHROPIC_API_KEY が設定されていません" },
        { status: 500 }
      );
    }

    // バックグラウンドで実行（レスポンスを即座に返す）
    const fullPath = path.join(process.cwd(), scriptPath);

    // 非同期実行 (レスポンスを先に返してから実行)
    setImmediate(() => {
      try {
        execSync(`npx tsx ${fullPath}`, {
          encoding: "utf-8",
          env: { ...process.env },
          timeout: 300000, // 5分
          cwd: process.cwd(),
        });
      } catch (err) {
        console.error("SEO自動化エラー:", err);
      }
    });

    return NextResponse.json({
      message: `${step === "all" ? "全ステップ" : step}の実行を開始しました。完了まで数分かかります。`,
      step,
      startedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "実行開始に失敗しました: " + String(error) },
      { status: 500 }
    );
  }
}
