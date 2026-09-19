import Link from "next/link";
import HeroSearchDemo from "./HeroSearchDemo";

export default function HeroSlideshow() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(50% 45% at 50% 42%, rgba(166,173,62,0.16), transparent 100%), radial-gradient(38% 38% at 82% 18%, rgba(166,173,62,0.10), transparent 100%), radial-gradient(38% 38% at 12% 82%, rgba(166,173,62,0.10), transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(28,26,23,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(65% 65% at 50% 45%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(65% 65% at 50% 45%, black 40%, transparent 100%)",
        }}
      />
      <HeroSearchDemo />
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-6 pb-24 pt-40 text-center lg:pb-32 lg:pt-52">
        <h1 className="font-heading text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          Get Found &amp; Stay Found
          <br className="hidden sm:block" />{" "}
          with <span className="text-accent-text">Reyse</span>.
        </h1>
        <p className="mt-7 max-w-xl text-base text-foreground/70 sm:text-lg">
          SEO to rank on Google, and GEO to get recommended by ChatGPT,
          Gemini, and Copilot — built specifically for estate and letting
          agents.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/get-started"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Get started
          </Link>
          <Link
            href="/resources"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-foreground/40"
          >
            Resources
          </Link>
        </div>
      </div>
    </section>
  );
}
