import type { ContentBlock } from "../blog/data";

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  readingTime: string;
  body: ContentBlock[];
};

export const guides: Guide[] = [
  {
    slug: "google-business-profile-checklist",
    title: "Set up Google Business Profile properly: a step-by-step checklist",
    excerpt:
      "Not the mistakes to avoid — the actual steps, in order, to get your profile fully correct. Twenty minutes, no cost, do it yourself right now.",
    readingTime: "7 min read",
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
      { type: "h2", text: "7. Set a recurring calendar reminder" },
      {
        type: "p",
        text: "This isn't a set-and-forget job. Put a monthly reminder in your calendar to check hours, add a post, and reply to any new reviews. Twenty minutes now, five minutes a month after that.",
      },
    ],
  },
  {
    slug: "how-to-actually-get-reviews",
    title: "How to actually get reviews (not just wait for them)",
    excerpt:
      "The exact moments to ask, the wording that works, and why waiting for reviews to happen on their own means you'll always have fewer than the agent down the road.",
    readingTime: "5 min read",
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
      { type: "h2", text: "Ask everyone, not just the obviously happy ones" },
      {
        type: "p",
        text: "It's tempting to only ask clients you're confident were delighted. But a broader spread of reviews — including calm, straightforward transactions, not just the dramatic wins — reads as more genuine to both people and to Google than a suspiciously perfect run of five-star raves clustered around one property type.",
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
    slug: "check-if-ai-recommends-you",
    title: "Check if AI actually recommends you — in 10 minutes",
    excerpt:
      "The exact prompts to run across ChatGPT, Gemini, and Copilot, what a good answer looks like versus a bad one, and what each failure mode actually means.",
    readingTime: "6 min read",
    body: [
      {
        type: "p",
        text: "This takes ten minutes and costs nothing. Most agents have simply never checked. Here's exactly how to do it properly, and what the answer you get back actually tells you.",
      },
      { type: "h2", text: "Run these four prompts" },
      {
        type: "list",
        items: [
          "\"Who is the best estate agent in [your town]?\" — the direct-recommendation test.",
          "\"I'm selling a house in [your town], which agents should I contact?\" — the comparison-shopping test, closer to how people actually use AI.",
          "\"What do people say about [your business name]?\" — tests whether AI has anything specific to say about you at all, good or bad.",
          "\"Best letting agent near [nearest university or train station]\" — tests a real, high-intent local search pattern, not just your business name.",
        ],
      },
      {
        type: "p",
        text: "Run each one on ChatGPT, Google's Gemini, and Microsoft Copilot separately — they draw on different sources and will often give different answers, so checking only one tells you less than you'd think.",
      },
      { type: "h2", text: "Reading the result" },
      {
        type: "list",
        items: [
          "Named and recommended with accurate details — you're in good shape for this specific query; repeat periodically, this isn't permanent.",
          "Named, but with wrong or outdated details (an old address, a closed branch, an incorrect phone number) — AI is citing a stale source somewhere; usually fixable by correcting and refreshing your Google Business Profile and website.",
          "Not mentioned at all, while competitors are — this is the common result, and it means one of a few fixable things: your site may be blocking AI crawlers, your content isn't structured in a way AI tools can confidently lift, or there simply isn't enough consistent, recent information about you across the web for AI to feel confident recommending you.",
          "The AI states it doesn't have enough information to recommend anyone specific — worth noting the exact prompt and trying again in a few weeks once you've made changes, to track whether you've moved the needle.",
        ],
      },
      { type: "h2", text: "Do this monthly, not once" },
      {
        type: "p",
        text: "AI answers shift as models update and as fresh content gets indexed. A one-off check tells you where you stand today; a monthly one tells you whether what you're doing is actually working.",
      },
    ],
  },
  {
    slug: "local-seo-checklist",
    title: "A basic local SEO checklist for estate and letting agents",
    excerpt:
      "The specific, checkable fundamentals — not vague advice to 'improve your SEO'. Work through this list once and you're ahead of most agents in your area.",
    readingTime: "6 min read",
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
          "Schema markup (structured data) identifying you as a RealEstateAgent, including your service area, so search engines and AI tools have a machine-readable fact sheet about your business rather than having to guess from prose.",
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
          "Reviews replied to within 48 hours, every time — covered in full in our reviews guide.",
          "A quarterly re-check of your Google Business Profile hours, category, and photos — these drift out of date more often than agents expect.",
        ],
      },
      {
        type: "p",
        text: "None of this is exotic. It's the fundamentals, done consistently, which is exactly why most agents who skip it fall behind the ones who don't.",
      },
    ],
  },
];
