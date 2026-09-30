"use client";

import { openPreferences } from "../lib/consent";

export default function CookieSettingsLink({ className = "hover:text-foreground" }: { className?: string }) {
  return (
    <button type="button" onClick={openPreferences} className={className}>
      Cookie settings
    </button>
  );
}
