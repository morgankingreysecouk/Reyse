import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started — Reyse",
  description: "Choose how you'd like to get started with Reyse.",
};

const links = [
  { label: "Book a demo", href: "mailto:hello@reyse.co.uk" },
  { label: "See how it works", href: "/#how-it-works" },
  { label: "Explore industries we support", href: "/#industries" },
  { label: "Contact us", href: "/#contact" },
  { label: "Back to home", href: "/" },
];

export default function GetStarted() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
          Get started
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Where would you like to start?
        </h1>
        <p className="mt-5 max-w-md text-lg text-foreground/70">
          Pick whatever's most useful right now — we'll take it from there.
        </p>

        <div className="mt-12 space-y-2.5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative block max-w-max"
            >
              <span className="inline-block text-2xl font-medium tracking-tight text-foreground transition-transform delay-75 duration-300 ease-in-out group-hover:translate-x-4 group-hover:delay-0 sm:text-3xl">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
