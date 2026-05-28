import FadeInSection from "@/components/ui/FadeInSection";
import JsonLd from "@/components/seo/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "株式会社セゾンのプライバシーポリシーです。個人情報の取り扱いについて定めています。",
  alternates: { canonical: "https://seasonsezon.co.jp/privacy" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://seasonsezon.co.jp" },
    { "@type": "ListItem", position: 2, name: "プライバシーポリシー", item: "https://seasonsezon.co.jp/privacy" },
  ],
};

const SECTIONS = [
  {
    title: "1. 個人情報の収集について",
    content: `株式会社セゾン（以下「当社」）は、お客様がお問い合わせ・サービスのお申し込み・資料請求等を行う際に、以下の個人情報をご提供いただく場合があります。

・氏名
・会社名・部署名・役職
・メールアドレス
・電話番号・FAX番号
・住所
・その他、サービス提供に必要な情報`,
  },
  {
    title: "2. 個人情報の利用目的",
    content: `当社は、収集した個人情報を以下の目的で利用いたします。

・お問い合わせへの回答及び情報提供
・サービスの提供・運営・改善
・新サービスや各種案内の送付
・契約の締結・履行
・アフターサービス・サポートの提供
・利用規約違反への対応

上記以外の目的で個人情報を利用する場合は、事前にお客様の同意を得た上で行います。`,
  },
  {
    title: "3. 個人情報の第三者提供",
    content: `当社は、以下の場合を除き、お客様の個人情報を第三者に提供・開示いたしません。

・お客様ご本人の同意がある場合
・法令に基づく場合（警察・裁判所等の公的機関からの要請等）
・人の生命・身体または財産の保護のために必要がある場合
・公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合
・業務委託先に対して、業務遂行上必要な範囲内で提供する場合（委託先は適切な管理を義務付けます）`,
  },
  {
    title: "4. 個人情報の安全管理",
    content: `当社は、個人情報の漏洩・滅失・毀損を防止するため、適切なセキュリティ対策を実施しております。

・SSL/TLS暗号化通信の使用
・アクセス権限の適切な管理
・個人情報取扱いに関する社内教育の実施
・情報セキュリティポリシーの策定・運用

業務委託先に個人情報を提供する場合は、情報管理に関する契約を締結し、適切な管理を求めます。`,
  },
  {
    title: "5. クッキー（Cookie）について",
    content: `当社のウェブサイトでは、サービス改善・利便性向上のためにクッキーを使用する場合があります。クッキーにより個人を特定することはございません。ブラウザの設定によりクッキーを無効にすることができますが、一部のサービスが利用できなくなる場合があります。

また、Google Analytics等のアクセス解析ツールを使用しており、取得したデータはサービス改善の目的でのみ使用いたします。`,
  },
  {
    title: "6. 個人情報の開示・訂正・削除",
    content: `お客様は、当社が保有するご自身の個人情報について、開示・訂正・削除・利用停止を請求することができます。

請求の際は、お問い合わせフォームまたは下記の問い合わせ窓口までご連絡ください。本人確認後、法令に定める場合を除き、合理的な期間内に対応いたします。なお、対応に際して手数料をいただく場合があります。`,
  },
  {
    title: "7. 未成年者の個人情報",
    content: `18歳未満の方が個人情報をご提供される場合は、保護者の同意を得た上でお送りください。未成年者からの個人情報と判断した場合、保護者への確認を行う場合があります。`,
  },
  {
    title: "8. プライバシーポリシーの変更",
    content: `当社は、法令の変更やサービス内容の変更等に伴い、本プライバシーポリシーを改定することがあります。改定後のプライバシーポリシーは、当ウェブサイトに掲載した時点で効力を生じるものとします。重要な変更がある場合は、ウェブサイト上でお知らせいたします。`,
  },
  {
    title: "9. お問い合わせ窓口",
    content: `個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。

株式会社セゾン　個人情報保護担当
メールアドレス: info@seasonsezon.co.jp
お問い合わせフォーム: /contact

受付時間：平日 10:00〜18:00（土日祝・年末年始を除く）`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-[#080808] text-[#F8F8F8] min-h-screen">
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
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">
              PRIVACY POLICY
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold leading-[1.2] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              プライバシーポリシー
            </h1>
            <p className="text-white/50 text-sm leading-relaxed">
              制定日：2024年11月1日　　最終改定日：2024年11月1日
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* 本文 */}
      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-8 sm:p-10 mb-8">
              <p className="text-white/60 text-sm leading-relaxed">
                株式会社セゾン（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、
                個人情報保護法その他の関連法令を遵守するとともに、以下のプライバシーポリシーに基づき
                個人情報を適切に取り扱います。
              </p>
            </div>
          </FadeInSection>

          <div className="space-y-8">
            {SECTIONS.map((section, i) => (
              <FadeInSection key={i} delay={i * 60}>
                <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-8">
                  <h2
                    className="text-lg font-bold text-[#F8F8F8] mb-4"
                    style={{ fontFamily: "Noto Serif JP, serif" }}
                  >
                    {section.title}
                  </h2>
                  <div className="w-8 h-0.5 bg-[#CC2222] mb-6" />
                  <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
