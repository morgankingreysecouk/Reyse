import Link from "next/link";
import CountdownTimer from "./CountdownTimer";
import { CLAIMED_COUNTIES, SPOTS_REMAINING, TOTAL_SPOTS } from "../lib/freeForever";

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

        <div className="mx-auto mt-14 max-w-lg text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-ink-foreground/50">
            This offer closes in
          </p>
          <div className="mt-4">
            <CountdownTimer variant="segments" />
          </div>
        </div>
      </div>
    </section>
  );
}
