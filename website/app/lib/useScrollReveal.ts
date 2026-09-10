"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Starts visible; only hides (for a scroll-reveal transition) if the
 * element is confirmed below the fold at mount, so content never depends
 * on JS running to be seen. Reveals on a real IntersectionObserver hit —
 * but also on a fallback timer, because a render path with no genuine
 * scroll events (print-to-PDF, some crawler or screenshot tooling) never
 * fires the observer at all and would otherwise leave it stuck hidden.
 */
export function useScrollReveal<T extends HTMLElement>(fallbackMs = 1200) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.getBoundingClientRect().top <= window.innerHeight) return;

    setVisible(false);
    const reveal = () => setVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );
    observer.observe(el);

    const timer = setTimeout(reveal, fallbackMs);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [fallbackMs]);

  return { ref, visible };
}
