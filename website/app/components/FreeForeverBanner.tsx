import Link from "next/link";
import CountdownTimer from "./CountdownTimer";
import { CLAIMED_COUNTIES, SPOTS_REMAINING, TOTAL_SPOTS } from "../lib/freeForever";

// Sticky, stacked on top of HeroSlideshow inside the shared wrapper in
// page.tsx — see the comment there for how the hand-off timing works.
export default function FreeForeverBanner() {
  return (
    <section className="sticky top-0 z-20 flex h-dvh flex-col items-center justify-center border-t border-b border-border bg-ink text-ink-foreground">
      <Link
        href="/free-forever"
        className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 text-center transition hover:opacity-90"
      >
        <p className="text-xs font-medium uppercase tracking-widest text-ink-foreground/60">
          {SPOTS_REMAINING} of {TOTAL_SPOTS} counties still open
        </p>
        <h2 className="max-w-2xl font-heading text-3xl leading-[1.15] tracking-tight sm:text-5xl">
          The first {TOTAL_SPOTS} clients don&rsquo;t pay. Ever.
        </h2>
        <p className="max-w-xl text-ink-foreground/70">
          We don&rsquo;t have client logos yet — because instead of chasing
          them, we&rsquo;re giving the full service away, completely free,
          forever, to the first business in {TOTAL_SPOTS} counties. One per
          county.{" "}
          {CLAIMED_COUNTIES.length > 0 && (
            <>
              {CLAIMED_COUNTIES.join(", ")} claimed
              {CLAIMED_COUNTIES.length === 1 ? "" : " so far"}.
            </>
          )}
        </p>
        <p className="text-xs font-medium uppercase tracking-widest text-ink-foreground/60">
          This month&rsquo;s window closes in <CountdownTimer />
        </p>
        <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground">
          Read the full offer
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>
    </section>
  );
}
