import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Reyse — AI Search Visibility & Reviews for Property Businesses",
    short_name: "Reyse",
    description:
      "Reyse gets property businesses found across Google, Bing and AI search — and keeps every review answered, so your visibility and reputation work for you around the clock.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f2",
    theme_color: "#faf8f2",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png", purpose: "maskable" },
    ],
  };
}
