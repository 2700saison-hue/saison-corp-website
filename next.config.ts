import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prisma・SQLiteのネイティブモジュールをバンドルから除外（Vercel 250MB制限対策）
  serverExternalPackages: [
    "@prisma/client",
    "@prisma/adapter-better-sqlite3",
    "better-sqlite3",
  ],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "s0.wordpress.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // HTTPSリダイレクトとセキュリティヘッダー（SEO強化）
  async headers() {
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
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // 静的アセットのキャッシュ設定（Core Web Vitals改善）
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
