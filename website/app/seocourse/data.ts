import type { ContentBlock } from "../blog/data";

export type CourseModule = {
  id: string;
  number: number;
  title: string;
  summary: string;
  readingTime: string;
  body: ContentBlock[];
};

export type ChecklistItem = {
  item: string;
  /** direct: Google's algorithm measures it and uses it as a ranking input.
   *  indirect: it changes customer behaviour, and that behaviour is what Google eventually notices.
   *  prerequisite: doesn't boost ranking, just makes ranking possible at all. */
  type: "direct" | "indirect" | "prerequisite";
};

export const checklistItems: ChecklistItem[] = [
  { item: "Claim and verify your Google Business Profile", type: "prerequisite" },
  { item: "Set the correct category — not the generic default", type: "direct" },
  { item: "Match your name, address and phone number exactly everywhere", type: "direct" },
  { item: "Complete every profile section — hours, photos, description", type: "direct" },
  { item: "Turn on profile messaging and answer quickly", type: "indirect" },
  { item: "Post to your Google Business Profile monthly", type: "direct" },
  { item: "Build a dedicated page for each town or area you cover", type: "direct" },
  { item: "Add schema markup (structured data)", type: "prerequisite" },
  { item: "Write page titles with your service and location together", type: "direct" },
  { item: "Keep your details consistent across every directory and portal", type: "direct" },
  { item: "Claim Apple Business Connect", type: "prerequisite" },
  { item: "Publish fresh content at least monthly", type: "indirect" },
  { item: "Ask for reviews at the right moment, every time", type: "indirect" },
  { item: "Reply to every review within 48 hours", type: "direct" },
  { item: "Never incentivise or gate reviews", type: "prerequisite" },
];

export const courseModules: CourseModule[] = [
  {
    id: "what-seo-actually-means",
    number: 1,
    title: "What SEO actually means for your agency",
    summary: "The short version, without the jargon — what you're actually trying to achieve, and why it's not optional anymore.",
    readingTime: "5 min",
    body: [
      {
        type: "p",
        text: "SEO — search engine optimisation — is the work of making your website easy for search engines to find, understand, and trust, so it appears higher when someone searches for something related to your business. That's the whole idea. Everything in this course is in service of that one goal.",
      },
      {
        type: "p",
        text: "For an estate or letting agent, this isn't abstract. It's the difference between being the name a seller is told when they ask \"best estate agent in [town]\", and not existing in that conversation at all. Nearly a third of UK web traffic happens on Safari, not Google — and most agencies have never even checked whether they show up there, let alone optimised for it.",
      },
      {
        type: "h2",
        text: "Why this matters more than it used to",
      },
      {
        type: "p",
        text: "The top 20% of local businesses now capture 68% of all search visibility — a gap that keeps widening for anyone not actively working on it, not shrinking. That's not a reason to panic. It's entirely fixable, by one person, without a marketing degree or a developer on staff — which is exactly what the rest of this course walks through.",
      },
      {
        type: "h2",
        text: "What this course actually covers",
      },
      {
        type: "list",
        items: [
          "Getting your Google Business Profile — the single highest-leverage thing you can do — fully, properly set up.",
          "Making sure your name, address and phone number are consistent everywhere, which is a measured ranking factor most agencies get quietly wrong.",
          "The specific, checkable local SEO fundamentals beyond your Google profile.",
          "Turning reviews into a genuine ranking advantage instead of an afterthought.",
          "A 30-day plan for putting all of it into practice without it eating your week.",
        ],
      },
      {
        type: "p",
        text: "Work through the modules in order — each one builds on assumptions the last one covers. Almost none of it requires code or a developer — the one exception is flagged clearly when it comes up. It requires about two hours total, spread however suits you.",
      },
    ],
  },
  {
    id: "google-business-profile",
    number: 2,
    title: "Google Business Profile, properly",
    summary: "Not the mistakes to avoid — the actual steps, in order, to get your profile fully correct. Twenty minutes, no cost.",
    readingTime: "7 min",
    body: [
      {
        type: "p",
        text: "This is the single highest-leverage twenty minutes available to an estate or letting agent's online presence, and it's free. Work through this in order — each step below builds on the last.",
      },
      { type: "h2", text: "1. Claim and verify" },
      {
        type: "p",
        text: "Search your business name on Google. If a profile already exists unclaimed, claim it at business.google.com — don't create a duplicate, which splits your reviews and confuses your address across two listings. Verification is usually by postcard (5–14 days) or, if Google offers it for your listing, by phone or video call instantly.",
      },
      { type: "h2", text: "2. Get your category right" },
      {
        type: "p",
        text: "Your primary category should be \"Real estate agency\" or \"Real estate agents\" for sales, or \"Real estate rental agency\" for lettings — not the generic \"Real estate consultant\" many agents default to. Category is one of the strongest local ranking factors Google uses, and the wrong one quietly caps how far you can rank regardless of everything else you do right.",
      },
      { type: "h2", text: "3. Match your name, address and phone number exactly everywhere" },
      {
        type: "list",
        items: [
          "Your business name on Google must match your actual trading name — not a keyword-stuffed version like \"Reyse Estate Agents Manchester Best Prices,\" which risks a suspension.",
          "Your address format needs to match exactly across Google, your website footer, Bing Places, and Apple Business Connect — \"Rd\" vs \"Road\", a missing flat number, anything inconsistent is a measured ranking factor against you.",
          "One phone number, used consistently everywhere — not a tracking number on your website that differs from the one on your Google profile.",
        ],
      },
      { type: "h2", text: "4. Fill in every section, not just the required ones" },
      {
        type: "p",
        text: "Opening hours (including holiday hours — set these before each bank holiday, not after), service area, a full business description using natural language a buyer or tenant would actually search, and at least 10 photos: your office frontage, your team, and recent successful lettings or sales if you have permission to share them. An empty section is a small, compounding signal that the profile isn't actively managed.",
      },
      { type: "h2", text: "5. Turn on messaging and set a real response-time expectation" },
      {
        type: "p",
        text: "Google shows prospective clients your typical response time. If it's currently unset or slow, that's visible before they ever call you. Commit to checking messages daily, minimum.",
      },
      { type: "h2", text: "6. Post monthly, at minimum" },
      {
        type: "p",
        text: "Google Posts (new listings, a recent sale, an open house) don't need to be elaborate — but a profile with no posts in the last six months reads as inactive to both Google's algorithm and to a person deciding whether to trust you.",
      },
      {
        type: "p",
        text: "Put a monthly reminder in your calendar to check hours, add a post, and reply to any new reviews. Twenty minutes now, five minutes a month after that — and you're already ahead of most agencies in your area.",
      },
    ],
  },
  {
    id: "local-seo-checklist",
    number: 3,
    title: "The local SEO checklist",
    summary: "The specific, checkable fundamentals beyond your Google profile — not vague advice to 'improve your SEO'.",
    readingTime: "6 min",
    body: [
      {
        type: "p",
        text: "Local SEO for an estate or letting agency isn't complicated, but it is specific. This is the actual checklist — work through it once, then revisit quarterly.",
      },
      { type: "h2", text: "On your website" },
      {
        type: "list",
        items: [
          "A dedicated page for each town or area you actively cover, not just one generic \"areas we cover\" page — \"letting agent in [town]\" needs its own page to realistically rank for that exact search.",
          "Your business name, address and phone number in the footer of every page, in plain text — not only inside an image or a contact form, which search engines can't reliably read.",
          "Schema markup (structured data) identifying you as a RealEstateAgent, including your service area, so search engines and AI tools have a machine-readable fact sheet about your business rather than having to guess from prose. This one usually needs a developer — it's the one item on this list worth getting help with if you don't have technical support in-house.",
          "Page titles that include both your service and your location — \"Letting Agent in [Town] | [Your Business Name]\", not just your business name alone.",
        ],
      },
      { type: "h2", text: "Off your website" },
      {
        type: "list",
        items: [
          "Consistent name, address and phone number across Google Business Profile, Bing Places, Apple Business Connect, and any property portal listings (Rightmove, Zoopla) — mismatches are a measured ranking factor against you.",
          "Apple Business Connect claimed — over half of UK mobile browsing happens on Safari/iPhone, and most agents have never claimed this free listing at all, making it one of the easiest wins currently available.",
          "At least one local citation or mention from a genuinely local source — a chamber of commerce listing, a local news mention, a sponsorship — these carry more local-relevance weight than generic national directories.",
        ],
      },
      { type: "h2", text: "Ongoing, not one-off" },
      {
        type: "list",
        items: [
          "Fresh content at least monthly — a recent-sales update, a local market note, anything showing the site is actively maintained rather than static.",
          "Reviews replied to within 48 hours, every time — covered in full in Module 4.",
          "A quarterly re-check of your Google Business Profile hours, category, and photos — these drift out of date more often than agents expect.",
        ],
      },
      {
        type: "p",
        text: "None of this is exotic. It's the fundamentals, done consistently, which is exactly why most agents who skip it fall behind the ones who don't.",
      },
    ],
  },
  {
    id: "reviews-ranking-factor",
    number: 4,
    title: "Reviews: the ranking factor everyone ignores",
    summary: "The exact moments to ask, the wording that works, and why waiting for reviews to happen on their own means you'll always have fewer than the agent down the road.",
    readingTime: "5 min",
    body: [
      {
        type: "p",
        text: "Most agents ask for reviews once, awkwardly, right after completion — if they ask at all. Reviews that arrive this way are inconsistent and rare, because you're relying on the client to remember and bother, weeks after the moment that actually mattered to them has passed.",
      },
      { type: "h2", text: "Ask at the moment of genuine relief, not after" },
      {
        type: "p",
        text: "The best moment to ask isn't completion day — it's the moment a specific problem gets solved. Keys successfully handed over. An offer accepted after a stressful chain. A tenant's maintenance issue fixed fast. Ask within that same conversation, while the relief is still fresh, not in a follow-up email a fortnight later.",
      },
      { type: "h2", text: "Make it a two-line ask, not a favour" },
      {
        type: "list",
        items: [
          "\"Glad we got that sorted for you. If you've got 30 seconds, a Google review genuinely helps other people finding us the same way you did — here's the link.\" Specific, short, and honest about why it matters.",
          "Send the direct review link, not a general \"search us on Google\" instruction — every extra step someone has to take loses you a chunk of the people who would have said yes.",
          "Text it, don't just say it out loud. A verbal \"leave us a review\" is forgotten within the hour; a link in a text message can be acted on immediately.",
        ],
      },
      { type: "h2", text: "Never offer an incentive for a review" },
      {
        type: "p",
        text: "Google's guidelines explicitly prohibit review gating and incentivised reviews, and platforms do remove reviews they detect were paid for or incentivised — so beyond the ethics, it's a genuine risk to the reviews you've already earned.",
      },
      { type: "h2", text: "Reply to every single one, good or bad, within 48 hours" },
      {
        type: "p",
        text: "Response activity itself is a confirmed local ranking factor, separate from the star rating. A short, specific, personal reply to every review — not a copy-pasted \"Thank you for your feedback!\" — signals an actively managed business to both Google and to the next person reading.",
      },
    ],
  },
  {
    id: "30-day-action-plan",
    number: 5,
    title: "Your 30-day action plan",
    summary: "Everything in this course, laid out as one sequence you can actually follow without it eating your week.",
    readingTime: "3 min",
    body: [
      {
        type: "p",
        text: "Four modules is still a lot to hold in your head at once. Here's the same material laid out as one plan, so you know exactly what to do and when.",
      },
      { type: "h2", text: "Week 1" },
      {
        type: "list",
        items: [
          "Claim and fully complete your Google Business Profile (Module 2) — category, hours, photos, description, messaging.",
          "Start posting to it monthly — set the recurring reminder now, not once you remember to.",
        ],
      },
      { type: "h2", text: "Week 2" },
      {
        type: "list",
        items: [
          "Check name/address/phone consistency across Google, Bing Places, Apple Business Connect, and your website footer (Module 3) — fix any mismatches you find.",
          "Claim Apple Business Connect if you haven't already — free, five minutes, and most agents skip it entirely.",
        ],
      },
      { type: "h2", text: "Week 3" },
      {
        type: "list",
        items: [
          "Start asking for reviews at the right moment, every time, using the wording from Module 4.",
          "Reply to every existing review sitting unanswered — clear the backlog once, then keep up with new ones as they come in.",
        ],
      },
      { type: "h2", text: "Week 4" },
      {
        type: "list",
        items: [
          "Add the dedicated per-town pages and page titles from Module 3 if you haven't yet — this is the one most agents put off, precisely because it's the one with no shortcut.",
          "Set the recurring calendar reminders that keep all of this going — monthly for your Google profile, ongoing for reviews, quarterly for a full recheck.",
        ],
      },
      {
        type: "p",
        text: "That's the whole course, done. If at any point this feels like more than you want to own yourself — some of it, or all of it — that's exactly what our Done For You service exists for: the same work, just implemented and kept current by us instead of you.",
      },
    ],
  },
];
