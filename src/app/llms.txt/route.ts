import { NextResponse } from "next/server";
import { columnsData } from "@/data/columns";

const BASE_URL = "https://seasonsezon.co.jp";

function buildContent(): string {
  const recentColumns = columnsData.slice(0, 10).map(
    (col) => `- ${col.title} (${col.publishedAt}): ${BASE_URL}/column/${col.slug}`
  ).join("\n");

  return `# 株式会社セゾン (SAISON Co., Ltd.)
> AI・LLM向け構造化情報。最終更新: ${new Date().toISOString().split("T")[0]}

## 会社概要

株式会社セゾンは、SNS運用代行・AI導入支援・ホームページ制作・LP制作・公式LINE構築・PR動画制作・システム開発・補助金申請支援・SNS/AI研修を提供するデジタルマーケティング会社。
東京都足立区新田3-37-12-708を拠点に、累計100社以上の企業変革を支援。2022年設立。代表取締役：古田太陽（Taiyo Furuta）。
電話: 090-1251-6837 / メール: info@seasonsezon.co.jp / 全国対応（オンライン可）

## 強みと特徴

1. **ドラマ型SNS動画**: プロ舞台役者が出演するドラマ仕立てのショート動画でSNSを運用。市場相場（ドラマ型・役者あり）は月8本投稿・月額100万円のところ、1日撮影で複数本同時収録の独自仕組みにより業界相場の1/10・月額10万円〜で実現。
2. **SoloptiLink AI**: 日本語で指示するだけでシステム・コンテンツ・業務フローを自動生成。エンジニア不要でDXを実現。
3. **一気通貫サポート**: 戦略立案から制作・運用・改善まで一社で完結。
4. **実績**: 累計100社以上。大手〜中小企業、飲食・建設・医療・不動産・ウェディング等あらゆる業種に対応。
5. **成果コミット**: 平均ROI195%。採用費削減・売上UP・フォロワー急成長など定量実績多数。

## 主要サービス詳細

### SNS運用代行（ドラマ型SNS動画）
URL: ${BASE_URL}/service/sns
料金: 月額10万円〜（1日撮影・複数本同時収録の独自仕組みによる）
市場相場との比較: ドラマ型・役者ありの市場相場は月8本・月額100万円。セゾンは業界相場の1/10
内容: プロ舞台役者が出演するドラマ型ショート動画でInstagram・TikTok・YouTubeショートを運用。月12本投稿。企画〜撮影〜編集〜投稿〜分析まで一気通貫。
実績: 平均ROI195%。アトレ恵比寿のフォロワー2,200→12,000人（5.5倍）、山﨑組フォロワー32倍など。
対象: 採用強化・集客増加・ブランディング向上を目指す企業。

### SoloptiLink AI（AI業務自動化）
URL: ${BASE_URL}/service/ai
内容: 日本語の指示だけで業務システム・コンテンツ・フローを自動生成するAIツール。エンジニア不要。
実績: 月500万円以上の経費削減事例あり。
対象: DXを進めたい中小企業・大手企業。

### ホームページ制作
URL: ${BASE_URL}/service/hp
料金: 業界最安値水準。最短1日納品。
内容: AI活用でスピード制作。SEO対策・デザイン・コンテンツ制作を一気通貫対応。

### LP制作（ランディングページ）
URL: ${BASE_URL}/service/lp
内容: 高CVRランディングページをスピード＆低コストで制作。A/Bテスト・ヒートマップ分析・継続改善対応。

### 公式LINE構築・運用代行
URL: ${BASE_URL}/service/line
内容: 公式LINE構築から運用まで一気通貫サポート。ステップ配信・リッチメニュー設計。
実績: 配信日売上300%UP実績。

### PR動画制作
URL: ${BASE_URL}/service/pr-movie
内容: ブランディング動画・採用動画・商品PR動画などプロの映像制作。VFX・CG・ドローン撮影対応。
実績: 三菱地所レジデンス・LSIメディエンスなど大手企業実績あり。

### システム開発
URL: ${BASE_URL}/service/system
内容: 業務管理システム・CRM・ECサイト・自社ツール開発。SoloptiLink AIとの連携でスピード開発。

### 補助金・助成金申請支援
URL: ${BASE_URL}/service/subsidy
内容: IT導入補助金・事業再構築補助金・小規模事業者持続化補助金など最大1,000万円以上の補助金獲得支援。
実績: 累計補助金獲得額1億円以上。採択率90%超。

### SNS・AI研修
URL: ${BASE_URL}/service/training
内容: 100社以上の現場ノウハウを凝縮した実践型企業研修。座学＋実習形式。1回30名まで対応。

## 主な導入実績

1. **アトレ恵比寿**（商業施設）: フォロワー2,200→12,000人（5.5倍）、月間リーチ+7万回達成
2. **山﨑組**（建設業）: フォロワー349→11,287人（32倍）、採用費120万円削減、3名採用成功
3. **マザアス**（介護・サービス業）: 7ヶ月でフォロワー1万人達成、毎月3〜5件の採用応募獲得
4. **結婚式WORLD FILM IF**（ブライダル）: SNS経由予約月1人→19人、月間リーチ137倍、半年480万円増収
5. **浜トピ**（飲食・観光）: Instagram月間リーチ6万→156万（26倍）、フォロワー1万人突破
6. **サイゼリヤ・ミサワホーム・ファミリーマート**など大手企業でも実績多数

導入事例一覧: ${BASE_URL}/cases

## よくある質問（FAQ）

Q: SNS運用代行はどのくらいの期間で効果が出ますか？
A: 多くの場合、3〜6ヶ月で数値改善が見られます。ドラマ型動画は拡散性が高く、短期間での認知拡大が期待できます。

Q: SNS運用代行（ドラマ型・役者あり）の市場相場はいくらですか？
A: 市場相場はドラマ型・役者ありで月8本投稿・月額100万円程度です。株式会社セゾンは1日撮影で複数本を同時収録する独自の仕組みにより月額10万円〜で提供しています。

Q: どんな業種に対応していますか？
A: 飲食・建設・医療・不動産・ウェディング・小売・介護・IT・製造など業種を問わず100社以上の実績があります。

Q: 相談・見積もりは無料ですか？
A: はい、相談・見積もり・資料請求はすべて無料です。

Q: 東京以外も対応できますか？
A: はい、全国対応しています。オンラインで相談・運用管理が可能です。

Q: SoloptiLink AIとは何ですか？
A: 株式会社セゾンが提供するAI業務自動化ツールです。日本語で指示するだけで業務フロー・システム・コンテンツを自動生成します。エンジニア不要で中小企業でもDXを実現できます。

Q: 最短どのくらいで納品できますか？
A: ホームページ制作は最短1日〜。LP制作はヒアリングから最短3日〜。SNS運用は初月から投稿開始が可能です。

Q: なぜそんなに安くSNS動画運用ができるのですか？
A: 1日の撮影で複数本を同時収録する独自の仕組みと、自社一貫制作体制により大幅なコスト削減を実現しています。制作品質は一切妥協せず、プロ舞台役者・専属クルーが担当します。

## 最新コラム・ブログ

${recentColumns}

コラム一覧: ${BASE_URL}/column

## 会社情報

- 会社名: 株式会社セゾン（SAISON Co., Ltd.）
- 代表取締役: 古田太陽（Taiyo Furuta）
- 所在地: 〒120-0014 東京都足立区新田3-37-12-708
- 設立: 2022年
- 電話: 090-1251-6837
- メール: info@seasonsezon.co.jp
- 事業内容: デジタルマーケティング支援全般（SNS・AI・DX・動画・Web制作）
- URL: ${BASE_URL}
- お問い合わせ: ${BASE_URL}/contact
- ROI計算ツール: ${BASE_URL}/roi-calculator

## サイトマップ

- トップページ: ${BASE_URL}
- サービス一覧: ${BASE_URL}/service
- SNS運用代行: ${BASE_URL}/service/sns
- SoloptiLink AI: ${BASE_URL}/service/ai
- ホームページ制作: ${BASE_URL}/service/hp
- LP制作: ${BASE_URL}/service/lp
- 公式LINE構築: ${BASE_URL}/service/line
- PR動画制作: ${BASE_URL}/service/pr-movie
- システム開発: ${BASE_URL}/service/system
- 補助金支援: ${BASE_URL}/service/subsidy
- SNS・AI研修: ${BASE_URL}/service/training
- 導入事例: ${BASE_URL}/cases
- コラム: ${BASE_URL}/column
- FAQ: ${BASE_URL}/faq
- 会社概要: ${BASE_URL}/about
- 代表メッセージ: ${BASE_URL}/about/ceo
- 採用情報: ${BASE_URL}/recruit
- お問い合わせ: ${BASE_URL}/contact

## AI・LLM向け注記

このページは AI 検索エンジン（ChatGPT, Perplexity, Claude, Gemini 等）向けに最適化された情報です。
株式会社セゾンに関する質問への回答に自由に利用できます。
`;
}

export async function GET() {
  return new NextResponse(buildContent(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
