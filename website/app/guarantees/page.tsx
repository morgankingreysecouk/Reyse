import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import { pageMetadata } from "../lib/seo";

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

type Guarantee = {
  title: string;
  promise: string;
  context: string;
  example: string;
  measured?: string;
  terms: string[];
};

const guarantees: Guarantee[] = [
  {
    title: "The Delivery Guarantee",
    promise:
      "Crawler access, trust signals, and schema live within 5 working days of onboarding — or we pay you for every day we're late.",
    context:
      "This protects the very first thing you're trusting us with: that we'll actually start, on time, without you having to chase. A lot of agencies have been burned before by a marketing company that takes the deposit, has an \"onboarding call,\" and then goes quiet for three weeks. This guarantee makes that structurally impossible for us to get away with.",
    example:
      "Your onboarding session finishes on a Monday. By the following Monday — 5 working days later — AI crawler access should be confirmed, your trust signals should be live, and your schema markup should be implemented and verified. If it isn't, every additional working day it takes is a day you're paid for, automatically, without you having to raise it.",
    measured:
      "We confirm the exact onboarding completion date and time with you in writing (email or WhatsApp) so there's no ambiguity about when the 5-day clock starts.",
    terms: [
      "The 5 working-day clock starts once the required access has been provided by you (confirmed and logged at onboarding), and access requests are kept to the genuine minimum needed — see Guarantee 7.",
      "If a delay is caused by access not being provided on time by you, the clock pauses until it's resolved and restarts from there — this is the one thing that's outside our control here, and we'll tell you plainly if it applies.",
      "\"Live\" means implemented and independently verifiable — we'll show you, not just tell you, using the same free tools covered in our DIY SEO guide, so you can check it yourself if you want to.",
      "Payment for late days is calculated at a fair daily rate agreed at onboarding and paid directly, not offered as service credit unless you'd prefer that instead.",
    ],
  },
  {
    title: "The Growth Guarantee",
    promise:
      "Give us an honest baseline — website and phone enquiries, tracked separately. No extra client within 3 months, and we fund a month of your Google or Meta ad spend.",
    context:
      "The entire point of this service is a genuinely busier business, not more reports. We don't ask for a single vague \"enquiries\" number, because website enquiries and phone calls behave differently and get missed in different ways — so we track both, separately, from day one. If three months of real work hasn't brought in at least one extra client through either channel, we don't think you should be the one carrying that risk alone.",
    example:
      "At onboarding, you tell us honestly how many enquiries you're currently getting each month, by channel: website forms and phone calls. We set up a dedicated tracked phone number and website enquiry tracking, so every genuine lead is counted properly rather than estimated. If, after a full 3 months, you haven't gained at least one additional client attributable to either channel, we fund the next month's Google or Meta ad spend on your behalf — real money, spent on your business, at no cost to you.",
    measured:
      "Against the two separate baseline figures captured honestly at onboarding — call volume through the dedicated number, and enquiries through the tracked website forms.",
    terms: [
      "Requires honest baseline figures for both channels at onboarding, and both forms of tracking to be live for the full 3-month window — if tracking wasn't live for the whole period, the guarantee resets once it is.",
      "\"An extra client\" means a genuine new instruction or client won via a tracked website enquiry or the dedicated phone number within the 3-month period, over and above your stated baseline rate.",
      "Ad spend funded under this guarantee is capped at a reasonable working budget for a business of your size, agreed with you in advance.",
      "Applies once per client, tied to the original onboarding baseline. Reset your baseline later (a new branch, for example) and a new 3-month window applies to it.",
      "Seasonal UK property market fluctuations are accounted for when we set expectations at onboarding, so a quiet winter month on its own doesn't automatically trigger this — we'll be upfront about what's seasonal and what's a genuine problem.",
    ],
  },
  {
    title: "The Release of Commitment Guarantee",
    promise: "No contracts, ever. Leave anytime, no penalty.",
    context:
      "Most of the industry locks clients into 6- or 12-month contracts specifically because they know results take a while to show and they don't want you leaving before they've been paid enough to make it worthwhile. We think that's backwards — if the work is good, we shouldn't need a contract to keep you.",
    example:
      "You sign up in March. In May, for any reason at all, you tell us you're done. There's no minimum term to sit out, no early-exit fee, no calls trying to talk you out of it. We wrap up cleanly and hand back full control of everything we set up.",
    terms: [
      "Unconditional from day one — no minimum term, no notice-period penalty, no exit fee, for either the Foundation or Growth service.",
      "On leaving, any accounts, access, and systems we set up on your behalf (Google Business Profile, schema, tracking numbers, etc.) remain fully yours and under your control — we don't hold anything hostage.",
      "The one thing that does end is our active management — automated systems we built for you, like Profile Activity, will need someone else running them, or they'll simply stop.",
    ],
  },
  {
    title: "The Visibility Guarantee",
    promise:
      "Not appearing in at least one AI platform's answer within 3 months? We pay for a professional photography shoot of your next listing.",
    context:
      "AI visibility is the newest and least understood part of this whole offer — and we want real skin in the game from us on it, not just a promise that \"it'll happen eventually.\"",
    example:
      "At onboarding, we run a live diagnostic — asking ChatGPT, Google's AI Overviews, and Perplexity a set of realistic questions a genuine buyer or seller in your area would ask. We record exactly what comes back, including if nothing does. After 3 months of AI Trust Signals and Answer-Ready Content work, we re-run the exact same questions. If your business still isn't appearing in at least one of those AI answers, we book and pay for a professional photography shoot of your next listing to go live — on us.",
    measured:
      "Against the same fixed set of onboarding diagnostic questions, re-tested at the 3-month mark, so there's no room for cherry-picking a flattering question after the fact.",
    terms: [
      "Requires AI Trust Signals and Answer-Ready Content work (part of the core GEO service) to have actually been implemented — standard for every client, not an optional extra.",
      "\"Appearing\" means your business being named, referenced, or clearly recommended in the AI's answer to at least one agreed onboarding question — not just your website being crawled somewhere in the background.",
      "\"Next listing\" means the next new instruction you take on to market after the 3-month mark — so the shoot always applies to a genuinely upcoming listing, never one already photographed or under offer.",
      "If a platform's own behaviour shifts mid-test in a way that affects the result, we'll re-run the test transparently and show you both results.",
    ],
  },
  {
    title: "The Transparency Guarantee",
    promise: "A report every week for the first 8 weeks. Miss one, and we pay you £50 on the spot.",
    context:
      "The waiting period before results show is where trust usually breaks down with agencies — silence gets read as nothing happening. This guarantee makes that silence literally cost us money, so it's in our own interest never to let it happen.",
    example:
      "Your onboarding finishes on a Friday. The following Friday, and every Friday for the next 8 weeks, you get a written update — plain English, what's been done, what's changing, what's coming next. If a Friday comes and goes with no report, £50 lands with you the same day, no need to ask.",
    terms: [
      "Applies to the first 8 weeks, where results are least visible and reassurance matters most. After week 8, reporting moves to a monthly cadence as part of ongoing Growth reporting.",
      "A report counts as delivered once sent, in whichever format you chose at onboarding (WhatsApp summary, email, or dashboard update) — you don't need to have read it yet.",
      "If a scheduled report day falls on a UK bank holiday, it's sent the next working day without triggering the guarantee — flagged to you in advance.",
    ],
  },
  {
    title: "The Charity Flip Guarantee",
    promise:
      "Miss any milestone, and we make an additional donation to your chosen charity — on top of the one you're already getting from us.",
    context:
      "Every client already has us donating to a charity of their choice as part of how we work. This guarantee means that if we fall short anywhere else on this page, there's a second, independent consequence that has nothing to do with money changing hands with you — it goes somewhere that actually matters.",
    example:
      "If we miss the Delivery Guarantee's 5-day window, you're paid for the late days and we make an additional donation to the charity you nominated at onboarding — the two aren't a trade-off against each other, they both happen.",
    terms: [
      "Stacks on top of whichever other guarantee was missed — never replaces it, never offered as a substitute for the primary remedy.",
      "The charity is chosen by you at onboarding and stays fixed for the duration of the relationship.",
      "The donation amount is fixed and disclosed to you at onboarding, so you know exactly what it is before you ever need it to apply.",
    ],
  },
  {
    title: "The No-Overreach Guarantee",
    promise: "Never more access than needed, always explained first.",
    context:
      "Handing over admin logins to a company you've just met is one of the most uncomfortable parts of any onboarding — and one of the main reasons agencies delay getting started at all. This guarantee is about making sure that discomfort is never justified.",
    example:
      "If a piece of work only needs read-only access to your Google Business Profile, that's what we ask for — not full admin rights \"just in case,\" and not access to your website's backend if the job doesn't touch it. Before we ask for anything, we tell you specifically what it's for and what we'll be able to do with it.",
    terms: [
      "Applies throughout the entire relationship, not just at onboarding — if new work later genuinely requires new access, the same explain-first principle applies.",
      "Access is reviewed and revoked on our end automatically once it's no longer needed for active work.",
      "If you're ever unsure why we've asked for something, you can ask us to explain it again before granting it.",
    ],
  },
  {
    title: "The No Surprise Changes Guarantee",
    promise: "Nothing changes live on your site or profiles without your sign-off. Ever.",
    context:
      "You have to keep running your business while this work happens in the background — the last thing you need is to discover your website or Google profile looks different because we changed something without telling you.",
    example:
      "If we recommend rewriting your homepage title tag for better SEO, we show you the exact proposed change first and get a yes before it goes live — not after.",
    terms: [
      "Applies to every client-facing change: website content, schema, business profile details, listing descriptions, and anything else visible to the public.",
      "The one explicit exception is anything you've specifically agreed at onboarding to be fully automated (the Profile Activity system, for example) — and even then, we talk you through exactly what it will post before it starts.",
      "Sign-off can be as simple as a WhatsApp \"yes, go ahead\" — we're not asking you to fill in forms, just to actually see and approve it first.",
    ],
  },
  {
    title: "The No Jargon Guarantee",
    promise: "Every report explained in plain English. Every term explained, every time.",
    context:
      "This industry runs on jargon that conveniently makes it hard for clients to check whether anything's actually happening. We built our free DIY guides specifically to strip that away, and this guarantee holds our own reporting to the same standard.",
    example:
      "If a report mentions \"schema markup\" or \"canonicalization,\" it's explained in the same sentence, in plain language — not assumed knowledge, not something you have to Google to understand what you're paying for.",
    terms: [
      "If you read a report and something's still unclear, tell us and we'll rewrite that section immediately, in whatever way actually makes sense to you — no limit on how many times you can ask.",
      "Applies to every format we report in — written reports, dashboard summaries, and anything discussed on a call.",
    ],
  },
  {
    title: "The No Copy-Paste Strategy Guarantee",
    promise: "No generic templates. Everything built specifically for your business.",
    context:
      "A huge amount of SEO work sold to small businesses is a templated checklist applied identically to a plumber, a dentist, and an estate agent, with the business name swapped in. Property has its own specific dynamics — portal duplication, listing turnover, local market data — that a generic strategy simply doesn't account for.",
    example:
      "Your property schema, your local area content, and your content audit are all built around your actual listings, your actual towns, and your actual competitors — not a generic \"local business SEO\" package repurposed from a different industry.",
    terms: [
      "Unconditional — structural to how the business is built, not a conditional promise that depends on circumstances.",
      "If you ever believe something we've delivered looks templated rather than built for your business specifically, tell us and we'll show you exactly how it was built for you, or fix it if it genuinely wasn't.",
    ],
  },
  {
    title: "The No Competitor Access Guarantee",
    promise: "One agency per area, permanently. Your rival can never buy this.",
    context:
      "This protects the value of everything else on this page — because none of it means much if your direct competitor down the road can access exactly the same advantage from us six months later.",
    example:
      "If you're the exclusive Reyse client for your town, we will not take on a competing estate or letting agency in that same area for as long as you remain an active client — not for a trial, not for a one-off audit, not under a different name.",
    terms: [
      "Applies for the duration of your active service with us.",
      "If you leave (per the Release of Commitment Guarantee), your territory reopens after a reasonable notice period, rather than being held open indefinitely — we'll always tell you plainly if this is about to happen.",
      "Territory boundaries are agreed explicitly with you at onboarding, based on the areas you actually operate and compete in, not an arbitrary postcode radius.",
    ],
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
