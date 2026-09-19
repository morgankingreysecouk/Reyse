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
  demoComponent?: "schema-markup";
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
    slug: "ask-at-the-right-moment",
    category: "Asking For Reviews",
    categoryIndex: 1,
    itemIndex: 1,
    title: "Asking At The Right Moment",
    whatIsIt:
      "Picking the single moment in the relationship where someone is genuinely most likely to say yes and mean it — not asking whenever you happen to remember.",
    analogy: [
      {
        label: "The waiter",
        text: "A waiter who asks how the meal was mid-bite gets a mumbled answer. One who asks after the plate's cleared and the coffee's arrived gets an actual opinion — timing changes the quality of the answer, not just whether you get one.",
      },
    ],
    whyCustomer:
      "Ask too early, before they've actually felt the outcome, and even a genuinely happy client gives a lukewarm answer. Ask too late, and the moment — and the goodwill — has faded. The best moment is right after a clear win: keys handed over, offer accepted, move-in day. That's when gratitude is highest and the request feels natural instead of transactional.",
    whySearchEngine:
      "Google doesn't measure timing directly, but it measures what good timing produces: a genuinely happy customer asked at the right moment writes a longer, more specific, more positive review than one asked at a flat, forgettable moment — and specificity is exactly what makes a review carry weight with both future customers and the trust signals search engines rely on.",
    whySearchEngineBadge: "Indirect — better timing produces better reviews, not a ranking factor itself",
    diagnoseSteps: [
      "List your last 10 reviews and note roughly when the request went out relative to the actual transaction.",
      "Ask yourself honestly: was there a specific, identifiable 'best moment' in each deal, and did the request land there, or somewhere random?",
    ],
    fixBranches: [
      {
        condition: "If requests currently go out on a fixed schedule",
        action:
          "switch to triggering the request off the actual milestone instead — completion day, keys handed over, offer accepted — not a calendar date that has nothing to do with the client's experience.",
      },
      {
        condition: "If you're not sure what the 'best moment' actually is for your business",
        action:
          "ask your last five genuinely happy clients, directly, when they felt most positive about the process. The pattern usually repeats.",
      },
    ],
    fixShortcut:
      "If you're using any review-request software, most let you set the trigger event in settings — check before assuming you're stuck with a fixed schedule.",
    cadence: "This is a rule to bake into your process once, not a recurring check — revisit only if the process itself changes.",
    cadenceBadge: "Set once, revisit if your process changes",
    doneWithYou: "we help you identify the right trigger moment for your specific process and set up the request to fire automatically from it.",
    doneForYou: "we build and run the entire automated request system for you, triggered off the moment that actually works.",
  },
  {
    slug: "send-within-24-hours",
    category: "Asking For Reviews",
    categoryIndex: 1,
    itemIndex: 2,
    title: "Sending The Request Within 24 Hours",
    whatIsIt:
      "Getting the request out while the experience is still fresh, not weeks later when the details — and the feeling — have already faded.",
    whyCustomer:
      "Memory fades fast. Someone asked the day after completion remembers the specific things that went well — how quickly you answered, how you handled a wobble — and writes a specific review. Someone asked three weeks later remembers roughly that it \"went fine\" and writes three words to match.",
    whyCustomerStat: { value: "74%", label: "of consumers specifically look for reviews from the last three months" },
    whySearchEngine:
      "A fast, specific review is more likely to be detailed and genuine-reading, which readers and platforms both weight more heavily than a generic one — and getting reviews out quickly also keeps your overall review recency healthier, which is a signal search engines and AI tools do measure directly.",
    whySearchEngineBadge: "Indirect — speed drives quality and recency, both of which do get measured",
    diagnoseSteps: [
      "Pick your last five completed transactions and check how many days passed between completion and the review request going out.",
      "If any took longer than 48 hours, note why — a process gap, or just forgetting.",
    ],
    fixBranches: [
      {
        condition: "If requests are sent manually, whenever someone remembers",
        action: "build a same-day habit: the moment a deal completes, the request goes out — ideally before the end of that working day.",
      },
      {
        condition: "If the delay is because you're waiting for the 'perfect' moment to write a personal message",
        action: "use a short, genuine template instead of waiting for inspiration. A prompt sent today beats a perfect one sent next week.",
      },
    ],
    fixShortcut: "Automating this removes the human-memory problem entirely — the trigger fires the same day, every time, without anyone needing to remember.",
    cadence: "Worth spot-checking your actual turnaround time once a quarter, since busy periods are exactly when this quietly slips.",
    cadenceBadge: "Quarterly spot-check",
    doneWithYou: "we help you set up a same-day trigger so the request never depends on someone remembering.",
    doneForYou: "we run the automated request system for you, so every single request goes out within 24 hours without you thinking about it.",
  },
  {
    slug: "automatic-follow-up",
    category: "Asking For Reviews",
    categoryIndex: 1,
    itemIndex: 3,
    title: "Following Up Once, Automatically",
    whatIsIt:
      "A single, gentle automatic reminder for anyone who didn't respond to the first request — not a second, third, and fourth nag that starts to feel like harassment.",
    whyCustomer:
      "Most people who don't leave a review the first time aren't refusing — they're just busy, and it slipped their mind. A single polite reminder a few days later catches a genuine share of that group without annoying anyone. Beyond one follow-up, the returns drop fast and the annoyance risk climbs.",
    whySearchEngine:
      "This is a volume lever, not a direct ranking factor: more of your genuinely happy customers actually completing the review they meant to leave means more total reviews, and review volume and consistency both feed local ranking and AI trust signals over time.",
    whySearchEngineBadge: "Indirect — increases volume, which is what actually gets measured",
    diagnoseSteps: [
      "Check whether your current request process includes any follow-up at all.",
      "If it does, check how many follow-ups are sent and how many days apart.",
    ],
    fixBranches: [
      {
        condition: "If there's currently no follow-up",
        action: "add exactly one, timed for 4–5 days after the original request — enough time to have genuinely forgotten, not so long the moment's gone.",
      },
      {
        condition: "If there are currently multiple follow-ups",
        action: "cut it back to one. More than that reads as pressure, not a reminder, and risks damaging the relationship you're trying to get a review out of.",
      },
    ],
    cadence: "A set-once automation, not a recurring manual task — just worth reviewing the timing and tone once every few months.",
    cadenceBadge: "Set once, review occasionally",
    doneWithYou: "we help you configure a single, well-timed follow-up in whatever system you're using.",
    doneForYou: "we run the entire request-and-follow-up sequence for you, tuned to convert without ever feeling pushy.",
  },
  {
    slug: "one-click-review-link",
    category: "Asking For Reviews",
    categoryIndex: 1,
    itemIndex: 4,
    title: "Making It Genuinely One-Click Easy",
    whatIsIt:
      "Sending a direct link that opens straight into the review box — not asking someone to 'search us on Google' and find their own way there.",
    analogy: [
      {
        label: "The extra door",
        text: "Every additional step between wanting to help and actually doing it loses you people — a direct link removes every door between the ask and the action except the last one.",
      },
    ],
    whyCustomer:
      "Someone willing to leave a review is doing you a favour on their own time. Making them search for your business, find the right listing, then find the review button is three chances for them to get distracted and never finish. A direct link removes all three.",
    whySearchEngine:
      "Not a ranking factor itself, but it directly increases how many of your genuinely willing customers actually complete a review — and review volume is one of the clearest, most consistent local ranking and AI-trust signals there is.",
    whySearchEngineBadge: "Indirect — removes friction, friction is what kills conversion",
    diagnoseSteps: [
      "Check what your current review request actually says — does it include a direct link, or just a name and a suggestion to 'leave us a review'?",
      "Click the link yourself, on a phone, and count how many taps it takes to reach the actual review box.",
    ],
    fixBranches: [
      {
        condition: "If you don't currently have a direct review link",
        action: "generate one using your Google Business Profile's own share link, or a free link generator, and save it somewhere you can paste it every time.",
        links: [{ label: "Google review link generator", href: "https://whitespark.ca/google-review-link-generator/" }],
      },
      {
        condition: "If your link takes more than two taps to reach the review box",
        action: "double-check you're using the direct short link rather than a link to your general business profile page.",
      },
    ],
    cadence: "Set once and reused every time — just re-check it still works if you ever change your Google Business Profile setup.",
    cadenceBadge: "Set once, re-check after profile changes",
    doneWithYou: "we generate your direct review link and show you exactly where to drop it into every request.",
    doneForYou: "we build it directly into the automated request system, so it's always the correct, current, one-click link.",
  },
  {
    slug: "reply-to-every-review",
    category: "Responding To Reviews",
    categoryIndex: 2,
    itemIndex: 5,
    title: "Replying To Every Review, Not Just The Negative Ones",
    whatIsIt:
      "A genuine, specific reply to every review that comes in — five-star ones included — not just damage control on the bad ones.",
    whyCustomer:
      "89% of consumers say they're more likely to choose a business that responds to every review. A reply to a five-star review isn't wasted effort — it's visible proof, to everyone reading later, that you're actually paying attention.",
    whyCustomerStat: { value: "89%", label: "more likely to choose a business that responds to every review" },
    whySearchEngine:
      "Review response activity is itself a confirmed local search ranking factor, independent of your star rating or review count — and only 54% of reviews get any response at all, which means simply replying to everything is a genuine, measurable edge over most competitors doing the bare minimum.",
    whySearchEngineBadge: "Confirmed local ranking factor",
    diagnoseSteps: [
      "Open your Google Business Profile and count how many of your last 20 reviews have a reply from you.",
      "Note specifically how many five-star reviews were left unanswered — that's usually where the gap is biggest, since negative reviews tend to get attention by default.",
    ],
    diagnoseLink: { label: "Google Business Profile", href: "https://business.google.com" },
    fixBranches: [
      {
        condition: "If you have a backlog of unanswered reviews",
        action: "clear it in one sitting rather than letting it grow — work oldest to newest, and keep replies short and specific rather than generic.",
      },
      {
        condition: "If five-star reviews specifically are going unanswered",
        action: "build replying to positive reviews into the same routine as negative ones, rather than treating it as optional.",
      },
    ],
    fixShortcut: "If a backlog feels overwhelming, ask ChatGPT or Claude to draft a first pass of replies from the review text — then read and adjust each one before posting, so it still sounds like you.",
    fixShortcutLinks: [
      { label: "ChatGPT", href: "https://chatgpt.com" },
      { label: "Claude", href: "https://claude.ai" },
    ],
    cadence: "Ideally daily, or at minimum a few times a week — a backlog that builds up for a month is a much bigger job than staying on top of it.",
    cadenceBadge: "Daily to a few times a week",
    doneWithYou: "we help you clear your existing backlog and set up a routine so it never builds up again.",
    doneForYou: "an AI responder drafts a genuine, well-considered reply in your voice for every new review, with light human oversight built in.",
  },
  {
    slug: "respond-within-hours",
    category: "Responding To Reviews",
    categoryIndex: 2,
    itemIndex: 6,
    title: "Responding Within A Few Hours Where You Can",
    whatIsIt:
      "Treating a new review — especially a negative one — as something worth a same-day reply, not something that waits for a weekly check-in.",
    whyCustomer:
      "A reviewer is roughly three times more likely to update their rating upwards if you respond within 4 hours. Speed reads as genuine care; a reply that arrives a week later, after the frustration has had time to settle into resentment, rarely lands the same way.",
    whyCustomerStat: { value: "3×", label: "more likely a reviewer updates their rating if answered within 4 hours" },
    whySearchEngine:
      "Response speed itself isn't a documented ranking input the way response activity is, but it's the single biggest driver of whether a negative review actually gets resolved and upgraded — which does directly improve your rating, and your rating is a confirmed ranking and trust signal.",
    whySearchEngineBadge: "Indirect — drives rating improvement, which is a direct signal",
    diagnoseSteps: [
      "Check the timestamps on your last 10 replies against when the review was actually posted.",
      "Note your rough average response time, and whether negative reviews specifically get answered faster than positive ones, or slower.",
    ],
    fixBranches: [
      {
        condition: "If reviews are only checked on a fixed weekly schedule",
        action: "turn on instant notifications instead, so a new review reaches you the moment it's posted rather than waiting for the next scheduled check.",
      },
      {
        condition: "If response time is inconsistent because no one person owns it",
        action: "assign one clear owner for review replies, even if it rotates — ambiguous ownership is usually why things slip.",
      },
    ],
    cadence: "This is about your standing process, not a periodic check — but worth reviewing your average response time monthly to catch drift.",
    cadenceBadge: "Ongoing, review monthly",
    doneWithYou: "we help you set up instant notifications and a clear ownership routine.",
    doneForYou: "we monitor continuously and respond same-day as standard, with anything sensitive escalated for a human to check within hours.",
  },
  {
    slug: "negative-review-process",
    category: "Responding To Reviews",
    categoryIndex: 2,
    itemIndex: 7,
    title: "Having A Real Process For Negative Reviews",
    whatIsIt:
      "A genuine, considered reply that acknowledges the specific issue — not a defensive copy-paste that reads the same on every one-star review you've ever received.",
    analogy: [
      {
        label: "The defensive script",
        text: "A reply that clearly wasn't written for this specific complaint tells every future reader you don't actually listen — it can do more damage than the original review.",
      },
    ],
    whyCustomer:
      "87% of unhappy customers contact a business directly before ever posting a negative review — by the time it's public, they've usually already tried the quiet route and been let down twice. A generic, defensive reply confirms exactly that impression to everyone else reading.",
    whyCustomerStat: { value: "87%", label: "of unhappy customers contact a business directly before posting a negative review" },
    whySearchEngine:
      "Search engines don't read tone, but future customers do — a specific, calm, accountable reply to a negative review is frequently cited as a reason someone still books a viewing despite the bad review sitting right above it.",
    whySearchEngineBadge: "Indirect — protects conversion, not measured directly",
    diagnoseSteps: [
      "Reread your last three negative-review replies as if you were a stranger deciding whether to trust this business.",
      "Check whether each reply actually names the specific issue raised, or could be pasted under any complaint unchanged.",
    ],
    fixBranches: [
      {
        condition: "If replies currently sound generic or defensive",
        action: "rewrite the process: acknowledge the specific point raised, avoid arguing the facts publicly, and offer a genuine next step — a phone call, a fix, an apology where one's actually due.",
      },
      {
        condition: "If a review is factually wrong or clearly not a real customer",
        action: "reply calmly and factually once, then flag it to the platform for review rather than getting into a public back-and-forth.",
      },
    ],
    fixShortcut: "Ask ChatGPT or Claude to draft a calm, specific reply from the review text — it's often easier to edit a first draft down than to write a level-headed one from scratch while still annoyed.",
    fixShortcutLinks: [
      { label: "ChatGPT", href: "https://chatgpt.com" },
      { label: "Claude", href: "https://claude.ai" },
    ],
    cadence: "As they come in — this isn't a batchable task, since a slow reply to a negative review loses most of its value.",
    cadenceBadge: "As they arrive",
    doneWithYou: "we help you build a genuine reply framework so every negative review gets a considered, specific response.",
    doneForYou: "we draft every reply with a human checking anything sensitive before it goes live.",
  },
  {
    slug: "never-incentivise-reviews",
    category: "Responding To Reviews",
    categoryIndex: 2,
    itemIndex: 8,
    title: "Never Incentivising Or Gating Reviews",
    whatIsIt:
      "Not offering a discount, prize, or thank-you for a review, and not filtering who gets asked based on how happy they seemed first — both are against every major platform's terms, and both are the kind of thing that unravels badly if noticed.",
    whyCustomer:
      "Incentivised reviews read differently, even when they're genuine — readers are increasingly good at spotting the pattern, and a review profile that looks bought rather than earned undermines trust in every review on it, not just the incentivised ones.",
    whySearchEngine:
      "This is a platform-terms issue rather than a ranking factor — Google, Trustpilot, and every major review platform explicitly prohibit incentivised or filtered reviews, and a profile caught doing it risks having reviews removed or the whole profile suspended, which is a far bigger loss than any single review was worth.",
    whySearchEngineBadge: "Prerequisite — a rule, not a ranking lever",
    diagnoseSteps: [
      "Check whether your current review-request process offers anything — a discount, entry into a draw, a thank-you gift — in exchange for a review.",
      "Check whether the request goes out to everyone equally, or only to clients who seemed happiest first.",
    ],
    fixBranches: [
      {
        condition: "If any incentive is currently offered",
        action: "remove it. If you want to thank people for their time, do it separately and explicitly not tied to leaving a review at all.",
      },
      {
        condition: "If requests are only sent to clients who seemed satisfied",
        action: "send the request to everyone. A few honest negative reviews from a genuinely broad base build far more trust than a suspiciously perfect score.",
        links: [{ label: "Google's review policies", href: "https://support.google.com/contributionpolicy/answer/7400114" }],
      },
    ],
    cadence: "Set once as a standing rule, not something to revisit — this one's binary, not a matter of degree.",
    cadenceBadge: "A standing rule, not a recurring check",
    doneWithYou: "we build your request process to be compliant with every platform's rules from the start.",
    doneForYou: "we run the entire request system within every platform's actual terms, so you're never at risk of losing reviews you've earned.",
  },
  {
    slug: "when-to-go-offline",
    category: "Responding To Reviews",
    categoryIndex: 2,
    itemIndex: 9,
    title: "Knowing When To Move A Conversation Offline",
    whatIsIt:
      "Recognising the point where a public reply has done its job, and the actual resolution needs a phone call or a private message instead.",
    whyCustomer:
      "A public back-and-forth over specifics — dates, figures, who said what — reads as messy to everyone watching, even if you're right. Moving it to a phone call the moment it gets detailed protects both sides and usually resolves things faster than typing ever would.",
    whySearchEngine:
      "No direct ranking effect, but a public argument thread under a review is exactly the kind of thing that makes a hesitant reader click away rather than book a viewing — this protects conversion, not ranking.",
    whySearchEngineBadge: "No ranking effect — protects conversion instead",
    diagnoseSteps: [
      "Check your public replies for any that run more than two or three sentences, or that get into specific dates, figures, or he-said-she-said detail.",
      "That length is usually the signal it should have moved offline sooner.",
    ],
    fixBranches: [
      {
        condition: "If a reply is starting to get into detailed specifics",
        action: "post one short, calm public reply inviting them to call or message directly, then take the actual resolution off the public thread.",
      },
    ],
    cadence: "A judgement call each time, not a scheduled task — but worth having the rule agreed in advance so it's not decided in the moment, under pressure.",
    cadenceBadge: "Judgement call, rule set in advance",
    doneWithYou: "we help you set the rule for when to take things offline, so it's decided calmly, not in the moment.",
    doneForYou: "we handle the public reply and flag anything that needs a direct human conversation, so nothing plays out messily in public.",
  },
  {
    slug: "google-business-profile-reviews",
    category: "Every Platform That Counts",
    categoryIndex: 3,
    itemIndex: 10,
    title: "Claiming And Actively Managing Google Business Profile Reviews",
    whatIsIt:
      "Making sure your Google Business Profile is claimed, verified, and actually checked regularly — the platform where most property searches, and most reviews, start.",
    whyCustomer:
      "For most people, Google Business Profile reviews are the first reviews they see, often before they've even opened your website — it's the first impression, formed before you've had any chance to make one yourself.",
    whySearchEngine:
      "Your Google review count and rating are a direct input into Google's local ranking algorithm — this isn't indirect or inferred, Google has stated it plainly as part of how local results are ranked.",
    whySearchEngineBadge: "Confirmed direct local ranking factor",
    diagnoseSteps: [
      "Search your business name on Google and check whether your profile shows as claimed (with a 'business owner' badge visible when logged in) or unclaimed.",
      "If claimed, check when it was last actively checked — reviews replied to, hours confirmed, photos current.",
    ],
    diagnoseLink: { label: "Google Business Profile", href: "https://business.google.com" },
    fixBranches: [
      {
        condition: "If your profile isn't claimed at all",
        action: "claim and verify it today — it's free, and an unclaimed profile means you can't reply to a single review on it.",
        links: [{ label: "Claim your profile", href: "https://business.google.com" }],
      },
      {
        condition: "If it's claimed but neglected",
        action: "build a standing weekly check into your routine — new reviews, new questions, anything that needs a reply.",
      },
    ],
    cadence: "Weekly, at minimum — this is your single highest-traffic review platform, so it earns the most frequent attention.",
    cadenceBadge: "Weekly minimum",
    doneWithYou: "we help you claim, verify, and set up a routine you can keep on top of yourself.",
    doneForYou: "we monitor and manage it continuously, so nothing on your highest-traffic platform ever sits unanswered.",
  },
  {
    slug: "bing-review-data",
    category: "Every Platform That Counts",
    categoryIndex: 3,
    itemIndex: 11,
    title: "Not Ignoring Bing's Own Review Data",
    whatIsIt:
      "Bing pulls in and displays its own review data alongside local listings — a separate signal from Google's, on a platform that still carries meaningful UK search share.",
    whyCustomer:
      "Someone searching on Bing — often on a work computer, where it's frequently the default — sees Bing's own review presentation, not a mirror of your Google profile. If that data is thin or missing, you look less established to that entire slice of searchers, regardless of how strong your Google reviews are.",
    whySearchEngine:
      "Bing Places factors review signals into its own local ranking, independently of Google — treating Bing as an afterthought means leaving a meaningful, separate ranking input completely unmanaged.",
    whySearchEngineBadge: "Direct — a separate local ranking input from Google's",
    diagnoseSteps: [
      "Search your business name on Bing and check whether your Bing Places listing is claimed and shows reviews.",
      "Compare what's shown there to your Google profile — is it current, or clearly abandoned?",
    ],
    diagnoseLink: { label: "Bing Places", href: "https://www.bing.com/places" },
    fixBranches: [
      {
        condition: "If your Bing Places listing isn't claimed",
        action: "claim it — free, and often much less competitive than Google, since most agents genuinely haven't done this yet.",
        links: [{ label: "Bing Places", href: "https://www.bing.com/places" }],
      },
      {
        condition: "If it's claimed but out of date",
        action: "bring it up to date with your current details, and check back periodically — it doesn't need the same weekly attention as Google, but shouldn't be forgotten entirely.",
      },
    ],
    cadence: "Monthly is plenty — lower traffic than Google, but genuinely worth not ignoring.",
    cadenceBadge: "~Monthly",
    doneWithYou: "we help you claim and set up Bing Places alongside Google, so nothing gets left behind.",
    doneForYou: "we manage Bing Places as part of the same routine as everything else, so it never falls behind Google.",
  },
  {
    slug: "apple-business-connect-reviews",
    category: "Every Platform That Counts",
    categoryIndex: 3,
    itemIndex: 12,
    title: "Understanding Apple Business Connect Inherits Reviews",
    whatIsIt:
      "Apple Business Connect — what shows up in Apple Maps and Siri results — doesn't collect its own reviews. It inherits them directly from Yelp and Tripadvisor, which means a review on a site you may never have logged into can shape what an iPhone user sees about you.",
    analogy: [
      {
        label: "The borrowed shopfront",
        text: "It's like a second shopfront that displays whatever's written about you next door, whether you've ever walked into that shop or not — ignoring it doesn't make it stop showing.",
      },
    ],
    whyCustomer:
      "A meaningful share of buyers and tenants search entirely inside Apple Maps or ask Siri, never touching Google at all — if Yelp or Tripadvisor shows something thin, outdated, or negative, that's the entire impression this group forms.",
    whySearchEngine:
      "Apple's local ranking pulls from these third-party sources directly — this is a genuine, confirmed dependency, not a guess, and it means your Yelp and Tripadvisor presence matters even if you've never actively used either platform.",
    whySearchEngineBadge: "Confirmed — Apple inherits from Yelp and Tripadvisor directly",
    diagnoseSteps: [
      "Search your business on Apple Maps or ask Siri, and check what reviews (if any) currently show.",
      "Separately, search your business name directly on Yelp and Tripadvisor to see what's actually there at the source.",
    ],
    fixBranches: [
      {
        condition: "If you don't have a Yelp or Tripadvisor profile at all",
        action: "claim both — free, and worth doing purely because of what they feed into Apple, even if you never actively promote either platform.",
        links: [
          { label: "Yelp for Business", href: "https://biz.yelp.com" },
          { label: "Tripadvisor for Business", href: "https://www.tripadvisor.com/Owners" },
        ],
      },
      {
        condition: "If a profile exists but is thin or has old, unanswered reviews",
        action: "bring it up to date and reply to what's there, the same as you would on Google — it's a smaller audience, but not a zero one, and it's feeding a platform you can't opt out of.",
      },
    ],
    cadence: "A quarterly check is enough — lower activity than Google or Bing, but worth confirming nothing's slipped or changed.",
    cadenceBadge: "Quarterly check",
    doneWithYou: "we help you claim and tidy up your Yelp and Tripadvisor presence so Apple's inherited view of you is accurate.",
    doneForYou: "we monitor and manage Yelp and Tripadvisor as part of your full cross-platform reputation, including what feeds through to Apple.",
  },
  {
    slug: "trustpilot-and-facebook-reviews",
    category: "Every Platform That Counts",
    categoryIndex: 3,
    itemIndex: 13,
    title: "Keeping Trustpilot And Facebook Reviews Current",
    whatIsIt:
      "Not letting Trustpilot or Facebook reviews sit abandoned just because most of your attention naturally goes to Google — both are still visible, still searchable, and still form part of the overall picture.",
    whyCustomer:
      "A savvy buyer or landlord — particularly one doing real due diligence before a big decision — often checks more than one source deliberately, precisely to see if the picture holds up consistently. An abandoned Trustpilot profile next to an actively managed Google one reads as inconsistency, not just inattention.",
    whySearchEngine:
      "Neither platform is a direct Google ranking input the way your Google Business Profile is, but both are frequently cited or linked from elsewhere, and AI tools increasingly cross-reference review consistency across multiple sources when deciding how much to trust a business.",
    whySearchEngineBadge: "Indirect — consistency across sources feeds AI trust signals",
    diagnoseSteps: [
      "Check whether you have an active Trustpilot business profile, and when the last review reply was posted.",
      "Check your Facebook Page reviews/recommendations tab the same way.",
    ],
    fixBranches: [
      {
        condition: "If either platform has a backlog of unanswered reviews",
        action: "clear it the same way you would Google — oldest to newest, genuine and specific, not generic.",
      },
      {
        condition: "If you don't have a Trustpilot profile at all",
        action: "consider claiming one, particularly if landlords or larger clients are likely to specifically look for third-party verification beyond Google.",
        links: [{ label: "Trustpilot for Business", href: "https://business.trustpilot.com" }],
      },
    ],
    cadence: "Monthly is reasonable for both — not the daily attention Google needs, but not annual neglect either.",
    cadenceBadge: "~Monthly",
    doneWithYou: "we help you get both platforms current and build them into your regular routine.",
    doneForYou: "we track your count, rating, and response speed across Google, Bing, Apple, Trustpilot, and Facebook every month, and keep all of them current.",
  },
  {
    slug: "review-notifications",
    category: "Monitoring & Reporting",
    categoryIndex: 4,
    itemIndex: 14,
    title: "Turning On Instant Notifications",
    whatIsIt:
      "Making sure a new review reaches you — by app notification, email, or text — the moment it's posted, rather than being discovered whenever you next happen to check.",
    whyCustomer:
      "The person who left the review doesn't know you haven't seen it yet — from their side, a slow reply just looks like you don't care. Instant notification is what makes a genuinely fast response possible at all; you can't reply quickly to something you haven't noticed.",
    whySearchEngine:
      "Not a ranking factor on its own — this is the prerequisite that makes the actual ranking factor (response speed and activity) achievable in practice.",
    whySearchEngineBadge: "Prerequisite — enables fast response, doesn't rank itself",
    diagnoseSteps: [
      "Check your Google Business Profile app and account settings to confirm review notifications are actually switched on.",
      "Do the same for any other platform you actively manage — Trustpilot and Facebook both have their own notification settings.",
    ],
    diagnoseLink: { label: "Google Business Profile app settings", href: "https://business.google.com" },
    fixBranches: [
      {
        condition: "If notifications are off, or going somewhere no one checks",
        action: "turn them on and point them at whoever actually owns review replies day to day — not a shared inbox that gets checked once a week.",
      },
      {
        condition: "If you want a single wider net as well",
        action: "set up a free Google Alert for your business name, which can catch mentions beyond the platforms you're actively monitoring.",
        links: [{ label: "Google Alerts", href: "https://www.google.com/alerts" }],
      },
    ],
    cadence: "Set once — this is a settings change, not a recurring task, though worth confirming still works after any app or account changes.",
    cadenceBadge: "Set once, confirm after account changes",
    doneWithYou: "we help you configure notifications correctly across every platform you use.",
    doneForYou: "we monitor everything directly ourselves, so you never need to rely on a notification reaching the right person at all.",
  },
  {
    slug: "track-response-rate",
    category: "Monitoring & Reporting",
    categoryIndex: 4,
    itemIndex: 15,
    title: "Tracking Your Response Rate Specifically",
    whatIsIt:
      "Knowing what percentage of your reviews actually get a reply — a separate number from your star rating, and one that's easy to lose track of without deliberately checking.",
    whyCustomer:
      "Only 54% of reviews get any response at all across businesses generally — most owners genuinely believe they're more on top of it than they are, because a high star rating feels like the job's done. It isn't the same number.",
    whyCustomerStat: { value: "54%", label: "of reviews get any response at all" },
    whySearchEngine:
      "Response activity is a confirmed local ranking factor independent of your rating — which means a business with a slightly lower rating but a consistently high response rate can genuinely out-rank one with better stars and silence.",
    whySearchEngineBadge: "Confirmed — a separate ranking input from your star rating",
    diagnoseSteps: [
      "Count your last 20 reviews and count how many have a reply from you.",
      "Turn that into a rough percentage — that's your actual response rate, not your assumed one.",
    ],
    fixBranches: [
      {
        condition: "If your response rate is meaningfully below 100%",
        action: "clear the backlog first, then treat 'reply to every review' as a non-negotiable step in your routine, not a nice-to-have.",
      },
    ],
    fixShortcut: "Recheck the same count monthly rather than guessing — it takes a few minutes and tells you immediately whether the habit is actually holding.",
    cadence: "Monthly — a quick count, not a deep audit, but consistent enough to catch drift before it becomes a real backlog.",
    cadenceBadge: "Monthly, a few minutes",
    doneWithYou: "we show you how to track this yourself and flag when it starts slipping.",
    doneForYou: "we track it for you every month across every platform, and it never has the chance to slip in the first place.",
  },
  {
    slug: "watch-review-recency",
    category: "Monitoring & Reporting",
    categoryIndex: 4,
    itemIndex: 16,
    title: "Watching Review Recency, Not Just Count",
    whatIsIt:
      "Paying attention to how recent your reviews actually are, not just how many you've accumulated over the years.",
    whyCustomer:
      "74% of consumers specifically look for reviews from the last three months. A business with 200 reviews from three years ago and nothing since reads as coasting on old goodwill, not as currently trustworthy — regardless of how strong that historical rating is.",
    whyCustomerStat: { value: "74%", label: "of consumers specifically look for reviews from the last three months" },
    whySearchEngine:
      "Review recency factors into local ranking alongside count and rating — a steady, current flow signals an active, trustworthy business, while a stalled one can quietly lose ground even with a strong historical total.",
    whySearchEngineBadge: "Direct local ranking factor",
    diagnoseSteps: [
      "Open your Google Business Profile reviews and check the date of your most recent one.",
      "Count how many you've received in the last three months specifically, separate from your all-time total.",
    ],
    fixBranches: [
      {
        condition: "If your most recent review is more than a month old",
        action: "that's usually a request-process problem, not bad luck — revisit whether requests are actually going out consistently.",
      },
      {
        condition: "If your three-month count looks thin compared to your all-time total",
        action: "treat it as the real health metric going forward, not the all-time number, which only ever goes up regardless of current activity.",
      },
    ],
    cadence: "Monthly, alongside your response-rate check — recency and response rate are worth tracking together since they're both process health signals.",
    cadenceBadge: "Monthly",
    doneWithYou: "we help you spot when recency is slipping and connect it back to the request process.",
    doneForYou: "we track your recency every month as part of the same report as your rating and response speed, so a slowdown never goes unnoticed.",
  },
  {
    slug: "spot-recurring-themes",
    category: "Monitoring & Reporting",
    categoryIndex: 4,
    itemIndex: 17,
    title: "Spotting Recurring Themes Before They Become Public",
    whatIsIt:
      "Reading your reviews as a set, looking for the same specific issue coming up more than once — not just reacting to each review individually as it lands.",
    whyCustomer:
      "87% of unhappy customers contact a business directly before ever posting a negative review — which means by the time a complaint shows up publicly, there's a real chance it's already happened privately, unaddressed, more than once.",
    whyCustomerStat: { value: "87%", label: "of unhappy customers contact a business directly before posting a negative review" },
    whySearchEngine:
      "This doesn't move a ranking factor directly, but it protects the rating and review consistency both SEO and AI tools are already relying on — catching a root cause early is cheaper than repairing a rating slide after the fact.",
    whySearchEngineBadge: "Indirect — protects the signals that are measured directly",
    diagnoseSteps: [
      "Reread your last 15–20 reviews together, rather than one at a time as they came in.",
      "Note anything mentioned more than once, even in passing — a specific delay, a specific communication gap, a specific member of staff.",
    ],
    fixBranches: [
      {
        condition: "If a genuine pattern shows up",
        action: "treat it as an operational issue to fix, not a coincidence — the review is the symptom, the pattern is the actual problem.",
      },
    ],
    fixShortcut: "Paste the text of your last 20 reviews into ChatGPT or Claude and ask it to identify any recurring themes or complaints — it's faster than doing it by eye, and it often catches things you've stopped noticing.",
    fixShortcutLinks: [
      { label: "ChatGPT", href: "https://chatgpt.com" },
      { label: "Claude", href: "https://claude.ai" },
    ],
    cadence: "Monthly is usually enough to catch a genuine pattern early without over-reading normal, one-off variation.",
    cadenceBadge: "Monthly",
    doneWithYou: "we show you how to run this check yourself and what counts as a genuine pattern versus normal noise.",
    doneForYou: "each month, we identify the genuine patterns across everything customers are saying, good and bad, and flag anything recurring before it becomes a public problem.",
  },
  {
    slug: "negative-cluster-alerts",
    category: "Monitoring & Reporting",
    categoryIndex: 4,
    itemIndex: 18,
    title: "Setting Up Same-Day Alerts For A Negative Cluster",
    whatIsIt:
      "A way of catching a sudden run of negative reviews — or one severe enough to do real damage — the same day it happens, rather than at the next scheduled check.",
    whyCustomer:
      "A sudden cluster is a different problem from one review sitting unanswered — it usually means something specific went wrong operationally, and it's actively shaping what every new visitor to your profile sees right now, not next week.",
    whySearchEngine:
      "A sharp, sudden rating drop can push a business below whatever informal trust threshold AI tools and cautious customers use to decide who's worth contacting at all — catching it same-day is what stops a temporary problem becoming a lasting one.",
    whySearchEngineBadge: "Indirect — protects your rating from a sudden, sharp drop",
    diagnoseSteps: [
      "Confirm your instant notifications (from the earlier lesson) are actually working by checking you were alerted promptly to your most recent review.",
      "Think through, in advance, what you'd actually do if three negative reviews landed in one day — most businesses haven't decided this until it's already happening.",
    ],
    fixBranches: [
      {
        condition: "If there's no current plan for a sudden cluster",
        action: "write a short one now: who gets alerted, who responds first, and at what point (if any) it's worth a phone call rather than just a public reply.",
      },
    ],
    cadence: "The plan is set once; being ready to act on it is ongoing — this is exactly the kind of thing that's much easier to think through calmly in advance than in the moment.",
    cadenceBadge: "Plan set once, applied when needed",
    doneWithYou: "we help you put a same-day response plan in place before you ever need it.",
    doneForYou: "we monitor for exactly this, with a human checking in directly on anything sensitive, responding immediately rather than waiting for the next scheduled cycle.",
  },
  {
    slug: "review-data-reaches-ai",
    category: "Ranking & Trust Signals",
    categoryIndex: 5,
    itemIndex: 19,
    title: "Making Sure Review Data Reaches AI Tools, Not Just Google",
    whatIsIt:
      "Confirming that your review score and count are actually readable by AI tools — through proper schema markup — rather than only visible to a human scrolling your Google profile.",
    demoComponent: "schema-markup",
    whyCustomer:
      "Someone who asks ChatGPT or a similar tool who to trust never sees your Google profile directly — the AI is working from whatever structured data it can find, or whatever it was trained on. A strong rating that never reaches that structured layer might as well not exist to that entire audience.",
    whySearchEngine:
      "This is the same AggregateRating schema covered in depth in the GEO guide — worth a direct look if you haven't already, since it's the specific technical piece that makes your review data legible to AI tools rather than just to human visitors.",
    whySearchEngineBadge: "Direct — the technical bridge between your reviews and AI visibility",
    diagnoseSteps: [
      "Check whether your website currently has AggregateRating schema implemented — Google's Rich Results Test will confirm it either way.",
    ],
    diagnoseLink: { label: "Google Rich Results Test", href: "https://search.google.com/test/rich-results" },
    fixBranches: [
      {
        condition: "If AggregateRating schema isn't currently implemented",
        action: "add it, correctly attributed to a genuine third-party source — your real review score and count from Google or Trustpilot, not an invented figure.",
      },
    ],
    fixShortcut: "Ask ChatGPT or Claude to generate AggregateRating JSON-LD schema using your real review score and count, then have your website developer add it — or see the full walkthrough in the GEO guide.",
    fixShortcutLinks: [
      { label: "ChatGPT", href: "https://chatgpt.com" },
      { label: "Claude", href: "https://claude.ai" },
      { label: "The GEO guide's version of this lesson", href: "/geocourse/reviews-rating-schema" },
    ],
    cadence: "Set once when implemented, then re-check occasionally that the figures shown are still accurate as your rating changes.",
    cadenceBadge: "Set once, re-check accuracy periodically",
    doneWithYou: "we help you get AggregateRating schema correctly implemented and kept accurate.",
    doneForYou: "we implement and maintain it as part of your full GEO setup, so your real rating always reaches AI tools correctly.",
  },
  {
    slug: "competitor-review-gaps",
    category: "Playing It Smart",
    categoryIndex: 6,
    itemIndex: 20,
    title: "Checking A Named Competitor's Review Activity",
    whatIsIt:
      "Regularly looking at exactly what a specific local competitor is doing with their reviews — not to copy them, but to spot gaps you can genuinely do better on.",
    whyCustomer:
      "Not directly customer-facing — this is a research habit that feeds everything else in this guide, rather than something a customer ever sees you doing.",
    whySearchEngine:
      "Not a ranking factor itself, but a practical way to prioritise your own effort — if a named competitor has a thin response rate or a stale profile, that's a specific, provable gap you can close faster than starting from a generic checklist.",
    whySearchEngineBadge: "Prerequisite — informs strategy, doesn't rank on its own",
    diagnoseMethods: [
      {
        condition: "Method 1 — Direct comparison",
        action: "look at exactly what they're doing, side by side with your own profile.",
        steps: [
          "Pick one specific, genuine local competitor.",
          "Compare review count, rating, response rate, and recency across Google, Bing, and Apple/Yelp/Tripadvisor.",
          "Note the single biggest gap — usually response rate or recency, since both are easy to neglect and easy to fix.",
        ],
      },
      {
        condition: "Method 2 — Ask an AI tool directly",
        action: "a quick way to see the comparison the way a prospective customer might.",
        steps: [
          "Ask ChatGPT, Gemini, or a similar tool to compare your business and the named competitor's reputation.",
          "Note whether it can even find recent information about either of you — a gap there is often the clearest opportunity of all.",
        ],
      },
    ],
    fixBranches: [
      {
        condition: "Once you've found the gap",
        action: "prioritise closing it specifically, rather than working through this whole guide in order — the fastest wins are usually wherever a real competitor is weakest.",
      },
    ],
    cadence: "Quarterly is plenty — competitor positions don't shift week to week, and checking too often mostly just costs you time.",
    cadenceBadge: "Quarterly",
    doneWithYou: "we help you identify the sharpest gap and where to focus first.",
    doneForYou: "we track this as part of your monthly reporting, so you always know exactly where you stand against the agency down the road.",
  },
  {
    slug: "time-and-outside-your-control",
    category: "The Honest Picture",
    categoryIndex: 7,
    itemIndex: 21,
    title: "Time, and What's Outside Your Control",
    whatIsIt:
      "Two categories of review factor that don't respond to effort at all — one because it simply takes time, the other because it was never yours to control in the first place.",
    analogy: [
      {
        label: "Takes time, can't be rushed",
        text: "Your total review history and how long you've had a consistent, active presence across platforms — both direct signals, but ones that only build through elapsed time, not effort alone.",
      },
      {
        label: "Completely outside your control",
        text: "How each platform's algorithm weighs review signals, what a competitor chooses to do, and whether a difficult client was always going to leave a bad review regardless of how the job actually went.",
      },
    ],
    whyCustomer:
      "An established-feeling business with a long, consistent review history simply reads as more trustworthy than a brand-new one, even one doing everything else right — and none of the right-hand factors are things a customer ever thinks about directly either.",
    whySearchEngine:
      "Total review history and platform tenure are genuine, direct signals — but ones no amount of effort this month can shortcut. There's no fix beyond starting properly now, since every month delayed is a month a patient competitor pulls further ahead. Platform algorithm weighting, competitor decisions, and the occasional unreasonable review are real and genuinely affect you — but none of them are things you can act on. The same applies equally to every agency you're competing against, including whoever's ahead of you now.",
    whySearchEngineBadge: "Genuine factors — just not ones effort can shortcut",
  },
  {
    slug: "course-complete",
    category: "Course Complete",
    categoryIndex: 8,
    itemIndex: 22,
    title: "You've Reached The End Of This Course",
    whatIsIt:
      "Nothing in this course requires special skill — a genuine reply, a well-timed request, a routine kept up. What actually separates the businesses with strong reputations from the ones without isn't knowing more, it's doing this consistently, month after month.",
    closingSections: [
      {
        heading: "",
        paragraphs: [
          "I can't guarantee a five-star average. Nobody honestly can — reviews are, by nature, other people's honest opinions, and some of that is simply outside your control. But a consistent process — asking well, replying fast, watching for patterns — moves the numbers that are within your control further than almost anyone actually bothers to.",
          "Consistency is the single most important thing in this entire course. A backlog that builds up for a month is a much bigger job than staying on top of it week by week. Let the habit slip, and it can genuinely undo months of good work — a stale, unanswered profile reads worse than a newer one that's actively managed.",
          "The longer you keep this up, the more it compounds. A long, consistent, well-managed review history doesn't just look good this quarter — it becomes one of the hardest things for a competitor to catch up on, precisely because it can't be rushed.",
        ],
      },
      {
        heading: "A Word About Our Services",
        paragraphs: [
          "Now that you've reached the end, I want to be upfront about what we do here at Reyse.",
          "If you've read through this and thought “yes, this is exactly what I need” — but it feels like a lot to keep on top of alongside actually running the business — that's exactly what our Done-With-You and Done-For-You services are for. You'll have noticed, on every item in this course, exactly what each service level covers. If something stood out, feel free to book a call — just click “Get Started” in the top right.",
          "One more thing I'd genuinely appreciate: if you got any value at all from this course, please leave us a review on Google. It helps more than you'd think — it's how this reaches the next person who needs it.",
          "As always, thank you for the most valuable thing you gave today — your attention. And if you found this useful, take a look at our other guides in the Resources section.",
        ],
        cta: { label: "See all free resources", href: "/resources" },
      },
    ],
  },
];
