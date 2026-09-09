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
  /** Cross-product callout — how this item feeds the SEO/GEO ranking signals those products depend on. */
  impactNote?: string;
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
  /** Overrides the generic closing-CTA subtext when a product has something more specific to say. */
  ctaSubtext?: string;
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
    tagline: "Recommended by one AI. Invisible to the rest.",
    description:
      "Only 11% of businesses cited by one AI tool are also cited by another — being named by ChatGPT tells you nothing about whether Perplexity, Gemini, or Copilot have ever heard of you. Buyers and sellers increasingly ask ChatGPT, Gemini, and Perplexity who to trust before they ever browse a website — and it's not just chatbots. A normal Google search now often shows an AI-generated answer, powered by Gemini, right above the regular results. Edge does the same through Copilot, and on iPhone, Siri and Spotlight increasingly just answer the question rather than pointing to a website. Reyse audits, fixes, and actively manages your visibility across every single one — so you're the business they're told about, everywhere they ask.",
    price: "£950",
    priceNote:
      "Foundation — one-off. Growth adds £4,000/month for ongoing implementation, entity building, and multi-branch AI visibility.",
    stats: [
      { value: "11%", label: "of businesses cited by one AI tool are also cited by another" },
      { value: "77%", label: "of what AI cites about a business isn't even on that business's own website" },
      { value: "1 in 4", label: "business websites accidentally block the AI crawlers that power citations" },
    ],
    ctaSubtext:
      "Tell us about your business and we'll show you exactly what AI is currently saying about you — and what a competitor is being recommended instead.",
    comparison: {
      tierLabels: ["Foundation", "Growth"],
      rows: [
        { service: "AI Crawler Access Check", foundation: "✓ Included", growth: "✓ Included (+ ongoing monitoring)" },
        { service: "Answer-Ready Content Audit & Fix", foundation: "✓ Included", growth: "✓ Included (+ monthly review & rewriting)" },
        { service: "Freshness Audit & Fix", foundation: "✓ Included", growth: "✓ Included (+ ongoing monitoring)" },
        { service: "AI Trust Signals", foundation: "✓ Included", growth: "✓ Included (+ ongoing maintenance)" },
        { service: "Review & Rating Schema", foundation: "✓ Included", growth: "✓ Included (+ ongoing sync)" },
        { service: "AI Visibility Audit & Fix", foundation: "✓ Included", growth: "✓ Included (+ ongoing implementation & reporting)" },
        { service: "AI Query Mapping", foundation: "✗ Not included", growth: "✓ Included" },
        { service: "Knowledge Panel & Entity Optimisation", foundation: "✗ Not included", growth: "✓ Included" },
        { service: "Community & Forum Visibility", foundation: "✗ Not included", growth: "✓ Included" },
        { service: "AI Reputation Response", foundation: "✗ Not included", growth: "✓ Included" },
        { service: "Full-Funnel Attribution", foundation: "✗ Not included", growth: "✓ Included" },
      ],
    },
    included: [
      {
        title: "AI Crawler Access Check",
        subtitle: "the gatekeeper: can AI even reach your site at all?",
        description:
          "Around 1 in 4 business websites accidentally block the very crawlers that power AI citations, usually through security settings that treat ChatGPT's or Perplexity's crawler the same as a malicious bot. OpenAI states plainly that a blocked site will never appear in ChatGPT's search answers — not ranked lower, genuinely invisible. We check whether your site is silently blocking any major AI crawler, and fix it.",
        growthNote:
          "Hosting changes, security updates, and new CDN settings can silently start blocking these crawlers at any point, without breaking anything else on your site to warn you. Depending on what you'd prefer, we check and fix this ourselves every month, or flag it to you the moment it happens, so a technical change elsewhere never quietly switches your visibility off.",
      },
      {
        title: "Answer-Ready Content Audit & Fix",
        subtitle: "fixing the format of what you already have.",
        description:
          "Pages built around clear, specific facts and figures are roughly 40% more likely to get quoted by an AI tool than vague, general text. AI doesn't browse your website like a person does — it scans for a direct answer to a specific question and lifts it straight into its response. This is about the content you already have. Depending on what you'd prefer, we rewrite your key pages ourselves as part of Foundation, or give you a clear guide for structuring anything new you publish going forward.",
        growthNote:
          "As you publish new pages, each one needs the same treatment, and what counts as \"well-structured\" keeps shifting as AI models change how they read content. Depending on what you'd prefer, we review and rewrite every new page ourselves each month, or report it to you so your team can act on it — either way, nothing new goes unnoticed.",
      },
      {
        title: "Freshness Audit & Fix",
        subtitle: "the timing: is your content recent enough for AI to still trust it?",
        description:
          "Content that AI actually cites is roughly a quarter more recently updated, on average, than content that simply ranks well on Google — and half of it was refreshed within the last three months. AI models quietly stop citing pages that haven't been touched in a while, even ones that ranked well before. Depending on what you'd prefer, we refresh your most important pages ourselves as part of Foundation, or leave you with a clear plan for keeping the rest current yourself.",
        growthNote:
          "A page that was fresh last month is stale this month — AI's trust in a page decays continuously, not on a fixed schedule you can plan around once and forget. Depending on what you'd prefer, we keep everything current for you every month, or report exactly what needs updating so your team can act on it.",
      },
      {
        title: "AI Trust Signals",
        subtitle: "the code: does AI have a clean, accurate source to read you from?",
        description:
          "Google, Microsoft, and OpenAI have all confirmed they use this kind of structured data to help decide what to say about a business. Beyond what a human reads, AI relies on a hidden layer of code — including a dedicated llm.txt file, written specifically for AI crawlers — to understand exactly what your business is, what it does, and where. Without it, AI is working from guesswork rather than fact. We build this directly into your website on Foundation.",
        growthNote:
          "Every time your website changes — a new page, a new service — this hidden code can quietly fall out of step with what's actually on the page, with nothing visibly breaking to warn you. When that happens, AI is working from outdated facts without anyone noticing. Depending on what you'd prefer, we check and fix this every month ourselves, or report exactly what's drifted so your team can correct it.",
      },
      {
        title: "Review & Rating Schema",
        subtitle: "turning your rating into a hard data point, not just background text.",
        description:
          "There's a specific type of code called \"AggregateRating schema\" that lets a website declare its review score and count in a format machines read as verified fact — the same mechanism behind the star ratings you sometimes see directly in search results. For \"best X\" and comparison-style questions, AI increasingly uses this declared number as a direct filter when building its shortlist, rather than reading a page and estimating your reputation from the words on it. We take the genuine review score and count already being built through your Review Management, and add this code to your site correctly — including the required attribution back to where the reviews actually came from, since AI and search engines discount ratings that look self-published.",
        growthNote:
          "Your real review score changes every time a new review comes in, but the number written into this code doesn't update on its own — left alone, AI ends up reading a rating that's no longer accurate, which can undersell a business that's actually improved. Depending on what you'd prefer, we keep this synced to your real, current score every month ourselves, or send you a simple report flagging when it's fallen behind so your team can update it.",
      },
      {
        title: "AI Visibility Audit & Fix",
        subtitle: "the test: do you actually show up, on every platform that matters?",
        description:
          "Only 11% of businesses cited by one AI tool are also cited by another — 89% of citations are platform-exclusive. We test the exact real-world questions your customers ask — \"best estate agent in [town]\" — across ChatGPT, Google's Gemini-powered AI Overviews, Microsoft's Copilot, and Apple's Siri. Depending on what you'd prefer, we fix what we can put right immediately ourselves, or give you a clear, practical guide for closing the gaps yourself.",
        growthNote:
          "AI's answers change every time it's asked, and a competitor can overtake you within weeks without anything on your own site changing at all. Depending on what you'd prefer, we implement every fix ourselves or keep you updated with a clear report — either way, we re-test every month across all four ecosystems, tracking your position against your closest local competitors.",
      },
      {
        title: "AI Query Mapping",
        subtitle: "finding the questions you have no content for at all.",
        description:
          "The Visibility Audit and Answer-Ready Content both work with questions and pages you already know about. This is different: it's about finding the real questions your future customers are asking that you currently have nothing written on at all. Real buyers and sellers ask AI dozens of things beyond the obvious — \"is now a good time to sell in [town],\" \"what's the average time on market,\" \"how much is stamp duty on a second home\" — and what people ask shifts with the market. We research this every month and build genuinely new content around the gaps we find, rather than just polishing what already exists.",
        growthOnly: true,
      },
      {
        title: "Knowledge Panel & Entity Optimisation",
        subtitle: "recognition: known as a real business, not just correctly labelled code.",
        description:
          "Being mentioned by name across the web is now a stronger predictor of AI visibility than traditional backlinks. Trust Signals give AI the raw data to read you correctly — this goes a step further, actively building your recognition as a distinct, established entity. Where a Google Knowledge Panel exists or is eligible for your business, we claim and correct it; either way, we keep you consistently represented across Bing Places, Apple Business Connect, Companies House, and LinkedIn as those sources change over time, so every AI system stays confident you're one real business.",
        growthOnly: true,
      },
      {
        title: "Community & Forum Visibility",
        subtitle: "the majority: most of what AI cites about you isn't even on your site.",
        description:
          "Roughly 77% of what AI cites about a specific business comes from somewhere other than that business's own website — often a forum or community discussion. Your own site can only ever cover a minority of what AI actually reads about you. We build a genuine, ongoing presence in the property discussions your future customers are already having — answering real questions in the right places, consistently, month after month.",
        growthOnly: true,
      },
      {
        title: "AI Reputation Response",
        subtitle: "catching what AI gets wrong before it costs you a customer.",
        description:
          "AI can get basic facts about your business wrong — the wrong opening hours, an outdated service list, even wrongly suggesting you've closed down — and there's no notification system that tells you when this happens, the way there is for a bad review. We check what each major AI platform is currently saying about your business on a regular cycle, and where something's inaccurate or damaging, we act on it quickly rather than leaving it for the next scheduled report.",
        growthOnly: true,
      },
      {
        title: "Full-Funnel Attribution",
        description:
          "Visibility on its own doesn't prove it's working — the same AI mention can mean nothing or mean a real sale, and there's no way to tell the difference without tracking it. We track AI-driven traffic where it's technically detectable, add simple \"how did you hear about us\" tracking to your enquiry process, and compare your AI visibility against real enquiry and instruction data each month.",
        growthOnly: true,
      },
    ],
  },
  {
    slug: "reviews",
    label: "Review Management",
    tagline: "Watched everywhere. Missed nowhere.",
    description:
      "68% of negative reviews go completely unanswered — the exact category most likely to cost a hesitant buyer's trust before they've even called. Reviews don't just sit on Google anymore: Bing pulls in review data of its own, and Apple Business Connect actually inherits reviews directly from Yelp and Tripadvisor, meaning a review left on a site you've never logged into can shape what a customer sees on their iPhone — and the same count, rating, and response consistency directly feed both your SEO and your GEO visibility, since search engines and AI tools both use these signals to decide who to rank and who to recommend. Reyse manages your reputation across every platform that matters, closing that response gap and making sure happy customers actually leave a review in the first place.",
    price: "£299",
    priceNote: "per month.",
    stats: [
      { value: "68%", label: "of negative reviews go completely unanswered" },
      { value: "74%", label: "of consumers specifically look for reviews from the last three months" },
      { value: "0.3–0.7★", label: "average rating lift within six months of consistent responses" },
    ],
    included: [
      {
        title: "AI Review Responder",
        subtitle: "the routine: nothing sits unanswered, ever.",
        description:
          "89% of consumers say they're more likely to choose a business that responds to every review, yet only 54% of reviews get any response at all. We check every place a review could appear — Google, Bing, Trustpilot, Facebook, and Yelp and Tripadvisor specifically, since Apple Business Connect quietly pulls its reviews from those two. We start by clearing your entire existing backlog, then an AI responder handles every new one as it comes in, drafting a genuine, well-considered reply in your voice — with a light layer of human oversight built in, since consumers trust a business less when a response feels purely robotic with nobody checking it.",
        impactNote:
          "Review response activity is itself a confirmed local search ranking factor, independent of everything else on your site. It also directly supports your GEO visibility: AI tools cross-check how actively and consistently a business engages with its own reviews as part of deciding who to recommend, so an unanswered backlog quietly works against you on both fronts at once.",
      },
      {
        title: "Automatic Review Reminders",
        subtitle: "the supply: keeping fresh reviews coming in, not just answering the ones that show up.",
        description:
          "74% of consumers specifically look for reviews written within the last three months — a business surviving on reviews from two years ago is quietly losing trust, regardless of its star rating. The best moment to ask is right after you've helped someone, which is exactly the moment it's easiest to forget. We build and run a system that automatically sends a request the instant a service completes — a sale finishing, a tenancy starting, a stay ending — with a gentle automatic follow-up if they don't respond the first time.",
        impactNote:
          "Review volume and recency both factor into local ranking, and a steady flow of new reviews signals an active, trustworthy business rather than one coasting on old goodwill. The same freshness principle applies to GEO: AI models consistently favour recent signals over stale ones, and a review profile that keeps growing gives them a current, credible picture to draw from rather than an outdated one.",
      },
      {
        title: "Review Monitoring & Reporting",
        subtitle: "the score: tracking the number that actually moves your ranking.",
        description:
          "Consistent review responses have been shown to lift average ratings by 0.3-0.7 stars within six months. Every month, we track your review count, average rating, and response speed across every platform — Google, Bing, Apple, Trustpilot, and Facebook — and show you exactly how you're trending.",
        impactNote:
          "This is the same data both SEO and GEO depend on behind the scenes: your rating and review count are a direct local ranking input, and AI tools use the same figures as a trust threshold before naming a business at all. Tracking it monthly means you see a slip in either direction before it costs you visibility, not after.",
      },
      {
        title: "Sentiment & Theme Analysis",
        subtitle: "the pattern: catching what most businesses only see one review at a time.",
        description:
          "87% of unhappy customers contact a business directly before ever posting a negative review — meaning by the time a pattern shows up publicly, it's often already happened privately several times first. Each month, we identify the genuine patterns across everything customers are saying, good and bad, and flag anything recurring before it becomes a public problem.",
        impactNote:
          "This one supports SEO and GEO more indirectly than the others: it doesn't move a ranking factor on its own, but it protects the rating and review consistency that both systems are already relying on — catching the root cause before it drags your score down is cheaper than repairing the damage afterwards.",
      },
      {
        title: "Reputation Crisis Response",
        subtitle: "the emergency: severe or sudden damage, handled in hours, not the next scheduled check.",
        description:
          "A negative review responded to within 4 hours is three times more likely to end in the reviewer actually updating their rating — but that window closes fast. This is different from the routine AI Responder above: a single review sitting unanswered is routine; a sudden cluster of negative reviews, or one severe enough to do real damage, isn't. We monitor for exactly that, with a human checking in directly on anything sensitive, and respond immediately rather than waiting for the next scheduled cycle.",
        impactNote:
          "Like Sentiment Analysis, this is protective rather than a direct ranking lever: a sudden rating drop can push a business below the review threshold AI tools use to decide who's trustworthy enough to recommend, and this is what stops that from happening unnoticed.",
      },
    ],
  },
  {
    slug: "market-intelligence",
    label: "Market & Competitive Intelligence",
    tagline: "Know exactly where you stand, and what's coming next.",
    description:
      "The top 20% of local businesses now capture 68% of all search visibility — a gap that keeps widening for anyone not actively tracking where they sit against it. Most businesses have no idea how their SEO and AI visibility actually compares to the competitor down the road, or what real buyers and sellers are searching for right now. Reyse tracks both, every month, so you're never guessing.",
    price: "£249",
    priceNote: "per month.",
    stats: [
      { value: "68%", label: "of all search visibility is captured by the top 20% of local businesses" },
      { value: "56%", label: "of local businesses haven't adjusted anything for AI-driven search yet" },
    ],
    included: [
      {
        title: "Competitor SEO & GEO Benchmarking",
        subtitle: "the comparison: knowing where you actually stand, not just how you feel.",
        description:
          "A competitor gaining just 10 fresh reviews a month can outrank a business sitting on 200 reviews from three years ago — volume alone doesn't win, momentum does, and you can't see that without watching them too. Every month, we track your closest competitors across everything that matters — where they rank in Google, how visible they are in Bing and Apple, their review count and rating, how complete and active their business profiles are, and how often each of you is being named when someone asks ChatGPT or Gemini who to use. We put this side by side with your own numbers, so instead of a vague sense of \"we should be doing better,\" you get a precise, month-by-month picture of exactly where you're ahead, where you're being outpaced, and by how much.",
      },
      {
        title: "Search & AI Trend Updates",
        subtitle: "the early warning: catching a shift before your competitor does.",
        description:
          "56% of local businesses still haven't adjusted anything for AI-driven search at all — which means most of your competitors are already behind on the exact shifts we're watching for you. What people are actually searching for — on Google, and increasingly by asking AI tools like ChatGPT, Gemini, and Copilot directly — shifts constantly, and most of it happens invisibly to a business owner who's busy running the day-to-day. A change in interest rates, a new piece of tenancy legislation, a seasonal spike in demand for a particular property type or area — all of it changes what your future customers are asking, often weeks before it shows up in your enquiries. Every month, we keep watch on this and flag what's genuinely rising in relevance to your specific business and local market, so you're finding out about a shift while there's still time to act on it.",
      },
    ],
  },
];
