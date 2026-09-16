"use client";

import { useEffect, useRef, useState } from "react";

function StrengthBar({ pct, playing, delayMs }: { pct: number; playing: boolean; delayMs: number }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-border">
      <div
        className="h-full origin-left rounded-full bg-accent transition-transform duration-700 ease-out"
        style={{
          width: `${pct}%`,
          transform: playing ? "scaleX(1)" : "scaleX(0)",
          transitionDelay: playing ? `${delayMs}ms` : "0ms",
        }}
      />
    </div>
  );
}

// Two URLs splitting the same ranking strength vs one URL holding all of
// it — runs once on scroll into view, same pattern as the other demos.
export default function SplitRankingDemo() {
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
      <div className="rounded-2xl border border-border p-5">
        <p className="text-xs font-medium text-foreground/60">Duplicate, unredirected</p>
        <div className="mt-4 space-y-3">
          <div>
            <p className="text-xs text-foreground/60">/property-123</p>
            <div className="mt-1.5">
              <StrengthBar pct={50} playing={playing} delayMs={100} />
            </div>
          </div>
          <div>
            <p className="text-xs text-foreground/60">/listings/property-123</p>
            <div className="mt-1.5">
              <StrengthBar pct={50} playing={playing} delayMs={250} />
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs text-foreground/60">Same page, two addresses. Ranking strength split in two.</p>
      </div>

      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
        <p className="text-xs font-medium text-accent-text">Redirected to one</p>
        <div className="mt-4 space-y-3">
          <div>
            <p className="text-xs text-foreground/60">/property-123</p>
            <div className="mt-1.5">
              <StrengthBar pct={100} playing={playing} delayMs={100} />
            </div>
          </div>
          <div>
            <p className="text-xs text-foreground/60">/listings/property-123 → redirects above</p>
            <div className="mt-1.5">
              <StrengthBar pct={0} playing={playing} delayMs={0} />
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs text-foreground/60">One address left standing. Full ranking strength, combined.</p>
      </div>
    </div>
  );
}
