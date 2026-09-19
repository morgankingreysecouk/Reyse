"use client";

import Link from "next/link";
import { products, type Product } from "../products/data";
import { useScrollReveal } from "../lib/useScrollReveal";
import {
  GeoMockup,
  MarketIntelligenceMockup,
  ReviewMockup,
  ScaleMockup,
  SeoMockup,
} from "./HeroMockups";

// Reuses the same mockups built for the hero, at a smaller fixed-height
// preview, rather than stock photography — these are abstract services
// (SEO, GEO, etc.), not physical spaces, so a real photo would be a
// generic stock cliché. The mockups are already on-brand and specific.
const mockups: Record<string, () => React.ReactNode> = {
  seo: () => <SeoMockup />,
  geo: () => <GeoMockup />,
  reviews: () => <ReviewMockup />,
  "market-intelligence": () => <MarketIntelligenceMockup />,
  scale: () => <ScaleMockup />,
};

// Short benefit line for the eyebrow tag — `hook` is sized for a card
// description, `label` is too terse — this slot needs something in between.
const eyebrows: Record<string, string> = {
  seo: "Rank on Google, Bing & Apple",
  geo: "Get recommended by AI",
  reviews: "Every review, answered",
  "market-intelligence": "Know exactly where you stand",
  scale: "One system, every branch",
};

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { ref, visible } = useScrollReveal<HTMLAnchorElement>();
  const Mockup = mockups[product.slug];
  const count = product.included.length;

  return (
    <Link
      ref={ref}
      href={`/products/${product.slug}`}
      style={{ transitionDelay: visible ? `${index * 70}ms` : "0ms" }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-border transition-all duration-500 ease-out hover:border-foreground/30 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="relative h-48 overflow-hidden bg-panel/60 p-4 pt-11">
        <span className="absolute left-4 top-4 z-10 inline-block rounded-full bg-background px-2.5 py-1 text-[11px] font-medium text-foreground/70 shadow-sm">
          {eyebrows[product.slug]}
        </span>
        <div className="h-full">{Mockup && <Mockup />}</div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-panel to-transparent" />
      </div>
      <div className="border-t border-border px-5 pb-4 pt-4">
        <h3 className="font-heading text-2xl leading-[1.1] tracking-tight text-foreground">
          {product.label}
        </h3>
      </div>
      <div className="mt-auto flex items-center justify-between border-t border-border bg-panel/60 px-5 py-3 text-xs text-foreground/60">
        <span>
          {count} {count === 1 ? "service" : "services"} in this category
        </span>
        <span className="inline-flex items-center gap-1 font-medium text-accent-text opacity-0 transition group-hover:opacity-100">
          View
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default function ProductsGrid() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {products.map((product, index) => (
        <ProductCard key={product.slug} product={product} index={index} />
      ))}
    </div>
  );
}
