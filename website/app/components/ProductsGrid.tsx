"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { products, type Product } from "../products/data";
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

function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  // Visible by default — a card only starts hidden (for the scroll-reveal
  // transition) if it's confirmed to be below the fold at mount. That way
  // content never depends on JS running to be visible: no JS means every
  // card just renders in its final state, no animation, nothing missing.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top > window.innerHeight) {
      setVisible(false);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Mockup = mockups[product.slug];

  return (
    <Link
      ref={ref}
      href={`/products/${product.slug}`}
      style={{ transitionDelay: visible ? `${index * 70}ms` : "0ms" }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-border transition-all duration-500 ease-out hover:border-foreground/30 hover:bg-panel ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="relative h-44 overflow-hidden border-b border-border bg-panel/60 p-5">
        {Mockup && <Mockup />}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-panel to-transparent" />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <span className="inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
            {product.label}
          </span>
          <h3 className="mt-4 font-heading text-xl leading-[1.15]">{product.tagline}</h3>
          <p className="mt-2 text-sm text-foreground/60">{product.hook}</p>
        </div>
        <div className="mt-6 flex items-center justify-end">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-text opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
            Learn more
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ProductsGrid() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard key={product.slug} product={product} index={index} />
      ))}
    </div>
  );
}
