import Link from "next/link";
import { products } from "../products/data";
import { resourceStatus } from "../resources/data";
import PhotoPlaceholder from "./PhotoPlaceholder";

// Higgsfield briefs — grounded, real-work photography (an agent actually
// doing the thing), not generic stock imagery. This section is deliberately
// photo-led rather than app-mockup-led, so it reads as distinct from the
// product cards below once real photos replace these placeholders.
const photoBriefs: Record<string, string> = {
  seo: "An agent checking their Google Business Profile or search rankings on a laptop.",
  geo: "An agent's phone showing a ChatGPT conversation asking who the best local agent is.",
  reviews: "An agent reading or replying to a review on their phone.",
  "market-intelligence": "An agent comparing printed or on-screen data against a competitor's listing.",
  scale: "A multi-branch agency — several shopfronts, or a map with more than one pin lit up.",
};

export default function ResourcesSection() {
  return (
    <section className="border-t border-border bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
              Free Resources
            </p>
            <h2 className="font-heading text-3xl leading-[1.1] tracking-tight sm:text-4xl">
              Learn it yourself, free.
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/60">
              Courses, videos, and downloads, one topic at a time — free
              whether or not you ever become a client.
            </p>
          </div>
          <Link
            href="/resources"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-foreground/30 hover:bg-background"
          >
            All free resources
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <Link key={product.slug} href={`/resources/${product.slug}`} className="group block">
              <PhotoPlaceholder
                label={product.label}
                note={photoBriefs[product.slug]}
                aspect="aspect-[4/3]"
              />
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-foreground/50">
                  {resourceStatus(product.slug)}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-accent-text opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
                  View
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
