export type IncludedItem = {
  title: string;
  description: string;
  /** "On Growth" extension paragraph, for items Growth builds on rather than just repeats. */
  growthNote?: string;
  /** Short muted note for one-time builds that don't have an ongoing Growth narrative. */
  tierNote?: string;
  /** True for items that only exist on Growth, with no Foundation equivalent. */
  growthOnly?: boolean;
};

export type AddOn = {
  title: string;
  description: string;
  note?: string;
  growthOnly?: boolean;
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
  addOns?: AddOn[];
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
        title: "Technical Health Audit",
        description:
          "Before anything else, we make sure the foundations are solid. A slow, clunky, or hard-to-navigate website loses buyers, sellers, and tenants before they've even had a chance to browse — and search engines notice too, ranking sluggish sites lower regardless of how good the content is. We check your site works smoothly on every device, loads quickly, and has no hidden errors quietly turning visitors away — putting right what we find as part of this initial pass, and reviewing your enquiry and valuation forms specifically for people dropping out before completing them. Where something needs ongoing attention rather than a one-off fix, we tell you exactly what it is and how to stay on top of it.",
        growthNote:
          "A website is never \"finished\" — search engines regularly change how they evaluate site speed and mobile performance, browsers update, plugins age, and every new page or property listing you add is a new opportunity for something to quietly break. We monitor your site continuously, checking every change, every new listing, and every new page as it goes live — catching slow pages, broken links, and fresh errors before they cost you visibility, rather than discovering them months later in a one-off check.",
      },
      {
        title: "On-Page Audit",
        description:
          "Every page on your website is a chance to be found by the exact person searching for what you offer — but only if it's written and structured in a way search engines can understand. We review every page, fix what's holding it back, and make sure it clearly signals what you do and where you operate — so the right buyers, sellers, and tenants find you first. For anything that needs a bigger content rework, we'll tell you exactly what to prioritise next.",
        growthNote:
          "What counts as \"well-optimised\" shifts over time as search engines refine how they read and rank content, and your website itself keeps growing — new property listings, new pages, updated services. We review every new page and listing as it's published, giving it the same scrutiny as your original site, so nothing new is left underperforming, and nothing already working slips out of date as the rules change around it.",
      },
      {
        title: "NAP Consistency Audit",
        description:
          "\"NAP\" stands for Name, Address, and Phone number — the core details that identify your business online. We check these match exactly everywhere your business appears — your website, Google, Bing, Apple, review sites, and industry directories — correcting every mismatch we find, because even small inconsistencies quietly damage the trust search engines and AI need to recommend you with confidence. Any listing we can't fix directly, we hand you clear instructions for getting corrected.",
        growthNote:
          "Consistency isn't a one-time fix — directories change their formatting, listings get updated in one place and forgotten in another, and new platforms emerge that need the same details added correctly from day one. We keep checking every listing every month, so your details never quietly drift out of sync without you knowing.",
      },
      {
        title: "Total Visibility Audit",
        description:
          "Most agencies focus entirely on Google and stop there — but buyers and sellers are searching across many different platforms and devices, and each one works differently. We review your presence everywhere those searches happen — Google, Bing, Apple, and beyond — fixing the gaps we can close immediately, and giving you a clear, prioritised plan for the rest, so you know exactly where you're visible, where you're not, and what to do about it.",
        growthNote:
          "The platforms themselves are constantly evolving — new features get added, algorithms are updated, and search habits shift as people adopt new tools (AI search being the clearest recent example). A strategy that works today can quietly lose effectiveness within months if nobody's watching. We continually revisit and adjust your strategy across every platform, so you're never left behind as the ground shifts beneath you.",
      },
      {
        title: "Profile Setup Audit",
        description:
          "For most local searches, your business profile is the very first impression a potential customer gets — often before they've even visited your website. We review and properly set up your presence on Google Business Profile, Bing Places, and Apple Business Connect — including Apple, one of the easiest, least competitive opportunities available right now since most property businesses haven't claimed theirs at all. Once everything's set up properly, we'll show you exactly what to keep updated yourself to keep each profile working in your favour.",
        growthNote:
          "A profile isn't something you set up once and forget — it needs fresh photos, accurate current hours, correct services, and an actively managed public Q&A section, all of which naturally go stale over time if left untouched. We actively manage all three profiles every month, keeping them accurate and current, so your visibility doesn't quietly decay the way an unmaintained profile inevitably does.",
      },
      {
        title: "Content Audit",
        description:
          "We review your website's content to see what's working, what's outdated, and what's missing — including a sample of your live property listings and any local market content you already have — fixing or refreshing what we can as part of this initial pass, and giving you a clear list of what to update next and why.",
        growthNote:
          "What people search for changes constantly — a shift in the market, new legislation, a seasonal change in demand — and content that performed well last year can quietly become irrelevant or outdated. Each month, we review your content and a sample of your live listings, refining what's underperforming, and we track what's rising in relevance to your business, flagging genuine opportunities to you as they happen rather than after the moment's passed.",
      },
      {
        title: "Property Schema Template",
        description:
          "\"Schema\" is a hidden layer of code that clearly labels the details of your property listings — price, bedrooms, property type, location — in a format search engines and AI tools can read with total accuracy, rather than guessing. We build this into how your listings are published, so every property you list is automatically presented in the clearest, most search-friendly way possible, with no extra work required from you. We'll also show you exactly how it's set up, so you know what to check if you ever change how listings are published.",
        tierNote:
          "This is a one-time build: once the template is in place, it applies automatically to every future listing — there's nothing to redo, though it's included and maintained as part of Growth to make sure it keeps working correctly as your website evolves.",
      },
      {
        title: "Profile Activity",
        description:
          "Google and Apple both reward business profiles that look genuinely active, and quietly downrank ones that look abandoned. We build you a simple, ready-made system for posting quick updates to your profiles — a new instruction, a seasonal message — so staying visibly active never becomes a burden. We'll talk you through how and when to use it, so keeping your profiles active going forward is entirely in your hands.",
        tierNote:
          "This is a one-time build, giving you a tool you can keep using indefinitely without needing to come back to us each time.",
      },
      {
        title: "Local Expert Content",
        description:
          "Trust is built long before someone picks up the phone. We create dedicated area guides for the towns you cover, genuine local sold-price data, and credible profile pages for your team — turning your website into a real local authority, not just a listings page. We'll also flag the areas most worth expanding into next, if you want to take it further yourself.",
        growthNote:
          "This initial content is the foundation — it's then kept current and expanded through your monthly Content Review, since local data and team details naturally change over time and stale information undermines the very trust this content is meant to build.",
      },
      {
        title: "SEO Reporting",
        description:
          "SEO results build gradually and shift month to month as search engines, competitors, and your own website all keep moving — a single snapshot can't show you that story. Every month, we translate what's actually happening into a clear, plain-English update — no jargon, no vanity metrics — so you always know exactly where things stand and what's genuinely moving the needle.",
        growthOnly: true,
      },
      {
        title: "ROI Report",
        description:
          "Ultimately, this all needs to justify itself financially, and that value shifts over time as your visibility grows. Each month, we show you, in real terms, what your organic visibility is worth compared to what you'd otherwise be paying per lead through a property portal — making the value of this work tangible and current, not just theoretical.",
        growthOnly: true,
      },
    ],
    addOns: [
      {
        title: "Video/YouTube SEO Audit",
        description:
          "YouTube is the second-largest search engine in the world, and property is one of the most natural fits for video — walkthroughs, \"moving to the area\" guides, agent introductions. But most agencies publishing video get almost no value from it, because the video itself is never actually set up to be found. We review your existing video content and check whether the titles, descriptions, and tags are properly written around what people actually search for, whether the video is linked correctly back to your website and relevant listings, and whether it's using the kind of thumbnails and structure that get clicked on rather than scrolled past. The result: instead of views quietly happening in isolation, your video content starts working alongside the rest of your SEO — driving genuine traffic and enquiries, not just watch time.",
        note: "Only relevant if you're already producing video content — we're not creating video for you here, just making sure what you have is actually being found.",
      },
      {
        title: "Conversion Tracking Setup",
        description:
          "Everything else in this offer is designed to get more of the right people to your website and profiles — but without proper tracking, it's genuinely difficult to know which specific piece of work is actually driving real phone calls and enquiries versus just traffic. We set up dedicated tracking numbers and tools that record exactly which page, listing, or platform a genuine enquiry came from — so if a call comes in, you can see it was generated by, say, your Google Business Profile rather than your Bing listing, or a specific area guide page rather than your homepage. Over time, this builds a clear, evidence-based picture of exactly what's working best for your business specifically, so future effort and any additional budget can be focused precisely where it delivers the strongest return, rather than spread evenly across everything on a guess.",
        growthOnly: true,
      },
    ],
  },
  {
    slug: "geo",
    label: "GEO",
    tagline:
      "Get recommended — by ChatGPT, Gemini, Copilot, Siri, and every AI your customers now ask.",
    description:
      "Buyers and sellers increasingly ask ChatGPT, Gemini, and Perplexity who to trust before they ever browse a website — and it's not just chatbots. When someone does a normal Google search, an AI-generated answer, powered by Gemini, now often appears right above the regular results. The same is true on Microsoft Edge, where Copilot answers are built directly into everyday Bing searches, and on iPhone, where Siri and Spotlight increasingly answer questions directly rather than just pointing to a website. Reyse audits, fixes, and actively manages your visibility across all of it — every AI surface your customers might already be asking, whether they realise it or not — so you're the business they're told about.",
    price: "£950",
    priceNote:
      "Foundation — one-off. Growth adds £4,000/month for ongoing implementation, entity building, and multi-branch AI visibility.",
    comparison: {
      tierLabels: ["Foundation", "Growth"],
      rows: [
        { service: "AI Visibility Audit & Fix", foundation: "✓ Included", growth: "✓ Included (+ ongoing implementation & reporting)" },
        { service: "Answer-Ready Content Audit & Fix", foundation: "✓ Included", growth: "✓ Included (+ monthly review & rewriting)" },
        { service: "Freshness Audit & Fix", foundation: "✓ Included", growth: "✓ Included (+ ongoing monitoring)" },
        { service: "AI Trust Signals", foundation: "✓ Included", growth: "✓ Included" },
        { service: "AI Query Mapping", foundation: "✗ Not included", growth: "✓ Included" },
        { service: "Knowledge Panel & Entity Optimisation", foundation: "✗ Not included", growth: "✓ Included" },
        { service: "AI Reputation Response", foundation: "✗ Not included", growth: "✓ Included" },
        { service: "Full-Funnel Attribution", foundation: "✗ Not included", growth: "✓ Included" },
      ],
    },
    included: [
      {
        title: "AI Visibility Audit & Fix",
        description:
          "When someone asks ChatGPT, Gemini, or Perplexity \"best estate agent in [town]\" — or simply searches on Google, Bing, or their iPhone and gets an AI-generated answer instead of a list of links — only a handful of businesses ever get named. We test these exact real-world questions and searches across every major AI surface — ChatGPT, Google's Gemini-powered AI Overviews, Microsoft's Copilot, and Apple's Siri and Spotlight — fix what we can put right immediately, and give you a clear, practical guide for keeping your visibility strong going forward on your own.",
        growthNote:
          "Rather than handing you a guide and leaving you to keep on top of it, we do it for you — implementing every fix, then re-testing every month across all four ecosystems, tracking whether your position and how you compare to your closest local competitors is improving, holding steady, or slipping, and reporting it back to you in plain terms.",
      },
      {
        title: "Answer-Ready Content Audit & Fix",
        description:
          "AI tools don't browse your website the way a person does — they scan for content that answers a specific question clearly and directly, then lift it straight into their response, whether that's inside a chatbot, Google's AI Overview box, or a spoken answer from Siri. We review your key pages, rewrite the most important ones ourselves as part of Foundation, and give you a clear guide for structuring anything new you publish going forward.",
        growthNote:
          "We keep doing this for you — as you publish new pages and listings, we review and rewrite each one every month, keeping everything genuinely extractable across every AI surface, not just readable by a person.",
      },
      {
        title: "Freshness Audit & Fix",
        description:
          "AI models consistently favour recently updated content and can quietly stop citing pages that haven't been touched in months, even if they ranked well before — this holds true whether it's ChatGPT, Gemini, or Copilot doing the citing. We check how current your key pages are, refresh the most important ones as part of Foundation, and leave you with a clear plan for keeping the rest current yourself.",
        growthNote:
          "We keep everything current for you, every month, so your most important pages never quietly slip past the point where any of these AI systems stop trusting them.",
      },
      {
        title: "AI Trust Signals",
        description:
          "Beyond what a human reads, AI tools rely on a hidden layer of structured data — including a dedicated llm.txt file, a document written specifically for AI crawlers — to understand exactly what your business is, what it does, and where. This same structured data is what Google's Gemini, Microsoft's Copilot, and Apple's Siri all draw from when deciding what to say about you. We build this directly into your website on Foundation, giving every AI system a clean, unambiguous source to draw from.",
        growthNote:
          "We keep it properly maintained as your site evolves, rather than it quietly falling out of date.",
      },
      {
        title: "AI Query Mapping",
        description:
          "Most agencies only think about \"best estate agent in [town].\" Real buyers and sellers ask AI dozens of different things — \"is now a good time to sell in [town],\" \"what's the average time on market,\" \"how much is stamp duty on a second home\" — whether they're typing into ChatGPT, asking Copilot in Edge, or asking Siri out loud. We research and map every realistic question your future customers are asking, across every platform, and build your content strategy around genuine demand.",
        growthOnly: true,
      },
      {
        title: "Knowledge Panel & Entity Optimisation",
        description:
          "AI increasingly treats businesses as distinct, recognised \"entities\" rather than just websites — and Google, Microsoft, and Apple each maintain their own version of this. We claim and correct your Google Knowledge Panel, and make sure your business is consistently represented across the other sources these systems check — Bing Places, Apple Business Connect, Companies House, LinkedIn — linking them together so every AI system can confidently recognise you as one real, established business.",
        growthOnly: true,
      },
      {
        title: "AI Reputation Response",
        description:
          "If any AI platform — ChatGPT, Gemini, Copilot, or Siri — ever states something inaccurate or damaging about your business, we catch it and act fast, not next month.",
        growthOnly: true,
      },
      {
        title: "Full-Funnel Attribution",
        description:
          "We track AI-driven traffic where it's technically detectable across every platform, add simple \"how did you hear about us\" tracking to your enquiry process, and compare your AI visibility movement against real enquiry and instruction data each month — so the value of this work is provable in pounds, wherever the enquiry actually came from.",
        growthOnly: true,
      },
    ],
    addOns: [
      {
        title: "Multi-Branch AI Rollout",
        description:
          "If you operate across multiple branches, each one needs its own dedicated AI visibility across every platform. Where relevant, we build and maintain this properly across every branch, so no location is left behind.",
        note: "Growth, where applicable — only relevant if you operate more than one branch.",
        growthOnly: true,
      },
    ],
  },
];
