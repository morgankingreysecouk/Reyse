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
    videos: [
      {
        title: "Watch",
        description: "The full SEO course, narrated end to end.",
        href: "https://www.youtube.com/watch?v=reA7SgAjdUg",
      },
    ],
    audiobooks: [
      {
        title: "Listen",
        description: "The same course as an audiobook, for the car or a commute.",
        href: "https://open.spotify.com/episode/4wosOsfUSCUqs1qWtTqVRa?si=q3ouzAftRgC8oWZR4bMRSA",
      },
    ],
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
      {
        title: "llms.txt Template",
        description: "A fill-in-the-blank starting point for the emerging llms.txt standard — paste it in, swap the brackets.",
        href: "/downloads/reyse-llms-txt-template.pdf",
      },
      {
        title: "AI Query Mapping Worksheet",
        description: "Every real question an AI tool might be asked about your business — and which page should actually answer it.",
        href: "/downloads/reyse-ai-query-mapping-worksheet.pdf",
      },
      {
        title: "Answer-Ready Content Rewrite Checklist",
        description: "AI tools lift a direct answer, not a scroll — before and after examples, plus a checklist for your own pages.",
        href: "/downloads/reyse-answer-ready-content-checklist.pdf",
      },
      {
        title: "Entity Consistency & sameAs Schema Kit",
        description: "How AI tools confirm you're one real business, not several unconnected mentions — a fill-in-the-blank schema block.",
        href: "/downloads/reyse-entity-sameas-schema-kit.pdf",
      },
      {
        title: "AI Crawler Access Checklist",
        description: "A blocked AI crawler means total invisibility, not a lower ranking — how to check in two minutes.",
        href: "/downloads/reyse-ai-crawler-access-checklist.pdf",
      },
      {
        title: "Content Visibility Checklist",
        description: "Check whether your key content actually renders without JavaScript — most AI crawlers can't run it.",
        href: "/downloads/reyse-content-visibility-checklist.pdf",
      },
      {
        title: "AI Recommendation Test Script",
        description: "Deeper than a simple mention check — comparison and recommendation prompts, with a confidence-tier score.",
        href: "/downloads/reyse-ai-recommendation-test-script.pdf",
      },
      {
        title: "AI Source Audit Worksheet",
        description: "There's no “correct the AI” button — work out which real source is feeding a wrong answer, and fix that instead.",
        href: "/downloads/reyse-ai-source-audit-worksheet.pdf",
      },
      {
        title: "Property Subreddit & Forum Finder",
        description: "The real UK property communities worth genuinely being part of — and how to participate without it backfiring.",
        href: "/downloads/reyse-property-forum-finder.pdf",
      },
      {
        title: "Competitor AI Visibility Gap Finder",
        description: "Specifically who gets named when AI platforms are asked — side by side against one real rival.",
        href: "/downloads/reyse-competitor-ai-visibility-gap-finder.pdf",
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
      {
        title: "Real Competitive Set Identification Worksheet",
        description: "Who you're actually losing enquiries to — based on real search and AI results, not who's been on the high street longest.",
        href: "/downloads/reyse-real-competitive-set-worksheet.pdf",
      },
      {
        title: "Competitor Benchmark Report",
        description: "Google, Bing, Apple, AI mentions, reviews, and GBP activity — you against one named rival, with exactly where to check each one.",
        href: "/downloads/reyse-competitor-benchmark-report.pdf",
      },
      {
        title: "Local Market Signal Alert Setup",
        description: "Set up once, so the market's own shifts come to you — not about any one competitor, about the market underneath all of you.",
        href: "/downloads/reyse-local-market-signal-alert-setup.pdf",
      },
      {
        title: "Competitor Alert Setup Guide",
        description: "Catch a shift as it happens instead of noticing it three months late — real, free monitoring, set up once.",
        href: "/downloads/reyse-competitor-alert-setup-guide.pdf",
      },
      {
        title: "Trust Signal Benchmark Checklist",
        description: "Not rankings — the underlying technical trust signals, compared side by side against a named competitor.",
        href: "/downloads/reyse-trust-signal-benchmark-checklist.pdf",
      },
      {
        title: "GBP Activity Comparison Snapshot",
        description: "Posting frequency, photo freshness, and Q&A activity — a two-minute look, not an ongoing log.",
        href: "/downloads/reyse-gbp-activity-comparison-snapshot.pdf",
      },
      {
        title: "AI Answer Monitor",
        description: "Three prompts, checked quarterly, only logged when something's actually different — not a running monthly log.",
        href: "/downloads/reyse-ai-answer-monitor.pdf",
      },
      {
        title: "Review Momentum Snapshot",
        description: "A then-vs-now comparison, not twelve months of manual data entry — velocity, not totals.",
        href: "/downloads/reyse-review-momentum-snapshot.pdf",
      },
      {
        title: "Signal-vs-Noise Decision Filter",
        description: "A competitor did something — is it actually worth reacting to, or just noise? A quick filter before you act.",
        href: "/downloads/reyse-signal-vs-noise-decision-filter.pdf",
      },
      {
        title: "Quarterly Market Intelligence Scorecard",
        description: "Four numbers, four times a year — the lightweight version that actually gets kept up, instead of a spreadsheet you owe every month.",
        href: "/downloads/reyse-quarterly-market-intelligence-scorecard.pdf",
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
      {
        title: "Branch Launch Checklist",
        description: "The one list to run every time a new branch opens — so nothing depends on someone remembering.",
        href: "/downloads/reyse-branch-launch-checklist.pdf",
      },
      {
        title: "Branch Schema Template Kit",
        description: "One schema block, built to be duplicated per branch — swap five fields, not rebuild the whole thing.",
        href: "/downloads/reyse-branch-schema-template-kit.pdf",
      },
      {
        title: "Branch NAP Launch Check",
        description: "Checked once at launch, plus a rotating spot-check — not a growing matrix across every branch and directory.",
        href: "/downloads/reyse-branch-nap-launch-check.pdf",
      },
      {
        title: "Branch Page Architecture Decision Guide",
        description: "Subdirectory or subdomain, one page or grouped — decided once, before you need it, not improvised at branch three.",
        href: "/downloads/reyse-branch-page-architecture-guide.pdf",
      },
      {
        title: "Pre-Launch Content Checklist",
        description: "Checked once, on the new page, before it goes live — not a recurring audit of a growing network.",
        href: "/downloads/reyse-pre-launch-content-checklist.pdf",
      },
      {
        title: "Group vs Branch Reporting Template",
        description: "A regional director scanning fifty branches needs something completely different from a branch manager checking their own patch.",
        href: "/downloads/reyse-group-vs-branch-reporting-template.pdf",
      },
      {
        title: "New Branch Directory Claim Checklist",
        description: "Every directory claimed on day one — not “eventually,” which is how gaps quietly become permanent.",
        href: "/downloads/reyse-new-branch-directory-claim-checklist.pdf",
      },
      {
        title: "Listing Data Format Template",
        description: "The standard spec for how every branch's data gets formatted — decided once, before branch two, not during.",
        href: "/downloads/reyse-listing-data-format-template.pdf",
      },
      {
        title: "Pre-Launch Brand Consistency Checklist",
        description: "Checked once, on the new branch page, before it goes live — not a re-audit of every existing page each time.",
        href: "/downloads/reyse-pre-launch-brand-consistency-checklist.pdf",
      },
      {
        title: "Moat Strength Test",
        description: "Firm criteria, not open reflection — what's actually defensible as you scale, and what any competitor can copy in a weekend.",
        href: "/downloads/reyse-moat-strength-test.pdf",
      },
    ],
  },
};
