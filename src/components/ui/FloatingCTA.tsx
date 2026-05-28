"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { trackPhoneClick, trackCTAClick } from "@/components/seo/GoogleAnalytics";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <div
        className="flex items-center justify-center gap-4 px-4"
        style={{
          backgroundColor: "#CC2222",
          height: "56px",
        }}
      >
        {/* PC: ボタン + 電話番号 横並び */}
        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/contact"
            onClick={() => trackCTAClick("floating_cta_pc")}
            className="inline-flex items-center gap-2 bg-white text-[#CC2222] font-black text-sm px-6 py-2 rounded-full hover:bg-[#F8F8F8] transition-all duration-200 hover:shadow-lg whitespace-nowrap"
          >
            今すぐ無料相談 →
          </Link>
          <a
            href="tel:090-1251-6837"
            onClick={() => trackPhoneClick()}
            className="inline-flex items-center gap-2 text-white font-bold text-sm hover:text-white/80 transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            090-1251-6837
          </a>
        </div>

        {/* スマホ: ボタンのみ */}
        <div className="flex sm:hidden w-full">
          <Link
            href="/contact"
            onClick={() => trackCTAClick("floating_cta_mobile")}
            className="w-full text-center bg-white text-[#CC2222] font-black text-sm px-4 py-2 rounded-full hover:bg-[#F8F8F8] transition-all duration-200"
          >
            無料相談する
          </Link>
        </div>
      </div>
    </div>
  );
}
