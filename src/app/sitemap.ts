import { MetadataRoute } from "next";
import { casesData } from "@/data/cases";
import { columnsData } from "@/data/columns";

const BASE_URL = "https://seasonsezon.co.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 導入事例ページ（動的生成）
  const caseUrls: MetadataRoute.Sitemap = casesData.map((c) => ({
    url: `${BASE_URL}/cases/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // コラム記事ページ（動的生成）
  const columnUrls: MetadataRoute.Sitemap = columnsData.map((c) => ({
    url: `${BASE_URL}/column/${c.slug}`,
    lastModified: new Date(c.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    // トップページ
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // サービス
    {
      url: `${BASE_URL}/service`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/service/ai`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/service/sns`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/service/hp`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/service/lp`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/service/line`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/service/pr-movie`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/service/system`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/service/subsidy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/service/training`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // 導入事例
    {
      url: `${BASE_URL}/cases`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...caseUrls,
    // コラム
    {
      url: `${BASE_URL}/column`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...columnUrls,
    // FAQ
    {
      url: `${BASE_URL}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // 会社情報
    {
      url: `${BASE_URL}/about/company`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about/ceo`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about/philosophy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/about/team`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    // その他
    {
      url: `${BASE_URL}/news`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/recruit`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/roi-calculator`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];
}
