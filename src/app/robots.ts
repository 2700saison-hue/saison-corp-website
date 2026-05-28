import { MetadataRoute } from "next";

const BASE_URL = "https://seasonsezon.co.jp";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
    ],
    sitemap: [`${BASE_URL}/sitemap.xml`, `${BASE_URL}/feed.xml`],
    host: BASE_URL,
  };
}
