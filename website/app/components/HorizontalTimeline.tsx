"use client";

import { useEffect, useMemo, useRef } from "react";

export type ChecklistItem = { item: string; category: string; type: string };

type Card =
  | { kind: "marker"; category: string; index: number }
  | { kind: "item"; entry: ChecklistItem; key: string };

// A horizontal, self-scrolling take on ChecklistTimeline's vertical
// sticky-panel layout — same items data, but as a looping filmstrip that
// moves on its own and can also be dragged/scrolled by hand. Content is
// duplicated once so the loop point is invisible (resetting scrollLeft by
// exactly half the track width lands on an identical frame).
export default function HorizontalTimeline({
  items,
  categoryBlurbs,
  tagStyles,
  tagLabels,
}: {
  items: ChecklistItem[];
  categoryBlurbs: Record<string, string>;
  tagStyles: Record<string, string>;
  tagLabels: Record<string, string>;
}) {
  const categories = useMemo(() => {
    const seen: string[] = [];
    for (const item of items) {
      if (!seen.includes(item.category)) seen.push(item.category);
    }
    return seen;
  }, [items]);

  const cards = useMemo(() => {
    const out: Card[] = [];
    categories.forEach((category, index) => {
      out.push({ kind: "marker", category, index });
      items
        .filter((entry) => entry.category === category)
        .forEach((entry, i) => out.push({ kind: "item", entry, key: `${category}-${i}` }));
    });
    return out;
  }, [items, categories]);

  const looped = useMemo(() => [...cards, ...cards], [cards]);

  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const speed = 0.6;
    const step = () => {
      if (!pausedRef.current) {
        const half = track.scrollWidth / 2;
        track.scrollLeft += speed;
        if (track.scrollLeft >= half) track.scrollLeft -= half;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [looped]);

  const pause = () => {
    pausedRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  };
  const resumeSoon = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, 2200);
  };

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent sm:w-20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent sm:w-20"
      />
      <div
        ref={trackRef}
        onMouseEnter={pause}
        onMouseLeave={resumeSoon}
        onTouchStart={pause}
        onTouchEnd={resumeSoon}
        onPointerDown={pause}
        onPointerUp={resumeSoon}
        onWheel={() => {
          pause();
          resumeSoon();
        }}
        className="scrollbar-hide flex gap-4 overflow-x-auto px-6 py-2 sm:px-0"
      >
        {looped.map((card, i) =>
          card.kind === "marker" ? (
            <div
              key={`marker-${i}`}
              className="flex w-56 shrink-0 flex-col justify-center rounded-3xl bg-accent px-6 py-7 text-accent-foreground"
            >
              <p className="font-heading text-3xl leading-none tracking-tight">
                0{card.index + 1}
              </p>
              <p className="mt-3 font-heading text-lg leading-[1.15] tracking-tight">
                {card.category}
              </p>
              <p className="mt-2 text-xs text-accent-foreground/75">
                {categoryBlurbs[card.category]}
              </p>
            </div>
          ) : (
            <div
              key={`${card.key}-${i}`}
              className="flex w-64 shrink-0 flex-col justify-between gap-4 rounded-2xl border border-border bg-panel p-5"
            >
              <p className="text-sm text-foreground">{card.entry.item}</p>
              <span
                className={`w-fit rounded-full px-2.5 py-1 text-[11px] font-medium ${tagStyles[card.entry.type]}`}
              >
                {tagLabels[card.entry.type]}
              </span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
