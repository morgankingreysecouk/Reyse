import Link from "next/link";
import { products } from "../products/data";

export default function ProductsGrid() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Link
          key={product.slug}
          href={`/products/${product.slug}`}
          className="group flex flex-col justify-between rounded-2xl border border-border p-6 transition hover:border-foreground/30 hover:bg-panel"
        >
          <div>
            <span className="inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
              {product.label}
            </span>
            <h3 className="mt-4 font-heading text-xl leading-[1.15]">{product.tagline}</h3>
            <p className="mt-2 text-sm text-foreground/60">{product.description}</p>
          </div>
          <div className="mt-6 flex items-center justify-end">
            <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-text opacity-0 transition group-hover:opacity-100">
              Learn more
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
