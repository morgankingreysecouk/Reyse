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
    const track = trackRef.current;
    const firstCard = track?.children[0] as HTMLElement | undefined;
    if (!track || !firstCard) return;
    const gap = parseFloat(getComputedStyle(track).columnGap || "16");
    track.scrollBy({ left: dir * (firstCard.getBoundingClientRect().width + gap), behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div className="scrollbar-hide -mx-1 flex min-w-0 flex-1 gap-2 overflow-x-auto px-1 pb-1">
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

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Scroll left"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground/70 hover:border-foreground/40 hover:text-foreground"
          >
            <ChevronIcon flip />
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Scroll right"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground/70 hover:border-foreground/40 hover:text-foreground"
          >
            <ChevronIcon />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="scrollbar-hide mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-2"
      >
        {items.map((entry, i) => (
          <div
            key={`${entry.category}-${i}`}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="flex w-full shrink-0 snap-start flex-col justify-between gap-5 rounded-2xl border border-border bg-panel p-5 sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
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
  );
}
