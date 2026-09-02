import Image from "next/image";

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
    <div className="flex flex-col">
      <header className="border-b border-border">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="text-lg font-semibold tracking-tight">Reyse</span>
          <div className="hidden items-center gap-8 text-sm text-foreground/70 sm:flex">
            <a href="#how-it-works" className="hover:text-foreground">How it works</a>
            <a href="#industries" className="hover:text-foreground">Industries</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Get a demo
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[92vh] items-end overflow-hidden">
          <Image
            src="/images/hero-laptop.png"
            alt="An AI live chat widget answering a property inquiry, shown on a laptop browsing short-term rentals"
            fill
            priority
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10"
          />
          <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-24">
            <p className="mb-4 inline-block rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur">
              AI live chat for the property industry
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Never miss another inquiry.
            </h1>
            <p className="mt-5 max-w-md text-lg text-foreground/80">
              Reyse answers your leads, tenants and guests instantly &mdash;
              day or night &mdash; so your team can focus on closing, not
              repeating themselves.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
              >
                Book a demo
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-border bg-background/40 px-6 py-3 text-sm font-medium backdrop-blur hover:border-foreground/40"
              >
                See how it works
              </a>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              How it works
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "Drop it in",
                  body: "Add Reyse to your website, WhatsApp or socials in minutes — no developer needed.",
                },
                {
                  title: "It handles the inquiry",
                  body: "Reyse answers questions about availability, pricing and viewings instantly, any time of day.",
                },
                {
                  title: "You get the lead",
                  body: "Qualified conversations get handed to your team, ready to close.",
                },
              ].map((step, i) => (
                <div key={step.title} className="rounded-xl border border-border p-6">
                  <span className="text-sm font-medium text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
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
        <section id="contact" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to stop missing inquiries?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-foreground/60">
              Tell us about your business and we&rsquo;ll show you Reyse in action.
            </p>
            <a
              href="mailto:hello@reyse.co.uk"
              className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Book a demo
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-foreground/50">
          &copy; {new Date().getFullYear()} Reyse. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
