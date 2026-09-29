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
      viewBox="0 0 72 170"
      className="h-32 w-16 text-accent-text sm:h-40"
      fill="none"
      aria-hidden="true"
    >
      <filter id="handDrawnArrow" x="-30%" y="-30%" width="160%" height="160%">
        <feTurbulence type="fractalNoise" baseFrequency="0.045 0.06" numOctaves="2" seed="7" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.2" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <path
        ref={pathRef}
        d="M18 8 C 4 52, 54 78, 34 128 M34 128 L24 116 M34 128 L44 118"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#handDrawnArrow)"
      />
    </svg>
  );
}
