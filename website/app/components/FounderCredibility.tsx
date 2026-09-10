import Link from "next/link";
import Reveal from "./Reveal";

// Same three stats as /about — not a photo, since no real founder photo
// exists yet anywhere on the site (About page's own placeholders are
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

export default function FounderCredibility() {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-16">
      <Reveal>
        <h2 className="font-heading text-2xl leading-[1.15] tracking-tight sm:text-3xl">
          Built by someone who&rsquo;s lived this exact problem.
        </h2>
        <p className="mt-3 max-w-xl text-foreground/60">
          Reyse isn&rsquo;t a faceless agency — it&rsquo;s one person, built out of two
          years actually working inside the industry and a year spent
          figuring out exactly how AI search works, not guessing.
        </p>
        <Link
          href="/about"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-text hover:text-foreground"
        >
          Read the full story
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </Reveal>

      <div className="grid grid-cols-3 gap-6 lg:gap-10">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 100}>
            <div className="max-w-[9.5rem]">
              <p className="font-heading text-4xl leading-none tracking-tight text-accent-text">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-foreground/60">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
