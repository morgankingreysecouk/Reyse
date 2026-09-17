import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Charity",
  description: "Reyse is early-stage and pre-profit — here's the honest state of our charitable commitment, and what changes once that's no longer true.",
});

const realities = [
  {
    heading: "There's no profit to give away yet",
    body: "Reyse is still early-stage — launching now, not yet profitable. A page promising a specific donation percentage before there's any profit to take it from would be a marketing line, not a commitment. This isn't that.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8c-1.5-2-4-2.5-5.5-1s-1.5 4 0 5.5L12 18l5.5-5.5c1.5-1.5 1.5-4 0-5.5s-4-1-5.5 1z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    heading: "The commitment, once there is",
    body: "Once Reyse is genuinely profitable, a real share of that profit goes to housing and homelessness causes — not as a rounding-error PR gesture, but a fixed, public commitment we'll hold ourselves to. The exact figure gets set and published when it means something, not before.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 11l9-7 9 7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    heading: "Why housing",
    body: "Reyse exists because of the property industry, so it's the obvious place to put something back — housing insecurity and homelessness, specifically, rather than something unrelated chosen just to look generous. No partner charity is confirmed yet; that gets picked properly, not rushed to fill this page.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12l9-8 9 8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 10.5V20a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 21v-6h5v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function CharityPage() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
          Charity
        </p>
        <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          No profit to give away yet. Here&rsquo;s the honest version anyway.
        </h1>
        <Reveal delay={100}>
          <p className="mt-5 text-lg text-foreground/70">
            Most charity pages perform a generosity the company hasn&rsquo;t
            earned yet. This one won&rsquo;t. Here&rsquo;s exactly where
            things stand, and what changes once Reyse is actually profitable.
          </p>
        </Reveal>

        <div className="mt-16 space-y-10">
          {realities.map((item, i) => (
            <Reveal key={item.heading} delay={i * 100}>
              <div className="border-t border-border pt-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                  {item.icon}
                </span>
                <h2 className="mt-4 font-heading text-xl leading-[1.2] tracking-tight">
                  {item.heading}
                </h2>
                <p className="mt-3 text-foreground/70">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mx-auto mt-20 max-w-xl rounded-2xl border border-border bg-panel p-8 text-center">
            <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
              Know a housing charity worth backing?
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/65">
              No partner is confirmed yet, and a genuine recommendation from
              someone in or around the industry counts for more than us
              picking one off a list.
            </p>
            <a
              href="mailto:hello@reyse.co.uk?subject=Charity%20suggestion%20for%20Reyse"
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              hello@reyse.co.uk
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
