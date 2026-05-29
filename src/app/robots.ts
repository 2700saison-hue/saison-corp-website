import { MetadataRoute } from "next";

const BASE_URL = "https://seasonsezon.co.jp";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 通常クローラー
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      // AI検索エンジン・LLMクローラーを明示的に許可
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "YouBot",
        allow: "/",
      },
      {
        userAgent: "Applebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: [`${BASE_URL}/sitemap.xml`, `${BASE_URL}/feed.xml`],
    host: BASE_URL,
  };
}
