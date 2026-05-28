"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  delay?: number;
  useCommas?: boolean;
  finalDisplay?: string;
  /** これを渡すと useInView の代わりに直接トリガーできる（HeroSection 用） */
  trigger?: boolean;
}

export default function AnimatedCounter({
  end,
  duration = 1800,
  suffix = "",
  prefix = "",
  decimals = 0,
  delay = 0,
  useCommas = false,
  finalDisplay,
  trigger,
}: AnimatedCounterProps) {
  const [count,    setCount]    = useState(0);
  const [finished, setFinished] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  // trigger が渡されていればそちらを優先、なければ IntersectionObserver
  const shouldStart = trigger !== undefined ? trigger : inView;

  useEffect(() => {
    if (!shouldStart) return;

    const delayTimer = setTimeout(() => {
      const startTime = Date.now();
      const endTime   = startTime + duration;

      const update = () => {
        const now      = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3);
        const current  = eased * end;
        setCount(parseFloat(current.toFixed(decimals)));

        if (now < endTime) {
          requestAnimationFrame(update);
        } else {
          setCount(end);
          setFinished(true);
        }
      };

      requestAnimationFrame(update);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [shouldStart, end, duration, decimals, delay]);

  if (finished && finalDisplay) {
    return <span ref={ref}>{finalDisplay}</span>;
  }

  const formatValue = () => {
    if (finished) {
      const val = end.toFixed(decimals);
      return useCommas ? parseInt(val).toLocaleString("ja-JP") : val;
    }
    return useCommas
      ? Math.floor(count).toLocaleString("ja-JP")
      : count.toFixed(decimals);
  };

  return (
    <span ref={ref} style={useCommas && !finished ? { fontSize: "clamp(13px, 3vw, 22px)" } : undefined}>
      {prefix}{formatValue()}{suffix}
    </span>
  );
}
