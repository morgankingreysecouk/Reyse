"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ClosingCta() {
  const ref = useRef<HTMLDivElement>(null);
  // Visible by default — only starts hidden (for the reveal transition) if
  // confirmed below the fold at mount, so it never depends on JS running
  // to be visible.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top > window.innerHeight) {
      setVisible(false);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`mx-auto max-w-2xl rounded-2xl border border-border bg-panel p-10 text-center transition-all duration-700 ease-out sm:p-14 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <h2 className="font-heading text-2xl leading-[1.15] tracking-tight sm:text-3xl">
        Ready to stop missing inquiries?
      </h2>
      <p className="mx-auto mt-3 max-w-md text-foreground/60">
        Tell us about your business and we&rsquo;ll show you Reyse in action.
      </p>
      <Link
        href="/get-started"
        className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
      >
        Get started
      </Link>
      <p className="mt-4 text-sm text-foreground/60">
        Prefer email?{" "}
        <a href="mailto:hello@reyse.co.uk" className="underline hover:text-foreground">
          hello@reyse.co.uk
        </a>
      </p>
    </div>
  );
}
