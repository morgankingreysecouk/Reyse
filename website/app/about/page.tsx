import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Why Reyse exists, and who's building it.",
};

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

        <div className="mt-20 grid gap-12 sm:grid-cols-[1fr_300px] sm:items-start">
          <div className="space-y-5 text-foreground/70">
            <p>
              Before Reyse, I was a lettings negotiator. I inherited a book of
              business with one of the worst reputations in the area — built up
              long before I got there, by people who were long gone by the time I
              was left to fix it.
            </p>
            <p>
              I was determined to turn it around, so I did what any frustrated
              agent would do: I Googled the business, and I asked AI tools what
              they&rsquo;d say about it. The business wasn&rsquo;t there. Not ranked
              badly — not mentioned at all. Someone asking Google or ChatGPT who to
              trust in the area would never hear of us, no matter how good the
              actual service became.
            </p>
            <p>
              That was the moment. The reputation wasn&rsquo;t really the problem —
              the invisibility was. Fixing one without the other was never going to
              work.
            </p>
            <p>
              I&rsquo;ve spent the year since researching how AI is actually
              changing how people search — not the theory, the specifics: what
              ChatGPT says when someone asks about a business like yours, why Bing
              and Apple matter as much as Google, what actually gets a business
              recommended instead of ignored. Reyse is what came out of that year,
              built on two years of watching the property industry from the
              inside.
            </p>
          </div>

          <Reveal>
            <PhotoPlaceholder
              label="Morgan King, Founder"
              note="Photo placeholder — swap in a real photo here"
            />
          </Reveal>
        </div>

        <div className="mx-auto mt-20 max-w-3xl border-t border-border pt-14">
          <h2 className="font-heading text-2xl leading-[1.1] tracking-tight">
            What we believe
          </h2>
          <div className="mt-5 space-y-5 text-foreground/70">
            <p>
              AI-powered solutions already exist for almost everything Reyse
              does — schema markup, review management, competitive intelligence,
              none of it is new technology. What&rsquo;s missing is property
              businesses actually using it. Most agents have never checked whether
              they show up when someone asks ChatGPT who to use, let alone fixed it
              if they don&rsquo;t.
            </p>
            <p>
              We think this is one of the first real windows for AI to make a
              measurable difference in this industry — not as a gimmick, but as
              leads, enquiries, and the numbers that actually move the needle. And
              for as long as most of the industry hasn&rsquo;t caught on yet,
              it&rsquo;s also one of the clearest ways to pull ahead of the agency
              down the road.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl border-t border-border pt-14">
          <h2 className="font-heading text-2xl leading-[1.1] tracking-tight">
            Built in the open
          </h2>
          <div className="mt-5 space-y-5 text-foreground/70">
            <p>
              Reyse is in the process of launching right now, which means the most
              honest proof we can offer isn&rsquo;t a client list yet — it&rsquo;s
              what we&rsquo;re doing to our own website. We&rsquo;re applying
              Reyse&rsquo;s own SEO and GEO service to reyse.co.uk as we build it,
              in public. If it doesn&rsquo;t work on us first, it doesn&rsquo;t go
              near a client.
            </p>
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
