export type Benefit = {
  slug: string;
  label: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    slug: "speed-availability",
    label: "Never miss an enquiry",
    description:
      "Every unanswered message is lost revenue. Reyse replies in seconds — nights, weekends and peak season included.",
  },
  {
    slug: "quality-consistency",
    label: "Consistent, on-brand answers",
    description:
      "The same accurate, on-brand reply every time, with sales technique built in — not just information.",
  },
  {
    slug: "efficiency-wellbeing",
    label: "Time back for your team",
    description:
      "Repetitive questions handled automatically, so you scale without burnout or extra hires.",
  },
  {
    slug: "revenue-conversion",
    label: "Built to convert",
    description:
      "Qualifies leads and catches half-finished bookings. Sub-1-hour response lifts conversion by 25% — and can drive up to 116% more bookings.",
  },
  {
    slug: "reach-insight",
    label: "Speaks their language",
    description:
      "Multi-language replies, plus visibility into the questions customers actually ask.",
  },
  {
    slug: "local-discovery",
    label: "Wins at peak intent",
    description:
      "Captures leads straight from Google Maps and local search, and keeps your response rate — and ranking — healthy.",
  },
  {
    slug: "reputation",
    label: "Protects your reputation",
    description:
      "Fast, consistent replies to every Google and Trustpilot review, without eating into anyone's day.",
  },
  {
    slug: "future-discovery",
    label: "Ready for how search is changing",
    description:
      "Discoverable inside ChatGPT while almost no property business has a presence there yet.",
  },
  {
    slug: "internal-ops",
    label: "Answers for your team too",
    description:
      "Staff get instant answers to internal questions, without pinging a colleague or digging through docs.",
  },
];
