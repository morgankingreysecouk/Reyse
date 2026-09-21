import ClosingCta from "./components/ClosingCta";
import Faq from "./components/Faq";
import FounderCredibility from "./components/FounderCredibility";
import FreeForeverBanner from "./components/FreeForeverBanner";
import GuaranteesPromo from "./components/GuaranteesPromo";
import Hero from "./components/Hero";
import HowItWorksScroll from "./components/HowItWorksScroll";
import ManagedPromo from "./components/ManagedPromo";
import ResourcesPromo from "./components/ResourcesPromo";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <FreeForeverBanner />
      <ResourcesPromo />
      <ManagedPromo />
      <GuaranteesPromo />

      <>
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
