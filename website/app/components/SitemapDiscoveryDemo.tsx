"use client";

import { useEffect, useRef, useState } from "react";

const checkIcon = (
  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function PageRow({ label, day, delayMs, playing }: { label: string; day: string; delayMs: number; playing: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2 text-xs">
      <span className="text-foreground/70">{label}</span>
      <span
        className={`flex items-center gap-1.5 text-foreground/40 transition-opacity duration-500 ${
          playing ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: playing ? `${delayMs}ms` : "0ms" }}
      >
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent/20 text-accent-text">
          {checkIcon}
        </span>
        {day}
      </span>
    </div>
  );
}

// Same four pages, discovered at very different speeds — runs once on
// scroll into view, mirroring the load-speed demo's pattern.
export default function SitemapDiscoveryDemo() {
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

  const pages = ["New listing page", "Area guide", "Updated valuation page", "New branch page"];

  return (
    <div ref={ref} className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-border p-5">
        <p className="text-xs font-medium text-foreground/60">Without a sitemap</p>
        <div className="mt-3 space-y-2">
          {pages.map((label, i) => (
            <PageRow key={label} label={label} day={`Day ${(i + 1) * 8}`} delayMs={i * 400} playing={playing} />
          ))}
        </div>
        <p className="mt-3 text-xs text-foreground/60">Google finds them eventually, on its own schedule.</p>
      </div>

      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
        <p className="text-xs font-medium text-accent-text">With a sitemap</p>
        <div className="mt-3 space-y-2">
          {pages.map((label, i) => (
            <PageRow key={label} label={label} day="Day 1" delayMs={i * 150} playing={playing} />
          ))}
        </div>
        <p className="mt-3 text-xs text-foreground/60">You told Google where to look. It checked immediately.</p>
      </div>
    </div>
  );
}
