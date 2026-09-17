import Link from "next/link";

export default function HeroSlideshow() {
  return (
    <section className="border-b border-border bg-background lg:sticky lg:top-0 lg:z-10 lg:flex lg:h-dvh lg:items-center">
      <div className="mx-auto w-full max-w-2xl px-6 pb-16 pt-28 lg:pb-20 lg:pt-40">
        <span className="inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
          Get Found &amp; Stay Found
        </span>
        <h1 className="mt-4 max-w-lg font-heading text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          You&rsquo;re not losing to a better agency — you&rsquo;re losing to
          the one people find first.
        </h1>
        <p className="mt-5 max-w-md text-base text-foreground/70 sm:mt-6 sm:text-lg">
          Buyers and tenants are asking AI for recommendations before they
          ever type into Google. Reyse makes sure your business is the one
          they&rsquo;re told about.
        </p>
        <div className="mt-7 flex flex-wrap gap-4 sm:mt-8">
          <Link
            href="/get-started"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Get started
          </Link>
          <Link
            href="#how-it-works"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-foreground/40"
          >
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
}
