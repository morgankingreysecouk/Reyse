import Link from "next/link";
import HeroSlideshow from "./components/HeroSlideshow";
import HowItWorksScroll from "./components/HowItWorksScroll";
import IndustriesGrid from "./components/IndustriesGrid";
import ProductsGrid from "./components/ProductsGrid";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSlideshow />

      <>
        {/* Honesty over logos — no client wall yet, so say what's true instead */}
        <section className="border-t border-border py-12">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-lg text-foreground/70">
              No client logos here — not yet. What we have is a founder who
              searched for his own agency and found nothing, and spent a year
              fixing that before turning it into a product.
            </p>
            <Link
              href="/about"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent-text hover:underline"
            >
              Read the story
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Products */}
        <section id="product" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-heading text-2xl leading-[1.15] tracking-tight sm:text-3xl">
              What we do
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/60">
              Each one on its own, or bundled together as you grow.
            </p>
            <ProductsGrid />
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-heading text-2xl leading-[1.15] tracking-tight sm:text-3xl">
              Built for anyone renting or selling property
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/60">
              Buyers and tenants are already asking Google and AI about businesses
              like yours. Click an industry to see how Reyse gets you found.
            </p>
            <IndustriesGrid />
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-heading text-2xl leading-[1.15] tracking-tight sm:text-3xl">
              How it works
            </h2>
            <HowItWorksScroll />
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center">
            <h2 className="font-heading text-2xl leading-[1.15] tracking-tight sm:text-3xl">
              Ready to stop missing inquiries?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-foreground/60">
              Tell us about your business and we&rsquo;ll show you Reyse in action.
            </p>
            <Link
              href="/get-started"
              className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Get started
            </Link>
          </div>
        </section>
      </>
    </main>
  );
}
