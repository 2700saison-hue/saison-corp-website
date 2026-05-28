"use client";

import { useState, CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 100,       suffix: "社以上", label: "累計導入実績",       useCommas: false, finalDisplay: undefined    },
  { value: 195,       suffix: "%",     label: "平均ROI",            useCommas: false, finalDisplay: undefined    },
  { value: 100000000, suffix: "",      label: "SNS累計再生数",      useCommas: true,  finalDisplay: "1億回以上"  },
  { value: 200000000, suffix: "",      label: "SNS売上最大達成実績", useCommas: true,  finalDisplay: "2億円"     },
];

export default function HeroSection() {
  const [heroReady, setHeroReady] = useState(false);

  // 各要素のフェードイン・スライドアップ用スタイル生成
  const rise = (delay: number): CSSProperties => ({
    opacity:    heroReady ? 1 : 0,
    transform:  heroReady ? "translateY(0px)" : "translateY(32px)",
    transition: `opacity 0.9s ease ${delay}ms, transform 0.9s ease ${delay}ms`,
  });

  return (
    <>
      <PageIntro onExitStart={() => setHeroReady(true)} />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(248,248,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,248,248,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Red glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#CC2222] opacity-[0.07] blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#CC2222] opacity-[0.04] blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center py-40">

          {/* Eyebrow */}
          <p
            className="text-[#CC2222] text-xs font-bold tracking-[0.5em] uppercase mb-10"
            style={rise(0)}
          >
            SAISON — AI &amp; SNS TRANSFORMATION
          </p>

          {/* H1 — 1行ずつ順に浮かび上がる */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.15] mb-10"
            style={{ fontFamily: "Noto Serif JP, serif" }}
          >
            <span className="block text-[#F8F8F8]" style={rise(150)}>時代に取り残された</span>
            <span className="block text-[#F8F8F8]" style={rise(300)}>日本中の企業を</span>
            <span className="block text-[#CC2222]"  style={rise(480)}>変革し、進化させる</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mb-16 leading-relaxed"
            style={rise(650)}
          >
            AI・SNS・DXを軸に、累計100社以上の企業変革を牽引。
            <br className="hidden sm:block" />
            数値にこだわり、伴走型で確かな結果を届けます。
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20"
            style={rise(820)}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#CC2222] hover:bg-[#E53333] text-white font-bold px-14 py-6 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(204,34,34,0.5)] text-lg tracking-wide hover:scale-105"
            >
              無料でご相談する
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/cases"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/30 hover:border-[#CC2222] text-[#F8F8F8] hover:text-[#CC2222] font-bold px-14 py-6 rounded-full transition-all duration-300 text-lg tracking-wide hover:bg-[#CC2222]/5"
            >
              導入事例を見る
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto"
            style={rise(990)}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 backdrop-blur-sm"
              >
                <p
                  className="text-2xl sm:text-3xl font-bold text-[#F8F8F8] mb-1 whitespace-nowrap"
                  style={{ fontFamily: "Noto Serif JP, serif" }}
                >
                  {/* heroReady後にマウントすることで、カウンターが確実に起動する */}
                  <AnimatedCounter
                    end={s.value}
                    suffix={s.suffix}
                    delay={300}
                    useCommas={s.useCommas}
                    finalDisplay={s.finalDisplay}
                    trigger={heroReady}
                  />
                </p>
                <p className="text-white/40 text-xs tracking-wider whitespace-nowrap">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div
            className="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/30 text-xs"
            style={rise(1150)}
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#CC2222]/60" />
              初回相談・お見積り完全無料
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#CC2222]/60" />
              24時間以内にご返信
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-14 bg-white animate-pulse" />
        </div>
      </section>
    </>
  );
}
