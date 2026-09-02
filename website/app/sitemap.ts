import type { MetadataRoute } from "next";
import { industries } from "./industries/data";

const BASE_URL = "https://reyse.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/get-started`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${BASE_URL}/industries/${industry.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...industryRoutes];
}
