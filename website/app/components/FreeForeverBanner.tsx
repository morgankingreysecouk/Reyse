import Link from "next/link";
import CountdownTimer from "./CountdownTimer";
import { CLAIMED_COUNTIES, SPOTS_REMAINING, TOTAL_SPOTS } from "../lib/freeForever";

export default function FreeForeverBanner() {
  return (
    // A full-height sticky takeover: the wrapper is taller than one
    // viewport, so the inner section pins in place — covering the header
    // and everything else — for a stretch of scrolling, then releases and
    // scrolls away once the wrapper's bottom passes the viewport top. A
    // sticky element with no taller parent would just stick forever.
    <div className="relative h-[180vh]">
      <section className="sticky top-0 z-30 flex h-screen flex-col items-center justify-center border-t border-b border-border bg-ink text-ink-foreground">
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
    </div>
  );
}
