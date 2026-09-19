"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function NewsletterSignupForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [agreed, setAgreed] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agreed) return;
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY ?? "");
    formData.append("subject", "New Reyse newsletter signup");
    formData.append("from_name", "Reyse website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      setStatus(result.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/40 bg-accent/10 p-8 text-center">
        <p className="font-heading text-xl leading-[1.15] tracking-tight">
          Thanks — you&rsquo;re on the list.
        </p>
        <p className="mt-2 text-sm text-foreground/70">
          Occasional updates, no spam.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="first_name" className="text-sm font-medium text-foreground">
            First name
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/65 focus:outline-none focus-visible:outline-2 focus-visible:outline-accent"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="last_name" className="text-sm font-medium text-foreground">
            Surname
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/65 focus:outline-none focus-visible:outline-2 focus-visible:outline-accent"
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/65 focus:outline-none focus-visible:outline-2 focus-visible:outline-accent"
          placeholder="you@business.co.uk"
        />
      </div>

      <label className="flex items-start gap-2 text-xs text-foreground/65">
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
        disabled={status === "submitting"}
        className="w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Signing up…" : "Sign up"}
      </button>

      {status === "error" ? (
        <p className="text-sm text-foreground/60">
          That didn&rsquo;t send — mind trying again, or emailing{" "}
          <a href="mailto:hello@reyse.co.uk" className="underline hover:text-foreground">
            hello@reyse.co.uk
          </a>{" "}
          directly?
        </p>
      ) : null}
    </form>
  );
}
