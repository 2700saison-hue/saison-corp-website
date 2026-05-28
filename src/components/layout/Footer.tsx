import Link from "next/link";
import Image from "next/image";
import { Share2, Mail, Phone } from "lucide-react";

const footerLinks = {
  会社情報: [
    { label: "会社概要", href: "/about/company" },
    { label: "理念・ミッション", href: "/about/philosophy" },
    { label: "代表メッセージ", href: "/about/ceo" },
    { label: "チーム紹介", href: "/about/team" },
  ],
  サービス: [
    { label: "SoloptiLink AI", href: "/service/ai" },
    { label: "ドラマ型SNS動画運用", href: "/service/sns" },
    { label: "ホームページ制作", href: "/service/hp" },
    { label: "LP制作", href: "/service/lp" },
    { label: "PR動画制作", href: "/service/pr-movie" },
  ],
  サービス2: [
    { label: "公式LINE構築", href: "/service/line" },
    { label: "システム開発", href: "/service/system" },
    { label: "補助金・助成金支援", href: "/service/subsidy" },
    { label: "SNS・AI研修", href: "/service/training" },
  ],
  その他: [
    { label: "導入事例", href: "/cases" },
    { label: "コラム", href: "/column" },
    { label: "よくある質問（FAQ）", href: "/faq" },
    { label: "ニュース", href: "/news" },
    { label: "採用情報", href: "/recruit" },
    { label: "お問い合わせ", href: "/contact" },
    { label: "プライバシーポリシー", href: "/privacy" },
    { label: "SNS ROI計算ツール", href: "/roi-calculator" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/5">
      {/* CTA Banner */}
      <div className="bg-[#CC2222] py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/80 text-sm tracking-widest mb-3 font-medium">CONTACT US</p>
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'Noto Serif JP, serif' }}>
            あなたの会社の変革、<br className="sm:hidden" />今すぐ始めませんか？
          </h2>
          <p className="text-white/70 text-base mb-8 max-w-xl mx-auto">
            無料相談受付中。まずはお気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-[#CC2222] font-black text-sm tracking-widest rounded hover:bg-[#F8F8F8] transition-all duration-200 hover:shadow-2xl hover:shadow-black/30"
          >
            無料でお問い合わせする →
          </Link>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/images/logos/logo-picaai.png"
                alt="株式会社セゾン"
                width={110}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-white/40 text-xs leading-relaxed mb-6">
              激しく移り変わる世界から<br />
              誰一人置いていかない社会を実現する
            </p>
            <div className="space-y-2">
              <a href="tel:090-1251-6837" className="flex items-center gap-2 text-white/40 hover:text-white text-xs transition-colors">
                <Phone className="w-3 h-3" />
                090-1251-6837
              </a>
              <a href="mailto:info@seasonsezon.co.jp" className="flex items-center gap-2 text-white/40 hover:text-white text-xs transition-colors">
                <Mail className="w-3 h-3" />
                お問い合わせ
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white/60 text-xs font-bold tracking-widest uppercase mb-4 border-b border-white/5 pb-2">
                {title === "サービス2" ? "サービス（続）" : title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/40 text-xs hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">
            © 2024 株式会社セゾン All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-[#CC2222] transition-colors"
              aria-label="Instagram"
            >
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
