"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const STORAGE_KEY = "reyse-cookie-consent";
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function hasAccepted() {
  try {
    return localStorage.getItem(STORAGE_KEY) !== null;
  } catch {
    return false;
  }
}

// Render nothing on the server — there's no way to know the visitor's
// choice until the client checks localStorage after hydration.
function hasAcceptedOnServer() {
  return true;
}

function accept() {
  try {
    localStorage.setItem(STORAGE_KEY, "accepted");
  } catch {
    // Storage may be unavailable (private browsing, disabled); the banner
    // will just reappear next visit, which is an acceptable fallback.
  }
  listeners.forEach((listener) => listener());
}

export default function CookieConsent() {
  const accepted = useSyncExternalStore(subscribe, hasAccepted, hasAcceptedOnServer);

  if (accepted) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-panel/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-5 text-sm text-foreground/70 sm:flex-row sm:justify-between">
        <p className="max-w-2xl">
          This site doesn&rsquo;t use tracking cookies — analytics here are
          cookieless and anonymised. Read our{" "}
          <Link href="/privacy" className="underline hover:text-foreground">
            Privacy Policy
          </Link>{" "}
          for the details.
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
