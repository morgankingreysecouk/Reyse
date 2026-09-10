import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import GetStartedForm from "../components/GetStartedForm";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Get Started",
  description: "Tell us about your business and we'll show you exactly what's missing.",
});

export default function GetStarted() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-xl">
        <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
          Get started
        </p>
        <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          Tell us about your business
        </h1>
        <p className="mt-5 text-lg text-foreground/70">
          A few details and we&rsquo;ll show you exactly what&rsquo;s costing you
          enquiries — no obligation, no sales script.
        </p>

        <div className="mt-10">
          <Suspense fallback={null}>
            <GetStartedForm />
          </Suspense>
        </div>

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
    </main>
  );
}
