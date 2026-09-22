import Reveal from "./Reveal";

// Every answer here restates something already stated elsewhere on the
// site (Terms, Privacy, About, /guarantees, /system, /free-forever) —
// nothing new is asserted, this just surfaces it at the moment a
// hesitant visitor actually needs it, right before the final ask.
const faqs = [
  {
    question: "How much does this actually cost?",
    answer:
      "Pricing depends on which service and tier fits your business, and right now the first five clients — one per county — get the full service completely free while Reyse is at this early stage. Tell us about your business through the get-started form and we'll talk you through exact pricing for your situation.",
  },
  {
    question: "Am I locked into a long contract?",
    answer:
      "One-off (Done With You) work simply ends once it's delivered — no ongoing commitment. Ongoing (Done For You) subscriptions run until either side ends them — cancellation is immediate, no notice period, unless your order form says otherwise. There's no multi-year lock-in.",
  },
  {
    question: "What's the difference between SEO and GEO?",
    answer:
      "SEO is being found on traditional search engines — Google, Bing, Apple. GEO (Generative Engine Optimisation) is the newer discipline: making sure AI tools like ChatGPT and Perplexity recommend you directly when someone asks who to use. The two overlap heavily — technical fixes and trust signals help both — but AI visibility needs its own dedicated work on top, which is why they're separate products rather than one bundled thing.",
  },
  {
    question: "Can I get all 5 products together, or do I need to pick one?",
    answer:
      "Either. SEO, GEO, Review Management, Market & Competitive Intelligence, and Scale each work as their own product with their own Done With You / Done For You pricing. Or run all five together as the Full System, which unlocks a bonus stack only available to full-system clients — currently free for the first five agencies while Reyse is at this early stage.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Depends what you're measuring. Technical fixes — crawler access, trust signals, schema — go live within 5 working days of onboarding, guaranteed, or we pay you for every day we're late. Genuine new enquiries and AI visibility take longer to show, which is why our Growth and Visibility guarantees are both measured at the 3-month mark, not week one — with a real remedy if we miss either.",
  },
  {
    question: "Do you guarantee rankings or AI mentions?",
    answer:
      "We don't guarantee specific rankings or that you'll dominate every AI platform — Google, Bing, and every AI provider make that call, not us, and be wary of anyone who claims otherwise. What we do guarantee: baseline AI visibility within 3 months, backed by a real remedy if we miss it — see our Guarantees page for that one and ten others, each with a defined consequence if we fall short.",
  },
  {
    question: "Is this actually a real agency, or just AI?",
    answer:
      "It's one person right now — Morgan King, two years on the lettings desk before this, then a full year of daily research into how AI search actually works, before Reyse existed as a product. AI tools are used throughout the service, but a human reviews anything published in your business's name before it goes live, unless you've agreed a fully automated workflow in writing.",
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
      "Take the 60-second quiz — a handful of quick questions about where your business actually stands today, no email required until you're ready to talk.",
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
    <section className="border-t border-border">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <div className="text-center">
            <p className="mb-3 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
              FAQ
            </p>
            <h2 className="font-heading text-3xl leading-[1.1] tracking-tight sm:text-4xl">
              Questions people actually ask
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-foreground/60">
              The ones that come up before someone&rsquo;s ready to commit —
              answered plainly, with a link to the fuller detail where one
              exists.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 40}>
              <details className="group rounded-2xl border border-border bg-panel px-6 py-5">
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
      </div>
    </section>
  );
}
