"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    label: "Drop it in",
    body: "Add Reyse to your website, WhatsApp or socials in minutes — no developer needed.",
  },
  {
    label: "It handles the inquiry",
    body: "Reyse answers questions about availability, pricing and viewings instantly, any time of day.",
  },
  {
    label: "You get the lead",
    body: "Qualified conversations get handed to your team, ready to close.",
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

  return (
    <div className="mt-10 flex flex-col gap-10 sm:flex-row sm:gap-12">
      <div className="hidden shrink-0 sm:block">
        <div className="sticky top-24 flex max-w-xs flex-col items-start gap-6 py-4">
          {steps.map((step, i) => (
            <button
              key={step.label}
              type="button"
              onClick={() =>
                refs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })
              }
              className={`flex w-fit cursor-pointer flex-col items-start text-left transition-colors duration-500 ${
                i === active ? "text-foreground" : "text-foreground/60"
              }`}
            >
              <span className="text-xs font-medium text-accent">0{i + 1}</span>
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

      <div className="flex flex-1 flex-col gap-16 sm:gap-24">
        {steps.map((step, i) => (
          <div
            key={step.label}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className="flex min-h-[50vh] flex-col justify-center rounded-xl border border-border p-8"
          >
            <span className="text-sm font-medium text-accent">0{i + 1}</span>
            <h3 className="mt-2 text-xl font-semibold">{step.label}</h3>
            <p className="mt-3 max-w-md text-foreground/60">{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
