import Link from "next/link";
import Reveal from "../components/Reveal";
import { bonusStack, bonusStackMonthlyTotal, bonusStackOneOffTotal } from "../lib/bonusStack";
import { pageMetadata } from "../lib/seo";
import { products } from "../products/data";
import { SYSTEM_SPOTS_REMAINING, SYSTEM_TOTAL_SPOTS } from "../lib/systemOffer";

export const metadata = pageMetadata({
  title: "The Full System",
  description: "All 5 of Reyse's products working together, plus a bonus stack unlocked only by getting all of them — currently free for the first 5 agencies.",
});

export default function SystemPage() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
          The Full System
        </p>
        <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          Become the obvious #1 in your area — without working harder to get there.
        </h1>
        <p className="mt-5 text-lg text-foreground/70">
          Every product Reyse builds, working together instead of separately:
          found on Google, recommended by AI, every review answered, knowing
          exactly where you stand against the competitor down the road — and,
          when you're ready, replicated properly for every branch after this
          one. This is that, as one system, currently completely free.
        </p>

        <div className="mt-8">
          <Link
            href="/get-started?interest=The%20Full%20System"
            className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Get started
          </Link>
        </div>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-panel p-6">
            <div>
              <p className="font-heading text-3xl leading-none tracking-tight text-accent-text">
                {SYSTEM_SPOTS_REMAINING} / {SYSTEM_TOTAL_SPOTS}
              </p>
              <p className="mt-1 text-xs text-foreground/65">
                full-system spots still open
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 border-t border-border pt-10">
          <h2 className="font-heading text-2xl leading-[1.15] tracking-tight">
            What we ask in return
          </h2>
          <p className="mt-3 max-w-2xl text-foreground/70">
            Three things, all reasonable: brutally honest feedback as we
            build, a testimonial once you&rsquo;re seeing results, and a
            donation to a charity of your choice. That&rsquo;s it — no hidden
            catch beyond helping shape what this becomes. This applies
            specifically to the full-system spots above, separate from the
            general{" "}
            <Link href="/free-forever" className="underline hover:text-foreground">
              first-5-per-county offer
            </Link>{" "}
            available for any single product.
          </p>
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <h2 className="font-heading text-2xl leading-[1.15] tracking-tight">
            Why this happens fast, not eventually
          </h2>
          <p className="mt-3 max-w-2xl text-foreground/60">
            Backed by real guarantees, not a promise to get to it.
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                when: "Day 5",
                what: "Crawler access, trust signals, and your core schema are live.",
                backing: "Delivery Guarantee — miss it, and we pay your hourly rate for every day we're late.",
              },
              {
                when: "Weeks 1–8",
                what: "A written report every single week, not a monthly summary.",
                backing: "Transparency Guarantee — miss one, and we pay you £50 on the spot.",
              },
              {
                when: "Month 3",
                what: "Your tracked enquiries, measured against your own baseline.",
                backing: "Growth Guarantee — if they haven't grown, we fund a month of your ad spend.",
              },
            ].map((step, i) => (
              <Reveal key={step.when} delay={i * 60}>
                <div className="flex flex-wrap gap-4 rounded-2xl border border-border p-5 sm:flex-nowrap">
                  <p className="w-24 shrink-0 font-heading text-lg leading-tight text-accent-text">
                    {step.when}
                  </p>
                  <div>
                    <p className="text-foreground/80">{step.what}</p>
                    <p className="mt-1.5 text-sm text-foreground/60">{step.backing}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <h2 className="font-heading text-2xl leading-[1.15] tracking-tight">
            What this doesn&rsquo;t cost you in hours
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "One onboarding session — access, plus a few facts only you know, like your current enquiry numbers. That's it.",
              "The labour-heavy parts — Profile Activity, AI Review Responder, Automatic Review Reminders — run automatically once built, not manually.",
              "Everything else, we implement directly. You're not handed a to-do list.",
              "One dashboard for your logins, API access, and monitoring — not five different places to check.",
            ].map((text, i) => (
              <Reveal key={text} delay={i * 60}>
                <div className="rounded-2xl border border-border p-5">
                  <p className="text-sm text-foreground/70">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <h2 className="font-heading text-2xl leading-[1.15] tracking-tight">
            The 5 systems, working together
          </h2>
          <p className="mt-3 max-w-md rounded-2xl border border-accent/20 bg-accent/5 p-4 text-sm text-foreground/70">
            The Full System runs on Done For You across all 5 — Reviews and
            Market Intelligence are ongoing services by design, with no
            one-off version, and the weekly reporting and monthly tracking
            above only work as a continuous service, not a one-time setup.
          </p>
          <p className="mt-3 max-w-2xl text-foreground/60">
            Each one stands on its own — see the individual page for what it
            actually does. Get all 5 together and it stops being 5 separate
            efforts and starts being one system.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={i * 60}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group flex flex-col rounded-2xl border border-border p-6 transition hover:border-foreground/30 hover:bg-panel"
                >
                  <span className="inline-block w-fit rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
                    {product.label}
                  </span>
                  <h3 className="mt-4 font-heading text-lg leading-[1.15]">{product.tagline}</h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-text opacity-0 transition group-hover:opacity-100">
                    See what&rsquo;s included →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <h2 className="font-heading text-2xl leading-[1.15] tracking-tight">
            The bonus stack — only with the full system
          </h2>
          <p className="mt-3 max-w-2xl text-foreground/60">
            A la carte, each product is exactly what its own page says — no
            more, no less. Get all 5 together and these come with it, at no
            extra cost, for as long as Reyse is at this early stage.
          </p>
          <div className="mt-8 space-y-4">
            {bonusStack.map((item, i) => (
              <Reveal key={item.title} delay={i * 50}>
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border p-5">
                  <div>
                    <h3 className="font-medium text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-foreground/60">{item.stat}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-heading text-xl leading-none tracking-tight text-accent-text">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs text-foreground/60">{item.cadence}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-foreground/60">
            £{bonusStackMonthlyTotal}/month in ongoing value, plus a £{bonusStackOneOffTotal} one-off —
            included, not charged, while you&rsquo;re one of the first 5.
          </p>
        </div>

        <Reveal>
          <div className="mx-auto mt-16 max-w-xl rounded-2xl border border-border bg-panel p-8 text-center">
            <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
              Backed by 11 specific guarantees
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/65">
              Not vague reassurance — each one names exactly what we&rsquo;re
              promising and exactly what happens if we don&rsquo;t deliver it.
            </p>
            <Link
              href="/guarantees"
              className="mt-6 inline-block rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-foreground/40"
            >
              See all 11
            </Link>
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-border bg-panel p-8 text-center">
            <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
              Ready for the full system?
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/65">
              One agency per area, and only {SYSTEM_TOTAL_SPOTS} full-system spots total —{" "}
              {SYSTEM_SPOTS_REMAINING} left right now.
            </p>
            <Link
              href="/get-started?interest=The%20Full%20System"
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
