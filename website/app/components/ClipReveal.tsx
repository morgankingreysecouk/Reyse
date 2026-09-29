"use client";

import { useScrollReveal } from "../lib/useScrollReveal";

// A left-to-right wipe instead of Reveal's fade+rise — the content is
// there the whole time, just clipped away until it scrolls into view,
// then the clip edge sweeps open like a curtain.
export default function ClipReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-[clip-path] duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
        visible ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_0_100%)]"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
