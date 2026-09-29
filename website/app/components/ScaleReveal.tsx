"use client";

import { useScrollReveal } from "../lib/useScrollReveal";

// Settles into place from slightly oversized and blurred, rather than
// Reveal's rise-from-below — suits a standalone focal element (a big
// numeral, a portrait) better than body text.
export default function ScaleReveal({
  children,
  delay = 0,
  className = "",
  from = "scale-125",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  from?: string;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "scale-100 opacity-100 blur-0" : `${from} opacity-0 blur-sm`
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
