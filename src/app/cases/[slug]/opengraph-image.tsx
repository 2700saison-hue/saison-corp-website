import { ImageResponse } from "next/og";
import { casesData } from "@/data/cases";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const c = casesData.find((item) => item.slug === slug);
  const clientName = c?.clientName ?? "導入事例";
  const industry = c?.industry ?? "";
  const roi = c?.roi ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* 上部：ロゴエリア */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#CC2222",
            }}
          />
          <span style={{ color: "#F8F8F8", fontSize: 20, fontWeight: 700, letterSpacing: 2 }}>
            株式会社セゾン
          </span>
          <span style={{ color: "#666", fontSize: 16 }}>導入事例</span>
        </div>

        {/* 中央：クライアント名 + 実績 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            gap: 20,
          }}
        >
          {industry && (
            <div
              style={{
                color: "#CC2222",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              {industry}
            </div>
          )}
          <div
            style={{
              color: "#F8F8F8",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            {clientName}
          </div>
          {roi && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginTop: 8,
              }}
            >
              <div
                style={{
                  padding: "12px 28px",
                  background: "rgba(204,34,34,0.15)",
                  border: "2px solid rgba(204,34,34,0.6)",
                  borderRadius: 8,
                  color: "#CC2222",
                  fontSize: 28,
                  fontWeight: 700,
                }}
              >
                {roi}
              </div>
              <span style={{ color: "#888", fontSize: 20 }}>を実現</span>
            </div>
          )}
        </div>

        {/* 下部 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 24,
          }}
        >
          <span style={{ color: "#666", fontSize: 18 }}>seasonsezon.co.jp/cases</span>
          <span style={{ color: "#CC2222", fontSize: 16, fontWeight: 700 }}>
            SNS × AI × DX
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
