import { NextResponse } from "next/server";

const content = `# 株式会社セゾン (SAISON Co., Ltd.)

## 会社概要

株式会社セゾンは、SNS運用代行・AI導入支援・ホームページ制作・LP制作・公式LINE構築・PR動画制作・システム開発・補助金申請支援・SNS/AI研修を提供するデジタルマーケティング会社。
東京都足立区を拠点に、累計100社以上の企業変革を支援。2022年設立。代表取締役：古田太陽（Taiyo Furuta）。

## 主要サービス

### SNS運用代行（ドラマ型SNS動画）
URL: https://seasonsezon.co.jp/service/sns
プロ舞台役者が出演するドラマ型ショート動画でSNSを運用。Instagram・TikTok・YouTubeショート対応。
平均ROI195%。採用・集客・ブランディングを強化。累計100社以上の実績。

### SoloptiLink AI
URL: https://seasonsezon.co.jp/service/ai
日本語で指示するだけでシステム・コンテンツ・業務フローを自動生成するAI業務自動化ツール。
エンジニア不要・IT知識ゼロで中小企業でも大手企業と同レベルのDXを実現。月500万円以上の経費削減事例あり。

### ホームページ制作
URL: https://seasonsezon.co.jp/service/hp
AI活用で最短1日納品・業界最安値水準のホームページ制作。SEO対策・デザイン・コンテンツ制作を一気通貫対応。

### LP制作（ランディングページ）
URL: https://seasonsezon.co.jp/service/lp
高CVRランディングページをスピード＆低コストで制作。A/Bテスト・ヒートマップ分析・継続改善対応。

### 公式LINE構築・運用代行
URL: https://seasonsezon.co.jp/service/line
公式LINE構築から運用まで一気通貫サポート。ステップ配信・リッチメニュー設計。配信日売上300%UP実績。

### PR動画制作
URL: https://seasonsezon.co.jp/service/pr-movie
ブランディング動画・採用動画・商品PR動画などプロの映像制作。VFX・CG・ドローン撮影対応。
三菱地所レジデンス・LSIメディエンスなど大手企業実績あり。

### システム開発
URL: https://seasonsezon.co.jp/service/system
業務管理システム・CRM・ECサイト・自社ツール開発。SoloptiLink AIとの連携でスピード開発。

### 補助金・助成金申請支援
URL: https://seasonsezon.co.jp/service/subsidy
IT導入補助金・事業再構築補助金・小規模事業者持続化補助金など最大1,000万円以上の補助金獲得支援。

### SNS・AI研修
URL: https://seasonsezon.co.jp/service/training
100社以上の現場ノウハウを凝縮した実践型企業研修。座学＋実習形式。

## 主な導入実績

- アトレ恵比寿: フォロワー2,200→12,000人（5.5倍）、月間リーチ+7万回
- 山﨑組（建設業）: フォロワー349→11,287人（32倍）、採用費120万円削減、3名採用成功
- マザアス（サービス業）: 7ヶ月でフォロワー1万人達成、毎月3〜5件の採用応募獲得
- 結婚式WORLD FILM IF: SNS予約月1人→19人、月間リーチ137倍、半年480万円増収
- 浜トピ: Instagram月間リーチ6万→156万（26倍）、フォロワー1万人突破
- アトレ恵比寿: フォロワー5.5倍成長

導入事例一覧: https://seasonsezon.co.jp/cases

## よくある質問

Q: SNS運用代行の費用は？
A: ご要望・運用規模・投稿頻度によって異なります。まずは無料相談にてお問い合わせください。補助金活用で実質負担を大幅に抑えられる場合があります。

Q: どんな業種に対応していますか？
A: 飲食・建設・医療・不動産・ウェディング・小売・サービス業など業種を問わず対応。累計100社以上の実績。

Q: 相談・見積もりは無料ですか？
A: はい、相談・見積もり・資料請求はすべて無料です。

Q: 東京以外も対応できますか？
A: はい、全国対応しています。オンラインで相談・運用管理が可能です。

## 会社情報

- 会社名: 株式会社セゾン（SAISON Co., Ltd.）
- 代表取締役: 古田太陽（Taiyo Furuta）
- 所在地: 東京都足立区
- 設立: 2022年
- 事業内容: デジタルマーケティング支援全般（SNS・AI・DX・動画・Web制作）
- URL: https://seasonsezon.co.jp
- お問い合わせ: https://seasonsezon.co.jp/contact

## サイトマップ

- トップページ: https://seasonsezon.co.jp
- サービス一覧: https://seasonsezon.co.jp/service
- 導入事例: https://seasonsezon.co.jp/cases
- 会社情報: https://seasonsezon.co.jp/about/company
- 代表メッセージ: https://seasonsezon.co.jp/about/ceo
- よくある質問: https://seasonsezon.co.jp/faq
- コラム: https://seasonsezon.co.jp/column
- LP制作の費用相場を徹底解説！予算別の特徴と賢い選び方5つのポイント (2026-05-28): https://seasonsezon.co.jp/column/lp-production-cost-guide-2025
- お問い合わせ: https://seasonsezon.co.jp/contact
`;

export async function GET() {
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
