import { ImageResponse } from "next/og";
import { columnsData } from "@/data/columns";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const col = columnsData.find((c) => c.slug === slug);
  const title = col?.title ?? "コラム";
  const category = col?.category ?? "sns";

  const categoryColors: Record<string, string> = {
    sns: "#CC2222",
    ai: "#C9A84C",
    marketing: "#5B7FA6",
    subsidy: "#4CAF50",
    case: "#9C27B0",
  };
  const accent = categoryColors[category] ?? "#CC2222";

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
              background: accent,
            }}
          />
          <span style={{ color: "#F8F8F8", fontSize: 20, fontWeight: 700, letterSpacing: 2 }}>
            株式会社セゾン
          </span>
          <span style={{ color: "#666", fontSize: 16 }}>コラム</span>
        </div>

        {/* 中央：タイトル */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: accent,
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            COLUMN
          </div>
          <div
            style={{
              color: "#F8F8F8",
              fontSize: title.length > 30 ? 40 : 52,
              fontWeight: 700,
              lineHeight: 1.5,
              maxWidth: 960,
            }}
          >
            {title}
          </div>
        </div>

        {/* 下部：URL + 区切り線 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 24,
          }}
        >
          <span style={{ color: "#666", fontSize: 18 }}>seasonsezon.co.jp</span>
          <div
            style={{
              padding: "8px 20px",
              background: accent,
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              borderRadius: 4,
            }}
          >
            SNS × AI × DX
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
