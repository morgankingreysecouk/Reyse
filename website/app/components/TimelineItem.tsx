"use client";

import { useScrollReveal } from "../lib/useScrollReveal";

// Each history point pops in (dot scales up), then its connecting line
// draws out from it left-to-right, then the text rises in underneath —
// a small cascade per item rather than the whole row fading in at once.
export default function TimelineItem({
  date,
  label,
  delay = 0,
  future = false,
  showConnector = true,
}: {
  date: string;
  label: string;
  delay?: number;
  future?: boolean;
  showConnector?: boolean;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="flex w-[230px] shrink-0 flex-col sm:w-[280px]">
      <div className="flex items-center">
        <span
          aria-hidden
          className={`h-2.5 w-2.5 shrink-0 rounded-full transition-transform duration-500 ease-out ${
            future ? "border border-border bg-background" : "bg-accent"
          } ${visible ? "scale-100" : "scale-0"}`}
          style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
        />
        {showConnector && (
          <span
            aria-hidden
            className={`h-px flex-1 origin-left border-t border-dashed border-border transition-transform duration-700 ease-out ${
              visible ? "scale-x-100" : "scale-x-0"
            }`}
            style={{ transitionDelay: visible ? `${delay + 150}ms` : "0ms" }}
          />
        )}
      </div>
      <div
        className={`mt-3 pr-6 transition-all duration-500 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
        style={{ transitionDelay: visible ? `${delay + 200}ms` : "0ms" }}
      >
        <p className={`text-sm font-medium ${future ? "text-foreground/50" : "text-foreground"}`}>{date}</p>
        <p className={`mt-1 text-sm ${future ? "text-foreground/40" : "text-foreground/60"}`}>{label}</p>
      </div>
    </div>
  );
}
