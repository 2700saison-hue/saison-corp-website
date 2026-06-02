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
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
