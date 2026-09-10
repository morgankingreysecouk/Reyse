"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { industries, type Industry } from "../industries/data";

function IndustryTile({ industry, index }: { industry: Industry; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  // Visible by default — a tile only starts hidden (for the scroll-reveal
  // transition) if it's confirmed to be below the fold at mount, so
  // content never depends on JS running to be visible.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top > window.innerHeight) {
      setVisible(false);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={ref}
      href={`/industries/${industry.slug}`}
      style={{ transitionDelay: visible ? `${index * 50}ms` : "0ms" }}
      className={`group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border transition-all duration-500 ease-out sm:aspect-square ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <Image
        src={industry.image}
        alt={industry.imageAlt}
        fill
        sizes="(min-width: 640px) 33vw, 50vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <h3 className="font-heading text-base leading-[1.15] text-ink-foreground sm:text-lg">
          {industry.label}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-xs text-ink-foreground/80 sm:mt-0 sm:max-h-0 sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:mt-1.5 sm:group-hover:max-h-12 sm:group-hover:opacity-100">
          {industry.tagline}
        </p>
      </div>
    </Link>
  );
}

export default function IndustriesGrid() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
      {industries.map((industry, index) => (
        <IndustryTile key={industry.slug} industry={industry} index={index} />
      ))}
    </div>
  );
}
