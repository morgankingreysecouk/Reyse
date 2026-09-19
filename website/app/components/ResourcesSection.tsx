import Link from "next/link";
import { products } from "../products/data";
import { SearchIcon, SparkIcon, StarIcon, ChartIcon, ScaleIcon } from "./NavIcons";

const resourceIcons: Record<string, React.ReactNode> = {
  seo: SearchIcon,
  geo: SparkIcon,
  reviews: StarIcon,
  "market-intelligence": ChartIcon,
  scale: ScaleIcon,
};

export default function ResourcesSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-3xl leading-[1.1] tracking-tight sm:text-4xl">
              Free resources, by topic.
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/60">
              Courses, videos, and downloads — free whether or not you ever
              become a client. SEO and GEO are live; reviews, market
              intelligence, and scale are on the way.
            </p>
          </div>
          <Link
            href="/resources"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-foreground/30 hover:bg-panel"
          >
            All free resources
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/resources/${product.slug}`}
              className="group flex flex-col rounded-2xl border border-border p-5 transition hover:border-foreground/30 hover:bg-panel"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                {resourceIcons[product.slug]}
              </span>
              <p className="mt-4 font-medium text-foreground">{product.label}</p>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-medium text-accent-text opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
                View resources
                <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
