"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type ChecklistItem = { item: string; category: string; type: string };

// A self-scrolling, looping browser — content is duplicated once so the
// loop point is invisible (resetting scrollLeft by exactly half the track
// width lands on an identical frame). Auto-scroll pauses the moment someone
// touches, hovers, or scrolls it by hand, and resumes a couple of seconds
// after they let go, so it never fights someone actually reading a card.
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

  const looped = useMemo(() => [...items, ...items], [items]);

  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const speed = 0.5;
    const step = () => {
      const half = track.scrollWidth / 2;
      if (!pausedRef.current) {
        track.scrollLeft += speed;
        if (track.scrollLeft >= half) track.scrollLeft -= half;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [looped]);

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
      const category = looped[closest]?.category;
      const index = categories.indexOf(category);
      if (index !== -1) setActiveCategory(index);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [looped, categories]);

  const scrollToCategory = (categoryIndex: number) => {
    const category = categories[categoryIndex];
    const firstIndex = items.findIndex((it) => it.category === category);
    const el = cardRefs.current[firstIndex];
    const track = trackRef.current;
    if (!el || !track) return;
    track.scrollTo({ left: el.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

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
    <div>
      <div className="scrollbar-hide -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        {categories.map((category, i) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              pause();
              scrollToCategory(i);
              resumeSoon();
            }}
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
        className="scrollbar-hide mt-4 flex gap-4 overflow-x-auto py-2"
      >
        {looped.map((entry, i) => (
          <div
            key={`${entry.category}-${i}`}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="flex w-full shrink-0 flex-col justify-between gap-5 rounded-2xl border border-border bg-panel p-5 sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
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
