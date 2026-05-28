import type { Metadata } from "next";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import JsonLd from "@/components/seo/JsonLd";
import { ChevronDown, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "よくある質問（FAQ）",
  description:
    "株式会社セゾンへのよくある質問。SNS運用代行の費用・期間・効果・契約方法、SoloptiLink AI、ホームページ制作、補助金活用など30問以上を網羅。お問い合わせ前にご確認ください。",
  keywords: [
    "株式会社セゾン FAQ",
    "SNS運用代行 費用",
    "SNS運用代行 効果",
    "SNS運用 どのくらいで結果が出る",
    "SoloptiLink AI 使い方",
    "ホームページ制作 費用",
    "補助金 SNS運用",
    "セゾン よくある質問",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/faq",
  },
  openGraph: {
    title: "よくある質問（FAQ） | 株式会社セゾン",
    description:
      "SNS運用代行・AI・ホームページ制作など30問以上のよくある質問にお答えします。",
    url: "https://seasonsezon.co.jp/faq",
    type: "website",
  },
};

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  id: string;
  label: string;
  color: string;
  items: FaqItem[];
}

const FAQ_DATA: FaqCategory[] = [
  {
    id: "general",
    label: "会社・サービス全般",
    color: "#CC2222",
    items: [
      {
        q: "株式会社セゾンはどんな会社ですか？",
        a: "株式会社セゾンは、SNS運用代行・AI導入支援・ホームページ制作・LP制作・公式LINE構築・PR動画制作・システム開発・補助金申請支援・SNS/AI研修を提供するデジタルマーケティング会社です。東京都足立区を拠点に、累計100社以上の企業変革を支援してきた実績があります。大手企業から中小企業・個人事業主まで幅広く対応しています。",
      },
      {
        q: "相談・見積もりは無料ですか？",
        a: "はい、相談・見積もり・資料請求はすべて完全無料です。お問い合わせページからお気軽にご連絡ください。初回相談はオンライン（Zoom等）または対面でご対応いたします。",
      },
      {
        q: "東京以外の企業でも対応できますか？",
        a: "はい、全国対応しています。オンラインでの相談・進捗確認・運用管理が可能なため、北海道から沖縄まで全国の企業様にご利用いただいています。",
      },
      {
        q: "どのくらいの企業規模に対応していますか？",
        a: "個人事業主・スタートアップから上場企業まで対応しています。アトレ恵比寿・サイゼリヤ・ミサワホーム・ファミリーマートなどの大手企業から、地域の中小企業・個人飲食店まで、累計100社以上の実績があります。",
      },
      {
        q: "どの業種に対応していますか？",
        a: "業種を問わず対応しています。ウェディング・建設・飲食・医療・不動産・介護・小売・サービス業・教育・製造業など幅広い業界での実績があります。業界特性に合わせた戦略を提案します。",
      },
      {
        q: "複数のサービスをまとめて依頼できますか？",
        a: "はい、もちろんです。SNS運用代行＋ホームページ制作＋公式LINE構築など、複数サービスをまとめてご依頼いただくことで、戦略の一貫性が保たれ、コストも抑えられます。まずはご相談ください。",
      },
    ],
  },
  {
    id: "sns",
    label: "SNS運用代行",
    color: "#CC2222",
    items: [
      {
        q: "SNS運用代行の費用はいくらですか？",
        a: "ご要望・運用規模・投稿頻度・プラットフォームの数によって費用が異なります。まずは無料相談にてヒアリングの上、最適なプランをご提案します。また、IT導入補助金・事業再構築補助金などを活用することで、実質的な自己負担を大幅に抑えられる場合があります。",
      },
      {
        q: "どのSNSプラットフォームに対応していますか？",
        a: "Instagram・TikTok・YouTube（YouTubeショート）・X（旧Twitter）・Facebook・Threadsに対応しています。ご要望・ターゲット層・業種に合わせて最適なプラットフォームをご提案します。",
      },
      {
        q: "どのくらいで効果が出ますか？",
        a: "一般的に、運用開始から3〜6ヶ月で目に見える効果が出始めます。当社の実績では、山﨑組様は6ヶ月でフォロワー32倍（349→11,287人）、マザアス様は7ヶ月でフォロワー1万人突破を達成しています。ただし、業種・競合状況・コンテンツ品質により個人差があります。",
      },
      {
        q: "ドラマ型SNS動画とは何ですか？",
        a: "プロの舞台役者が出演するドラマ仕立てのショート動画です。通常の商品紹介動画と異なり、ストーリー性があるため視聴維持率が高く、シェアされやすい特徴があります。当社独自のフォーマットで、平均ROI195%を実現しています。採用・集客・ブランディングに効果的です。",
      },
      {
        q: "自社でコンテンツを用意する必要がありますか？",
        a: "いいえ、企画・撮影・編集・投稿・分析まですべてセゾンが担当します。お客様にご用意いただくのは、会社・サービスの基本情報のみです。撮影は弊社プロチームが対応しますので、ご安心ください。",
      },
      {
        q: "SNS運用の契約期間はどのくらいですか？",
        a: "最低契約期間は3ヶ月からとなっています。SNSは継続的な運用で効果が出るため、6ヶ月・12ヶ月プランをおすすめしています。長期プランほど料金が割引になります。",
      },
      {
        q: "現在運用中のアカウントを引き継いでもらえますか？",
        a: "はい、既存アカウントの引き継ぎも対応しています。現状診断・改善点の洗い出しを行い、既存フォロワーを維持しながら成長させる戦略を立案します。",
      },
    ],
  },
  {
    id: "ai",
    label: "SoloptiLink AI",
    color: "#C9A84C",
    items: [
      {
        q: "SoloptiLink AIとは何ですか？",
        a: "株式会社セゾンが提供するAI業務自動化ツールです。日本語で「〇〇を作って」と指示するだけで、業務システム・コンテンツ・ワークフローを自動生成します。エンジニア不要・IT知識ゼロで、中小企業でも大手企業と同じレベルのDXを実現できます。",
      },
      {
        q: "エンジニアがいなくても使えますか？",
        a: "はい、エンジニア不要です。日本語でチャット形式に指示するだけで、システムやコンテンツが自動生成されます。専門的なITスキルは一切不要です。",
      },
      {
        q: "どんな業務に活用できますか？",
        a: "顧客管理・在庫管理・スケジュール管理・請求書作成・社内マニュアル生成・SNS投稿文作成・メール文章作成など幅広い業務に対応。導入企業では月500万円以上の経費削減を実現したケースもあります。",
      },
      {
        q: "既存のシステムと連携できますか？",
        a: "API連携に対応しており、既存の基幹システム・CRM・ECプラットフォームなどと連携可能です。詳細はお問い合わせください。",
      },
    ],
  },
  {
    id: "web",
    label: "ホームページ・LP制作",
    color: "#5B7FA6",
    items: [
      {
        q: "ホームページ制作の費用はいくらですか？",
        a: "ページ数・デザイン要件・機能によって費用が異なります。IT導入補助金・小規模事業者持続化補助金などを活用することで実質負担を大幅に抑えられる場合があります。まずは無料相談・無料見積もりをご利用ください。",
      },
      {
        q: "最短1日納品とはどういうことですか？",
        a: "AIを活用したコーディング自動化により、シンプルなホームページであれば最短1日で初稿を納品できます。ただし、お客様の確認・修正作業が必要なため、本番公開まで数日〜1週間程度が一般的です。",
      },
      {
        q: "SEO対策は含まれますか？",
        a: "はい、全ページにSEO対策（メタタグ・構造化データ・サイトマップ・高速化など）が標準で含まれます。キーワード調査に基づいたコンテンツ設計も対応しています。",
      },
      {
        q: "制作後のサポートはありますか？",
        a: "はい、制作後の更新・改修サポートプランをご用意しています。また、継続的なSEO改善・アクセス解析レポートの提供も可能です。",
      },
    ],
  },
  {
    id: "subsidy",
    label: "補助金・助成金",
    color: "#4CAF50",
    items: [
      {
        q: "補助金でSNS運用代行の費用を賄えますか？",
        a: "はい、IT導入補助金・事業再構築補助金・小規模事業者持続化補助金などを活用することで、SNS運用・ホームページ制作・システム開発の費用を補助できる場合があります。補助率は事業により異なりますが、最大で費用の3分の2〜4分の3が補助されるケースもあります。",
      },
      {
        q: "補助金申請は難しいですか？",
        a: "当社が申請書類の作成から採択後フォローまでサポートするため、お客様の負担を最小限に抑えられます。ただし、補助金には申請期間・要件があるため、早めのご相談をおすすめします。",
      },
      {
        q: "どんな補助金に対応していますか？",
        a: "IT導入補助金・事業再構築補助金・小規模事業者持続化補助金・ものづくり補助金・デジタル化基盤導入枠などに対応しています。お客様の状況に合わせて最適な補助金をご提案します。",
      },
      {
        q: "補助金が採択されなかった場合はどうなりますか？",
        a: "補助金の採択は保証できませんが、採択率向上のために書類作成を丁寧にサポートします。採択されなかった場合も、サービス自体はお申し込みいただけます。補助金なしでも費用対効果の高いプランをご提案します。",
      },
    ],
  },
  {
    id: "contract",
    label: "契約・料金",
    color: "#9C27B0",
    items: [
      {
        q: "支払い方法は何がありますか？",
        a: "銀行振込・クレジットカード・請求書払いに対応しています。大企業・官公庁様には請求書払いでの対応も可能です。",
      },
      {
        q: "途中でサービスを解約できますか？",
        a: "はい、最低契約期間終了後は1ヶ月前のご通知で解約可能です。契約内容によって異なりますので、詳細は契約時にご確認ください。",
      },
      {
        q: "契約前にサービスの詳細を確認できますか？",
        a: "はい、契約前に詳細なサービス内容・スケジュール・料金明細をご提示します。内容にご納得いただいてからのご契約となりますのでご安心ください。資料請求も無料で対応しています。",
      },
    ],
  },
];

// FAQ全アイテムをフラットにしてJSON-LD用に変換
const allFaqItems = FAQ_DATA.flatMap((cat) => cat.items);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://seasonsezon.co.jp" },
    { "@type": "ListItem", position: 2, name: "よくある質問", item: "https://seasonsezon.co.jp/faq" },
  ],
};

export default function FaqPage() {
  return (
    <div className="bg-[#080808] text-[#F8F8F8] min-h-screen">
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* HERO */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(248,248,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,248,248,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#CC2222] opacity-[0.05] blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">FAQ</p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              よくある質問
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              サービスに関するご不明点をまとめました。
              解決しない場合はお気軽にお問い合わせください。
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* FAQ本文 */}
      <section className="py-8 pb-32 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {FAQ_DATA.map((category) => (
            <FadeInSection key={category.id}>
              <div>
                {/* カテゴリヘッダー */}
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-1 h-8 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <h2
                    className="text-xl sm:text-2xl font-bold text-[#F8F8F8]"
                    style={{ fontFamily: "Noto Serif JP, serif" }}
                  >
                    {category.label}
                  </h2>
                </div>

                {/* Q&Aアコーディオン風リスト */}
                <div className="space-y-3">
                  {category.items.map((item, idx) => (
                    <details
                      key={idx}
                      className="group bg-[#141414] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
                    >
                      <summary className="flex items-start gap-4 px-6 py-5 cursor-pointer list-none select-none">
                        <span
                          className="text-sm font-black mt-0.5 shrink-0"
                          style={{ color: category.color }}
                        >
                          Q
                        </span>
                        <span className="text-white/90 font-medium text-sm sm:text-base flex-1 leading-relaxed">
                          {item.q}
                        </span>
                        <ChevronDown className="w-5 h-5 text-white/30 shrink-0 mt-0.5 transition-transform duration-300 group-open:rotate-180" />
                      </summary>
                      <div className="px-6 pb-5">
                        <div className="flex items-start gap-4">
                          <span className="text-sm font-black text-[#C9A84C] mt-0.5 shrink-0">
                            A
                          </span>
                          <p className="text-white/60 text-sm leading-[2]">{item.a}</p>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0c0c0c]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">
              CONTACT
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#F8F8F8] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              解決しない場合は
              <br />
              お気軽にご相談ください
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-10">
              相談・見積もり・資料請求はすべて無料です。
              <br />
              専門スタッフが丁寧にお答えします。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#CC2222] text-white font-bold px-10 py-4 rounded-full hover:bg-[#aa1a1a] transition-colors duration-300"
            >
              無料で相談する
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
