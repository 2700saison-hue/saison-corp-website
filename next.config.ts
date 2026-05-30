import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prisma・SQLiteのネイティブモジュールをバンドルから除外（Vercel 250MB制限対策）
  serverExternalPackages: [
    "@prisma/client",
    "@prisma/adapter-better-sqlite3",
    "better-sqlite3",
  ],
  // 不要ファイルを除外してバンドルサイズを削減（Vercel 250MB制限対策）
  outputFileTracingExcludes: {
    "*": [
      // Prisma CLI（ビルド時のみ必要、ランタイム不要）
      "node_modules/prisma/**",
      "node_modules/@prisma/engines/**",
      // Macインストール時に追加されたdarwin用エンジン
      "node_modules/@prisma/client/node_modules/@prisma/engines/**",
      // その他の開発ツール
      "node_modules/@esbuild/**",
      "node_modules/webpack/**",
      "node_modules/rollup/**",
      "node_modules/tsx/**",
      "node_modules/typescript/**",
      "node_modules/ts-node/**",
    ],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "s0.wordpress.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // セキュリティヘッダー
  async headers() {
    // Content-Security-Policy
    const csp = [
      "default-src 'self'",
      // スクリプト: 自サイト・GA・GTM・JSON-LDインライン
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
      // スタイル: 自サイト・Tailwindインライン・Googleフォント
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // フォント
      "font-src 'self' https://fonts.gstatic.com",
      // 画像: 自サイト・YouTube・WordPress・GA
      "img-src 'self' data: blob: https://img.youtube.com https://s0.wordpress.com https://*.googletagmanager.com https://www.google-analytics.com",
      // iframe: YouTubeのみ
      "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
      // 通信先: 自サイト・GA
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net",
      // オブジェクト埋め込み禁止（Flash等）
      "object-src 'none'",
      // baseタグ制限
      "base-uri 'self'",
      // フォーム送信先制限
      "form-action 'self'",
      // HTTPSアップグレード
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          // クリックジャッキング防止
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // コンテンツタイプスニッフィング防止
          { key: "X-Content-Type-Options", value: "nosniff" },
          // リファラーポリシー
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // 権限ポリシー
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
          // XSS対策CSP
          { key: "Content-Security-Policy", value: csp },
          // HTTPS強制（HSTS）: 1年間・サブドメイン含む
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          // IEのXSSフィルター（後方互換）
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Adobe等クロスドメインポリシー禁止
          { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
        ],
      },
      {
        // 静的アセットのキャッシュ設定（Core Web Vitals改善）
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // 管理画面はインデックス禁止
        source: "/admin(.*)",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          { key: "Cache-Control", value: "no-store" },
        ],
      },
    ];
  },
};

export default nextConfig;
