"use client";

import { useEffect, useState } from "react";
import { useTypewriter } from "../lib/useTypewriter";

// A small, low-opacity background prop — not a demo you're meant to focus
// on, just ambient motion behind the headline. Cycles Google search then
// ChatGPT on a timer, typing each query out and holding on the "result"
// before crossfading to the next.
type Phase = "google" | "chatgpt";

const GOOGLE_QUERY = "best estate agent in Birmingham";
const CHATGPT_QUERY = "best lettings agent in Romford";
const TYPE_SPEED = 45;
const HOLD_MS = 2600;
const FADE_MS = 500;

export default function HeroSearchDemo() {
  const [phase, setPhase] = useState<Phase>("google");
  const [visible, setVisible] = useState(true);

  const google = useTypewriter(GOOGLE_QUERY, phase === "google", TYPE_SPEED);
  const chatgpt = useTypewriter(CHATGPT_QUERY, phase === "chatgpt", TYPE_SPEED);
  const done = phase === "google" ? google.done : chatgpt.done;

  useEffect(() => {
    if (!done) return;
    const id = setTimeout(() => setVisible(false), HOLD_MS);
    return () => clearTimeout(id);
  }, [done]);

  useEffect(() => {
    if (visible) return;
    const id = setTimeout(() => {
      setPhase((p) => (p === "google" ? "chatgpt" : "google"));
      setVisible(true);
    }, FADE_MS);
    return () => clearTimeout(id);
  }, [visible]);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute bottom-8 right-4 hidden w-72 rounded-2xl border border-border bg-panel/90 p-4 shadow-xl backdrop-blur-sm transition-opacity duration-500 lg:block xl:right-16 ${
        visible ? "opacity-80" : "opacity-0"
      }`}
    >
      {phase === "google" ? (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-xs text-foreground/65">
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="7" cy="7" r="5" />
              <path d="m11 11 3.5 3.5" strokeLinecap="round" />
            </svg>
            <span>
              {google.displayed}
              <span className={`ml-px inline-block w-px bg-foreground/40 ${google.done ? "opacity-0" : "animate-pulse"}`}>
                &nbsp;
              </span>
            </span>
          </div>
          <div
            className={`rounded-xl border border-accent/30 bg-accent/10 px-3 py-2.5 transition-all duration-500 ${
              google.done ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
            }`}
          >
            <p className="text-xs font-semibold text-foreground">Reyse Estates</p>
            <p className="text-[11px] text-foreground/60">reyse-estates.co.uk</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[11px] font-medium text-foreground/60">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-ink text-[9px] text-ink-foreground">
              AI
            </span>
            ChatGPT
          </div>
          <div className="max-w-[90%] self-end rounded-xl rounded-br-sm border border-border bg-background px-3 py-2 text-xs text-foreground">
            {chatgpt.displayed}
            <span className={`ml-px inline-block w-px bg-foreground/40 ${chatgpt.done ? "opacity-0" : "animate-pulse"}`}>
              &nbsp;
            </span>
          </div>
          <div
            className={`flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-3 py-2.5 transition-all duration-500 ${
              chatgpt.done ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
            }`}
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-accent-foreground">
              R
            </span>
            <p className="text-xs font-semibold text-foreground">Reyse Lettings</p>
          </div>
        </div>
      )}
    </div>
  );
}
