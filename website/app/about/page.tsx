import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import RevealWords from "../components/RevealWords";
import ClipReveal from "../components/ClipReveal";
import ScaleReveal from "../components/ScaleReveal";
import TimelineItem from "../components/TimelineItem";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "Why Reyse exists, and who's building it.",
});

// Month-level dates, not invented exact days — flagged for a real-date
// pass once the actual launch dates for each milestone are confirmed.
const timeline = [
  { date: "3 August 2026", label: "Reyse is founded" },
  { date: "August 2026", label: "Free resources — courses, videos, audiobooks and downloads — go live" },
  { date: "September 2026", label: "The eleven guarantees are published" },
  { date: "September 2026", label: "reyse.co.uk starts running Reyse's own SEO and GEO service on itself" },
];

const values = [
  {
    title: "Bespoke, never templated.",
    body: "Every strategy is built around your specific area, competitors, and reputation — not a playbook run for every client. What works for the agency down the road may not work for you, so we build around what's actually true for your business, not what's convenient for ours.",
  },
  {
    title: "Authenticity, from inside the industry.",
    body: "Built by someone who worked inside an estate agency and turned an invisible branch into the leading one in its area — the strategy comes from having actually done the job, not studied it from outside.",
  },
  {
    title: "Integrity, explained in full.",
    body: "No jargon standing in for a real answer — everything is explained clearly enough that you understand it, not just trust it. And no hype standing in for proof — we make the results measurable, so you can see them for yourself.",
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
            <RevealWords text="We couldn’t find our own agency. So we built the fix." />
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
          <ClipReveal>
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
          </ClipReveal>
        </div>
      </div>

      <div className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 sm:grid-cols-2 sm:items-start sm:gap-12">
            <div>
              <Reveal>
                <h2 className="font-heading text-3xl leading-[1.1] tracking-tight sm:text-4xl">
                  The moment it clicked
                </h2>
              </Reveal>
              <Reveal delay={130}>
                <p className="mt-5 text-foreground/70">
                  Before Reyse, I was a lettings branch manager. I inherited a
                  book of business with one of the worst reputations in the
                  area — partly deserved, and partly from being invisible
                  everywhere it mattered.
                </p>
              </Reveal>
              <Reveal delay={260}>
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
              </Reveal>
            </div>

            <div className="sm:mt-32">
              <Reveal delay={150}>
                <h2 className="font-heading text-3xl leading-[1.1] tracking-tight sm:text-4xl">
                  What I believe
                </h2>
              </Reveal>
              <div className="mt-5 space-y-5 text-foreground/70">
                <Reveal delay={280}>
                  <p>
                    That was the moment. Fixing the reputation was only half
                    the job — that wins back the locals. Investors, people
                    based outside the area, and people moving in were the
                    other half, and reputation alone was never going to
                    reach them.
                  </p>
                </Reveal>
                <Reveal delay={410}>
                  <p>
                    Nothing Reyse does is new technology. Search engine
                    optimisation and generative engine optimisation both
                    existed before Reyse did. What was missing was agents
                    actually using it. Most have never checked whether they
                    show up when someone asks ChatGPT — the ones who got
                    recommended were just the lucky ones.
                  </p>
                </Reveal>
                <Reveal delay={540}>
                  <p>
                    I think this is one of the first real windows for AI to
                    make a measurable difference in this industry — not as a
                    gimmick, but as leads and enquiries. For as long as most
                    of the industry hasn&rsquo;t caught on, it&rsquo;s also
                    one of the clearest ways to pull ahead of the agency
                    down the road.
                  </p>
                </Reveal>
              </div>
            </div>
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
            <div>
              <ScaleReveal from="scale-150 rotate-6" className="w-fit">
                <div className="relative h-28 w-28 overflow-hidden rounded-full border border-ink-foreground/15">
                  <Image
                    src="/images/morgan-king.png"
                    alt="Morgan King, Founder of Reyse"
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
              </ScaleReveal>
              <Reveal delay={150}>
                <p className="mt-4 font-semibold">Morgan King</p>
                <p className="mt-1 text-sm text-ink-foreground/70">
                  Founder — and for now, the whole team. I fell into the
                  estate agency industry for one reason: I wanted to learn
                  sales. Fortunately, I fell in love with the industry, and
                  found an angle only a handful of agents were tackling.
                  Then Reyse was born.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={150}>
            <div className="mx-auto mt-20 max-w-3xl animate-[soft-glow_3.5s_ease-in-out_infinite] rounded-3xl bg-accent px-8 py-14 text-center text-accent-foreground">
              <h3 className="font-heading text-3xl tracking-tight sm:text-4xl">
                Hiring partner(s).
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-sm text-accent-foreground/80">
                Equity, not a salary. No experience required — just
                someone genuinely up for building this from scratch.
                Maybe this is for you.
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
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl tracking-tight sm:text-4xl">
                Why these three
              </h2>
              <p className="mt-4 text-foreground/70">
                These aren&rsquo;t values picked to sound good in a pitch deck. Each one exists
                because I watched agencies get burned by the opposite of it — generic strategies
                that didn&rsquo;t fit, marketers who&rsquo;d never worked the desk, and results
                dressed up to look better than they were.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-10">
            {values.map((value, i) => (
              <div key={value.title}>
                <ScaleReveal delay={i * 120} from="scale-150">
                  <p className="font-heading text-6xl tracking-tight text-foreground/15 sm:text-7xl">
                    0{i + 1}
                  </p>
                </ScaleReveal>
                <Reveal delay={i * 120 + 150}>
                  <div>
                    <p className="mt-5 text-lg font-semibold">{value.title}</p>
                    <p className="mt-3 text-sm text-foreground/70">{value.body}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <ClipReveal>
            <h2 className="font-heading text-2xl leading-[1.1] tracking-tight sm:text-3xl">
              Built in the open
            </h2>
          </ClipReveal>
          <div className="mt-5 space-y-5 text-foreground/70">
            <Reveal delay={100}>
              <p>
                Reyse is in the process of launching right now, which
                means the most honest proof I can offer isn&rsquo;t a
                client list yet — it&rsquo;s what I&rsquo;m doing to
                my own website. I&rsquo;m applying Reyse&rsquo;s own
                SEO and GEO service to reyse.co.uk as I build it, in
                public. If it doesn&rsquo;t work here first, it
                doesn&rsquo;t go near a client.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p>
                It&rsquo;s also why the{" "}
                <Link href="/guarantees" className="font-medium text-accent-text hover:underline">
                  guarantees page
                </Link>{" "}
                exists — eleven specific, enforceable promises instead
                of vague reassurance. If honesty is the whole pitch,
                it has to be checkable.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-panel px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-center text-xs font-medium uppercase tracking-wide text-foreground/50">
              Timeline
            </p>
            <h2 className="mt-3 text-center font-heading text-2xl tracking-tight sm:text-3xl">
              Built in public, one milestone at a time
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div
              className="relative mt-12 -mx-6 overflow-x-auto px-6 pb-2 [scrollbar-width:thin]"
              style={{
                maskImage: "linear-gradient(to right, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, black 90%, transparent)",
              }}
            >
              <div className="flex w-max gap-0">
                {timeline.map((item, i) => (
                  <TimelineItem key={item.date + item.label} date={item.date} label={item.label} delay={i * 130} />
                ))}
                <TimelineItem date="To be continued" label="…" delay={timeline.length * 130} future showConnector={false} />
              </div>
            </div>
            <p className="mt-2 text-center text-xs text-foreground/40 sm:hidden">Scroll right for more →</p>
          </Reveal>
        </div>
      </div>

    </main>
  );
}
