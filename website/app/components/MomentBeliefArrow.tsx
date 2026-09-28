"use client";

import { useEffect, useRef } from "react";

// Draws itself in (and back out) as the section scrolls through the
// viewport, rather than firing once — progress is recomputed straight from
// the arrow's own bounding rect on every scroll/resize tick, so scrolling
// back up genuinely reverses the draw instead of just replaying it forward.
export default function MomentBeliefArrow() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!svg || !path) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = svg.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, 1 - rect.top / window.innerHeight));
      path.style.strokeDashoffset = `${length * (1 - progress)}`;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 64 24"
      className="h-6 w-16 text-accent-text"
      fill="none"
      aria-hidden="true"
    >
      <path
        ref={pathRef}
        d="M2 12 H50 M50 12 L41 4 M50 12 L41 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
