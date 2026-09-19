export type ChecklistCategory =
  | "Know Who You're Actually Competing With"
  | "Benchmarking Search & AI Visibility"
  | "Benchmarking Reputation & Activity"
  | "Catching Shifts Before They Hit You"
  | "Turning Intelligence Into Action";

export const checklistCategoryBlurbs: Record<ChecklistCategory, string> = {
  "Know Who You're Actually Competing With": "The comparison only means something once it's against the right rivals — not just the biggest name on the high street.",
  "Benchmarking Search & AI Visibility": "Where you actually rank against them on Google, Bing, Apple, and AI — not where you assume you do.",
  "Benchmarking Reputation & Activity": "Reviews and activity move fast — a competitor's momentum can outpace your own without either total looking different at a glance.",
  "Catching Shifts Before They Hit You": "The early-warning layer — spotting a change in demand or platform behaviour before it shows up as fewer enquiries.",
  "Turning Intelligence Into Action": "None of this is worth doing if it just sits in a spreadsheet nobody looks at again.",
};

export type ChecklistItem = {
  item: string;
  category: ChecklistCategory;
  /** benchmark: a comparison point tracked directly against a named competitor.
   *  signal: an early-warning indicator that a shift is coming, before it shows up in your enquiries.
   *  action: turns intelligence already gathered into a concrete decision. */
  type: "benchmark" | "signal" | "action";
};

export const checklistTagStyles: Record<ChecklistItem["type"], string> = {
  benchmark: "bg-accent/15 text-accent-text",
  signal: "bg-ink/10 text-foreground/70",
  action: "bg-foreground/10 text-foreground/60",
};

export const checklistTagLabels: Record<ChecklistItem["type"], string> = {
  benchmark: "Benchmark",
  signal: "Signal",
  action: "Action",
};

export const checklistItems: ChecklistItem[] = [
  // Know Who You're Actually Competing With
  { item: "Identify your real competitive set, not just the biggest name in town", category: "Know Who You're Actually Competing With", type: "benchmark" },
  { item: "Track competitors across every channel that matters, not just Google", category: "Know Who You're Actually Competing With", type: "benchmark" },

  // Benchmarking Search & AI Visibility
  { item: "Compare your Google rankings for the searches that actually matter", category: "Benchmarking Search & AI Visibility", type: "benchmark" },
  { item: "Compare your Bing and Apple visibility against theirs", category: "Benchmarking Search & AI Visibility", type: "benchmark" },
  { item: "Compare who gets named when AI platforms are asked", category: "Benchmarking Search & AI Visibility", type: "benchmark" },
  { item: "Benchmark technical trust signals, not just rankings", category: "Benchmarking Search & AI Visibility", type: "benchmark" },

  // Benchmarking Reputation & Activity
  { item: "Track review count and rating momentum, not just totals", category: "Benchmarking Reputation & Activity", type: "benchmark" },
  { item: "Compare Google Business Profile posting activity", category: "Benchmarking Reputation & Activity", type: "benchmark" },
  { item: "Compare response rate and response speed to reviews", category: "Benchmarking Reputation & Activity", type: "benchmark" },

  // Catching Shifts Before They Hit You
  { item: "Monitor what buyers and sellers are actually searching for", category: "Catching Shifts Before They Hit You", type: "signal" },
  { item: "Watch for AI platforms changing how they answer", category: "Catching Shifts Before They Hit You", type: "signal" },
  { item: "Set alerts on competitor names and area-plus-agent searches", category: "Catching Shifts Before They Hit You", type: "signal" },
  { item: "Watch the local market signals that move demand", category: "Catching Shifts Before They Hit You", type: "signal" },

  // Turning Intelligence Into Action
  { item: "Build one simple monthly scorecard", category: "Turning Intelligence Into Action", type: "action" },
  { item: "Decide what's worth reacting to, and what's just noise", category: "Turning Intelligence Into Action", type: "action" },
];
