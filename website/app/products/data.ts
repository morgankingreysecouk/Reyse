export type IncludedItem = {
  title: string;
  description: string;
};

export type ComparisonRow = {
  service: string;
  foundation: string;
  growth: string;
};

export type Product = {
  slug: string;
  label: string;
  tagline: string;
  description: string;
  price: string;
  priceNote: string;
  included: IncludedItem[];
  comparison?: {
    tierLabels: [string, string];
    rows: ComparisonRow[];
  };
};

export const products: Product[] = [
  {
    slug: "seo",
    label: "SEO",
    tagline: "Get found — on Google, and everywhere AI now searches for you.",
    description:
      "Buyers and tenants increasingly ask ChatGPT, Google's AI Overviews and Perplexity for recommendations before they ever browse a website. Reyse audits and fixes your visibility across all of it — traditional search included — so you're the business they're told about.",
    price: "£450",
    priceNote:
      "Foundation — one-off. Growth adds £199/month for ongoing monitoring, management and reporting.",
    comparison: {
      tierLabels: ["Foundation", "Growth"],
      rows: [
        { service: "Technical Health Audit", foundation: "✓", growth: "✓ (+ ongoing monitoring)" },
        { service: "On-Page Audit", foundation: "✓", growth: "✓ (+ monthly review)" },
        { service: "NAP Consistency Audit", foundation: "✓", growth: "✓ (+ ongoing monitoring)" },
        { service: "Total Visibility Audit", foundation: "✓", growth: "✓ (+ ongoing strategy)" },
        { service: "Profile Setup Audit", foundation: "✓", growth: "✓ (+ ongoing management)" },
        { service: "Content Audit", foundation: "✓", growth: "✓ (+ monthly review)" },
        { service: "Property Schema Template", foundation: "✓", growth: "✓" },
        { service: "Profile Activity", foundation: "✓", growth: "✓" },
        { service: "Local Expert Content", foundation: "✓", growth: "✓" },
        { service: "SEO Reporting", foundation: "✗", growth: "✓" },
        { service: "ROI Report", foundation: "✗", growth: "✓" },
      ],
    },
    included: [
      {
        title: "Full technical audit",
        description:
          "Schema markup, AI-crawler access, page speed and mobile-friendliness — a complete check of what's holding your visibility back.",
      },
      {
        title: "AI search visibility check",
        description:
          "We test real questions against ChatGPT, Google AI Overviews and Perplexity to see whether — and how — your business currently gets mentioned.",
      },
      {
        title: "Schema markup installed",
        description:
          "FAQPage, LocalBusiness, Organization and Service structured data added to your site, so search engines and AI can understand exactly what you do.",
      },
      {
        title: "Google Business Profile built out",
        description:
          "Categories, services, photos, hours and Q&A completed properly — the single biggest factor in local and AI-driven recommendations.",
      },
      {
        title: "Property portal profiles optimised",
        description:
          "Rightmove, Zoopla and OnTheMarket listings reviewed and completed — these portals are often what AI leans on for property recommendations.",
      },
      {
        title: "Business listing consistency fixed",
        description:
          "Your name, address and phone number corrected and matched across Bing Places, Apple Maps, Facebook and Yell — inconsistency quietly kills trust signals.",
      },
      {
        title: "Core FAQ content written",
        description:
          "A set of answer-first pages covering the questions your customers are actually asking AI and Google right now.",
      },
      {
        title: "Baseline visibility report",
        description:
          "A clear \"before\" snapshot of where you stand today, so progress from here is measurable, not a guess.",
      },
    ],
  },
];
