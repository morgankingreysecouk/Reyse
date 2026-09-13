// The bonus stack: only unlocked by getting all 5 products together (the
// "full system"), never for a single a-la-carte product. Every item here
// is the same underlying feature already built into Reviews or Market
// Intelligence — this is a value-stack presentation of it, not a
// separate deliverable, and not a rewrite of what those products include
// on their own. Values set by Claude at Morgan's explicit request
// (2026-09-13) — see task #20 for the reasoning behind each figure.

export type BonusStackItem = {
  title: string;
  value: string;
  cadence: "per month" | "one-off";
  stat: string;
};

export const bonusStack: BonusStackItem[] = [
  {
    title: "AI Review Responder",
    value: "£299",
    cadence: "per month",
    stat: "Only 54% of reviews get any response at all.",
  },
  {
    title: "Automatic Review Reminders",
    value: "£249",
    cadence: "per month",
    stat: "74% of consumers specifically look for reviews from the last three months.",
  },
  {
    title: "Review Monitoring & Reporting",
    value: "£199",
    cadence: "per month",
    stat: "Consistent responses lift average ratings 0.3–0.7★ within six months.",
  },
  {
    title: "Sentiment & Theme Analysis",
    value: "£199",
    cadence: "per month",
    stat: "87% of unhappy customers contact a business directly before ever posting a negative review.",
  },
  {
    title: "Reputation Crisis Response",
    value: "£349",
    cadence: "per month",
    stat: "A response within 4 hours is 3× more likely to get a rating updated.",
  },
  {
    title: "Competitor Benchmark Report",
    value: "£249",
    cadence: "per month",
    stat: "The top 20% of local businesses capture 68% of all search visibility.",
  },
  {
    title: "Conversion Tracking Setup",
    value: "£299",
    cadence: "one-off",
    stat: "Without it, there's no way to prove which platform actually generated a real enquiry.",
  },
];

export const bonusStackMonthlyTotal = bonusStack
  .filter((item) => item.cadence === "per month")
  .reduce((sum, item) => sum + Number(item.value.replace("£", "")), 0);

export const bonusStackOneOffTotal = bonusStack
  .filter((item) => item.cadence === "one-off")
  .reduce((sum, item) => sum + Number(item.value.replace("£", "")), 0);
