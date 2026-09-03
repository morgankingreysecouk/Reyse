"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/hero-2.jpg",
    alt: "A man relaxing on his sofa at night, messaging on his phone",
    objectPosition: "center 60%",
    heading: "Found by ChatGPT. Not just Google.",
    body: "Buyers and tenants are asking AI for recommendations before they ever type into Google. Reyse makes sure your business is the one they're told about.",
  },
  {
    src: "/images/hero-4.jpg",
    alt: "A phone on a dark wooden table showing a stack of new enquiry notifications from five different property developments",
    objectPosition: "center 55%",
    heading: "Every review. Answered instantly.",
    body: "Reyse drafts on-brand replies to every Google and Trustpilot review, so your reputation stays managed without taking up your day.",
  },
  {
    src: "/images/hero-laptop.jpg",
    alt: "A person browsing a short-term rental site with an AI live chat widget open, mid-conversation",
    objectPosition: "center 65%",
    heading: "Never miss another inquiry.",
    body: "Reyse answers your leads, tenants and guests instantly — day or night — so your team can focus on closing, not repeating themselves.",
  },
];

const SLIDE_DURATION_MS = 6000;

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-40 lg:grid-cols-2 lg:items-center">
        <div key={index} className="animate-[hero-fade-in_0.7s_ease-out]">
          <h1 className="max-w-lg font-heading text-5xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
            {current.heading}
          </h1>
          <p className="mt-6 max-w-md text-lg text-foreground/70">{current.body}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/get-started"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Get started
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-foreground/40"
            >
              See how it works
            </a>
          </div>
        </div>

        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-xl">
            {slides.map((slide, i) => (
              <div
                key={slide.src}
                aria-hidden={i !== index}
                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{ opacity: i === index ? 1 : 0 }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: slide.objectPosition }}
                />
              </div>
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-ink" : "w-2 bg-ink/25 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
