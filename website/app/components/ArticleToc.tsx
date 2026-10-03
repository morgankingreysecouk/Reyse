"use client";

import { useEffect, useState } from "react";

export type TocHeading = { id: string; text: string };

// Highlights whichever section the reader is currently in, based on the
// last heading that's scrolled past a line just below the fixed header.
export default function ArticleToc({ headings, label = "On this page" }: { headings: TocHeading[]; label?: string }) {
  const [active, setActive] = useState<string>();

  useEffect(() => {
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);

    const onScroll = () => {
      let current: string | undefined;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= 160) current = el.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [headings]);

  function jumpTo(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    event.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <nav aria-label={label} className="sticky top-28">
      <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">{label}</p>
      <ol className="mt-4 space-y-1 border-l border-border">
        {headings.map((heading, i) => {
          const isActive = active === heading.id;
          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={(event) => jumpTo(event, heading.id)}
                aria-current={isActive ? "location" : undefined}
                className={`-ml-px flex gap-3 border-l-2 py-2 pl-4 text-sm leading-snug transition-colors duration-300 ${
                  isActive ? "border-accent text-foreground" : "border-transparent text-foreground/50 hover:text-foreground"
                }`}
              >
                <span className="font-medium tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span>{heading.text}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
