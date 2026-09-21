import Link from "next/link";
import { SearchIcon, SparkIcon, StarIcon, ChartIcon, ScaleIcon } from "./NavIcons";
import { products } from "../products/data";

const productIcons: Record<string, React.ReactNode> = {
  seo: SearchIcon,
  geo: SparkIcon,
  reviews: StarIcon,
  "market-intelligence": ChartIcon,
  scale: ScaleIcon,
};

export default function ManagedPromo() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <p className="mb-3 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
              Managed
            </p>
            <h2 className="font-heading text-3xl leading-[1.1] tracking-tight sm:text-4xl">
              Or let us just do it for you.
            </h2>
            <div className="mt-6 space-y-4 text-foreground/70">
              <p>
                Every product below comes in two forms. <strong className="text-foreground">Done With You</strong> is
                a one-off: a full audit, then a clear report for every fix, so
                you or your team can work through it yourselves.{" "}
                <strong className="text-foreground">Done For You</strong> goes
                further — we implement every fix ourselves, then keep
                checking and maintaining it every month, because none of this
                stays fixed once search engines, AI, and your competitors
                keep moving.
              </p>
              <p className="text-sm text-foreground/60">
                Five products, same two ways to run each one — pick whichever
                you need, or run all five together as the Full System.
              </p>
            </div>
            <Link
              href="/system"
              className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              See the Managed service
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-panel">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group flex items-center gap-4 px-5 py-4 transition hover:bg-ink/[0.03]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                  {productIcons[product.slug]}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium text-foreground">{product.label}</span>
                  <span className="block truncate text-sm text-foreground/60">{product.tagline}</span>
                </span>
                <svg
                  viewBox="0 0 16 16"
                  className="h-3.5 w-3.5 shrink-0 text-foreground/30 transition group-hover:translate-x-0.5 group-hover:text-accent-text"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
