"use client";

import { useSyncExternalStore } from "react";
import CookiePreferencesModal from "./CookiePreferencesModal";
import {
  acceptAll,
  getConsent,
  getConsentOnServer,
  openPreferences,
  rejectNonEssential,
  subscribeConsent,
} from "../lib/consent";

export default function CookieConsent() {
  const { decided } = useSyncExternalStore(subscribeConsent, getConsent, getConsentOnServer);

  return (
    <>
      {!decided && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-panel/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm text-foreground/70">
              This site doesn&rsquo;t use tracking cookies — the only thing that
              might be counted is your visit, via cookieless, anonymised
              analytics. Your call either way.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openPreferences}
                className="text-sm font-medium text-foreground/70 underline hover:text-foreground"
              >
                Manage preferences
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="rounded-full border border-border px-5 py-2 text-sm font-medium hover:border-foreground/40"
              >
                Reject non-essential
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}
      <CookiePreferencesModal />
    </>
  );
}
