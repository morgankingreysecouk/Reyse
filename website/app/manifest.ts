import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Reyse — AI Live Chat for Property Businesses",
    short_name: "Reyse",
    description:
      "Reyse gives property businesses an AI live chat that answers inquiries instantly, day or night.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0c0e",
    theme_color: "#0b0c0e",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
