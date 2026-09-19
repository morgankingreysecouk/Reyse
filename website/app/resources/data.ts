export type ResourceLink = {
  title: string;
  description: string;
  href: string;
};

export type CategoryResources = {
  blurb: string;
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
    blurb: "Getting found on Google, Bing, and Apple — the fixes that actually move rankings, in order.",
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
    blurb: "Getting recommended by ChatGPT, Gemini, and Copilot — how AI tools actually decide who to name.",
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
  reviews: {
    blurb: "Getting more Google reviews, responding without making things worse, and turning both into a ranking signal.",
    videos: [],
    audiobooks: [],
    courses: [
      {
        title: "The Free Review Management Course",
        description: "Asking, responding, every platform that counts, and turning both into a ranking signal.",
        href: "/reviewscourse",
      },
    ],
    downloads: [],
  },
  "market-intelligence": {
    blurb: "Knowing exactly where you stand against the agency down the road — instead of guessing.",
    videos: [],
    audiobooks: [],
    courses: [
      {
        title: "The Free Market & Competitive Intelligence Course",
        description: "Benchmarking against a named rival, catching shifts early, and turning tracking into action.",
        href: "/marketcourse",
      },
    ],
    downloads: [],
  },
  scale: {
    blurb: "Taking a system that works for one branch and making it work for every branch, without rebuilding it each time.",
    videos: [],
    audiobooks: [],
    courses: [],
    downloads: [],
  },
};

export function resourceStatus(slug: string): string {
  const r = resourcesBySlug[slug];
  const count = r.videos.length + r.audiobooks.length + r.courses.length + r.downloads.length;
  if (r.courses.length > 0) return "Free course available";
  if (count === 0) return "Coming soon";
  return `${count} resource${count === 1 ? "" : "s"} so far`;
}
