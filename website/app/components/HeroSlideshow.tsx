"use client";

import Link from "next/link";
import { useState } from "react";
import {
  GeoMockup,
  MarketIntelligenceMockup,
  ReviewMockup,
  ScaleMockup,
  SeoMockup,
} from "./HeroMockups";

// One fixed headline (the strongest, most differentiated claim) instead of
// rotating five on a timer — auto-advancing carousels bury every message
// after the first behind a timer nobody waits for. The other four live on
// as a click-through gallery beside it, so a visitor explores at their own
// pace instead of having the message picked for them.
const proofs = [
  {
    key: "geo",
    label: "AI search",
    caption: "What ChatGPT tells your next customer",
    Mockup: GeoMockup,
  },
  {
    key: "seo",
    label: "Google & Safari",
    caption: "What shows up when they Google you",
    Mockup: SeoMockup,
  },
  {
    key: "reviews",
    label: "Reviews",
    caption: "Every review, answered for you",
    Mockup: ReviewMockup,
  },
  {
    key: "intelligence",
    label: "Competitors",
    caption: "Where you stand against the business down the road",
    Mockup: MarketIntelligenceMockup,
  },
  {
    key: "scale",
    label: "Multi-branch",
    caption: "One system, replicated properly for every branch",
    Mockup: ScaleMockup,
  },
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const current = proofs[active];

  return (
    <section className="border-b border-border bg-background lg:sticky lg:top-0 lg:z-10 lg:flex lg:h-dvh lg:items-center">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 pt-28 lg:grid-cols-2 lg:items-center lg:gap-12 lg:pb-20 lg:pt-40">
        <div>
          <h1 className="max-w-lg font-heading text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Your next customer just asked ChatGPT, not Google.
          </h1>
          <p className="mt-5 max-w-md text-base text-foreground/70 sm:mt-6 sm:text-lg">
            Buyers and tenants are asking AI for recommendations before they
            ever type into Google. Reyse makes sure your business is the one
            they&rsquo;re told about.
          </p>
          <div className="mt-7 flex flex-wrap gap-4 sm:mt-8">
            <Link
              href="/get-started"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Get started
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-foreground/40"
            >
              See how it works
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-foreground/60">See it in action:</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {proofs.map((proof, i) => (
              <button
                key={proof.key}
                type="button"
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                  i === active
                    ? "border-accent bg-accent/10 text-foreground"
                    : "border-border text-foreground/60 hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {proof.label}
              </button>
            ))}
          </div>

          <div className="relative mt-4 min-h-[380px] overflow-hidden rounded-3xl border border-border bg-panel shadow-xl sm:min-h-[420px]">
            <div className="flex items-center gap-1.5 border-b border-border px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ec6a5e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#61c454]" />
            </div>
            <div key={current.key} className="animate-[hero-fade-in_0.4s_ease-out] p-6">
              <current.Mockup active />
            </div>
          </div>
          <p className="mt-3 text-center text-sm text-foreground/60">{current.caption}</p>
        </div>
      </div>
    </section>
  );
}
