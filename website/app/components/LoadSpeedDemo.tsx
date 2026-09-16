"use client";

import { useEffect, useRef, useState } from "react";

// A live-feeling illustration of the stat this lesson opens with — two
// sites "loading" side by side, one fast, one slow, with the slow one
// visibly losing the visitor. Runs once when it scrolls into view rather
// than looping, so it reads as a demonstration rather than a decoration.
export default function LoadSpeedDemo() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlaying(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-foreground/60">Fast site</span>
          <span className="font-heading text-lg leading-none text-accent-text">1.2s</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-border">
          <div
            className={`h-full rounded-full bg-accent transition-[width] duration-[1200ms] ease-out ${
              playing ? "w-full" : "w-0"
            }`}
          />
        </div>
        <p
          className={`mt-3 text-sm text-foreground/70 transition-opacity duration-500 ${
            playing ? "opacity-100 delay-[1300ms]" : "opacity-0"
          }`}
        >
          Page&rsquo;s loaded. Customer browses listings.
        </p>
      </div>

      <div className="rounded-2xl border border-border p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-foreground/60">Slow site</span>
          <span className="font-heading text-lg leading-none text-foreground/70">4.8s</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-border">
          <div
            className={`h-full rounded-full bg-foreground/40 transition-[width] duration-[4800ms] ease-out ${
              playing ? "w-full" : "w-0"
            }`}
          />
        </div>
        <p
          className={`mt-3 text-sm text-foreground/70 transition-opacity duration-500 ${
            playing ? "opacity-100 delay-[2200ms]" : "opacity-0"
          }`}
        >
          Still loading. Customer&rsquo;s already back on Google, clicking the next result.
        </p>
      </div>
    </div>
  );
}
