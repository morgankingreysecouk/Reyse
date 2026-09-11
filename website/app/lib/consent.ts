"use client";

// A real, working consent store — not a decorative banner. Two categories
// because that's what this site actually has to offer a choice about:
// "Necessary" (remembering the choice itself, which PECR's own strictly-
// necessary exemption covers — nothing to toggle) and "Analytics" (Vercel
// Web Analytics, which is cookieless and so doesn't legally need consent
// at all under PECR reg. 6 — but the toggle is wired to genuinely stop it
// loading when off, not just cosmetic).
//
// If real marketing/embed cookies are ever added, add a category here and
// gate that script the same way Analytics is gated below — the banner,
// modal, and footer link all need no changes to pick it up.

const STORAGE_KEY = "reyse-cookie-consent";

export type ConsentState = {
  decided: boolean;
  analytics: boolean;
};

type StoredConsent = { analytics: boolean };

const listeners = new Set<() => void>();
let modalOpen = false;
const modalListeners = new Set<() => void>();

function readStored(): StoredConsent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return { analytics: parsed.analytics !== false };
  } catch {
    return null;
  }
}

// useSyncExternalStore requires getSnapshot to return a referentially
// stable value when nothing has actually changed — a fresh object literal
// on every call reads as "changed" on every render, which React detects
// and throws on ("getServerSnapshot should be cached"). Cache and only
// replace the reference when the underlying values actually differ.
let cachedConsent: ConsentState = { decided: false, analytics: true };

export function getConsent(): ConsentState {
  const stored = readStored();
  const next: ConsentState = stored ? { decided: true, ...stored } : { decided: false, analytics: true };
  if (next.decided !== cachedConsent.decided || next.analytics !== cachedConsent.analytics) {
    cachedConsent = next;
  }
  return cachedConsent;
}

// Nothing is known about the visitor's choice until the client checks
// localStorage after hydration — default to "analytics on" so the first
// paint doesn't flash a banner-shaped hole, matching whatever the client
// settles on for a first-time visitor (who hasn't rejected anything yet).
// A single module-level constant, so the reference never changes.
const serverConsent: ConsentState = { decided: true, analytics: true };
export function getConsentOnServer(): ConsentState {
  return serverConsent;
}

function write(next: StoredConsent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Storage may be unavailable (private browsing, disabled) — the
    // banner will just reappear next visit, an acceptable fallback.
  }
  listeners.forEach((listener) => listener());
}

export function subscribeConsent(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function acceptAll() {
  write({ analytics: true });
}

export function rejectNonEssential() {
  write({ analytics: false });
}

export function savePreferences(analytics: boolean) {
  write({ analytics });
}

export function subscribeModal(callback: () => void) {
  modalListeners.add(callback);
  return () => modalListeners.delete(callback);
}

export function isModalOpen() {
  return modalOpen;
}

export function isModalOpenOnServer() {
  return false;
}

export function openPreferences() {
  modalOpen = true;
  modalListeners.forEach((listener) => listener());
}

export function closePreferences() {
  modalOpen = false;
  modalListeners.forEach((listener) => listener());
}
