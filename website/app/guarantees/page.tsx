import type { Metadata } from "next";
import Image from "next/image";
import ArticleToc from "../components/ArticleToc";
import ClipReveal from "../components/ClipReveal";
import Reveal from "../components/Reveal";
import RevealWords from "../components/RevealWords";
import { pageMetadata } from "../lib/seo";
import { slugify } from "../lib/slugify";
import { guarantees } from "./data";

export const metadata: Metadata = pageMetadata({
  title: "Guarantees",
  description: "Eleven specific, measurable guarantees — each with a real, enforceable cost to us if we don't meet it. Not vague reassurance you'd have to argue us into honouring.",
});

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

// "The Delivery Guarantee" → "Delivery": in a list of eleven, repeating
// "The … Guarantee" on every line is just noise.
const tocHeadings = guarantees.map((g) => ({
  id: slugify(g.title),
  text: g.title.replace(/^The /, "").replace(/ Guarantee$/, ""),
}));

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
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(rgba(250,248,242,0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(60% 60% at 50% 35%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(60% 60% at 50% 35%, black 40%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            <RevealWords text="If we don’t deliver, it doesn’t cost you — it costs us." />
          </h1>
          <p
            className="mx-auto mt-6 max-w-xl animate-[hero-fade-in_0.6s_ease-out_backwards] text-lg text-ink-foreground/70"
            style={{ animationDelay: "450ms" }}
          >
            11 specific, measurable guarantees, each with a real cost to us if
            we miss it — not a vague promise you&rsquo;d have to argue us into
            honouring.
          </p>
          <div
            className="mt-9 flex animate-[hero-fade-in_0.6s_ease-out_backwards] flex-wrap justify-center gap-4"
            style={{ animationDelay: "600ms" }}
          >
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

      <div id="honest-bit" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
                The honest bit
              </p>
            </Reveal>
            <ClipReveal>
              <h2 className="mt-3 font-heading text-3xl leading-[1.15] tracking-tight sm:text-4xl">
                Why we won&rsquo;t promise you #1.
              </h2>
            </ClipReveal>
            <Reveal delay={100}>
              <div className="mt-8 space-y-5 text-foreground/70">
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
          </div>

          {/* Sticks alongside the founder's note as it scrolls, rather
              than leaving a gap beneath a column that's just one photo. */}
          <div className="lg:sticky lg:top-28">
            <ClipReveal delay={100}>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-panel">
                <Image
                  src="/images/guarantees-desk.webp"
                  alt="A sunlit desk with an open notebook, a fountain pen, house keys and a cup of coffee"
                  fill
                  sizes="(min-width: 1024px) 440px, 100vw"
                  loading="eager"
                  className="object-cover"
                />
              </div>
            </ClipReveal>
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

      <div id="the-11" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
                In full
              </p>
            </Reveal>
            <ClipReveal>
              <h2 className="mt-3 font-heading text-3xl leading-[1.15] tracking-tight sm:text-4xl">
                The 11 guarantees.
              </h2>
            </ClipReveal>
            <Reveal delay={100}>
              <p className="mt-4 text-foreground/70">
                Every promise below names exactly what we&rsquo;re committing
                to and exactly what happens if we don&rsquo;t deliver it. Open
                any one for the worked example, how it&rsquo;s measured, and
                the full terms.
              </p>
            </Reveal>
          </div>

          {/* Below lg: a collapsible jump list instead of the sticky sidebar —
              no JS needed, and native <details> keeps it accessible. */}
          <details className="mt-8 rounded-2xl border border-border p-4 lg:hidden">
            <summary className="cursor-pointer text-sm font-medium text-foreground">
              Jump to a guarantee
            </summary>
            <ul className="mt-3 space-y-2 text-sm">
              {tocHeadings.map((h, i) => (
                <li key={h.id}>
                  <a href={`#${h.id}`} className="flex gap-3 text-foreground/70 hover:text-foreground">
                    <span className="font-medium tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </details>

          <div className="mt-10 grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
            <aside className="hidden lg:block">
              <ArticleToc label="The 11" headings={tocHeadings} />
            </aside>

            <div className="space-y-6">
            {guarantees.map((g, i) => (
              <Reveal key={g.title} delay={Math.min(i, 6) * 40}>
                <div id={slugify(g.title)} className="scroll-mt-24 rounded-3xl border border-border p-6 sm:p-8">
                  <div className="flex gap-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 font-heading text-sm text-accent-text">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-heading text-xl leading-[1.15] tracking-tight">
                        {g.title}
                      </h3>
                      <p className="mt-3 text-lg font-medium leading-snug text-foreground">{g.promise}</p>
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
      </div>

      <div className="bg-panel px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
                Using a guarantee
              </p>
            </Reveal>
            <ClipReveal>
              <h2 className="mt-3 font-heading text-3xl leading-[1.15] tracking-tight sm:text-4xl">
                How claiming one actually works.
              </h2>
            </ClipReveal>
            <Reveal delay={100}>
              <p className="mt-4 text-foreground/70">
                We built these to be simple to use — a guarantee you have to
                fight for isn&rsquo;t really a guarantee.
              </p>
            </Reveal>
          </div>

          {/* A left-to-right process rather than stacked rows — the dot and
              rule on each step echo the timeline on the About page. */}
          <div role="list" className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {claimSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 90}>
                <div role="listitem" className="relative h-full border-t border-foreground/15 pt-8">
                  <span aria-hidden className="absolute -top-[5px] left-0 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p aria-hidden className="font-heading text-5xl leading-none tracking-tight text-foreground/15">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-5 font-medium leading-snug text-foreground">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <ClipReveal>
            <h2 className="font-heading text-3xl leading-[1.15] tracking-tight sm:text-4xl">
              Common questions
            </h2>
          </ClipReveal>
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

    </main>
  );
}
