"use client";

import { useState } from "react";

// TODO(morgan): this is UI-only. No email is actually sent or stored
// anywhere yet — it just shows an optimistic confirmation on submit.
// Wire it up to a real mailing list provider (Mailchimp, ConvertKit, a
// simple DB, whatever you land on) when that system exists.
export default function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="mt-4 max-w-[220px] text-sm text-foreground/65">
        Thanks — you&rsquo;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 max-w-[220px]">
      <p className="text-sm font-medium text-foreground">Stay in the loop</p>
      <p className="mt-1 text-xs text-foreground/65">
        Occasional updates, no spam.
      </p>
      <input
        type="email"
        required
        placeholder="you@business.co.uk"
        aria-label="Email address"
        className="mt-3 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-foreground/65 focus:outline-none focus-visible:outline-2 focus-visible:outline-accent"
      />
      <label className="mt-2.5 flex items-start gap-2 text-xs text-foreground/65">
        <input
          type="checkbox"
          required
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded border-border accent-accent"
        />
        <span>
          I agree to receive emails from Reyse and to the{" "}
          <a href="/privacy" className="underline hover:text-foreground">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      <button
        type="submit"
        className="mt-3 w-full rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
      >
        Sign up
      </button>
    </form>
  );
}
