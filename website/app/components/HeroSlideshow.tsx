import Link from "next/link";

const badges = [
  "SEO for Google, Bing & Apple",
  "GEO for ChatGPT, Gemini & Copilot",
  "Done With You or Done For You",
];

function CheckBadge() {
  return (
    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent text-accent">
      <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="m5 12 5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function HeroSlideshow() {
  return (
    <section className="border-b border-border bg-ink text-ink-foreground lg:sticky lg:top-0 lg:z-10 lg:flex lg:h-dvh lg:items-center">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 pb-20 pt-32 text-center lg:pb-24 lg:pt-40">
        <h1 className="font-heading text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          Get Found &amp; Stay Found
          <br className="hidden sm:block" />{" "}
          with <span className="text-accent">Reyse</span>.
        </h1>
        <p className="mt-6 max-w-xl text-base text-ink-foreground/70 sm:text-lg">
          SEO to rank on Google, and GEO to get recommended by ChatGPT,
          Gemini, and Copilot — built specifically for estate and letting
          agents.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {badges.map((badge) => (
            <span key={badge} className="flex items-center gap-2 text-sm text-ink-foreground/70">
              <CheckBadge />
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/get-started"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Get started
          </Link>
          <Link
            href="#how-it-works"
            className="rounded-full border border-ink-foreground/25 px-6 py-3 text-sm font-medium text-ink-foreground hover:border-ink-foreground/50"
          >
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
}
