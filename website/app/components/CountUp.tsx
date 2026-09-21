"use client";

import { useEffect, useRef, useState } from "react";

// Matches an optional leading symbol (£/$/≈/~), the first numeric run
// (with thousands separators and an optional decimal), and keeps whatever
// comes after as a static suffix. This one pattern quietly handles every
// shape actually used across the site's stats — "110", "£450", "89%",
// "20-30%" (animates the "20", "-30%" rides along as suffix), "1 in 4",
// "365 days" — without per-page special-casing. Anything with no leading
// digit ("Custom") simply doesn't match, so it renders unanimated, as-is.
const NUMBER_PATTERN = /^([£$≈~]?)(\d[\d,]*\.?\d*)(.*)$/;

export default function CountUp({
  value,
  duration = 1100,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const match = value.match(NUMBER_PATTERN);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => (match ? `${match[1]}0${match[3]}` : value));
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;

    const [, prefix, numberText, suffix] = match;
    const target = parseFloat(numberText.replace(/,/g, ""));
    const decimals = numberText.includes(".") ? numberText.split(".")[1].length : 0;
    const hasThousandsComma = numberText.includes(",");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || animatedRef.current) return;
          animatedRef.current = true;

          if (reduced) {
            setDisplay(value);
            return;
          }

          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            const current = target * eased;
            const formatted = current.toLocaleString("en-GB", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
              useGrouping: hasThousandsComma,
            });
            setDisplay(`${prefix}${formatted}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [match, value, duration]);

  if (!match) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
