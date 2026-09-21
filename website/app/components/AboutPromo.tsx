import Link from "next/link";
import CountUp from "./CountUp";

// Same three stats /about opens with — not a photo, since no real founder
// photo exists yet anywhere on the site (About page's own placeholders are
// still pending Higgsfield generation). Text and numbers, not a fourth
// placeholder.
const stats = [
  {
    value: "0",
    label: "times our own agency was mentioned when we asked AI who to trust — that's what started this",
  },
  { value: "2 years", label: "on the lettings desk, not just studying the industry from outside it" },
  { value: "365 days", label: "of daily AI-search research before Reyse existed as a product" },
];

export default function AboutPromo() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <p className="mb-3 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
              About
            </p>
            <h2 className="font-heading text-3xl leading-[1.1] tracking-tight sm:text-4xl">
              Built by someone who&rsquo;s lived this exact problem.
            </h2>
            <div className="mt-6 space-y-4 text-foreground/70">
              <p>
                Reyse isn&rsquo;t a faceless agency — it&rsquo;s one person,
                built out of two years actually working inside the industry
                and a year spent figuring out exactly how AI search works,
                not guessing.
              </p>
              <p className="text-sm text-foreground/60">
                Still genuinely a team of one, building in public and
                applying Reyse&rsquo;s own SEO and GEO service to its own
                website first. If it doesn&rsquo;t work here, it
                doesn&rsquo;t go near a client.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Read the full story
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-panel">
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 py-5">
                <p className="font-heading text-3xl leading-none tracking-tight text-accent-text">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-2 text-sm text-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
