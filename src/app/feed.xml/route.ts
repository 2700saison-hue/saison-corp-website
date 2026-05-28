import { NextResponse } from "next/server";
import { columnsData } from "@/data/columns";

const BASE_URL = "https://seasonsezon.co.jp";

export async function GET() {
  const items = columnsData
    .slice(0, 20)
    .map((col) => {
      const pubDate = new Date(col.publishedAt).toUTCString();
      return `
    <item>
      <title><![CDATA[${col.title}]]></title>
      <link>${BASE_URL}/column/${col.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/column/${col.slug}</guid>
      <description><![CDATA[${col.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${col.category}]]></category>
      ${col.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join("\n      ")}
    </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>株式会社セゾン コラム</title>
    <link>${BASE_URL}/column</link>
    <description>SNS運用・AI・DX・補助金活用に関するノウハウコラム。100社以上の支援実績から得たノウハウを解説。</description>
    <language>ja</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${BASE_URL}/images/services/sns-drama2.jpg</url>
      <title>株式会社セゾン コラム</title>
      <link>${BASE_URL}/column</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
