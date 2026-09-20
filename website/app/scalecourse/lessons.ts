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
  }[];
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
    slug: "reuse-schema-and-trust-templates",
    category: "Before You Open The Doors",
    categoryIndex: 1,
    itemIndex: 1,
    title: "Reusing Your Schema And Trust-Signal Templates",
    whatIsIt:
      "Building your first branch's schema markup and trust signals as a reusable template from day one — a structure you drop new details into for branch two, twenty, or two hundred — rather than a bespoke build redone by hand every single time.",
    analogy: [
      {
        label: "The flat-pack model",
        text: "A custom-built piece of furniture is beautiful once and expensive every time after. A well-designed flat-pack template is good enough, and takes minutes to assemble again for the next room.",
      },
    ],
    whyCustomer:
      "A buyer or tenant researching your fifth branch should find the same quality of structured, verifiable information as someone researching your first. Inconsistent depth branch to branch quietly tells search engines and AI tools that some locations matter more than others — and that impression reaches customers too.",
    whySearchEngine:
      "This is the same schema markup covered in depth in the SEO course, just designed once to be duplicated rather than rebuilt — the technical requirement doesn't change per branch, only the business details inside it do.",
    whySearchEngineBadge: "Foundation — set once, inherited by every branch after",
    diagnoseSteps: [
      "Check whether your current schema and trust-signal setup is documented as a reusable template, or exists only as one-off work no one else could easily repeat.",
      "If you already have more than one branch, compare their schema — is it consistent, or does quality visibly drop off after the first?",
    ],
    fixBranches: [
      {
        condition: "If your first branch's setup isn't documented as a template",
        action: "turn it into one now, before opening the next branch — a clear checklist or copyable structure, not tribal knowledge in one person's head.",
      },
      {
        condition: "If existing branches already show inconsistent schema",
        action: "standardise them against your best branch's setup, then apply that same template going forward.",
      },
    ],
    fixShortcut: "Ask ChatGPT or Claude to turn your first branch's implemented schema into a generic, reusable template with clearly marked fields to swap per branch.",
    fixShortcutLinks: [
      { label: "ChatGPT", href: "https://chatgpt.com" },
      { label: "Claude", href: "https://claude.ai" },
    ],
    cadence: "Set once per branch as it opens — not a recurring task, though worth revisiting if schema requirements themselves change.",
    cadenceBadge: "Set once per branch",
    doneWithYou: "we help you turn your first branch's setup into a genuine, reusable template.",
    doneForYou: "we build every schema template and trust signal to be duplicated by design, then implement it directly for every branch as you open.",
  },
  {
    slug: "decide-branch-architecture",
    category: "Before You Open The Doors",
    categoryIndex: 1,
    itemIndex: 2,
    title: "Deciding Your Branch Page Architecture Before You Need It",
    whatIsIt:
      "Deciding once, before you need it, whether new branch pages live as part of your existing website — a subdirectory — or as separate standalone sites, since this single architectural choice determines how much authority every future branch inherits.",
    whyCustomer:
      "Indirectly customer-facing: a new branch that ranks and appears trustworthy from day one is one customers can actually find, rather than one invisible for months while it slowly rebuilds trust your main site already earned.",
    whySearchEngine:
      "A new branch built as a standalone site starts from zero trust with search engines, however good the templates are. Built as part of your existing website instead, it inherits the trust your main domain already earned — a one-time architectural choice, not something redone per branch. It's why a 50th branch can rank faster than your 1st one ever did.",
    whySearchEngineBadge: "Foundation — decided once, changes how fast every future branch ranks",
    diagnoseSteps: [
      "Check how your current branch pages are set up: subdirectories of your main site (yoursite.com/branch), or entirely separate domains.",
    ],
    fixBranches: [
      {
        condition: "If branches are currently separate standalone sites",
        action: "this is a genuinely significant change to make retroactively — flag it as a priority conversation before opening the next branch, rather than adding a third standalone site to the problem.",
      },
      {
        condition: "If you haven't opened a second branch yet",
        action: "decide the subdirectory structure now, so it's not a rushed decision made under pressure once the branch is ready to launch.",
      },
    ],
    cadence: "Decided once, for the whole network — not a recurring check.",
    cadenceBadge: "Decided once",
    doneWithYou: "we help you think through the right architecture for your specific situation before you commit to it.",
    doneForYou: "we build every new branch page directly into your existing site's structure, inheriting your domain's authority from day one.",
  },
  {
    slug: "prepare-listing-data-format",
    category: "Before You Open The Doors",
    categoryIndex: 1,
    itemIndex: 3,
    title: "Preparing Your Listing Data Format Before You Need It",
    whatIsIt:
      "Deciding in advance exactly how you'll capture and format each new branch's name, address, phone number, and other core details — so opening branch three isn't the first time anyone's actually thought about how the data should look.",
    whyCustomer:
      "A consistent format across branches — the same way your business name and phone number are written, every time — is invisible when it's right. It's exactly the kind of small inconsistency that quietly confuses a customer cross-checking you online, and the platforms deciding whether to trust the listing.",
    whySearchEngine:
      "Consistent NAP (name, address, phone) data is a well-established local ranking input — inconsistency dilutes it directly. Having a fixed format ready before you need it prevents the inconsistency from ever starting, rather than correcting it after the fact.",
    whySearchEngineBadge: "Foundation — prevents inconsistency before it starts",
    diagnoseSteps: [
      "Check whether you have a single, agreed format for how your business name, address, and phone number should be written, or whether it's been decided ad hoc each time a branch opened.",
    ],
    fixBranches: [
      {
        condition: "If there's no agreed format yet",
        action: "write one now — exact business name formatting, address structure, phone number format — a single source of truth every future branch copies from.",
      },
      {
        condition: "If existing branches already have inconsistent formatting",
        action: "standardise them to match the agreed format, prioritising your highest-traffic listings first.",
      },
    ],
    cadence: "Set once, referenced every time a branch opens.",
    cadenceBadge: "Set once, referenced per branch",
    doneWithYou: "we help you agree and document a single format before you need it for the next branch.",
    doneForYou: "we maintain the standard format and apply it directly across every branch as your network grows.",
  },
  {
    slug: "build-gbp-setup-checklist",
    category: "Before You Open The Doors",
    categoryIndex: 1,
    itemIndex: 4,
    title: "Building A Repeatable Google Business Profile Setup Checklist",
    whatIsIt:
      "Turning your Google Business Profile setup process into a step-by-step checklist the first time you do it properly, so opening branch two, ten, or fifty is a matter of following steps, not remembering what you did last time.",
    whyCustomer:
      "A newly opened branch with a fully set-up, verified, complete profile looks as established as your original office from day one — a half-finished profile, done from memory under time pressure, looks exactly like what it is.",
    whySearchEngine:
      "Google Business Profile completeness and verification are confirmed local ranking inputs. A written checklist doesn't change what Google measures — it just makes sure nothing gets missed under the time pressure of an actual branch opening.",
    whySearchEngineBadge: "Foundation — turns a ranking requirement into a repeatable process",
    diagnoseSteps: [
      "Check whether your Google Business Profile setup process currently exists as a written checklist, or lives only in one person's memory.",
      "If you have more than one branch, spot-check two profiles against each other for completeness — categories, hours, photos, description.",
    ],
    diagnoseLink: { label: "Google Business Profile", href: "https://business.google.com" },
    fixBranches: [
      {
        condition: "If there's no written checklist yet",
        action: "write one directly from your best-completed branch's profile — every field filled in, every step taken, turned into a list someone else could follow without you.",
      },
    ],
    cadence: "Set once, used every time a branch opens — worth a light review yearly in case Google adds new profile fields worth including.",
    cadenceBadge: "Set once, reviewed yearly",
    doneWithYou: "we help you turn your best branch's setup into a checklist anyone on your team could follow.",
    doneForYou: "we set up every branch's Google Business Profile to the same standard directly, so no branch ever launches half-finished.",
  },
  {
    slug: "claim-every-directory-day-one",
    category: "Launch Day Consistency",
    categoryIndex: 2,
    itemIndex: 5,
    title: "Claiming Every Directory On Day One, Not Eventually",
    whatIsIt:
      "Claiming Google, Bing, Apple, and every other directory that matters for a new branch on the same day it launches — not “eventually,” which for most growing businesses quietly becomes never.",
    whyCustomer:
      "A brand-new branch's earliest customers are searching for it before it has any track record at all — an unclaimed or thin listing right at that moment is the worst possible first impression, at the exact time a strong one matters most.",
    whySearchEngine:
      "An unclaimed profile can't be optimised, can't be replied to, and often shows incomplete or wrong information pulled from elsewhere — every day it stays unclaimed is a day a new branch is invisible on a platform it should already be winning on.",
    whySearchEngineBadge: "Direct — an unclaimed listing can't rank or be trusted",
    diagnoseSteps: [
      "For your most recently opened branch, check exactly how many days passed between opening and each directory (Google, Bing, Apple) being claimed.",
      "If any took longer than a week, note why — a process gap, or genuinely just being busy with the physical opening.",
    ],
    fixBranches: [
      {
        condition: "If directory claims currently happen “when there's time”",
        action: "move it to before the physical opening, using your GBP setup checklist from the previous lesson — the directory claim doesn't need to wait for the doors to open.",
      },
    ],
    cadence: "Applied every time a branch opens — this is a launch-day task, not a recurring one, though it needs to happen every single time without exception.",
    cadenceBadge: "Every branch, launch day",
    doneWithYou: "we help you build claiming every directory into your standard opening-day process.",
    doneForYou: "we claim every directory for every new branch as part of onboarding, before the doors even open.",
  },
  {
    slug: "trust-signals-before-first-review",
    category: "Launch Day Consistency",
    categoryIndex: 2,
    itemIndex: 6,
    title: "Getting Trust Signals Live Before The First Review Lands",
    whatIsIt:
      "Making sure a new branch's schema markup and AI trust signals are live and verified before its first genuine review arrives — so that earliest, most vulnerable review lands on a credible, structured presence, not an empty shell.",
    analogy: [
      {
        label: "The empty shopfront",
        text: "A five-star first review on an otherwise blank profile reads as unverified good luck. The same review on a profile that already looks established reads as confirmation of something already credible.",
      },
    ],
    whyCustomer:
      "Someone reading a new branch's very first review is deciding whether to trust a business with almost no track record yet — a fully set-up, verified profile around that review does real work a bare listing can't.",
    whySearchEngine:
      "The schema and trust signals themselves are the same ones covered in the SEO and GEO courses — the only thing that changes here is sequencing: getting them live before, not after, the first review, so nothing about the branch's earliest public moment is left half-built.",
    whySearchEngineBadge: "Discipline — a sequencing rule, not a new technical requirement",
    diagnoseSteps: [
      "For your most recent branch opening, check the dates: when was schema live and verified, and when did the first review arrive? Was the order right?",
    ],
    fixBranches: [
      {
        condition: "If schema and trust signals typically go live after reviews start arriving",
        action: "move the technical setup earlier in your launch checklist, so it's confirmed live before you actively start asking early customers for reviews.",
      },
    ],
    cadence: "Applied every time a branch opens, as part of the same launch checklist as claiming directories.",
    cadenceBadge: "Every branch, launch day",
    doneWithYou: "we help you sequence your launch checklist so trust signals go live before the first review request goes out.",
    doneForYou: "we implement schema and trust signals directly as part of every branch's launch, before any review request is sent.",
  },
  {
    slug: "avoid-duplicate-thin-content",
    category: "Launch Day Consistency",
    categoryIndex: 2,
    itemIndex: 7,
    title: "Avoiding Duplicate Or Thin Content Across Branch Pages",
    whatIsIt:
      "Making sure each branch page has genuinely distinct, locally specific content — not the same paragraph with the town name swapped in, which search engines increasingly recognise and discount rather than reward.",
    whyCustomer:
      "A buyer comparing your branch page to a genuinely local competitor's notices immediately if yours reads like a template with the name changed — it undercuts exactly the local credibility a branch page is meant to build.",
    whySearchEngine:
      "Search engines actively identify near-duplicate content across a site's own pages and can suppress rather than rank all of them, since none is clearly the authoritative version — a fast template makes launch easy, but the words inside it still need to be genuinely local.",
    whySearchEngineBadge: "Direct — near-duplicate content can suppress ranking across every affected page",
    diagnoseSteps: [
      "Compare the actual body text of two branch pages side by side — how much is identical beyond the town name and contact details?",
    ],
    fixBranches: [
      {
        condition: "If branch pages are currently near-identical beyond the swapped details",
        action: "rewrite each one with genuinely local specifics — the actual areas covered, local market notes, nearby landmarks or transport links — not a generic paragraph repeated everywhere.",
      },
    ],
    fixShortcut: "Ask ChatGPT or Claude to draft locally specific content per branch from a few genuine local facts you provide — far faster than writing each from a blank page, as long as you check the facts before publishing.",
    fixShortcutLinks: [
      { label: "ChatGPT", href: "https://chatgpt.com" },
      { label: "Claude", href: "https://claude.ai" },
    ],
    cadence: "Written once per branch, at launch — worth a light content refresh yearly to keep local details current.",
    cadenceBadge: "Set once per branch, refreshed yearly",
    doneWithYou: "we help you write genuinely distinct content for each branch from local specifics you provide.",
    doneForYou: "we write and maintain distinct, locally specific content for every branch page directly.",
  },
  {
    slug: "monitor-nap-consistency-network-wide",
    category: "Keeping Every Branch In Sync",
    categoryIndex: 3,
    itemIndex: 8,
    title: "Monitoring NAP Consistency Across The Whole Network",
    whatIsIt:
      "Checking that every branch's name, address, and phone number still match across every directory — not just at head office, but branch by branch, since a detail can drift out of sync at any single location without anyone else noticing.",
    whyCustomerStat: { value: "20%", label: "listing inconsistency is enough to put a fifth of your branches working against the rest" },
    whyCustomer:
      "A business with 30 locations and just 20% inconsistency in its listing data has 6 branches actively working against the other 24 at every directory where the details don't match — each one a small, avoidable source of confusion for someone trying to find or trust that specific branch.",
    whySearchEngine:
      "NAP consistency is a direct local ranking input at every individual branch, not just at the group level — one branch's drifted listing doesn't just weaken that branch, it undermines the pattern of consistency search engines use to trust the whole network.",
    whySearchEngineBadge: "Direct — measured branch by branch, not just at group level",
    diagnoseSteps: [
      "Pick three branches and check their Google, Bing, and Apple listings against your agreed data format from earlier in this course.",
      "Note any mismatches, however small — an abbreviated street name, an old phone number, a slightly different business name format.",
    ],
    fixBranches: [
      {
        condition: "If any mismatches turn up",
        action: "correct them directly at the source directory, and note which branch and platform it was on, so you can spot whether it's a one-off or a pattern.",
      },
    ],
    cadence: "Monthly — checking a rotating sample of branches each month is more sustainable than trying to audit the entire network every time.",
    cadenceBadge: "Monthly, rotating sample",
    doneWithYou: "we help you set up a rotating monthly check across your branches.",
    doneForYou: "we monitor every branch, every platform, continuously — checking new locations as they open and re-checking existing ones as details change.",
  },
  {
    slug: "catch-listing-drift-before-it-compounds",
    category: "Keeping Every Branch In Sync",
    categoryIndex: 3,
    itemIndex: 9,
    title: "Catching Listing Drift Before It Compounds",
    whatIsIt:
      "Treating listing drift as something to catch early and often, rather than something to fix in one large clean-up once it's already become a visible problem across multiple branches.",
    whyCustomerStat: { value: "2×", label: "the customer engagement multi-location brands see with consistent listing data" },
    whyCustomer:
      "Multi-location brands with consistent listing data see up to twice the customer engagement of those without — the reward for staying on top of drift isn't just avoiding a problem, it's a genuinely measurable difference in how much customers actually engage.",
    whySearchEngine:
      "Drift compounds because it's rarely caught at the moment it happens — a phone number changes at one branch, a directory auto-updates incorrectly, and neither gets noticed until the next full audit, by which point several small issues have stacked up together.",
    whySearchEngineBadge: "Indirect — protects the direct NAP consistency signal from quietly eroding",
    diagnoseSteps: [
      "Ask honestly: is drift currently caught as it happens, or only discovered during an occasional full review?",
    ],
    fixBranches: [
      {
        condition: "If drift is currently only caught during infrequent full reviews",
        action: "move to the rotating monthly sample from the previous lesson — smaller, more frequent checks catch drift while it's still a single issue, not a backlog.",
      },
    ],
    cadence: "Ongoing, as part of the same rotating monthly check — this lesson is really about treating that habit seriously, not adding a separate task.",
    cadenceBadge: "Ongoing, monthly",
    doneWithYou: "we help you build the habit of catching drift early rather than in occasional large clean-ups.",
    doneForYou: "we catch and correct drift continuously, so it never has the chance to compound into a larger, visible problem.",
  },
  {
    slug: "track-new-platforms-across-network",
    category: "Keeping Every Branch In Sync",
    categoryIndex: 3,
    itemIndex: 10,
    title: "Tracking New Platforms As They Emerge, Across Every Branch",
    whatIsIt:
      "Making sure a newly relevant platform or directory gets claimed for every branch, not just for head office or whichever location happened to notice it first.",
    analogy: [
      {
        label: "The uneven rollout",
        text: "A new platform claimed at head office and three branches, but forgotten at branch twelve, isn't a small gap — it's the exact inconsistency this whole course exists to prevent, just arriving from a direction nobody was watching.",
      },
    ],
    whyCustomer:
      "Customer habits shift toward platforms that didn't matter a year ago — a presence gap that didn't exist last year can quietly open at one branch, even after you've closed it everywhere else, and that branch's customers never know the option existed.",
    whySearchEngine:
      "A new platform's ranking or recommendation logic doesn't care how many other branches you've claimed it for — each branch's presence there is evaluated on its own, so a gap at one location is a genuine, separate loss, not a rounding error against the group total.",
    whySearchEngineBadge: "Direct — evaluated per branch, not averaged across the network",
    diagnoseSteps: [
      "List any platform or directory you've claimed in the last year that wasn't part of your original launch checklist.",
      "Check how many of your existing branches actually have it claimed versus how many should.",
    ],
    fixBranches: [
      {
        condition: "If a newer platform is inconsistently claimed across branches",
        action: "close the gap for every branch, then add the platform to your standard launch checklist so future branches never fall behind on it.",
      },
    ],
    cadence: "Reviewed quarterly — new platforms don't emerge constantly, but a quarterly check catches one before too many branches fall behind on it.",
    cadenceBadge: "Quarterly",
    doneWithYou: "we help you audit which branches are behind on a newer platform and close the gap.",
    doneForYou: "we continually claim and set up new presence as it becomes relevant, consistently across every branch, not just the ones that happen to notice first.",
  },
  {
    slug: "separate-branch-and-group-reporting",
    category: "Reporting & Accountability Across Branches",
    categoryIndex: 4,
    itemIndex: 11,
    title: "Separating Branch-Level Reporting From Group-Level Reporting",
    whatIsIt:
      "Building two different views from the same underlying data — a short, specific report for each branch, and a group-level report comparing every branch side by side — because a regional director and a single office manager need genuinely different things from the same information.",
    whyCustomer:
      "Not directly customer-facing — this is entirely about whether the people running the business can actually use what's being tracked, rather than everyone getting the same undifferentiated data dump.",
    whySearchEngine:
      "Not a ranking factor — this is what makes everything else in this course actionable at scale. A single office manager scanning fifty branches' worth of data to find their own numbers won't do it consistently; a short, branch-specific report will get read.",
    whySearchEngineBadge: "Safeguard — protects whether the tracking actually gets used",
    diagnoseSteps: [
      "Check what reporting currently exists: one single report sent to everyone, or genuinely separate branch-level and group-level views?",
    ],
    fixBranches: [
      {
        condition: "If there's currently just one undifferentiated report",
        action: "split it into two formats from the same data — a short branch-specific version for each location, and a comparison view for whoever's overseeing the whole network.",
      },
    ],
    cadence: "Set up once as a format, then produced on whatever reporting cadence already suits your business — monthly is typical.",
    cadenceBadge: "Set up once, produced monthly",
    doneWithYou: "we help you build both report formats from your existing data.",
    doneForYou: "we produce branch-level and group-level reporting for you every month as standard.",
  },
  {
    slug: "decide-whose-name-is-on-the-report",
    category: "Reporting & Accountability Across Branches",
    categoryIndex: 4,
    itemIndex: 12,
    title: "Deciding Whose Name Is On The Report Before A Franchisee Asks",
    whatIsIt:
      "For franchise or multi-owner groups specifically: deciding in advance whether reports and dashboards carry a third-party vendor's branding or your own, since a report stamped with an outside name can look like an outside tool head office doesn't own, not something built for the business.",
    whyCustomer:
      "Not customer-facing at all — this is about how the work reads to franchisees, regional managers, or co-owners inside the business, and whether it reinforces your own brand or a vendor's.",
    whySearchEngine:
      "Not a ranking factor — purely a presentation and ownership question, worth deciding once, deliberately, rather than leaving it as whatever a tool's default happens to be.",
    whySearchEngineBadge: "Safeguard — protects how the work is perceived inside your own business",
    diagnoseSteps: [
      "Check what branding currently appears on any reports or dashboards this work produces — yours, a vendor's, or a mix depending on the tool.",
    ],
    fixBranches: [
      {
        condition: "If reporting currently carries outside branding you'd rather it didn't",
        action: "raise it as a deliberate decision rather than an afterthought — for franchise groups especially, this is worth settling before it becomes a recurring question from franchisees.",
      },
    ],
    cadence: "Decided once — not something that needs revisiting unless your reporting tools themselves change.",
    cadenceBadge: "Decided once",
    doneWithYou: "we help you think through whether white-labelling matters for your specific structure.",
    doneForYou: "every report and dashboard can carry your own branding instead of ours — your logo, your name, your colours, with no change to the underlying work.",
  },
  {
    slug: "keep-brand-presentation-consistent",
    category: "Protecting What You've Built",
    categoryIndex: 5,
    itemIndex: 13,
    title: "Keeping Brand Presentation Consistent Across Every Branch Page",
    whatIsIt:
      "Making sure logo usage, tone of voice, and visual presentation stay consistent across every branch page — not left to drift as whoever happens to set up each new branch makes their own small calls.",
    whyCustomer:
      "A customer who's dealt with one branch and then researches another should recognise it as unmistakably the same business — small, accumulated inconsistencies in tone or presentation quietly undercut the trust your main brand has already built.",
    whySearchEngine:
      "Not a direct ranking factor, but brand consistency is part of what search engines and AI tools use to recognise a business as a single coherent entity across multiple locations, rather than a loose collection of similar but separate pages.",
    whySearchEngineBadge: "Indirect — supports how confidently platforms link your branches together",
    diagnoseSteps: [
      "Compare two branch pages side by side for logo usage, tone, and general presentation — do they read as unmistakably the same business, or noticeably different?",
    ],
    fixBranches: [
      {
        condition: "If presentation has drifted between branches",
        action: "bring every page back in line with a single, documented brand standard — the same source-of-truth approach as your schema and listing data templates.",
      },
    ],
    cadence: "Reviewed twice a year, or whenever a new branch launches — presentation drift is gradual, so it's easy to miss without a deliberate check.",
    cadenceBadge: "Twice a year",
    doneWithYou: "we help you document a brand standard every future branch page can be checked against.",
    doneForYou: "we build and maintain every branch page to the same brand standard directly.",
  },
  {
    slug: "recognise-nothing-is-automatically-exclusive",
    category: "Protecting What You've Built",
    categoryIndex: 5,
    itemIndex: 14,
    title: "Recognising That Nothing Here Is Automatically Exclusive To You",
    whatIsIt:
      "Being honest that a strong, well-replicated multi-branch setup isn't naturally protected from a competitor building the same thing for their own branches — the advantage compounds mainly through who starts first and stays consistent, not through anything inherently unrepeatable.",
    whyCustomer:
      "Not directly customer-facing — this is a strategic honesty check, not something a customer ever sees you doing.",
    whySearchEngine:
      "Nothing in this course is a secret technique — schema, consistent NAP data, and locally specific content are all things a competitor's agency could tell them to do too. The genuine advantage is time: the business that's been doing this properly for two years has a head start that's hard to close quickly, not a method nobody else can access.",
    whySearchEngineBadge: "Honest — the advantage is time and consistency, not exclusivity",
    diagnoseSteps: [
      "Check whether any of your named competitors are already multi-branch and, if so, how consistent their own listings and pages look using the same checks from earlier in this course.",
    ],
    fixBranches: [
      {
        condition: "If a competitor is already replicating a similar setup",
        action: "treat consistency and speed as your actual edge — every month this course's habits are kept up is a month further ahead, regardless of whether the underlying method is a secret.",
      },
    ],
    cadence: "Worth revisiting whenever you check your named competitors as part of the Market & Competitive Intelligence course.",
    cadenceBadge: "Alongside your competitor checks",
    doneWithYou: "we help you think honestly about where your actual advantage comes from as you grow.",
    doneForYou: "as part of our paid service specifically, we work with only one agency per local area — the one part of this course's advantage we can make structurally exclusive, covered in full on our Guarantees page.",
  },
  {
    slug: "time-and-outside-your-control",
    category: "The Honest Picture",
    categoryIndex: 6,
    itemIndex: 15,
    title: "Time, And What's Outside Your Control",
    whatIsIt:
      "Two categories of scaling factor that don't respond to effort at all — one because it simply takes time to build, the other because it was never yours to control in the first place.",
    analogy: [
      {
        label: "Takes time, can't be rushed",
        text: "How long your network has been operating consistently, and how much accumulated trust your main domain has built — both genuine advantages, but ones that only build through elapsed time and consistent effort, not a faster rollout alone.",
      },
      {
        label: "Completely outside your control",
        text: "How search engines choose to treat multi-location businesses this year, a competitor's decision to invest heavily in their own replication, and the pace at which your specific market actually supports new branches opening at all.",
      },
    ],
    whyCustomer:
      "An established, consistent multi-branch presence simply reads as more credible than a newer or patchier one, even to a customer who's never thought about why — and none of the right-hand factors are things a customer ever weighs directly either.",
    whySearchEngine:
      "Accumulated domain trust and consistent history are genuine signals, but ones no amount of effort this month can shortcut — there's no fix beyond building it properly now, since every month delayed is a month a patient competitor's own network pulls further ahead. Platform treatment of multi-location businesses, a competitor's investment, and your actual market's capacity are real and genuinely affect you, but none of them are things this course can hand you control over. The same is true for whoever's ahead of you right now.",
    whySearchEngineBadge: "Genuine factors — just not ones effort can shortcut",
  },
  {
    slug: "course-complete",
    category: "Course Complete",
    categoryIndex: 7,
    itemIndex: 16,
    title: "You've Reached The End Of This Course",
    whatIsIt:
      "Nothing in this course requires special skill — a template built once, a checklist followed every time, a monthly check kept up across every branch. What actually separates the networks that scale cleanly from the ones that don't isn't knowing more, it's applying the same discipline to branch fifty that you applied to branch one.",
    closingSections: [
      {
        heading: "",
        paragraphs: [
          "I can't guarantee every branch will rank as fast as your first. Nobody honestly can — some of it depends on your specific market, your competitors, and factors genuinely outside anyone's control. But a consistent, templated approach — the same foundation, the same launch checklist, the same ongoing checks — moves the numbers that are within your control further than starting from scratch each time ever will.",
          "Consistency is the single most important thing in this entire course. A template followed properly at branch two and abandoned by branch six isn't really a template — it's a habit that slipped. Every branch deserves the same discipline as the first, not because it's owed, but because that's precisely what stops the whole network's average quietly dragging downward as it grows.",
          "The longer you keep this up, the more it compounds. A network that's stayed genuinely consistent for years doesn't just look tidier — it becomes one of the hardest things for a competitor to catch up on, precisely because catching up means redoing years of discipline, not just copying a template.",
        ],
      },
      {
        heading: "A Word About Our Services",
        paragraphs: [
          "Now that you've reached the end, I want to be upfront about what we do here at Reyse.",
          "If you've read through this and thought “yes, this is exactly what I need” — but it feels like a lot to keep on top of alongside actually running and growing the business — that's exactly what our Scale service is for. You'll have noticed, on every item in this course, exactly what each service level covers. If something stood out, feel free to book a call — just click “Get Started” in the top right.",
          "One more thing I'd genuinely appreciate: if you got any value at all from this course, please leave us a review on Google. It helps more than you'd think — it's how this reaches the next person who needs it.",
          "As always, thank you for the most valuable thing you gave today — your attention. And if you found this useful, take a look at our other guides in the Resources section.",
        ],
        cta: { label: "See all free resources", href: "/resources" },
      },
    ],
  },
];
