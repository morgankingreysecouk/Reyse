import Reveal from "./Reveal";

// Every answer here restates something already stated elsewhere on the
// site (Terms, Privacy, About, /free-forever) — nothing new is asserted,
// this just surfaces it at the moment a hesitant visitor actually needs
// it, right before the final ask.
const faqs = [
  {
    question: "How much does this actually cost?",
    answer:
      "Pricing depends on which service and tier fits your business, and right now the first five clients — one per county — get the full service free, permanently. Tell us about your business through the get-started form and we'll talk you through exact pricing for your situation.",
  },
  {
    question: "Am I locked into a long contract?",
    answer:
      "One-off (Foundation) work simply ends once it's delivered — no ongoing commitment. Ongoing (Growth) subscriptions run until either side ends them, with 30 days' notice unless your order form says otherwise. There's no multi-year lock-in.",
  },
  {
    question: "Is this actually a real agency, or just AI?",
    answer:
      "It's one person right now — Morgan King, two years on the lettings desk before this, then a full year of daily research into how AI search actually works, before Reyse existed as a product. AI tools are used throughout the service, but a human reviews anything published in your business's name before it goes live, unless you've agreed a fully automated workflow in writing.",
  },
  {
    question: "Do you guarantee rankings or AI mentions?",
    answer:
      "No — and be wary of anyone who does. Google, Bing, and every AI provider make the final call, not us. What we commit to is doing the work to a good professional standard and being straight with you about what's realistically moving and what isn't, month to month.",
  },
  {
    question: "If I cancel, do you undo what you've built?",
    answer:
      "No. Active implementation work stops, but changes already live — schema, corrected listings, updated profiles — stay live. You keep what's already been delivered and paid for.",
  },
  {
    question: "Who sees my business and customer data?",
    answer:
      "Just us, as your data processor, acting only on your instructions — never sold, never shared beyond the specific tools needed to run the service (detailed in full in the Privacy Policy). Where we handle your customers' data, you stay the data controller throughout.",
  },
  {
    question: "I'm not sure which service I actually need — where do I start?",
    answer:
      "Take the 60-second quiz — five quick questions about where your business actually stands today, no email required until you're ready to talk.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Faq() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl divide-y divide-border">
        {faqs.map((faq, i) => (
          <Reveal key={faq.question} delay={i * 40}>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground marker:content-none">
                {faq.question}
                <svg
                  viewBox="0 0 16 16"
                  className="h-4 w-4 shrink-0 text-foreground/50 transition-transform duration-200 group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M8 3.5v9M3.5 8h9" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-foreground/70">{faq.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </>
  );
}
