import Link from "next/link";
import Reveal from "./Reveal";

const featured = [
  {
    title: "The Growth Guarantee",
    promise: "We commit to growing your tracked enquiries within 3 months.",
    remedy: "If they haven't grown, we personally fund one month of your Google or Meta ad spend.",
  },
  {
    title: "The Release of Commitment Guarantee",
    promise: "You will never be asked to sign a long-term contract.",
    remedy: "Month-to-month, always — leave whenever you want, no penalty.",
  },
  {
    title: "The No Surprise Changes Guarantee",
    promise: "We will never change anything live on your site or profiles without your sign-off first.",
    remedy: "Ever. Not once, not “just this once.”",
  },
  {
    title: "The No Competitor Access Guarantee",
    promise: "Your direct competitor will never be able to buy this from us.",
    remedy: "One agency per area, permanently — a structural rule, not a limited-time offer.",
  },
];

export default function GuaranteesPromo() {
  return (
    <section className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-block rounded-full border border-ink-foreground/20 px-3 py-1 text-xs font-medium text-ink-foreground/70">
            Guarantees
          </p>
          <h2 className="font-heading text-3xl leading-[1.1] tracking-tight sm:text-4xl">
            Eleven promises. Each one specific enough to break.
          </h2>
          <p className="mt-4 text-ink-foreground/70">
            Vague reassurance is easy to write and impossible to hold anyone
            to. Every guarantee names exactly what we&rsquo;re promising —
            and exactly what happens if we don&rsquo;t deliver.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((g, i) => (
            <Reveal key={g.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-ink-foreground/15 bg-ink-foreground/5 p-6">
                <p className="text-sm font-semibold">{g.title}</p>
                <p className="mt-3 text-sm text-ink-foreground/70">{g.promise}</p>
                <p className="mt-3 border-t border-ink-foreground/10 pt-3 text-sm text-accent">
                  {g.remedy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/guarantees"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            See all 11 guarantees
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
