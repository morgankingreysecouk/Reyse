"use client";

import { openPreferences } from "../lib/consent";

export default function CookieSettingsLink() {
  return (
    <button type="button" onClick={openPreferences} className="hover:text-foreground">
      Cookie settings
    </button>
  );
}
