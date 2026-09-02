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

const chatMessages = [
  { from: "visitor", text: "Hi! Is the 2-bed on Kings Road still available for viewings?" },
  { from: "agent", text: "Yes it is! I can see slots this Thursday at 4pm or Saturday morning — which works better?" },
  { from: "visitor", text: "Saturday morning, please." },
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
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
            <div>
              <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
                AI live chat for the property industry
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Never miss another inquiry.
              </h1>
              <p className="mt-5 max-w-md text-lg text-foreground/70">
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
                  className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-foreground/40"
                >
                  See how it works
                </a>
              </div>
            </div>

            {/* Product mockup */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border bg-panel shadow-2xl">
                <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                </div>
                <div className="grid grid-cols-5">
                  {/* Left: sample client site */}
                  <div className="col-span-3 border-r border-border p-4">
                    <div className="mb-3 flex gap-2 rounded-lg border border-border bg-background/40 p-2 text-[10px] text-foreground/60 sm:text-xs">
                      <span className="rounded bg-background/60 px-2 py-1">Location</span>
                      <span className="rounded bg-background/60 px-2 py-1">Check in</span>
                      <span className="rounded bg-background/60 px-2 py-1">Guests</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {["Beachfront Villa", "Mountain Retreat", "City Loft", "Countryside Cottage"].map(
                        (name) => (
                          <div key={name} className="rounded-lg border border-border p-2">
                            <div className="mb-2 h-12 rounded-md bg-gradient-to-br from-accent/30 to-background" />
                            <p className="text-xs font-medium">{name}</p>
                            <p className="text-[10px] text-foreground/50">2 beds &middot; 4 guests</p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Right: live chat widget */}
                  <div className="col-span-2 flex flex-col p-3">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-semibold">Live chat</span>
                      <span className="flex items-center gap-1 text-[10px] text-foreground/60">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Online
                      </span>
                    </div>
                    <div className="flex-1 space-y-2">
                      {chatMessages.map((m, i) => (
                        <div
                          key={i}
                          className={
                            m.from === "agent"
                              ? "ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-chat-bubble px-2.5 py-1.5 text-[11px] text-foreground"
                              : "mr-auto max-w-[85%] rounded-lg rounded-tl-sm bg-background/60 px-2.5 py-1.5 text-[11px] text-foreground/80"
                          }
                        >
                          {m.text}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 rounded-lg border border-border px-2.5 py-1.5 text-[10px] text-foreground/40">
                      Type a message&hellip;
                    </div>
                  </div>
                </div>
              </div>
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
