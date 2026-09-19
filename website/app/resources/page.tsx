import Link from "next/link";
import Reveal from "../components/Reveal";
import { pageMetadata } from "../lib/seo";
import { products } from "../products/data";
import { resourcesBySlug } from "./data";

export const metadata = pageMetadata({
  title: "Free Resources",
  description: "Free courses, videos, and downloads for estate and letting agents — one set per topic: SEO, GEO, reviews, market intelligence, and scale.",
});

function statusNote(slug: string) {
  const r = resourcesBySlug[slug];
  const count = r.videos.length + r.audiobooks.length + r.courses.length + r.downloads.length;
  if (r.courses.length > 0) return "Free course available";
  if (count === 0) return "Coming soon";
  return `${count} resource${count === 1 ? "" : "s"} so far`;
}

export default function ResourcesHub() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
            Free Resources
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            Free, by topic.
          </h1>
          <p className="mt-5 text-lg text-foreground/70">
            One resource page per service — courses, videos, audiobooks, and
            downloads. SEO and GEO have full free courses already; the rest
            are being built the same honest way, in the open.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 70}>
              <Link
                href={`/resources/${product.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border p-6 transition hover:border-foreground/30 hover:bg-panel"
              >
                <div>
                  <h2 className="font-heading text-xl leading-[1.2] tracking-tight">
                    {product.label}
                  </h2>
                  <p className="mt-2 text-sm text-foreground/70">{product.tagline}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-medium text-foreground/50">
                    {statusNote(product.slug)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-text opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
                    View
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
