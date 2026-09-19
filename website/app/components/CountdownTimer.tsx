"use client";

import { useEffect, useState } from "react";
import { currentWindowCloses } from "../lib/freeForever";

function splitRemaining(ms: number) {
  const clamped = Math.max(0, ms);
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((clamped / (1000 * 60)) % 60);
  const seconds = Math.floor((clamped / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function CountdownTimer({ variant = "inline" }: { variant?: "inline" | "segments" }) {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(currentWindowCloses().getTime() - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (remaining === null) {
    // Avoid a server/client mismatch — render nothing until mounted.
    return <span className="tabular-nums">&nbsp;</span>;
  }

  const { days, hours, minutes, seconds } = splitRemaining(remaining);

  if (variant === "segments") {
    const units = [
      { value: days, label: "Days" },
      { value: hours, label: "Hours" },
      { value: minutes, label: "Minutes" },
      { value: seconds, label: "Seconds" },
    ];
    return (
      <div className="flex items-center justify-center gap-3 sm:gap-6">
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-3 sm:gap-6">
            <div className="text-center">
              <p className="font-heading text-3xl tabular-nums tracking-tight text-accent sm:text-5xl">
                {pad(unit.value)}
              </p>
              <p className="mt-1.5 text-[11px] font-medium uppercase tracking-wide text-ink-foreground/50">
                {unit.label}
              </p>
            </div>
            {i < units.length - 1 && (
              <span className="pb-5 font-heading text-2xl text-ink-foreground/20 sm:text-3xl">:</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <span className="tabular-nums">
      {days}d {pad(hours)}h {pad(minutes)}m {pad(seconds)}s
    </span>
  );
}
