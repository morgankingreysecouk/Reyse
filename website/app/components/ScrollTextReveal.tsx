"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollTextReveal({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    let raf = 0;

    const measure = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Reveal starts once the block's top crosses 85% down the viewport,
      // and finishes once it reaches 35% down — a comfortable read-as-you-
      // scroll window rather than an instant snap.
      const start = vh * 0.85;
      const end = vh * 0.35;
      const raw = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const threshold = words.length <= 1 ? 0 : i / (words.length - 1);
        const active = progress >= threshold;
        return (
          <span
            key={i}
            className="transition-colors duration-300 ease-out"
            style={{ color: active ? "var(--foreground)" : "rgba(28, 26, 23, 0.22)" }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}
