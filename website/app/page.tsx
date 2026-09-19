import Link from "next/link";
import ClosingCta from "./components/ClosingCta";
import Faq from "./components/Faq";
import FounderCredibility from "./components/FounderCredibility";
import FreeForeverBanner from "./components/FreeForeverBanner";
import HeroSlideshow from "./components/HeroSlideshow";
import HowItWorksScroll from "./components/HowItWorksScroll";
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

      <>
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
