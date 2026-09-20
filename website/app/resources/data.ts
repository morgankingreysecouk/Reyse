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
      {
        title: "Schema Markup Pack",
        description: "Fill-in-the-blank structured data for your homepage, FAQs, reviews, and listing pages — paste it in, swap the brackets.",
        href: "/downloads/reyse-schema-markup-pack.pdf",
      },
      {
        title: "Google Business Profile Setup Checklist",
        description: "Every field, in order, so nothing gets left on the generic default.",
        href: "/downloads/reyse-gbp-setup-checklist.pdf",
      },
      {
        title: "Review Request & Reply Templates",
        description: "What to actually say — timed to the moment that works, and ready for whatever comes back.",
        href: "/downloads/reyse-review-request-reply-templates.pdf",
      },
      {
        title: "AI Visibility Self-Check Kit",
        description: "10 real prompts to run against ChatGPT, Gemini, and Perplexity, plus a worksheet to track what comes back.",
        href: "/downloads/reyse-ai-visibility-self-check-kit.pdf",
      },
      {
        title: "AI Crawler Access Checklist",
        description: "A blocked AI crawler means total invisibility, not a lower ranking — how to check in two minutes.",
        href: "/downloads/reyse-ai-crawler-access-checklist.pdf",
      },
      {
        title: "NAP Consistency Tracker",
        description: "Name, address, phone — the same everywhere, checked directory by directory.",
        href: "/downloads/reyse-nap-consistency-tracker.pdf",
      },
      {
        title: "Meta Title & Description Formulas",
        description: "Fill-in-the-blank formulas for every page type, with real character limits and worked examples.",
        href: "/downloads/reyse-meta-title-description-formulas.pdf",
      },
      {
        title: "Competitor Snapshot Worksheet",
        description: "Put your numbers next to one real competitor's — the same signals, filled in by hand.",
        href: "/downloads/reyse-competitor-snapshot-worksheet.pdf",
      },
      {
        title: "UK Estate & Letting Agent Directory List",
        description: "Every directory worth claiming — property portals, search platforms, and review sites — in one place.",
        href: "/downloads/reyse-uk-directory-list.pdf",
      },
      {
        title: "Monthly SEO Health-Check Checklist",
        description: "Five minutes a month so nothing quietly decays after you've done the initial work.",
        href: "/downloads/reyse-monthly-seo-health-check.pdf",
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
    downloads: [
      {
        title: "The Free GEO Guide — full PDF",
        description: "All 23 items in one document, exactly as they appear in the guide — to save, print, or read offline.",
        href: "/downloads/the-free-geo-guide.pdf",
      },
    ],
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
    downloads: [
      {
        title: "The Free Review Management Course — full PDF",
        description: "All 22 lessons in one document, exactly as they appear in the course — to save, print, or read offline.",
        href: "/downloads/the-free-review-management-course.pdf",
      },
      {
        title: "Review Request Message Templates",
        description: "SMS, email, and an in-person script — for every real moment, not a random fixed schedule.",
        href: "/downloads/reyse-review-request-templates.pdf",
      },
      {
        title: "Review Reply Template Library",
        description: "Nine real scenarios — not just “good” and “bad”, the ones that actually trip people up.",
        href: "/downloads/reyse-review-reply-template-library.pdf",
      },
      {
        title: "Review Platform Coverage Checklist",
        description: "Claimed and actively monitored, platform by platform — Google, Bing, Apple, Trustpilot, Facebook, allAgents.",
        href: "/downloads/reyse-review-platform-coverage-checklist.pdf",
      },
      {
        title: "Negative Review Decision Tree",
        description: "Reply publicly, take it offline, or report it — worked out before you're stood in front of one.",
        href: "/downloads/reyse-negative-review-decision-tree.pdf",
      },
      {
        title: "Review Badge Embed Kit",
        description: "A fill-in-the-blank snippet for a live-looking star rating badge on your own website.",
        href: "/downloads/reyse-review-badge-embed-kit.pdf",
      },
      {
        title: "Review Monitoring & Alert Setup Checklist",
        description: "Turn on every platform's own notifications properly, so nothing sits unseen for a week.",
        href: "/downloads/reyse-review-monitoring-alert-checklist.pdf",
      },
      {
        title: "Monthly Review Health-Check Checklist",
        description: "Five minutes a month so a slipping response time or a rating drift never goes unnoticed.",
        href: "/downloads/reyse-monthly-review-health-check.pdf",
      },
      {
        title: "Review Reply Builder Worksheet",
        description: "The four-part formula behind every good reply, for anything the template library doesn't quite cover.",
        href: "/downloads/reyse-review-reply-builder-worksheet.pdf",
      },
      {
        title: "Fake/Suspicious Review Flagging Guide",
        description: "How to actually report a fake review on Google, Trustpilot, and Facebook, and what evidence to gather first.",
        href: "/downloads/reyse-fake-review-flagging-guide.pdf",
      },
      {
        title: "AI Reputation Self-Check Kit",
        description: "8 real prompts to run against ChatGPT, Gemini, and Perplexity, plus a worksheet to track what comes back.",
        href: "/downloads/reyse-ai-reputation-self-check-kit.pdf",
      },
    ],
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
    downloads: [
      {
        title: "The Free Market & Competitive Intelligence Course — full PDF",
        description: "All 17 lessons in one document, exactly as they appear in the course — to save, print, or read offline.",
        href: "/downloads/the-free-market-intelligence-course.pdf",
      },
    ],
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
    downloads: [
      {
        title: "The Free Scale Course — full PDF",
        description: "All 16 lessons in one document, exactly as they appear in the course — to save, print, or read offline.",
        href: "/downloads/the-free-scale-course.pdf",
      },
    ],
  },
};
