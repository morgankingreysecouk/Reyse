// Sandbox content for comparing three ways to restructure the dense
// "Everything included" / "Optional add-ons" paragraphs on product pages.
// Every fact here is pulled directly from the live copy in
// app/products/data.ts (the SEO product entry) — nothing invented, just
// restructured. Delete this whole `app/preview/` route once a direction
// is picked and rolled into the real data.

export type MockItem = {
  title: string;
  subtitle?: string;
  growthOnly?: boolean;
  lead: string;
  bullets: string[];
  stat?: { value: string; label: string };
  problem: string;
  fix: string;
  growthNote?: string;
};

export const includedMock: MockItem[] = [
  {
    title: "Technical Health Audit",
    subtitle: "the backend: does it work, and work fast?",
    lead: "Slow pages cost you conversions — we make sure yours isn't one of them.",
    bullets: [
      "Every 100ms of extra load time costs ~1% in conversions — we check code and performance for what's slowing you down",
      "A handful of your live listings get the same check, since backend issues often single them out specifically",
      "Tested across every major device and browser",
      "We fix it directly, or hand you a clear report to action — your choice",
    ],
    stat: { value: "≈1%", label: "lost per 100ms of extra load time" },
    problem: "Slow, broken pages are quietly penalised by search engines, and 100ms of extra load time costs about 1% in lost conversions.",
    fix: "We test your site and a sample of live listings across every device and browser, then fix it ourselves or hand you a clear report.",
    growthNote:
      "Technical standards don't stay still — what search engines reward today can shift within months, with nothing on your site actually breaking to warn you. We monitor for exactly that every month, and either implement whatever's needed or keep you updated with a clear report.",
  },
  {
    title: "Schema Implementation",
    lead: "Hidden code that tells search engines exactly what you offer — and unlocks rich results.",
    bullets: [
      "Applied sitewide first, so search engines read your services and location as fact, not guesswork",
      "+20–30% CTR once pages qualify for rich results (price/location shown right in the search listing)",
      "Every future property listing gets it automatically — no manual work per listing",
    ],
    stat: { value: "20–30%", label: "higher click-through once schema unlocks rich results" },
    problem: "Without schema, search engines are guessing what your listings mean — costing you the rich results that get more clicks.",
    fix: "We label your whole site once, then template every future listing so new ones qualify automatically.",
    growthNote:
      "Building the template is a one-time job — but if a platform update ever quietly breaks the automation, a listing could start publishing without its schema. We check this every month as part of Growth.",
  },
  {
    title: "On-Page Audit",
    subtitle: "the structure: is it built for search engines and people to understand and use?",
    lead: "Every page is a chance to be found — if it's built right.",
    bullets: [
      "Titles, headers, and meta descriptions signal what a page is and where you operate",
      "We fix what's structurally holding pages back, and what makes enquiring harder than it should be",
      "Same review applied to a handful of your live listings",
      "Bigger reworks get flagged, with what to prioritise next",
    ],
    problem: "A confusing layout or unclear structure loses a customer even after they've found you.",
    fix: "We review every page (and a sample of listings) for structure and usability, fixing or prioritising what needs it most.",
    growthNote:
      "What counts as \"well-structured\" shifts as search engines change how they read pages. We give every new page and a fresh handful of listings the same review each month.",
  },
  {
    title: "Content Audit",
    subtitle: "the information: is it accurate and current?",
    lead: "Outdated content quietly costs you both rankings and trust.",
    bullets: [
      "We review your site content and a sample of listings for what's outdated, missing, or no longer true",
      "Search engines treat stale content less favourably",
      "We fix what we can now, and list what to update next",
    ],
    problem: "Search engines rank stale content lower, and inaccurate details quietly damage visitor trust.",
    fix: "We review your content and listings for accuracy — fixing what we can, and listing what's next.",
    growthNote:
      "What people search for shifts constantly. Each month, we review your content and a sample of listings for accuracy and relevance, and flag genuine opportunities as they happen.",
  },
  {
    title: "NAP Consistency Audit",
    lead: "Your Name, Address and Phone number need to match, everywhere — or your ranking pays for it.",
    bullets: [
      "NAP consistency is a measured local ranking factor — every mismatch works against you",
      "Checked across your website, Google, Bing, Apple, Companies House, Rightmove, Zoopla, OnTheMarket, Propertymark, RICS, and more",
      "We fix mismatches ourselves, or hand you clear instructions",
    ],
    problem: "Mismatched business details across the web are a real, measurable hit to your local ranking.",
    fix: "We check and correct your Name/Address/Phone everywhere it appears — website, search platforms, portals, directories.",
    growthNote:
      "Directories change formatting, details get updated in one place and forgotten in another. We check every listing every month, correcting what's drifted.",
  },
  {
    title: "Profile Setup Audit",
    lead: "Your business profile is often the first impression — before anyone visits your site.",
    bullets: [
      "Profile completeness on Google, Bing, and Apple is one of the biggest local ranking factors",
      "We properly set up Google Business Profile, Bing Places, and Apple Business Connect",
      "Apple in particular is still low-competition — most property businesses haven't claimed theirs",
    ],
    problem: "An incomplete or poorly set-up profile holds your ranking back, regardless of how good your website is.",
    fix: "We set up and properly complete your Google, Bing, and Apple profiles — or hand you clear steps to do it yourself.",
    growthNote:
      "Details change — hours shift for a bank holiday, a new service gets added. We check and correct all three profiles for you every month, or report it so your team can act.",
  },
  {
    title: "Profile Activity",
    lead: "Profiles that look abandoned get quietly downranked — we keep yours looking active, automatically.",
    bullets: [
      "Activity and freshness are a measured part of local visibility",
      "We build an automated system that posts updates to your profiles on its own",
      "Zero ongoing effort required from you — and we explain what's going out in your name",
    ],
    problem: "Google and Apple downrank business profiles that look inactive.",
    fix: "We build a system that posts to your profiles automatically, so they stay visibly active with no ongoing work from you.",
    growthNote:
      "We keep the system tuned, not just running — reviewing what's performing, refreshing the content it draws from each month.",
  },
  {
    title: "Total Visibility Audit",
    lead: "Most agencies only check your Google profile. We check everywhere a customer might actually look.",
    bullets: [
      "Safari alone is ~30% of UK web traffic, and over half of UK mobile browsing — most businesses never check it",
      "We also cover WhatsApp Business, voice assistant discovery, and property-specific channels",
      "One strategic view of where you exist, where you're invisible, and what to fix first",
    ],
    stat: { value: "~30%", label: "of UK web traffic happens on Safari, not Google" },
    problem: "Plenty of businesses have never checked whether they show up properly on Safari, WhatsApp, voice search, or industry-specific channels.",
    fix: "We check every platform that matters, then hand you one clear, prioritised view of the gaps.",
    growthNote:
      "New platforms emerge and customer habits shift. We continually claim and set up new presence as it becomes relevant, or keep you updated.",
  },
  {
    title: "SEO & ROI Reporting",
    growthOnly: true,
    lead: "A monthly, plain-English answer to \"is this actually working?\"",
    bullets: [
      "No jargon, no vanity metrics — just what's genuinely moving the needle",
      "We show what your organic visibility is actually worth, versus paying per lead through a property portal",
    ],
    problem: "SEO results shift month to month — a single snapshot can't show you the real story.",
    fix: "Every month, we translate what's happening into a clear update, plus what it's worth versus paying per portal lead.",
  },
];

export const addOnsMock: MockItem[] = [
  {
    title: "Video/YouTube SEO Audit",
    lead: "Your video content isn't getting found — because it was never set up to be.",
    bullets: [
      "YouTube is the world's 2nd most-visited website — a natural fit for property video",
      "We check titles, descriptions, tags, and links back to your site and listings",
      "We fix it directly, or hand you a report to action",
    ],
    problem: "Most agencies publishing video get almost no SEO value from it, because the video itself isn't set up to be found.",
    fix: "We review and fix titles, descriptions, tags, and links so video traffic turns into real enquiries.",
    growthNote:
      "Every month, we check any new video the same way, and either implement the fixes or report them to you.",
  },
  {
    title: "Conversion Tracking Setup",
    growthOnly: true,
    lead: "Know exactly which page, listing, or platform is actually generating enquiries.",
    bullets: [
      "Dedicated tracking numbers and tools record exactly where a genuine enquiry came from",
      "Builds a clear, evidence-based picture of what's actually working",
      "Future budget gets focused on what delivers, not spread on a guess",
    ],
    problem: "Without tracking, it's genuinely hard to know which specific piece of work is driving real enquiries.",
    fix: "We set up dedicated tracking so every enquiry is traced back to the exact page, listing, or platform it came from.",
  },
];
