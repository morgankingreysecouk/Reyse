import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import { pageMetadata } from "../lib/seo";
import { guarantees } from "./data";

export const metadata: Metadata = pageMetadata({
  title: "Guarantees",
  description: "Eleven specific, measurable guarantees — each with a real, enforceable cost to us if we don't meet it. Not vague reassurance you'd have to argue us into honouring.",
});

const controllables = [
  "How fast we work",
  "How visible you become",
  "How transparent we are",
  "How we behave when something goes wrong",
];

const claimSteps = [
  {
    title: "You don't have to catch us out.",
    text: "We track our own delivery against every guarantee on this page, and flag a miss to you the moment it happens — before you'd even need to ask.",
  },
  {
    title: "If you spot it first, that's fine too.",
    text: "No formal claims process, no form, no waiting period. WhatsApp, email, or a call — whichever you'd normally use — and say which guarantee you think we've missed.",
  },
  {
    title: "We confirm it within 1 working day.",
    text: "If it's genuinely missed, we say so immediately and tell you exactly what happens next and when.",
  },
  {
    title: "Actioned within 5 working days of confirmation.",
    text: "A payment, a donation, a free month, a booked photography shoot — whichever applies to that guarantee.",
  },
  {
    title: "Nothing difficult required from you.",
    text: "Most only ask that you gave us honest information at onboarding and reasonable access to what we need. We'll always say plainly if a guarantee depends on something from you.",
  },
];

const faqs = [
  {
    question: "Do I need to do anything to claim a guarantee?",
    answer:
      "Usually no. We track our own delivery against every guarantee on this page and flag a miss to you ourselves, before you'd need to notice or ask.",
  },
  {
    question: "What if I'm not sure whether a guarantee applies to my situation?",
    answer: "Ask us. There's no downside to checking, and we'd rather explain a \"no\" clearly than have you wonder.",
  },
  {
    question: "Can these guarantees change after I've signed up?",
    answer:
      "No. Whatever's live and published here when you join is what applies to you, for the full duration of your service with us — even if we later add or change what's offered to new clients.",
  },
  {
    question: "Why won't you guarantee a #1 ranking?",
    answer:
      "Because nobody honestly can — see \"The Honest Bit\" above. Anyone who guarantees a specific ranking position is either not telling you the truth, or setting you up for a guarantee they know they can quietly wriggle out of later.",
  },
  {
    question: "What happens if you miss more than one guarantee at the same time?",
    answer: "Each one is honoured independently and in full — missing one doesn't reduce or cap what you're owed under another.",
  },
  {
    question: "Do these guarantees cost extra, or are they part of the standard service?",
    answer: "Part of the standard service, for every client, at no extra cost — not a premium add-on.",
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

export default function GuaranteesPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="relative overflow-hidden border-b border-border bg-ink px-6 pb-24 pt-40 text-ink-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(45% 45% at 50% 25%, rgba(166,173,62,0.18), transparent 100%)",
          }}
        />
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
          <p className="mb-4 inline-block rounded-full border border-ink-foreground/20 px-3 py-1 text-xs font-medium text-ink-foreground/70">
            Guarantees
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            If we don&rsquo;t deliver, it doesn&rsquo;t cost you — it costs us.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-foreground/70">
            Still not convinced? We&rsquo;re confident enough in what we
            deliver that we&rsquo;ve built 11 specific, measurable guarantees
            around it — each with a real, enforceable cost to us if we
            don&rsquo;t meet it, not a vague promise you&rsquo;d have to
            argue us into honouring.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#the-11"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Read all 11
            </a>
            <a
              href="#honest-bit"
              className="rounded-full border border-ink-foreground/20 px-6 py-3 text-sm font-medium hover:border-ink-foreground/40"
            >
              The one thing we won&rsquo;t promise
            </a>
          </div>
        </div>
      </div>

      <div id="honest-bit" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
              The honest bit
            </p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl leading-[1.15] tracking-tight sm:text-4xl">
              Why we won&rsquo;t promise you #1.
            </h2>
          </Reveal>

          <div className="mt-12 grid items-start gap-10 sm:grid-cols-2 sm:gap-16">
            <Reveal>
              <div className="space-y-5 text-foreground/70">
                <p>
                  As much as I&rsquo;d love to guarantee your agency will be
                  number one on Google and with AI, I can&rsquo;t.
                  That&rsquo;s the single biggest problem with this entire
                  industry — anyone who does promise it is lying to you, and
                  there&rsquo;s a real reason why.
                </p>
                <p>
                  Go through our free guides and you&rsquo;ll understand
                  exactly why: there are factors here that are genuinely
                  outside anyone&rsquo;s control, ours included. Google
                  can — and regularly does — change how ranking works
                  without warning. OpenAI, Google, and Perplexity can each
                  shift how they decide who to recommend, overnight, with no
                  notice to anyone. Your competitor could hire someone
                  tomorrow and outspend you. None of that is something we
                  control. Nobody does — not us, not any agency claiming
                  otherwise.
                </p>
                <p>
                  What we do control is the work: watching these changes as
                  they happen, staying current on what&rsquo;s actually
                  moving the needle rather than what worked two years ago,
                  and doing everything within our power to keep you ahead of
                  the businesses that aren&rsquo;t paying this kind of
                  attention. That&rsquo;s the actual service. It&rsquo;s not
                  a magic switch — it&rsquo;s consistent, competent, honest
                  effort, applied specifically to your business, every
                  single month.
                </p>
                <p className="font-medium text-foreground">
                  If they still don&rsquo;t convince you how seriously we
                  take this, I&rsquo;ll personally get on a call or come and
                  meet you to prove it.
                </p>
                <p className="text-sm text-foreground/50">— Morgan King, Founder</p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-3xl border border-border bg-panel p-8">
                <div className="flex items-start gap-3 opacity-60">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-foreground/30 text-foreground/50"
                  >
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground line-through decoration-foreground/40">
                      A #1 ranking, guaranteed
                    </p>
                    <p className="mt-0.5 text-xs text-foreground/60">
                      Nobody can honestly promise this. Not us, not anyone.
                    </p>
                  </div>
                </div>

                <div className="my-6 border-t border-dashed border-border" />

                <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
                  What we guarantee instead
                </p>
                <div className="mt-4 space-y-3">
                  {controllables.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-text"
                      >
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <p className="text-sm font-medium text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="border-y border-border bg-ink px-6 py-20 text-ink-foreground">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-heading text-2xl leading-[1.4] tracking-tight sm:text-3xl">
              &ldquo;I&rsquo;ve built 11 specific guarantees — not around the
              one outcome nobody can honestly promise, but around everything
              that&rsquo;s actually within our control.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>

      <div className="bg-panel px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
                Using a guarantee
              </p>
              <h2 className="mt-3 font-heading text-3xl leading-[1.15] tracking-tight sm:text-4xl">
                How claiming one actually works.
              </h2>
              <p className="mt-4 text-foreground/70">
                We built these to be simple to use — a guarantee you have to
                fight for isn&rsquo;t really a guarantee.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 space-y-4">
            {claimSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 60}>
                <div className="flex flex-wrap gap-5 rounded-2xl border border-border bg-background p-6 sm:flex-nowrap sm:items-start">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 font-heading text-sm text-accent-text">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{step.title}</p>
                    <p className="mt-1 text-sm text-foreground/65">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div id="the-11" className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
              In full
            </p>
            <h2 className="mt-3 font-heading text-3xl leading-[1.15] tracking-tight sm:text-4xl">
              The 11 guarantees.
            </h2>
            <p className="mt-4 text-foreground/70">
              Every promise below names exactly what we&rsquo;re committing
              to and exactly what happens if we don&rsquo;t deliver it. Open
              any one for the worked example, how it&rsquo;s measured, and
              the full terms.
            </p>
          </Reveal>

          <div className="mt-14 space-y-6">
            {guarantees.map((g, i) => (
              <Reveal key={g.title} delay={Math.min(i, 6) * 40}>
                <div className="rounded-3xl border border-border p-6 sm:p-8">
                  <div className="flex gap-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 font-heading text-sm text-accent-text">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-heading text-xl leading-[1.15] tracking-tight">
                        {g.title}
                      </h3>
                      <p className="mt-3 font-medium text-foreground/90">{g.promise}</p>
                      <p className="mt-3 text-sm text-foreground/65">{g.context}</p>
                    </div>
                  </div>

                  <details className="group mt-5 border-t border-border pt-5 sm:pl-[3.75rem]">
                    <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-accent-text marker:content-none">
                      Example, how it&rsquo;s measured, and full terms
                      <svg
                        viewBox="0 0 16 16"
                        className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden="true"
                      >
                        <path d="M8 3.5v9M3.5 8h9" strokeLinecap="round" />
                      </svg>
                    </summary>
                    <div className="mt-5 space-y-5">
                      <div className="rounded-xl border border-accent/20 bg-accent/5 p-4">
                        <p className="text-xs font-medium text-accent-text">Example</p>
                        <p className="mt-1.5 text-sm text-foreground/70">{g.example}</p>
                      </div>
                      {g.measured && (
                        <div>
                          <p className="text-xs font-medium text-foreground/70">
                            How it&rsquo;s measured
                          </p>
                          <p className="mt-1.5 text-sm text-foreground/65">{g.measured}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-xs font-medium text-foreground/70">Terms</p>
                        <ul className="mt-2 space-y-2">
                          {g.terms.map((term) => (
                            <li key={term} className="flex gap-2.5 text-sm text-foreground/65">
                              <span
                                aria-hidden
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40"
                              />
                              {term}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-panel px-6 py-24">
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
              Eleven guarantees. Nothing on the line for you.
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm text-foreground/65">
              Each one has something real on the line for us, not you. If
              you&rsquo;ve read this far and you&rsquo;re still not sure —
              that&rsquo;s exactly what the call is for.
            </p>
            <Link
              href="/get-started"
              className="mt-7 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Get started
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
