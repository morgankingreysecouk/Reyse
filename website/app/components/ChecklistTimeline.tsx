"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  checklistCategoryBlurbs,
  type ChecklistCategory,
  type ChecklistItem,
} from "../seocourse/data";

const tagStyles: Record<ChecklistItem["type"], string> = {
  direct: "bg-accent/15 text-accent-text",
  indirect: "bg-ink/10 text-foreground/70",
  prerequisite: "bg-foreground/10 text-foreground/60",
};

const tagLabels: Record<ChecklistItem["type"], string> = {
  direct: "Direct",
  indirect: "Indirect",
  prerequisite: "Prerequisite",
};

// Left card stays pinned and tracks whichever category is centred in the
// viewport (same technique as IncludedItemsScroll), while the checklist
// itself scrolls past as a connected timeline — each item's dot fills in
// permanently the first time it's scrolled past, same one-way "seen once"
// behaviour as Reveal elsewhere in the course.
export default function ChecklistTimeline({ items }: { items: ChecklistItem[] }) {
  const categories = useMemo(() => {
    const seen: ChecklistCategory[] = [];
    for (const item of items) {
      if (!seen.includes(item.category)) seen.push(item.category);
    }
    return seen;
  }, [items]);

  const [activeCategory, setActiveCategory] = useState(0);
  const [seenItems, setSeenItems] = useState<Set<number>>(new Set());
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = categoryRefs.current.findIndex((el) => el === entry.target);
          if (index !== -1) setActiveCategory(index);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    categoryRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [categories]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = itemRefs.current.findIndex((el) => el === entry.target);
          if (index === -1) return;
          setSeenItems((prev) => (prev.has(index) ? prev : new Set(prev).add(index)));
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  let flatIndex = -1;

  return (
    <div className="mt-14 flex flex-col gap-10 sm:flex-row sm:gap-12">
      <div className="hidden shrink-0 sm:block sm:w-[240px]">
        <div className="sticky top-28 rounded-3xl border border-border bg-panel p-7 shadow-xl">
          <p className="font-heading text-5xl leading-none tracking-tight text-accent-text">
            0{activeCategory + 1}
          </p>
          <p className="mt-4 font-heading text-xl leading-[1.15] tracking-tight">
            {categories[activeCategory]}
          </p>
          <p className="mt-2 text-xs text-foreground/65">{checklistCategoryBlurbs[categories[activeCategory]]}</p>

          <div className="mt-6 flex gap-1.5" aria-hidden>
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  i === activeCategory ? "bg-accent" : "bg-border"
                }`}
              />
            ))}
          </div>
          <p className="mt-3 text-xs text-foreground/50">
            {seenItems.size} of {items.length} checked in
          </p>
        </div>
      </div>

      <div className="flex-1">
        {categories.map((category, ci) => (
          <div
            key={category}
            ref={(el) => {
              categoryRefs.current[ci] = el;
            }}
            className={ci === 0 ? "" : "mt-10"}
          >
            <p className="text-xs font-medium uppercase tracking-wide text-foreground/50 sm:hidden">
              {category}
            </p>
            <div className="relative mt-3 space-y-2.5 pl-6 sm:mt-0">
              <div className="absolute inset-y-0 left-[3px] w-px bg-border" aria-hidden />
              {items
                .filter((item) => item.category === category)
                .map((entry) => {
                  flatIndex += 1;
                  const index = flatIndex;
                  const seen = seenItems.has(index);
                  return (
                    <div
                      key={entry.item}
                      ref={(el) => {
                        itemRefs.current[index] = el;
                      }}
                      className={`relative transition-all duration-700 ease-out ${
                        seen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`absolute -left-6 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border-2 transition-colors duration-300 ${
                          seen ? "border-accent bg-accent" : "border-border bg-background"
                        }`}
                      />
                      <div className="flex items-center justify-between gap-4 rounded-xl border border-border px-5 py-3.5">
                        <p className="text-sm text-foreground">{entry.item}</p>
                        <span
                          className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${tagStyles[entry.type]}`}
                        >
                          {tagLabels[entry.type]}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
