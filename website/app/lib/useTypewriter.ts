"use client";

import { useEffect, useState } from "react";

/**
 * Reveals `text` one character at a time while `active` is true. Display is
 * gated on `active` directly (rather than resetting state synchronously),
 * so it replays cleanly each time a looping slideshow re-activates it.
 */
export function useTypewriter(text: string, active: boolean, speedMs = 35) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = setTimeout(() => setCount(text.length), 0);
      return () => clearTimeout(id);
    }

    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) clearInterval(id);
    }, speedMs);
    return () => clearInterval(id);
  }, [active, text, speedMs]);

  const displayed = active ? text.slice(0, count) : "";
  return { displayed, done: active && count >= text.length };
}
