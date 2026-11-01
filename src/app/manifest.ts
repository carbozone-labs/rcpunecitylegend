export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { basePath } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LEGENDS | Rotaract Club of Pune City",
    short_name: "LEGENDS",
    description: "We don’t just build leaders. We create Legends.",
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#eaf3ff",
    theme_color: "#eaf3ff",
    icons: [
      { src: `${basePath}/icons/icon-192.png`, sizes: "192x192", type: "image/png" },
      { src: `${basePath}/icons/icon-512.png`, sizes: "512x512", type: "image/png" },
    ],
  };
}
