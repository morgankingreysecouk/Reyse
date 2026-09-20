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
    downloads: [
      {
        title: "The Free SEO Course — full PDF",
        description: "All 32 lessons in one document, exactly as they appear in the course — to save, print, or read offline.",
        href: "/downloads/the-free-seo-course.pdf",
      },
    ],
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
    courses: [
      {
        title: "The Free Scale Course",
        description: "Replicating SEO, GEO, and trust signals properly across every branch — not rebuilding from scratch each time.",
        href: "/scalecourse",
      },
    ],
    downloads: [],
  },
};
