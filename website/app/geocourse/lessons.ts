export type ExternalLink = { label: string; href: string };

export type FixBranch = {
  condition: string;
  action: string;
  steps?: string[];
  links?: ExternalLink[];
};

export type Lesson = {
  slug: string;
  category: string;
  categoryIndex: number;
  itemIndex: number;
  title: string;
  whatIsIt: string;
  analogy?: { label: string; text: string }[];
  /** Free-form closing content (no diagnose/fix) — used for the intro page
   *  and the honest-limits / course-completion pages. An empty heading
   *  continues straight on from whatIsIt rather than opening a new section. */
  closingSections?: { heading: string; paragraphs: string[]; cta?: { label: string; href: string } }[];
  demoComponent?: "robots-txt" | "schema-markup";
  whyCustomer?: string;
  whyCustomerStat?: { value: string; label: string };
  whyAI?: string;
  whyAIBadge?: string;
  diagnoseSteps?: string[];
  diagnoseLink?: ExternalLink;
  diagnoseMethods?: FixBranch[];
  fixBranches?: FixBranch[];
  cadence?: string;
  cadenceBadge?: string;
  doneWithYou?: string;
  doneForYou?: string;
};

export const lessons: Lesson[] = [
  {
    slug: "before-you-start",
    category: "Introduction",
    categoryIndex: 0,
    itemIndex: 0,
    title: "Before You Start",
    whatIsIt:
      "If you've been through the SEO guide already, you'll know my story — turning around a failing branch by discovering we simply weren't visible online. What I didn't fully appreciate at the time was that fixing our Google ranking was only half the fight.",
    closingSections: [
      {
        heading: "",
        paragraphs: [
          "A while after we'd started climbing Google's results properly, I tried something else: I asked ChatGPT, Copilot, and Gemini directly — \"who's the best estate agent in my area?\" We'd worked hard to be visible on Google. We were nowhere on any of them.",
          "That was the moment I realised this isn't one battle, it's two. Ranking well on Google doesn't automatically mean AI tools recommend you — they work differently, weigh different things, and increasingly, that's where a growing number of buyers, sellers, and landlords are starting their search instead of typing into Google at all.",
          "This guide covers that second battle: GEO, Generative Engine Optimisation — making sure ChatGPT, Gemini, Copilot, and Perplexity actually name you when someone asks who to trust.",
          "Same honest approach as before: nothing in here is beyond what you can genuinely do yourself, and I'll tell you plainly where the evidence is solid and where it's still genuinely uncertain — this field is newer than traditional SEO, and anyone claiming total certainty about how AI models pick who to cite is overselling what's actually known.",
          "And the same offer applies. This is free. If you get to the end and think \"I understand what I need to do, I just don't have the time to do it properly,\" that's what our Done-With-You and Done-For-You services are for — covered at the end.",
        ],
      },
      {
        heading: "What Is GEO, and Why Does It Actually Matter?",
        paragraphs: [
          "GEO stands for Generative Engine Optimisation — making sure AI tools like ChatGPT, Google's Gemini, Microsoft's Copilot, and Perplexity actually name your business when someone asks a question relevant to what you do.",
          "This is genuinely different from a normal Google search. When someone searches Google the traditional way, they get a list of links and pick one themselves. When someone asks an AI tool the same question, the AI picks a small handful of businesses to name directly — often just one or two — and the person often never sees any other options at all. If you're not one of the names it picks, you're not \"ranked lower.\" You simply don't exist in that conversation.",
          "Every item below is marked with how confident the underlying evidence actually is — confirmed (the AI companies themselves have stated this is a factor), strongly observed (independent research consistently shows the pattern, even without an official confirmation), or emerging and unproven (a genuine, reasonable bet, but not yet backed by solid evidence). Worth knowing the difference before you decide where to spend your time.",
          "The end goal: being the name AI tools actually say, not just a website that technically exists somewhere in their training data.",
        ],
      },
    ],
  },
  {
    slug: "ai-crawler-access",
    category: "Technical Foundations",
    categoryIndex: 1,
    itemIndex: 1,
    title: "AI Crawler Access",
    whatIsIt:
      "Whether the specific web crawlers that power AI search — OpenAI's, Perplexity's, and others — are actually allowed to read your website at all. Imagine putting up a \"closed\" sign on your shop door without realising it, while still technically being open for business inside.",
    demoComponent: "robots-txt",
    whyCustomer:
      "Invisible to them directly — but the consequence is total: if an AI crawler can't read your site, it simply cannot mention you, no matter how good your business genuinely is.",
    whyCustomerStat: { value: "1 in 4", label: "business websites accidentally block the crawlers that power AI citations" },
    whyAI:
      "Roughly 1 in 4 business websites accidentally block the crawlers that power AI citations, usually through overly aggressive security settings that treat a legitimate AI crawler the same as a malicious bot. OpenAI states plainly that a blocked site will never appear in its search answers — not ranked lower, genuinely absent.",
    whyAIBadge: "Confirmed: OpenAI says a blocked site never appears at all",
    diagnoseMethods: [
      {
        condition: "Method 1 — Check robots.txt directly",
        action: "the file is always public, so this works for any site.",
        steps: [
          "Visit yourwebsite.com/robots.txt.",
          "Check for any line blocking user-agents like GPTBot, PerplexityBot, ClaudeBot, or Google-Extended.",
        ],
      },
      {
        condition: "Method 2 — Check your CDN or security settings",
        action:
          "robots.txt isn't the only place this happens — security and CDN tools often block AI crawlers by default, separately from robots.txt entirely.",
        steps: [
          "If you use Cloudflare or a similar security/CDN service, log in and check its bot-management settings specifically.",
          "Paste both findings into ChatGPT or Claude and ask directly: \"is anything here blocking a major AI crawler?\"",
        ],
        links: [
          { label: "ChatGPT", href: "https://chatgpt.com" },
          { label: "Claude", href: "https://claude.ai" },
        ],
      },
    ],
    fixBranches: [
      {
        condition: "Blocked in robots.txt",
        action: "remove any line specifically blocking an AI crawler's user-agent.",
      },
      {
        condition: "Blocked by your CDN or security settings",
        action: "check for an \"AI bot\" or \"known bots\" toggle and switch it to \"allow.\"",
      },
    ],
    cadence:
      "Security settings and CDN providers update their defaults periodically, sometimes re-blocking crawlers without you changing anything yourself — worth a check every couple of months.",
    cadenceBadge: "~10 min, every couple of months",
    doneWithYou: "we check this for you and tell you exactly what to change, and where.",
    doneForYou: "we monitor this continuously and fix it the moment anything changes.",
  },
  {
    slug: "server-side-rendering",
    category: "Technical Foundations",
    categoryIndex: 1,
    itemIndex: 2,
    title: "Server-Side Rendering & Hidden Content",
    whatIsIt:
      "Whether your page's actual content loads as real, readable text, or only appears after JavaScript runs in a visitor's browser — something AI crawlers often can't do properly. Imagine a shop window that looks empty until a customer physically pushes a button to reveal the display — most people, and most AI crawlers, never find that button.",
    whyCustomer:
      "A human visitor's browser usually runs the JavaScript automatically, so they see the page fine — this problem is largely invisible to a real visitor.",
    whyAI:
      "AI crawlers frequently can't properly execute JavaScript the way a human's browser does, meaning content that only loads dynamically can be effectively invisible to them, even though a person browsing normally sees it perfectly well.",
    whyAIBadge: "Confirmed: AI crawlers often can't run JavaScript at all",
    diagnoseMethods: [
      {
        condition: "Method 1 — Check the raw source",
        action: "shows you exactly what's actually in the page, before any script runs.",
        steps: [
          "Right-click your page, click \"View Page Source.\"",
          "Check whether your actual page content (text, listing details) appears directly in that raw code, or whether the page is mostly empty containers waiting to be filled in by JavaScript.",
          "If you're unsure what you're looking at, paste a section of the source code into AI and ask: \"does this show the actual content, or is it loaded dynamically by JavaScript?\"",
        ],
        links: [
          { label: "ChatGPT", href: "https://chatgpt.com" },
          { label: "Claude", href: "https://claude.ai" },
        ],
      },
      {
        condition: "Method 2 — Load the page with JavaScript switched off",
        action: "the most direct test — if the content disappears without JavaScript, an AI crawler sees exactly what you're seeing now.",
        steps: [
          "In Chrome, open Settings → Privacy and security → Site settings → JavaScript, and set it to \"Don't allow.\"",
          "Reload your key pages and see what's actually still there.",
          "Remember to turn JavaScript back on afterwards.",
        ],
      },
    ],
    fixBranches: [
      {
        condition: "Confirmed — key content only appears via JavaScript",
        action:
          "this is a genuinely technical fix, usually meaning a developer needs to implement \"server-side rendering\" for key content — ensuring important text is present in the raw page, not just added afterward by a script.",
      },
    ],
    cadence: "Worth re-checking whenever your site undergoes a significant rebuild or platform change.",
    cadenceBadge: "~10 min, after any rebuild",
    doneWithYou: "we diagnose this and give your developer the exact brief.",
    doneForYou: "we manage this fix directly with your development team.",
  },
  {
    slug: "gated-content",
    category: "Technical Foundations",
    categoryIndex: 1,
    itemIndex: 3,
    title: "Content Behind Logins or Paywalls",
    whatIsIt: "Any genuinely useful content — a detailed local guide, say — that's only visible after a visitor signs up or logs in.",
    whyCustomer: "A mild inconvenience at worst — some people are willing to sign up for something genuinely useful.",
    whyAI:
      "AI crawlers generally can't get past a login wall at all, meaning anything locked behind one is effectively invisible to them, no matter how valuable the content is.",
    whyAIBadge: "Confirmed: AI crawlers can't get past a login wall",
    diagnoseMethods: [
      {
        condition: "Method 1 — Review your own site",
        action: "the direct check — is anything genuinely useful locked away.",
        steps: ["Ask yourself: is any content that could genuinely help answer a common question sitting behind a sign-up form or member area?"],
      },
      {
        condition: "Method 2 — Check it logged out",
        action: "a genuine spot-check catches pages you might forget are gated.",
        steps: [
          "Open your key pages in a private/incognito browser window.",
          "Note anything that prompts you to sign in or log in before you can read it.",
        ],
      },
    ],
    fixBranches: [
      {
        condition: "Content is gated with no real reason to be",
        action:
          "move it out from behind logins where possible — reserve gated content for things that need to stay gated for a real reason (like personal account data), not general information that could help build your visibility.",
      },
    ],
    cadence: "Worth reviewing whenever new gated content is planned, to weigh whether it genuinely needs to be locked.",
    cadenceBadge: "~5 min, per new gated page planned",
    doneWithYou: "we review your site and flag anything worth moving.",
    doneForYou: "we manage this content strategy directly.",
  },
  {
    slug: "schema-markup-geo",
    category: "Technical Foundations",
    categoryIndex: 1,
    itemIndex: 4,
    title: "Schema Markup / Structured Data",
    whatIsIt:
      "Hidden code telling AI systems exactly what your business is, what it does, and where — the same schema markup covered in the SEO guide, but this time specifically for AI.",
    demoComponent: "schema-markup",
    whyCustomer:
      "Invisible directly, but the effect shows up as accuracy — a business with clean structured data is less likely to have an AI confidently state something wrong about it.",
    whyAI:
      "In March 2025, Google and Microsoft publicly confirmed they use structured data to help power their generative AI features, and ChatGPT has confirmed using the same kind of structured data too. This is one of the few GEO claims that's genuinely confirmed, not just observed or theorised.",
    whyAIBadge: "Confirmed by Google, Microsoft, and ChatGPT directly",
    diagnoseMethods: [
      {
        condition: "Method 1 — Google's Rich Results Test",
        action: "checks specifically for the schema types Google currently supports.",
        steps: ["Go to search.google.com/test/rich-results.", "Enter your page's URL and check the results."],
        links: [{ label: "Rich Results Test", href: "https://search.google.com/test/rich-results" }],
      },
      {
        condition: "Method 2 — Schema Markup Validator, for full validation",
        action: "checks all schema.org markup for correctness, not just Google's supported rich-result types.",
        steps: ["Open validator.schema.org.", "Enter your page's URL and run the test."],
        links: [{ label: "Schema Markup Validator", href: "https://validator.schema.org/" }],
      },
    ],
    fixBranches: [
      {
        condition: "No schema detected, or missing Organization/LocalBusiness details",
        action:
          "ask ChatGPT or Claude to generate JSON-LD schema for your business — Organization and LocalBusiness types especially — using your real details, and add it to your site's header.",
        links: [
          { label: "ChatGPT", href: "https://chatgpt.com" },
          { label: "Claude", href: "https://claude.ai" },
        ],
      },
    ],
    cadence: "Worth re-checking monthly, since site updates can silently break this without anything visibly changing.",
    cadenceBadge: "~15 min/month",
    doneWithYou: "we generate the code and tell you exactly where it goes.",
    doneForYou: "we implement and monitor this directly, ongoing.",
  },
  {
    slug: "llms-txt",
    category: "Technical Foundations",
    categoryIndex: 1,
    itemIndex: 5,
    title: "llms.txt",
    whatIsIt:
      "A newer, separate file — different from robots.txt — designed to give AI systems a clean, curated summary of your site's most important content.",
    whyCustomer: "Entirely invisible to them.",
    whyCustomerStat: { value: "800K+", label: "sites have already adopted llms.txt, despite no confirmed AI use yet" },
    whyAI:
      "As of early 2026, no major AI company — not OpenAI, Google, Anthropic, or Meta — has publicly confirmed that its production systems actually read or act on this file for deciding what to cite. It's a real, growing standard, adopted by over 800,000 sites, but its main confirmed use right now is helping AI coding tools like Cursor or Claude Code quickly understand a codebase or documentation site — not helping ChatGPT decide who the best estate agent in your town is. It's a low-cost, forward-looking bet on where things might be heading, not a proven lever today.",
    whyAIBadge: "Emerging and unproven — no major AI company confirms using it for citations",
    diagnoseMethods: [
      {
        condition: "Method 1 — Check whether it exists",
        action: "the direct check.",
        steps: ["Check whether yourwebsite.com/llms.txt exists."],
      },
      {
        condition: "Method 2 — Ask directly, since this changes fast",
        action: "the confirmed/unproven status here can shift quickly — asking directly gets you the most current read.",
        steps: [
          "Ask ChatGPT or Claude: \"do AI systems currently use llms.txt files when deciding what businesses to cite?\"",
          "Treat the answer as a snapshot, not a permanent fact — recheck occasionally as the standard matures.",
        ],
        links: [
          { label: "ChatGPT", href: "https://chatgpt.com" },
          { label: "Claude", href: "https://claude.ai" },
        ],
      },
    ],
    fixBranches: [
      {
        condition: "If you decide it's worth doing anyway",
        action:
          "create a simple Markdown file at your site's root, starting with your business name as a heading, a short 1-3 sentence summary, and links to your most important pages with brief, specific descriptions of what each one covers.",
      },
    ],
    cadence: "If you do implement this, update it quarterly, and keep it in sync with your robots.txt so the two files don't contradict each other.",
    cadenceBadge: "Quarterly, if implemented",
    doneWithYou: "we build this for you as a low-cost addition, with realistic expectations set about its current impact.",
    doneForYou: "we include and maintain this as part of ongoing technical work, without treating it as a primary lever.",
  },
  {
    slug: "answer-ready-content",
    category: "On-Page & Content",
    categoryIndex: 2,
    itemIndex: 6,
    title: "Answer-Ready Content Structure",
    whatIsIt:
      "Writing content so a direct, specific answer sits clearly at the start of a section — the same principle covered in the SEO guide, but this is now central to GEO, not a nice extra.",
    whyCustomer:
      "An AI tool giving someone a clear, direct, useful answer builds trust in that answer — vague or buried information doesn't get used, even if it's technically accurate.",
    whyCustomerStat: { value: "37-41%", label: "higher odds of being cited, per independent Princeton/Georgia Tech research" },
    whyAI:
      "Independent research (Princeton and Georgia Tech) found that adding clear, specific facts and figures to a page increases its odds of being cited by an AI system by roughly 37-41%. AI tools scan for a direct answer to lift into their response — vague, meandering content simply doesn't get pulled.",
    whyAIBadge: "Strongly observed: independent research puts the lift at 37-41%",
    diagnoseMethods: [
      {
        condition: "Method 1 — Check it yourself",
        action: "quick, and catches the obvious cases.",
        steps: ["Pick a key page and check: does it answer its main question in the first 2-3 sentences, or does it take several paragraphs to get there?"],
      },
      {
        condition: "Method 2 — Ask an AI tool to check for you",
        action: "an outside read catches what's easy to miss when you already know the answer yourself.",
        steps: [
          "Paste the page's text into ChatGPT or Claude.",
          "Ask: \"does this answer its main question within the first 2-3 sentences? If not, where does the actual answer appear?\"",
        ],
        links: [
          { label: "ChatGPT", href: "https://chatgpt.com" },
          { label: "Claude", href: "https://claude.ai" },
        ],
      },
    ],
    fixBranches: [
      {
        condition: "The answer is buried",
        action: "restructure key pages so a short, direct answer appears immediately under any heading phrased as a question, with supporting detail after.",
      },
    ],
    cadence: "Worth reviewing whenever you publish new content, and re-checking older key pages every few months as writing habits drift.",
    cadenceBadge: "~10 min, per page, every few months",
    doneWithYou: "we review your content and tell you exactly what to restructure.",
    doneForYou: "we write and maintain this directly, ongoing.",
  },
  {
    slug: "content-freshness",
    category: "On-Page & Content",
    categoryIndex: 2,
    itemIndex: 7,
    title: "Content Freshness",
    whatIsIt: "How recently a page has been genuinely updated, not just republished with a new date.",
    whyCustomer: "Outdated information — old prices, an area guide that hasn't accounted for a recent development — actively misleads someone relying on it.",
    whyCustomerStat: { value: "~50%", label: "of AI citations trace back to content updated within the last 3 months" },
    whyAI:
      "Content that AI tools actually cite is on average roughly a quarter more recently updated than content that simply ranks well on Google, and about half of all AI citations trace back to content updated within the last three months.",
    whyAIBadge: "Strongly observed: ~50% of AI citations trace to content updated in the last 3 months",
    diagnoseMethods: [
      {
        condition: "Method 1 — Check your own pages",
        action: "the direct check.",
        steps: ["Check the last genuine update date on your key pages — not just the site-wide \"last modified\" timestamp, the actual content itself."],
      },
      {
        condition: "Method 2 — Check what's currently getting cited instead",
        action: "shows whether staleness is actually costing you, not just whether it's theoretically possible.",
        steps: [
          "Ask ChatGPT or Perplexity a question your page should answer.",
          "If a competitor is cited instead, check how recently their page was updated compared to yours.",
        ],
      },
    ],
    fixBranches: [
      {
        condition: "Pages are going stale",
        action: "refresh key pages regularly with real, meaningful updates — new figures, current examples — not just a cosmetic date change.",
      },
    ],
    cadence:
      "This needs to be genuinely ongoing — a page that was fresh three months ago is no longer fresh today. Worth a rolling review, refreshing a handful of key pages every month.",
    cadenceBadge: "Rolling, a few pages every month",
    doneWithYou: "we flag which pages are going stale and what needs updating.",
    doneForYou: "we refresh this content directly, on a rolling monthly basis.",
  },
  {
    slug: "comprehensive-original-content",
    category: "On-Page & Content",
    categoryIndex: 2,
    itemIndex: 8,
    title: "Comprehensive, Original Content",
    whatIsIt:
      "Content that genuinely, fully answers a topic, written with real local knowledge — the GEO version of the SEO guide's depth and originality items, since AI systems weigh this too.",
    whyCustomer: "Thin, generic content doesn't build the kind of confidence someone needs before trusting an agent with a major financial decision.",
    whyAI:
      "AI systems, like traditional search, increasingly favour content that demonstrates genuine expertise and covers a topic fully — thin or clearly generic content is less likely to be trusted enough to cite confidently.",
    whyAIBadge: "Strongly observed: thin, generic content is less likely to be cited",
    diagnoseMethods: [
      {
        condition: "Method 1 — Ask yourself honestly",
        action: "the most direct test.",
        steps: ["Could this page belong to any agency, in any town, unchanged?"],
      },
      {
        condition: "Method 2 — Ask an AI tool for an outside read",
        action: "the same self-check is easy to answer too kindly — a second, more objective read helps.",
        steps: [
          "Paste your page's text into ChatGPT or Claude.",
          "Ask: \"does this read as generic, or genuinely written by someone with real local expertise? What's missing?\"",
        ],
        links: [
          { label: "ChatGPT", href: "https://chatgpt.com" },
          { label: "Claude", href: "https://claude.ai" },
        ],
      },
    ],
    fixBranches: [
      {
        condition: "If the honest answer is yes",
        action: "add genuine local detail, real data, and first-hand knowledge — the same approaches covered in the SEO guide's depth section apply directly here too.",
      },
    ],
    cadence: "Ongoing — competitors add content too, and AI's assessment of what counts as \"comprehensive\" shifts as the overall bar rises.",
    cadenceBadge: "Ongoing",
    doneWithYou: "we tell you exactly where your content falls short.",
    doneForYou: "we research and write this directly.",
  },
  {
    slug: "ai-query-mapping",
    category: "On-Page & Content",
    categoryIndex: 2,
    itemIndex: 9,
    title: "AI Query Mapping",
    whatIsIt: "Researching every realistic question a buyer, seller, or landlord might actually ask an AI tool — not just the obvious \"best agent in [town].\"",
    whyCustomer:
      "People ask AI tools genuinely varied, specific questions — \"is now a good time to sell in [town],\" \"what's the average time on market\" — and if nothing you've written answers that specific question, you can't be cited for it, no matter how good you are generally.",
    whyAI:
      "An AI tool can only cite content that actually exists and answers the specific question being asked — the wider your content covers real, varied questions, the more opportunities exist for you to be the one cited.",
    whyAIBadge: "A reasonable inference from how these systems actually work",
    diagnoseMethods: [
      {
        condition: "Method 1 — Ask an AI tool directly",
        action: "a fast first pass across realistic questions.",
        steps: [
          "Ask ChatGPT or Claude: \"what questions would a home buyer, seller, or landlord realistically ask an AI assistant about property in [your town]?\"",
          "Compare the list against what you've actually written about.",
        ],
        links: [
          { label: "ChatGPT", href: "https://chatgpt.com" },
          { label: "Claude", href: "https://claude.ai" },
        ],
      },
      {
        condition: "Method 2 — Check real questions in the wild",
        action: "AI-generated guesses are a good start, but real questions people actually type are worth checking too.",
        steps: [
          "Search Reddit and local property forums for genuine questions people ask about your area.",
          "Note any that nothing on your site currently answers.",
        ],
      },
    ],
    fixBranches: [
      {
        condition: "Once you've found the gaps",
        action: "build content around the genuine gaps this research reveals, prioritising questions that shift with the market — interest rates, local legislation, seasonal demand.",
      },
    ],
    cadence: "What people ask shifts with the market — worth refreshing this research every few months, not treating it as a one-time list.",
    cadenceBadge: "Every few months",
    doneWithYou: "we run this research and hand you the question list and content plan.",
    doneForYou: "we research and build this content directly, on an ongoing basis.",
  },
  {
    slug: "reviews-rating-schema",
    category: "Off-Site & Authority",
    categoryIndex: 3,
    itemIndex: 10,
    title: "Reviews & Rating Schema",
    whatIsIt:
      "Marking up your genuine review score and count in a machine-readable format, so AI tools can read it as a hard data point rather than inferring your reputation from scattered text.",
    whyCustomer: "An AI naming an agent with a clearly stated, credible rating feels more trustworthy than a vague, unquantified mention.",
    whyAI:
      "For \"best X\" and comparison-style questions, AI increasingly uses a declared review score as a direct filter when building its shortlist. Worth knowing: this genuinely needs to be sourced from a real third party (Google, Trustpilot) — AI and search engines both discount ratings that look self-published.",
    whyAIBadge: "Strongly observed: AI uses a declared score as a shortlist filter",
    diagnoseMethods: [
      {
        condition: "Method 1 — Check with the Rich Results Test",
        action: "confirms whether the markup exists at all.",
        steps: ["Check whether your site currently has AggregateRating schema implemented, using the same Rich Results Test as the Schema Markup item."],
        links: [{ label: "Rich Results Test", href: "https://search.google.com/test/rich-results" }],
      },
      {
        condition: "Method 2 — Check the source is genuine",
        action: "AI and search engines both discount ratings that look self-published — worth confirming yours isn't one of them.",
        steps: ["Check that the rating in your schema is correctly attributed back to a real third-party platform (Google, Trustpilot), not generated internally."],
      },
    ],
    fixBranches: [
      {
        condition: "Missing, or not correctly attributed",
        action:
          "add this markup, correctly attributed back to the platform the reviews actually came from — this connects directly to the review-generation work covered in the Review Management guide.",
      },
    ],
    cadence: "Your real score changes constantly as new reviews come in — this needs syncing monthly, or it quietly goes stale and AI works from an outdated number.",
    cadenceBadge: "~10 min/month",
    doneWithYou: "we tell you exactly how to keep this synced.",
    doneForYou: "we keep this updated automatically, ongoing.",
  },
  {
    slug: "backlinks-branded-mentions",
    category: "Off-Site & Authority",
    categoryIndex: 3,
    itemIndex: 11,
    title: "Backlinks & Branded Mentions",
    whatIsIt: "Being genuinely mentioned by name across the web — press, directories, other sites — not just linked to.",
    whyCustomer: "Seeing a business mentioned independently, in places they trust, builds credibility a website alone can't create.",
    whyCustomerStat: { value: "~3x", label: "stronger correlation with AI visibility for brand mentions vs. traditional backlinks" },
    whyAI:
      "Independent analysis has found that being mentioned by name across the web correlates roughly three times more strongly with AI visibility than traditional backlinks do — being talked about, not just linked to, is increasingly the stronger signal.",
    whyAIBadge: "Strongly observed: mentions correlate ~3x more strongly than links",
    diagnoseMethods: [
      {
        condition: "Method 1 — Search your own name",
        action: "the direct read on how you're already being talked about.",
        steps: [
          "Search your business name in quotation marks in Google.",
          "See how many genuine, independent mentions come up beyond your own website and social profiles.",
        ],
      },
      {
        condition: "Method 2 — Check your linked mentions in Search Console",
        action: "narrower than the full mention count, but gives you a precise, verifiable baseline for the subset that do link.",
        steps: ["Go to Google Search Console and select your property.", "Click \"Links\" in the sidebar and review \"Top linking sites.\""],
        links: [{ label: "Google Search Console", href: "https://search.google.com/search-console" }],
      },
    ],
    fixBranches: [
      {
        condition: "Genuine mentions are thin",
        action:
          "pursue genuine coverage — the same digital PR and community engagement approaches covered elsewhere in this guide, since a mention is what you're actually after here, a link is a bonus on top.",
      },
    ],
    cadence: "Ongoing — a handful of mentions doesn't sustain visibility, this needs to keep building.",
    cadenceBadge: "Ongoing",
    doneWithYou: "we identify opportunities and help you pursue them.",
    doneForYou: "we manage this outreach directly.",
  },
  {
    slug: "reddit-forum-presence-geo",
    category: "Off-Site & Authority",
    categoryIndex: 3,
    itemIndex: 12,
    title: "Reddit and Forum Presence",
    whatIsIt: "Genuinely participating in real conversations happening in property-related communities.",
    whyCustomer: "A genuinely helpful answer in a real community discussion builds trust before someone's even visited your website.",
    whyCustomerStat: { value: "77%", label: "of what AI cites about a business comes from sources other than its own website" },
    whyAI:
      "Reddit was specifically named as a 2026 Google ranking signal in its own right. More broadly, roughly 77% of what AI cites about a specific business comes from sources other than that business's own website — forums and community discussion make up a large share of that.",
    whyAIBadge: "Confirmed for Reddit specifically; ~77% of AI citations come from off-site sources",
    diagnoseMethods: [
      {
        condition: "Method 1 — Find where the conversations are",
        action: "shows you the specific communities worth contributing to.",
        steps: ["Search Reddit and property forums for your town plus \"estate agent\" or \"letting agent.\""],
      },
      {
        condition: "Method 2 — Check what's already being said about you",
        action: "these conversations happen whether you're part of them or not.",
        steps: ["Search Reddit directly for your business name.", "Note anything already said, good or bad, and whether it's worth a genuine, honest reply."],
      },
    ],
    fixBranches: [
      {
        condition: "Genuine participation",
        action: "answer real questions genuinely, over time — never spam links, this only works with authentic participation.",
      },
    ],
    cadence: "Genuinely ongoing — sustained participation over months is what this actually takes, not a single post.",
    cadenceBadge: "A few times a week, ongoing",
    doneWithYou: "we identify the right communities and guide your approach.",
    doneForYou: "we manage this presence directly on your behalf.",
  },
  {
    slug: "digital-pr",
    category: "Off-Site & Authority",
    categoryIndex: 3,
    itemIndex: 13,
    title: "Digital PR",
    whatIsIt: "Genuine mentions in real news — a local paper quoting you on the property market.",
    whyCustomer: "Being quoted as a genuine local expert builds a kind of trust an advert can't replicate.",
    whyAI:
      "Press mentions are exactly the kind of branded mention that correlates strongly with AI visibility — genuine third-party validation, not something you say about yourself.",
    whyAIBadge: "Ties directly to the branded-mention signal covered earlier",
    diagnoseMethods: [
      {
        condition: "Method 1 — Find who to approach",
        action: "identifies real, active local journalists worth pitching.",
        steps: ["Search \"[your town] property news\" to find active local journalists."],
      },
      {
        condition: "Method 2 — Check for coverage you've already had",
        action: "worth confirming you haven't already been mentioned somewhere you're not aware of.",
        steps: [
          "Search your business name plus your town in Google News.",
          "Note any existing coverage, and who wrote it — a returning journalist is an easier pitch than a cold one.",
        ],
      },
    ],
    fixBranches: [{ condition: "Approaching a journalist", action: "email directly, offering to be an ongoing source." }],
    cadence: "Ongoing — one mention fades, this compounds through a sustained relationship.",
    cadenceBadge: "Ongoing",
    doneWithYou: "we identify journalists and draft your outreach.",
    doneForYou: "we manage press relationships directly.",
  },
  {
    slug: "knowledge-panel-entity",
    category: "Entity & Local Presence",
    categoryIndex: 4,
    itemIndex: 14,
    title: "Knowledge Panel & Entity Optimisation",
    whatIsIt: "Making sure AI systems recognise your business as a distinct, real, established entity — not just a website among thousands.",
    whyCustomer: "An AI describing you with clear confidence, rather than hedging or vague language, reads as more trustworthy.",
    whyAI:
      "AI increasingly treats businesses as distinct entities, cross-checking sources like Google's Knowledge Panel, Companies House, and LinkedIn to confirm you're a real, consistent business, not a collection of disconnected mentions.",
    whyAIBadge: "Strongly observed: AI cross-checks Knowledge Panel, Companies House, LinkedIn",
    diagnoseMethods: [
      {
        condition: "Method 1 — Check your Knowledge Panel",
        action: "the most visible sign of recognised entity status.",
        steps: ["Search your business name on Google.", "Check whether a Knowledge Panel appears on the right of the results."],
      },
      {
        condition: "Method 2 — Check Companies House and LinkedIn",
        action: "two of the sources AI cross-checks to confirm you're a real, consistent entity.",
        steps: [
          "Check your Companies House listing matches your real details.",
          "Check your LinkedIn company page matches too — name, address, phone, exactly.",
        ],
        links: [{ label: "Companies House", href: "https://find-and-update.company-information.service.gov.uk" }],
      },
    ],
    fixBranches: [
      { condition: "No Knowledge Panel, or it's wrong", action: "claim and correct it where eligible." },
      { condition: "Companies House or LinkedIn don't match", action: "update whichever is out of sync so all three tell the same story." },
    ],
    cadence: "Worth checking quarterly, since these sources can drift out of sync as your business changes.",
    cadenceBadge: "~10 min/quarter",
    doneWithYou: "we audit these sources and tell you what to correct.",
    doneForYou: "we manage this directly, ongoing.",
  },
  {
    slug: "nap-consistency-geo",
    category: "Entity & Local Presence",
    categoryIndex: 4,
    itemIndex: 15,
    title: "NAP Consistency",
    whatIsIt: "Your name, address, and phone number, identical everywhere online — the same item covered in the SEO guide, mattering here for a slightly different reason.",
    whyCustomer: "An AI confidently stating the wrong phone number is worse than not mentioning you at all — it actively damages trust in a way silence doesn't.",
    whyAI:
      "AI systems cross-check these details across sources before citing a business confidently — inconsistency creates genuine doubt in the AI's own \"mental model\" of who you are.",
    whyAIBadge: "Strongly observed: inconsistency creates doubt in the AI's model of who you are",
    diagnoseSteps: ["The process is identical to the SEO guide's NAP Consistency check — see that lesson for the full method."],
    diagnoseLink: { label: "NAP Consistency (SEO guide)", href: "/seocourse/nap-consistency" },
    fixBranches: [
      {
        condition: "Mismatches found",
        action:
          "fix them the same way covered in the SEO guide's NAP Consistency lesson — the process is identical, it just now also protects your AI visibility, not only your Google ranking.",
        links: [{ label: "NAP Consistency (SEO guide)", href: "/seocourse/nap-consistency" }],
      },
    ],
    cadence: "Quarterly, alongside the same check from the SEO guide.",
    cadenceBadge: "~30 min/quarter",
    doneWithYou: "covered under the same service as the SEO guide's NAP item.",
    doneForYou: "covered under the same service as the SEO guide's NAP item.",
  },
  {
    slug: "multi-platform-profiles-geo",
    category: "Entity & Local Presence",
    categoryIndex: 4,
    itemIndex: 16,
    title: "Multi-Platform Business Profiles",
    whatIsIt: "Your Google Business Profile, Bing Places, and Apple Business Connect listings — the same items from the SEO guide, feeding AI systems too.",
    whyCustomer: "The same trust signals that matter for a human visitor matter to an AI system checking your legitimacy.",
    whyAI:
      "AI tools draw on these same business profile sources when building an understanding of who you are — an incomplete or unclaimed profile is a missed signal on both fronts at once.",
    whyAIBadge: "Strongly observed: AI draws on the same profile sources as SEO",
    diagnoseSteps: ["The setup and check process is identical to the SEO guide's Google Business Profile and Multi-Platform Presence lessons."],
    diagnoseLink: { label: "Google Business Profile (SEO guide)", href: "/seocourse/google-business-profile" },
    fixBranches: [
      {
        condition: "Incomplete or unclaimed listings",
        action: "the same setup work covered in the SEO guide protects both your Google ranking and your AI visibility simultaneously.",
        links: [
          { label: "Google Business Profile (SEO guide)", href: "/seocourse/google-business-profile" },
          { label: "Multi-Platform Presence (SEO guide)", href: "/seocourse/multi-platform-presence" },
        ],
      },
    ],
    cadence: "Same schedule as the SEO guide's equivalent items.",
    cadenceBadge: "Same as SEO guide",
    doneWithYou: "covered under the same service as the SEO guide's Google Business Profile items.",
    doneForYou: "covered under the same service as the SEO guide's Google Business Profile items.",
  },
  {
    slug: "ai-visibility-tracking",
    category: "Measurement",
    categoryIndex: 5,
    itemIndex: 17,
    title: "AI Visibility Tracking",
    whatIsIt: "Actually checking what ChatGPT, Gemini, Copilot, and Perplexity currently say about your business, rather than assuming.",
    whyCustomer: "Invisible to them — this is entirely about you understanding your own position.",
    whyAI: "Not a ranking factor itself — this is the instrument for knowing whether everything else in this guide is actually working, and against whom.",
    whyAIBadge: "Not a ranking factor — the instrument for measuring everything else",
    diagnoseMethods: [
      {
        condition: "Method 1 — Ask each tool manually",
        action: "the thorough version — no tool, no cost.",
        steps: [
          "Manually ask each major AI tool the exact questions a real customer would — \"best estate agent in [town],\" \"who should I use to sell my house in [town]\" — and record what comes back, including whether a competitor is named instead of you.",
        ],
      },
      {
        condition: "Method 2 — Use a dedicated AI-search tracking tool",
        action: "runs this check across multiple platforms at once, rather than manually asking each one individually.",
        steps: ["Try a free tool like HubSpot's AI Search Grader or Mangools' AI Search Grader."],
        links: [
          { label: "HubSpot AI Search Grader", href: "https://www.hubspot.com/ai-search-grader" },
          { label: "Mangools AI Search Grader", href: "https://mangools.com/ai-search-grader" },
        ],
      },
    ],
    fixBranches: [
      {
        condition: "Once you know where you stand",
        action: "there's no direct fix here — use what you've found to prioritise the other items in this guide where you're actually losing ground.",
      },
    ],
    cadence: "Worth checking monthly, tracking whether your position is improving, holding steady, or slipping.",
    cadenceBadge: "~15 min/month",
    doneWithYou: "we run this check and show you exactly where you stand.",
    doneForYou: "we track this monthly and report on real movement over time.",
  },
  {
    slug: "full-funnel-attribution",
    category: "Measurement",
    categoryIndex: 5,
    itemIndex: 18,
    title: "Full-Funnel Attribution",
    whatIsIt: "Connecting AI mentions to real enquiries, not just visibility for its own sake.",
    whyCustomer: "Invisible to them.",
    whyAI:
      "Also not something AI itself weighs — but without this, there's no way to know whether AI visibility is actually turning into real business, which is ultimately the entire point.",
    whyAIBadge: "Not an AI ranking factor — but the only way to know it's working",
    diagnoseMethods: [
      {
        condition: "Method 1 — Ask yourself honestly",
        action: "the quick version.",
        steps: ["Could you currently tell whether any recent enquiry came from someone who found you through an AI tool?"],
      },
      {
        condition: "Method 2 — Try to actually trace one",
        action: "the honest self-check is easy to answer optimistically — actually attempting it settles it for real.",
        steps: ["Pick your last 5 genuine enquiries.", "Try to trace whether any came via an AI tool, and note exactly where you get stuck."],
      },
    ],
    fixBranches: [
      { condition: "No way to ask directly", action: "add \"how did you hear about us?\" to every enquiry, specifically including an AI option." },
      { condition: "Want to go further", action: "where technically detectable, track referral traffic from AI platforms in your analytics." },
    ],
    cadence: "Ongoing — this data only becomes useful tracked consistently over months.",
    cadenceBadge: "Ongoing",
    doneWithYou: "we set up the tracking and show you how to read it.",
    doneForYou: "we track and report this directly, every month.",
  },
  {
    slug: "ai-reputation-response",
    category: "Reputation",
    categoryIndex: 6,
    itemIndex: 19,
    title: "AI Reputation Response",
    whatIsIt: "Catching and correcting anything inaccurate or damaging an AI tool says about your business.",
    whyCustomer:
      "An AI confidently stating wrong hours, an outdated service, or worse, can lose you a customer before they've ever contacted you directly — and there's no notification system telling you this happened, the way there is for a bad review.",
    whyAI:
      "AI systems can and do get facts wrong, particularly about smaller local businesses with less data behind them — this isn't malicious, just a genuine limitation of how these systems work.",
    whyAIBadge: "A known limitation: AI gets facts wrong more often for smaller businesses",
    diagnoseMethods: [
      {
        condition: "Method 1 — Ask periodically",
        action: "the direct check.",
        steps: ["Periodically ask each major AI tool what it knows about your business, and check the answer against reality."],
      },
      {
        condition: "Method 2 — Re-read your AI Visibility Tracking results",
        action: "that check already surfaces this — worth reading the answers specifically for factual errors, not just whether you were named.",
        steps: ["Re-read your AI Visibility Tracking results specifically for anything factually wrong — hours, services, address, anything."],
      },
    ],
    fixBranches: [
      {
        condition: "Something's wrong",
        action:
          "the fix is usually improving the underlying accurate signals (schema, NAP consistency, Knowledge Panel) rather than any direct \"correction\" mechanism — AI tools don't currently offer a simple way to flag and fix an error the way you might report one to Google directly.",
      },
    ],
    cadence: "Worth checking on a regular cycle, since there's no automatic alert for this the way there is for other issues.",
    cadenceBadge: "Monthly, alongside AI Visibility Tracking",
    doneWithYou: "we tell you how to check and what to fix if something's wrong.",
    doneForYou: "we monitor this regularly and act quickly on anything found.",
  },
  {
    slug: "competitor-ai-visibility-gaps",
    category: "Playing It Smart",
    categoryIndex: 7,
    itemIndex: 20,
    title: "Finding a Competitor's AI Visibility Gaps",
    whatIsIt: "Checking specifically what AI tools currently say about your closest named competitor, not just about yourself in isolation.",
    whyCustomer: "They're choosing between you and a specific rival AI has also mentioned, not comparing you to an abstract standard.",
    whyAI:
      "Seeing exactly which questions currently favour a named competitor tells you precisely where to focus your own content and entity-building work for maximum effect.",
    whyAIBadge: "Not a ranking factor itself — a targeting tool for everything else in this guide",
    diagnoseSteps: ["Run the same AI visibility checks from the AI Visibility Tracking item, but specifically for your closest local competitor, and compare."],
    diagnoseLink: { label: "AI Visibility Tracking", href: "/geocourse/ai-visibility-tracking" },
    fixBranches: [{ condition: "Once you've found the gaps", action: "prioritise closing the gaps where they're currently being named and you aren't." }],
    cadence: "Quarterly — competitor visibility shifts as they (or you) improve.",
    cadenceBadge: "Quarterly",
    doneWithYou: "we run this comparison and hand you the priority list.",
    doneForYou: "we monitor this directly, ongoing.",
  },
  {
    slug: "being-early-ai-platforms",
    category: "Playing It Smart",
    categoryIndex: 7,
    itemIndex: 21,
    title: "Being Early on New AI Platforms",
    whatIsIt: "Claiming and optimising for a new AI search feature or platform before it becomes standard practice.",
    whyCustomer: "Someone using a newer AI tool where you're already properly set up sees you clearly, while competitors who haven't caught up yet are simply absent.",
    whyAI:
      "This entire field is genuinely new and evolving fast — being early on schema, llms.txt, or whatever emerges next means less competition for attention while the space is still being figured out.",
    whyAIBadge: "No confirmed advantage — just far less competition while the space is new",
    diagnoseMethods: [
      {
        condition: "Method 1 — Stay generally aware",
        action: "this is more about ongoing awareness than a specific checklist.",
        steps: ["Stay generally aware of new AI search features as they roll out."],
      },
      {
        condition: "Method 2 — Follow a dedicated source",
        action: "makes staying aware less reliant on stumbling across the news yourself.",
        steps: ["Follow Search Engine Journal or Search Engine Land, both of which cover GEO/AI-search developments alongside traditional SEO."],
        links: [
          { label: "Search Engine Journal", href: "https://www.searchenginejournal.com" },
          { label: "Search Engine Land", href: "https://searchengineland.com" },
        ],
      },
    ],
    fixBranches: [
      { condition: "A new platform or feature emerges", action: "test it and implement for it as it emerges, rather than waiting until it's already mainstream and competitive." },
    ],
    cadence: "Ongoing awareness, not a fixed schedule.",
    cadenceBadge: "Ongoing awareness",
    doneWithYou: "we flag genuinely relevant new developments as they happen.",
    doneForYou: "we test and implement new opportunities on your behalf, proactively.",
  },
  {
    slug: "geo-time-and-outside-your-control",
    category: "The Honest Picture",
    categoryIndex: 8,
    itemIndex: 22,
    title: "Time, and What's Outside Your Control",
    whatIsIt:
      "Two categories of AI-visibility factor that don't respond to effort at all — one because it simply takes time, the other because it was never yours to control in the first place.",
    analogy: [
      {
        label: "Takes time, can't be rushed",
        text: "How long your business has had a consistent, accurate presence across the web — the AI equivalent of domain age.",
      },
      {
        label: "Completely outside your control",
        text: "Which AI models get trained when, how each company weighs different signals, and what your competitors choose to do.",
      },
    ],
    whyCustomer:
      "An AI confidently naming a business it clearly has substantial, consistent information about feels more credible than a vague, thin mention — and none of the factors on the right are things a customer ever thinks about directly either.",
    whyAI:
      "The amount and consistency of information available about you builds up over time — there's no shortcut, only starting properly now. None of the rest — which AI models get trained when, how each company weighs different signals, what your competitors choose to do — is something you can act on directly. The same principle as the SEO guide's equivalent section: focus entirely on what's within your control instead.",
    whyAIBadge: "Genuine factors — just not ones effort can shortcut",
  },
  {
    slug: "geo-course-complete",
    category: "Course Complete",
    categoryIndex: 9,
    itemIndex: 23,
    title: "You've Reached the End of This Guide",
    whatIsIt:
      "Everything in here is genuinely newer, less settled territory than the SEO guide — and I've tried to be honest throughout about where the evidence is solid and where it's still an educated bet, because pretending otherwise wouldn't actually help you.",
    closingSections: [
      {
        heading: "",
        paragraphs: [
          "What's consistent with the SEO guide, though, is the underlying truth: doing this properly, and doing it consistently, is what separates the businesses AI tools confidently recommend from the ones they've simply never heard of. This field moves faster than traditional SEO — which means falling behind happens faster too, but so does the opportunity to get ahead while most of your competitors haven't started at all.",
        ],
      },
      {
        heading: "A Word About Our Services",
        paragraphs: [
          "If you've read this and thought \"this is exactly what I need, but I don't have the time to keep on top of it properly\" — that's exactly what our Done-With-You and Done-For-You services are for. Every item in this guide shows you what each one covers. If something stood out, feel free to book a call — click \"Get Started\" in the top right.",
          "And if this was genuinely useful, a Google review helps more than you'd think — it's how this reaches the next person who needs it.",
          "Thank you, as always, for your attention.",
        ],
      },
    ],
  },
];
