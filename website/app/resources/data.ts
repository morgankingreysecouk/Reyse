export type ResourceLink = {
  title: string;
  description: string;
  href: string;
};

export type CategoryResources = {
  videos: ResourceLink[];
  audiobooks: ResourceLink[];
  courses: ResourceLink[];
  downloads: ResourceLink[];
};

// Genuinely empty where nothing real exists yet — no placeholder videos,
// audiobooks, or downloads. Each page says so honestly rather than padding
// itself out. SEO and GEO have real courses already; the rest are next.
export const resourcesBySlug: Record<string, CategoryResources> = {
  seo: {
    videos: [],
    audiobooks: [],
    courses: [
      {
        title: "The Free SEO Course",
        description: "Every fix, in order, that actually moves you up Google, Bing, and Apple.",
        href: "/seocourse",
      },
    ],
    downloads: [],
  },
  geo: {
    videos: [],
    audiobooks: [],
    courses: [
      {
        title: "The Free GEO Guide",
        description: "How ChatGPT, Gemini, and Copilot actually decide who to recommend.",
        href: "/geocourse",
      },
    ],
    downloads: [],
  },
  reviews: { videos: [], audiobooks: [], courses: [], downloads: [] },
  "market-intelligence": { videos: [], audiobooks: [], courses: [], downloads: [] },
  scale: { videos: [], audiobooks: [], courses: [], downloads: [] },
};

export function resourceStatus(slug: string): string {
  const r = resourcesBySlug[slug];
  const count = r.videos.length + r.audiobooks.length + r.courses.length + r.downloads.length;
  if (r.courses.length > 0) return "Free course available";
  if (count === 0) return "Coming soon";
  return `${count} resource${count === 1 ? "" : "s"} so far`;
}
