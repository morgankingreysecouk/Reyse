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
  /** Free-form closing content (no diagnose/fix) — used for the honest-limits
   *  and course-completion pages. An empty heading continues straight on
   *  from whatIsIt rather than opening a new divided section. */
  closingSections?: {
    heading: string;
    paragraphs: string[];
    cta?: { label: string; href: string };
    chart?: "priority-breakdown";
  }[];
  /** Best-estimate share of overall "getting found" impact this item carries,
   *  out of 100 across every actionable lesson — feeds the priority chart on
   *  the course-complete page. Directional, not a precise measurement. */
  impactPercent?: number;
  demoComponent?:
    | "load-speed"
    | "mobile-responsive"
    | "security-badge"
    | "site-structure"
    | "sitemap-discovery"
    | "robots-txt"
    | "split-ranking"
    | "interstitial"
    | "schema-markup"
    | "keyword-match"
    | "portal-duplication"
    | "title-meta"
    | "topic-depth"
    | "clear-structure"
    | "local-wording";
  /** Omitted on non-actionable closing pages that use closingSections instead. */
  whyCustomer?: string;
  whyCustomerStat?: { value: string; label: string };
  whySearchEngine?: string;
  whySearchEngineBadge?: string;
  /** Simple case: one flat numbered list. */
  diagnoseSteps?: string[];
  diagnoseLink?: ExternalLink;
  /** Multiple distinct diagnostic approaches — rendered as method cards instead of a flat list. */
  diagnoseMethods?: FixBranch[];
  /** Omitted on non-actionable pages — there's nothing to diagnose or fix there. */
  fixBranches?: FixBranch[];
  fixShortcut?: string;
  fixShortcutLinks?: ExternalLink[];
  fixFollowUp?: string;
  cadence?: string;
  cadenceBadge?: string;
  doneWithYou?: string;
  doneForYou?: string;
};

export const lessons: Lesson[] = [
  {
    slug: "core-web-vitals",
    impactPercent: 6,
    category: "Technical Foundations",
    categoryIndex: 1,
    itemIndex: 1,
    title: "Core Web Vitals / Page Load Speed",
    whatIsIt:
      "Put simply, how fast your page loads, how quickly it responds when you click something, and how visually stable it is while loading.",
    analogy: [
      {
        label: "Door speed",
        text: "A shop with a door that takes ten seconds to creak open loses customers before they even step inside — a slow-loading page does exactly the same thing.",
      },
      {
        label: "Staff response",
        text: "A shop where staff take ages to notice you've asked for help feels broken, even if they get there eventually — that's what a page feels like when it's slow to respond to a click or tap.",
      },
      {
        label: "Stability",
        text: "Shelves that shift while you're browsing make you grab the wrong thing — a page whose buttons and text jump around while it's loading causes the exact same mis-clicks.",
      },
    ],
    demoComponent: "load-speed",
    whyCustomer:
      "Someone searching for an agent on their commute, on patchy mobile signal, gives your site a few seconds before giving up entirely and trying the next result. Every extra 100ms of load time costs roughly 1% in lost conversions — real people, genuinely leaving before they've seen a single listing.",
    whyCustomerStat: { value: "1%", label: "lost per extra 100ms of load time" },
    whySearchEngine:
      "This has been a confirmed Google ranking factor since 2021. Google, Bing, and every major search engine measure this directly and factor it into how they rank you — not a guess, a measured input alongside many others.",
    whySearchEngineBadge: "Confirmed Google ranking factor since 2021",
    diagnoseMethods: [
      {
        condition: "Method 1 — PageSpeed Insights",
        action: "Google's own tool, and the most direct read on how Google itself sees your speed.",
        steps: [
          "Go to pagespeed.web.dev.",
          "Type in your website address and press Enter.",
          "Wait for both the Mobile and Desktop reports to load.",
          "Note your score for each of the three metrics, and read the “Diagnostics” section — it lists exactly what's slowing you down.",
        ],
        links: [{ label: "pagespeed.web.dev", href: "https://pagespeed.web.dev/" }],
      },
      {
        condition: "Method 2 — GTmetrix, for a second opinion",
        action:
          "a different testing tool with a visual waterfall chart — useful when PageSpeed's diagnostics feel too vague to act on.",
        steps: [
          "Go to gtmetrix.com and enter your website address.",
          "Once it finishes, open the “Waterfall” tab.",
          "Look for the single largest bars — that's almost always one specific image or script worth fixing first.",
        ],
        links: [{ label: "gtmetrix.com", href: "https://gtmetrix.com" }],
      },
    ],
    fixBranches: [
      {
        condition: "If images are flagged",
        action: "compress them before re-uploading — drag them into the tool below, download the compressed versions, and swap them in for the originals.",
        links: [{ label: "tinypng.com", href: "https://tinypng.com" }],
      },
      {
        condition: "If unused code/plugins are flagged",
        action:
          "remove anything you don't actually use. You can use AI to help identify what's safe to remove, speak to your website developer, or — if you know what you're doing — delete the code directly. Be careful not to delete anything important.",
      },
      {
        condition: "If it's server response time itself",
        action:
          "either switch to a faster host, or add Cloudflare's free plan on top of whoever you're with now — it adds a speed-boosting layer regardless of who hosts you.",
        links: [
          { label: "SiteGround", href: "https://www.siteground.com" },
          { label: "Kinsta", href: "https://kinsta.com" },
          { label: "Cloudflare (free plan)", href: "https://www.cloudflare.com/plans/free/" },
        ],
      },
    ],
    fixShortcut:
      "The easiest route: paste your PageSpeed results and diagnostics straight into an AI tool, and ask what needs fixing and how.",
    fixShortcutLinks: [
      { label: "ChatGPT", href: "https://chatgpt.com" },
      { label: "Claude", href: "https://claude.ai" },
    ],
    fixFollowUp: "After making any changes, re-run PageSpeed to compare the difference.",
    cadence:
      "I'd recommend doing this once a month. Things are always changing on your website — new images, new plugins — and any of it can quietly affect your speed without you noticing. This directly affects your ranking, and left unchecked, it can slowly make your website fall behind.",
    cadenceBadge: "~30 min/month",
    doneWithYou: "we diagnose the issue, tell you exactly how to fix it, and give you the code to make the change yourself.",
    doneForYou: "we do all of this directly, on your behalf, every month — so you never have to spend that 30 minutes yourself.",
  },
  {
    slug: "mobile-usability",
    impactPercent: 6,
    category: "Technical Foundations",
    categoryIndex: 1,
    itemIndex: 2,
    title: "Mobile Usability",
    whatIsIt:
      "Whether your site actually works properly on a phone, not just a computer — buttons too small to tap accurately, text you have to pinch and zoom to read, a menu that doesn't open properly on a touchscreen.",
    analogy: [
      {
        label: "The comparison",
        text: "Imagine a shop built for someone six inches taller than everyone else — technically usable, genuinely annoying, and most people just leave.",
      },
    ],
    demoComponent: "mobile-responsive",
    whyCustomer:
      "Most people are searching for property on their phone, often casually, in a spare five minutes. If they have to fight the site — zooming in to read a listing, misclicking a tiny button — they simply give up, and don't even get the chance to request that valuation or make that enquiry.",
    whySearchEngine:
      "Google uses “mobile-first indexing” — it judges the mobile version of your site to decide how everyone ranks, including people searching on a desktop computer. A poor mobile experience doesn't just lose mobile visitors, it directly lowers your ranking everywhere, on every device.",
    whySearchEngineBadge: "Judged on mobile, ranked everywhere",
    diagnoseMethods: [
      {
        condition: "Method 1 — PageSpeed Insights (mobile report)",
        action: "tests the mobile version of your site by default, and flags specific usability issues automatically.",
        steps: [
          "Go to pagespeed.web.dev and enter your website address.",
          "Read the mobile score and the “Diagnostics” section underneath it.",
        ],
        links: [{ label: "pagespeed.web.dev", href: "https://pagespeed.web.dev/" }],
      },
      {
        condition: "Method 2 — Browse it yourself",
        action: "an automated score can miss things a real hand and eye catch instantly.",
        steps: [
          "Browse your own site on your own phone, exactly as a landlord or buyer would.",
          "On desktop, open Chrome, right-click any page, click “Inspect,” then click the small phone/tablet icon near the top-left of the panel — this previews your site on different screen sizes.",
          "Note anything too small to tap, cramped, or awkward.",
        ],
      },
    ],
    fixBranches: [
      {
        condition: "Specific broken elements (tiny text, cramped buttons)",
        action:
          "usually quick fixes within your site builder's settings. Ask an AI tool to help you write the fix, ask your developer, or write it yourself if you know how.",
        links: [
          { label: "ChatGPT", href: "https://chatgpt.com" },
          { label: "Claude", href: "https://claude.ai" },
        ],
      },
      {
        condition: "The whole site isn't responsive",
        action:
          "this is a bigger job — you may need to rebuild your website and bring in professional help to fix it properly.",
      },
    ],
    cadence:
      "Worth checking again after any significant site update — a single careless change can break something that was working fine before. A quick check like this takes about 15 minutes; a proper rebuild, if needed, is a one-off, larger job.",
    cadenceBadge: "~15 min, after site changes",
    doneWithYou: "we run the diagnosis, show you exactly what's broken, and tell you how to fix it.",
    doneForYou: "we fix it directly, and re-check it every time your site changes.",
  },
  {
    slug: "https-security",
    impactPercent: 3,
    category: "Technical Foundations",
    categoryIndex: 1,
    itemIndex: 3,
    title: "HTTPS / Site Security",
    whatIsIt:
      "The padlock icon telling a visitor your connection is private and secure. Without it, most browsers now display an active warning — something like “Not Secure” right in the address bar, sometimes a full warning page before the site even loads.",
    demoComponent: "security-badge",
    whyCustomer:
      "A visible security warning makes a visitor think twice before entering any personal details — their name, number, or an enquiry — because it genuinely looks unsafe or untrustworthy, even if the rest of the site is perfectly fine. Some people will simply leave rather than risk it.",
    whySearchEngine:
      "Google confirmed this as a ranking signal back in 2014 — a small one on its own, but combined with visitors actively leaving because of the browser warning, it works against you twice over.",
    whySearchEngineBadge: "Confirmed Google ranking signal since 2014",
    diagnoseMethods: [
      {
        condition: "Method 1 — Look at your own address bar",
        action: "the fastest check — takes seconds, no tools needed.",
        steps: [
          "Look at your own website's address bar.",
          "Check for “https://” and a padlock icon.",
        ],
      },
      {
        condition: "Method 2 — Qualys SSL Labs, for a full health check",
        action:
          "goes further than the padlock — it flags a certificate that's about to expire, or configured weakly, before it ever becomes visible to a visitor.",
        steps: [
          "Go to ssllabs.com/ssltest and enter your website address.",
          "Wait for the scan to finish — it can take a minute or two.",
          "Check the letter grade, and the certificate expiry date shown near the top.",
        ],
        links: [{ label: "SSL Labs", href: "https://www.ssllabs.com/ssltest/" }],
      },
    ],
    fixBranches: [
      {
        condition: "Log into your hosting control panel",
        action:
          "search for “SSL” — most hosts now offer this free via something called Let's Encrypt, often a single toggle switch.",
      },
      {
        condition: "If your host genuinely doesn't offer this in 2026",
        action:
          "that's a real sign of a low-quality host. Add Cloudflare in front of your site, or switch to another host such as SiteGround, Bluehost, or Kinsta.",
        links: [
          { label: "Cloudflare (free plan)", href: "https://www.cloudflare.com/plans/free/" },
          { label: "SiteGround", href: "https://www.siteground.com" },
          { label: "Bluehost", href: "https://www.bluehost.com" },
          { label: "Kinsta", href: "https://kinsta.com" },
        ],
      },
    ],
    cadence:
      "Certificates occasionally need renewing — worth a quick check every month, since it's the kind of thing nobody notices until it's already expired and showing visitors a warning.",
    cadenceBadge: "~5 min/month",
    doneWithYou: "we tell you exactly what to check and how to fix it if something's wrong.",
    doneForYou: "we monitor this on your behalf and handle renewals before they ever lapse.",
  },
  {
    slug: "site-architecture",
    impactPercent: 4,
    category: "Technical Foundations",
    categoryIndex: 1,
    itemIndex: 4,
    title: "Site Architecture & Internal Linking",
    whatIsIt:
      "How easy it is to walk from your homepage to any other page on your site — for example, whether a visitor can actually find your lettings listings if they land on a sales page, without hunting through menus.",
    analogy: [
      {
        label: "The comparison",
        text: "Imagine the hallway layout connecting every room in a shop — if a customer can't easily find their way to what they're looking for, they give up.",
      },
    ],
    demoComponent: "site-structure",
    whyCustomer:
      "Someone interested in renting who lands on your general homepage, with no obvious path to lettings listings, will often just leave and search again rather than dig through your site — you've lost them to friction, not disinterest.",
    whySearchEngine:
      "A confusing structure makes it genuinely harder for Google to find and properly index your pages. A page Google can't easily reach can't rank at all, no matter how good it is — and this isn't just about your homepage. It could be something as simple as a landlord searching “rental valuation in my area” and Google being unable to find your enquiry page.",
    whySearchEngineBadge: "Unreachable pages can't rank, period",
    diagnoseMethods: [
      {
        condition: "Method 1 — Sketch it by hand",
        action: "quick, and forces you to actually think through the path a visitor takes.",
        steps: [
          "Sketch your site as a simple tree, homepage at the top.",
          "Count the number of clicks needed to reach your deepest page.",
        ],
      },
      {
        condition: "Method 2 — Screaming Frog crawl depth report",
        action:
          "crawls every page automatically and tells you exactly how deep each one sits, rather than relying on a hand-drawn guess.",
        steps: [
          "Download Screaming Frog, free, and crawl your site.",
          "Click the “Internal” tab, then check the “Crawl Depth” column.",
          "Sort by it — anything showing 4 or more is worth a look.",
        ],
        links: [{ label: "Screaming Frog SEO Spider", href: "https://www.screamingfrog.co.uk/seo-spider/" }],
      },
    ],
    fixBranches: [
      {
        condition: "Pages more than 3 clicks deep",
        action:
          "add a hub or category page linking to them directly, so they're reachable in fewer steps — a “Lettings in [area]” page linking out to every listing in that area, for example.",
      },
      {
        condition: "Genuinely related pages with no link between them",
        action:
          "add a direct internal link — a local area guide linked to your listings in that area, for example. Do this yourself directly in your page editor, or note it as a task for a developer.",
      },
    ],
    cadence:
      "Every new page you publish needs linking in properly — this isn't a job that finishes once. Worth reviewing every time you add a meaningful batch of new content.",
    cadenceBadge: "~15 min, per content batch",
    doneWithYou: "we map your site and tell you exactly which pages need linking, and how.",
    doneForYou: "we build and maintain this structure directly, every time something new is published.",
  },
  {
    slug: "xml-sitemap",
    impactPercent: 1,
    category: "Technical Foundations",
    categoryIndex: 1,
    itemIndex: 5,
    title: "XML Sitemap",
    whatIsIt:
      "A file you hand directly to Google, saying “here's every page I have, please check them all” — invisible to visitors, purely a background technical signal.",
    demoComponent: "sitemap-discovery",
    whyCustomer:
      "They'll never see this file directly, but they feel the consequence of it — a brand-new listing that hasn't been picked up by Google yet simply doesn't show up when someone searches for it, even if it's genuinely the perfect match.",
    whySearchEngine:
      "Without a sitemap, Google has to discover your pages on its own, which is slower and less reliable — new pages can sit undiscovered for far longer than they should.",
    whySearchEngineBadge: "Faster, more reliable page discovery",
    diagnoseMethods: [
      {
        condition: "Method 1 — Check the file directly",
        action: "confirms whether a sitemap exists at all.",
        steps: [
          "Visit yourwebsite.com/sitemap.xml directly in your browser (e.g. reyselettings.co.uk/sitemap.xml).",
          "If it loads, paste the contents into an AI tool and ask it to summarise what's listed, and whether anything important seems missing based on your site.",
        ],
      },
      {
        condition: "Method 2 — Google Search Console's Sitemaps report",
        action:
          "shows whether Google has actually fetched it, and how many of the pages inside it are indexed — the file existing isn't the same as Google using it.",
        steps: [
          "Go to Google Search Console and select your property.",
          "Click “Sitemaps” under “Indexing” in the sidebar.",
          "Check the status reads “Success,” and compare the discovered pages number against how many pages your site actually has.",
        ],
        links: [{ label: "Google Search Console", href: "https://search.google.com/search-console" }],
      },
    ],
    fixBranches: [
      {
        condition: "No sitemap exists, on WordPress",
        action: "install Yoast SEO or Rank Math — either one generates a sitemap automatically, for free.",
        links: [
          { label: "Yoast SEO", href: "https://yoast.com" },
          { label: "Rank Math", href: "https://rankmath.com" },
        ],
      },
      {
        condition: "No sitemap exists, on Squarespace, Wix, or similar",
        action:
          "these platforms generate one automatically, just at a slightly different address — check your platform's help docs, or ask an AI tool for the exact sitemap URL your specific builder uses.",
      },
      {
        condition: "A sitemap already exists",
        action: "submit it to Google Search Console directly, so Google knows to check it:",
        steps: [
          "Go to Google Search Console and select your property.",
          "Click “Sitemaps” under “Indexing” in the sidebar.",
          "Enter the full address: https://yourwebsite.com/sitemap.xml",
          "Click “Submit.”",
          "Check back in a few hours to a few days, and compare the “Discovered pages” number against how many pages you actually believe your site has.",
        ],
        links: [{ label: "Google Search Console", href: "https://search.google.com/search-console" }],
      },
    ],
    cadence:
      "Every new page needs adding to this file too — easy to forget in the middle of running the actual business. Worth a quick check whenever you publish anything new.",
    cadenceBadge: "~10 min, per new page",
    doneWithYou: "we tell you exactly how to check whether new pages have been picked up.",
    doneForYou: "we handle this directly every time something new goes live.",
  },
  {
    slug: "robots-txt",
    impactPercent: 1,
    category: "Technical Foundations",
    categoryIndex: 1,
    itemIndex: 6,
    title: "Robots.txt",
    whatIsIt:
      "A file telling search engines which parts of your site they're allowed to look at, and which to skip — for example, deliberately hiding an internal staff testing area, but potentially, by accident, hiding your entire live website instead.",
    demoComponent: "robots-txt",
    whyCustomer:
      "Invisible directly — but if this is misconfigured, they'll experience the consequence as total invisibility: they search for your business, and you simply never appear, no matter how good everything else on your site is. It can also hide specific pages if configured wrong — the contact page, for example, quietly costing you leads nobody ever traces back to this file.",
    whySearchEngine:
      "Getting this wrong can accidentally hide your entire site, or specific pages, from search engines — not a minor ranking penalty, a total block on being seen at all.",
    whySearchEngineBadge: "Can block your whole site, not just rank it lower",
    diagnoseMethods: [
      {
        condition: "Method 1 — Check the file directly",
        action: "the file is always public, so this works for any site.",
        steps: [
          "Visit yourwebsite.com/robots.txt in your browser (e.g. reyselettings.co.uk/robots.txt).",
          "Paste the contents into ChatGPT or Claude and ask if anything important is being blocked.",
          "A clean result looks like “Allow: /” with no “Disallow:” lines blocking anything important — generally, the less restrictive, the better.",
        ],
        links: [
          { label: "ChatGPT", href: "https://chatgpt.com" },
          { label: "Claude", href: "https://claude.ai" },
        ],
      },
      {
        condition: "Method 2 — Google Search Console's URL Inspection tool",
        action:
          "confirms whether a specific page — your homepage, or a key listing — is actually blocked, rather than reading the file yourself and hoping you've interpreted it right.",
        steps: [
          "Go to Google Search Console and select your property.",
          "Paste a specific page's URL into the “Inspect any URL” bar at the top.",
          "Check the result doesn't say “Blocked by robots.txt.”",
        ],
        links: [{ label: "Google Search Console", href: "https://search.google.com/search-console" }],
      },
    ],
    fixBranches: [
      {
        condition: "If you're confident it's a simple fix",
        action: "correct it directly — ask an AI tool for the exact code, or write it yourself if you know how.",
        links: [
          { label: "ChatGPT", href: "https://chatgpt.com" },
          { label: "Claude", href: "https://claude.ai" },
        ],
      },
      {
        condition: "If you're at all unsure",
        action:
          "ask a developer instead. This file carries real risk if done wrong — a single wrong line can silently hide your entire site.",
      },
    ],
    cadence:
      "Worth a re-check whenever a developer touches the site, or after any major rebuild — a single accidental line here can undo everything else in this entire guide.",
    cadenceBadge: "~5 min, after any site changes",
    doneWithYou: "we check it and tell you exactly what to fix if something's wrong.",
    doneForYou: "we monitor this continuously and catch any accidental change immediately.",
  },
  {
    slug: "duplicate-content-redirects",
    impactPercent: 3,
    category: "Technical Foundations",
    categoryIndex: 1,
    itemIndex: 7,
    title: "Duplicate Content & Broken Redirects",
    whatIsIt:
      "The same page existing at two different web addresses, or an old link — say, to a property that's since sold — leading to a page that no longer exists, showing a plain “404 error” instead.",
    demoComponent: "split-ranking",
    whyCustomer:
      "Clicking through to a dead page feels broken and unprofessional — like the business isn't paying attention to its own website, which quietly undermines trust in everything else you do too.",
    whySearchEngine:
      "Search engines actively rank down duplicate content, and when the same content exists on two URLs, your ranking strength gets split between them rather than working together.",
    whySearchEngineBadge: "Splits your ranking strength across duplicate URLs",
    diagnoseMethods: [
      {
        condition: "Method 1 — Google Search Console",
        action: "check the Pages report for anything flagged as duplicate or redirected.",
        steps: [
          "Go to Google Search Console and select your property.",
          "Click “Pages” in the sidebar under “Indexing” (this report used to be called “Coverage”).",
          "Check for anything labelled “Duplicate without user-selected canonical” or “Page with redirect.”",
        ],
        links: [{ label: "Google Search Console", href: "https://search.google.com/search-console" }],
      },
      {
        condition: "Method 2 — Screaming Frog, for a fuller crawl",
        action: "run a full crawl of your site to catch what Search Console might miss.",
        steps: [
          "Download Screaming Frog, free.",
          "Type your website address in and click “Start.”",
          "Click “Response Codes” for 404s, and the “URL” tab for a duplicate content filter.",
        ],
        links: [{ label: "Screaming Frog SEO Spider", href: "https://www.screamingfrog.co.uk/seo-spider/" }],
      },
    ],
    fixBranches: [
      {
        condition: "Duplicate content",
        action: "decide which version is “official,” and redirect the other to it.",
      },
      {
        condition: "Broken link",
        action: "fix the destination, or set up a 301 redirect somewhere relevant.",
      },
    ],
    cadence: "Every new page is a fresh chance for this exact issue to appear again — worth checking weekly.",
    cadenceBadge: "~20 min/week",
    doneWithYou: "we run the checks and tell you exactly what to redirect and where.",
    doneForYou: "we monitor and fix this directly, every month.",
  },
  {
    slug: "canonicalization",
    impactPercent: 2,
    category: "Technical Foundations",
    categoryIndex: 1,
    itemIndex: 8,
    title: "Canonicalization",
    whatIsIt:
      "If the same page accidentally exists at two addresses (for example, both with and without “www” at the front), this is a small note in the code saying “this one's the real page — ignore the other.”",
    whyCustomer:
      "Largely invisible — but if Google ends up showing the “wrong” duplicate version, a customer might land on an older or less complete copy of a page than the one you'd actually want them to see.",
    whySearchEngine:
      "Without it, Google has to guess which version to trust, and ranking strength can get split or wasted across two competing pages rather than concentrated on one strong one.",
    whySearchEngineBadge: "Without it, Google has to guess which page counts",
    diagnoseMethods: [
      {
        condition: "Method 1 — Check a handful of pages by hand",
        action: "quick, and enough to catch an obvious sitewide problem.",
        steps: [
          "Open your homepage, right-click, click “View Page Source” (or Cmd+Option+U on Mac).",
          "Search (Cmd+F) for “canonical.”",
          "Check the address inside that line matches the page you're actually on.",
          "Repeat on 2–3 other key pages.",
          "Also check whether “www” and non-“www” versions of your site both load separately, rather than one redirecting to the other.",
        ],
      },
      {
        condition: "Method 2 — Screaming Frog, for every page at once",
        action: "checking pages one at a time misses problems buried deeper in the site — a full crawl catches all of them together.",
        steps: [
          "Download Screaming Frog, free, and crawl your site.",
          "Click the “Canonicals” tab.",
          "Look for anything marked missing, or pointing to a different URL than the one it's on.",
        ],
        links: [{ label: "Screaming Frog SEO Spider", href: "https://www.screamingfrog.co.uk/seo-spider/" }],
      },
    ],
    fixBranches: [
      {
        condition: "Canonical tags missing entirely",
        action:
          "ask a developer to add a self-referencing canonical tag sitewide — every page pointing to itself by default, which quietly prevents most of these problems before they start.",
      },
      {
        condition: "“www” and non-“www” both load separately",
        action:
          "this is usually a single setting at hosting level — ask your host or developer to set up a permanent (301) redirect from one version to the other.",
      },
      {
        condition: "A canonical tag points to the wrong page",
        action:
          "this genuinely isn't a DIY job — getting it wrong can hurt rankings further. Hand your exact findings to a developer, or ask an AI tool to write the fix for you to pass along.",
        links: [
          { label: "ChatGPT", href: "https://chatgpt.com" },
          { label: "Claude", href: "https://claude.ai" },
        ],
      },
    ],
    cadence:
      "This tends to quietly reappear with site updates, whether or not anyone's watching for it — worth a check every few months.",
    cadenceBadge: "~10 min, every few months",
    doneWithYou: "we diagnose it and give you the exact brief to hand your developer.",
    doneForYou: "we manage the developer relationship and this fix directly, ongoing.",
  },
  {
    slug: "server-uptime",
    impactPercent: 1,
    category: "Technical Foundations",
    categoryIndex: 1,
    itemIndex: 9,
    title: "Server Uptime",
    whatIsIt:
      "How often your site is actually online when someone tries to visit it — as opposed to showing an error, or not loading at all.",
    whyCustomer:
      "Someone trying to visit a site that's down doesn't think “I'll try again later” — they usually assume something's wrong with the business itself, and simply go to a competitor instead.",
    whySearchEngine:
      "Downtime loses visitors in the moment, and if it's frequent enough, Google can reduce how often it bothers checking your site at all — in severe cases, pages can be removed from the index entirely.",
    whySearchEngineBadge: "Frequent downtime can get pages removed from the index",
    diagnoseMethods: [
      {
        condition: "Method 1 — An instant, one-off check",
        action: "confirms whether your site is down right now, in seconds, no signup needed.",
        steps: [
          "Go to downforeveryoneorjustme.com and enter your website address.",
          "It tells you immediately whether the site is up or down.",
        ],
        links: [{ label: "downforeveryoneorjustme.com", href: "https://downforeveryoneorjustme.com" }],
      },
      {
        condition: "Method 2 — UptimeRobot, for ongoing monitoring",
        action: "a one-off check only tells you about right now — this catches the outages that happen while nobody's looking.",
        steps: [
          "Go to uptimerobot.com and sign up, free.",
          "Add your website as a monitor.",
          "Let it run for a few weeks.",
        ],
        links: [{ label: "uptimerobot.com", href: "https://uptimerobot.com" }],
      },
    ],
    fixBranches: [
      {
        condition: "Rare, brief downtime",
        action: "not worth acting on.",
      },
      {
        condition: "Frequent downtime",
        action:
          "your host isn't reliable enough. SiteGround, Kinsta, and WP Engine all publish real uptime guarantees worth switching to.",
        links: [
          { label: "SiteGround", href: "https://www.siteground.com" },
          { label: "Kinsta", href: "https://kinsta.com" },
          { label: "WP Engine", href: "https://wpengine.com" },
        ],
      },
    ],
    cadence:
      "This is usually only noticed once it's already cost you a week of visibility — set the monitoring up once, then just glance at the report monthly.",
    cadenceBadge: "~5 min/month",
    doneWithYou: "we help you set up monitoring and tell you when to consider switching hosts.",
    doneForYou: "we monitor this continuously and manage the hosting relationship for you.",
  },
  {
    slug: "no-intrusive-interstitials",
    impactPercent: 1,
    category: "Technical Foundations",
    categoryIndex: 1,
    itemIndex: 10,
    title: "No Intrusive Interstitials",
    whatIsIt:
      "A pop-up covering the page the moment someone arrives, before they've had a chance to look at anything at all — this could be an offer, a newsletter sign-up box, or a cookie banner that's badly designed and blocks the whole screen.",
    demoComponent: "interstitial",
    whyCustomer:
      "Arriving on a page only to have it immediately blocked by a pop-up is genuinely frustrating, and can make a website look scammy or untrustworthy — exactly the wrong first impression for a business someone's about to trust with selling their home. Some visitors will simply leave rather than deal with it.",
    whySearchEngine:
      "Google has an explicit, named penalty for this specifically on mobile search — a directly measured signal, not something inferred from behaviour. It does apply to desktop too, but the penalty is weighted more heavily toward mobile, since a full-screen pop-up is far more disruptive on a small screen.",
    whySearchEngineBadge: "A named Google penalty, weighted heavily on mobile",
    diagnoseMethods: [
      {
        condition: "Method 1 — Load it fresh, on desktop",
        action: "catches the obvious cases immediately.",
        steps: [
          "Load your site fresh in a private/incognito browser window.",
          "Note anything blocking the screen in the first few seconds.",
        ],
      },
      {
        condition: "Method 2 — Load it fresh, as mobile",
        action: "the penalty is weighted heavily toward mobile, so this is the version that actually matters most.",
        steps: [
          "Open Chrome, right-click any page, click “Inspect,” then click the small phone/tablet icon near the top-left to switch to mobile view.",
          "Reload the page fresh, and note anything blocking the screen in the first few seconds.",
        ],
      },
    ],
    fixBranches: [
      {
        condition: "A promotional pop-up (offer, newsletter sign-up)",
        action: "delay it until someone's scrolled or spent genuine time on the page, or remove it entirely.",
      },
      {
        condition: "A cookie consent or legal banner",
        action:
          "Google exempts these from the penalty when they're reasonably sized and easy to dismiss — just make sure it's a single tap to close and doesn't cover the whole screen.",
      },
    ],
    cadence:
      "New pop-ups get added by marketing tools often, usually without anyone realising the SEO cost — worth a quick visual check whenever a new one's added.",
    cadenceBadge: "~5 min, per new pop-up",
    doneWithYou: "we flag anything problematic and tell you how to adjust it.",
    doneForYou: "we review and adjust this directly whenever anything new is added.",
  },
  {
    slug: "schema-markup",
    impactPercent: 1.5,
    category: "Technical Foundations",
    categoryIndex: 1,
    itemIndex: 11,
    title: "Schema Markup",
    whatIsIt:
      "Hidden code telling Google exactly what your page is about — price, location, business type — instead of it having to guess from the visible text alone.",
    demoComponent: "schema-markup",
    whyCustomer:
      "Two listings can appear right next to each other in Google's results, but one shows the price, photo, and rating directly in the search results while the other is just a plain blue link — the enhanced one is simply more likely to get clicked, purely because it looks more useful at a glance.",
    whyCustomerStat: { value: "20-30%", label: "increase in click-through rate on pages with schema markup" },
    whySearchEngine:
      "Google has said that having schema on a page doesn't push you up the rankings by itself. What it does do is unlock a \"rich result\": the same listing, but with extra details shown directly on the results page itself — a star rating with the number of reviews, or a price — pulled straight from your schema code, without anyone needing to click through first. If you were scrolling past ten plain-looking results and one suddenly had a star rating or a price shown, your eye would go straight to it. And because Google generally notices when a result keeps getting clicked more than others nearby, that extra clicking can, over time, become one small signal that helps your ranking too — though this last part is more \"widely believed\" than fully proven.",
    whySearchEngineBadge: "Not a ranking factor itself — but the switch that unlocks rich results",
    diagnoseMethods: [
      {
        condition: "Method 1 — Google's Rich Results Test",
        action: "checks specifically for the schema types Google currently supports as rich results.",
        steps: [
          "Open Google's Rich Results Test.",
          "Enter your page's URL and run the test.",
          "The result either lists your existing schema, or says \"No items detected.\"",
        ],
        links: [{ label: "Rich Results Test", href: "https://search.google.com/test/rich-results" }],
      },
      {
        condition: "Method 2 — Schema Markup Validator, for full validation",
        action:
          "checks all schema.org markup for correctness, not just the types Google currently turns into rich results — useful for catching syntax errors the Rich Results Test won't flag.",
        steps: [
          "Open validator.schema.org.",
          "Enter your page's URL and run the test.",
          "Check for anything flagged in red.",
        ],
        links: [{ label: "Schema Markup Validator", href: "https://validator.schema.org/" }],
      },
    ],
    fixBranches: [
      {
        condition: "No schema detected at all",
        action:
          "take your real business details — name, address, phone, services — and ask an AI tool to generate JSON-LD schema markup from scratch.",
        steps: [
          "Give ChatGPT or Claude your business details and ask for JSON-LD schema markup.",
          "Add it to your site's header — usually a \"custom code\" area in your site builder.",
          "No custom-code area? It's a quick, low-risk task to hand a developer.",
        ],
        links: [
          { label: "ChatGPT", href: "https://chatgpt.com" },
          { label: "Claude", href: "https://claude.ai" },
        ],
      },
      {
        condition: "Schema exists, but errors are flagged",
        action:
          "paste the specific error messages into an AI tool along with your existing schema code, and ask it to correct just the flagged issues — no need to regenerate everything from scratch.",
        links: [
          { label: "ChatGPT", href: "https://chatgpt.com" },
          { label: "Claude", href: "https://claude.ai" },
        ],
      },
    ],
    cadence:
      "Site updates can silently break this without anything visibly changing on the page itself — worth re-checking monthly.",
    cadenceBadge: "~15 min/month",
    doneWithYou: "we generate the code and tell you exactly where to add it.",
    doneForYou: "we implement and monitor this directly, ongoing.",
  },
  {
    slug: "syndicated-listing-duplication",
    impactPercent: 2,
    category: "Real Estate-Specific Risk",
    categoryIndex: 2,
    itemIndex: 12,
    title: "Syndicated Listing Duplication",
    whatIsIt:
      "Your listing copied onto Rightmove is technically a duplicate of your own page — and Google might decide theirs is the \"real\" one, not yours.",
    demoComponent: "portal-duplication",
    whyCustomer:
      "They find your exact listing, but on Rightmove instead of your own website — meaning they never see your branding, your other properties, your reviews, or anything that builds trust in your business specifically, rather than the portal.",
    whySearchEngine:
      "Without a canonical tag pointing back to you, you can lose the ranking for your own listing entirely to the portal's copy — genuinely losing visibility for property you're actively trying to sell or let.",
    whySearchEngineBadge: "Can lose your own listing's ranking entirely to the portal's copy",
    diagnoseMethods: [
      {
        condition: "Method 1 — Compare rankings directly",
        action: "shows you the actual, real-world outcome — who's winning the click right now.",
        steps: [
          "Pick a live listing, copy a distinctive phrase from its description.",
          "Search that exact phrase in Google, in quotation marks.",
          "See which ranks higher — your own site, or the portal.",
        ],
      },
      {
        condition: "Method 2 — Check your own page's code",
        action: "confirms the technical cause directly, rather than inferring it from the ranking alone.",
        steps: [
          "Open your own listing page, right-click, click “View Page Source.”",
          "Search (Cmd/Ctrl+F) for “canonical.”",
          "Check it exists, and points back to this same page.",
        ],
      },
    ],
    fixBranches: [
      {
        condition: "No canonical tag on your own listing pages",
        action: "ask a developer to add a self-referencing canonical tag to your own listing pages — this is the fix within your own control.",
      },
      {
        condition: "A canonical tag exists, but the portal still outranks you",
        action:
          "the cause is likely the portal's own authority rather than a technical fault on your side — confirm with the portal whether a linkback exists, and lean on your own site's other strengths (branding, reviews, related listings) to build a genuine reason to visit you directly.",
      },
    ],
    cadence:
      "Every new listing published is a fresh chance for this exact problem to happen again — worth spot-checking a handful of live listings monthly.",
    cadenceBadge: "~20 min/month",
    doneWithYou: "we show you how to check and what to ask your developer to implement.",
    doneForYou: "we check and manage this directly across your live listings, ongoing.",
  },
  {
    slug: "keyword-research",
    impactPercent: 6,
    category: "On-Page & Content",
    categoryIndex: 3,
    itemIndex: 13,
    title: "Keyword Research",
    whatIsIt:
      "Figuring out the exact words a real buyer, seller, or landlord actually types, rather than the words you'd naturally use internally — for instance, a landlord might search \"letting agent fees\" while you'd internally call it \"our pricing structure.\"",
    demoComponent: "keyword-match",
    whyCustomer:
      "If your content uses different language than what they searched, it can feel like the page doesn't actually answer their question — even if, technically, it does — because it doesn't speak their language.",
    whySearchEngine:
      "Google matches search terms to page content — content built around the wrong words simply won't be shown for the searches that actually matter, no matter how good the content itself is.",
    whySearchEngineBadge: "Content built on the wrong words won't surface, however good it is",
    diagnoseMethods: [
      {
        condition: "Method 1 — Free: Google itself",
        action:
          "search your business type plus your town, then check \"People also ask\" and the related searches at the bottom — do this for both sales and lettings phrasing.",
      },
      {
        condition: "Method 2 — Free: ask an AI tool",
        action:
          "ask directly for real phrases a buyer, seller, or landlord would search at different stages of their journey.",
        links: [
          { label: "ChatGPT", href: "https://chatgpt.com" },
          { label: "Claude", href: "https://claude.ai" },
        ],
      },
      {
        condition: "Method 3 — Google Keyword Planner",
        action:
          "sign up, skip through campaign setup, then go to Tools → Planning → Keyword Planner. Google now requires billing details on file even for £0 spend.",
        links: [{ label: "Google Ads", href: "https://ads.google.com" }],
      },
      {
        condition: "Method 4 — AnswerThePublic",
        action: "currently gives 3 free searches a day.",
        links: [{ label: "AnswerThePublic", href: "https://answerthepublic.com" }],
      },
    ],
    fixBranches: [
      {
        condition: "Once you've got a list",
        action:
          "combine what these methods surface into one list, then use the real phrases naturally in your website's content and page titles.",
      },
    ],
    cadence:
      "What people search for shifts with the market and the season — a list built once goes stale. Worth revisiting quarterly.",
    cadenceBadge: "~30-45 min/quarter",
    doneWithYou: "we run this research and hand you the phrase list to use.",
    doneForYou: "we research and apply this directly into your content, ongoing.",
  },
  {
    slug: "titles-headers-meta-descriptions",
    impactPercent: 4,
    category: "On-Page & Content",
    categoryIndex: 3,
    itemIndex: 14,
    title: "Titles, Headers, and Meta Descriptions",
    whatIsIt:
      "The headline Google shows for your page, and the short description underneath it — the actual blue-link text and grey summary someone sees on a results page, before they've clicked anything.",
    demoComponent: "title-meta",
    whyCustomer:
      "Scanning a page of search results, a vague title like \"Home\" tells them nothing, while a specific one like \"3 Bed Houses for Sale in Colchester\" immediately signals relevance — they're far more likely to click the second one, purely from the title alone.",
    whySearchEngine:
      "Your title is a direct ranking signal, read to understand what the page is about. Your meta description isn't a ranking signal at all — it purely affects whether someone clicks once they see you in the results.",
    whySearchEngineBadge: "Titles rank you directly; meta descriptions only affect the click",
    diagnoseMethods: [
      {
        condition: "Method 1 — Crawl your site",
        action: "shows you exactly what you've written, across every page at once.",
        steps: [
          "Crawl your site with Screaming Frog.",
          "Click \"Page Titles\" and \"Meta Description\" to export every one.",
          "Check each includes what the page is about, plus your town.",
        ],
        links: [{ label: "Screaming Frog SEO Spider", href: "https://www.screamingfrog.co.uk/seo-spider/" }],
      },
      {
        condition: "Method 2 — Check what Google actually shows",
        action:
          "Google sometimes rewrites your title or description if it decides something else better matches the page — the crawl only shows what you wrote, not what's actually displayed.",
        steps: [
          "Google your own business, or search for one of your specific page titles.",
          "Compare what's actually shown against what you wrote.",
        ],
      },
    ],
    fixBranches: [
      {
        condition: "Anything generic, and Google is showing it as written",
        action: "rewrite it directly — keep titles under 60 characters.",
      },
      {
        condition: "Google is rewriting your title in the results",
        action:
          "this usually means the title doesn't closely match the page's actual heading and content — tighten it so it reflects what's genuinely on the page.",
      },
    ],
    cadence:
      "Easy to get right on the first fifty pages and forget on the next fifty — worth checking every time a batch of new pages goes live.",
    cadenceBadge: "Every new batch of pages",
    doneWithYou: "we audit and hand you the exact rewrites.",
    doneForYou: "we write and maintain these directly, ongoing.",
  },
  {
    slug: "original-content",
    impactPercent: 5,
    category: "On-Page & Content",
    categoryIndex: 3,
    itemIndex: 15,
    title: "Original Content",
    whatIsIt:
      "Content written specifically for your business, using your own real knowledge — not something that could be lifted unchanged and put on any competitor's site.",
    whyCustomer:
      "Generic, could-be-anyone's content doesn't build any real trust or sense that you actually know the local area — it reads like nobody specific wrote it, which is a subtle but real turn-off when they're deciding who to trust with a major decision.",
    whySearchEngine:
      "Google's spam and \"helpful content\" systems now actively detect and demote thin, generic, or mass-produced content — this isn't inferred from behaviour, it's a direct classification Google makes.",
    whySearchEngineBadge: "A direct classification Google makes, not an inferred signal",
    diagnoseMethods: [
      {
        condition: "Method 1 — Ask yourself honestly",
        action: "the most direct test, and the one only you can really answer.",
        steps: ["Could this page have been written by any agency, about any town, unchanged?"],
      },
      {
        condition: "Method 2 — Ask an AI tool for an outside read",
        action: "it's easy to be too close to your own writing to judge it fairly — a second, more objective read helps.",
        steps: [
          "Paste your page's text into ChatGPT or Claude.",
          "Ask: \"does this read as generic, or genuinely written by someone with real local knowledge? What's missing?\"",
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
        action:
          "use AI only as a first draft. Always add genuine local detail, real opinion, or first-hand knowledge before publishing.",
      },
      {
        condition: "If the honest answer is no",
        action: "good — no action needed here, just keep writing the same way.",
      },
    ],
    cadence: "Staying ahead of this means genuinely fresh writing on an ongoing basis, not a single content push.",
    cadenceBadge: "Ongoing, not a one-off",
    doneWithYou: "we review drafts and tell you what needs more genuine detail.",
    doneForYou: "we write this directly, working from your real knowledge and experience.",
  },
  {
    slug: "comprehensive-topic-depth",
    impactPercent: 5,
    category: "On-Page & Content",
    categoryIndex: 3,
    itemIndex: 16,
    title: "Comprehensive Topic Depth",
    whatIsIt:
      "Answering the whole question someone's actually asking, not just a narrow slice of it — a page about \"homes for sale in [town]\" that only shows listings, with nothing about schools, transport, or price trends, is answering less than half the real question.",
    demoComponent: "topic-depth",
    whyCustomer:
      "If a page only partly answers what they came to find out, they leave and go find the rest of the answer somewhere else — meaning you've done the work of attracting them, then lost them because they couldn't find the information they were looking for.",
    whySearchEngine:
      "Google assesses how fully a page satisfies everything a searcher likely wants to know — a thin page ranks worse even if technically well-optimised otherwise.",
    whySearchEngineBadge: "Thin pages rank worse, even when everything else is optimised",
    diagnoseMethods: [
      {
        condition: "Method 1 — Build a competitor gap checklist",
        action: "the thorough version — slower, but gives you a genuinely specific list of what's actually missing.",
        steps: [
          "Pick one specific page or topic to test — for example, your \"houses for sale in [town]\" page.",
          "Search that exact phrase (or a close variant) in Google.",
          "Open the top 3-5 ranking pages, not just the first result.",
          "For each one, list out every distinct subtopic they cover — schools, transport links, price trends, local amenities, an FAQ section, whatever's there.",
          "Build a simple checklist: every subtopic you found across all of them down one side, then tick which ones your own page actually covers.",
          "Anywhere you have a gap is a real, specific thing to fix — not a vague \"make it longer.\"",
        ],
      },
      {
        condition: "Method 2 — The quick AI version",
        action: "faster, and a reasonable first pass before doing the fuller checklist above.",
        steps: [
          "Paste the visible text from the top 2-3 competitor pages into ChatGPT or Claude, along with your own page's text.",
          "Ask what topics they cover that yours doesn't.",
        ],
        links: [
          { label: "ChatGPT", href: "https://chatgpt.com" },
          { label: "Claude", href: "https://claude.ai" },
        ],
      },
    ],
    fixBranches: [
      {
        condition: "Direct gap-filling",
        action:
          "add dedicated sections covering whatever the checklist revealed was missing — schools, price trends, financing for buyers, yield and compliance for landlords — written using your own real local knowledge.",
      },
      {
        condition: "Original data competitors can't copy",
        action:
          "pull genuinely unique information — actual sold-price history for the street or area (free via the Land Registry), or your own agency's real data on how quickly properties in that area typically sell. Depth nobody else can easily replicate.",
        links: [{ label: "Land Registry price data", href: "https://www.gov.uk/search-house-prices" }],
      },
      {
        condition: "Video, transcribed into text",
        action:
          "record yourself walking through the topic — a short area tour, or a \"what to know before buying here\" chat — then get it transcribed and added to the page as written content. Genuine depth, plus a video asset you can reuse elsewhere.",
      },
      {
        condition: "Bring in a genuine local expert",
        action:
          "a mortgage broker, solicitor, or surveyor you already work with contributes a short, real section — \"what a local mortgage broker wants you to know about buying in [town].\" Authentic expertise most competitors won't have, and it can build a referral relationship on the side.",
      },
      {
        condition: "A real FAQ section, built from real questions",
        action:
          "use the actual questions clients have asked you over time, or pull from the keyword research methods covered earlier in this course, to build an FAQ section addressing genuine, common gaps.",
      },
    ],
    cadence:
      "Competitors keep adding content too, so \"thorough\" today can look thin again within a year — worth a comparison check quarterly.",
    cadenceBadge: "Quarterly comparison check",
    doneWithYou: "we run the competitor comparison and tell you exactly what's missing, with options for how to fill it.",
    doneForYou:
      "we research, source, and write the missing depth directly — including chasing the original data and expert contributions where relevant.",
  },
  {
    slug: "clear-structure",
    impactPercent: 2,
    category: "On-Page & Content",
    categoryIndex: 3,
    itemIndex: 17,
    title: "Clear Structure",
    whatIsIt:
      "A page that's easy to scan and follow — short paragraphs, clear subheadings — rather than a dense wall of unbroken text.",
    demoComponent: "clear-structure",
    whyCustomer:
      "A wall of text looks intimidating and boring at a glance, so most people skim, miss the useful part, or simply leave without reading anything properly at all.",
    whySearchEngine:
      "Structure affects how long someone stays and how much they read, which Google treats as a secondary quality signal, alongside everything else it measures more directly.",
    whySearchEngineBadge: "A secondary signal Google reads through engagement, not directly",
    diagnoseMethods: [
      {
        condition: "Method 1 — Read it out loud",
        action: "the fastest test — if you stumble or lose your place, a reader will too.",
        steps: ["Read your own page out loud, start to finish."],
      },
      {
        condition: "Method 2 — Hemingway App, for an objective score",
        action:
          "flags exactly which sentences are too long or too complex, rather than relying on how it feels to you.",
        steps: [
          "Paste your page's text into hemingwayapp.com.",
          "Look for sentences and paragraphs highlighted in yellow or red.",
        ],
        links: [{ label: "Hemingway App", href: "https://hemingwayapp.com" }],
      },
    ],
    fixBranches: [
      {
        condition: "Long, unbroken paragraphs",
        action:
          "break them up, and add a subheading every few paragraphs so someone scanning can find their way straight to the relevant part.",
      },
      {
        condition: "Individual sentences flagged as hard to read",
        action: "shorten them, and cut anything that doesn't directly help the reader.",
      },
    ],
    cadence: "Worth applying to every new page going forward, not just the ones already live.",
    cadenceBadge: "Every new page going forward",
    doneWithYou: "we review and mark up exactly where to restructure.",
    doneForYou: "we write every page to this standard directly.",
  },
  {
    slug: "near-me-local-wording",
    impactPercent: 3,
    category: "On-Page & Content",
    categoryIndex: 3,
    itemIndex: 18,
    title: "\"Near Me\" and Local Wording",
    whatIsIt:
      "Making sure your actual town or area name appears naturally on the page, rather than only generic property terms.",
    demoComponent: "local-wording",
    whyCustomer:
      "Someone searching \"estate agent bristol\" is reassured immediately when they see \"bristol\" clearly on the page — if it's missing, the page can feel generic or irrelevant, even if you genuinely do cover that area.",
    whySearchEngine:
      "This directly feeds Google's local relevance matching — it's checking whether your content genuinely mentions the place someone's searching near.",
    whySearchEngineBadge: "Feeds Google's local relevance matching directly",
    diagnoseMethods: [
      {
        condition: "Method 1 — Check the title and opening",
        action: "the most important placement — this is what both a scanning reader and Google check first.",
        steps: ["Check your title and first paragraph for your area name."],
      },
      {
        condition: "Method 2 — Search the whole page",
        action: "catches the pages where it's in the title but nowhere else — headers, individual listings, image descriptions.",
        steps: [
          "Open the page and press Cmd/Ctrl+F.",
          "Search for your town or area name.",
          "Check it appears more than once, naturally, not just at the very top.",
        ],
      },
    ],
    fixBranches: [
      {
        condition: "Missing from the title or opening paragraph",
        action: "add it there first — this is the placement that matters most.",
      },
      {
        condition: "Present at the top, but missing everywhere else on the page",
        action:
          "reinforce it naturally further down too — in headers, individual listings, or image descriptions — rather than relying on one single mention.",
      },
    ],
    cadence: "Easy to remember on the pages built today, easy to forget on the ones added later.",
    cadenceBadge: "Check on every new page",
    doneWithYou: "we flag missing instances across your site.",
    doneForYou: "we apply this consistently across everything we write.",
  },
  {
    slug: "phone-number-meta-descriptions",
    impactPercent: 0.75,
    category: "On-Page & Content",
    categoryIndex: 3,
    itemIndex: 19,
    title: "Phone Number in Meta Descriptions",
    whatIsIt:
      "Your number showing directly under your listing in the search results, so it's visible before someone even clicks through to your website.",
    whyCustomer:
      "Someone in a hurry can call you straight from the search results page, without ever needing to open your website and hunt for a contact page — a genuinely faster path to actually reaching you.",
    whySearchEngine:
      "This has no effect on ranking position at all — it purely affects whether someone calls you straight from the results, a conversion improvement, not a visibility one.",
    whySearchEngineBadge: "No ranking effect — a conversion improvement, not a visibility one",
    diagnoseMethods: [
      {
        condition: "Method 1 — Google your own business",
        action: "shows you what's actually being displayed right now.",
        steps: ["Google your own business, and check what shows under your listing."],
      },
      {
        condition: "Method 2 — Check the field directly",
        action:
          "Google doesn't always display exactly what you've written — this confirms what's actually set, separate from what's currently shown.",
        steps: [
          "Open the page in your site builder or CMS.",
          "Find the meta description field, and check whether your number is actually written into it.",
        ],
      },
    ],
    fixBranches: [
      {
        condition: "Missing from the meta description field itself",
        action: "edit your meta description in your site builder to include your number directly.",
      },
      {
        condition: "It's in the field, but Google isn't displaying it",
        action:
          "Google sometimes ignores a written meta description if it decides another snippet fits better — there's no guaranteed fix, but keeping it accurate and specific improves the odds it gets used as written.",
      },
    ],
    cadence: "A small fix, easy to apply once and forget everywhere else.",
    cadenceBadge: "Apply once per page, then forget",
    doneWithYou: "we tell you exactly which pages need this.",
    doneForYou: "we apply this across your site directly.",
  },
  {
    slug: "backlinks",
    impactPercent: 7.5,
    category: "Off-Site & Authority",
    categoryIndex: 4,
    itemIndex: 20,
    title: "Backlinks",
    whatIsIt:
      "Other websites linking to yours — for example, a local news site linking to your agency when quoting you on a market update.",
    whyCustomer:
      "Not usually seen directly, but the effect is felt indirectly — a business that's genuinely been featured and linked to elsewhere feels more established and credible than one that's only ever findable through its own website.",
    whySearchEngine:
      "Each genuine link is directly factored into your ranking as a vote of confidence — widely regarded by SEO practitioners as one of the oldest, strongest signals that exists.",
    whySearchEngineBadge: "Direct — one of the longest-standing ranking factors there is",
    diagnoseMethods: [
      {
        condition: "Method 1 — Your own site, via Search Console",
        action: "free, and shows every link Google currently knows about, with no cap.",
        steps: [
          "Go to Google Search Console and select your property.",
          "Click “Links” in the sidebar.",
          "Review the “Top linking sites” and “Top linked pages” lists.",
        ],
        links: [{ label: "Google Search Console", href: "https://search.google.com/search-console" }],
      },
      {
        condition: "Method 2 — A competitor, via Ahrefs",
        action:
          "free, but capped around 100 visible links — still enough to see roughly who's linking to them, and where your own list compares.",
        steps: [
          "Go to Ahrefs' free backlink checker.",
          "Enter a competitor's website address.",
          "Review the list of linking sites, and note any you could realistically approach yourself.",
        ],
        links: [{ label: "Ahrefs Backlink Checker", href: "https://ahrefs.com/backlink-checker" }],
      },
    ],
    fixBranches: [
      {
        condition: "Local news and press",
        action:
          "offer yourself as a source for local market commentary — reporters need a quote for property stories regularly, and most will link to your site when they use one.",
        steps: [
          "Find local journalists who cover property or business on your regional news site.",
          "Email a short, genuinely useful comment on a current local story — average sold prices, a market shift you're seeing, anything you can back up.",
          "Ask to be credited with a link back to your site, not just your name.",
        ],
      },
      {
        condition: "Original local data",
        action:
          "publish something genuinely useful that other sites will want to reference — a downloadable sold-price report for your town, updated quarterly, is a common one that works.",
        steps: [
          "Pull real, free sold-price data from the Land Registry for your area.",
          "Turn it into a simple page or report — average price, price change, days on market.",
          "Share it directly with local news sites and community groups as something worth linking to.",
        ],
        links: [{ label: "Land Registry price data", href: "https://www.gov.uk/search-house-prices" }],
      },
      {
        condition: "Community sponsorship",
        action:
          "sponsoring a local sports team, school event, or charity usually earns a genuine link from their own website's “sponsors” page — often for a modest cost.",
      },
      {
        condition: "Genuine local partners",
        action:
          "mortgage brokers, solicitors, and removal companies you already refer clients to will often link back if you ask directly, especially if you link to them too — real reciprocal relationships, not a link exchange scheme.",
      },
      {
        condition: "Directories and associations",
        action:
          "list your business properly on legitimate, relevant directories — your local Chamber of Commerce, Propertymark, or a local business association — most include a link back as standard.",
        links: [{ label: "Propertymark", href: "https://www.propertymark.co.uk" }],
      },
    ],
    cadence:
      "Earning one link is the easy part — doing this steadily, month after month, is the actual work. This is ongoing, not a task with an end date.",
    cadenceBadge: "Ongoing, month after month",
    doneWithYou: "we identify targets and give you outreach templates.",
    doneForYou: "we run outreach and secure links directly, ongoing.",
  },
  {
    slug: "reddit-forum-presence",
    impactPercent: 4,
    category: "Off-Site & Authority",
    categoryIndex: 4,
    itemIndex: 21,
    title: "Reddit and Forum Presence",
    whatIsIt:
      "Genuinely participating in real conversations happening in your town's online communities — answering a real question someone asked on a local subreddit or property forum.",
    whyCustomer:
      "Seeing a genuinely helpful, non-salesy answer from a local agent in a real community discussion builds trust before they've ever visited your website at all.",
    whySearchEngine:
      "Reddit and forum discussions increasingly surface directly in Google's results and get cited by AI tools in their own right, and roughly 77% of what AI cites about a business comes from off-site sources like this — not the business's own website.",
    whySearchEngineBadge: "Direct — increasingly surfaced by both Google and AI tools",
    diagnoseMethods: [
      {
        condition: "Method 1 — Find where the conversations already are",
        action: "shows you the specific communities and threads worth genuinely contributing to.",
        steps: [
          "Search Reddit and property forums for your town plus “estate agent” or “letting agent.”",
          "Note which subreddits or forums come up repeatedly — that's where your actual audience already is.",
        ],
      },
      {
        condition: "Method 2 — Check what's already being said about you",
        action: "these conversations happen whether you're part of them or not — worth knowing if your business is already being discussed.",
        steps: [
          "Search Reddit directly for your business name.",
          "Note anything already said, good or bad, and whether it's worth a genuine, honest reply.",
        ],
      },
    ],
    fixBranches: [
      {
        condition: "Genuinely useful, no link needed",
        action:
          "answer the actual question in full, using your real local knowledge — most of the value here is being visibly the local expert, not the click itself.",
      },
      {
        condition: "A link is genuinely relevant",
        action:
          "only include one when it directly helps answer the question — a specific listing, a report you've published — never as the point of the comment itself. Most communities remove or penalise anything that reads as an ad.",
      },
      {
        condition: "Setting up your presence",
        action:
          "use a real name and a profile that's honestly identified as an agent, rather than posting anonymously and pretending not to be — communities respond far better to disclosed, genuine participation than a hidden sales pitch.",
      },
    ],
    cadence:
      "Genuine participation sustained over months is what this actually takes, not a single post. Ongoing, ideally a few times a week.",
    cadenceBadge: "A few times a week, ongoing",
    doneWithYou: "we identify the right communities and give you guidance on how to engage authentically.",
    doneForYou: "we manage this presence directly on your behalf.",
  },
  {
    slug: "nap-consistency",
    impactPercent: 5,
    category: "Off-Site & Authority",
    categoryIndex: 4,
    itemIndex: 22,
    title: "NAP Consistency",
    whatIsIt:
      "Making sure your business name, address, and phone number are identical everywhere they appear online — not a slightly different phone number on one old directory listing.",
    whyCustomer:
      "If they find an outdated or wrong phone number somewhere online and it doesn't connect, most people won't hunt for the correct one — they'll simply assume the business is unreliable or has closed, and move on.",
    whySearchEngine:
      "Citation consistency is measured as a genuine local ranking factor — mismatches quietly damage the trust search engines place in your business's legitimacy.",
    whySearchEngineBadge: "Measured as a genuine local ranking factor",
    diagnoseMethods: [
      {
        condition: "Method 1 — Search manually",
        action: "quick, and catches the listings that show up on the first page or two.",
        steps: [
          "Google your exact business name.",
          "Note every listing that appears — directories, review sites, local news mentions.",
          "Check the name, address, and phone number on each matches exactly.",
        ],
      },
      {
        condition: "Method 2 — Moz Local's free listing check",
        action:
          "checks major directories directly, rather than relying on which ones happen to rank well enough for you to find by searching.",
        steps: [
          "Go to moz.com/local and enter your business name and postcode.",
          "Review the list of listings found, and the consistency score for each.",
        ],
        links: [{ label: "Moz Local", href: "https://moz.com/local" }],
      },
    ],
    fixBranches: [
      {
        condition: "A handful of mismatches on major platforms",
        action:
          "correct these directly yourself — log into Google Business Profile, Facebook, Bing Places, and Apple Business Connect, and update the details on each.",
      },
      {
        condition: "Mismatches on directories you don't control",
        action:
          "most legitimate directories have a “claim this listing” or “suggest an edit” option — claim it where you can, or contact the site directly where you can't.",
      },
      {
        condition: "A large number of scattered, old listings",
        action:
          "this becomes a genuinely time-consuming manual job — a paid citation-management tool like Moz Local or BrightLocal can push corrected details out to dozens of directories at once, worth it once the number gets unmanageable to fix by hand.",
        links: [
          { label: "Moz Local", href: "https://moz.com/local" },
          { label: "BrightLocal", href: "https://www.brightlocal.com" },
        ],
      },
    ],
    cadence:
      "Details drift out of sync on their own over time, even when nobody's changed anything on purpose. Worth a full check quarterly.",
    cadenceBadge: "~30 min/quarter",
    doneWithYou: "we run the audit and give you the exact list of what to fix, and where.",
    doneForYou: "we monitor and correct this directly, ongoing.",
  },
  {
    slug: "google-business-profile",
    impactPercent: 7.5,
    category: "Local & Business Profile",
    categoryIndex: 5,
    itemIndex: 23,
    title: "Google Business Profile",
    whatIsIt:
      "Your business's info card on Google Maps and search — hours, photos, services, all visible before someone even reaches your actual website.",
    whyCustomer:
      "This is often the very first thing a potential customer sees about your business — missing photos, no listed hours, or an incomplete description can make an otherwise great agency look unprofessional or not actively trading.",
    whySearchEngine:
      "Google states local ranking is based mainly on relevance, distance, and prominence — profile completeness feeds directly into relevance, making this one of the biggest single factors that exists.",
    whySearchEngineBadge: "One of the biggest single local ranking factors that exists",
    diagnoseMethods: [
      {
        condition: "Method 1 — Check your own dashboard directly",
        action: "the most direct read — every field either exists or it doesn't.",
        steps: [
          "Log into business.google.com.",
          "Go through every section and note anything blank or incomplete.",
        ],
        links: [{ label: "Google Business Profile", href: "https://business.google.com" }],
      },
      {
        condition: "Method 2 — Compare against a strong competitor",
        action: "shows you what “complete” actually looks like in practice, not just what's technically filled in.",
        steps: [
          "Search your business type in your town on Google Maps.",
          "Open the top-ranking competitor's profile.",
          "Note anything they have that yours doesn't — photo count, services listed, Q&A activity.",
        ],
      },
    ],
    fixBranches: [
      {
        condition: "Blank or incomplete fields",
        action:
          "fill in every section fully — category, hours, services, attributes, and a genuine description using your real business details.",
      },
      {
        condition: "Fewer than 10 photos",
        action:
          "add at least 10 real photos — the office, the team, local area shots, recent sold or let properties. Real photos outperform stock images here specifically.",
      },
      {
        condition: "Unanswered questions in the Q&A section",
        action:
          "answer these directly — anyone can ask a question here, and an unanswered one sits there indefinitely, visible to everyone who visits your profile.",
      },
    ],
    cadence:
      "Hours change, services get added, questions come in — this needs revisiting regularly, not filled in once and left. Worth a full review monthly.",
    cadenceBadge: "~15 min/month",
    doneWithYou: "we audit and tell you exactly what to update.",
    doneForYou: "we manage and update this directly, ongoing.",
  },
  {
    slug: "profile-activity",
    impactPercent: 3,
    category: "Local & Business Profile",
    categoryIndex: 5,
    itemIndex: 24,
    title: "Profile Activity",
    whatIsIt:
      "Posting regular updates so your profile looks actively maintained — a new instruction, a seasonal message — rather than untouched for months.",
    whyCustomer:
      "A profile with no recent activity can look like the business has closed down or isn't actively trading, even if that's completely untrue — the impression alone is enough to make someone hesitate or look elsewhere.",
    whySearchEngine:
      "Google and Apple both reward business profiles that look genuinely active, and quietly downrank ones that look abandoned.",
    whySearchEngineBadge: "Google and Apple both quietly downrank profiles that look abandoned",
    diagnoseMethods: [
      {
        condition: "Method 1 — Check your last post date",
        action: "the simplest signal — how long has it actually been.",
        steps: [
          "Open your Business Profile dashboard.",
          "Check the date of your most recent Google Post.",
        ],
      },
      {
        condition: "Method 2 — Check your Performance trend",
        action: "shows whether inactivity is already costing you visibility, not just how long it's been.",
        steps: [
          "Inside your Business Profile dashboard, open the “Performance” tab.",
          "Check whether views and actions (calls, direction requests) have been trending down.",
        ],
      },
    ],
    fixBranches: [
      {
        condition: "No regular posting habit yet",
        action:
          "set a weekly recurring reminder in your calendar — the biggest reason this lapses isn't effort, it's simply forgetting.",
      },
      {
        condition: "Struggling for what to post",
        action:
          "ask an AI tool to draft a quick, genuine update from a one-line prompt — a new listing, a sold property, a local market note. Review and personalise before posting, don't post it unedited.",
        links: [
          { label: "ChatGPT", href: "https://chatgpt.com" },
          { label: "Claude", href: "https://claude.ai" },
        ],
      },
    ],
    cadence: "A burst of posts followed by months of silence undoes the benefit — this needs to be genuinely weekly, ongoing.",
    cadenceBadge: "Weekly, ongoing",
    doneWithYou: "we give you a simple weekly template to post yourself.",
    doneForYou: "we post on your behalf every week, automatically.",
  },
  {
    slug: "multi-platform-presence",
    impactPercent: 2,
    category: "Local & Business Profile",
    categoryIndex: 5,
    itemIndex: 25,
    title: "Multi-Platform Presence",
    whatIsIt:
      "Being visible on Bing and Apple Maps too, not just Google — an iPhone user searching “estate agent near me” through Apple Maps, for example.",
    whyCustomer:
      "An iPhone or Bing user simply won't find you at all if you're not listed there, no matter how strong your Google presence is — they're not even looking at Google to begin with.",
    whySearchEngine:
      "Safari alone accounts for roughly 30% of UK web traffic — this has zero effect on your Google ranking, since Bing and Apple are entirely separate systems, but it captures a huge audience most agencies ignore entirely.",
    whySearchEngineBadge: "Zero effect on Google ranking — a separate audience entirely",
    diagnoseMethods: [
      {
        condition: "Method 1 — Search as a customer would",
        action: "shows you exactly what someone outside the Google ecosystem actually finds.",
        steps: [
          "Search your business name on Bing.",
          "Search your business name on Apple Maps (via an iPhone, or maps.apple.com).",
        ],
      },
      {
        condition: "Method 2 — Check directly in each dashboard",
        action: "confirms definitively whether you've already claimed it, rather than relying on what happens to show in search.",
        steps: [
          "Go to bing.com/places and check whether your business is already listed under your account.",
          "Go to businessconnect.apple.com and check the same.",
        ],
        links: [
          { label: "Bing Places", href: "https://www.bing.com/places" },
          { label: "Apple Business Connect", href: "https://businessconnect.apple.com" },
        ],
      },
    ],
    fixBranches: [
      {
        condition: "Not listed on Bing",
        action:
          "claim it free at bing.com/places — Bing can often import your details directly from Google Business Profile, which speeds this up considerably.",
        links: [{ label: "Bing Places", href: "https://www.bing.com/places" }],
      },
      {
        condition: "Not listed on Apple Maps",
        action: "claim it free at businessconnect.apple.com — a separate process from Bing, and needs its own verification.",
        links: [{ label: "Apple Business Connect", href: "https://businessconnect.apple.com" }],
      },
    ],
    cadence:
      "Claiming these is the easy five-minute job. Remembering to keep them updated alongside everything else, indefinitely, is the actual task. Worth a check quarterly.",
    cadenceBadge: "~10 min/quarter",
    doneWithYou: "we help you claim both and tell you what to keep updated.",
    doneForYou: "we manage both profiles directly, ongoing.",
  },
  {
    slug: "agent-bios",
    impactPercent: 3,
    category: "Trust & Authority (E-E-A-T)",
    categoryIndex: 6,
    itemIndex: 26,
    title: "Agent Bios",
    whatIsIt:
      "A real, specific paragraph about each team member — their actual experience, their specialism — not just a name and job title.",
    whyCustomer:
      "Deciding who to trust with selling their home, people want to know the actual person they'd be dealing with — a faceless team page, or no team page at all, feels impersonal and makes the decision to trust you harder than it needs to be.",
    whySearchEngine:
      "E-E-A-T is explicit in Google's quality evaluation, weighted especially heavily for major financial decisions like property.",
    whySearchEngineBadge: "Weighted especially heavily for major financial decisions like property",
    diagnoseMethods: [
      {
        condition: "Method 1 — Read your own team page",
        action: "the direct check — does it actually say anything.",
        steps: [
          "Open your team or “about us” page.",
          "Check if each bio says more than a name and job title.",
        ],
      },
      {
        condition: "Method 2 — Check if that expertise is backed up elsewhere",
        action:
          "a bio claiming years of experience carries more weight when it's genuinely traceable — Google's E-E-A-T guidance specifically favours people who are identifiable outside your own site too.",
        steps: [
          "Search each team member's name plus your business name.",
          "Check whether a LinkedIn profile, professional body membership (e.g. Propertymark), or other outside mention backs up what the bio claims.",
        ],
      },
    ],
    fixBranches: [
      {
        condition: "Just a name and job title",
        action:
          "write a genuine paragraph — how long they've worked in property, what they specialise in, something real and specific rather than generic.",
      },
      {
        condition: "No outside trace of their expertise",
        action:
          "link out to a real LinkedIn profile or relevant professional membership where one exists — this backs up the bio rather than asking Google to just take your word for it.",
      },
    ],
    cadence: "A bio for someone who left two years ago does more harm than having none at all — update this whenever your team changes.",
    cadenceBadge: "Whenever your team changes",
    doneWithYou: "we help you write each bio properly.",
    doneForYou: "we write and keep these updated directly.",
  },
  {
    slug: "reviews",
    impactPercent: 8,
    category: "Trust & Authority (E-E-A-T)",
    categoryIndex: 6,
    itemIndex: 27,
    title: "Reviews",
    whatIsIt: "What real customers say about you, publicly, and how — or whether — you respond to it.",
    whyCustomer:
      "Checking reviews before ever calling an agent is now completely standard behaviour — a low count, old reviews, or an unanswered negative one all actively make people hesitate, and many will simply choose whoever looks safer instead.",
    whyCustomerStat: { value: "89%", label: "of consumers are more likely to choose a business that responds to every review" },
    whySearchEngine:
      "89% of consumers are more likely to choose a business that responds to every review, and review count, rating, and recency are all directly part of Google's local “prominence” ranking signal.",
    whySearchEngineBadge: "Count, rating, and recency directly feed Google's “prominence” signal",
    diagnoseMethods: [
      {
        condition: "Method 1 — Check your own numbers",
        action: "the baseline — count, most recent date, and how many you've actually replied to.",
        steps: [
          "Open your Google Business Profile and check your total review count.",
          "Note the date of your most recent review.",
          "Count how many reviews currently have no reply from you.",
        ],
      },
      {
        condition: "Method 2 — Check against a close competitor",
        action:
          "“good” is relative — a buyer comparing you side-by-side with a rival cares about the difference between you, not an abstract number.",
        steps: [
          "Search your business type in your town on Google Maps.",
          "Open your closest competitor's profile.",
          "Compare count, rating, and recency directly against your own.",
        ],
      },
    ],
    fixBranches: [
      {
        condition: "Count or recency is low",
        action:
          "ask every happy customer directly, right after helping them — including landlords once a tenancy's set up, not just buyers or sellers after completion.",
      },
      {
        condition: "Reviews are going unanswered",
        action:
          "respond to every review, positive or negative — a considered reply to a negative one often does more for trust than the review itself did damage.",
      },
    ],
    cadence: "Getting five reviews was never the hard part — keeping a steady flow coming in, indefinitely, is. This needs to be weekly, ongoing.",
    cadenceBadge: "Weekly, ongoing",
    doneWithYou: "we give you the exact process and templates to run this yourself.",
    doneForYou: "we manage requests and responses directly, ongoing.",
  },
  {
    slug: "analytics-enquiry-tracking",
    impactPercent: 1,
    category: "Measurement",
    categoryIndex: 7,
    itemIndex: 28,
    title: "Analytics, Enquiry Tracking, and Algorithm Awareness",
    whatIsIt:
      "The instruments for seeing whether everything above is actually working — tracking who visits, where enquiries genuinely come from, and whether Google's changed anything recently.",
    whyCustomer:
      "Invisible to them entirely — this is purely about you understanding your own results, not something a customer ever notices.",
    whySearchEngine:
      "Also has no direct effect on ranking — but without it, you have no way of knowing which of everything else in this guide is genuinely working, and a single month of data tells you almost nothing on its own.",
    whySearchEngineBadge: "No ranking effect — but without it, nothing else here is measurable",
    diagnoseMethods: [
      {
        condition: "Method 1 — Ask yourself honestly",
        action: "the quick version — most people already know the answer if they're honest.",
        steps: ["Could you currently say which page generated your last 5 enquiries?"],
      },
      {
        condition: "Method 2 — Try to actually answer it",
        action: "the honest self-check above is easy to answer optimistically — actually attempting it settles it for real.",
        steps: [
          "Open whatever analytics you currently have, if any.",
          "Try to trace your last 5 genuine enquiries back to a specific page or source.",
          "Note exactly where you get stuck — that's exactly what's missing.",
        ],
      },
    ],
    fixBranches: [
      {
        condition: "No visitor tracking",
        action: "set up Google Analytics, free, at analytics.google.com.",
        links: [{ label: "Google Analytics", href: "https://analytics.google.com" }],
      },
      {
        condition: "No way to trace enquiries to a source",
        action:
          "add “how did you hear about us?” to every enquiry form and phone call, logging answers even in a simple spreadsheet.",
      },
      {
        condition: "Not tracking algorithm changes",
        action: "follow Search Engine Journal or Search Engine Land for update news, or ask an AI tool with web search enabled.",
        links: [
          { label: "Search Engine Journal", href: "https://www.searchenginejournal.com" },
          { label: "Search Engine Land", href: "https://searchengineland.com" },
        ],
      },
    ],
    cadence:
      "Check monthly, not daily — consistency matters more than frequency here, and it's usually the first thing dropped when things get busy, which is exactly the wrong instinct.",
    cadenceBadge: "Monthly, not daily",
    doneWithYou: "we set this up and show you how to read the reports.",
    doneForYou: "we track and report this to you directly, every month.",
  },
  {
    slug: "competitor-gaps",
    impactPercent: 1,
    category: "Playing It Smart",
    categoryIndex: 8,
    itemIndex: 29,
    title: "Finding a Competitor's Weak Spots and Content Gaps",
    whatIsIt:
      "Actively identifying where a specific, named rival is weak, rather than just “doing SEO well” in isolation and hoping it's enough.",
    whyCustomer:
      "They're not choosing “a good agent” in the abstract — they're choosing between you and the specific rival they've also found, so being better than that one named business is what actually wins the decision.",
    whySearchEngine:
      "Not a direct ranking factor itself — this tells you exactly where to focus the direct and indirect factors already covered in this guide, for maximum effect against the rival actually costing you business.",
    whySearchEngineBadge: "Not a ranking factor itself — a targeting tool for everything else in this guide",
    diagnoseMethods: [
      {
        condition: "Method 1 — Walk through this same checklist on their site",
        action: "the thorough version — apply everything covered in this course to them, not just yourself.",
        steps: [
          "Pick a specific, named competitor you genuinely lose enquiries to.",
          "Browse their site using this same course as a checklist.",
          "Note anywhere they're clearly stronger, and anywhere they're clearly weaker.",
        ],
      },
      {
        condition: "Method 2 — Ask an AI tool to compare directly",
        action: "faster, and a reasonable first pass before the fuller manual walkthrough.",
        steps: [
          "Paste their homepage and a key page's text into ChatGPT or Claude, along with your own.",
          "Ask what they're covering that you aren't, and where you're already ahead.",
        ],
        links: [
          { label: "ChatGPT", href: "https://chatgpt.com" },
          { label: "Claude", href: "https://claude.ai" },
        ],
      },
    ],
    fixBranches: [
      {
        condition: "Once you've got a list of gaps",
        action:
          "prioritise the one that's easiest for you to fix and hardest for them to quickly copy — genuine local data or a real relationship-based advantage beats anything they could replicate in an afternoon.",
      },
    ],
    cadence: "Competitors don't stay still either — this goes stale the moment it's filed away and forgotten. Worth revisiting quarterly.",
    cadenceBadge: "Quarterly",
    doneWithYou: "we run the competitor analysis and hand you the priority list.",
    doneForYou: "we monitor competitors and act on this directly, ongoing.",
  },
  {
    slug: "being-early-new-platforms",
    impactPercent: 0.75,
    category: "Playing It Smart",
    categoryIndex: 8,
    itemIndex: 30,
    title: "Being Early on New Platforms",
    whatIsIt: "Claiming presence on a new platform before competitors even notice it exists.",
    whyCustomer:
      "Someone searching on a platform where you're the only local agent present sees you as the obvious, sometimes only, choice — no comparison needed at all.",
    whySearchEngine:
      "Being early doesn't change how any one platform's algorithm treats you — but low competition on a newer platform means outsized visibility for relatively little effort, for as long as it lasts.",
    whySearchEngineBadge: "No algorithm advantage — just far less competition, while it lasts",
    diagnoseMethods: [
      {
        condition: "Method 1 — Check whether you're already behind",
        action: "confirms whether competitors have already claimed the obvious platforms before you.",
        steps: [
          "Search your business name on Apple Maps and Bing.",
          "Check whether any local competitors already appear there and you don't.",
        ],
      },
      {
        condition: "Method 2 — Watch for what's next",
        action: "the real advantage isn't Bing and Apple specifically — it's being early to whatever comes after them.",
        steps: [
          "Set a recurring quarterly reminder to search for new local-search or maps platforms launching.",
          "Ask an AI tool with web search enabled whether any genuinely new local search platforms have launched recently.",
        ],
      },
    ],
    fixBranches: [
      {
        condition: "Not yet claimed on Bing or Apple Maps",
        action: "claim both today — free, and most competitors genuinely haven't yet, so the advantage is still there for the taking.",
        links: [
          { label: "Bing Places", href: "https://www.bing.com/places" },
          { label: "Apple Business Connect", href: "https://businessconnect.apple.com" },
        ],
      },
    ],
    cadence:
      "The advantage fades the moment everyone else catches up, which they eventually will — worth staying alert to new platforms as they emerge, not just a one-time check.",
    cadenceBadge: "Ongoing, watch for what's new",
    doneWithYou: "we flag new opportunities as they appear.",
    doneForYou: "we claim and manage new platform presence on your behalf, proactively.",
  },
  {
    slug: "time-and-outside-your-control",
    category: "The Honest Picture",
    categoryIndex: 9,
    itemIndex: 31,
    title: "Time, and What's Outside Your Control",
    whatIsIt:
      "Two categories of ranking factor that don't respond to effort at all — one because it simply takes time, the other because it was never yours to control in the first place.",
    analogy: [
      {
        label: "Takes time, can't be rushed",
        text: "Domain age, backlink history, content depth, review history — all direct ranking factors, but ones that only build through elapsed time, not effort alone.",
      },
      {
        label: "Completely outside your control",
        text: "Google's algorithm, update timing, competitor decisions, real search demand, and physical distance.",
      },
    ],
    whyCustomer:
      "An established-feeling business with years of visible history and reviews simply reads as more trustworthy than a brand-new one, even if the newer business is doing everything else right — and none of the factors on the right are things a customer ever thinks about directly either.",
    whySearchEngine:
      "Domain age, backlink history, content depth, and review history are all genuine, direct ranking factors — but ones no amount of effort this month can shortcut. There's no fix beyond starting now, since every month delayed is a month a patient competitor pulls further ahead. Google's algorithm, update timing, competitor decisions, real search demand, and physical distance genuinely affect your ranking too — but none of them are things you can act on. This applies equally to every agency you're competing against, including whoever's ahead of you now.",
    whySearchEngineBadge: "Genuine ranking factors — just not ones effort can shortcut",
  },
  {
    slug: "course-complete",
    category: "Course Complete",
    categoryIndex: 10,
    itemIndex: 32,
    title: "You've Reached the End of the Course",
    whatIsIt:
      "Nothing I've shown you how to do today couldn't be done by a 15 year old. Every single fix in this guide is genuinely within reach — it doesn't take special skill, just knowing what to look for and actually doing it.",
    closingSections: [
      {
        heading: "",
        paragraphs: [
          "I can't guarantee you'll reach number one. Nobody honestly can — not me, not anyone. But you have a genuinely strong chance, especially once you've done the research and seen for yourself that other agents in your area aren't doing this properly, if at all. In that case, it's more than likely you'll get there.",
          "What actually separates the agents who win from the ones who don't isn't knowing more than everyone else — it's doing this correctly, and doing it consistently. Consistency is the single most important thing in this entire guide. Little and often, kept up over time. Let one key thing slip, and it can genuinely undo everything else you've built.",
          "The longer you keep this up, the better it works. And the sooner you start, the bigger the advantage you're building — because that head start ages with you. Your consistency compounds. If Google's been recommending you for the past five years, and you've kept doing the work, adapting as the market and the platforms shift underneath you, you don't just get to number one — you stay there.",
        ],
      },
      {
        heading: "",
        paragraphs: [
          "Add it up, and the fixed, timed checks in this guide come to roughly 3–4 hours a month — under an hour a week. On top of that sit a handful of weekly habits, like posting and replying to reviews, that don't have a fixed number of minutes but are worth building into the same routine. I understand that can feel like a lot to hold in your head all at once, so I've put together a schedule to help.",
        ],
        cta: { label: "Download the schedule ↓", href: "/seocourse/schedule" },
      },
      {
        heading: "What Actually Moves the Needle",
        paragraphs: [
          "Not everything in this guide carries the same weight. Some of it is foundational — skip it and nothing else works. Some of it is a genuine ranking factor Google measures directly. And some of it, honestly, is a small polish that matters far less than it feels like it should. If you're short on time and need to know where to start, start at the top of this list.",
        ],
        chart: "priority-breakdown",
      },
      {
        heading: "A Word About Our Services",
        paragraphs: [
          "Now that you've reached the end, I want to be upfront about what we do here at Reyse.",
          "If you've read through this and thought “yes, this is exactly what I need to reach my goal” — but it feels like a lot, genuinely time-consuming, and you're not confident doing it all yourself — that's exactly what we're here for. We offer two services: Done-For-You and Done-With-You. You'll have noticed, on every single item in this guide, exactly what each service level actually covers. If something in here stood out as worth exploring properly, feel free to book a call — just click “Get Started” in the top right.",
          "One more thing I'd genuinely appreciate: if you got any value at all from this guide, please leave us a review on Google. It helps far more than you'd think — it's how this guide reaches the next person who needs it, and it's a big part of how we grow.",
          "As always, thank you for the most valuable thing you gave today — your attention. And if you found this useful, take a look at our other guides in the Resources section.",
        ],
      },
    ],
  },
];
