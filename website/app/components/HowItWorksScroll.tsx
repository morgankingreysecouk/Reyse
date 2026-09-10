"use client";

import { useEffect, useRef, useState } from "react";
import { GeoMockup, MarketIntelligenceMockup, SeoMockup } from "./HeroMockups";

const steps = [
  {
    label: "We audit your visibility",
    body: "We check how you show up across Google, Bing, AI search and every review platform — and flag exactly what's costing you enquiries.",
    Mockup: GeoMockup,
  },
  {
    label: "We fix what's costing you",
    body: "Schema, business profiles, listings and review replies — set up properly and left working, not just flagged.",
    Mockup: SeoMockup,
  },
  {
    label: "You stay ahead of it",
    body: "Growth keeps monitoring, managing and reporting on it every month, so nothing quietly slips backwards as search and your business keep moving.",
    Mockup: MarketIntelligenceMockup,
  },
];

export default function HowItWorksScroll() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = refs.current.findIndex((el) => el === entry.target);
          if (index !== -1) setActive(index);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = (i: number) =>
    refs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div className="mt-10 flex flex-col gap-10 sm:flex-row sm:gap-12">
      {/* Mobile-only: the sticky index rail below doesn't fit a narrow
          screen, so this is its equivalent — a tappable progress row
          synced to the same active-step state. */}
      <div className="sticky top-20 z-10 -mx-6 flex items-start gap-3 bg-background/90 px-6 py-3 backdrop-blur-sm sm:hidden">
        {steps.map((step, i) => (
          <button
            key={step.label}
            type="button"
            onClick={() => goTo(i)}
            className="flex flex-1 flex-col items-start gap-1.5 text-left"
          >
            <span
              className={`h-1 w-full rounded-full transition-colors duration-500 ${
                i === active ? "bg-accent" : "bg-border"
              }`}
            />
            <span
              className={`text-xs font-medium transition-colors duration-500 ${
                i === active ? "text-foreground" : "text-foreground/50"
              }`}
            >
              0{i + 1}
            </span>
          </button>
        ))}
      </div>

      <div className="hidden shrink-0 sm:block">
        <div className="sticky top-24 flex max-w-xs flex-col items-start gap-6 py-4">
          {steps.map((step, i) => (
            <button
              key={step.label}
              type="button"
              onClick={() => goTo(i)}
              className={`flex w-fit cursor-pointer flex-col items-start text-left transition-colors duration-500 ${
                i === active ? "text-foreground" : "text-foreground/60"
              }`}
            >
              <span className="text-xs font-medium text-accent-text">0{i + 1}</span>
              <span className="mt-1 text-base font-medium">{step.label}</span>
              <span className="relative mt-3 h-px w-[174px] bg-border">
                <span
                  className={`absolute -top-px left-0 h-[3px] bg-accent transition-all duration-500 ease-out ${
                    i === active ? "w-full" : "w-0"
                  }`}
                />
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-10 sm:gap-16">
        {steps.map((step, i) => (
          <div
            key={step.label}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className="flex flex-col gap-6 rounded-xl border border-border p-6 sm:min-h-[300px] sm:flex-row sm:items-center sm:gap-8 sm:p-8"
          >
            <div className="relative h-40 shrink-0 overflow-hidden rounded-lg border border-border bg-panel/60 p-4 sm:h-48 sm:w-64">
              <step.Mockup />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-panel to-transparent" />
            </div>
            <div>
              <span className="text-sm font-medium text-accent-text">0{i + 1}</span>
              <h3 className="mt-2 text-xl font-semibold">{step.label}</h3>
              <p className="mt-3 max-w-md text-foreground/60">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
