import HeroSlideshow from "./components/HeroSlideshow";
import HowItWorksScroll from "./components/HowItWorksScroll";

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

const industries = [
  "Estate agents",
  "Letting agents",
  "Property management",
  "New homes & developers",
  "Short-term lets",
  "Wedding & event venues",
  "Serviced apartments",
  "Student accommodation",
  "Holiday parks",
  "Self-storage",
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

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">
              How it works
            </h2>
            <HowItWorksScroll />
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">
              Built for anyone renting or selling property
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/60">
              If people are messaging you about it, Reyse can answer them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {industries.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-border px-4 py-2 text-sm text-foreground/80"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center">
            <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">
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
