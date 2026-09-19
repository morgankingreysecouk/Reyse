export type ChecklistCategory =
  | "Before You Open The Doors"
  | "Launch Day Consistency"
  | "Keeping Every Branch In Sync"
  | "Reporting & Accountability Across Branches"
  | "Protecting What You've Built";

export const checklistCategoryBlurbs: Record<ChecklistCategory, string> = {
  "Before You Open The Doors": "Decided once, inherited automatically by every branch that comes after — the architecture that makes replication actually work.",
  "Launch Day Consistency": "The same process, done properly, every single time a new branch opens — not gradually, not “eventually.”",
  "Keeping Every Branch In Sync": "The network keeps moving after launch day — drift is silent, and it compounds the longer it goes unchecked.",
  "Reporting & Accountability Across Branches": "A regional director scanning fifty branches needs something completely different from a single office manager checking their own patch.",
  "Protecting What You've Built": "None of this is safe from a competitor building the same thing, unless you're deliberate about it.",
};

export type ChecklistItem = {
  item: string;
  category: ChecklistCategory;
  /** foundation: decided once, at the architecture level, and inherited automatically by every branch after.
   *  discipline: has to be executed correctly every single time — per branch, per month — or it quietly drifts.
   *  safeguard: protects the value of what's already been built as the network grows. */
  type: "foundation" | "discipline" | "safeguard";
};

export const checklistTagStyles: Record<ChecklistItem["type"], string> = {
  foundation: "bg-accent/15 text-accent-text",
  discipline: "bg-ink/10 text-foreground/70",
  safeguard: "bg-foreground/10 text-foreground/60",
};

export const checklistTagLabels: Record<ChecklistItem["type"], string> = {
  foundation: "Foundation",
  discipline: "Discipline",
  safeguard: "Safeguard",
};

export const checklistItems: ChecklistItem[] = [
  // Before You Open The Doors
  { item: "Reuse your schema and trust-signal templates — don't rebuild them", category: "Before You Open The Doors", type: "foundation" },
  { item: "Decide your branch page architecture before you need it", category: "Before You Open The Doors", type: "foundation" },
  { item: "Prepare your listing data format before you need it", category: "Before You Open The Doors", type: "foundation" },
  { item: "Build a repeatable Google Business Profile setup checklist", category: "Before You Open The Doors", type: "foundation" },

  // Launch Day Consistency
  { item: "Claim every directory on day one, not eventually", category: "Launch Day Consistency", type: "discipline" },
  { item: "Get trust signals and schema live before the first review lands", category: "Launch Day Consistency", type: "discipline" },
  { item: "Avoid duplicate or thin content across branch pages", category: "Launch Day Consistency", type: "discipline" },

  // Keeping Every Branch In Sync
  { item: "Monitor NAP consistency across the whole network, not just head office", category: "Keeping Every Branch In Sync", type: "discipline" },
  { item: "Catch listing drift before it compounds", category: "Keeping Every Branch In Sync", type: "discipline" },
  { item: "Track new platforms as they emerge, across every branch", category: "Keeping Every Branch In Sync", type: "discipline" },

  // Reporting & Accountability Across Branches
  { item: "Separate branch-level reporting from group-level reporting", category: "Reporting & Accountability Across Branches", type: "safeguard" },
  { item: "Decide whose name is on the report before a franchisee asks", category: "Reporting & Accountability Across Branches", type: "safeguard" },

  // Protecting What You've Built
  { item: "Keep brand presentation consistent across every branch page", category: "Protecting What You've Built", type: "safeguard" },
  { item: "Recognise that nothing here is automatically exclusive to you", category: "Protecting What You've Built", type: "safeguard" },
];
