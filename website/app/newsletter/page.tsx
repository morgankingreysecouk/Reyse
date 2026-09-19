import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignupForm from "../components/NewsletterSignupForm";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Stay in the loop",
  description: "Occasional updates from Reyse, no spam.",
});

export default function NewsletterPage() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-md">
        <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
          Stay in the loop
        </p>
        <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          Occasional updates, no spam.
        </h1>
        <p className="mt-5 text-lg text-foreground/70">
          A few details and we&rsquo;ll keep you posted as Reyse grows —
          nothing more.
        </p>

        <div className="mt-10">
          <NewsletterSignupForm />
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-foreground/65 hover:text-foreground">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
