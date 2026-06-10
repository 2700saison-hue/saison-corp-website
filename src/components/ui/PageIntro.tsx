"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export const EXIT_MS = 700;

interface PageIntroProps {
  onExitStart?: () => void;
}

export default function PageIntro({ onExitStart }: PageIntroProps) {
  const [logoVisible, setLogoVisible] = useState(false);
  const [exiting,     setExiting]     = useState(false);
  const [done,        setDone]        = useState(false);

  useEffect(() => {
    // 100ms後にロゴをフェードイン
    const t1 = setTimeout(() => setLogoVisible(true), 100);
    // 900ms後にフェードアウト開始
    const t2 = setTimeout(() => {
      setExiting(true);
      onExitStart?.();
    }, 900);
    // フェードアウト完了後にアンマウント
    const t3 = setTimeout(() => setDone(true), 900 + EXIT_MS);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (done) return null;

  return (
    <div
      style={{
        position:       "fixed",
        inset:          0,
        zIndex:         9999,
        backgroundColor: "#080808",
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        pointerEvents:  exiting ? "none" : "all",
        opacity:        exiting ? 0 : 1,
        transition:     exiting ? `opacity ${EXIT_MS}ms ease` : "none",
      }}
    >
      {/* ロゴ */}
      <div
        style={{
          opacity:    logoVisible ? 1 : 0,
          transform:  logoVisible ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 500ms ease, transform 500ms ease",
        }}
      >
        <Image
          src="/images/logos/logo-picaai.png"
          alt="株式会社セゾン"
          width={120}
          height={45}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* 赤いアクセントライン */}
      <div
        style={{
          marginTop:  14,
          width:      24,
          height:     1,
          background: "#CC2222",
          opacity:    logoVisible ? 1 : 0,
          transition: "opacity 500ms ease 200ms",
        }}
      />
    </div>
  );
}
