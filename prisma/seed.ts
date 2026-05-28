import "dotenv/config";
import path from "path";
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import bcrypt from "bcryptjs";
import { casesData } from "../src/data/cases";

const dbPath = path.resolve(__dirname, "dev.db");
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const prisma = new PrismaClient({ adapter } as any);

async function main() {
  console.log("シードデータの投入を開始します...");

  // Cases のシード
  for (const c of casesData) {
    await prisma.case.upsert({
      where: { slug: c.slug },
      update: {
        clientName: c.clientName,
        industry: c.industry,
        category: c.category,
        challenge: c.challenge,
        solution: c.solution,
        beforeStats: JSON.stringify(c.beforeStats),
        afterStats: JSON.stringify(c.afterStats),
        roi: c.roi ?? null,
        testimonial: c.testimonial ?? null,
        featured: c.featured,
        order: c.order,
      },
      create: {
        slug: c.slug,
        clientName: c.clientName,
        industry: c.industry,
        category: c.category,
        challenge: c.challenge,
        solution: c.solution,
        beforeStats: JSON.stringify(c.beforeStats),
        afterStats: JSON.stringify(c.afterStats),
        roi: c.roi ?? null,
        testimonial: c.testimonial ?? null,
        featured: c.featured,
        order: c.order,
      },
    });
  }

  // サンプル News 3件
  const newsItems = [
    {
      slug: "news-2024-001",
      title: "株式会社セゾン、SNSマーケティング支援サービスをリニューアル",
      category: "プレスリリース",
      content:
        "このたび株式会社セゾンは、SNSマーケティング支援サービスの全面リニューアルを実施しました。AI活用による効果測定機能の強化により、クライアント様の成果最大化をより確実にサポートします。",
      publishedAt: new Date("2024-10-01"),
    },
    {
      slug: "news-2024-002",
      title: "新サービス「AI動画制作パッケージ」の提供開始のお知らせ",
      category: "サービス情報",
      content:
        "株式会社セゾンは、AI技術を活用した動画制作パッケージの提供を開始しました。低コスト・短納期での高品質な動画制作を実現し、SNS向けの拡散力の高いコンテンツを提供します。",
      publishedAt: new Date("2024-11-15"),
    },
    {
      slug: "news-2025-001",
      title: "導入事例追加：介護業界での採用SNS活用で年間480万円削減",
      category: "導入事例",
      content:
        "株式会社ケアメディカル様での取り組みが新たな事例として公開されました。SNSを活用した採用活動により、月6名の採用と年間480万円の採用コスト削減を実現しました。",
      publishedAt: new Date("2025-01-20"),
    },
  ];

  for (const news of newsItems) {
    await prisma.news.upsert({
      where: { slug: news.slug },
      update: {
        title: news.title,
        category: news.category,
        content: news.content,
        publishedAt: news.publishedAt,
      },
      create: {
        slug: news.slug,
        title: news.title,
        category: news.category,
        content: news.content,
        publishedAt: news.publishedAt,
      },
    });
  }

  // AdminUser のシード
  const hashedPassword = await bcrypt.hash("saison2024!", 10);
  await prisma.adminUser.upsert({
    where: { email: "admin@saison.jp" },
    update: { password: hashedPassword },
    create: {
      email: "admin@saison.jp",
      password: hashedPassword,
    },
  });

  // 件数確認
  const casesCount = await prisma.case.count();
  const newsCount = await prisma.news.count();
  const adminCount = await prisma.adminUser.count();
  const contactCount = await prisma.contactMessage.count();

  console.log("-----------------------------------");
  console.log(`Case 件数       : ${casesCount}`);
  console.log(`News 件数       : ${newsCount}`);
  console.log(`AdminUser 件数  : ${adminCount}`);
  console.log(`Contact 件数    : ${contactCount}`);
  console.log("-----------------------------------");
  console.log("シードデータの投入が完了しました。");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
