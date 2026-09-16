export type ChecklistItem = {
  item: string;
  /** direct: Google's algorithm measures it and uses it as a ranking input.
   *  indirect: it changes customer behaviour, and that behaviour is what Google eventually notices.
   *  prerequisite: doesn't boost ranking, just makes ranking possible at all. */
  type: "direct" | "indirect" | "prerequisite";
};

export const checklistItems: ChecklistItem[] = [
  { item: "Optimise Core Web Vitals / page load speed", type: "direct" },
  { item: "Make sure your site actually works on mobile", type: "direct" },
  { item: "Enable HTTPS / SSL (the padlock icon)", type: "direct" },
  { item: "Keep every page reachable within a few clicks", type: "direct" },
  { item: "Submit an XML sitemap to Google", type: "prerequisite" },
  { item: "Check robots.txt isn't accidentally blocking your site", type: "prerequisite" },
  { item: "Fix duplicate content and broken redirects", type: "direct" },
  { item: "Set canonical tags on any duplicate pages", type: "direct" },
  { item: "Add a self-referencing canonical tag to listings synced to portals", type: "direct" },
  { item: "Monitor server uptime", type: "direct" },
  { item: "Remove intrusive pop-ups that block the page on arrival", type: "direct" },
  { item: "Claim and verify your Google Business Profile", type: "prerequisite" },
  { item: "Set the correct category — not the generic default", type: "direct" },
  { item: "Match your name, address and phone number exactly everywhere", type: "direct" },
  { item: "Complete every profile section — hours, photos, description", type: "direct" },
  { item: "Turn on profile messaging and answer quickly", type: "indirect" },
  { item: "Post to your Google Business Profile monthly", type: "direct" },
  { item: "Build a dedicated page for each town or area you cover", type: "direct" },
  { item: "Add schema markup — price, location, business type", type: "prerequisite" },
  { item: "Research the words customers actually search, not your own internal language", type: "direct" },
  { item: "Write specific page titles and meta descriptions, not generic ones", type: "direct" },
  { item: "Keep your details consistent across every directory and portal", type: "direct" },
  { item: "Claim Apple Business Connect", type: "prerequisite" },
  { item: "Write content from real local knowledge, not generic AI output", type: "direct" },
  { item: "Make sure key pages fully answer the question, not just part of it", type: "direct" },
  { item: "Break up long pages with subheadings and short paragraphs", type: "indirect" },
  { item: "Mention your actual town or area naturally on key pages", type: "direct" },
  { item: "Include your phone number directly in meta descriptions", type: "indirect" },
  { item: "Publish fresh content at least monthly", type: "indirect" },
  { item: "Ask for reviews at the right moment, every time", type: "indirect" },
  { item: "Reply to every review within 48 hours", type: "direct" },
  { item: "Never incentivise or gate reviews", type: "prerequisite" },
];
