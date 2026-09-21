import type { Metadata } from "next";
import Link from "next/link";
import CountUp from "../components/CountUp";
import Reveal from "../components/Reveal";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Charity",
  description: "Reyse is completely free right now. Instead of paying us, we ask you to donate to a charity of your choice — any amount, to anyone you want.",
});

const steps = [
  {
    title: "Sign up and get the work done",
    text: "Exactly as agreed — no different to any other client.",
  },
  {
    title: "Once you're happy, make a donation",
    text: "Any amount, to any registered charity, in whatever way you'd normally give — their website, JustGiving, a text donation, in person. It all counts.",
  },
  {
    title: "Send us proof",
    text: "A screenshot of the confirmation, a forwarded receipt email, a photo of a paper receipt — whatever you've got. WhatsApp or email, whichever's easier.",
  },
  {
    title: "That's it",
    text: "No minimum amount, no approval process, no follow-up questions about how much you gave.",
  },
];

const faqs = [
  {
    question: "Do I have to donate to Crisis specifically?",
    answer: "No. Crisis is just our recommendation if you don't already have a charity in mind. Any registered charity is fine.",
  },
  {
    question: "Is there a minimum amount?",
    answer: "No. £5 counts exactly as much as £500 for our purposes — this was never about the size of the donation.",
  },
  {
    question: "What if I can't afford to donate anything right now?",
    answer: "Talk to us before you assume this rules you out. We'd rather have an honest conversation than lose a genuinely good client over this.",
  },
  {
    question: "How do I actually send proof?",
    answer: "Whatever's easiest — a screenshot on WhatsApp, a forwarded email, a photo. There's no form to fill in.",
  },
  {
    question: "Will this always be how Reyse works?",
    answer: "This applies to our current free founding clients. As we move through our discounted pricing stages and eventually to full price, standard fees apply instead — the donation model is specific to this early, free stage of the business.",
  },
  {
    question: "Why should I trust you'll actually keep the future promise?",
    answer: "You shouldn't have to just take our word for it — that's exactly why it's written here, publicly, before we've made any money from it. Ask us about it again once we are profitable. We'd expect you to.",
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

export default function CharityPage() {
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
          <p className="mb-4 inline-block rounded-full border border-ink-foreground/20 px-3 py-1 text-xs font-medium text-ink-foreground/70">
            Charity
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            We don&rsquo;t take your money. We ask you to give it to someone
            who needs it more.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-foreground/70">
            Right now, Reyse is completely free. Not discounted, not
            &ldquo;free trial&rdquo; — free. All we ask in return is that
            you donate to a charity of your choice.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#how-it-works"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              See how it works
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

      <div className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-10 sm:grid-cols-[1fr_280px] sm:gap-16">
            <Reveal>
              <div className="space-y-5 text-foreground/70">
                <p>
                  We don&rsquo;t take a penny from you. All we ask in return
                  is that you donate to a charity of your choice. However
                  much you want, to whoever you want. The only thing we ask
                  for is proof that you did it.
                </p>
                <p className="font-medium text-foreground">
                  That&rsquo;s it. That&rsquo;s the entire ask.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-col items-center justify-center rounded-3xl bg-accent px-6 py-14 text-center text-accent-foreground">
                <p className="font-heading text-6xl leading-none tracking-tight">
                  <CountUp value="£0" />
                </p>
                <p className="mt-3 text-sm font-medium">
                  taken from you, right now
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="bg-panel px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
              Why we&rsquo;re doing this
            </p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl leading-[1.15] tracking-tight sm:text-4xl">
              Not because the work isn&rsquo;t worth paying for.
            </h2>
          </Reveal>

          <div className="mt-10 max-w-2xl space-y-5 text-foreground/70">
            <Reveal>
              <p>
                We think it&rsquo;s worth more than most agencies are
                currently charging for SEO and GEO elsewhere. We&rsquo;re
                doing it because we&rsquo;re not ready to charge for it yet.
                We&rsquo;re still building our track record, our case
                studies, and our proof — and until we have that, it
                wouldn&rsquo;t be right to ask you for money on the strength
                of a promise alone.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p>
                But &ldquo;completely free, no strings&rdquo; creates a
                different problem: it attracts people who aren&rsquo;t
                actually serious, who sign up because it costs nothing,
                disappear halfway through onboarding, and never give us the
                honest feedback or results we need to prove this works. A
                donation — even a small one — filters for the opposite. If
                you&rsquo;re willing to put your own money towards
                something, even money that isn&rsquo;t coming to us, it
                tells us you&rsquo;re genuinely engaged, not just curious.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="border-y border-border bg-ink px-6 py-20 text-ink-foreground">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-heading text-2xl leading-[1.4] tracking-tight sm:text-3xl">
              &ldquo;Think of it less as a payment, and more as a
              commitment.&rdquo;
            </p>
            <p className="mx-auto mt-5 max-w-xl text-sm text-ink-foreground/70">
              It costs you nothing extra you wouldn&rsquo;t have already
              been willing to spend to see if this works — it just goes
              somewhere better than our bank account.
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-8 max-w-xl text-center text-xs text-ink-foreground/50">
            Alongside the donation, our founding clients also agree to give
            us honest feedback and a testimonial once the work speaks for
            itself — the donation isn&rsquo;t the whole arrangement, just
            the part that costs you money.
          </p>
        </Reveal>
      </div>

      <div className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
            <Reveal>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
                  Where it goes
                </p>
                <h2 className="mt-3 font-heading text-2xl leading-[1.2] tracking-tight sm:text-3xl">
                  We never see, touch, or collect the money.
                </h2>
                <p className="mt-4 text-foreground/70">
                  We&rsquo;re not a fundraising platform and we don&rsquo;t
                  want to be one. You donate, you get a confirmation from
                  the charity itself, and you send us proof of that.
                  That&rsquo;s the full extent of our involvement.
                </p>
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
                      You → Reyse → the charity
                    </p>
                    <p className="mt-0.5 text-xs text-foreground/60">
                      Not through us, not via an invoice, not into any
                      account we control.
                    </p>
                  </div>
                </div>

                <div className="my-6 border-t border-dashed border-border" />

                <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
                  What actually happens
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    "You → directly to the charity",
                    "You get confirmation from the charity itself",
                    "You send us proof — that's the extent of our involvement",
                  ].map((item) => (
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

      <div className="bg-panel px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
              If you&rsquo;re not sure who to donate to
            </p>
            <h2 className="mt-3 font-heading text-3xl leading-[1.15] tracking-tight sm:text-4xl">
              We recommend Crisis.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 rounded-3xl border border-border bg-background p-8 sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-xl leading-[1.2] tracking-tight">
                    Crisis
                  </h3>
                  <p className="mt-1 text-sm text-foreground/60">
                    The UK&rsquo;s national charity for people experiencing
                    homelessness
                  </p>
                </div>
                <a
                  href="https://www.crisis.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90"
                >
                  crisis.org.uk
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M6 4h6v6M12 4 4 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              <div className="my-6 border-t border-border" />

              <p className="text-foreground/70">
                We picked them deliberately, not at random: you&rsquo;re in
                the business of helping people find homes, and Crisis
                exists to help people who don&rsquo;t have one. It felt
                like the right fit for this industry specifically.
              </p>
              <p className="mt-4 text-foreground/70">
                Crisis helps people out of homelessness directly —
                supporting them into safe, affordable housing, connecting
                them with employment opportunities, and helping them access
                the benefits and healthcare they&rsquo;re often shut out of
                without a fixed address. They run Skylight centres across
                England, Scotland and Wales, working side by side with
                thousands of people a year, and they campaign for the wider
                changes needed to end homelessness altogether, not just
                manage it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="mx-auto mt-6 max-w-2xl text-sm text-foreground/60">
              This is a recommendation, not a requirement. Cancer research,
              an air ambulance, a local food bank, a children&rsquo;s
              hospice — genuinely, whatever matters to you. We just wanted
              to give you a starting point if you didn&rsquo;t already have
              one.
            </p>
          </Reveal>
        </div>
      </div>

      <div id="how-it-works" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
                How it actually works
              </p>
              <h2 className="mt-3 font-heading text-3xl leading-[1.15] tracking-tight sm:text-4xl">
                Four steps. No approval process.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 space-y-4">
            {steps.map((step, i) => (
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

          <Reveal delay={250}>
            <p className="mx-auto mt-8 max-w-xl text-center text-sm text-foreground/60">
              We&rsquo;re not going to police the number on the receipt.
              The point was never the amount — it&rsquo;s that you did it
              at all.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="bg-ink px-6 py-24 text-ink-foreground">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-wide text-ink-foreground/50">
              The promise for the future
            </p>
            <h2 className="mt-3 font-heading text-3xl leading-[1.15] tracking-tight sm:text-4xl">
              We don&rsquo;t donate anything ourselves. Not yet.
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5 text-ink-foreground/70">
            <Reveal delay={80}>
              <p>
                Reyse is a new business with no profit yet, and we&rsquo;d
                rather be honest about that than pretend otherwise. Asking
                you to donate while claiming we&rsquo;re doing the same
                thing ourselves would be exactly the kind of dishonesty
                we&rsquo;ve built this whole business to avoid.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="rounded-2xl border border-ink-foreground/15 bg-ink-foreground/5 p-6">
                <p className="font-medium text-ink-foreground">
                  So here&rsquo;s the actual promise: once Reyse is
                  genuinely profitable, we will commit a percentage of that
                  profit to charity, on an ongoing basis.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <p>
                We&rsquo;re not going to put a specific number, a start
                date, or a named charity on that today, because we honestly
                don&rsquo;t know yet what the business will be able to
                sustainably afford, and we&rsquo;d rather make a promise we
                can keep than a number that sounds good now and gets
                quietly dropped later.
              </p>
              <p className="mt-4 font-medium text-ink-foreground">
                But it&rsquo;s a promise we&rsquo;re making publicly, in
                writing, before we&rsquo;ve made a single penny —
                specifically so it&rsquo;s something you can hold us to
                later.
              </p>
            </Reveal>
          </div>
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
              We&rsquo;re asking you to trust us before we&rsquo;ve earned
              a track record.
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm text-foreground/65">
              We know that&rsquo;s a genuine risk on your side. This is our
              way of making that trade a little fairer — you don&rsquo;t
              pay us a penny, and something good happens in the world
              either way.
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
