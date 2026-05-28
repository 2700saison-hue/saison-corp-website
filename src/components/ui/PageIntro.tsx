"use client";

import { useEffect, useState } from "react";

const DECADES = [
  { image: "/images/timeline/1970.jpeg", grayscale: 90, sepia: 50, brightness: 0.80 },
  { image: "/images/timeline/1980.jpg",  grayscale: 70, sepia: 30, brightness: 0.85 },
  { image: "/images/timeline/1990.jpeg", grayscale: 45, sepia: 15, brightness: 0.88 },
  { image: "/images/timeline/2000.png",  grayscale: 25, sepia: 5,  brightness: 0.90 },
  { image: "/images/timeline/2010.png",  grayscale: 10, sepia: 0,  brightness: 0.92 },
  { image: "/images/timeline/now.png",   grayscale: 0,  sepia: 0,  brightness: 1.00 },
];

const SHOW_MS = 400;
const FADE_MS = 800;
export const EXIT_MS = 1200; // export して HeroSection と共有

const getFilter = (d: typeof DECADES[0]) =>
  `grayscale(${d.grayscale}%) sepia(${d.sepia}%) brightness(${d.brightness})`;

interface PageIntroProps {
  onExitStart?: () => void;
}

export default function PageIntro({ onExitStart }: PageIntroProps) {
  const [idx,       setIdx]       = useState(0);
  const [nextIdx,   setNextIdx]   = useState<number | null>(null);
  const [crossfade, setCrossfade] = useState(false);
  const [exiting,   setExiting]   = useState(false);
  const [done,      setDone]      = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let t = 250;

    for (let i = 0; i < DECADES.length - 1; i++) {
      const j = i + 1;
      timers.push(setTimeout(() => { setNextIdx(j); }, t + SHOW_MS));
      timers.push(setTimeout(() => { setCrossfade(true); }, t + SHOW_MS + 50));
      timers.push(setTimeout(() => {
        setIdx(j);
        setCrossfade(false);
        setNextIdx(null);
      }, t + SHOW_MS + FADE_MS + 60));
      t += SHOW_MS + FADE_MS + 60;
    }

    // フェードアウト開始 → onExitStart を同時に呼ぶ
    timers.push(setTimeout(() => {
      setExiting(true);
      onExitStart?.();
    }, t + SHOW_MS));

    timers.push(setTimeout(() => setDone(true), t + SHOW_MS + EXIT_MS));

    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (done) return null;

  const current = DECADES[idx];
  const next    = nextIdx !== null ? DECADES[nextIdx] : null;

  return (
    <div
      style={{
        position:       "fixed",
        inset:          0,
        zIndex:         9999,
        overflow:       "hidden",
        userSelect:     "none",
        // フェードアウト時はポインターを貫通させてページ操作を可能に
        pointerEvents:  exiting ? "none" : "all",
        backgroundColor: "#000",
        // ブラックオーバーレイではなく、コンテナ全体を透明化して下のヒーローを見せる
        opacity:        exiting ? 0 : 1,
        transition:     exiting ? `opacity ${EXIT_MS}ms ease` : "none",
      }}
    >
      {/* 現在の年代の画像 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:    `url('${current.image}')`,
          backgroundSize:     "cover",
          backgroundPosition: "center",
          filter:             getFilter(current),
          transition:         `filter ${FADE_MS}ms ease`,
        }}
      />

      {/* 次の年代の画像（クロスフェードイン） */}
      {next && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:    `url('${next.image}')`,
            backgroundSize:     "cover",
            backgroundPosition: "center",
            filter:             getFilter(next),
            opacity:            crossfade ? 1 : 0,
            transition:         `opacity ${FADE_MS}ms ease`,
          }}
        />
      )}

      {/* 暗さオーバーレイ */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.18)" }} />

      {/* ヴィネット */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* フィルムグレイン（古い年代のみ） */}
      {idx < 3 && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E")`,
            opacity:      Math.max(0, 0.25 - idx * 0.07),
            mixBlendMode: "overlay" as const,
          }}
        />
      )}

      {/* スキャンライン（1970s・1980s） */}
      {idx < 2 && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px)",
            opacity: 0.5,
          }}
        />
      )}

      {/* ボトムロゴ */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center" style={{ opacity: 0.3 }}>
        <span style={{ fontSize: 9, color: "#fff", letterSpacing: "0.45em", textTransform: "uppercase" }}>
          SAISON Co., Ltd.
        </span>
      </div>
    </div>
  );
}
