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

export default function CountdownTimer() {
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

  return (
    <span className="tabular-nums">
      {days}d {pad(hours)}h {pad(minutes)}m {pad(seconds)}s
    </span>
  );
}
