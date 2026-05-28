import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://seasonsezon.co.jp" },
    { "@type": "ListItem", position: 2, name: "経営理念", item: "https://seasonsezon.co.jp/about/philosophy" },
  ],
};

export const metadata: Metadata = {
  title: "経営理念・ミッション・バリュー",
  description:
    "株式会社セゾンの経営理念。「SNS×AIを事業成長のエンジンに変える」というミッションのもと、誠実さ・スピード・再現性・伴走精神というバリューで企業変革を支援します。",
  keywords: [
    "株式会社セゾン 経営理念",
    "セゾン ミッション",
    "古田太陽 理念",
    "SNS×AI 経営",
    "デジタルマーケティング 理念",
  ],
  alternates: {
    canonical: "https://seasonsezon.co.jp/about/philosophy",
  },
};

const values = [
  {
    number: "01",
    title: "お客様に満足される価値",
    desc: "数値で語れる成果にこだわります。「なんとなくうまくいった」ではなく、ROIとKPIを明確に設定し、お客様が「頼んで良かった」と心から思える価値を創造し続けます。",
  },
  {
    number: "02",
    title: "最新技術へのこだわり",
    desc: "AI・SNS・DXの最前線を常に追い続けます。技術の変化に遅れることなく、むしろ先んじることで、お客様に最先端の解決策を提供し続けます。",
  },
  {
    number: "03",
    title: "絶え間ないワクワクの創造",
    desc: "仕事に情熱とワクワクを持ち続けることが、最高のアウトプットにつながると信じています。チームも、お客様も、エンドユーザーも、セゾンと関わることで何かワクワクを感じてもらえる体験を創造します。",
  },
  {
    number: "04",
    title: "全ての人類への尊重",
    desc: "お客様、チームメンバー、協力会社、そして社会全体——関わる全ての人を尊重します。誰一人置いていかないという姿勢は、事業活動のあらゆる場面に宿っています。",
  },
];

export default function PhilosophyPage() {
  return (
    <div className="bg-[#080808] text-[#F8F8F8]">
      <JsonLd data={breadcrumbSchema} />
      {/* ヒーロー */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(248,248,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,248,248,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#CC2222] opacity-[0.05] blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeInSection>
            <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">PHILOSOPHY</p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F8F8F8] mb-6"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              経営理念
            </h1>
            <div className="w-16 h-0.5 bg-[#CC2222] mx-auto" />
          </FadeInSection>
        </div>
      </section>

      {/* ステートメント */}
      <section className="py-20 px-6 bg-[#CC2222] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeInSection>
            <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-8">OUR STATEMENT</p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.5]"
              style={{ fontFamily: "Noto Serif JP, serif" }}
            >
              激しく移り変わる世界から、
              <br className="hidden sm:block" />
              誰一人置いていかない
              <br />
              社会を実現する
            </h2>
          </FadeInSection>
        </div>
      </section>

      {/* ミッション */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">MISSION</p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#F8F8F8] mb-6"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                ミッション
              </h2>
              <div className="w-12 h-0.5 bg-[#CC2222] mx-auto mb-8" />
              <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto">
                AIとSNSが当たり前になった時代において、変化に取り残されそうな全ての企業・個人に、
                最先端の技術と確かな戦略を届けます。3年間で100社以上の変革を実現し、
                日本一顧客に寄り添った課題解決を実現することが、私たちの使命です。
              </p>
            </div>
          </FadeInSection>

          {/* ミッション強調ボックス */}
          <FadeInSection delay={200}>
            <div className="bg-[#141414] border border-[#CC2222]/30 rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#CC2222] opacity-[0.04] blur-[60px] pointer-events-none" />
              <p className="text-[#CC2222] text-xs font-bold tracking-[0.4em] uppercase mb-6">本質目標</p>
              <p
                className="text-2xl sm:text-3xl font-bold text-[#F8F8F8] leading-[1.6]"
                style={{ fontFamily: "Noto Serif JP, serif" }}
              >
                3年間で100社以上の変革を実現し、
                <br className="hidden sm:block" />
                日本一顧客に寄り添った
                <br />
                <span className="text-[#CC2222]">課題解決</span>を実現する
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* バリュー */}
      <section className="py-24 px-6 bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <SectionHeader
              eyebrow="VALUES"
              title="4つのバリュー"
              subtitle="私たちが日々の事業活動において大切にする4つの価値観"
            />
          </FadeInSection>
          <div className="space-y-6">
            {values.map((v, i) => (
              <FadeInSection key={i} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-8 sm:p-10 hover:border-[#CC2222]/30 transition-all duration-300 flex flex-col sm:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <p
                      className="text-6xl font-bold text-[#CC2222] opacity-20 leading-none"
                      style={{ fontFamily: "Noto Serif JP, serif" }}
                    >
                      {v.number}
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="w-8 h-0.5 bg-[#CC2222] mb-4" />
                    <h3
                      className="text-xl sm:text-2xl font-bold text-[#F8F8F8] mb-4"
                      style={{ fontFamily: "Noto Serif JP, serif" }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
