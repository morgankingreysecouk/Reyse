import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import { InvisibleMockup, SelfAuditMockup } from "../components/AboutVisuals";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "Why Reyse exists, and who's building it.",
});

function AvatarPlaceholder() {
  return (
    <span
      aria-hidden
      className="flex h-16 w-16 items-center justify-center rounded-full bg-ink-foreground/10 text-ink-foreground/40"
    >
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8.5" r="3.5" />
        <path d="M4.5 20c1.2-4 4.2-6 7.5-6s6.3 2 7.5 6" strokeLinecap="round" />
      </svg>
    </span>
  );
}

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
            invisibility problem — mine. It&rsquo;s now built for every
            estate and letting agent with the same blind spot.
          </p>
        </div>
      </div>

      <div className="px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <PhotoPlaceholder
              label="The Reyse team"
              note="Currently a team of one — this is where a real photo goes once there's a team to put in it."
              aspect="aspect-[21/8]"
            />
          </Reveal>
        </div>
      </div>

      <div className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="max-w-xl space-y-5 text-foreground/70">
              <p>
                Nothing Reyse does is new technology. AI-powered SEO, schema
                markup, review management, competitive intelligence — all of
                it already existed before Reyse did. What was missing was
                agents actually using it. Most have never checked whether
                they show up when someone asks ChatGPT who to use in their
                area, let alone fixed it if they don&rsquo;t.
              </p>
              <p>
                We think this is one of the first real windows for AI to
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

      <div className="px-6 pb-24">
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

      <div className="border-y border-border bg-ink px-6 py-24 text-ink-foreground">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl tracking-tight sm:text-4xl">
              Leadership
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
            <Reveal>
              <div>
                <AvatarPlaceholder />
                <p className="mt-4 font-semibold">Morgan King</p>
                <p className="mt-1 text-sm text-ink-foreground/70">
                  Founder. Two years on the lettings desk taught me the
                  reputation wasn&rsquo;t really the problem — the
                  invisibility was. Reyse is what came out of that.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="mx-auto mt-20 max-w-3xl rounded-3xl bg-accent px-8 py-14 text-center text-accent-foreground">
              <h3 className="font-heading text-3xl tracking-tight sm:text-4xl">
                Not hiring. Yet.
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-sm text-accent-foreground/80">
                Reyse is a team of one right now. Here&rsquo;s the honest
                plan for when that changes.
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
                    means the most honest proof we can offer isn&rsquo;t a
                    client list yet — it&rsquo;s what we&rsquo;re doing to
                    our own website. We&rsquo;re applying Reyse&rsquo;s own
                    SEO and GEO service to reyse.co.uk as we build it, in
                    public. If it doesn&rsquo;t work on us first, it
                    doesn&rsquo;t go near a client.
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
