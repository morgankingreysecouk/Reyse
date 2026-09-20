import Link from "next/link";
import ChecklistTimeline from "../../components/ChecklistTimeline";
import Reveal from "../../components/Reveal";
import { pageMetadata } from "../../lib/seo";
import { checklistItems, checklistCategoryBlurbs, checklistTagStyles, checklistTagLabels } from "../../reviewscourse/data";
import { resourcesBySlug } from "../data";

export const metadata = pageMetadata({
  title: "The Free Review Management Course",
  description: "A free course teaching estate and letting agents exactly how to get more Google reviews, respond properly, and turn both into a ranking signal — no cost, no catch.",
});

export default function ReviewsResourcesPage() {
  const downloads = resourcesBySlug.reviews.downloads;

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
            The free review management course for estate &amp; letting agents.
          </h1>

          <div className="mt-10 space-y-5 text-lg text-foreground/70">
            <p>
              Review management means actually running your reviews as a
              system — asking at the right moment, replying to every one,
              and watching the numbers — rather than leaving them to
              whatever happens to show up.
            </p>
            <p>
              68% of negative reviews go completely unanswered, and only
              54% of reviews get any reply at all. Most agencies aren&rsquo;t
              losing on quality of service — they&rsquo;re losing on a gap
              between what actually happened and what shows up, unanswered,
              in the one place everyone checks before they call.
            </p>
            <p>
              Every fix below works one of three ways: <strong className="text-foreground">direct</strong> (Google&rsquo;s
              algorithm measures it and uses it as a ranking input),{" "}
              <strong className="text-foreground">indirect</strong> (it changes
              customer behaviour, and that behaviour is what Google eventually
              notices), or it&rsquo;s a <strong className="text-foreground">prerequisite</strong> (doesn&rsquo;t
              boost ranking, just makes ranking possible at all). Watch the
              panel on the left as you scroll — it tracks exactly which stage
              of the course you&rsquo;re looking at.
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
            The end goal: a review profile that&rsquo;s actively managed,
            genuinely current, and answered — the kind that makes a
            hesitant buyer or landlord stop scrolling and actually call.
          </p>
          <p className="text-base text-foreground/60">
            One note: this guide focuses specifically on reviews. It
            overlaps with both the{" "}
            <Link href="/resources/seo" className="text-foreground underline underline-offset-2 hover:text-accent-text">
              SEO course
            </Link>{" "}
            and the{" "}
            <Link href="/resources/geo" className="text-foreground underline underline-offset-2 hover:text-accent-text">
              GEO guide
            </Link>
            , since reviews feed both — but it goes deeper on this one topic
            than either of them do.
          </p>
          <p className="text-base text-foreground/60">
            One honest pattern worth noticing before you start: almost
            nothing on this list is genuinely hard to do once. What&rsquo;s
            hard is doing all of it, correctly, at the same time, and then
            keeping it that way for years while reviews keep arriving and
            competitors keep moving underneath you. That&rsquo;s the actual
            challenge this guide can&rsquo;t solve for you — and it&rsquo;s
            flagged specifically, item by item, throughout.
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
              href="/reviewscourse"
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
              &ldquo;I learned this the hard way, over a whole career, and I
              don&rsquo;t want anyone else to. This exists so every agent
              gets a genuine shot at being their best — and when
              you&rsquo;re stretched too thin to do it alone, that&rsquo;s
              exactly when we step in.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
