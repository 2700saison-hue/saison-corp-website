import { NextResponse } from "next/server";

const BASE_URL = "https://seasonsezon.co.jp";

// 主要ページの画像一覧（Google 画像検索インデックス促進）
const imageEntries = [
  {
    loc: BASE_URL,
    images: [
      { loc: `${BASE_URL}/images/logos/ogp.png`, title: "株式会社セゾン | SNS運用代行・AI導入・DX" },
      { loc: `${BASE_URL}/images/why/why1-real.jpg`, title: "大手企業との実績 | 株式会社セゾン" },
      { loc: `${BASE_URL}/images/why/why2-real.jpg`, title: "ROI重視の経営 | 株式会社セゾン" },
      { loc: `${BASE_URL}/images/why/why3-real.jpg`, title: "AI×SNS最前線 | 株式会社セゾン" },
      { loc: `${BASE_URL}/images/why/why4-real.jpg`, title: "伴走型サポート | 株式会社セゾン" },
    ],
  },
  {
    loc: `${BASE_URL}/service/sns`,
    images: [
      { loc: `${BASE_URL}/images/services/sns-drama2-v2.jpg`, title: "ドラマ型SNS動画制作・運用代行 | 株式会社セゾン" },
      { loc: `${BASE_URL}/images/sns-features/actor.jpg`, title: "プロ舞台役者出演のドラマ型SNS動画" },
      { loc: `${BASE_URL}/images/sns-features/hiring.jpg`, title: "SNS採用動画で採用費削減" },
      { loc: `${BASE_URL}/images/sns-features/roi.jpg`, title: "SNS運用ROI分析・効果測定" },
      { loc: `${BASE_URL}/images/sns-features/support.jpg`, title: "SNS運用代行 伴走サポート" },
    ],
  },
  {
    loc: `${BASE_URL}/service/ai`,
    images: [
      { loc: `${BASE_URL}/images/services/soloptilink-ai-v2.jpg`, title: "SoloptiLink AI 業務自動化システム | 株式会社セゾン" },
    ],
  },
  {
    loc: `${BASE_URL}/service/hp`,
    images: [
      { loc: `${BASE_URL}/images/services/hp.jpg`, title: "ホームページ制作 | 株式会社セゾン" },
    ],
  },
  {
    loc: `${BASE_URL}/service/pr-movie`,
    images: [
      { loc: `${BASE_URL}/images/services/pr-movie.jpg`, title: "PR動画制作 | 株式会社セゾン" },
    ],
  },
  {
    loc: `${BASE_URL}/service/line`,
    images: [
      { loc: `${BASE_URL}/images/services/line.jpg`, title: "公式LINE構築・運用代行 | 株式会社セゾン" },
    ],
  },
  {
    loc: `${BASE_URL}/service/lp`,
    images: [
      { loc: `${BASE_URL}/images/services/sns-drama.jpg`, title: "LP制作・ランディングページ制作 | 株式会社セゾン" },
    ],
  },
  {
    loc: `${BASE_URL}/service/system`,
    images: [
      { loc: `${BASE_URL}/images/services/system.jpg`, title: "システム開発・業務システム構築 | 株式会社セゾン" },
    ],
  },
  {
    loc: `${BASE_URL}/service/subsidy`,
    images: [
      { loc: `${BASE_URL}/images/services/subsidy.jpg`, title: "補助金・助成金申請支援 | 株式会社セゾン" },
    ],
  },
  {
    loc: `${BASE_URL}/service/training`,
    images: [
      { loc: `${BASE_URL}/images/services/training.jpg`, title: "SNS・AI研修・企業研修 | 株式会社セゾン" },
    ],
  },
  {
    loc: `${BASE_URL}/about`,
    images: [
      { loc: `${BASE_URL}/images/about/company.png`, title: "株式会社セゾン 会社概要" },
      { loc: `${BASE_URL}/images/about/philosophy.png`, title: "株式会社セゾン 企業理念" },
      { loc: `${BASE_URL}/images/about/team.png`, title: "株式会社セゾン チーム紹介" },
    ],
  },
  {
    loc: `${BASE_URL}/about/ceo`,
    images: [
      { loc: `${BASE_URL}/images/about/ceo.png`, title: "古田太陽 代表取締役 | 株式会社セゾン" },
      { loc: `${BASE_URL}/images/team/CEO2.jpeg`, title: "古田太陽 | 株式会社セゾン 代表取締役" },
    ],
  },
  {
    loc: `${BASE_URL}/cases`,
    images: [
      { loc: `${BASE_URL}/images/実績/atre.png`, title: "アトレ恵比寿 SNS運用代行実績 | 株式会社セゾン" },
      { loc: `${BASE_URL}/images/実績/yamazakigumi.png`, title: "山﨑組 SNS採用動画実績 フォロワー32倍 | 株式会社セゾン" },
      { loc: `${BASE_URL}/images/実績/mazasu.png`, title: "マザアス SNS運用実績 7ヶ月1万フォロワー | 株式会社セゾン" },
      { loc: `${BASE_URL}/images/実績/saizeriya.png`, title: "サイゼリヤ SNS運用実績 | 株式会社セゾン" },
      { loc: `${BASE_URL}/images/実績/misawahome.png`, title: "ミサワホーム SNS運用実績 | 株式会社セゾン" },
      { loc: `${BASE_URL}/images/実績/famliymart.png`, title: "ファミリーマート SNS運用実績 | 株式会社セゾン" },
    ],
  },
];

export async function GET() {
  const urlEntries = imageEntries.map(({ loc, images }) => {
    const imageXml = images
      .map(
        (img) => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title><![CDATA[${img.title}]]></image:title>
    </image:image>`
      )
      .join("");
    return `
  <url>
    <loc>${loc}</loc>${imageXml}
  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries.join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
