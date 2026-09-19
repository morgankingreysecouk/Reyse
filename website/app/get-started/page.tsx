import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import GetStartedForm from "../components/GetStartedForm";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Get Started",
  description: "Tell us about your business and we'll show you exactly what's missing.",
});

const checklist = [
  "Talk through what's actually costing you enquiries",
  "See exactly where you're invisible on Google and AI search",
  "No sales script — just a straight, no-obligation conversation",
];

const trustBadges = [
  "Month-to-month, no lock-in",
  "No-jargon reports",
  "One agency per area",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-accent-text" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function GetStarted() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
            Get started
          </p>
          <h1 className="font-heading text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Tell us about your business
          </h1>
          <p className="mt-5 text-lg text-foreground/70">
            A few details and we&rsquo;ll show you exactly what&rsquo;s costing you
            enquiries — no obligation, no sales script.
          </p>

          <ul className="mt-8 space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground/80">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <blockquote className="mt-10 border-l-2 border-accent pl-5">
            <p className="font-heading text-2xl leading-[1.3] tracking-tight">
              &ldquo;The reputation wasn&rsquo;t really the problem — the
              invisibility was.&rdquo;
            </p>
            <p className="mt-3 text-sm font-medium text-foreground/60">
              Morgan King, Founder of Reyse
            </p>
          </blockquote>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {trustBadges.map((badge) => (
              <Link
                key={badge}
                href="/guarantees"
                className="rounded-xl border border-border px-4 py-3 text-center text-xs font-medium text-foreground/70 hover:border-foreground/40"
              >
                {badge}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <Suspense fallback={null}>
            <GetStartedForm />
          </Suspense>

          <p className="mt-8 text-center text-sm text-foreground/65">
            Prefer email?{" "}
            <a href="mailto:hello@reyse.co.uk" className="underline hover:text-foreground">
              hello@reyse.co.uk
            </a>
          </p>

          <div className="mt-4 text-center">
            <Link href="/" className="text-sm text-foreground/65 hover:text-foreground">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
