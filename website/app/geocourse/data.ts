export type ChecklistCategory =
  | "Technical Foundations"
  | "On-Page & Content"
  | "Off-Site & Authority"
  | "Entity & Local Presence"
  | "Measurement"
  | "Reputation"
  | "Playing It Smart";

export const checklistCategoryBlurbs: Record<ChecklistCategory, string> = {
  "Technical Foundations": "The groundwork AI crawlers need just to reach, read and trust your site at all.",
  "On-Page & Content": "What's actually written on the page, and whether AI can lift a direct answer from it.",
  "Off-Site & Authority": "What the rest of the internet says about you, beyond your own website.",
  "Entity & Local Presence": "Whether AI recognises you as a real, distinct, established business.",
  Measurement: "Knowing whether any of this is actually working.",
  Reputation: "Catching and correcting what AI gets wrong about you.",
  "Playing It Smart": "Genuine competitive advantages, once the fundamentals are covered.",
};

export type ChecklistItem = {
  item: string;
  category: ChecklistCategory;
  /** confirmed: the AI companies themselves have stated this is a factor.
   *  observed: independent research consistently shows the pattern, even without an official confirmation.
   *  emerging: a genuine, reasonable bet, but not yet backed by solid evidence.
   *  measurement: not a ranking factor itself — the instrument for knowing whether the rest is working. */
  type: "confirmed" | "observed" | "emerging" | "measurement";
};

export const checklistTagStyles: Record<ChecklistItem["type"], string> = {
  confirmed: "bg-accent/15 text-accent-text",
  observed: "bg-ink/10 text-foreground/70",
  emerging: "bg-foreground/10 text-foreground/60",
  measurement: "bg-foreground/10 text-foreground/60",
};

export const checklistTagLabels: Record<ChecklistItem["type"], string> = {
  confirmed: "Confirmed",
  observed: "Strongly Observed",
  emerging: "Emerging",
  measurement: "Measurement",
};

export const checklistItems: ChecklistItem[] = [
  // Technical Foundations
  { item: "Make sure AI crawlers (GPTBot, ClaudeBot, PerplexityBot) can actually reach your site", category: "Technical Foundations", type: "confirmed" },
  { item: "Ensure key content renders without depending on JavaScript", category: "Technical Foundations", type: "confirmed" },
  { item: "Move genuinely useful content out from behind logins and paywalls", category: "Technical Foundations", type: "confirmed" },
  { item: "Add schema markup so AI systems know exactly what your business is", category: "Technical Foundations", type: "confirmed" },
  { item: "Consider adding an llms.txt file", category: "Technical Foundations", type: "emerging" },

  // On-Page & Content
  { item: "Structure content so the direct answer leads, not buried in paragraph three", category: "On-Page & Content", type: "observed" },
  { item: "Keep key pages genuinely updated, not just re-dated", category: "On-Page & Content", type: "observed" },
  { item: "Write comprehensive, original content with real local knowledge", category: "On-Page & Content", type: "observed" },
  { item: "Research every real question an AI tool might be asked about your business", category: "On-Page & Content", type: "emerging" },

  // Off-Site & Authority
  { item: "Mark up your review score with AggregateRating schema", category: "Off-Site & Authority", type: "observed" },
  { item: "Earn genuine mentions across the web, not just backlinks", category: "Off-Site & Authority", type: "observed" },
  { item: "Participate genuinely in Reddit and property forum discussions", category: "Off-Site & Authority", type: "confirmed" },
  { item: "Build real relationships with local journalists", category: "Off-Site & Authority", type: "observed" },

  // Entity & Local Presence
  { item: "Establish yourself as a recognised entity, not just a website", category: "Entity & Local Presence", type: "observed" },
  { item: "Match your name, address and phone number exactly everywhere", category: "Entity & Local Presence", type: "observed" },
  { item: "Complete Google Business Profile, Bing Places and Apple Business Connect", category: "Entity & Local Presence", type: "observed" },

  // Measurement
  { item: "Actually check what ChatGPT, Gemini and Copilot say about you", category: "Measurement", type: "measurement" },
  { item: "Connect AI mentions to real enquiries", category: "Measurement", type: "measurement" },

  // Reputation
  { item: "Catch and correct anything inaccurate an AI tool says about you", category: "Reputation", type: "observed" },

  // Playing It Smart
  { item: "Check where a named competitor is beating you in AI visibility", category: "Playing It Smart", type: "measurement" },
  { item: "Claim new AI platforms and features before they go mainstream", category: "Playing It Smart", type: "emerging" },
];
