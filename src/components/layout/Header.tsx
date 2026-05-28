"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "会社概要", href: "/about", children: [
    { label: "理念・ミッション", href: "/about/philosophy" },
    { label: "代表メッセージ", href: "/about/ceo" },
    { label: "チーム紹介", href: "/about/team" },
    { label: "会社情報", href: "/about/company" },
  ]},
  { label: "サービス", href: "/service", children: [
    { label: "SoloptiLink AI", href: "/service/ai" },
    { label: "ドラマ型SNS動画運用", href: "/service/sns" },
    { label: "ホームページ制作", href: "/service/hp" },
    { label: "LP制作", href: "/service/lp" },
    { label: "PR動画制作", href: "/service/pr-movie" },
    { label: "公式LINE構築", href: "/service/line" },
    { label: "システム開発", href: "/service/system" },
    { label: "補助金・助成金支援", href: "/service/subsidy" },
    { label: "SNS・AI研修", href: "/service/training" },
  ]},
  { label: "導入事例", href: "/cases" },
  { label: "コラム", href: "/column" },
  { label: "ニュース", href: "/news" },
  { label: "採用情報", href: "/recruit" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#080808]/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logos/logo-picaai.png"
              alt="株式会社セゾン"
              width={160}
              height={60}
              className="h-12 w-auto object-contain max-w-[160px]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-5 py-3 text-sm font-medium tracking-wide transition-colors duration-200 rounded-lg ${
                    pathname.startsWith(item.href)
                      ? "text-[#CC2222]"
                      : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>
                {item.children && activeDropdown === item.href && (
                  <div className="absolute top-full left-0 w-56 pt-1">
                    <div className="bg-[#141414] border border-white/10 rounded-lg shadow-2xl shadow-black/50 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-[#CC2222]/10 transition-colors duration-150 border-b border-white/5 last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[#CC2222] text-white text-sm font-bold tracking-wider rounded-full hover:bg-[#E53333] transition-all duration-300 hover:shadow-[0_0_25px_rgba(204,34,34,0.4)] hover:scale-105"
            >
              お問い合わせ
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white/70 hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="メニューを開く"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0f0f0f] border-t border-white/5 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-white/80 font-medium text-sm hover:text-[#CC2222] transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 border-l border-white/5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-white/50 text-xs hover:text-white transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3">
              <Link
                href="/contact"
                className="block text-center px-4 py-3 bg-[#CC2222] text-white font-bold text-sm rounded"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
