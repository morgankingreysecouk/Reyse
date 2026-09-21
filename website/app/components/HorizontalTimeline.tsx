"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type ChecklistItem = { item: string; category: string; type: string };

const ChevronIcon = ({ flip }: { flip?: boolean }) => (
  <svg
    viewBox="0 0 16 16"
    className={`h-4 w-4 ${flip ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
  >
    <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// A manually-driven horizontal browser, not an auto-scrolling marquee —
// reading a real checklist while the row keeps moving under you fights the
// one thing this component exists for. Category pills above let you jump
// straight to a section instead; the row itself only moves on drag, scroll,
// or the arrow buttons.
export default function HorizontalTimeline({
  items,
  tagStyles,
  tagLabels,
}: {
  items: ChecklistItem[];
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

  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const trackLeft = track.getBoundingClientRect().left;
      let closest = 0;
      let closestDist = Infinity;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const dist = Math.abs(el.getBoundingClientRect().left - trackLeft);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      const category = items[closest]?.category;
      const index = categories.indexOf(category);
      if (index !== -1) setActiveCategory(index);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [items, categories]);

  const scrollToCategory = (categoryIndex: number) => {
    const category = categories[categoryIndex];
    const firstIndex = items.findIndex((it) => it.category === category);
    const el = cardRefs.current[firstIndex];
    const track = trackRef.current;
    if (!el || !track) return;
    track.scrollTo({ left: el.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const nudge = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <div>
      <div className="scrollbar-hide -mx-1 mb-4 flex gap-2 overflow-x-auto px-1 pb-1">
        {categories.map((category, i) => (
          <button
            key={category}
            type="button"
            onClick={() => scrollToCategory(i)}
            className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
              i === activeCategory
                ? "border-accent bg-accent/15 text-accent-text"
                : "border-border text-foreground/60 hover:border-foreground/40"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => nudge(-1)}
          aria-label="Scroll left"
          className="absolute left-0 top-1/2 z-20 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground/70 shadow-sm hover:text-foreground sm:-left-4"
        >
          <ChevronIcon flip />
        </button>
        <button
          type="button"
          onClick={() => nudge(1)}
          aria-label="Scroll right"
          className="absolute right-0 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground/70 shadow-sm hover:text-foreground sm:-right-4"
        >
          <ChevronIcon />
        </button>

        <div
          ref={trackRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-7 py-2 sm:px-1"
        >
          {items.map((entry, i) => (
            <div
              key={`${entry.category}-${i}`}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="flex w-60 shrink-0 snap-start flex-col justify-between gap-5 rounded-2xl border border-border bg-panel p-5"
            >
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wide text-foreground/45">
                  {entry.category}
                </p>
                <p className="mt-2 text-sm text-foreground">{entry.item}</p>
              </div>
              <span
                className={`w-fit rounded-full px-2.5 py-1 text-[11px] font-medium ${tagStyles[entry.type]}`}
              >
                {tagLabels[entry.type]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
