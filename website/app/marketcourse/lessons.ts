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
    slug: "identify-your-real-competitors",
    category: "Know Who You're Actually Competing With",
    categoryIndex: 1,
    itemIndex: 1,
    title: "Identifying Your Real Competitive Set",
    whatIsIt:
      "Working out exactly which businesses you're actually losing enquiries to — not just the biggest name on the high street, but whoever's actually winning the searches and AI answers you're not.",
    analogy: [
      {
        label: "The wrong rival",
        text: "Watching the agency with the biggest office is like a sprinter fixated on the runner in the next lane while the race is actually being won by someone three lanes over they never once looked at.",
      },
    ],
    whyCustomer:
      "A buyer or seller doesn't care who you've historically considered your rival — they just pick whoever shows up and looks credible when they search. Your real competition is defined by search results and AI answers, not by who's been on the high street the longest.",
    whySearchEngine:
      "Not a ranking factor itself — this is the groundwork every other lesson in this course depends on. Benchmark against the wrong competitor and every comparison after this one measures against the wrong bar.",
    whySearchEngineBadge: "Prerequisite — everything else in this course depends on getting this right",
    diagnoseSteps: [
      "Search the exact terms a real buyer or seller would use — \"estate agent in [your town]\", \"best letting agent near me\" — and write down who actually appears, not who you assumed would.",
      "Ask ChatGPT, Perplexity, or Google's AI Overview a similarly realistic question and note who gets named.",
    ],
    fixBranches: [
      {
        condition: "If the names that show up aren't who you expected",
        action:
          "update your working list of competitors to match reality — the businesses actually appearing are the ones actually taking the enquiries you're not.",
      },
      {
        condition: "If you only have one obvious rival in mind",
        action:
          "widen the list to 3–4 real competitors. A single rival makes for a weak benchmark, since one business's quiet month can look like your own win.",
      },
    ],
    cadence:
      "Revisit twice a year — who's genuinely competing with you shifts as agencies open, close, or change focus, more often than most agents assume.",
    cadenceBadge: "Twice a year",
    doneWithYou: "we help you identify your genuine competitive set from real search and AI results, not assumption.",
    doneForYou: "we track and refresh your competitive set every month as part of ongoing reporting, so the comparison never goes stale.",
  },
  {
    slug: "track-every-channel",
    category: "Know Who You're Actually Competing With",
    categoryIndex: 1,
    itemIndex: 2,
    title: "Tracking Competitors Across Every Channel, Not Just Google",
    whatIsIt:
      "Following your competitors everywhere a buyer or seller might actually find them — Bing, Apple Maps, AI platforms, review sites — not just Google, which is where most agents stop looking.",
    whyCustomer:
      "Someone on an iPhone uses Apple Maps or Siri by default; someone on a work laptop is often defaulted to Bing; a growing share now just ask ChatGPT. If a competitor is winning ground somewhere you're not watching, you won't notice until it's already cost you enquiries.",
    whySearchEngine:
      "Not a ranking factor itself — but each of these channels runs its own independent ranking logic, covered channel by channel in the SEO and GEO guides. Watch only Google and you're only seeing where you stand on one of several battlefields.",
    whySearchEngineBadge: "Prerequisite — Google is one channel of several worth watching",
    diagnoseSteps: [
      "Search your top competitor's name, or \"estate agent [your town]\", on Bing and on Apple Maps, separately from Google.",
      "Ask two or three different AI tools the same realistic question and compare who each one recommends.",
    ],
    fixBranches: [
      {
        condition: "If you've genuinely never checked beyond Google",
        action:
          "start a simple running note — one line per channel, per competitor, updated whenever you check. Even a basic spreadsheet beats relying on memory.",
      },
      {
        condition: "If a channel shows a competitor clearly ahead",
        action: "that's your priority lever — see the SEO and GEO courses for the specific fix on that channel.",
        links: [
          { label: "The SEO course", href: "/seocourse" },
          { label: "The GEO guide", href: "/geocourse" },
        ],
      },
    ],
    cadence:
      "Monthly — channels shift slower than Google itself, but a quarterly gap is long enough for a competitor to quietly pull ahead unnoticed.",
    cadenceBadge: "Monthly",
    doneWithYou: "we help you set up a simple cross-channel tracking sheet you can keep updated yourself.",
    doneForYou: "we track your visibility against named competitors across Google, Bing, Apple, and AI platforms every month, in one report.",
  },
  {
    slug: "compare-google-rankings",
    category: "Benchmarking Search & AI Visibility",
    categoryIndex: 2,
    itemIndex: 3,
    title: "Comparing Your Google Rankings For The Searches That Matter",
    whatIsIt:
      "Checking, side by side, exactly where you and your named competitors rank for the specific local searches a genuine buyer or seller would actually type.",
    whyCustomer:
      "Buyers rarely scroll past the first few results. If a competitor consistently outranks you for the terms that matter, they get the click you don't even know you lost.",
    whySearchEngine:
      "Ranking position for these exact terms is what the SEO course is built to move — this lesson is the diagnostic: knowing precisely where you stand against a named rival, not just in the abstract.",
    whySearchEngineBadge: "Diagnostic — points at exactly which SEO course lesson to prioritise",
    diagnoseSteps: [
      "Search in a private or incognito window, so your own history doesn't skew results, for the 4–5 terms a real customer would actually use.",
      "Note your position and your named competitor's position for each, and how it's changed since you last checked.",
    ],
    fixBranches: [
      {
        condition: "If a competitor consistently outranks you for a specific term",
        action: "make that term your priority — work through the relevant fix in the SEO course rather than following it in a fixed order.",
        links: [{ label: "The SEO course", href: "/seocourse" }],
      },
      {
        condition: "If you're not sure which terms actually matter",
        action: "check Google Search Console's Performance report for the terms you already get impressions for, and start there.",
        links: [{ label: "Search Console", href: "https://search.google.com/search-console" }],
      },
    ],
    cadence: "Monthly — rankings can move meaningfully within weeks, and a monthly check catches a slide before it compounds.",
    cadenceBadge: "Monthly",
    doneWithYou: "we help you set up a simple tracking sheet for the terms that actually matter to your business.",
    doneForYou: "we track your ranking against named competitors for every relevant term, every month, as part of your report.",
  },
  {
    slug: "compare-bing-apple-visibility",
    category: "Benchmarking Search & AI Visibility",
    categoryIndex: 2,
    itemIndex: 4,
    title: "Comparing Your Bing And Apple Visibility Against Theirs",
    whatIsIt:
      "The same head-to-head comparison as Google, run separately on Bing and Apple Maps — two platforms with real UK search share that most agents never check at all, let alone against a named rival.",
    whyCustomer:
      "A meaningful slice of buyers and tenants never touch Google — they search entirely inside Bing or Apple Maps. If a competitor has claimed and filled out their presence there and you haven't, that entire audience only ever sees them.",
    whySearchEngine:
      "Bing Places and Apple Business Connect each run their own local ranking logic, independent of Google's — a gap here is a genuine, separate ranking input you'd otherwise never know you were losing.",
    whySearchEngineBadge: "Diagnostic — a gap here is invisible from Google alone",
    diagnoseSteps: [
      "Search your business and your named competitor's on Bing, and note who's claimed, current, and shows reviews.",
      "Do the same on Apple Maps or by asking Siri — check who's actually verified and who isn't.",
    ],
    diagnoseLink: { label: "Bing Places", href: "https://www.bingplaces.com" },
    fixBranches: [
      {
        condition: "If a competitor has claimed Bing or Apple and you haven't",
        action: "claim yours — both are free, and this is one of the fastest gaps to close since most agents genuinely haven't done this yet.",
        links: [{ label: "Bing Places", href: "https://www.bingplaces.com" }],
      },
      {
        condition: "If both are claimed but a competitor's looks more current",
        action: "bring yours up to date — the details, the photos, and the response to any reviews sitting there.",
      },
    ],
    cadence: "Quarterly is enough — these platforms move slower than Google, but a competitor claiming ground here is easy to miss without checking.",
    cadenceBadge: "Quarterly",
    doneWithYou: "we help you check and claim what's missing across Bing and Apple.",
    doneForYou: "we monitor and maintain your presence on both, benchmarked against named competitors, every month.",
  },
  {
    slug: "compare-ai-platform-mentions",
    category: "Benchmarking Search & AI Visibility",
    categoryIndex: 2,
    itemIndex: 5,
    title: "Comparing Who Gets Named When AI Platforms Are Asked",
    whatIsIt:
      "Running the same realistic question past ChatGPT, Perplexity, and Google's AI Overviews, and recording exactly who gets recommended — you, your competitor, both, or neither.",
    whyCustomer:
      "Someone who asks an AI tool who to use never sees a ranked list — they see one confident-sounding answer. If that answer names your competitor and not you, you don't lose a position on a page, you lose the entire recommendation.",
    whySearchEngine:
      "This is the direct AI-visibility comparison the GEO guide is built to move — running it against a named competitor turns a vague sense of \"we should probably be on AI\" into a specific, provable gap.",
    whySearchEngineBadge: "Diagnostic — points at exactly which GEO guide lesson to prioritise",
    diagnoseSteps: [
      "Write down 3–4 realistic questions a genuine buyer or seller would ask an AI tool about agents in your area.",
      "Ask each question to ChatGPT, Perplexity, and Google's AI Overview, and record exactly who's named in each answer.",
    ],
    fixBranches: [
      {
        condition: "If a named competitor consistently appears and you don't",
        action: "that's the clearest possible priority signal — start with the GEO guide's trust-signal and schema lessons rather than working through it in order.",
        links: [{ label: "The GEO guide", href: "/geocourse" }],
      },
      {
        condition: "If neither of you appears",
        action: "treat it as a genuine opportunity rather than a wash — being first to properly show up here, while competitors haven't started, is one of the clearest windows this course covers.",
      },
    ],
    cadence: "Monthly — AI platforms change how they answer more often and less predictably than Google's own rankings do.",
    cadenceBadge: "Monthly",
    doneWithYou: "we help you run this comparison properly and prioritise the GEO work that closes the gap fastest.",
    doneForYou: "we run this exact comparison every month as part of your report, so you always know exactly where AI visibility stands against a named rival.",
  },
  {
    slug: "benchmark-technical-trust-signals",
    category: "Benchmarking Search & AI Visibility",
    categoryIndex: 2,
    itemIndex: 6,
    title: "Benchmarking Technical Trust Signals, Not Just Rankings",
    whatIsIt:
      "Checking whether a competitor has implemented the technical groundwork — schema markup, AI crawler access, structured trust signals — that you haven't, even if their visible ranking looks similar to yours today.",
    analogy: [
      {
        label: "The iceberg",
        text: "Two agencies can look level on the visible ranking today while one has quietly built the technical foundation to pull ahead over the next six months, and the other hasn't started.",
      },
    ],
    whyCustomer:
      "Not directly customer-facing — this is a diagnostic habit, not something a customer ever sees you doing. It exists to tell you whether today's even ranking is stable or about to tip.",
    whySearchEngine:
      "Schema markup and AI trust signals are confirmed, direct inputs covered in depth in the SEO and GEO guides — checking whether a competitor already has them tells you whether you're behind on the foundation, not just the outcome.",
    whySearchEngineBadge: "Diagnostic — checks the foundation, not just the result",
    diagnoseMethods: [
      {
        condition: "Method 1 — Google's Rich Results Test",
        action: "run a competitor's site through it to see exactly what structured data they've implemented.",
        steps: [
          "Open Google's Rich Results Test and enter your competitor's homepage or a listing page.",
          "Note whether it detects Organization, LocalBusiness, or Review schema — then check your own site the same way.",
        ],
        links: [{ label: "Google Rich Results Test", href: "https://search.google.com/test/rich-results" }],
      },
      {
        condition: "Method 2 — Check crawler access directly",
        action: "see whether a competitor allows AI crawlers where you might not.",
        steps: [
          "Visit their site's /robots.txt directly in a browser.",
          "Check whether GPTBot, PerplexityBot, and similar AI crawlers are allowed or blocked, and compare that to your own.",
        ],
      },
    ],
    fixBranches: [
      {
        condition: "If a competitor has schema or crawler access you don't",
        action: "treat it as the priority fix — see the relevant lesson in the SEO or GEO course for exactly how to implement it.",
        links: [
          { label: "The SEO course", href: "/seocourse" },
          { label: "The GEO guide", href: "/geocourse" },
        ],
      },
    ],
    cadence: "Twice a year is enough — this foundation doesn't shift as often as rankings or reviews do.",
    cadenceBadge: "Twice a year",
    doneWithYou: "we help you check what a named competitor's already built and close the specific gap.",
    doneForYou: "we audit this against named competitors as part of your onboarding and ongoing reporting, so you always know where the foundation actually stands.",
  },
  {
    slug: "track-review-momentum",
    category: "Benchmarking Reputation & Activity",
    categoryIndex: 3,
    itemIndex: 7,
    title: "Tracking Review Count And Rating Momentum, Not Just Totals",
    whatIsIt:
      "Watching how fast a competitor's reviews are growing right now, not just how many they've accumulated over the years — momentum, not the all-time total.",
    analogy: [
      {
        label: "The stalled lead",
        text: "A competitor sitting on 200 reviews from three years ago and nothing since is coasting on old goodwill. One gaining 10 fresh reviews a month, even from a smaller base, has real momentum — and momentum is what actually shows up in a recency-weighted ranking.",
      },
    ],
    whyCustomer:
      "A buyer comparing two agencies with similar totals will trust the one with recent activity more — it reads as currently trustworthy, not just historically so.",
    whySearchEngine:
      "Review recency is a direct local ranking factor, covered fully in the Review Management course — a competitor gaining reviews faster than you can out-rank a larger, older total over time, even starting from behind.",
    whySearchEngineBadge: "Diagnostic — points at momentum, which the Review Management course is built to fix",
    diagnoseSteps: [
      "Open your named competitor's Google Business Profile and note their total review count and their most recent review date.",
      "Check back monthly and track how many new reviews they've picked up since last time — that's their real momentum, not their total.",
    ],
    fixBranches: [
      {
        condition: "If a competitor is gaining reviews noticeably faster than you",
        action: "that's a direct signal to tighten your own review request process — see the Review Management course for the specific fixes.",
        links: [{ label: "The Review Management course", href: "/reviewscourse" }],
      },
    ],
    cadence: "Monthly — momentum is only visible when you're checking regularly enough to see the trend, not just a single snapshot.",
    cadenceBadge: "Monthly",
    doneWithYou: "we help you set up a simple monthly momentum check against a named competitor.",
    doneForYou: "we track review count, rating, and momentum against named competitors every month, as part of the same report as your own reviews.",
  },
  {
    slug: "compare-profile-activity",
    category: "Benchmarking Reputation & Activity",
    categoryIndex: 3,
    itemIndex: 8,
    title: "Comparing Google Business Profile Posting Activity",
    whatIsIt:
      "Checking how often a competitor is actually posting updates, new listings, and photos to their Google Business Profile — a visible signal of an active business that most agents never think to check on someone else's profile.",
    whyCustomer:
      "A profile with recent posts and photos reads as an active, current business. A profile that hasn't posted in months, sitting next to a competitor's that updates weekly, reads as the quieter option — even if the actual service is identical.",
    whySearchEngine:
      "Profile activity is a signal Google's local algorithm weighs alongside reviews and completeness — a competitor posting consistently is doing something concrete you can measure and match.",
    whySearchEngineBadge: "Direct — profile activity is a measured local ranking input",
    diagnoseSteps: [
      "Open your named competitor's Google Business Profile and check the \"Updates\" or posts section for how recently, and how often, they've posted.",
      "Compare that frequency to your own — most agents have genuinely never looked at a competitor's profile this way.",
    ],
    fixBranches: [
      {
        condition: "If a competitor posts noticeably more often than you",
        action: "match or beat their cadence with your own regular updates — new listings, sold/let announcements, and local content all count.",
      },
    ],
    cadence: "Monthly is enough to spot a real gap without over-checking something that only moves gradually.",
    cadenceBadge: "Monthly",
    doneWithYou: "we help you build a simple, repeatable posting habit that keeps pace with what competitors are doing.",
    doneForYou: "our Profile Activity system posts on your behalf automatically, benchmarked against what active competitors are actually doing.",
  },
  {
    slug: "compare-response-rate-and-speed",
    category: "Benchmarking Reputation & Activity",
    categoryIndex: 3,
    itemIndex: 9,
    title: "Comparing Response Rate And Response Speed To Reviews",
    whatIsIt:
      "Checking not just whether a competitor replies to their reviews, but how many of them they reply to, and how quickly — both measurable, both directly comparable.",
    whyCustomer:
      "Only 54% of reviews get any response at all across businesses generally. A buyer scrolling both profiles side by side notices immediately which business actually engages with feedback and which one doesn't.",
    whyCustomerStat: { value: "54%", label: "of reviews get any response at all, across businesses generally" },
    whySearchEngine:
      "Response activity is a confirmed local ranking factor, independent of star rating — covered fully in the Review Management course. If a competitor is replying to everything and you're not, that's a specific, closeable gap.",
    whySearchEngineBadge: "Diagnostic — points at a specific, confirmed ranking factor",
    diagnoseSteps: [
      "Open a named competitor's last 15–20 reviews and count how many have a reply from the business.",
      "Note roughly how long replies took to arrive, where you can tell from the dates — same day, same week, or longer.",
    ],
    fixBranches: [
      {
        condition: "If a competitor's response rate or speed is ahead of yours",
        action: "that's the priority fix — see the Review Management course's response-rate and response-speed lessons for exactly how to close it.",
        links: [{ label: "The Review Management course", href: "/reviewscourse" }],
      },
    ],
    cadence: "Quarterly is enough — response habits don't shift as fast week to week as the reviews themselves arrive.",
    cadenceBadge: "Quarterly",
    doneWithYou: "we help you benchmark your response rate and speed against a named competitor and close the gap.",
    doneForYou: "we track this against named competitors every month, alongside your own response-rate reporting.",
  },
  {
    slug: "monitor-search-demand-shifts",
    category: "Catching Shifts Before They Hit You",
    categoryIndex: 4,
    itemIndex: 10,
    title: "Monitoring What Buyers And Sellers Are Actually Searching For",
    whatIsIt:
      "Watching how local search demand itself is changing — new phrases, new questions, new priorities — rather than assuming what worked last year still reflects what people are typing today.",
    whyCustomer:
      "What people search for shifts constantly and mostly invisibly to a business owner busy running the day-to-day — often weeks before a shift shows up as a change in enquiries.",
    whySearchEngine:
      "Search demand itself isn't a ranking factor — it's the moving target every ranking factor is aimed at. Catching a shift early means your SEO and GEO work is aimed at where demand is going, not where it used to be.",
    whySearchEngineBadge: "Signal — the earliest possible warning, before it reaches your enquiries",
    diagnoseMethods: [
      {
        condition: "Method 1 — Google Search Console",
        action: "see what you're already getting impressions for, and how that's shifting month to month.",
        steps: [
          "Open the Performance report and sort by impressions, not clicks.",
          "Compare this month's top queries to three months ago — anything new climbing the list is worth noting.",
        ],
        links: [{ label: "Search Console", href: "https://search.google.com/search-console" }],
      },
      {
        condition: "Method 2 — Google Trends",
        action: "check whether a phrase relevant to your business is genuinely rising or falling in your area.",
        steps: [
          "Search a relevant term (\"houses for sale [town]\", \"letting agent near me\") and filter to your region.",
          "Look for a genuine upward or downward trend, not normal week-to-week noise.",
        ],
        links: [{ label: "Google Trends", href: "https://trends.google.com" }],
      },
    ],
    fixBranches: [
      {
        condition: "If a new phrase or question is genuinely rising",
        action: "check whether your content already answers it — if not, that's a specific, timely content gap worth closing before competitors notice.",
      },
    ],
    cadence: "Monthly — frequent enough to catch a genuine shift while there's still time to act on it before it shows up in your enquiries.",
    cadenceBadge: "Monthly",
    doneWithYou: "we help you set up this check and spot what's genuinely shifting versus normal noise.",
    doneForYou: "we watch this every month and flag what's genuinely rising in relevance to your specific business and local market.",
  },
  {
    slug: "watch-ai-platform-shifts",
    category: "Catching Shifts Before They Hit You",
    categoryIndex: 4,
    itemIndex: 11,
    title: "Watching For AI Platforms Changing How They Answer",
    whatIsIt:
      "Re-running the same set of AI questions periodically and noting when the answer itself changes — a platform updating how it decides who to recommend, with no notice to anyone.",
    analogy: [
      {
        label: "The moving goalposts",
        text: "OpenAI, Google, and Perplexity can each shift how they decide who to recommend overnight. You can't stop the goalposts moving, but you can notice the moment they do, instead of finding out three months later from a quiet enquiry slump.",
      },
    ],
    whyCustomer:
      "Not directly customer-facing — this is a monitoring habit that protects everything the GEO guide already helped you build, rather than something a customer ever sees.",
    whySearchEngine:
      "This is the one thing genuinely outside anyone's control — see our Guarantees page for why we don't pretend otherwise. What's within your control is noticing the change fast enough to adapt, rather than being the last to find out.",
    whySearchEngineBadge: "Signal — outside your control, but not outside your awareness",
    diagnoseSteps: [
      "Keep the same fixed set of 3–4 realistic questions from earlier in this course, and re-ask them to ChatGPT, Perplexity, and Google AI Overviews.",
      "Compare the new answers to what you recorded last time — a different structure, different names, or a different tone is worth noting even if you're still named.",
    ],
    fixBranches: [
      {
        condition: "If your visibility has genuinely dropped since your last check",
        action: "revisit your GEO fundamentals — trust signals and schema can need re-verifying after a platform update, even if nothing on your own site changed.",
        links: [{ label: "The GEO guide", href: "/geocourse" }],
      },
    ],
    cadence: "Monthly, alongside your AI mentions comparison — the two checks pair naturally since they use the same questions.",
    cadenceBadge: "Monthly",
    doneWithYou: "we help you build the habit of re-testing consistently, so a platform shift is never a surprise.",
    doneForYou: "we monitor for exactly this every month and re-verify your GEO fundamentals whenever a platform's behaviour genuinely shifts.",
  },
  {
    slug: "set-up-competitor-alerts",
    category: "Catching Shifts Before They Hit You",
    categoryIndex: 4,
    itemIndex: 12,
    title: "Setting Alerts On Competitor Names And Area-Plus-Agent Searches",
    whatIsIt:
      "A free, passive way to catch a competitor being mentioned somewhere new — a press feature, a new listing, a partnership — without having to actively go looking for it yourself every week.",
    whyCustomer:
      "Not directly customer-facing — this is a low-effort net that catches things you'd otherwise only stumble on by chance, freeing up the active checks in this course for what actually needs judgement.",
    whySearchEngine:
      "Not a ranking factor — a passive prerequisite that makes the rest of this course's monitoring cheaper to keep up, since it flags anything genuinely new without you having to go actively searching for it.",
    whySearchEngineBadge: "Prerequisite — a passive net, not an active check",
    diagnoseSteps: [
      "Check whether you already have any alerts set up for your competitors' names or your own local market terms.",
    ],
    fixBranches: [
      {
        condition: "If you don't currently have any alerts running",
        action: "set up a free Google Alert for each named competitor, plus one for \"[your area] estate agent\" or similar, and let it run in the background.",
        links: [{ label: "Google Alerts", href: "https://www.google.com/alerts" }],
      },
    ],
    cadence: "Set once — this runs passively in the background; just glance at what it's caught whenever it arrives, rather than checking on a schedule.",
    cadenceBadge: "Set once, passive after that",
    doneWithYou: "we help you set up the right alerts so nothing genuinely new slips past unnoticed.",
    doneForYou: "we run this kind of monitoring continuously as part of your reporting, so nothing relevant is ever missed.",
  },
  {
    slug: "watch-local-market-signals",
    category: "Catching Shifts Before They Hit You",
    categoryIndex: 4,
    itemIndex: 13,
    title: "Watching The Local Market Signals That Move Demand",
    whatIsIt:
      "Keeping half an eye on the property-specific events that shift demand in your actual area — a new development breaking ground, a stamp duty or interest rate change, a portal changing how it ranks listings — not just generic search behaviour.",
    whyCustomer:
      "A new development, a rate change, or a shift in what a portal rewards can move real buyer and seller behaviour weeks before it shows up as a change in your own enquiries — noticing early is the difference between reacting and anticipating.",
    whySearchEngine:
      "Not a ranking factor — this is market context that shapes which of your other levers actually matters right now. A new local development, for instance, is exactly the kind of moment to have fresh, specific content ready before a competitor does.",
    whySearchEngineBadge: "Signal — context that decides which lever matters most right now",
    diagnoseSteps: [
      "Note any property-specific news relevant to your area from the last month — planning applications, rate announcements, portal changes you've heard about.",
      "Ask yourself honestly whether you've actually acted on the last genuine shift you noticed, or just registered it and moved on.",
    ],
    fixBranches: [
      {
        condition: "If a relevant local shift has happened and you haven't responded",
        action: "turn it into a specific, timely piece of content or outreach before a competitor gets there first — timeliness is most of the value here.",
      },
    ],
    cadence: "Ongoing awareness rather than a scheduled check — but worth a deliberate monthly pause to ask what's actually changed locally.",
    cadenceBadge: "Ongoing, reviewed monthly",
    doneWithYou: "we help you turn a genuine local shift into timely, specific content while it still matters.",
    doneForYou: "we watch for this as part of your monthly reporting and flag what's genuinely worth acting on for your specific area.",
  },
  {
    slug: "build-a-monthly-scorecard",
    category: "Turning Intelligence Into Action",
    categoryIndex: 5,
    itemIndex: 14,
    title: "Building One Simple Monthly Scorecard",
    whatIsIt:
      "Pulling everything you've been tracking across this course into a single page, once a month — not a dozen separate half-remembered checks living in different tabs and notebooks.",
    analogy: [
      {
        label: "The scattered notes",
        text: "Tracking across five different tabs and a notebook means nothing actually gets compared to anything else. A single page, updated the same way each month, is what turns scattered checking into an actual pattern you can see.",
      },
    ],
    whyCustomer:
      "Not directly customer-facing — this is entirely about making the previous lessons in this course usable rather than something checked once and forgotten.",
    whySearchEngine:
      "Not a ranking factor — this is what makes every other lesson in this course actually actionable instead of a one-off exercise that never gets repeated.",
    whySearchEngineBadge: "Prerequisite — turns individual checks into an actual pattern",
    diagnoseSteps: [
      "Check honestly whether you're currently tracking any of this course's items consistently, or just did each check once while reading the relevant lesson.",
    ],
    fixBranches: [
      {
        condition: "If you don't have anything consolidated yet",
        action:
          "build one simple spreadsheet with a row per metric — your ranking, your named competitor's, the gap — and one column per month. Ten minutes on the same day each month keeps it current.",
      },
    ],
    cadence: "Monthly, on a fixed day — the same day each month is what actually makes this stick as a habit rather than something that quietly lapses.",
    cadenceBadge: "Monthly, fixed day",
    doneWithYou: "we help you set up a scorecard template covering everything in this course.",
    doneForYou: "we build and maintain the full scorecard for you every month, as part of your standard reporting.",
  },
  {
    slug: "decide-whats-worth-reacting-to",
    category: "Turning Intelligence Into Action",
    categoryIndex: 5,
    itemIndex: 15,
    title: "Deciding What's Worth Reacting To, And What's Just Noise",
    whatIsIt:
      "Learning to tell a genuine, sustained shift apart from normal month-to-month variation — reacting to every small wobble is as costly as reacting to nothing at all.",
    whyCustomer:
      "Not directly customer-facing — this is a judgement skill that protects your time and attention, so the genuine signals from this course don't get lost among the noise.",
    whySearchEngine:
      "Not a ranking factor — this is the final filter on everything else in this course. Chasing every single-month fluctuation burns effort that should go toward the shifts that actually persist.",
    whySearchEngineBadge: "Prerequisite — the filter that makes the rest of this course sustainable",
    diagnoseSteps: [
      "Look back at your scorecard, if you've started one, and pick out anything that changed by a small margin for exactly one month before returning to normal.",
      "Separately, note anything that's moved consistently in the same direction for two or three months running — that's the real signal.",
    ],
    fixBranches: [
      {
        condition: "If something has moved consistently for two or three months",
        action: "treat it as genuine and act on it — go to the relevant lesson in this course, or the SEO, GEO, or Review Management course, and close the gap.",
      },
      {
        condition: "If something moved once and reverted",
        action: "log it and let it go — reacting to single-month noise burns effort better spent on the trends that actually persist.",
      },
    ],
    cadence: "Applied every time you review your scorecard — this is a habit of judgement, not a separate task with its own schedule.",
    cadenceBadge: "Applied monthly, alongside your scorecard",
    doneWithYou: "we help you build the judgement to separate a genuine trend from normal noise.",
    doneForYou: "we make this call for you every month as part of your report, flagging only what's genuinely worth acting on.",
  },
  {
    slug: "time-and-outside-your-control",
    category: "The Honest Picture",
    categoryIndex: 6,
    itemIndex: 16,
    title: "Time, And What's Outside Your Control",
    whatIsIt:
      "Two categories of competitive position that don't respond to effort at all — one because it simply takes time to build, the other because it was never yours to control in the first place.",
    analogy: [
      {
        label: "Takes time, can't be rushed",
        text: "Your own history of consistent visibility and reviews, and how long a competitor has been established — both genuine factors, but ones that only build through elapsed time, not effort alone.",
      },
      {
        label: "Completely outside your control",
        text: "How Google, Bing, or an AI platform chooses to weigh a signal this month, what a competitor decides to spend on advertising, and the broader property market moving for reasons that have nothing to do with either of you.",
      },
    ],
    whyCustomer:
      "An established-feeling business with a long, consistent track record simply reads as more trustworthy than a brand-new one doing everything else right — and none of the right-hand factors are things a customer ever weighs directly either.",
    whySearchEngine:
      "Tenure and consistency are genuine signals, but ones no amount of tracking this month can shortcut — there's no fix beyond starting properly now, since every month delayed is a month a patient competitor pulls further ahead. Platform weighting, a competitor's ad budget, and the wider market are real and genuinely affect you, but none of them are things this course — or any course — can hand you control over. The same is true for whoever's ahead of you right now.",
    whySearchEngineBadge: "Genuine factors — just not ones tracking can shortcut",
  },
  {
    slug: "course-complete",
    category: "Course Complete",
    categoryIndex: 7,
    itemIndex: 17,
    title: "You've Reached The End Of This Course",
    whatIsIt:
      "Nothing in this course requires special tools or skill — a search run consistently, a scorecard kept up, the judgement to know what's worth reacting to. What actually separates the agents who stay ahead from the ones who fall behind isn't knowing more, it's checking, consistently, month after month.",
    closingSections: [
      {
        heading: "",
        paragraphs: [
          "I can't guarantee you'll always be ahead. Nobody honestly can — competitors make their own decisions, platforms change how they rank things, and some of what moves your position is simply outside anyone's control. But a consistent habit of watching — knowing exactly where you stand, catching a shift early — moves the numbers that are within your control further than almost anyone actually bothers to.",
          "Consistency is the single most important thing in this entire course. A scorecard checked once and abandoned tells you almost nothing. One kept up every month, on the same day, turns scattered impressions into an actual, provable pattern — and that pattern is what tells you exactly where to spend your next hour of effort.",
          "The longer you keep this up, the more it compounds. Knowing precisely where you stand against a named rival, month after month, isn't just reassuring — it's the difference between reacting to a slump after it's already cost you enquiries, and closing the gap before it ever reaches your numbers.",
        ],
      },
      {
        heading: "A Word About Our Services",
        paragraphs: [
          "Now that you've reached the end, I want to be upfront about what we do here at Reyse.",
          "If you've read through this and thought “yes, this is exactly what I need” — but it feels like a lot to keep on top of alongside actually running the business — that's exactly what our Market & Competitive Intelligence service is for. You'll have noticed, on every item in this course, exactly what each service level covers. If something stood out, feel free to book a call — just click “Get Started” in the top right.",
          "One more thing I'd genuinely appreciate: if you got any value at all from this course, please leave us a review on Google. It helps more than you'd think — it's how this reaches the next person who needs it.",
          "As always, thank you for the most valuable thing you gave today — your attention. And if you found this useful, take a look at our other guides in the Resources section.",
        ],
        cta: { label: "See all free resources", href: "/resources" },
      },
    ],
  },
];
