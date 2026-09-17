import Link from "next/link";
import CountdownTimer from "./CountdownTimer";
import { CLAIMED_COUNTIES, SPOTS_REMAINING, TOTAL_SPOTS } from "../lib/freeForever";

// A grid-with-plus-marks "logo wall" is a common trusted-by treatment —
// here it carries the offer's own real facts instead, since there are no
// client logos yet to show off.
const offerHighlights = [
  `${TOTAL_SPOTS} spots, free`,
  "One per county",
  "SEO included",
  "GEO included",
  "Done With You",
  "Done For You",
];

function GridCross({ left }: { left: string }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 text-ink-foreground/25"
      style={{ left }}
    >
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
    </span>
  );
}

// Sticky, stacked on top of HeroSlideshow inside the shared wrapper in
// page.tsx — see the comment there for how the hand-off timing works.
export default function FreeForeverBanner() {
  return (
    <section className="flex flex-col items-center justify-center border-t border-b border-border bg-ink px-6 py-20 text-center text-ink-foreground lg:sticky lg:top-0 lg:z-20 lg:h-dvh lg:py-0">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
        <h2 className="font-heading text-3xl leading-[1.15] tracking-tight sm:text-5xl">
          The first {TOTAL_SPOTS} clients pay nothing.
        </h2>
        <p className="max-w-md text-ink-foreground/70">
          Only {TOTAL_SPOTS} spots, one per county, free while Reyse is at this early stage.
          {CLAIMED_COUNTIES.length > 0 && (
            <>
              {" "}
              {CLAIMED_COUNTIES.join(", ")}{" "}
              {CLAIMED_COUNTIES.length === 1 ? "is" : "are"} already gone.
            </>
          )}
        </p>

        <div className="flex items-center gap-6 rounded-2xl border border-ink-foreground/15 bg-ink-foreground/5 px-6 py-5 sm:gap-8 sm:px-8">
          <div>
            <p className="font-heading text-3xl leading-none tracking-tight text-accent sm:text-4xl">
              {SPOTS_REMAINING}/{TOTAL_SPOTS}
            </p>
            <p className="mt-1.5 text-xs text-ink-foreground/60">counties still open</p>
          </div>
          <div className="h-10 w-px bg-ink-foreground/15" />
          <div>
            <p className="font-heading text-2xl leading-none tracking-tight sm:text-3xl">
              <CountdownTimer />
            </p>
            <p className="mt-1.5 text-xs text-ink-foreground/60">until this window closes</p>
          </div>
        </div>

        <Link
          href="/free-forever"
          className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
        >
          Check if your county&rsquo;s open
          <svg
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        <div className="relative mt-4 grid w-full max-w-lg grid-cols-3 border-y border-ink-foreground/10">
          <GridCross left="33.333%" />
          <GridCross left="66.666%" />
          {offerHighlights.map((item, i) => (
            <div
              key={item}
              className={`px-3 py-3 text-xs text-ink-foreground/65 ${
                i % 3 !== 2 ? "border-r border-ink-foreground/10" : ""
              } ${i < 3 ? "border-b border-ink-foreground/10" : ""}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
