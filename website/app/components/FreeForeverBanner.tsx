import Link from "next/link";
import CountdownTimer from "./CountdownTimer";
import { CLAIMED_COUNTIES, SPOTS_REMAINING, TOTAL_SPOTS } from "../lib/freeForever";

// Sticky, stacked on top of HeroSlideshow inside the shared wrapper in
// page.tsx — see the comment there for how the hand-off timing works.
export default function FreeForeverBanner() {
  return (
    <section className="flex flex-col items-center justify-center border-t border-b border-border bg-ink px-6 py-20 text-center text-ink-foreground lg:sticky lg:top-0 lg:z-20 lg:h-dvh lg:py-0">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
        <h2 className="font-heading text-3xl leading-[1.15] tracking-tight sm:text-5xl">
          The first {TOTAL_SPOTS} clients don&rsquo;t pay. Ever.
        </h2>
        <p className="max-w-md text-ink-foreground/70">
          Only {TOTAL_SPOTS} spots, one per county, for as long as your business exists.
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
      </div>
    </section>
  );
}
