import HeroSlideshow from "./components/HeroSlideshow";
import HowItWorksScroll from "./components/HowItWorksScroll";
import IndustriesGrid from "./components/IndustriesGrid";
import ProductsBento from "./components/ProductsBento";

const trustedBy = [
  "Harbor Estates",
  "Kingsbridge Lettings",
  "Willowmere Homes",
  "Ashcroft Property",
  "The Grange Collection",
  "Meadowvale Lets",
  "Blackwood & Co",
  "Silverline Realty",
];

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSlideshow />

      <div className="relative z-10 bg-background">
        {/* Social proof */}
        <section className="border-t border-border py-12">
          <p className="mx-auto mb-8 max-w-6xl px-6 text-center text-xs font-medium uppercase tracking-widest text-foreground/40">
            Trusted by property businesses like
          </p>
          <div
            aria-hidden
            className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          >
            <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-16">
              {[...trustedBy, ...trustedBy].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="whitespace-nowrap text-xl font-semibold tracking-tight text-foreground/40"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="product" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-heading text-2xl leading-[1.4] tracking-tight sm:text-3xl">
              Our AI agents
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/60">
              One intelligence, everywhere your customers already are.
            </p>
            <ProductsBento />
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-heading text-2xl leading-[1.4] tracking-tight sm:text-3xl">
              Built for anyone renting or selling property
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/60">
              If people are messaging you about it, Reyse can answer them. Click an
              industry to see how.
            </p>
            <IndustriesGrid />
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-heading text-2xl leading-[1.4] tracking-tight sm:text-3xl">
              How it works
            </h2>
            <HowItWorksScroll />
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center">
            <h2 className="font-heading text-2xl leading-[1.4] tracking-tight sm:text-3xl">
              Ready to stop missing inquiries?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-foreground/60">
              Tell us about your business and we&rsquo;ll show you Reyse in action.
            </p>
            <a
              href="/get-started"
              className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Get started
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
