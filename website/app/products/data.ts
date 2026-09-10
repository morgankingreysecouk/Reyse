export type Stat = {
  value: string;
  label: string;
};

export type IncludedItem = {
  title: string;
  /** Short descriptive tag shown after the title, e.g. "the backend: does it work, and work fast?" */
  subtitle?: string;
  /** Why this matters — the pain point, stated plainly. */
  problem: string;
  /** What we actually do about it. */
  fix: string;
  /** Optional pulled-out number, shown as a badge above the problem/fix pair. */
  stat?: Stat;
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
  problem: string;
  fix: string;
  stat?: Stat;
  growthNote?: string;
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
  /** One short sentence for the homepage grid card — `description` is sized for a
   *  full page intro, and reusing it there made every card a different height. */
  hook: string;
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
  /** Overrides the generic closing-CTA heading when a product has something more specific to say. */
  ctaHeading?: string;
  /** Overrides the generic closing-CTA subtext when a product has something more specific to say. */
  ctaSubtext?: string;
};

export const products: Product[] = [
  {
    slug: "seo",
    label: "SEO",
    tagline: "Found on Google. Found everywhere else too.",
    hook: "Fast, accurate, and visible on every platform your next buyer or tenant actually uses.",
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
        stat: { value: "≈1%", label: "lost per 100ms of extra load time" },
        problem: "Slow, broken pages are quietly penalised by search engines, and every extra 100ms of load time costs roughly 1% in lost conversions.",
        fix: "We test your site's code and performance, plus a handful of live listings, across every major device and browser — then fix it ourselves or hand you a clear, practical report.",
        growthNote:
          "Technical standards don't stay still — what search engines reward today can shift within months, with nothing on your site actually breaking to warn you. We monitor for exactly that every month, and either implement whatever's needed to keep your SEO protected or keep you updated with a clear report, whichever you'd prefer. Every month, we also check a fresh handful of your live listings, so nothing new quietly drags your visibility down as your site grows.",
      },
      {
        title: "Schema Implementation",
        stat: { value: "20–30%", label: "higher click-through once schema unlocks rich results" },
        problem: "Without schema, search engines are guessing what your listings mean — costing you the enhanced \"rich result\" listings that show price and location right in search, and get clicked more.",
        fix: "We label your whole website once, then build a template so every property you list going forward is automatically tagged the same way — no manual work per listing.",
        growthNote:
          "Building the template is a one-time job — but websites change, platforms update, and search engines occasionally shift what they expect from this code. If any of that ever quietly breaks the automation, a listing could start publishing without its schema, undoing the ranking advantage without you noticing. We check this every month as part of Growth, so the template keeps working exactly as it should, not because it needs rebuilding, but because it needs watching.",
      },
      {
        title: "On-Page Audit",
        subtitle: "the structure: is it built for search engines and people to understand and use?",
        problem: "A confusing layout or a clunky enquiry process loses a customer even after they've found you — titles, headers, and structure send a direct signal about what a page is and where you operate.",
        fix: "We review every page — and a sample of live listings — fixing what's structurally holding it back and what makes enquiring harder than it should be. Bigger reworks get flagged with what to prioritise next.",
        growthNote:
          "What counts as \"well-structured\" shifts over time as search engines refine how they read pages, and your website keeps growing — new listings, new pages, updated services. We give every new page and a fresh handful of listings the same structural and usability review each month, either fixing it or reporting it, so nothing new is left sending a weak signal or losing an enquiry, and nothing already working slips out of date as the rules change.",
      },
      {
        title: "Content Audit",
        subtitle: "the information: is it accurate and current?",
        problem: "Search engines treat stale content less favourably, and inaccurate information quietly damages the trust a visitor places in your business.",
        fix: "We review your site content and a sample of listings for what's outdated, missing, or no longer true — fixing what we can now, and listing what to update next.",
        growthNote:
          "What people search for changes constantly — a shift in the market, new industry changes — and content that performed well last year can quietly become outdated. Each month, we review your content and a sample of listings for accuracy and relevance, refining what's underperforming, and we track what's rising in relevance to your business, flagging genuine opportunities as they happen rather than after the moment's passed.",
      },
      {
        title: "NAP Consistency Audit",
        problem: "\"NAP\" — your Name, Address, and Phone number — is a measured local ranking factor, and every mismatch across the web quietly works against you.",
        fix: "We check it matches exactly everywhere your business appears — your website, Google, Bing, Apple, Companies House, Rightmove, Zoopla, OnTheMarket, Propertymark, RICS, and more — and correct every mismatch we find.",
        growthNote:
          "Consistency isn't a one-time fix — directories change their formatting, details get updated in one place and forgotten in another, and new platforms emerge that need the same details added correctly from day one. We keep checking every listing every month, either correcting what's drifted ourselves or reporting it to you, whichever you'd prefer, so your ranking never quietly slips without you knowing.",
      },
      {
        title: "Profile Setup Audit",
        problem: "Your business profile is often the first impression a customer gets, before they've even visited your site — and an incomplete or poorly set-up one holds your ranking back regardless of how good your website is.",
        fix: "We properly set up Google Business Profile, Bing Places, and Apple Business Connect — Apple especially, since most property businesses haven't claimed theirs at all.",
        growthNote:
          "Details change — hours shift for a bank holiday, a new service gets added, a new question comes in on your public Q&A — and any of it left uncorrected quietly holds your ranking back. Depending on what you'd prefer, we check and correct all three profiles for you every month, or keep you updated with a clear report so your own team can act on it — either way, your information never quietly falls out of date.",
      },
      {
        title: "Profile Activity",
        problem: "Google and Apple both reward business profiles that look genuinely active, and quietly downrank ones that look abandoned.",
        fix: "We build an automated system that posts quick updates to your profiles on its own — zero effort required from you, and we talk you through exactly what's going out in your name.",
        tierNote:
          "This is a one-time build, giving you a reliable, fully automated system that keeps your profiles active and earning that ranking advantage from day one, with nothing further required from you.",
        growthNote:
          "We keep the system tuned, not just running. Each month, we review what's actually performing well, refresh the content it's drawing from to match what's currently relevant, and adjust it as the market and the platforms evolve — so instead of a fixed system doing the same job indefinitely, it keeps adapting to earn you an even stronger ranking advantage over time.",
      },
      {
        title: "Total Visibility Audit",
        stat: { value: "~30%", label: "of UK web traffic happens on Safari, not Google" },
        problem: "Most agencies only ever check your Google profile — but Safari alone is ~30% of UK web traffic and over half of UK mobile browsing, and plenty of businesses have never checked it at all.",
        fix: "We check your presence everywhere a customer might actually look — Google, Bing, Apple, WhatsApp Business, voice assistants, and property-specific channels — and give you one clear view of what to fix first.",
        growthNote:
          "New platforms emerge, and customer habits shift toward tools that didn't matter a year ago. A presence gap that didn't exist last year can quietly open up without anyone noticing until a competitor's already there first. Depending on what you'd prefer, we continually claim and set up new presence as it becomes relevant, or keep you updated with a clear report so your own team can act on it — either way, you're never the last to arrive on a platform that starts to matter.",
      },
      {
        title: "SEO & ROI Reporting",
        growthOnly: true,
        problem: "SEO results build gradually and shift month to month — a single snapshot can't show you that story, or what it's actually worth.",
        fix: "Every month, we translate what's happening into a clear, plain-English update, plus what your organic visibility is actually worth versus paying per lead through a property portal.",
      },
    ],
    addOns: [
      {
        title: "Video/YouTube SEO Audit",
        problem: "Most agencies publishing video get almost no SEO value from it, because the video itself is never actually set up to be found — and YouTube is the world's second most-visited website.",
        fix: "We check whether your titles, descriptions, tags, and links back to your site and listings are properly set up, and fix it directly or hand you a report to action.",
        growthNote:
          "What ranks well on video search shifts over time too, and as you publish new video content, each piece needs the same treatment as the original audit. Every month, we check any new video the same way, and either implement the fixes or report them to you, whichever you'd prefer — so nothing new gets uploaded and quietly goes unfound.",
        note: "Only relevant if you're already producing video content — we're not creating video for you here, just making sure what you have is actually being found.",
      },
      {
        title: "Conversion Tracking Setup",
        growthOnly: true,
        problem: "Without proper tracking, it's genuinely difficult to know which specific piece of work is actually driving real phone calls and enquiries versus just traffic.",
        fix: "We set up dedicated tracking numbers and tools that record exactly which page, listing, or platform a genuine enquiry came from, so future budget goes where it actually delivers.",
      },
    ],
  },
  {
    slug: "geo",
    label: "GEO",
    tagline: "Recommended by one AI. Invisible to the rest.",
    hook: "Only 11% of businesses named by one AI tool are named by another.",
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
        stat: { value: "1 in 4", label: "business websites accidentally block the AI crawlers that power citations" },
        problem: "A blocked site doesn't rank lower in ChatGPT's answers — OpenAI states plainly it never appears at all, and it's usually blocked by accident through security settings.",
        fix: "We check whether your site is silently blocking any major AI crawler, and fix it.",
        growthNote:
          "Hosting changes, security updates, and new CDN settings can silently start blocking these crawlers at any point, without breaking anything else on your site to warn you. Depending on what you'd prefer, we check and fix this ourselves every month, or flag it to you the moment it happens, so a technical change elsewhere never quietly switches your visibility off.",
      },
      {
        title: "Answer-Ready Content Audit & Fix",
        subtitle: "fixing the format of what you already have.",
        stat: { value: "40%", label: "more likely to get quoted when content leads with clear facts" },
        problem: "AI doesn't browse your website like a person does — it scans for a direct answer to a specific question and lifts it straight into its response. Vague, general text rarely gets quoted.",
        fix: "We rewrite your key pages ourselves as part of Foundation, or give you a clear guide for structuring anything new you publish going forward.",
        growthNote:
          "As you publish new pages, each one needs the same treatment, and what counts as \"well-structured\" keeps shifting as AI models change how they read content. Depending on what you'd prefer, we review and rewrite every new page ourselves each month, or report it to you so your team can act on it — either way, nothing new goes unnoticed.",
      },
      {
        title: "Freshness Audit & Fix",
        subtitle: "the timing: is your content recent enough for AI to still trust it?",
        stat: { value: "50%", label: "of AI-cited content was refreshed within the last 3 months" },
        problem: "AI models quietly stop citing pages that haven't been touched in a while, even ones that ranked well before.",
        fix: "We refresh your most important pages ourselves as part of Foundation, or leave you with a clear plan for keeping the rest current yourself.",
        growthNote:
          "A page that was fresh last month is stale this month — AI's trust in a page decays continuously, not on a fixed schedule you can plan around once and forget. Depending on what you'd prefer, we keep everything current for you every month, or report exactly what needs updating so your team can act on it.",
      },
      {
        title: "AI Trust Signals",
        subtitle: "the code: does AI have a clean, accurate source to read you from?",
        problem: "Beyond what a human reads, AI relies on a hidden layer of code to understand exactly what your business is, what it does, and where — without it, AI is working from guesswork rather than fact.",
        fix: "We build a dedicated llm.txt file and the structured data Google, Microsoft, and OpenAI all confirm they use, directly into your website on Foundation.",
        growthNote:
          "Every time your website changes — a new page, a new service — this hidden code can quietly fall out of step with what's actually on the page, with nothing visibly breaking to warn you. When that happens, AI is working from outdated facts without anyone noticing. Depending on what you'd prefer, we check and fix this every month ourselves, or report exactly what's drifted so your team can correct it.",
      },
      {
        title: "Review & Rating Schema",
        subtitle: "turning your rating into a hard data point, not just background text.",
        problem: "For \"best X\" questions, AI increasingly filters by your declared rating and review count — not by reading and estimating your reputation from the page itself.",
        fix: "We add \"AggregateRating schema\" with your genuine, current score and count, correctly attributed back to where the reviews actually came from.",
        growthNote:
          "Your real review score changes every time a new review comes in, but the number written into this code doesn't update on its own — left alone, AI ends up reading a rating that's no longer accurate, which can undersell a business that's actually improved. Depending on what you'd prefer, we keep this synced to your real, current score every month ourselves, or send you a simple report flagging when it's fallen behind so your team can update it.",
      },
      {
        title: "AI Visibility Audit & Fix",
        subtitle: "the test: do you actually show up, on every platform that matters?",
        stat: { value: "11%", label: "of businesses cited by one AI tool are also cited by another" },
        problem: "89% of AI citations are platform-exclusive — ranking well in ChatGPT tells you nothing about whether Gemini, Copilot, or Siri have ever heard of you.",
        fix: "We test the real questions your customers ask — \"best estate agent in [town]\" — across all four, then fix what we can immediately or hand you a clear guide.",
        growthNote:
          "AI's answers change every time it's asked, and a competitor can overtake you within weeks without anything on your own site changing at all. Depending on what you'd prefer, we implement every fix ourselves or keep you updated with a clear report — either way, we re-test every month across all four ecosystems, tracking your position against your closest local competitors.",
      },
      {
        title: "AI Query Mapping",
        subtitle: "finding the questions you have no content for at all.",
        growthOnly: true,
        problem: "Real buyers and sellers ask AI dozens of things beyond the obvious — and what they ask shifts constantly with the market, leaving genuine gaps you've never written a word on.",
        fix: "Every month, we research the real questions your future customers are asking and build genuinely new content around the gaps we find, not just polish what already exists.",
      },
      {
        title: "Knowledge Panel & Entity Optimisation",
        subtitle: "recognition: known as a real business, not just correctly labelled code.",
        growthOnly: true,
        problem: "Being mentioned by name across the web is now a stronger predictor of AI visibility than traditional backlinks — but that requires being recognised as one real, established entity, not just correctly labelled code.",
        fix: "We claim and correct your Google Knowledge Panel where eligible, and keep you consistently represented across Bing Places, Apple Business Connect, Companies House, and LinkedIn.",
      },
      {
        title: "Community & Forum Visibility",
        subtitle: "the majority: most of what AI cites about you isn't even on your site.",
        stat: { value: "77%", label: "of what AI cites about a business isn't even on that business's own website" },
        growthOnly: true,
        problem: "Your own website can only ever cover a minority of what AI actually reads about you — most of it comes from forums and community discussions instead.",
        fix: "We build a genuine, ongoing presence in the property discussions your future customers are already having — consistently, month after month.",
      },
      {
        title: "AI Reputation Response",
        subtitle: "catching what AI gets wrong before it costs you a customer.",
        growthOnly: true,
        problem: "AI can state the wrong opening hours, an outdated service list, even that you've closed down — with no notification system to warn you, unlike a bad review.",
        fix: "We check what each major AI platform is currently saying about your business on a regular cycle, and act quickly on anything inaccurate or damaging.",
      },
      {
        title: "Full-Funnel Attribution",
        growthOnly: true,
        problem: "The same AI mention can mean nothing or mean a real sale — there's no way to tell the difference without tracking it.",
        fix: "We track AI-driven traffic where it's technically detectable, add simple \"how did you hear about us\" tracking, and compare your AI visibility against real enquiry data each month.",
      },
    ],
  },
  {
    slug: "reviews",
    label: "Review Management",
    tagline: "Watched everywhere. Missed nowhere.",
    hook: "68% of negative reviews go unanswered. Reyse replies to every one, instantly.",
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
        stat: { value: "54%", label: "of reviews get any response at all" },
        problem: "89% of consumers say they're more likely to choose a business that responds to every review — yet only 54% of reviews get any response.",
        fix: "We clear your entire existing backlog first, then an AI responder drafts a genuine, well-considered reply in your voice for every new review, with light human oversight built in.",
        impactNote:
          "Review response activity is itself a confirmed local search ranking factor, independent of everything else on your site. It also directly supports your GEO visibility: AI tools cross-check how actively and consistently a business engages with its own reviews as part of deciding who to recommend, so an unanswered backlog quietly works against you on both fronts at once.",
      },
      {
        title: "Automatic Review Reminders",
        subtitle: "the supply: keeping fresh reviews coming in, not just answering the ones that show up.",
        stat: { value: "74%", label: "of consumers specifically look for reviews from the last three months" },
        problem: "A business surviving on reviews from two years ago is quietly losing trust, regardless of its star rating — and the best moment to ask is right after helping someone, which is exactly when it's easiest to forget.",
        fix: "We build and run a system that automatically sends a request the instant a service completes, with a gentle automatic follow-up if they don't respond the first time.",
        impactNote:
          "Review volume and recency both factor into local ranking, and a steady flow of new reviews signals an active, trustworthy business rather than one coasting on old goodwill. The same freshness principle applies to GEO: AI models consistently favour recent signals over stale ones, and a review profile that keeps growing gives them a current, credible picture to draw from rather than an outdated one.",
      },
      {
        title: "Review Monitoring & Reporting",
        subtitle: "the score: tracking the number that actually moves your ranking.",
        stat: { value: "0.3–0.7★", label: "average rating lift within six months of consistent responses" },
        problem: "Your rating and review count are a direct local ranking input for both SEO and GEO — and it's easy to lose track of exactly where you stand month to month.",
        fix: "Every month, we track your review count, average rating, and response speed across Google, Bing, Apple, Trustpilot, and Facebook, and show you exactly how you're trending.",
        impactNote:
          "This is the same data both SEO and GEO depend on behind the scenes: your rating and review count are a direct local ranking input, and AI tools use the same figures as a trust threshold before naming a business at all. Tracking it monthly means you see a slip in either direction before it costs you visibility, not after.",
      },
      {
        title: "Sentiment & Theme Analysis",
        subtitle: "the pattern: catching what most businesses only see one review at a time.",
        stat: { value: "87%", label: "of unhappy customers contact a business directly before ever posting a negative review" },
        problem: "By the time a pattern shows up publicly in your reviews, it's often already happened privately several times first.",
        fix: "Each month, we identify the genuine patterns across everything customers are saying, good and bad, and flag anything recurring before it becomes a public problem.",
        impactNote:
          "This one supports SEO and GEO more indirectly than the others: it doesn't move a ranking factor on its own, but it protects the rating and review consistency that both systems are already relying on — catching the root cause before it drags your score down is cheaper than repairing the damage afterwards.",
      },
      {
        title: "Reputation Crisis Response",
        subtitle: "the emergency: severe or sudden damage, handled in hours, not the next scheduled check.",
        stat: { value: "3×", label: "more likely a reviewer updates their rating if answered within 4 hours" },
        problem: "That 4-hour window closes fast, and a sudden cluster of negative reviews — or one severe enough to do real damage — isn't the same problem as one review sitting unanswered.",
        fix: "We monitor for exactly that, with a human checking in directly on anything sensitive, and respond immediately rather than waiting for the next scheduled cycle.",
        impactNote:
          "Like Sentiment Analysis, this is protective rather than a direct ranking lever: a sudden rating drop can push a business below the review threshold AI tools use to decide who's trustworthy enough to recommend, and this is what stops that from happening unnoticed.",
      },
    ],
  },
  {
    slug: "market-intelligence",
    label: "Market & Competitive Intelligence",
    tagline: "Know exactly where you stand, and what's coming next.",
    hook: "Tracks your SEO and AI visibility against your closest competitor, every month.",
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
        problem: "A competitor gaining just 10 fresh reviews a month can outrank a business sitting on 200 reviews from three years ago — volume alone doesn't win, momentum does, and you can't see that without watching them too.",
        fix: "Every month, we track your closest competitors' rankings, Bing/Apple visibility, review count and rating, profile activity, and AI mentions — side by side with your own numbers.",
      },
      {
        title: "Search & AI Trend Updates",
        subtitle: "the early warning: catching a shift before your competitor does.",
        stat: { value: "56%", label: "of local businesses haven't adjusted anything for AI-driven search yet" },
        problem: "What people are actually searching for shifts constantly, and most of it happens invisibly to a business owner busy running the day-to-day — often weeks before it shows up in your enquiries.",
        fix: "Every month, we keep watch on this and flag what's genuinely rising in relevance to your specific business and local market, while there's still time to act on it.",
      },
    ],
  },
  {
    slug: "scale",
    label: "Scale",
    tagline: "One system, built once. Every branch, everywhere.",
    hook: "The same setup, properly replicated for every branch — not copy-pasted and hoped for.",
    description:
      "A business with 30 locations and just 20% inconsistency in its listing data has 6 branches actively working against the other 24 at every directory where the details don't match — and multi-location brands with consistent data see up to twice the customer engagement of those without. Growing from one office to a hundred shouldn't mean rebuilding SEO, GEO, reviews, and market intelligence from scratch every time you open a door. Reyse Scale takes everything already built for your first branch and replicates it, properly, for every branch after — with the same rigour whether you're a single agency or the biggest name in the country.",
    price: "Custom",
    priceNote: "Custom pricing, based on the number of branches — get in touch for a quote.",
    stats: [
      { value: "20%", label: "listing inconsistency is enough to put a fifth of your branches working against the rest" },
      { value: "2×", label: "the customer engagement multi-location brands see with consistent listing data" },
    ],
    ctaHeading: "Ready to scale properly?",
    ctaSubtext:
      "Tell us how many branches you're running, and we'll show you exactly how this replicates across every one.",
    included: [
      {
        title: "Replicable by Design",
        subtitle: "the setup: a new branch launches fast, because nothing gets rebuilt.",
        problem: "Most multi-location businesses hit a wall because every new site depends on manual effort starting over from scratch.",
        fix: "Every schema template, trust signal, and content system built for your first branch was designed to be duplicated — so a new location gets SEO, GEO, reviews, and market intelligence live together from opening day.",
      },
      {
        title: "Brand Authority Inheritance",
        subtitle: "the architecture: where a page lives, decided once, at setup.",
        problem: "A new branch built as a standalone site starts from zero trust with search engines, however good the templates are.",
        fix: "We build new branch pages as part of your existing website, inheriting the trust your main domain already earned — a one-time architectural choice, not something redone per branch. It's why a 50th branch can rank faster than your 1st one ever did.",
      },
      {
        title: "Consistency at Scale",
        subtitle: "the maintenance: ongoing, for as long as the network exists.",
        stat: { value: "20%", label: "listing inconsistency is enough to put a fifth of your branches working against the rest" },
        problem: "As branch count grows, so does the number of places your name, address, and phone number can quietly drift out of sync.",
        fix: "We monitor every branch, every platform, continuously — checking new locations as they open and re-checking existing ones as their details change.",
      },
      {
        title: "Group-Level & Branch-Level Reporting",
        subtitle: "the visibility: two audiences, two different reports.",
        problem: "A regional director scanning fifty branches needs something completely different from a single office manager checking their own patch.",
        fix: "Branch-level reports stay short and specific to that location. Group-level reports compare every branch side by side, showing head office where to focus next.",
      },
      {
        title: "White-Label Option",
        subtitle: "the branding: whose name appears on everything you're already getting.",
        problem: "For franchise groups, a report stamped with a third-party vendor's name looks like an outside tool, not something head office owns.",
        fix: "Every report and dashboard can carry your own branding instead — your logo, your name, your colours. The work doesn't change, only whose name is on it.",
      },
      {
        title: "Territory Exclusivity",
        subtitle: "the guarantee: a policy, not a task.",
        problem: "Without exclusivity, the advantage you're paying for could just as easily be bought by the rival down the road.",
        fix: "We work with only one estate agency per local area — every territory you expand into is locked in the moment you do.",
      },
    ],
  },
];
