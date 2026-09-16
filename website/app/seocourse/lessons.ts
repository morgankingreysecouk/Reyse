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
  demoComponent?:
    | "load-speed"
    | "mobile-responsive"
    | "security-badge"
    | "site-structure"
    | "sitemap-discovery"
    | "robots-txt"
    | "split-ranking";
  whyCustomer: string;
  whyCustomerStat?: { value: string; label: string };
  whySearchEngine: string;
  whySearchEngineBadge: string;
  /** Simple case: one flat numbered list. */
  diagnoseSteps?: string[];
  diagnoseLink?: ExternalLink;
  /** Multiple distinct diagnostic approaches — rendered as method cards instead of a flat list. */
  diagnoseMethods?: FixBranch[];
  fixBranches: FixBranch[];
  fixShortcut?: string;
  fixShortcutLinks?: ExternalLink[];
  fixFollowUp?: string;
  cadence: string;
  cadenceBadge: string;
  doneWithYou: string;
  doneForYou: string;
};

export const lessons: Lesson[] = [
  {
    slug: "core-web-vitals",
    category: "Technical Foundations",
    categoryIndex: 1,
    itemIndex: 1,
    title: "Core Web Vitals / Page Load Speed",
    whatIsIt:
      "Put simply, how fast your page loads, how quickly it responds when you click something, and how visually stable it is while loading.",
    analogy: [
      { label: "Door speed", text: "how fast the shop door opens" },
      { label: "Staff response", text: "how quickly the staff respond" },
      { label: "Stability", text: "whether things stay still while you're reading, rather than shifting under your hand" },
    ],
    demoComponent: "load-speed",
    whyCustomer:
      "Someone searching for an agent on their commute, on patchy mobile signal, gives your site a few seconds before giving up entirely and trying the next result. Every extra 100ms of load time costs roughly 1% in lost conversions — real people, genuinely leaving before they've seen a single listing.",
    whyCustomerStat: { value: "1%", label: "lost per extra 100ms of load time" },
    whySearchEngine:
      "This has been a confirmed Google ranking factor since 2021. Google, Bing, and every major search engine measure this directly and factor it into how they rank you — not a guess, a measured input alongside many others.",
    whySearchEngineBadge: "Confirmed Google ranking factor since 2021",
    diagnoseSteps: [
      "Go to pagespeed.web.dev.",
      "Type in your website address and press Enter.",
      "Wait for both the Mobile and Desktop reports to load.",
      "Note your score for each of the three metrics, and read the “Diagnostics” section — it lists exactly what's slowing you down.",
    ],
    diagnoseLink: { label: "pagespeed.web.dev", href: "https://pagespeed.web.dev/" },
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
      { label: "Gemini", href: "https://gemini.google.com" },
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
    diagnoseSteps: [
      "Go to pagespeed.web.dev — it tests the mobile version of your site by default.",
      "Browse your own site on your own phone, exactly as a landlord or buyer would.",
      "Open Chrome, right-click any page, click “Inspect,” then click the small phone/tablet icon near the top-left of the panel — this previews your site on different screen sizes.",
      "Note anything too small to tap, cramped, or awkward.",
    ],
    diagnoseLink: { label: "pagespeed.web.dev", href: "https://pagespeed.web.dev/" },
    fixBranches: [
      {
        condition: "Specific broken elements (tiny text, cramped buttons)",
        action:
          "usually quick fixes within your site builder's settings. Ask an AI tool to help you write the fix, ask your developer, or write it yourself if you know how.",
        links: [
          { label: "ChatGPT", href: "https://chatgpt.com" },
          { label: "Claude", href: "https://claude.ai" },
          { label: "Gemini", href: "https://gemini.google.com" },
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
    diagnoseSteps: [
      "Look at your own website's address bar.",
      "Check for “https://” and a padlock icon.",
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
    diagnoseSteps: [
      "Sketch your site as a simple tree, homepage at the top.",
      "Count the number of clicks needed to reach your deepest page.",
      "Alternatively, paste your sitemap.xml contents into an AI tool and ask it to flag anything more than 3 clicks from the homepage.",
    ],
    fixBranches: [
      {
        condition: "Add internal links between genuinely related pages",
        action:
          "a local area guide linked to your listings in that area, for example. Do this yourself directly in your page editor, or note it as a task for a developer.",
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
    diagnoseSteps: [
      "Visit yourwebsite.com/sitemap.xml directly in your browser (e.g. reyselettings.co.uk/sitemap.xml).",
      "If it loads, paste the contents into an AI tool and ask it to summarise what's listed, and whether anything important seems missing based on your site.",
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
    diagnoseSteps: [
      "Visit yourwebsite.com/robots.txt in your browser (e.g. reyselettings.co.uk/robots.txt).",
      "Paste the contents into ChatGPT or Claude and ask if anything important is being blocked.",
      "A clean result looks like “Allow: /” with no “Disallow:” lines blocking anything important — generally, the less restrictive, the better.",
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
    diagnoseSteps: [
      "Open your homepage, right-click, click “View Page Source” (or Cmd+Option+U on Mac).",
      "Search (Cmd+F) for “canonical.”",
      "Check the address inside that line matches the page you're actually on.",
      "Repeat on 2–3 other key pages.",
      "Also check whether “www” and non-“www” versions of your site both load separately, rather than one redirecting to the other.",
    ],
    fixBranches: [
      {
        condition: "This genuinely isn't a DIY job",
        action:
          "getting it wrong can hurt rankings. Hand this directly to a developer with your exact findings — or ask an AI tool to write the fix for you to pass along.",
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
    diagnoseSteps: [
      "Go to uptimerobot.com and sign up, free.",
      "Add your website as a monitor.",
      "Let it run for a few weeks.",
    ],
    diagnoseLink: { label: "uptimerobot.com", href: "https://uptimerobot.com" },
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
];
