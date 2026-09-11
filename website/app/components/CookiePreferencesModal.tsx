"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import {
  closePreferences,
  getConsent,
  isModalOpen,
  isModalOpenOnServer,
  savePreferences,
  subscribeModal,
} from "../lib/consent";

function subscribeNever() {
  return () => {};
}

function useIsClient() {
  return useSyncExternalStore(subscribeNever, () => true, () => false);
}

function Toggle({
  checked,
  onChange,
  disabled,
  label,
}: {
  checked: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
        checked ? "bg-accent" : "bg-border"
      } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-background shadow transition-transform ${
          checked ? "translate-x-[22px]" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

export default function CookiePreferencesModal() {
  const mounted = useIsClient();
  const open = useSyncExternalStore(subscribeModal, isModalOpen, isModalOpenOnServer);
  const [analytics, setAnalytics] = useState(true);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) setAnalytics(getConsent().analytics);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    const siblings = Array.from(document.body.children).filter(
      (el) => el !== panelRef.current,
    ) as HTMLElement[];
    siblings.forEach((el) => el.setAttribute("inert", ""));

    return () => {
      siblings.forEach((el) => el.removeAttribute("inert"));
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreferences();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!mounted || !open) return null;

  function save() {
    savePreferences(analytics);
    closePreferences();
  }

  return createPortal(
    <div
      ref={panelRef}
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-0 sm:items-center sm:p-6"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-preferences-title"
        className="max-h-[85dvh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-border bg-background p-6 shadow-xl sm:rounded-3xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="cookie-preferences-title" className="font-heading text-xl leading-[1.15] tracking-tight">
            Cookie preferences
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close"
            onClick={closePreferences}
            className="-m-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full p-2 text-foreground/50 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <p className="mt-2 text-sm text-foreground/65">
          This is the full, honest picture — most sites here would show you three or
          four categories whether or not they're actually used. This site only has two.
        </p>

        <div className="mt-6 space-y-5">
          <div className="rounded-2xl border border-border p-4">
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium text-foreground">Necessary</p>
              <Toggle checked disabled label="Necessary (always on)" />
            </div>
            <p className="mt-2 text-sm text-foreground/65">
              Remembers that you&rsquo;ve made a choice here, so you&rsquo;re not asked
              again every visit. Stored in your browser, never sent anywhere. Can&rsquo;t
              be turned off — there&rsquo;s nothing to opt out of.
            </p>
          </div>

          <div className="rounded-2xl border border-border p-4">
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium text-foreground">Analytics</p>
              <Toggle checked={analytics} onChange={setAnalytics} label="Analytics" />
            </div>
            <p className="mt-2 text-sm text-foreground/65">
              Vercel Web Analytics — cookieless by design, so it doesn&rsquo;t legally
              require your consent under UK cookie law. We&rsquo;re giving you the choice
              anyway. Off means your visit isn&rsquo;t counted at all.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={closePreferences}
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-foreground/40"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={save}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Save preferences
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
