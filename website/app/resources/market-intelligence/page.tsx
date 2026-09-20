import Link from "next/link";
import ChecklistTimeline from "../../components/ChecklistTimeline";
import Reveal from "../../components/Reveal";
import { pageMetadata } from "../../lib/seo";
import { checklistItems, checklistCategoryBlurbs, checklistTagStyles, checklistTagLabels } from "../../marketcourse/data";
import { resourcesBySlug } from "../data";

export const metadata = pageMetadata({
  title: "The Free Market & Competitive Intelligence Course",
  description: "A free course teaching estate and letting agents exactly how to benchmark themselves against a named competitor, catch shifts before they hit enquiries, and turn tracking into action — no cost, no catch.",
});

export default function MarketIntelligenceResourcesPage() {
  const downloads = resourcesBySlug["market-intelligence"].downloads;

  return (
    <main className="flex-1">
      <div className="relative overflow-hidden border-b border-border px-6 pb-20 pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(45% 45% at 50% 20%, rgba(166,173,62,0.16), transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(rgba(28,26,23,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(65% 55% at 50% 25%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(65% 55% at 50% 25%, black 40%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl">
          <Link href="/resources" className="text-sm text-foreground/60 hover:text-foreground">
            ← All resources
          </Link>
          <p className="mb-4 mt-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
            Free course available
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            The free market &amp; competitive intelligence course for estate &amp; letting agents.
          </h1>

          <div className="mt-10 space-y-5 text-lg text-foreground/70">
            <p>
              Market intelligence means actually knowing where you stand
              against the agency down the road — not guessing, and not
              assuming last year&rsquo;s reputation still reflects this
              year&rsquo;s search results.
            </p>
            <p>
              The top 20% of local businesses now capture 68% of all search
              visibility, and 56% of local businesses haven&rsquo;t adjusted
              anything for AI-driven search yet. That gap keeps widening for
              anyone not actively tracking where they sit against it — most
              agents genuinely have no idea how their SEO and AI visibility
              actually compares to the competitor they lose deals to.
            </p>
            <p>
              Every item below is one of three things: a{" "}
              <strong className="text-foreground">benchmark</strong> (a
              comparison point tracked directly against a named competitor),
              a{" "}
              <strong className="text-foreground">signal</strong> (an
              early-warning indicator that a shift is coming, before it
              hits your enquiries), or an{" "}
              <strong className="text-foreground">action</strong> (turning
              intelligence already gathered into an actual decision). Watch
              the panel on the left as you scroll — it tracks exactly which
              stage of the course you&rsquo;re looking at.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl">
        <ChecklistTimeline
          items={checklistItems}
          categoryBlurbs={checklistCategoryBlurbs}
          tagStyles={checklistTagStyles}
          tagLabels={checklistTagLabels}
        />
      </div>

      {downloads.length > 0 && (
        <div className="mx-auto mt-16 max-w-4xl px-6">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
              Downloads
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {downloads.map((d) => (
                <div
                  key={d.href}
                  className="flex flex-col justify-between gap-4 rounded-2xl border border-border bg-panel p-6"
                >
                  <div>
                    <p className="font-medium text-foreground">{d.title}</p>
                    <p className="mt-1 text-sm text-foreground/65">{d.description}</p>
                  </div>
                  <a
                    href={d.href}
                    download
                    className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90"
                  >
                    Download PDF
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M8 2.5v8M4.5 7l3.5 3.5L11.5 7M3 13.5h10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      )}

      <div className="mx-auto max-w-2xl px-6">
        <div className="space-y-5 text-lg text-foreground/70">
          <p>
            The end goal: never having to guess where you stand — a live,
            provable picture of your visibility, reputation, and momentum
            against a named rival, checked the same way, every month.
          </p>
          <p className="text-base text-foreground/60">
            One note: this guide focuses specifically on measuring and
            comparing. It leans on the{" "}
            <Link href="/resources/seo" className="text-foreground underline underline-offset-2 hover:text-accent-text">
              SEO course
            </Link>
            , the{" "}
            <Link href="/resources/geo" className="text-foreground underline underline-offset-2 hover:text-accent-text">
              GEO guide
            </Link>
            , and the{" "}
            <Link href="/resources/reviews" className="text-foreground underline underline-offset-2 hover:text-accent-text">
              Review Management course
            </Link>{" "}
            for the actual fixes — this one tells you which of those to
            prioritise, and when.
          </p>
          <p className="text-base text-foreground/60">
            One honest pattern worth noticing before you start: almost
            nothing on this list is genuinely difficult to check once.
            What&rsquo;s hard is checking it the same way, on the same
            schedule, for long enough to see an actual trend rather than a
            single snapshot. That&rsquo;s the actual challenge this guide
            can&rsquo;t solve for you — and it&rsquo;s flagged specifically,
            item by item, throughout.
          </p>
        </div>

        <Reveal>
          <div className="mt-16 rounded-2xl border border-border bg-panel p-8 text-center">
            <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
              Ready to start?
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/65">
              No sign-up, no payment — click through and you&rsquo;re straight
              into module one.
            </p>
            <Link
              href="/marketcourse"
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Start course →
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="mt-24 border-y border-border bg-ink px-6 py-20 text-ink-foreground">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-foreground/50">
              Why it&rsquo;s free
            </p>
            <p className="mt-4 font-heading text-2xl leading-[1.4] tracking-tight sm:text-3xl">
              &ldquo;Reyse is one person, at an early stage, and this course
              is the same knowledge the paid work is built on — free whether
              or not you ever become a client.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
