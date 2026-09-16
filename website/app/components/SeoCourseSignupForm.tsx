"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Status = "idle" | "submitting" | "error";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const roleOptions = ["Owner / Director", "Branch Manager", "Marketing", "Other"];

export default function SeoCourseSignupForm() {
  const [status, setStatus] = useState<Status>("idle");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY ?? "");
    formData.append("subject", "New SEO Course signup");
    formData.append("from_name", "Reyse website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        router.push("/seocourse");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
          <label htmlFor="course-name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="course-name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/65 focus:outline-none focus-visible:outline-2 focus-visible:outline-accent"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="course-email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="course-email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/65 focus:outline-none focus-visible:outline-2 focus-visible:outline-accent"
            placeholder="jane@smithlettings.co.uk"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="course-phone" className="text-sm font-medium text-foreground">
            Phone <span className="text-foreground/65">(optional)</span>
          </label>
          <input
            id="course-phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/65 focus:outline-none focus-visible:outline-2 focus-visible:outline-accent"
            placeholder="07700 900000"
          />
        </div>
        <div>
          <label htmlFor="course-business" className="text-sm font-medium text-foreground">
            Business name <span className="text-foreground/65">(optional)</span>
          </label>
          <input
            id="course-business"
            name="business"
            type="text"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/65 focus:outline-none focus-visible:outline-2 focus-visible:outline-accent"
            placeholder="Smith & Co Lettings"
          />
        </div>
      </div>

      <div>
        <label htmlFor="course-role" className="text-sm font-medium text-foreground">
          Your role <span className="text-foreground/65">(optional)</span>
        </label>
        <select
          id="course-role"
          name="role"
          defaultValue=""
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus-visible:outline-2 focus-visible:outline-accent"
        >
          <option value="">Prefer not to say</option>
          {roleOptions.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <label className="flex items-start gap-2.5 text-sm text-foreground/70">
        <input
          type="checkbox"
          name="marketing_consent"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-accent"
        />
        <span>
          I&rsquo;d like occasional emails from Reyse about the course and
          related tips, and I agree to the{" "}
          <a href="/privacy" className="underline hover:text-foreground">
            Privacy Policy
          </a>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "One moment…" : "Start the course"}
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
