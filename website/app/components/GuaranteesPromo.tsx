"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { guarantees } from "../guarantees/data";
import { useAutoScrollCarousel } from "../lib/useAutoScrollCarousel";

export default function GuaranteesPromo() {
  const trackRef = useAutoScrollCarousel<HTMLDivElement>();
  const loopItems = [...guarantees, ...guarantees];

  return (
    <section className="overflow-x-hidden border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-6 pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-block rounded-full border border-ink-foreground/20 px-3 py-1 text-xs font-medium text-ink-foreground/70">
            Guarantees
          </p>
          <h2 className="font-heading text-3xl leading-[1.1] tracking-tight sm:text-4xl">
            Eleven promises. Each one specific enough to break.
          </h2>
          <p className="mt-4 text-ink-foreground/70">
            Vague reassurance is easy to write and impossible to hold anyone
            to. Every guarantee names exactly what we&rsquo;re promising —
            and exactly what happens if we don&rsquo;t deliver.
          </p>
        </div>
      </div>

      <Reveal>
        <div
          ref={trackRef}
          tabIndex={0}
          role="region"
          aria-label="All 11 guarantees, scrollable"
          className="mx-[calc(50%-50vw)] mt-14 flex w-screen cursor-grab touch-pan-y gap-4 overflow-x-auto px-6 pb-2 outline-none [-webkit-overflow-scrolling:touch] [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
          }}
        >
          {loopItems.map((g, i) => (
            <div
              key={`${g.title}-${i}`}
              className="w-[270px] shrink-0 select-none rounded-2xl border border-ink-foreground/15 bg-ink-foreground/5 p-6 sm:w-[310px]"
            >
              <p className="text-sm font-semibold">{g.title}</p>
              <p className="mt-3 text-sm text-ink-foreground/70">{g.promise}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mt-10 flex justify-center">
          <Link
            href="/guarantees"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            See all 11 guarantees, in full
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
