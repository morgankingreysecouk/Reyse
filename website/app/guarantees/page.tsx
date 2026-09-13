import Link from "next/link";
import Reveal from "../components/Reveal";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Guarantees",
  description: "Eleven specific promises, each with a real, defined remedy if we fall short — not vague reassurance.",
});

const guarantees = [
  {
    title: "The Delivery Guarantee",
    promise: "Crawler access, trust signals, and your core schema will be live within 5 working days of onboarding.",
    remedy: "Miss that window, and we pay you your hourly rate for every day we're late.",
  },
  {
    title: "The Growth Guarantee",
    promise: "Give us an honest baseline and full access, and we commit to growing your tracked enquiries within 3 months.",
    remedy: "If they haven't grown, we personally fund one month of your Google or Meta ad spend.",
  },
  {
    title: "The Release of Commitment Guarantee",
    promise: "You will never be asked to sign a long-term contract.",
    remedy: "Month-to-month, always — leave whenever you want, no penalty.",
  },
  {
    title: "The Visibility Guarantee",
    promise: "You'll appear in at least one AI platform's answer to a real, relevant question within 8 weeks.",
    remedy: "If you don't, we pay for a professional photography shoot of your top listing, on us.",
  },
  {
    title: "The Transparency Guarantee",
    promise: "You'll get a written report every week for your first 8 weeks.",
    remedy: "Miss one, and we pay you £50 on the spot — no chasing required.",
  },
  {
    title: "The Charity Flip Guarantee",
    promise: "If we miss any of the guarantees on this page, or an agreed milestone.",
    remedy: "We make an additional donation to your chosen charity, on top of the one already built into your offer.",
  },
  {
    title: "The No-Overreach Guarantee",
    promise: "We will only ever request the minimum access a job actually requires.",
    remedy: "And we'll tell you exactly why we need it, before we ask.",
  },
  {
    title: "The No Surprise Changes Guarantee",
    promise: "We will never change anything live on your site or business profiles without your sign-off first.",
    remedy: "Ever. Not once, not \"just this once.\"",
  },
  {
    title: "The No Jargon Guarantee",
    promise: "You will never receive a report you can't understand.",
    remedy: "If a term needs explaining, it's explained — every time, no exceptions.",
  },
  {
    title: "The No Copy-Paste Strategy Guarantee",
    promise: "We will never apply a generic template built for a different industry to your business.",
    remedy: "Everything is built for property, specifically — because that's the only industry we work in.",
  },
  {
    title: "The No Competitor Access Guarantee",
    promise: "Your direct competitor will never be able to buy this from us.",
    remedy: "One agency per area, permanently — a structural rule, not a limited-time offer.",
  },
];

export default function GuaranteesPage() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
          Guarantees
        </p>
        <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          Eleven promises. Each one specific enough to break.
        </h1>
        <p className="mt-5 text-lg text-foreground/70">
          Vague reassurance is easy to write and impossible to hold anyone to.
          Every guarantee below names exactly what we're promising and exactly
          what happens if we don't deliver it — no "we'll do our best," no
          fine print that quietly cancels the promise out.
        </p>

        <div className="mt-14 space-y-6">
          {guarantees.map((g, i) => (
            <Reveal key={g.title} delay={i * 40}>
              <div className="rounded-2xl border border-border p-6 sm:p-8">
                <h2 className="font-heading text-xl leading-[1.15] tracking-tight">
                  {g.title}
                </h2>
                <p className="mt-3 text-foreground/80">{g.promise}</p>
                <div className="mt-4 rounded-xl border border-accent/20 bg-accent/5 p-4">
                  <p className="text-xs font-medium text-accent-text">If we don&rsquo;t</p>
                  <p className="mt-1 text-sm text-foreground/70">{g.remedy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mx-auto mt-16 max-w-xl rounded-2xl border border-border bg-panel p-8 text-center">
            <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
              What this doesn&rsquo;t promise
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-foreground/65">
              We don&rsquo;t guarantee specific search rankings, that you&rsquo;ll
              dominate every AI platform, or exact business outcomes — Google, Bing,
              and every AI provider make that call, not us. What&rsquo;s above is
              what we do control, stated plainly.
            </p>
            <Link
              href="/get-started"
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Get started
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
