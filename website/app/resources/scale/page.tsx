import Link from "next/link";
import ChecklistTimeline from "../../components/ChecklistTimeline";
import Reveal from "../../components/Reveal";
import { pageMetadata } from "../../lib/seo";
import { checklistItems, checklistCategoryBlurbs, checklistTagStyles, checklistTagLabels } from "../../scalecourse/data";

export const metadata = pageMetadata({
  title: "The Free Scale Course",
  description: "A free course teaching estate and letting agents exactly how to replicate SEO, GEO, and trust signals properly across every branch — no cost, no catch.",
});

export default function ScaleResourcesPage() {
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
            The free scale course for growing estate &amp; letting agent groups.
          </h1>

          <div className="mt-10 space-y-5 text-lg text-foreground/70">
            <p>
              Scaling means taking a system that genuinely works for one
              branch and making it work for every branch after — not
              rebuilding SEO, GEO, and trust signals from scratch every
              single time a new office opens.
            </p>
            <p>
              A business with 30 locations and just 20% inconsistency in its
              listing data has 6 branches actively working against the
              other 24 at every directory where the details don&rsquo;t
              match — and multi-location brands with consistent data see up
              to twice the customer engagement of those without.
              Inconsistency isn&rsquo;t a cosmetic problem, it&rsquo;s a
              measurable drag on the whole network.
            </p>
            <p>
              Every item below is one of three things: a{" "}
              <strong className="text-foreground">foundation</strong> (decided
              once, inherited automatically by every branch after), a{" "}
              <strong className="text-foreground">discipline</strong> (has to
              be executed correctly every single time, or it quietly
              drifts), or a{" "}
              <strong className="text-foreground">safeguard</strong> (protects
              the value of what&rsquo;s already been built as the network
              grows). Watch the panel on the left as you scroll — it tracks
              exactly which stage of the course you&rsquo;re looking at.
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

      <div className="mx-auto max-w-2xl px-6">
        <div className="space-y-5 text-lg text-foreground/70">
          <p>
            The end goal: a 50th branch that launches as cleanly and ranks
            as fast as your first ever did — because nothing about it had
            to be rebuilt from zero.
          </p>
          <p className="text-base text-foreground/60">
            One note: this guide assumes you&rsquo;ve already got the
            fundamentals right at your first branch. If you haven&rsquo;t,
            start with the{" "}
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
            first — this one is about replicating what already works, not
            building it for the first time.
          </p>
          <p className="text-base text-foreground/60">
            One honest pattern worth noticing before you start: almost
            nothing on this list is genuinely difficult to do once, for one
            branch. What&rsquo;s hard is applying the exact same discipline
            to branch fifty as branch one, for years, as the business
            keeps growing underneath you. That&rsquo;s the actual challenge
            this guide can&rsquo;t solve for you — and it&rsquo;s flagged
            specifically, item by item, throughout.
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
              href="/scalecourse"
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
