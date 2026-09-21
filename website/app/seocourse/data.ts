export type ChecklistCategory =
  | "Technical Foundations"
  | "On-Page & Content"
  | "Off-Site & Authority"
  | "Local & Business Profile"
  | "Trust & Authority (E-E-A-T)"
  | "Beyond the Basics";

export const checklistCategoryBlurbs: Record<ChecklistCategory, string> = {
  "Technical Foundations": "The groundwork Google needs just to find, load and trust your site at all.",
  "On-Page & Content": "What's actually written on the page, and whether it matches what people search for.",
  "Off-Site & Authority": "What the rest of the internet says about you, beyond your own website.",
  "Local & Business Profile": "Your presence on Google, Bing and Apple Maps — often the first thing anyone sees.",
  "Trust & Authority (E-E-A-T)": "Whether a stranger has a real reason to trust you with a six-figure decision.",
  "Beyond the Basics": "Real estate-specific fixes, proving it's working, and staying ahead of competitors.",
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
  // Technical Foundations
  { item: "Optimise Core Web Vitals / page load speed", category: "Technical Foundations", type: "direct" },
  { item: "Make sure your site actually works on mobile", category: "Technical Foundations", type: "direct" },
  { item: "Enable HTTPS / SSL (the padlock icon)", category: "Technical Foundations", type: "direct" },
  { item: "Keep every page reachable within a few clicks", category: "Technical Foundations", type: "direct" },
  { item: "Submit an XML sitemap to Google", category: "Technical Foundations", type: "prerequisite" },
  { item: "Check robots.txt isn't accidentally blocking your site", category: "Technical Foundations", type: "prerequisite" },
  { item: "Fix duplicate content and broken redirects", category: "Technical Foundations", type: "direct" },
  { item: "Set canonical tags on any duplicate pages", category: "Technical Foundations", type: "direct" },
  { item: "Monitor server uptime", category: "Technical Foundations", type: "direct" },
  { item: "Remove intrusive pop-ups that block the page on arrival", category: "Technical Foundations", type: "direct" },
  { item: "Add schema markup — price, location, business type", category: "Technical Foundations", type: "prerequisite" },

  // On-Page & Content
  { item: "Research the words customers actually search, not your own internal language", category: "On-Page & Content", type: "direct" },
  { item: "Write specific page titles and meta descriptions, not generic ones", category: "On-Page & Content", type: "direct" },
  { item: "Write content from real local knowledge, not generic AI output", category: "On-Page & Content", type: "direct" },
  { item: "Make sure key pages fully answer the question, not just part of it", category: "On-Page & Content", type: "direct" },
  { item: "Break up long pages with subheadings and short paragraphs", category: "On-Page & Content", type: "indirect" },
  { item: "Mention your actual town or area naturally on key pages", category: "On-Page & Content", type: "direct" },
  { item: "Include your phone number directly in meta descriptions", category: "On-Page & Content", type: "indirect" },

  // Off-Site & Authority
  { item: "Earn genuine backlinks from relevant local sites", category: "Off-Site & Authority", type: "direct" },
  { item: "Participate genuinely in local Reddit and forum discussions", category: "Off-Site & Authority", type: "direct" },
  { item: "Match your name, address and phone number exactly everywhere", category: "Off-Site & Authority", type: "direct" },
  { item: "Keep your details consistent across every directory and portal", category: "Off-Site & Authority", type: "direct" },

  // Local & Business Profile
  { item: "Claim and verify your Google Business Profile", category: "Local & Business Profile", type: "prerequisite" },
  { item: "Set the correct category — not the generic default", category: "Local & Business Profile", type: "direct" },
  { item: "Complete every profile section — hours, photos, description", category: "Local & Business Profile", type: "direct" },
  { item: "Post to your Google Business Profile weekly", category: "Local & Business Profile", type: "direct" },
  { item: "Claim Bing Places and Apple Business Connect", category: "Local & Business Profile", type: "prerequisite" },

  // Trust & Authority (E-E-A-T)
  { item: "Write genuine, specific bios for each team member", category: "Trust & Authority (E-E-A-T)", type: "direct" },
  { item: "Ask for reviews at the right moment, every time", category: "Trust & Authority (E-E-A-T)", type: "indirect" },
  { item: "Reply to every review within 48 hours", category: "Trust & Authority (E-E-A-T)", type: "direct" },
  { item: "Never incentivise or gate reviews", category: "Trust & Authority (E-E-A-T)", type: "prerequisite" },

  // Beyond the Basics
  { item: "Add a self-referencing canonical tag to listings synced to portals", category: "Beyond the Basics", type: "direct" },
  { item: "Set up analytics and track where enquiries actually come from", category: "Beyond the Basics", type: "prerequisite" },
  { item: "Regularly check a named competitor for gaps you can exploit", category: "Beyond the Basics", type: "prerequisite" },
];
