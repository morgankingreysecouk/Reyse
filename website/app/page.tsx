import Link from "next/link";
import ClosingCta from "./components/ClosingCta";
import Faq from "./components/Faq";
import FounderCredibility from "./components/FounderCredibility";
import FreeForeverBanner from "./components/FreeForeverBanner";
import HeroSlideshow from "./components/HeroSlideshow";
import HowItWorksScroll from "./components/HowItWorksScroll";
import ProductsGrid from "./components/ProductsGrid";
import ResourcesSection from "./components/ResourcesSection";
import Reveal from "./components/Reveal";
import { industries } from "./industries/data";

const moments = industries.flatMap((industry) =>
  industry.scenarios.map((scenario) => ({
    industry: industry.label,
    slug: industry.slug,
    scenario,
  })),
);

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSlideshow />
      <FreeForeverBanner />
      <ResourcesSection />

      <>
        {/* Products */}
        <section id="product" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-heading text-3xl leading-[1.1] tracking-tight sm:text-4xl">
                  Explore our solutions.
                </h2>
                <p className="mt-3 max-w-2xl text-foreground/60">
                  Each one on its own, or{" "}
                  <Link href="/system" className="font-medium text-accent-text hover:underline">
                    bundled together as one system
                  </Link>{" "}
                  — with a bonus stack only the full bundle unlocks.
                </p>
              </div>
              <Link
                href="/quiz"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-foreground/30 hover:bg-panel"
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

        {/* Moments this costs you */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-heading text-2xl leading-[1.15] tracking-tight sm:text-3xl">
              Built specifically for estate and letting agents
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/60">
              Not a generic tool bolted onto property — every part of Reyse is
              built around moments like these.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {moments.map((moment, i) => (
                <Reveal key={moment.scenario} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-border p-6">
                    <Link
                      href={`/industries/${moment.slug}`}
                      className="text-xs font-medium text-accent-text hover:underline"
                    >
                      {moment.industry}
                    </Link>
                    <p className="mt-3 text-sm text-foreground/70">{moment.scenario}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-heading text-2xl leading-[1.15] tracking-tight sm:text-3xl">
              How it works
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/60">
              Three steps, and the third one keeps running for as long as you need it to.
            </p>
            <HowItWorksScroll />
          </div>
        </section>

        {/* Founder credibility */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <FounderCredibility />
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-center font-heading text-2xl leading-[1.15] tracking-tight sm:text-3xl">
              Questions people actually ask
            </h2>
            <div className="mt-10">
              <Faq />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <ClosingCta />
          </div>
        </section>
      </>
    </main>
  );
}
