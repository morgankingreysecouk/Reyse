"use client";

import { useEffect, useRef, useState } from "react";
import type { ComparisonRow, IncludedItem } from "../products/data";

function TierRow({ label, value }: { label: string; value: string }) {
  const included = value.startsWith("✓");
  const note = value.replace(/^[✓✗]/, "").trim();
  return (
    <div className="flex items-start justify-between gap-3 py-2.5">
      <span className="text-xs font-medium text-foreground/65">{label}</span>
      <div className="flex items-center gap-1.5">
        <span className={included ? "text-accent-text" : "text-foreground/30"} aria-hidden>
          {included ? "✓" : "✗"}
        </span>
        <span className="text-right text-xs text-foreground/60">
          {note || (included ? "Included" : "Not included")}
        </span>
      </div>
    </div>
  );
}

// The left card stays pinned and tracks whichever item is centred in the
// viewport, so the long "everything included" read gets a visual anchor
// that actually changes instead of turning into one unbroken scroll of text.
export default function IncludedItemsScroll({
  items,
  comparisonRows,
}: {
  items: IncludedItem[];
  comparisonRows?: ComparisonRow[];
}) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = refs.current.findIndex((el) => el === entry.target);
          if (index !== -1) setActive(index);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeItem = items[active];
  const activeRow = comparisonRows?.find((row) => row.service === activeItem.title);

  return (
    <div className="mt-10 flex flex-col gap-10 sm:flex-row sm:gap-12">
      <div className="hidden shrink-0 sm:block sm:w-[260px]">
        <div className="sticky top-28 rounded-3xl border border-border bg-panel p-7 shadow-xl">
          <p className="font-heading text-5xl leading-none tracking-tight text-accent-text">
            0{active + 1}
          </p>
          <p className="mt-4 font-heading text-xl leading-[1.15] tracking-tight">
            {activeItem.title}
          </p>
          {activeItem.subtitle && (
            <p className="mt-1.5 text-xs text-foreground/65">{activeItem.subtitle}</p>
          )}

          {activeItem.growthOnly ? (
            <p className="mt-5 inline-block rounded-full bg-ink px-2.5 py-1 text-[11px] font-medium text-ink-foreground">
              Growth only
            </p>
          ) : (
            activeRow && (
              <div className="mt-5 divide-y divide-border border-t border-border">
                <TierRow label="Foundation" value={activeRow.foundation} />
                <TierRow label="Growth" value={activeRow.growth} />
              </div>
            )
          )}

          <div className="mt-6 flex gap-1.5" aria-hidden>
            {items.map((item, i) => (
              <span
                key={item.title}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  i === active ? "bg-accent" : "bg-border"
                }`}
              />
            ))}
          </div>
          <p className="sr-only" aria-live="polite">
            Showing item {active + 1} of {items.length}: {activeItem.title}
          </p>
        </div>
      </div>

      <div className="flex-1 space-y-10">
        {items.map((item, i) => (
          <div
            key={item.title}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className="scroll-mt-28"
          >
            <div className="flex gap-4">
              <span
                aria-hidden
                className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent-text"
              >
                {i + 1}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="font-medium text-foreground">
                    {item.title}
                    {item.subtitle && (
                      <span className="font-normal text-foreground/65"> — {item.subtitle}</span>
                    )}
                  </h3>
                  {item.growthOnly && (
                    <span className="rounded-full bg-ink px-2 py-0.5 text-[11px] font-medium text-ink-foreground">
                      Growth only
                    </span>
                  )}
                </div>
                {item.stat && (
                  <div className="mt-3 flex items-center gap-4 rounded-2xl border border-accent/20 bg-accent/5 px-5 py-3">
                    <p className="shrink-0 font-heading text-3xl leading-none tracking-tight text-accent-text">
                      {item.stat.value}
                    </p>
                    <p className="text-sm text-foreground/70">{item.stat.label}</p>
                  </div>
                )}
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-panel p-4">
                    <p className="text-xs font-medium text-foreground/65">The problem</p>
                    <p className="mt-1.5 text-sm text-foreground/70">{item.problem}</p>
                  </div>
                  <div className="rounded-xl border border-accent/20 bg-accent/5 p-4">
                    <p className="text-xs font-medium text-accent-text">What we do</p>
                    <p className="mt-1.5 text-sm text-foreground/70">{item.fix}</p>
                  </div>
                </div>
                {item.tierNote && (
                  <p className="mt-3 text-xs text-foreground/65">{item.tierNote}</p>
                )}
                {item.growthNote && (
                  <div className="mt-3 rounded-xl border border-accent/20 bg-accent/5 p-4">
                    <p className="text-xs font-medium text-accent-text">On Growth</p>
                    <p className="mt-1 text-sm text-foreground/70">{item.growthNote}</p>
                  </div>
                )}
                {item.impactNote && (
                  <div className="mt-3 rounded-xl border border-border bg-panel p-4">
                    <p className="text-xs font-medium text-foreground/70">SEO &amp; GEO impact</p>
                    <p className="mt-1 text-sm text-foreground/70">{item.impactNote}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
