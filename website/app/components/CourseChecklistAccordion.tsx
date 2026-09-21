"use client";

import { useMemo, useState } from "react";

export type ChecklistItem = { item: string; category: string; type: string };

const CheckIcon = (
  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3.5 8.5l3 3 6-6.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronIcon = (
  <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// The full course scope, all at once: every category listed as a collapsed
// row (name, count, blurb) so a visitor sees the shape of the whole thing
// before opening a single one — instead of a tab-switcher that only ever
// shows one category and hides how many others exist.
export default function CourseChecklistAccordion({
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

  const [openCategory, setOpenCategory] = useState<string | null>(categories[0] ?? null);

  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border">
      {categories.map((category) => {
        const categoryItems = items.filter((item) => item.category === category);
        const isOpen = openCategory === category;

        return (
          <div key={category} className="bg-panel">
            <button
              type="button"
              onClick={() => setOpenCategory(isOpen ? null : category)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-ink/[0.02]"
              aria-expanded={isOpen}
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2.5">
                  <p className="font-heading text-base tracking-tight text-foreground">{category}</p>
                  <span className="shrink-0 rounded-full bg-background px-2 py-0.5 text-[11px] font-medium text-foreground/50">
                    {categoryItems.length}
                  </span>
                </div>
                {categoryBlurbs?.[category] && (
                  <p className="mt-1 truncate text-sm text-foreground/60">{categoryBlurbs[category]}</p>
                )}
              </div>
              <span className={`text-foreground/40 ${isOpen ? "rotate-180" : ""}`}>{ChevronIcon}</span>
            </button>

            {isOpen && (
              <div className="grid gap-2.5 px-5 pb-5 sm:grid-cols-2 animate-[hero-fade-in_0.25s_ease-out_backwards]">
                {categoryItems.map((entry) => (
                  <div
                    key={entry.item}
                    className="flex items-start gap-3 rounded-xl border border-border bg-background px-4 py-3"
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
            )}
          </div>
        );
      })}
    </div>
  );
}
