"use client";

import { Analytics } from "@vercel/analytics/next";
import { useSyncExternalStore } from "react";
import { getConsent, getConsentOnServer, subscribeConsent } from "../lib/consent";

// The only script on this site actually gated by consent. Vercel Web
// Analytics is cookieless and doesn't legally need this, but a toggle
// that doesn't actually stop anything isn't a real toggle.
export default function ConsentGatedAnalytics() {
  const { analytics } = useSyncExternalStore(subscribeConsent, getConsent, getConsentOnServer);
  if (!analytics) return null;
  return <Analytics />;
}
