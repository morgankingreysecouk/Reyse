import Link from "next/link";
import { InfoIcon, HeartIcon, DocumentIcon, MailIcon } from "./NavIcons";

const links = [
  {
    href: "/about",
    icon: InfoIcon,
    label: "About",
    tagline: "Why Reyse exists, and who's building it.",
  },
  {
    href: "/charity",
    icon: HeartIcon,
    label: "Charity",
    tagline: "Free right now — we ask for a donation instead.",
  },
  {
    href: "/blog",
    icon: DocumentIcon,
    label: "Blog",
    tagline: "Practical writing on AI search, SEO, and reviews.",
  },
  {
    href: "/newsletter",
    icon: MailIcon,
    label: "Newsletter",
    tagline: "Occasional updates, no spam.",
  },
];

export default function AboutPromo() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <h2 className="font-heading text-3xl leading-[1.1] tracking-tight sm:text-4xl">
              Built by someone who&rsquo;s lived this exact problem.
            </h2>
            <div className="mt-6 text-foreground/70">
              <p className="leading-relaxed">
                Reyse isn&rsquo;t a faceless agency — it&rsquo;s one person,
                building in public. The full story, how we give back while
                we&rsquo;re free, and what we&rsquo;re writing and building
                next are all just one click away.
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
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-4 px-5 py-4 transition hover:bg-ink/[0.03]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                  {link.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium text-foreground">{link.label}</span>
                  <span className="block truncate text-sm text-foreground/60">{link.tagline}</span>
                </span>
                <svg
                  viewBox="0 0 16 16"
                  className="h-3.5 w-3.5 shrink-0 text-foreground/30 transition group-hover:translate-x-0.5 group-hover:text-accent-text"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
