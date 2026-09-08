export type IncludedItem = {
  title: string;
  /** Short descriptive tag shown after the title, e.g. "the backend: does it work, and work fast?" */
  subtitle?: string;
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
  growthNote?: string;
  note?: string;
  growthOnly?: boolean;
};

export type ComparisonRow = {
  service: string;
  foundation: string;
  growth: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Product = {
  slug: string;
  label: string;
  tagline: string;
  description: string;
  price: string;
  priceNote: string;
  stats?: Stat[];
  included: IncludedItem[];
  addOns?: AddOn[];
  comparison?: {
    tierLabels: [string, string];
    rows: ComparisonRow[];
  };
  addOnsComparison?: {
    tierLabels: [string, string];
    rows: ComparisonRow[];
  };
};

export const products: Product[] = [
  {
    slug: "seo",
    label: "SEO",
    tagline: "Found on Google. Found everywhere else too.",
    description:
      "Nearly a third of all UK web traffic happens on Safari, not Google — and most agencies never even check it. Reyse SEO makes sure your website, your listings, and your business profiles are fast, accurate, and visible across every platform your next buyer, seller, or tenant is actually using — so more of the right searches turn into real enquiries, not lost opportunities.",
    price: "£450",
    priceNote:
      "Foundation — one-off. Growth adds £199/month for ongoing monitoring, management, and reporting.",
    stats: [
      { value: "~30%", label: "of UK web traffic happens on Safari, not Google" },
      { value: "20–30%", label: "higher click-through when schema unlocks rich results" },
      { value: "≈1%", label: "in lost conversions for every 100ms of extra load time" },
    ],
    comparison: {
      tierLabels: ["Foundation", "Growth"],
      rows: [
        { service: "Technical Health Audit", foundation: "✓ Included", growth: "✓ Included (+ ongoing monitoring)" },
        { service: "Schema Implementation", foundation: "✓ Included", growth: "✓ Included (+ ongoing maintenance)" },
        { service: "On-Page Audit", foundation: "✓ Included", growth: "✓ Included (+ monthly review)" },
        { service: "Content Audit", foundation: "✓ Included", growth: "✓ Included (+ monthly review)" },
        { service: "NAP Consistency Audit", foundation: "✓ Included", growth: "✓ Included (+ ongoing monitoring)" },
        { service: "Profile Setup Audit", foundation: "✓ Included", growth: "✓ Included (+ ongoing management)" },
        { service: "Profile Activity", foundation: "✓ Included", growth: "✓ Included (+ ongoing tuning)" },
        { service: "Total Visibility Audit", foundation: "✓ Included", growth: "✓ Included (+ ongoing strategy)" },
        { service: "SEO & ROI Reporting", foundation: "✗ Not included", growth: "✓ Included" },
      ],
    },
    addOnsComparison: {
      tierLabels: ["Foundation", "Growth"],
      rows: [
        { service: "Video/YouTube SEO Audit", foundation: "✓ Optional", growth: "✓ Optional" },
        { service: "Conversion Tracking Setup", foundation: "✗ Not included", growth: "✓ Optional" },
      ],
    },
    included: [
      {
        title: "Technical Health Audit",
        subtitle: "the backend: does it work, and work fast?",
        description:
          "Slow, clunky pages get penalised by search engines — every extra 100ms of load time can cost roughly 1% in lost conversions, working directly against your SEO. We check your website's code and performance for exactly this: slow pages, broken elements, anything quietly working against you. We also take a handful of your live property listings and check whether the same issues are holding them back specifically. Everything is tested across every major device and browser, checking that your site actually functions properly everywhere a customer might land on it. Depending on what you'd prefer, we either implement every fix ourselves or hand you a clear, practical report so your own team can action it — either way, you also get our recommendations on how to keep it maintained going forward.",
        growthNote:
          "Technical standards don't stay still — what search engines reward today can shift within months, with nothing on your site actually breaking to warn you. We monitor for exactly that every month, and either implement whatever's needed to keep your SEO protected or keep you updated with a clear report, whichever you'd prefer. Every month, we also check a fresh handful of your live listings, so nothing new quietly drags your visibility down as your site grows.",
      },
      {
        title: "Schema Implementation",
        description:
          "\"Schema\" is a hidden layer of code that clearly labels information on your website in a format search engines can read with total accuracy, rather than guessing. We apply this across your whole website first, so search engines can clearly understand what services you offer, where, and for whom. This directly boosts your SEO performance: pages with properly implemented schema see click-through rates increase by 20-30%, since it makes your pages eligible for rich results — the enhanced search listings that show extra detail like price and location right in the search results, making them stand out and get clicked more than a plain link. We then build a template specifically for your property listings — price, bedrooms, property type, location — so every property you list going forward is automatically labelled the same way, with no extra manual work required from you each time you publish. We'll also show you exactly how it's set up, so you know what to check if you ever change how listings are published.",
        growthNote:
          "Building the template is a one-time job — but websites change, platforms update, and search engines occasionally shift what they expect from this code. If any of that ever quietly breaks the automation, a listing could start publishing without its schema, undoing the ranking advantage without you noticing. We check this every month as part of Growth, so the template keeps working exactly as it should, not because it needs rebuilding, but because it needs watching.",
      },
      {
        title: "On-Page Audit",
        subtitle: "the structure: is it built for search engines and people to understand and use?",
        description:
          "Every page on your website is a chance to be found by the exact person searching for what you offer — but only if it's structured in a way search engines can understand, and laid out in a way a real person can actually use. Titles, headers, and meta descriptions send a direct signal about what a page is and where you operate; a confusing layout or a clunky enquiry process loses the customer even after they've found you. We review every page for both — fixing what's structurally holding it back and what's making it harder than it needs to be for someone to actually get in touch — and do the same for a handful of your live listings. For anything needing a bigger rework, we'll tell you exactly what to prioritise next. Depending on what you'd prefer, we make these changes ourselves or advise you on exactly what to do.",
        growthNote:
          "What counts as \"well-structured\" shifts over time as search engines refine how they read pages, and your website keeps growing — new listings, new pages, updated services. We give every new page and a fresh handful of listings the same structural and usability review each month, either fixing it or reporting it, so nothing new is left sending a weak signal or losing an enquiry, and nothing already working slips out of date as the rules change.",
      },
      {
        title: "Content Audit",
        subtitle: "the information: is it accurate and current?",
        description:
          "We review your website's content — including a sample of live listings and any local market content you have — for what's outdated, missing, or simply no longer true. This matters for two reasons: search engines treat stale content less favourably, and inaccurate information quietly damages the trust a visitor places in your business. We fix or refresh what we can as part of this pass, and give you a clear list of what to update next and why.",
        growthNote:
          "What people search for changes constantly — a shift in the market, new industry changes — and content that performed well last year can quietly become outdated. Each month, we review your content and a sample of listings for accuracy and relevance, refining what's underperforming, and we track what's rising in relevance to your business, flagging genuine opportunities as they happen rather than after the moment's passed.",
      },
      {
        title: "NAP Consistency Audit",
        description:
          "\"NAP\" stands for Name, Address, and Phone number — the core details that identify your business online. Consistency here directly affects your local search ranking: it's measured as a genuine ranking factor, and every mismatch quietly works against you. We check these match exactly everywhere your business appears — your website, Google, Bing, Apple, Companies House, Facebook, LinkedIn, your listings on Rightmove, Zoopla and OnTheMarket, industry bodies like Propertymark and RICS, review sites, and local directories — correcting every mismatch we find. Depending on what you'd prefer, we either fix it ourselves directly or hand you clear instructions for getting it corrected, along with guidance on keeping it consistent going forward.",
        growthNote:
          "Consistency isn't a one-time fix — directories change their formatting, details get updated in one place and forgotten in another, and new platforms emerge that need the same details added correctly from day one. We keep checking every listing every month, either correcting what's drifted ourselves or reporting it to you, whichever you'd prefer, so your ranking never quietly slips without you knowing.",
      },
      {
        title: "Profile Setup Audit",
        description:
          "For most local searches, your business profile is the very first impression a potential customer gets — often before they've even visited your website. This directly affects your SEO: profile completeness and accuracy across Google, Bing, and Apple is measured as one of the biggest factors in local search ranking, and an incomplete or poorly set up profile quietly holds your ranking back regardless of how good your website is. We review and properly set up your presence on Google Business Profile, Bing Places, and Apple Business Connect — including Apple, one of the easiest, least competitive opportunities available right now since most property businesses haven't claimed theirs at all. Depending on what you'd prefer, we set everything up ourselves or hand you clear instructions to do it yourself, along with guidance on exactly what to keep updated going forward to keep each profile working in your favour.",
        growthNote:
          "Details change — hours shift for a bank holiday, a new service gets added, a new question comes in on your public Q&A — and any of it left uncorrected quietly holds your ranking back. Depending on what you'd prefer, we check and correct all three profiles for you every month, or keep you updated with a clear report so your own team can act on it — either way, your information never quietly falls out of date.",
      },
      {
        title: "Profile Activity",
        description:
          "Google and Apple both reward business profiles that look genuinely active, and quietly downrank ones that look abandoned — activity and freshness are a measured part of how these platforms decide your local visibility, so an active profile directly improves your SEO. We build you an automated system that posts quick updates to your profiles on its own — a new instruction, a seasonal message — so your profiles stay visibly active with zero effort required from you. We'll talk you through what's being posted, so you always know what's going out in your name.",
        tierNote:
          "This is a one-time build, giving you a reliable, fully automated system that keeps your profiles active and earning that ranking advantage from day one, with nothing further required from you.",
        growthNote:
          "We keep the system tuned, not just running. Each month, we review what's actually performing well, refresh the content it's drawing from to match what's currently relevant, and adjust it as the market and the platforms evolve — so instead of a fixed system doing the same job indefinitely, it keeps adapting to earn you an even stronger ranking advantage over time.",
      },
      {
        title: "Total Visibility Audit",
        description:
          "This is one of our biggest unique factors. Most agencies only ever ask \"how's your Google profile looking?\" — this audit asks a bigger question: are you actually present, at all, everywhere a customer might look for you? In the UK, Safari alone accounts for roughly 30% of all web traffic, and over half of UK mobile browsing happens on it — yet plenty of businesses have never checked whether they show up properly there at all. Beyond Google, Bing, and Apple, we check your presence across the platforms most businesses forget entirely — WhatsApp Business, voice assistant discovery, and any property-industry-specific channels relevant to you. Depending on what you'd prefer, we set up and claim what's missing ourselves, or hand you a clear, prioritised plan for closing the gaps yourself — either way, you get a single strategic view of where you exist, where you're invisible, and what matters most to fix first.",
        growthNote:
          "New platforms emerge, and customer habits shift toward tools that didn't matter a year ago. A presence gap that didn't exist last year can quietly open up without anyone noticing until a competitor's already there first. Depending on what you'd prefer, we continually claim and set up new presence as it becomes relevant, or keep you updated with a clear report so your own team can act on it — either way, you're never the last to arrive on a platform that starts to matter.",
      },
      {
        title: "SEO & ROI Reporting",
        description:
          "SEO results build gradually and shift month to month as search engines, competitors, and your own website all keep moving — a single snapshot can't show you that story. Every month, we translate what's actually happening into a clear, plain-English update — no jargon, no vanity metrics — so you always know exactly where things stand and what's genuinely moving the needle. Alongside that, we show you what it's actually worth: in real terms, what your organic visibility is worth compared to what you'd otherwise be paying per lead through a property portal — making the value of this work tangible and current, not just theoretical.",
        growthOnly: true,
      },
    ],
    addOns: [
      {
        title: "Video/YouTube SEO Audit",
        description:
          "YouTube is the world's second most-visited website, and property is one of the most natural fits for video — walkthroughs, \"moving to the area\" guides, agent introductions. But most agencies publishing video get almost no SEO value from it, because the video itself is never actually set up to be found. We review your existing video content and check whether the titles, descriptions, and tags are properly written around what people actually search for, whether the video is linked correctly back to your website and relevant listings, and whether it's using the kind of thumbnails and structure that get clicked on rather than scrolled past. Depending on what you'd prefer, we implement these fixes directly or hand you a clear report so your own team can action it. The result: instead of views quietly happening in isolation, your video content starts working alongside the rest of your SEO — driving genuine traffic and enquiries, not just watch time.",
        growthNote:
          "What ranks well on video search shifts over time too, and as you publish new video content, each piece needs the same treatment as the original audit. Every month, we check any new video the same way, and either implement the fixes or report them to you, whichever you'd prefer — so nothing new gets uploaded and quietly goes unfound.",
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
  {
    slug: "reviews",
    label: "Review Management",
    tagline: "Your reputation, watched, answered, and grown — automatically, everywhere.",
    description:
      "Reviews don't just sit on Google anymore. Bing pulls in review data of its own, and Apple Business Connect actually inherits and displays reviews directly from Yelp and Tripadvisor — meaning a review left on a site you've never even logged into can shape what a customer sees on their iPhone. Reyse manages your reputation across every platform that matters — replying automatically, and making sure happy customers actually leave a review in the first place.",
    price: "£299",
    priceNote: "per month.",
    included: [
      {
        title: "AI Review Responder",
        description:
          "We check every place a review about your business could appear — Google, Bing, Trustpilot, Facebook, and Yelp and Tripadvisor specifically, since Apple Business Connect quietly pulls its reviews from those two. We start by clearing your entire existing backlog of unanswered reviews, giving you a clean slate. From there, an AI responder takes over — reading every new review as it comes in, on every platform, and automatically drafting and posting a genuine, well-considered reply in your voice, not a generic \"thank you for your feedback.\" Nothing sits unanswered, no matter how many come in or how busy you are.",
      },
      {
        title: "Automatic Review Reminders",
        description:
          "The best time to ask for a review is the moment right after you've actually helped someone — but that's exactly the moment it's easiest to forget. We build and run a system that automatically sends a review request the moment a service is completed — a sale finishing, a tenancy starting, a stay ending — with a gentle automatic follow-up if a customer doesn't respond the first time. Review growth happens continuously in the background, not only when someone remembers to ask.",
      },
      {
        title: "Review Monitoring & Reporting",
        description:
          "Every month, we track your review count, average rating, and response speed across every platform — Google, Bing, Apple (via Yelp and Tripadvisor), Trustpilot, and Facebook — and show you exactly how you're trending, including against the kind of review volume and rating range that genuinely influences whether AI tools recommend you.",
      },
      {
        title: "Sentiment & Theme Analysis",
        description:
          "Reviews aren't just a number — they're honest feedback most businesses never properly read as a whole. Each month, we identify the genuine patterns across what customers are saying, both good and bad, and flag anything recurring that's worth your attention.",
      },
      {
        title: "Reputation Crisis Response",
        description:
          "A single bad review sitting unanswered, or a sudden cluster of negative reviews, can do real damage fast. We monitor for this actively and respond immediately when it matters — with a human checking in on anything sensitive the AI flags — rather than it waiting to be picked up in the next scheduled check.",
      },
    ],
  },
  {
    slug: "market-intelligence",
    label: "Market & Competitive Intelligence",
    tagline: "Know how you compare, and what people are actually searching for.",
    description:
      "Most businesses have no idea how their SEO and AI visibility actually compares to the competitor down the road, or what real buyers and sellers are searching for right now. Reyse tracks both, every month, so you're never guessing.",
    price: "£249",
    priceNote: "per month.",
    included: [
      {
        title: "Competitor SEO & GEO Benchmarking",
        description:
          "It's hard to know if you're doing well without knowing what \"well\" actually looks like locally. Every month, we track your closest competitors across everything that matters — where they rank in Google, how visible they are in Bing and Apple, their review count and rating, how complete and active their business profiles are, and how often each of you is being named when someone asks ChatGPT or Gemini who to use. We put this side by side with your own numbers, so instead of a vague sense of \"we should be doing better,\" you get a precise, month-by-month picture of exactly where you're ahead, where you're being outpaced, and by how much — the kind of comparison most businesses simply never see.",
      },
      {
        title: "Search & AI Trend Updates",
        description:
          "What people are actually searching for — on Google, and increasingly by asking AI tools like ChatGPT, Gemini, and Copilot directly — shifts constantly, and most of it happens invisibly to a business owner who's busy running the day-to-day. A change in interest rates, a new piece of tenancy legislation, a seasonal spike in demand for a particular property type or area — all of it changes what your future customers are asking, often weeks before it shows up in your enquiries. Every month, we keep watch on this and flag what's genuinely rising in relevance to your specific business and local market, so you're finding out about a shift while there's still time to act on it, rather than noticing it only after a competitor already has.",
      },
    ],
  },
];
