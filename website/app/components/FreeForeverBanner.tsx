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

function GridCross({ left, top }: { left: string; top: string }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 text-ink-foreground/25"
      style={{ left, top }}
    >
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
    </span>
  );
}

const gridDividers = ["16.667%", "33.333%", "50%", "66.667%", "83.333%"];

const spots = Array.from({ length: TOTAL_SPOTS }, (_, i) => CLAIMED_COUNTIES[i] ?? null);

export default function FreeForeverBanner() {
  return (
    <section className="border-t border-b border-border bg-ink px-6 py-20 text-ink-foreground">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <div className="text-center lg:text-left">
            <h2 className="font-heading text-3xl leading-[1.15] tracking-tight sm:text-5xl">
              The first {TOTAL_SPOTS} clients pay nothing.
            </h2>
            <p className="mt-4 text-ink-foreground/70 lg:max-w-md">
              One per county, free while Reyse is at this early stage.
              {CLAIMED_COUNTIES.length > 0 && (
                <>
                  {" "}
                  {CLAIMED_COUNTIES.join(", ")}{" "}
                  {CLAIMED_COUNTIES.length === 1 ? "is" : "are"} already gone.
                </>
              )}
            </p>
            <Link
              href="/free-forever"
              className="mt-8 hidden items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 lg:inline-flex"
            >
              Check if your county&rsquo;s open
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="rounded-3xl border border-ink-foreground/15 bg-ink-foreground/5 p-5 sm:p-6">
            <div className="flex items-center justify-between text-xs font-medium text-ink-foreground/60">
              <span>{SPOTS_REMAINING} of {TOTAL_SPOTS} counties still open</span>
              <span className="font-heading text-sm tracking-tight text-ink-foreground">
                <CountdownTimer />
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              {spots.map((county, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 ${
                    county
                      ? "border-ink-foreground/10 opacity-50"
                      : "border-accent/30 bg-accent/5"
                  }`}
                >
                  <span className="text-sm font-medium">{county ?? `Spot ${i + 1}`}</span>
                  {county ? (
                    <span className="text-xs text-ink-foreground/50">Claimed</span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs font-medium text-accent">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                      </span>
                      Open
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center lg:hidden">
          <Link
            href="/free-forever"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Check if your county&rsquo;s open
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="relative mx-auto mt-14 grid w-full max-w-3xl grid-cols-3 border-y border-ink-foreground/10 sm:grid-cols-6">
          {gridDividers.map((left) => (
            <span key={left} className="hidden sm:contents">
              <GridCross left={left} top="0%" />
              <GridCross left={left} top="100%" />
            </span>
          ))}
          {offerHighlights.map((item, i) => (
            <div
              key={item}
              className={`px-3 py-2 text-center text-xs text-ink-foreground/65 ${
                i % 3 !== 2 ? "border-r border-ink-foreground/10" : ""
              } ${i < 3 ? "border-b border-ink-foreground/10" : ""} sm:border-b-0 sm:[&:not(:last-child)]:border-r`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
