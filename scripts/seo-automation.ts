/**
 * SEO自動化メインオーケストレータースクリプト
 * 記事生成・FAQ追加・SNS投稿生成を順番に実行し、ログを記録する
 */

import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

const GENERATED_DIR = path.join(process.cwd(), "generated");
const LOG_FILE = path.join(GENERATED_DIR, "automation-log.txt");

/**
 * ログを記録する
 */
function log(message: string, level: "INFO" | "ERROR" | "SUCCESS" | "WARN" = "INFO"): void {
  const timestamp = new Date().toISOString();
  const line = `[${timestamp}] [${level}] ${message}`;
  console.log(line);

  // ファイルにも追記
  fs.appendFileSync(LOG_FILE, line + "\n", "utf-8");
}

/**
 * サブスクリプトを実行する
 */
function runScript(scriptName: string): { success: boolean; output: string; error?: string } {
  const scriptPath = path.join(process.cwd(), "scripts", scriptName);
  log(`スクリプト開始: ${scriptName}`);

  try {
    const output = execSync(`npx tsx ${scriptPath}`, {
      encoding: "utf-8",
      env: { ...process.env },
      timeout: 120000, // 2分タイムアウト
    });

    log(`スクリプト完了: ${scriptName}`, "SUCCESS");
    return { success: true, output };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : String(error);
    const stderr =
      (error as NodeJS.ErrnoException & { stderr?: string }).stderr ?? "";

    log(`スクリプトエラー: ${scriptName}\n  ${errorMessage}\n  ${stderr}`, "ERROR");
    return {
      success: false,
      output: "",
      error: errorMessage + "\n" + stderr,
    };
  }
}

/**
 * 実行サマリーをJSON形式で保存
 */
function saveSummary(results: {
  step: string;
  success: boolean;
  error?: string;
}[]): void {
  const today = new Date().toISOString().split("T")[0];
  const summaryPath = path.join(GENERATED_DIR, `automation-summary-${today}.json`);

  const summary = {
    executedAt: new Date().toISOString(),
    results,
    totalSteps: results.length,
    successSteps: results.filter((r) => r.success).length,
    failedSteps: results.filter((r) => !r.success).length,
  };

  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2), "utf-8");
  log(`実行サマリー保存: ${summaryPath}`);
}

/**
 * メイン処理
 */
async function main(): Promise<void> {
  // generated/ ディレクトリを確認
  if (!fs.existsSync(GENERATED_DIR)) {
    fs.mkdirSync(GENERATED_DIR, { recursive: true });
  }

  const startTime = new Date();
  log("=== SEO自動化開始 ===");
  log(`実行日時: ${startTime.toISOString()}`);
  log(`作業ディレクトリ: ${process.cwd()}`);

  // 環境変数チェック
  if (!process.env.ANTHROPIC_API_KEY) {
    log("ANTHROPIC_API_KEY が設定されていません。処理を中止します。", "ERROR");
    process.exit(1);
  }
  log("ANTHROPIC_API_KEY: 確認済み");

  const results: { step: string; success: boolean; error?: string }[] = [];

  // ===== Step 1: SEOコンテンツ（コラム記事）生成 =====
  log("\n--- Step 1: SEOコラム記事生成 ---");
  const step1 = runScript("generate-seo-content.ts");
  results.push({
    step: "generate-seo-content",
    success: step1.success,
    error: step1.error,
  });

  if (!step1.success) {
    log("Step 1 失敗。Step 2 は続行します。", "WARN");
  }

  // ===== Step 2: FAQ生成 =====
  log("\n--- Step 2: FAQ追加 ---");
  const step2 = runScript("generate-faq.ts");
  results.push({
    step: "generate-faq",
    success: step2.success,
    error: step2.error,
  });

  if (!step2.success) {
    log("Step 2 失敗。Step 3 は続行します。", "WARN");
  }

  // ===== Step 3: SNS投稿テキスト生成 =====
  log("\n--- Step 3: SNS投稿テキスト生成 ---");
  const step3 = runScript("generate-sns-post.ts");
  results.push({
    step: "generate-sns-post",
    success: step3.success,
    error: step3.error,
  });

  // ===== 結果サマリー =====
  const endTime = new Date();
  const elapsed = ((endTime.getTime() - startTime.getTime()) / 1000).toFixed(1);
  const successCount = results.filter((r) => r.success).length;
  const totalCount = results.length;

  log(`\n=== SEO自動化完了 ===`);
  log(`実行時間: ${elapsed}秒`);
  log(`成功: ${successCount}/${totalCount} ステップ`);

  results.forEach((r) => {
    const status = r.success ? "✓" : "✗";
    log(`  ${status} ${r.step}`);
  });

  // サマリーを保存
  saveSummary(results);

  // 1つでも失敗があれば終了コード1で終了
  if (successCount < totalCount) {
    log("一部ステップが失敗しました", "WARN");
    process.exit(1);
  }

  log("すべてのステップが正常に完了しました", "SUCCESS");
}

main().catch((err) => {
  const timestamp = new Date().toISOString();
  const errorLine = `[${timestamp}] [ERROR] 致命的エラー: ${err instanceof Error ? err.message : String(err)}\n`;
  console.error(errorLine);
  fs.appendFileSync(LOG_FILE, errorLine, "utf-8");
  process.exit(1);
});
