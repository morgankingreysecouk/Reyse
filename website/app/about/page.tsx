import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import { InvisibleMockup, SelfAuditMockup } from "../components/AboutVisuals";

export const metadata: Metadata = {
  title: "About",
  description: "Why Reyse exists, and who's building it.",
};

const stats = [
  { value: "0", label: "times our own agency was mentioned when we asked AI who to trust — that's what started this" },
  { value: "2 years", label: "on the lettings desk, not just studying the industry from outside it" },
  { value: "365 days", label: "of daily AI-search research before Reyse existed as a product" },
];

const beliefs = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12.5l2 2 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="8.5" />
      </svg>
    ),
    heading: "Nothing here is new technology",
    body: "AI-powered solutions already exist for almost everything Reyse does — schema markup, review management, competitive intelligence, none of it is new. What's missing is property businesses actually using it. Most agents have never checked whether they show up when someone asks ChatGPT who to use, let alone fixed it if they don't.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 16l5-6 4 4 7-9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    heading: "Most of the industry hasn't caught on yet",
    body: "We think this is one of the first real windows for AI to make a measurable difference in this industry — not as a gimmick, but as leads, enquiries, and the numbers that actually move the needle. For as long as most of the industry hasn't caught on, it's also one of the clearest ways to pull ahead of the agency down the road.",
  },
];

type Milestone = {
  number: string;
  heading: string;
  body: string;
  visual:
    | { type: "photo"; label: string; note: string }
    | { type: "mockup"; render: () => React.ReactNode };
};

const milestones: Milestone[] = [
  {
    number: "01",
    heading: "The lettings desk",
    body: "Before Reyse, I was a lettings negotiator. I inherited a book of business with one of the worst reputations in the area — built up long before I got there, by people who were long gone by the time I was left to fix it.",
    visual: {
      type: "photo",
      label: "Morgan King, early agency days",
      note: "Photo placeholder",
      // Higgsfield brief: Morgan in a lettings/estate agency setting — behind a
      // desk with property particulars or keys, or in front of a high-street
      // agency shopfront. Grounded, everyday, slightly overwhelmed — not a
      // polished corporate headshot. Portrait/4:5.
    },
  },
  {
    number: "02",
    heading: "The moment it clicked",
    body: "I was determined to turn it around, so I did what any frustrated agent would do: I Googled the business, and I asked AI tools what they'd say about it. The business wasn't there. Not ranked badly — not mentioned at all. Someone asking Google or ChatGPT who to trust in the area would never hear of us, no matter how good the actual service became.",
    visual: { type: "mockup", render: () => <InvisibleMockup /> },
  },
  {
    number: "03",
    heading: "The year of research",
    body: "I've spent the year since researching how AI is actually changing how people search — not the theory, the specifics: what ChatGPT says when someone asks about a business like yours, why Bing and Apple matter as much as Google, what actually gets a business recommended instead of ignored.",
    visual: {
      type: "photo",
      label: "One year of daily research",
      note: "Photo placeholder",
      // Higgsfield brief: Morgan at a laptop late at night — research mode,
      // multiple browser tabs implied, warm desk-lamp lighting, maybe a coffee
      // cup. Focused, solitary, determined. Portrait/4:5.
    },
  },
  {
    number: "04",
    heading: "Reyse, today",
    body: "Reyse is what came out of that year, built on two years of watching the property industry from the inside.",
    visual: {
      type: "photo",
      label: "Morgan King, Founder",
      note: "Photo placeholder",
      // Higgsfield brief: Morgan today — present-day portrait, confident,
      // direct-to-camera, clean/neutral background. More polished than the
      // "early agency days" shot above — this is the deliberate "after"
      // bookend to it. Portrait/4:5.
    },
  },
];

function PhotoPlaceholder({ label, note }: { label: string; note: string }) {
  return (
    <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-border bg-panel p-6 text-center">
      <span
        aria-hidden
        className="flex h-14 w-14 items-center justify-center rounded-full bg-background text-foreground/30"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8.5" r="3.5" />
          <path d="M4.5 20c1.2-4 4.2-6 7.5-6s6.3 2 7.5 6" strokeLinecap="round" />
        </svg>
      </span>
      <div>
        <p className="text-sm font-medium text-foreground/60">{label}</p>
        <p className="mt-1 text-xs text-foreground/40">{note}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
            About Reyse
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            We couldn&rsquo;t find our own agency. So we built the fix.
          </h1>
          <p className="mt-5 text-lg text-foreground/70">
            Reyse started as the answer to one lettings agency&rsquo;s invisibility
            problem — mine. It&rsquo;s now built for every property business with the
            same blind spot.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 border-y border-border py-10 sm:grid-cols-3 sm:gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div>
                <p className="font-heading text-4xl leading-none tracking-tight text-accent">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-foreground/60">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <Reveal>
            <h2 className="font-heading text-2xl leading-[1.1] tracking-tight sm:text-3xl">
              How Reyse started
            </h2>
          </Reveal>

          <div className="mt-14 flex flex-col gap-20">
            {milestones.map((milestone, i) => (
              <div key={milestone.number}>
                <Reveal>
                  <div
                    className={`grid items-center gap-10 sm:grid-cols-2 sm:gap-14 ${
                      i % 2 === 1 ? "sm:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div>
                      <span className="text-sm font-medium text-accent">{milestone.number}</span>
                      <h3 className="mt-2 font-heading text-2xl leading-[1.15] tracking-tight">
                        {milestone.heading}
                      </h3>
                      <p className="mt-4 text-foreground/70">{milestone.body}</p>
                    </div>
                    <div>
                      {milestone.visual.type === "photo" ? (
                        <PhotoPlaceholder
                          label={milestone.visual.label}
                          note={milestone.visual.note}
                        />
                      ) : (
                        milestone.visual.render()
                      )}
                    </div>
                  </div>
                </Reveal>

                {i === 1 ? (
                  <Reveal>
                    <p className="mx-auto mt-20 max-w-3xl text-center font-heading text-3xl leading-[1.3] tracking-tight sm:text-4xl">
                      The reputation wasn&rsquo;t really the problem — the
                      invisibility was.
                    </p>
                  </Reveal>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-border pt-14">
          <Reveal>
            <h2 className="font-heading text-2xl leading-[1.1] tracking-tight sm:text-3xl">
              What we believe
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
            {beliefs.map((belief, i) => (
              <Reveal key={belief.heading} delay={i * 100}>
                <div className="h-full rounded-2xl border border-border p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
                    {belief.icon}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{belief.heading}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{belief.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-border pt-14">
          <div className="grid items-center gap-10 sm:grid-cols-[1fr_360px] sm:gap-14">
            <Reveal>
              <div>
                <h2 className="font-heading text-2xl leading-[1.1] tracking-tight sm:text-3xl">
                  Built in the open
                </h2>
                <div className="mt-5 space-y-5 text-foreground/70">
                  <p>
                    Reyse is in the process of launching right now, which means
                    the most honest proof we can offer isn&rsquo;t a client list
                    yet — it&rsquo;s what we&rsquo;re doing to our own website.
                    We&rsquo;re applying Reyse&rsquo;s own SEO and GEO service to
                    reyse.co.uk as we build it, in public. If it doesn&rsquo;t
                    work on us first, it doesn&rsquo;t go near a client.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <SelfAuditMockup />
            </Reveal>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-3xl rounded-2xl border border-border bg-panel p-8 text-center">
          <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
            Want the same fix for your business?
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/60">
            Tell us about your business and we&rsquo;ll show you exactly
            what&rsquo;s missing.
          </p>
          <Link
            href="/get-started"
            className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Get started
          </Link>
        </div>
      </div>
    </main>
  );
}
