import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import { InvisibleMockup, SelfAuditMockup } from "../components/AboutVisuals";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "Why Reyse exists, and who's building it.",
});

export default function AboutPage() {
  return (
    <main className="flex-1">
      <div className="px-6 pb-16 pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
            Our mission
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            We couldn&rsquo;t find our own agency. So we built the fix.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/70">
            Reyse started as the answer to one lettings agency&rsquo;s
            invisibility problem — mine. The mission hasn&rsquo;t changed
            since: make sure no estate or letting agent is invisible to
            the AI tools their next client is already asking.
          </p>
        </div>
      </div>

      <div className="px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border">
              <Image
                src="/images/about-office.webp"
                alt="A bright, modern workspace with the Reyse logo on the wall"
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-3 text-center text-xs text-foreground/50">
              A look at the space Reyse is building toward — not a real
              office yet. Right now it&rsquo;s genuinely a team of one.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="grid items-center gap-10 sm:grid-cols-2 sm:gap-16">
              <div>
                <h2 className="font-heading text-3xl leading-[1.1] tracking-tight sm:text-4xl">
                  The moment it clicked
                </h2>
                <p className="mt-5 text-foreground/70">
                  Before Reyse, I was a lettings negotiator. I inherited a
                  book of business with one of the worst reputations in the
                  area — built up long before I got there, by people who
                  were long gone by the time I was left to fix it.
                </p>
                <p className="mt-4 text-foreground/70">
                  I was determined to turn it around, so I did what any
                  frustrated agent would do: I Googled the business, and
                  asked AI tools what they&rsquo;d say about it. The
                  business wasn&rsquo;t there. Not ranked badly — not
                  mentioned at all. Someone asking Google or ChatGPT who to
                  trust in the area would never hear of us, no matter how
                  good the service became.
                </p>
              </div>
              <InvisibleMockup />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
              What I believe
            </p>
            <div className="mt-5 max-w-xl space-y-5 text-foreground/70">
              <p>
                That was the moment. The reputation wasn&rsquo;t really
                the problem — the invisibility was, and fixing one
                without the other was never going to work.
              </p>
              <p>
                Nothing Reyse does is new technology. AI-powered SEO, schema
                markup, review management, competitive intelligence — all of
                it already existed before Reyse did. What was missing was
                agents actually using it. Most have never checked whether
                they show up when someone asks ChatGPT who to use in their
                area, let alone fixed it if they don&rsquo;t.
              </p>
              <p>
                I think this is one of the first real windows for AI to
                make a measurable difference in this industry — not as a
                gimmick, but as leads and enquiries. For as long as most of
                the industry hasn&rsquo;t caught on, it&rsquo;s also one of
                the clearest ways to pull ahead of the agency down the road.
              </p>
              <p>
                That&rsquo;s the bet Reyse is built on: two years on the
                lettings desk, then a year of daily research into how AI
                search actually works, before any of it became a product.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-y border-border bg-ink px-6 py-24 text-ink-foreground">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl tracking-tight sm:text-4xl">
              The founder
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
            <Reveal>
              <div>
                <div className="relative h-28 w-28 overflow-hidden rounded-full border border-ink-foreground/15">
                  <Image
                    src="/images/morgan-king.png"
                    alt="Morgan King, Founder of Reyse"
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 font-semibold">Morgan King</p>
                <p className="mt-1 text-sm text-ink-foreground/70">
                  Founder — and for now, the whole team. I took the
                  lettings job deliberately, for the sales experience —
                  the advice was always two years of that before starting
                  anything of your own. Reyse is what I&rsquo;m building
                  with it.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="mx-auto mt-20 max-w-3xl rounded-3xl bg-accent px-8 py-14 text-center text-accent-foreground">
              <h3 className="font-heading text-3xl tracking-tight sm:text-4xl">
                Hiring one partner.
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-sm text-accent-foreground/80">
                Equity, not a salary — someone to help build sales,
                marketing, and fulfillment alongside me. Here&rsquo;s
                exactly what that looks like.
              </p>
              <Link
                href="/careers"
                className="mt-7 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-ink-foreground hover:opacity-90"
              >
                See the careers page
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-10 sm:grid-cols-[1fr_360px] sm:gap-14">
            <Reveal>
              <div>
                <h2 className="font-heading text-2xl leading-[1.1] tracking-tight sm:text-3xl">
                  Built in the open
                </h2>
                <div className="mt-5 space-y-5 text-foreground/70">
                  <p>
                    Reyse is in the process of launching right now, which
                    means the most honest proof I can offer isn&rsquo;t a
                    client list yet — it&rsquo;s what I&rsquo;m doing to
                    my own website. I&rsquo;m applying Reyse&rsquo;s own
                    SEO and GEO service to reyse.co.uk as I build it, in
                    public. If it doesn&rsquo;t work here first, it
                    doesn&rsquo;t go near a client.
                  </p>
                  <p>
                    It&rsquo;s also why the{" "}
                    <Link href="/guarantees" className="font-medium text-accent-text hover:underline">
                      guarantees page
                    </Link>{" "}
                    exists — eleven specific, enforceable promises instead
                    of vague reassurance. If honesty is the whole pitch,
                    it has to be checkable.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <SelfAuditMockup />
            </Reveal>
          </div>
        </div>
      </div>

      <div className="px-6 pb-20">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
              <span aria-hidden className="h-px flex-1 border-t border-dashed border-border" />
              <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full border border-border" />
            </div>
            <div className="mt-3 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-foreground">3 August 2026</p>
                <p className="text-sm text-foreground/60">Reyse is founded</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-foreground/50">To be continued</p>
                <p className="text-sm text-foreground/40">&hellip;</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="px-6 pb-28 pt-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
            Get started
          </p>
          <h2 className="mx-auto mt-4 max-w-xl font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            Want the same fix for your business?
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/get-started"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Get started
            </Link>
            <Link
              href="/resources"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-foreground/40"
            >
              Resources
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
