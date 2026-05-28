// Google Analytics 4 (GA4) コンポーネント + コンバージョントラッキングユーティリティ
// デプロイ後に Vercel 環境変数 NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX を設定してください

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// GA4イベントを送信するユーティリティ関数（グローバル）
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[];
  }
}

// コンバージョンイベント送信
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

// お問い合わせ送信コンバージョン
export function trackContactSubmit(service?: string) {
  trackEvent("generate_lead", {
    event_category: "contact",
    event_label: service ?? "general",
    value: 1,
  });
}

// 電話番号クリック
export function trackPhoneClick() {
  trackEvent("phone_click", {
    event_category: "contact",
    event_label: "tel_click",
  });
}

// CTAボタンクリック
export function trackCTAClick(label: string) {
  trackEvent("cta_click", {
    event_category: "engagement",
    event_label: label,
  });
}

export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true,
            });
          `,
        }}
      />
    </>
  );
}
