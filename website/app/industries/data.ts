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
    // Higgsfield brief: An estate agent handing over keys outside a house
    // on a bright, sunny day, a "For Sale" board clearly in view. Warm
    // daylight, blue sky — inviting, not moody. 4:5 portrait.
    image: "/images/industries/estate-agents.jpg",
    imageAlt: "An estate agent handing over keys outside a house in bright daylight, with a For Sale board in view",
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
    // Higgsfield brief: Someone handing over a set of keys outside a front
    // door in warm daytime light, a "To Let" sign visible in the
    // background. Bright and welcoming — golden-hour, not night. 4:5
    // portrait.
    image: "/images/industries/letting-agents.jpg",
    imageAlt: "Someone handing over a set of keys outside a front door in warm daylight, with a To Let sign in the background",
    scenarios: [
      "A tenant asks ChatGPT \"best letting agent near [university/town]\" the week before term starts — a genuinely high-intent moment most agents never show up for.",
      "Your Google Business Profile hours are still set from last bank holiday, and a would-be tenant rings during what your listing says are your closed hours.",
      "A void period runs an extra fortnight because the listing that filled it last time never made it into AI search results at all.",
    ],
  },
];
