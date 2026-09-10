import Link from "next/link";
import FreeForeverBanner from "./components/FreeForeverBanner";
import HeroSlideshow from "./components/HeroSlideshow";
import HowItWorksScroll from "./components/HowItWorksScroll";
import IndustriesGrid from "./components/IndustriesGrid";
import ProductsGrid from "./components/ProductsGrid";

export default function Home() {
  return (
    <main className="flex-1">
      {/*
        Hero and the free-forever banner are both `sticky top-0`, sharing
        this one tall wrapper. Hero holds still while the banner's natural
        position (right after hero, so starting 100dvh down) scrolls up
        from below and slides over it — because it's later in the DOM with
        a higher z-index. Both share this wrapper's release boundary, so
        they end their sticky dwell at the same scroll position and hand
        off cleanly to Products afterward, instead of one lingering behind
        after the other releases. 280dvh = hero's 100dvh + banner's 100dvh
        + an 80dvh dwell once the banner has fully covered the hero.
      */}
      <div className="relative h-[280dvh]">
        <HeroSlideshow />
        <FreeForeverBanner />
      </div>

      <>
        {/* Products */}
        <section id="product" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-heading text-2xl leading-[1.15] tracking-tight sm:text-3xl">
              What we do
            </h2>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="mt-3 max-w-2xl text-foreground/60">
                Each one on its own, or bundled together as you grow.
              </p>
              <Link
                href="/quiz"
                className="mt-3 inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-foreground/30 hover:bg-panel"
              >
                Not sure? Take the 60-second quiz
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
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
