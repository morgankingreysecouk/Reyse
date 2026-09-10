export type Industry = {
  slug: string;
  label: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Concrete, specific moments this industry actually runs into — not generic filler. */
  scenarios: string[];
};

export const industries: Industry[] = [
  {
    slug: "estate-agents",
    label: "Estate agents",
    tagline: "Get recommended by Google and AI before the call ever comes in.",
    description:
      "Buyers now ask ChatGPT, Google's AI Overviews and Perplexity who the best local agent is before they browse a single listing. Reyse gets your visibility and reviews in shape so you're the name they're told — not a competitor down the road.",
    image: "/images/industries/estate-agents.jpg",
    imageAlt: "An estate agent handing over keys outside a house at dusk, with a For Sale board in view",
    scenarios: [
      "A seller Googles \"best estate agent in [town]\" before instructing anyone — if your profile isn't complete and your reviews aren't current, you're not even in the conversation.",
      "A buyer asks ChatGPT to compare local agents before calling any of them. Most agents have never once checked what it actually says back.",
      "A five-star review sits unanswered for three weeks. Response activity is a confirmed local ranking factor — every one left unanswered is a small, avoidable cost to your visibility.",
    ],
  },
  {
    slug: "letting-agents",
    label: "Letting agents",
    tagline: "Be the letting agent tenants and AI find first.",
    description:
      "Tenants search \"best letting agent in [town]\" on Google and increasingly ask AI the same question. Reyse fixes your visibility across search, listings and profiles, and keeps your reviews answered, so vacancies get filled by people who found you first.",
    image: "/images/industries/letting-agents.jpg",
    imageAlt: "Someone handing over a set of keys outside a front door at night, with a To Let sign in the background",
    scenarios: [
      "A tenant asks ChatGPT \"best letting agent near [university/town]\" the week before term starts — a genuinely high-intent moment most agents never show up for.",
      "Your Google Business Profile hours are still set from last bank holiday, and a would-be tenant rings during what your listing says are your closed hours.",
      "A void period runs an extra fortnight because the listing that filled it last time never made it into AI search results at all.",
    ],
  },
  {
    slug: "property-management",
    label: "Property management",
    tagline: "Stay the trusted name residents and boards find and recommend.",
    description:
      "Residents and boards check reviews and search results before choosing — and after every interaction. Reyse strengthens your visibility across Google and AI search and makes sure every review gets a considered, on-brand reply.",
    image: "/images/industries/property-management.jpg",
    imageAlt: "A property manager reviewing paperwork with keys on the desk",
    scenarios: [
      "A resident association compares management companies before a contract renewal — and reads the last six months of reviews and responses before anyone picks up the phone.",
      "A maintenance complaint turns into a public review. Left unanswered, it sits there for every future prospect to read first.",
      "A board asks their own AI assistant to summarise feedback on your company — built entirely from whatever's public, whether or not it's the full picture.",
    ],
  },
  {
    slug: "new-homes-developers",
    label: "New homes & developers",
    tagline: "Get your development found before ground's even broken.",
    description:
      "Buyers research developments on Google and ask AI tools to compare them long before they visit a show home. Reyse makes sure your development shows up — and that early reviews build the reputation that gets plots reserved.",
    image: "/images/industries/new-homes-developers.jpg",
    imageAlt: "A modern new-build house at dusk with lit windows",
    scenarios: [
      "A buyer asks Gemini or ChatGPT to compare new developments in an area months before any show home opens — reputation is being built, or lost, before you've laid a brick.",
      "Early reservations stall because there isn't a single verified review anywhere yet, and nothing on the development's own pages is structured for AI to read confidently.",
      "A competitor development three miles away gets named as the recommendation, not because it's better, but because it's the only one AI tools can actually find anything solid about.",
    ],
  },
  {
    slug: "short-term-lets",
    label: "Short-term lets",
    tagline: "Win the booking before a review ever gets left.",
    description:
      "Guests compare short-term lets on Google, AI search and reviews before they book. Reyse keeps your listings visible and every review answered quickly, so a five-star reputation keeps driving bookings on its own.",
    image: "/images/industries/short-term-lets.jpg",
    imageAlt: "A cosy short-term rental living space with warm evening lighting",
    scenarios: [
      "A guest asks an AI assistant to \"find a well-reviewed short-term let near [location]\" — 77% of what AI cites about a business isn't even pulled from that business's own site, so your review consistency elsewhere matters more than your listing copy.",
      "A brilliant stay ends with no review at all, because nobody asked at the one moment guests are actually willing to leave one.",
      "A single unresolved complaint sits public and unanswered for months, quietly costing bookings from every guest who reads reviews before they book.",
    ],
  },
  {
    slug: "wedding-event-venues",
    label: "Wedding & event venues",
    tagline: "Be the venue Google and AI suggest for their big day.",
    description:
      "Couples research venues for months, comparing reviews and asking AI tools for recommendations long before they enquire. Reyse builds your visibility across search and keeps your reviews answered, so you're front of mind while they're still deciding.",
    image: "/images/industries/wedding-event-venues.jpg",
    imageAlt: "An elegant event venue set up for a wedding celebration",
    scenarios: [
      "A couple spends months shortlisting venues, asking ChatGPT to compare options against their budget and guest count — a conversation your venue needs to already be part of.",
      "A five-star review from last summer's wedding never gets a reply, while a venue down the road replies to every single one and edges ahead on the exact ranking signal that costs nothing to fix.",
      "Your Apple Business Connect listing has never been claimed, quietly missing the roughly one in four browsing sessions that happen on Safari and iPhone.",
    ],
  },
  {
    slug: "student-accommodation",
    label: "Student accommodation",
    tagline: "Be the accommodation students find — and trust — first.",
    description:
      "Students and parents search hard during intake season, checking Google, reviews and increasingly AI tools before committing. Reyse gets your visibility and review responses in shape well before the rush, so you're the trusted option when it matters most.",
    image: "/images/industries/student-accommodation.jpg",
    imageAlt: "Modern student accommodation building exterior",
    scenarios: [
      "A parent asks an AI assistant which student accommodation near a university has the best safety and management reputation — and reads whatever it says as fact, however it was sourced.",
      "Clearing week hits and your listings are exactly as visible as they were in the quiet months, while a competitor freshened theirs up in time for the rush.",
      "A cluster of move-in-week reviews goes unanswered during the one period of the year prospective tenants are actually reading them closely.",
    ],
  },
  {
    slug: "holiday-parks",
    label: "Holiday parks",
    tagline: "Get found before every peak season starts.",
    description:
      "Holidaymakers search and compare parks on Google and AI tools long before booking, and reviews make or break the decision. Reyse keeps your visibility strong and your reviews answered, so pitches and lodges fill up before the season even begins.",
    image: "/images/industries/holiday-parks.jpg",
    imageAlt: "A scenic holiday park setting with lodges among trees",
    scenarios: [
      "A family asks ChatGPT to suggest a dog-friendly holiday park with a good play area — a direct, high-intent question most parks have never checked whether they'd even be mentioned for.",
      "Bookings open for next season while your Google Business Profile still shows last year's opening hours and an outdated site plan.",
      "A damp-weekend review sits unanswered into peak booking season, exactly when the most people are reading it.",
    ],
  },
  {
    slug: "self-storage",
    label: "Self-storage",
    tagline: "Be the self-storage unit that shows up first, locally.",
    description:
      "\"Storage near me\" searches are won by visibility and trust. Reyse gets your business properly set up across Google, Bing and AI search, and makes sure every review is answered — so the search near you finds you, not a competitor.",
    image: "/images/industries/self-storage.jpg",
    imageAlt: "Rows of self-storage units",
    scenarios: [
      "Someone mid-move searches \"storage near me\" on their phone right now — a same-day decision won almost entirely on local visibility and trust, not brand.",
      "Your business name, address, and phone number don't quite match across Google, Bing, and your own listings — a mismatch that's measured as a genuine ranking factor against you.",
      "A competitor with fewer units but a fresher, more consistently answered set of reviews outranks you for the exact search that used to be yours.",
    ],
  },
  {
    slug: "holiday-rental-agencies",
    label: "Holiday rental agencies",
    tagline: "Get every property in your portfolio found and trusted.",
    description:
      "Guests search dozens of individual properties and compare reviews across your whole portfolio before booking. Reyse makes sure each one is visible in search and AI recommendations, and that reviews across the board are consistently answered.",
    image: "/images/industries/holiday-rental-agencies.jpg",
    imageAlt: "A collection of holiday rental properties",
    scenarios: [
      "A guest compares your portfolio's overall review consistency against a rival agency's before booking any single property — one unanswered cluster drags the whole brand down, not just one listing.",
      "One property in the portfolio is invisible to AI search entirely because of a technical crawler block nobody's checked in years — while the other forty are fine.",
      "A returning guest asks an AI assistant to find them \"something similar\" to a stay they loved — and it recommends a different agency, because yours was never structured for AI to make that connection.",
    ],
  },
  {
    slug: "campsites-glamping",
    label: "Campsites & glamping",
    tagline: "Get pitches booked before the good weather hits.",
    description:
      "Campers and glampers search and compare on Google and AI tools well ahead of peak season, and reviews are often the deciding factor. Reyse builds your visibility across search and keeps every review answered, so you're booked out before the rush.",
    image: "/images/industries/campsites-glamping.jpg",
    imageAlt: "A glamping site with tents set among trees",
    scenarios: [
      "A first-time glamper asks ChatGPT to recommend a site with hot showers and good reviews within an hour's drive — exact-intent traffic most sites have no idea whether they're capturing.",
      "A muddy-weekend review sits unanswered right as next season's early bookers start reading through last year's feedback.",
      "Your pitch availability updates on your own site but never makes it into how AI tools describe your season — so people are told you're full when you're not.",
    ],
  },
];
