"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/hero-laptop.png",
    alt: "A person browsing a short-term rental site with an AI live chat widget open, mid-conversation",
    objectPosition: "center 65%",
    badge: "AI live chat for the property industry",
    heading: "Never miss another inquiry.",
    body: "Reyse answers your leads, tenants and guests instantly — day or night — so your team can focus on closing, not repeating themselves.",
  },
  {
    src: "/images/hero-2.png",
    alt: "A man relaxing on his sofa at night, messaging on his phone",
    objectPosition: "center 60%",
    badge: "Always online, even at 11pm",
    heading: "Answered in seconds. Any hour.",
    body: "While your team's asleep, Reyse is already replying — so no lead goes cold overnight.",
  },
  {
    src: "/images/hero-3.png",
    alt: "A family arriving at a grand country house at dusk",
    objectPosition: "center 80%",
    badge: "For every kind of booking",
    heading: "From first message to move-in day.",
    body: "City flat or country estate, Reyse turns inquiries into guests, tenants and buyers.",
  },
];

const SLIDE_DURATION_MS = 6000;

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  return (
    <section className="sticky top-0 z-0 flex min-h-screen items-end overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== index}
          className="absolute inset-0 transition-transform duration-[1100ms] ease-in-out"
          style={{ transform: `translateX(${(i - index) * 100}%)` }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            style={{ objectPosition: slide.objectPosition }}
          />
        </div>
      ))}

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10"
      />

      <div
        key={index}
        className="relative mx-auto w-full max-w-6xl animate-[hero-fade-in_0.7s_ease-out] px-6 pb-16 pt-24"
      >
        <p className="mb-4 inline-block rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur">
          {current.badge}
        </p>
        <h1 className="max-w-2xl font-heading text-4xl tracking-tight sm:text-5xl">
          {current.heading}
        </h1>
        <p className="mt-5 max-w-md text-lg text-foreground/80">{current.body}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/get-started"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Get started
          </a>
          <a
            href="#how-it-works"
            className="rounded-full border border-border bg-background/40 px-6 py-3 text-sm font-medium backdrop-blur hover:border-foreground/40"
          >
            See how it works
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 flex gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
