"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "reyse-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-panel/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-5 text-sm text-foreground/70 sm:flex-row sm:justify-between">
        <p className="max-w-2xl">
          We use essential cookies to make Reyse work, and may use analytics cookies to
          understand how the site is used. Read our{" "}
          <a href="/terms" className="underline hover:text-foreground">
            Terms of Service
          </a>{" "}
          for more.
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
