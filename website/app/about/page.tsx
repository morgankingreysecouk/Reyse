import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import MomentBeliefArrow from "../components/MomentBeliefArrow";
import { ShieldIcon, CompassIcon, LayersIcon, ChartIcon } from "../components/NavIcons";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "Why Reyse exists, and who's building it.",
});

const values = [
  {
    icon: ShieldIcon,
    title: "Honesty over hype",
    body: "If it can't be explained plainly and proven, it doesn't get said — no vague reassurance, no jargon standing in for expertise.",
  },
  {
    icon: CompassIcon,
    title: "Earn it every month",
    body: "No lock-in contracts. The work has to keep earning its place, not just win it once and coast.",
  },
  {
    icon: LayersIcon,
    title: "Bespoke, never templated",
    body: "Every strategy is built around your specific area, competitors, and reputation — not a playbook run for every client.",
  },
  {
    icon: ChartIcon,
    title: "Growth you can measure",
    body: "Real leads and enquiries, not rankings that only look good in a screenshot.",
  },
];

const differences = [
  {
    most: "Handed off to an account manager who's never touched SEO.",
    reyse: "The person doing the work is the person you talk to.",
  },
  {
    most: "The same playbook run for every client in the portfolio.",
    reyse: "A strategy built from your specific competitors and reputation.",
  },
  {
    most: "Locked into a rolling 12-month contract.",
    reyse: "A guarantee that lets you leave any time, for any reason.",
  },
  {
    most: "Never checked whether you show up in ChatGPT or Gemini — only Google.",
    reyse: "AI search treated as seriously as Google, because that's where lookups are moving.",
  },
];

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
          <div className="grid gap-10 sm:grid-cols-[1fr_auto_1fr] sm:items-start sm:gap-6">
            <Reveal>
              <div>
                <h2 className="font-heading text-3xl leading-[1.1] tracking-tight sm:text-4xl">
                  The moment it clicked
                </h2>
                <p className="mt-5 text-foreground/70">
                  Before Reyse, I was a lettings branch manager. I inherited a
                  book of business with one of the worst reputations in the
                  area — partly deserved, and partly from being invisible
                  everywhere it mattered.
                </p>
                <p className="mt-4 text-foreground/70">
                  I never understood how other agents had business come to
                  them, instead of having to go out and get it every time.
                  I&rsquo;d always been tenacious, but if something was also
                  feeding me business, things could be different. So I did
                  what anyone would do: I Googled the business, and asked AI
                  tools what they&rsquo;d say about it. The business
                  wasn&rsquo;t there. Not ranked badly — just not mentioned
                  at all. Someone asking Google or ChatGPT who to
                  trust in the area would never hear of us, no matter how
                  good the service became.
                </p>
              </div>
            </Reveal>

            <div className="hidden justify-center pt-2 sm:flex">
              <MomentBeliefArrow />
            </div>

            <Reveal delay={150}>
              <div className="sm:mt-20">
                <h2 className="font-heading text-3xl leading-[1.1] tracking-tight sm:text-4xl">
                  What I believe
                </h2>
                <div className="mt-5 space-y-5 text-foreground/70">
                  <p>
                    That was the moment. Fixing the reputation was only half
                    the job — that wins back the locals. Investors, people
                    based outside the area, and people moving in were the
                    other half, and reputation alone was never going to
                    reach them.
                  </p>
                  <p>
                    Nothing Reyse does is new technology. Search engine
                    optimisation and generative engine optimisation both
                    existed before Reyse did. What was missing was agents
                    actually using it. Most have never checked whether they
                    show up when someone asks ChatGPT — the ones who got
                    recommended were just the lucky ones.
                  </p>
                  <p>
                    I think this is one of the first real windows for AI to
                    make a measurable difference in this industry — not as a
                    gimmick, but as leads and enquiries. For as long as most
                    of the industry hasn&rsquo;t caught on, it&rsquo;s also
                    one of the clearest ways to pull ahead of the agency
                    down the road.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
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
                  Founder — and for now, the whole team. I fell into the
                  estate agency industry for one reason: I wanted to learn
                  sales. Fortunately, I fell in love with the industry, and
                  found an angle only a handful of agents were tackling.
                  Then Reyse was born.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="mx-auto mt-20 max-w-3xl rounded-3xl bg-accent px-8 py-14 text-center text-accent-foreground">
              <h3 className="font-heading text-3xl tracking-tight sm:text-4xl">
                Hiring partner(s).
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-sm text-accent-foreground/80">
                Equity, not a salary. Currently working, or have worked,
                in estate agency, and fancy a change? Maybe this is for
                you.
              </p>
              <Link
                href="/careers"
                className="mt-7 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-ink-foreground hover:opacity-90"
              >
                Find out more
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl tracking-tight sm:text-4xl">
              Our values
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 75}>
                <div className="rounded-2xl border border-border p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                    {value.icon}
                  </span>
                  <p className="mt-4 font-medium text-foreground">{value.title}</p>
                  <p className="mt-2 text-sm text-foreground/60">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl tracking-tight sm:text-4xl">
              What makes us different
            </h2>
          </Reveal>
          <div className="mt-14 overflow-hidden rounded-2xl border border-border divide-y divide-border">
            <div className="grid gap-2 px-6 py-3 text-xs font-medium uppercase tracking-wide text-foreground/40 sm:grid-cols-2 sm:gap-6">
              <span>Most agencies</span>
              <span>Reyse</span>
            </div>
            {differences.map((d, i) => (
              <Reveal key={d.reyse} delay={i * 75}>
                <div className="grid gap-3 px-6 py-5 sm:grid-cols-2 sm:gap-6">
                  <div className="flex items-start gap-2.5 text-sm text-foreground/50">
                    <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
                    </svg>
                    <span>{d.most}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                    <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-accent-text" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M3 8.5l3.2 3.2L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{d.reyse}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
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
          </Reveal>
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

    </main>
  );
}
