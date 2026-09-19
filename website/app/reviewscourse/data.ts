export type ChecklistCategory =
  | "Asking For Reviews"
  | "Responding To Reviews"
  | "Every Platform That Counts"
  | "Monitoring & Reporting"
  | "Ranking & Trust Signals"
  | "Playing It Smart";

export const checklistCategoryBlurbs: Record<ChecklistCategory, string> = {
  "Asking For Reviews": "Keeping a steady, recent supply coming in — not just reacting to whatever shows up.",
  "Responding To Reviews": "What you say back, and how fast, once a review actually lands.",
  "Every Platform That Counts": "Reviews don't just live on Google anymore — Bing, Apple, and others all pull from somewhere.",
  "Monitoring & Reporting": "Knowing exactly where you stand, and catching patterns before they become public problems.",
  "Ranking & Trust Signals": "How your reviews directly feed both Google's ranking and what AI tools decide to recommend.",
  "Playing It Smart": "Genuine competitive advantages, once the fundamentals are covered.",
};

export type ChecklistItem = {
  item: string;
  category: ChecklistCategory;
  /** direct: Google's algorithm measures it and uses it as a ranking input.
   *  indirect: it changes customer behaviour, and that behaviour is what Google eventually notices.
   *  prerequisite: doesn't boost ranking, just makes ranking possible at all. */
  type: "direct" | "indirect" | "prerequisite";
};

export const checklistTagStyles: Record<ChecklistItem["type"], string> = {
  direct: "bg-accent/15 text-accent-text",
  indirect: "bg-ink/10 text-foreground/70",
  prerequisite: "bg-foreground/10 text-foreground/60",
};

export const checklistTagLabels: Record<ChecklistItem["type"], string> = {
  direct: "Direct",
  indirect: "Indirect",
  prerequisite: "Prerequisite",
};

export const checklistItems: ChecklistItem[] = [
  // Asking For Reviews
  { item: "Ask for a review at the single best moment, not randomly", category: "Asking For Reviews", type: "indirect" },
  { item: "Send the request within 24 hours, while it's fresh", category: "Asking For Reviews", type: "indirect" },
  { item: "Automatically follow up once if they don't respond", category: "Asking For Reviews", type: "indirect" },
  { item: "Make leaving a review genuinely one-click easy", category: "Asking For Reviews", type: "indirect" },

  // Responding To Reviews
  { item: "Reply to every review, not just the negative ones", category: "Responding To Reviews", type: "direct" },
  { item: "Respond within a few hours wherever you can", category: "Responding To Reviews", type: "indirect" },
  { item: "Have a real process for negative reviews, not a defensive copy-paste", category: "Responding To Reviews", type: "indirect" },
  { item: "Never incentivise or gate reviews", category: "Responding To Reviews", type: "prerequisite" },
  { item: "Know when to move a conversation offline", category: "Responding To Reviews", type: "indirect" },

  // Every Platform That Counts
  { item: "Claim and actively manage your Google Business Profile reviews", category: "Every Platform That Counts", type: "prerequisite" },
  { item: "Don't ignore Bing's own review data", category: "Every Platform That Counts", type: "direct" },
  { item: "Understand Apple Business Connect inherits from Yelp and Tripadvisor", category: "Every Platform That Counts", type: "direct" },
  { item: "Keep Trustpilot and Facebook reviews current, not abandoned", category: "Every Platform That Counts", type: "indirect" },

  // Monitoring & Reporting
  { item: "Turn on instant notifications so no review sits unseen", category: "Monitoring & Reporting", type: "prerequisite" },
  { item: "Track your response rate specifically, not just your star rating", category: "Monitoring & Reporting", type: "prerequisite" },
  { item: "Watch review recency, not just total review count", category: "Monitoring & Reporting", type: "direct" },
  { item: "Spot recurring themes before they become a public pattern", category: "Monitoring & Reporting", type: "indirect" },
  { item: "Set up same-day alerts for a sudden negative cluster", category: "Monitoring & Reporting", type: "prerequisite" },

  // Ranking & Trust Signals
  { item: "Make sure your review count and rating data reaches AI tools, not just Google", category: "Ranking & Trust Signals", type: "direct" },

  // Playing It Smart
  { item: "Regularly check a named competitor's review activity for gaps you can exploit", category: "Playing It Smart", type: "prerequisite" },
];
