import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Careers",
  description: "Reyse is hiring one partner — equity instead of salary, flexible hours, and a real hand in sales, marketing, and fulfillment.",
});

function CardIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-text">
      {children}
    </span>
  );
}

export default function CareersPage() {
  return (
    <main className="flex-1">
      <div className="relative overflow-hidden border-b border-border bg-ink px-6 pb-24 pt-40 text-ink-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(rgba(250,248,242,0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(60% 60% at 50% 35%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(60% 60% at 50% 35%, black 40%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            Careers
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-foreground/70">
            Most careers pages perform a team and a culture that doesn&rsquo;t
            exist yet, for a company this early. This one won&rsquo;t.
            Here&rsquo;s exactly where things stand.
          </p>
          <a
            href="#working-at-reyse"
            className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            See where things stand
          </a>
        </div>
      </div>

      <div className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="grid items-center gap-10 sm:grid-cols-2 sm:gap-16">
              <div>
                <h2 className="font-heading text-3xl leading-[1.1] tracking-tight sm:text-4xl">
                  About Reyse
                </h2>
                <p className="mt-5 text-foreground/70">
                  Reyse started as the answer to one lettings agency&rsquo;s
                  invisibility problem — mine. It&rsquo;s now built for every
                  estate and letting agent with the same blind spot. It&rsquo;s
                  also, right now, a company of one.
                </p>
                <Link
                  href="/about"
                  className="mt-7 inline-block rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-foreground/40"
                >
                  Read the full story
                </Link>
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border">
                <Image
                  src="/images/careers-desk.webp"
                  alt="A minimal home-office desk with a laptop, coffee, and a notebook — Reyse today"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="bg-panel px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl leading-[1.1] tracking-tight sm:text-4xl">
                Why join early?
              </h2>
              <p className="mt-5 text-foreground/70">
                When Reyse does start hiring, the people who join first
                won&rsquo;t be slotting into a defined role in an existing
                structure — they&rsquo;ll be helping build the structure.
                That&rsquo;s genuinely more interesting for the right person,
                and genuinely harder, and it&rsquo;s worth being upfront about
                both sides of that before anyone gets excited about the wrong
                thing.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 flex min-h-[220px] items-center justify-center rounded-3xl bg-ink px-8 py-16 text-center text-ink-foreground sm:min-h-[280px]">
              <p className="max-w-2xl font-heading text-3xl leading-[1.3] tracking-tight sm:text-4xl">
                &ldquo;Early means real ownership, not a title.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div id="working-at-reyse" className="bg-panel px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl tracking-tight sm:text-4xl">
              Working at Reyse
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-6">
              <Reveal>
                <div className="rounded-3xl border border-border bg-background p-8">
                  <CardIcon>
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="8.5" r="3.5" />
                      <path d="M4.5 20c1.2-4 4.2-6 7.5-6s6.3 2 7.5 6" strokeLinecap="round" />
                    </svg>
                  </CardIcon>
                  <h3 className="mt-4 text-lg font-semibold">
                    It&rsquo;s one person right now
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70">
                    Reyse doesn&rsquo;t have a team yet — just a founder
                    building the product and the business at the same time.
                    That&rsquo;s exactly what the role below is for.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-accent px-6 py-14 text-center text-accent-foreground">
                  <p className="text-xs font-medium uppercase tracking-wide text-accent-foreground/70">
                    Now hiring
                  </p>
                  <p className="font-heading text-5xl leading-none tracking-tight">
                    Partner
                  </p>
                  <p className="mx-auto mt-2 max-w-xs text-sm text-accent-foreground/80">
                    Equity, not a salary. Flexible hours, not fixed ones.
                    Sales, marketing, fulfillment — everything, alongside
                    the founder.
                  </p>
                </div>
              </Reveal>
              <div className="grid grid-cols-2 gap-6">
                <Reveal>
                  <div className="h-full rounded-3xl border border-border bg-background p-6">
                    <CardIcon>
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="8.5" />
                        <path d="M12 12V3.5A8.5 8.5 0 0 1 20.5 12H12Z" fill="currentColor" stroke="none" />
                      </svg>
                    </CardIcon>
                    <h3 className="mt-4 text-sm font-semibold">
                      No salary, real equity
                    </h3>
                    <p className="mt-2 text-xs text-foreground/70">
                      Ownership in the company instead — the actual amount
                      is a conversation, not a number on this page.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <div className="h-full rounded-3xl border border-border bg-background p-6">
                    <CardIcon>
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="4" y="13" width="7" height="7" rx="1" />
                        <rect x="13" y="13" width="7" height="7" rx="1" />
                        <rect x="8.5" y="4" width="7" height="7" rx="1" />
                      </svg>
                    </CardIcon>
                    <h3 className="mt-4 text-sm font-semibold">
                      Real ownership, not a title
                    </h3>
                    <p className="mt-2 text-xs text-foreground/70">
                      The partner helps build the structure, not fit into one.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <Reveal delay={100}>
                <div className="rounded-3xl border border-border bg-background p-8">
                  <h3 className="text-lg font-semibold">How we&rsquo;ll work</h3>
                  <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                    <li>Remote-first</li>
                    <li>Direct line to the founder</li>
                    <li>No bureaucracy to navigate</li>
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-background px-6 py-14 text-center">
                  <p className="text-lg font-semibold text-foreground">Interested?</p>
                  <p className="mx-auto mt-2 max-w-xs text-sm text-foreground/70">
                    Email directly — no form, no pipeline, just a real
                    conversation about what you&rsquo;d bring.
                  </p>
                  <a
                    href="mailto:morgan.king@reyse.co.uk?subject=Partner%20role%20at%20Reyse"
                    className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
                  >
                    morgan.king@reyse.co.uk
                  </a>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="h-full rounded-3xl border border-border bg-background p-8">
                  <h3 className="font-heading text-xl leading-[1.2] tracking-tight">
                    Where this all started
                  </h3>
                  <p className="mt-3 text-sm text-foreground/70">
                    A lettings desk, a bad reputation, and a business that
                    didn&rsquo;t show up anywhere it was asked about.
                  </p>
                  <Link
                    href="/about"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-text hover:opacity-80"
                  >
                    Read the story
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-24">
        <Reveal>
          <div className="mx-auto max-w-xl rounded-2xl border border-border bg-panel p-8 text-center">
            <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
              Not right for the partner role, but want to be on the list?
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/65">
              If Reyse sounds like somewhere you&rsquo;d want to work once
              there&rsquo;s an actual team to join — beyond the partner role
              above — send a short note: who you are, what you&rsquo;d
              bring. It&rsquo;ll be read personally, not filtered by an
              applicant tracking system that doesn&rsquo;t exist yet.
            </p>
            <a
              href="mailto:hello@reyse.co.uk?subject=Interested%20in%20Reyse"
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              hello@reyse.co.uk
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
