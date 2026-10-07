This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


<!-- 以下は保守性チェックにより追記された節です (既存の記載は変更していません) -->

## 運用

- 日次: 画面の一覧が最新の内容で表示されることを確認します。
- 週次: データのバックアップ (データベースの控え) を取得します。
- 月次: 使われていない利用者アカウントを棚卸しします。
- 設定値を変更したときは、アプリを再起動して反映を確認します。

## 障害時の一次対応

1. 画面が開かないときは、アプリを再起動します (`npm run dev`)。
2. それでも復旧しないときは、起動時に出ているメッセージ (ログ) を保存します。
3. データベースに接続できないメッセージが出ている場合は、設定値 (.env) の接続先を確認します。
4. 復旧しない場合は、保存したメッセージを添えて保守担当へ連絡します (連絡先は docs/HANDOFF.md を参照)。


<!-- 以下は保守性チェックにより追記された節です (既存の記載は変更していません) -->

## 運用

- 日次: 画面の一覧が最新の内容で表示されることを確認します。
- 週次: データのバックアップ (データベースの控え) を取得します。
- 月次: 使われていない利用者アカウントを棚卸しします。
- 設定値を変更したときは、アプリを再起動して反映を確認します。

## 障害時の一次対応

1. 画面が開かないときは、アプリを再起動します (`npm run dev`)。
2. それでも復旧しないときは、起動時に出ているメッセージ (ログ) を保存します。
3. データベースに接続できないメッセージが出ている場合は、設定値 (.env) の接続先を確認します。
4. 復旧しない場合は、保存したメッセージを添えて保守担当へ連絡します (連絡先は docs/HANDOFF.md を参照)。

## 🎓 はじめての方へ (オンボーディングガイド)

このシステムには初心者向けガイドが組み込まれています:

- **WelcomeBanner**: ダッシュボード上部に表示される3ステップガイド
- **QuickStartCard**: 「次にやること」を提示するカード
- **HelpTooltip**: 各項目の脇にある「？」マーク (クリックで説明)
- **ShowGuideButton**: どの画面からでもガイドを呼び戻すボタン

### ガイドを閉じたあと、もう一度見たいとき

ガイドの右上の「✕」を押すと非表示になりますが、**同じ場所に「💡 使い方ガイドを表示」ボタンが残ります**。
そのボタンを押すと、いつでもガイドが元どおり表示されます。特別な操作は不要です。

ダッシュボード以外の画面からも呼び戻せるようにしたい場合は、ヘッダーや設定画面に
`<ShowGuideButton />` を置いてください (押すとガイドのある画面へ移動して再表示します)。
