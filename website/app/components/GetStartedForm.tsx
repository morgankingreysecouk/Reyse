"use client";

import { useState } from "react";
import { products } from "../products/data";

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function GetStartedForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY ?? "");
    formData.append("subject", "New Reyse enquiry");
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
          Got it — thanks.
        </p>
        <p className="mt-2 text-sm text-foreground/70">
          I read every one of these myself. I&rsquo;ll get back to you shortly at
          the email you gave.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot — hidden from real visitors, bots tend to fill every field */}
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
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus-visible:outline-2 focus-visible:outline-accent"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="business" className="text-sm font-medium text-foreground">
            Business name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus-visible:outline-2 focus-visible:outline-accent"
            placeholder="Smith & Co Lettings"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus-visible:outline-2 focus-visible:outline-accent"
            placeholder="jane@smithlettings.co.uk"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone <span className="text-foreground/40">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus-visible:outline-2 focus-visible:outline-accent"
            placeholder="07700 900000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="text-sm font-medium text-foreground">
          What are you interested in?
        </label>
        <select
          id="interest"
          name="interest"
          required
          defaultValue=""
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus-visible:outline-2 focus-visible:outline-accent"
        >
          <option value="" disabled>
            Choose one
          </option>
          {products.map((product) => (
            <option key={product.slug} value={product.label}>
              {product.label}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet — talk me through it</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Anything else? <span className="text-foreground/40">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus-visible:outline-2 focus-visible:outline-accent"
          placeholder="Your website, how many branches, what's prompting you to look at this now — whatever's useful."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send it over"}
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
