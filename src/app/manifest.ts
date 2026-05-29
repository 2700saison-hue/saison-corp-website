import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "株式会社セゾン",
    short_name: "セゾン",
    description: "SNS×AI×DXで企業変革を牽引するマーケティングパートナー",
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#CC2222",
    lang: "ja",
    categories: ["business", "marketing"],
    icons: [
      {
        src: "/images/services/soloptilink-ai.jpg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/images/services/soloptilink-ai.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "maskable",
      },
    ],
  };
}
