"use client";

import { useMemo, useState } from "react";

export type ChecklistItem = { item: string; category: string; type: string };

const CheckIcon = (
  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3.5 8.5l3 3 6-6.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// A category-filtered checklist: pick a category from the pill row, see
// that category's blurb and its items as a stable, scannable list. No
// auto-scroll or drag required — switching category just fades the list
// in, so it's as easy to use on a phone as a desktop.
export default function HorizontalTimeline({
  items,
  tagStyles,
  tagLabels,
  categoryBlurbs,
}: {
  items: ChecklistItem[];
  tagStyles: Record<string, string>;
  tagLabels: Record<string, string>;
  categoryBlurbs?: Record<string, string>;
}) {
  const categories = useMemo(() => {
    const seen: string[] = [];
    for (const item of items) {
      if (!seen.includes(item.category)) seen.push(item.category);
    }
    return seen;
  }, [items]);

  const [activeCategory, setActiveCategory] = useState(0);
  const activeCategoryName = categories[activeCategory];
  const activeItems = useMemo(
    () => items.filter((item) => item.category === activeCategoryName),
    [items, activeCategoryName],
  );

  return (
    <div>
      <div className="scrollbar-hide -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        {categories.map((category, i) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(i)}
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

      <div key={activeCategoryName} className="mt-5 animate-[hero-fade-in_0.25s_ease-out_backwards]">
        <div className="flex items-baseline justify-between gap-3">
          {categoryBlurbs?.[activeCategoryName] && (
            <p className="text-sm text-foreground/60">{categoryBlurbs[activeCategoryName]}</p>
          )}
          <span className="shrink-0 text-xs text-foreground/40">
            {activeItems.length} {activeItems.length === 1 ? "item" : "items"}
          </span>
        </div>

        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {activeItems.map((entry) => (
            <div
              key={entry.item}
              className="flex items-start gap-3 rounded-xl border border-border bg-panel px-4 py-3"
            >
              <span
                aria-hidden
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border text-foreground/30"
              >
                {CheckIcon}
              </span>
              <p className="flex-1 text-sm text-foreground">{entry.item}</p>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${tagStyles[entry.type]}`}
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
