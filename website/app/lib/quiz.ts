import { industries } from "../industries/data";
import { products, type Product } from "../products/data";

export type ProductSlug = Product["slug"];

export type QuizOption = {
  value: string;
  label: string;
  scores?: Partial<Record<ProductSlug, number>>;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: QuizOption[];
};

export const businessTypeOptions = industries.map((industry) => ({
  value: industry.slug,
  label: industry.label,
}));

export const questions: QuizQuestion[] = [
  {
    id: "google",
    question: "When someone searches for a business like yours on Google, are you easy to find?",
    options: [
      { value: "confident", label: "Yes, we rank well", scores: { "market-intelligence": 1 } },
      { value: "not-sure", label: "Not sure — never really checked", scores: { seo: 1, "market-intelligence": 1 } },
      { value: "hard", label: "No, we're hard to find", scores: { seo: 2 } },
    ],
  },
  {
    id: "ai",
    question: "Have you checked what ChatGPT, Gemini or Copilot say about your business?",
    options: [
      { value: "visible", label: "Yes, and we show up", scores: { "market-intelligence": 1 } },
      { value: "invisible", label: "Yes, and we're invisible", scores: { geo: 2 } },
      { value: "never", label: "No, never checked", scores: { geo: 2 } },
    ],
  },
  {
    id: "reviews",
    question: "How do you handle reviews today?",
    options: [
      { value: "always", label: "We reply to every single one, fast", scores: { "market-intelligence": 1 } },
      { value: "sometimes", label: "We reply sometimes, when we remember", scores: { reviews: 1 } },
      { value: "rarely", label: "Honestly, we don't manage this much", scores: { reviews: 2 } },
    ],
  },
  {
    id: "branches",
    question: "How many branches or locations do you have?",
    options: [
      { value: "one", label: "Just one", scores: {} },
      { value: "few", label: "A few (2–9)", scores: { scale: 1 } },
      { value: "many", label: "Many (10+)", scores: { scale: 3 } },
    ],
  },
];

// Tie-break priority when scores are equal — GEO and SEO surface real, fixable
// gaps most businesses have never checked; Market Intelligence and Scale are
// usually a second step once the basics are in place.
const priority: ProductSlug[] = ["geo", "seo", "reviews", "market-intelligence", "scale"];

export function scoreQuiz(answers: Record<string, string>) {
  const scores: Record<ProductSlug, number> = {
    seo: 0,
    geo: 0,
    reviews: 0,
    "market-intelligence": 0,
    scale: 0,
  };

  for (const q of questions) {
    const chosen = q.options.find((o) => o.value === answers[q.id]);
    if (!chosen?.scores) continue;
    for (const [slug, points] of Object.entries(chosen.scores)) {
      scores[slug as ProductSlug] += points ?? 0;
    }
  }

  const ranked = [...priority].sort((a, b) => scores[b] - scores[a] || priority.indexOf(a) - priority.indexOf(b));
  const primarySlug = ranked[0];
  const secondarySlug =
    scores[ranked[1]] > 0 && scores[ranked[0]] - scores[ranked[1]] <= 1 ? ranked[1] : null;

  const primary = products.find((p) => p.slug === primarySlug) as Product;
  const secondary = secondarySlug ? (products.find((p) => p.slug === secondarySlug) as Product) : null;

  return { primary, secondary, scores };
}

export function getIndustry(slug: string | undefined) {
  return industries.find((i) => i.slug === slug);
}
