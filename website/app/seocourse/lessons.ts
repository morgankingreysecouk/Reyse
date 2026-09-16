export type ExternalLink = { label: string; href: string };

export type FixBranch = {
  condition: string;
  action: string;
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
  demoComponent?: "load-speed" | "mobile-responsive" | "security-badge" | "site-structure";
  whyCustomer: string;
  whyCustomerStat?: { value: string; label: string };
  whySearchEngine: string;
  whySearchEngineBadge: string;
  diagnoseSteps: string[];
  diagnoseLink?: ExternalLink;
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
];
