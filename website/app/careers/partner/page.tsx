import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "The Partner Role",
  description: "Reyse is looking for one partner — real equity granted from day one, no salary, totally flexible hours, and a genuine hand in building the business.",
});

const notIs = [
  { not: "A fixed salary", is: "Real equity in the company" },
  { not: "A job with set hours", is: "Totally flexible — judged on what gets done, not hours logged" },
  { not: "Equity that vests slowly over years", is: "Granted from day one — no waiting, no vesting schedule" },
  { not: "A role that already exists, waiting to be filled", is: "A role you help build, alongside the founder" },
];

const faqs = [
  {
    question: "How much equity will I actually get?",
    answer: "That's a genuine conversation, not a number on this page — it depends on what you bring and how the partnership develops. What's fixed is the structure, not the amount: it's granted from day one, not vested gradually over years like most startup equity.",
  },
  {
    question: "Why grant it immediately instead of vesting it, like most startups do?",
    answer: "Because this is meant to be an actual partnership, not a conditional job offer with equity dangled at the end of it. That cuts both ways — it's real trust extended immediately, and real risk taken on both sides. We think that's the right way to start this, even though it's not the cautious option.",
  },
  {
    question: "Do I need estate agency or sales experience?",
    answer: "No. No specific experience is required. What matters more is whether you're a genuine self-starter — someone who can be handed ambiguity and just get on with it — and whether you're comfortable with the real uncertainty of something this early-stage.",
  },
  {
    question: "What would I actually be doing day to day?",
    answer: "The same things the founder does — sales, marketing, fulfillment, and everything in between. There's no defined job description to hand you, because the structure itself is still being built. That's genuinely more interesting for the right person, and genuinely harder.",
  },
  {
    question: "What does “totally flexible hours” mean in practice?",
    answer: "No clocking in, no fixed schedule, no minimum hours tracked. It's judged on what actually gets done, not time logged — as much or as little as the work genuinely needs.",
  },
  {
    question: "Do I need to be based in the UK?",
    answer: "Yes. This is remote-first day to day, but being UK-based and able to meet in person when it's actually useful matters for a partnership this close.",
  },
  {
    question: "What happens after I email?",
    answer: "A conversation, first. No form, no formal pipeline, no interview process to navigate — just a real discussion about what you'd bring and whether it makes sense for both of us.",
  },
  {
    question: "Can I really afford to do this?",
    answer: "Be honest with yourself about this one before anything else: no salary means no salary. This only works if you can genuinely support yourself independently while this gets built. That's not a small ask, and we'd rather you rule yourself out now, honestly, than three months in.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function PartnerRolePage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="relative overflow-hidden border-b border-border bg-ink px-6 pb-24 pt-40 text-ink-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(rgba(250,248,242,0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(60% 60% at 50% 35%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(60% 60% at 50% 35%, black 40%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <Link href="/careers" className="text-sm text-ink-foreground/60 hover:text-ink-foreground">
            ← Careers
          </Link>
          <p className="mb-4 mt-4 inline-block rounded-full border border-ink-foreground/20 px-3 py-1 text-xs font-medium text-ink-foreground/70">
            Now hiring
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            One partner. Real equity. No salary.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-foreground/70">
            Not an employee, not a co-founder with a different name on the
            door — a genuine partner, with real ownership, granted from day
            one. Here&rsquo;s exactly what that means.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#the-deal"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              See the actual terms
            </a>
            <a
              href="#faq"
              className="rounded-full border border-ink-foreground/20 px-6 py-3 text-sm font-medium hover:border-ink-foreground/40"
            >
              Read the FAQ
            </a>
          </div>
        </div>
      </div>

      <div id="the-deal" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
              What this actually is
            </p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl leading-[1.15] tracking-tight sm:text-4xl">
              Not a job with equity attached. A partnership.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {notIs.map((row, i) => (
              <Reveal key={row.not} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-panel p-6">
                  <div className="flex items-start gap-3 opacity-60">
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-foreground/30 text-foreground/50"
                    >
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <p className="text-sm font-medium text-foreground line-through decoration-foreground/40">
                      {row.not}
                    </p>
                  </div>
                  <div className="my-4 border-t border-dashed border-border" />
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-text"
                    >
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p className="text-sm font-medium text-foreground">{row.is}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-panel px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-10 sm:grid-cols-[1fr_280px] sm:gap-16">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
                Equity
              </p>
              <h2 className="mt-3 font-heading text-2xl leading-[1.2] tracking-tight sm:text-3xl">
                No fixed number. A real conversation instead.
              </h2>
              <div className="mt-5 space-y-4 text-foreground/70">
                <p>
                  The exact amount isn&rsquo;t decided in advance — it depends
                  on what you bring and how the partnership develops, worked
                  out directly between us, not offered off a scale.
                </p>
                <p>
                  What is fixed is the structure: it&rsquo;s granted from day
                  one. Most startup equity vests gradually over several years,
                  specifically so a company can claw it back if things don&rsquo;t
                  work out. We&rsquo;re not doing that here. That&rsquo;s
                  real trust, extended immediately — and real risk, on both
                  sides, from the start.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-accent px-6 py-14 text-center text-accent-foreground">
                <p className="text-xs font-medium uppercase tracking-wide text-accent-foreground/70">
                  Vesting schedule
                </p>
                <p className="font-heading text-4xl leading-tight tracking-tight">
                  None
                </p>
                <p className="mx-auto mt-2 max-w-xs text-sm text-accent-foreground/80">
                  Granted from day one, not earned back over years.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="border-y border-border bg-ink px-6 py-20 text-ink-foreground">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-heading text-2xl leading-[1.4] tracking-tight sm:text-3xl">
              &ldquo;No salary means no salary.&rdquo;
            </p>
            <p className="mx-auto mt-5 max-w-xl text-sm text-ink-foreground/70">
              This only works if you can genuinely support yourself
              independently while this gets built. That&rsquo;s not a small
              ask — we&rsquo;d rather you rule yourself out now, honestly,
              than three months in.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
              What you&rsquo;d actually be doing
            </p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl leading-[1.15] tracking-tight sm:text-4xl">
              The same things the founder does. All of it.
            </h2>
          </Reveal>
          <div className="mt-10 max-w-2xl space-y-5 text-foreground/70">
            <Reveal delay={80}>
              <p>
                Sales, marketing, fulfillment — there&rsquo;s no narrow lane
                waiting for you, because Reyse is currently a company of one.
                Whatever needs doing to get the business from where it is now
                to where it needs to be, that&rsquo;s the job.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p>
                Hours are totally variable — no clocking in, no fixed
                schedule, no minimum tracked. It&rsquo;s judged on what
                actually gets done, not time logged. Remote-first day to day,
                but UK-based and able to meet in person when it&rsquo;s
                genuinely useful, since a partnership this close is harder to
                build entirely at a distance.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="bg-panel px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
              Who this is for
            </p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl leading-[1.15] tracking-tight sm:text-4xl">
              No experience required. These two things matter more.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Reveal delay={80}>
              <div className="h-full rounded-3xl border border-border bg-background p-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3v18M5 9l7-6 7 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="mt-4 text-lg font-semibold">
                  A genuine self-starter
                </h3>
                <p className="mt-2 text-sm text-foreground/70">
                  Someone who can be handed real ambiguity — no job
                  description, no manager checking in — and just get on with
                  it. There&rsquo;s no structure here yet to lean on; part of
                  the job is building it.
                </p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="h-full rounded-3xl border border-border bg-background p-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="mt-4 text-lg font-semibold">
                  Genuinely comfortable with early-stage risk
                </h3>
                <p className="mt-2 text-sm text-foreground/70">
                  No salary, no certainty, no guarantee this works. That&rsquo;s
                  the honest trade for equity granted immediately and a real
                  hand in building something from very little.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <p className="mx-auto mt-10 max-w-xl text-center text-sm text-foreground/60">
              No estate agency background, no sales certification, no
              specific CV required. UK-based, and genuinely those two traits
              — that&rsquo;s the actual list.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
              Where this all started
            </p>
            <h2 className="mt-3 font-heading text-2xl leading-[1.2] tracking-tight sm:text-3xl">
              A lettings desk, a bad reputation, and a business that
              didn&rsquo;t show up anywhere it was asked about.
            </h2>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent-text hover:opacity-80"
            >
              Read the full story
              <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>

      <div id="faq" className="bg-panel px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-heading text-2xl leading-[1.15] tracking-tight sm:text-3xl">
              Common questions
            </h2>
          </Reveal>
          <div className="mt-10 divide-y divide-border">
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
        </div>
      </div>

      <div className="px-6 py-24">
        <Reveal>
          <div className="mx-auto max-w-xl rounded-2xl border border-border bg-panel p-10 text-center">
            <h2 className="font-heading text-2xl leading-[1.15] tracking-tight sm:text-3xl">
              Interested?
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm text-foreground/65">
              Email directly — no form, no pipeline, just a real
              conversation about what you&rsquo;d bring.
            </p>
            <a
              href="mailto:morgan.king@reyse.co.uk?subject=Partner%20role%20at%20Reyse"
              className="mt-7 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              morgan.king@reyse.co.uk
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
