"use client";

import { useAutoScrollCarousel } from "../lib/useAutoScrollCarousel";

export type ChecklistItem = { item: string; category: string; type: string };

// Every fix, auto-scrolling past continuously — the same cycling carousel
// pattern as the guarantees strip, so scanning the whole list is just
// watching it go by (or dragging through it), not clicking into categories
// one at a time.
export default function CourseChecklistCarousel({
  items,
  tagStyles,
  tagLabels,
}: {
  items: ChecklistItem[];
  tagStyles: Record<string, string>;
  tagLabels: Record<string, string>;
}) {
  const trackRef = useAutoScrollCarousel<HTMLDivElement>();
  const loopItems = [...items, ...items];

  return (
    <div
      ref={trackRef}
      tabIndex={0}
      role="region"
      aria-label={`All ${items.length} fixes, scrollable`}
      className="mx-[calc(50%-50vw)] flex w-screen cursor-grab touch-pan-y gap-4 overflow-x-auto px-6 pb-2 outline-none [-webkit-overflow-scrolling:touch] [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
      }}
    >
      {loopItems.map((entry, i) => (
        <div
          key={`${entry.item}-${i}`}
          className="w-[270px] shrink-0 select-none rounded-2xl border border-border bg-panel p-6 sm:w-[310px]"
        >
          <p className="text-xs font-medium text-accent-text">{entry.category}</p>
          <p className="mt-2 text-sm text-foreground">{entry.item}</p>
          <span
            className={`mt-4 inline-block rounded-full px-2.5 py-1 text-[11px] font-medium ${tagStyles[entry.type]}`}
          >
            {tagLabels[entry.type]}
          </span>
        </div>
      ))}
    </div>
  );
}
