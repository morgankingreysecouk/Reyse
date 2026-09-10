export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  body: ContentBlock[];
};

export const posts: Post[] = [
  {
    slug: "invisible-to-chatgpt",
    title: "Why your agency is invisible to ChatGPT (and how to check)",
    excerpt:
      "Ranking well on Google tells you nothing about whether AI tools have ever heard of you. Here's exactly how to check what ChatGPT, Gemini, and Copilot are currently saying about your business — and why most agencies get a very uncomfortable answer.",
    date: "3 September 2026",
    readingTime: "6 min read",
    body: [
      {
        type: "p",
        text: "Open ChatGPT right now and ask it: \"best estate agent in [your town]\". Then do the same on Gemini, Copilot, and Perplexity. If you're like most of the property businesses we've tested, your name doesn't come up on at least one of them — and quite possibly none.",
      },
      {
        type: "p",
        text: "That's not a ranking problem. It's an existence problem. Google puts you somewhere on a results page even when you're not optimised — page four, maybe, but you're there. AI tools don't work that way. There's no page four. You're either in the answer, or you're not mentioned at all.",
      },
      {
        type: "h2",
        text: "Why this keeps happening even to agencies that rank well",
      },
      {
        type: "p",
        text: "We see this constantly: an agency with a genuinely strong Google presence, decent reviews, a professional site — and total silence when you ask an AI tool about them. It happens for a few specific, fixable reasons.",
      },
      {
        type: "list",
        items: [
          "The website blocks AI crawlers without realising it — often through a security plugin or hosting default that treats GPTBot or PerplexityBot the same as a malicious scraper. OpenAI has said plainly: a blocked site never appears in ChatGPT's search answers, full stop.",
          "The content answers questions in a way search engines reward but AI tools can't easily lift — long, scene-setting paragraphs instead of direct, specific facts an AI can quote back.",
          "There's no structured data telling AI systems what the business actually is, where it operates, and what it's rated — so AI is working from guesswork instead of fact.",
          "The content hasn't been touched in over a year. AI models weight freshness heavily; content that ranks fine on Google can quietly stop being cited by AI tools simply because it's gone stale.",
        ],
      },
      {
        type: "h2",
        text: "The 10-minute audit you can do yourself",
      },
      {
        type: "p",
        text: "Before anything else, find out where you actually stand. Open an incognito window and run these four questions across ChatGPT, Gemini, Copilot, and Perplexity:",
      },
      {
        type: "list",
        items: [
          "\"Best [your service] in [your town]\" — the obvious one, but worth doing properly across all four tools, not just ChatGPT.",
          "\"Who is [your business name]?\" — checks whether AI has any accurate picture of you at all, even when prompted directly.",
          "\"Compare [you] and [your closest competitor]\" — often the most revealing. If AI can describe your competitor in detail and draws a blank on you, that's your gap made concrete.",
          "\"What do reviews say about [your business name]?\" — tests whether your review volume and rating are actually reaching AI systems, or sitting invisible on platforms they don't read from.",
        ],
      },
      {
        type: "p",
        text: "Write down exactly what comes back, including the answers where you're simply absent. That list is now your starting priority order — fix the gaps that showed up as total silence before you touch anything else.",
      },
      {
        type: "h2",
        text: "What actually moves the needle",
      },
      {
        type: "p",
        text: "In order of impact, based on what we've seen actually shift results: confirm you're not blocking AI crawlers (this alone is the difference between invisible and eligible), add structured data that states clearly what you are and where you operate, rewrite your key pages around direct, specific answers to the exact questions people ask, and keep your most important content genuinely current rather than publishing it once and leaving it.",
      },
      {
        type: "p",
        text: "None of this is exotic. It's the same discipline good SEO always demanded, pointed at a slightly different reader — one that doesn't scroll, doesn't skim, and only ever repeats back what it can find and trust.",
      },
    ],
  },
  {
    slug: "google-business-profile-mistakes",
    title: "The Google Business Profile mistakes quietly costing you enquiries",
    excerpt:
      "Your Business Profile is often the first thing a prospect sees — sometimes before they've visited your website at all. Here are the specific, common mistakes that undermine it, and how to check yours in the next five minutes.",
    date: "22 August 2026",
    readingTime: "5 min read",
    body: [
      {
        type: "p",
        text: "For most local searches, your Google Business Profile is the first real impression you make — often well before anyone clicks through to your actual website. Profile completeness and accuracy is measured as one of the biggest factors in local search ranking, which means a sloppy profile doesn't just look bad. It actively holds your visibility back, regardless of how good your site is.",
      },
      {
        type: "p",
        text: "We audit these constantly, and the same handful of mistakes show up again and again — almost always unintentional, almost always fixable in minutes.",
      },
      {
        type: "h2",
        text: "1. Categories that are close, but not exact",
      },
      {
        type: "p",
        text: "\"Real estate agency\" and \"Real estate agents\" sound interchangeable. They're not the same category to Google, and picking the near-enough option instead of the precise one is one of the most common — and most avoidable — mistakes we find. Your primary category should be the single most accurate description of what you do, not the first plausible option in the dropdown.",
      },
      {
        type: "h2",
        text: "2. Hours that are wrong more often than they're right",
      },
      {
        type: "p",
        text: "Bank holiday hours never get updated. Seasonal changes never make it in. A prospect who turns up — or calls — during what your profile claims are open hours, only to find you closed, doesn't file a polite complaint. They just go to the next name on the list. This is the single easiest thing on this list to fix, and the one we see go stale the most.",
      },
      {
        type: "h2",
        text: "3. NAP inconsistency across the web",
      },
      {
        type: "p",
        text: "\"NAP\" — name, address, phone number — needs to match exactly everywhere your business appears: your website, Bing, Apple, your listings on Rightmove or Zoopla, Companies House, review sites, local directories. A mismatch here isn't cosmetic. It's a measured, confirmed local ranking factor, and every inconsistency quietly works against you. Search \"[your business name] [your town]\" and check the first two pages of results by hand — you'll usually find at least one old address or a defunct phone number still floating around.",
      },
      {
        type: "h2",
        text: "4. A profile that looks abandoned",
      },
      {
        type: "p",
        text: "Google and Apple both reward profiles that look genuinely active — a recent post, an answered question, a fresh photo — and quietly downrank ones that look untouched. Activity and freshness are a measured part of how these platforms decide your local visibility. You don't need a content calendar for this. A short update once every few weeks is enough to keep a profile looking alive rather than abandoned.",
      },
      {
        type: "h2",
        text: "5. Apple Business Connect, unclaimed",
      },
      {
        type: "p",
        text: "This is the one almost nobody has done. Roughly a third of UK web traffic happens on Safari, and over half of UK mobile browsing happens on it — yet most property businesses have never claimed their Apple Business Connect listing at all. It costs nothing and takes minutes, and because so few competitors have bothered, it's currently one of the easiest wins available in local search.",
      },
      {
        type: "h2",
        text: "Five minutes, right now",
      },
      {
        type: "p",
        text: "Open your Google Business Profile and check your category, your hours, and the last time you posted anything. Then search your own business name and skim the first two pages for an old address or number. If anything on this list is wrong, it's costing you enquiries today, not hypothetically — fix what you find before you do anything else.",
      },
    ],
  },
  {
    slug: "getting-more-google-reviews",
    title: "How to actually get more Google reviews (without breaking the rules)",
    excerpt:
      "Google explicitly bans incentivising reviews, and it can tell when review patterns look manufactured. Here's what genuinely works instead — the timing, the ask, and the follow-up that turns satisfied customers into reviewers.",
    date: "8 August 2026",
    readingTime: "5 min read",
    body: [
      {
        type: "p",
        text: "Most businesses know they should have more reviews. Far fewer have a real system for getting them — so review count stays roughly flat while every other part of the business grows. That gap is almost always a process problem, not a service-quality problem.",
      },
      {
        type: "h2",
        text: "What doesn't work (and can get you penalised)",
      },
      {
        type: "p",
        text: "Google's policy is explicit: no offering money, discounts, or anything of value in exchange for a review, positive or otherwise. Beyond the policy risk, Google's systems are genuinely good at spotting unnatural patterns — a sudden cluster of five-star reviews all posted the same week reads as manufactured, whether it actually was or not, and can trigger review removal or a ranking penalty. Gate-keeping is banned too — funnelling only happy customers to a public review link while quietly diverting unhappy ones elsewhere is against the rules and, if noticed, damages trust worse than a handful of honest three-star reviews ever would.",
      },
      {
        type: "h2",
        text: "What actually works",
      },
      {
        type: "list",
        items: [
          "Ask at the actual moment of value — right after keys are handed over, right after a sale completes, right after a tenancy starts smoothly. That's the single highest-converting moment there is, and it's exactly the moment most businesses forget to ask, because everyone's focused on the next thing.",
          "Make the ask absurdly easy. A direct link that opens straight to the review box, sent by text rather than buried in an email, removes almost every point of friction that stops someone who genuinely meant to leave one.",
          "Automate a single, gentle follow-up. Most people who don't respond the first time aren't refusing — they meant to and forgot. One reminder, a few days later, recovers a meaningful share of those.",
          "Ask everyone, not just the customers you're confident about. A steady mix of five- and four-star reviews reads as far more credible than an unbroken wall of five-star ratings — and 74% of consumers specifically look for reviews written in the last three months, so consistency matters more than perfection.",
        ],
      },
      {
        type: "h2",
        text: "Why this compounds beyond reputation",
      },
      {
        type: "p",
        text: "Review count and recency aren't just a trust signal for humans reading your profile — they're a direct, confirmed local search ranking factor, and increasingly a threshold AI tools use to decide whether a business is even worth naming. A competitor gaining ten genuine reviews a month can out-rank a business sitting on two hundred reviews from three years ago. Momentum beats volume.",
      },
      {
        type: "p",
        text: "None of this requires a big system. It requires one clear moment to ask, one easy link, and one follow-up you don't forget to send. Most agencies already do the hard part — a genuinely good service. The reviews are just sitting there, unasked for.",
      },
    ],
  },
  {
    slug: "ai-search-2026-property",
    title: "What AI search actually means for property businesses right now",
    excerpt:
      "Not the theory — the specifics. Where people are actually asking AI tools about property decisions today, what's changed in the last year, and what's worth acting on now versus waiting on.",
    date: "18 July 2026",
    readingTime: "7 min read",
    body: [
      {
        type: "p",
        text: "\"AI is changing search\" has been said so often it's started to sound like background noise — vague enough to nod along to and ignore. So here's the specific, current version, stripped of the hype: where this is actually showing up in how people search for property services, and what's genuinely worth doing about it this year.",
      },
      {
        type: "h2",
        text: "It's not just chatbots",
      },
      {
        type: "p",
        text: "The obvious shift is people typing questions straight into ChatGPT instead of Google. That's real, but it's the smaller half of the story. A normal Google search now frequently returns an AI Overview — powered by Gemini — sitting directly above the traditional results, answering the question before anyone clicks through to a website at all. Microsoft Edge does the same thing through Copilot. On iPhone, Siri and Spotlight are moving the same direction: increasingly answering directly rather than pointing to a page. The behaviour people associate with \"using ChatGPT\" is quietly happening inside search engines and operating systems most people never think of as AI products.",
      },
      {
        type: "h2",
        text: "The fragmentation nobody expects",
      },
      {
        type: "p",
        text: "Here's the finding that surprises almost everyone we show it to: only 11% of businesses cited by one AI tool are also cited by another. Being named by ChatGPT tells you close to nothing about whether Gemini, Perplexity, or Copilot have ever heard of you. Most businesses that have checked their AI visibility at all checked exactly one tool, assumed the result generalised, and stopped looking. It doesn't generalise. Each system is pulling from different sources, weighting different signals, and reaching different conclusions — which means \"are we visible to AI\" isn't a single yes-or-no question, it's four separate ones.",
      },
      {
        type: "h2",
        text: "Where AI actually gets its information",
      },
      {
        type: "p",
        text: "This is the part most businesses get backwards. Roughly 77% of what AI cites about a specific business isn't pulled from that business's own website at all — it's forums, review platforms, local directories, community discussion. Pouring effort into your own site while ignoring where you're discussed everywhere else means optimising for a minority of what AI actually reads about you.",
      },
      {
        type: "h2",
        text: "What's worth doing now versus later",
      },
      {
        type: "p",
        text: "Worth doing now: confirming AI crawlers can actually reach your site (a genuinely common, silent failure), adding structured data so AI has accurate facts to work from rather than guesswork, and checking your review consistency across the platforms AI actually draws from — not just Google.",
      },
      {
        type: "p",
        text: "Worth watching rather than chasing yet: hyper-specific optimisation for any single AI tool's current quirks. These systems are changing quickly enough that chasing this month's exact behaviour of one model is a weaker bet than getting the fundamentals — crawler access, structured facts, consistent reviews — solid across all of them at once.",
      },
      {
        type: "h2",
        text: "The actual opportunity",
      },
      {
        type: "p",
        text: "56% of local businesses haven't adjusted anything for AI-driven search at all. That's not a reason to relax — it's the opposite. It means most of the property industry is about to be caught flat-footed by a shift that's already well underway, and the businesses that move now get a genuine window most competitors won't notice they've missed until it's already closed.",
      },
    ],
  },
  {
    slug: "schema-markup-explained",
    title: "Schema markup for estate agents, explained without the jargon",
    excerpt:
      "\"Schema\" gets thrown around constantly in SEO conversations with almost no explanation of what it actually does. Here's the plain version — what it is, why it earns you better-looking search results, and how it applies specifically to property listings.",
    date: "30 June 2026",
    readingTime: "6 min read",
    body: [
      {
        type: "p",
        text: "If you've had an SEO conversation in the last few years, \"schema\" has come up, usually without much explanation of what it actually is. That vagueness is doing agencies a disservice, because schema is one of the more concretely useful things you can do to a website — and one of the easier ones to understand once someone actually explains it properly.",
      },
      {
        type: "h2",
        text: "What it actually is",
      },
      {
        type: "p",
        text: "Schema is a hidden layer of code added to a webpage that labels information in a format search engines can read with certainty, rather than inferring it from context. Without schema, a search engine looking at a property listing has to guess at what's a price, what's a bedroom count, what's a location — usually gets it broadly right, but from inference, not fact. With schema, the page explicitly declares: this number is the price, this number is the bedroom count, this text is the location. No inference required.",
      },
      {
        type: "h2",
        text: "Why it's worth the effort",
      },
      {
        type: "p",
        text: "The direct payoff is rich results — the enhanced search listings that show extra detail like star ratings, price, or availability right inside the search results page, rather than a plain blue link. Pages with properly implemented schema see click-through rates increase by 20–30%, because a listing that visibly shows its price and rating in the results gets clicked over a plain link sitting right next to it, even at the same ranking position.",
      },
      {
        type: "p",
        text: "There's a second, quieter payoff that matters even more now: this is exactly the kind of structured, unambiguous fact that AI tools rely on when deciding what to say about a business. A page that clearly states its ratings, its location, and its service area through schema gives AI something solid to cite. A page that only implies the same information through paragraph text gives AI something to guess at — and AI tools increasingly just skip past what they can't verify with confidence.",
      },
      {
        type: "h2",
        text: "Where this applies specifically to property listings",
      },
      {
        type: "list",
        items: [
          "A general business schema across the whole site, so search engines and AI tools have a clear, structured answer to \"what is this business, and where does it operate\".",
          "A dedicated listing template covering price, bedrooms, property type, and location — applied automatically to every property you publish, not added by hand each time.",
          "Review and rating schema, which declares your genuine review score and count as verified fact rather than background text — with the correct attribution back to where the reviews actually came from, since both AI and search engines discount ratings that look self-published.",
        ],
      },
      {
        type: "h2",
        text: "The part that actually breaks over time",
      },
      {
        type: "p",
        text: "Here's what rarely gets mentioned: implementing schema once is not the same as it working forever. Websites get redesigned, platforms update their templates, and search engines occasionally shift what they expect from this code — any of which can silently break the automation without anything visibly changing on the page itself. A listing can carry on publishing normally while its schema quietly stops working, and the ranking advantage disappears without an obvious cause. Checking this periodically, not just building it once, is the difference between schema that keeps earning its value and schema that quietly stopped mattering eighteen months ago.",
      },
    ],
  },
];
