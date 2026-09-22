import Link from "next/link";
import CourseChecklistCarousel from "../../components/CourseChecklistCarousel";
import CourseClosing from "../../components/CourseClosing";
import CourseFormatShowcase from "../../components/CourseFormatShowcase";
import CourseHeroStats from "../../components/CourseHeroStats";
import Reveal from "../../components/Reveal";
import { pageMetadata } from "../../lib/seo";
import { checklistItems, checklistTagStyles, checklistTagLabels } from "../../marketcourse/data";
import { resourcesBySlug } from "../data";

export const metadata = pageMetadata({
  title: "The Free Market & Competitive Intelligence Course",
  description: "A free course teaching estate and letting agents exactly how to benchmark themselves against a named competitor, catch shifts before they hit enquiries, and turn tracking into action — no cost, no catch.",
});

export default function MarketIntelligenceResourcesPage() {
  const { courses, videos, audiobooks, downloads } = resourcesBySlug["market-intelligence"];
  const course = courses[0];
  const video = videos[0];
  const audiobook = audiobooks[0];

  return (
    <main className="flex-1 overflow-x-hidden">
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
        <div className="relative mx-auto max-w-4xl">
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
              intelligence already gathered into an actual decision).
            </p>
          </div>

          <CourseHeroStats itemCount={checklistItems.length} downloadCount={downloads.length} />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-16">
        <Reveal>
          <p className="text-sm text-foreground/60">
            Read it, watch it, or listen to it — same 17 lessons, your call.
          </p>
          <div className="mt-4">
            {course && (
              <CourseFormatShowcase
                readHref={course.href}
                readTitle="Start the course"
                readDescription="All 17 lessons, one at a time — read here, free, no sign-up."
                readCta="Read lesson one"
                video={video}
                videoHref="/resources/market-intelligence/video"
                audiobook={audiobook}
                listenHref="/resources/market-intelligence/listen"
                downloadsCount={downloads.length}
                downloadsHref="/resources/market-intelligence/downloads"
              />
            )}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14">
            <p className="mb-4 text-xs text-foreground/50">
              Every one of the {checklistItems.length} items in the course.
            </p>
            <CourseChecklistCarousel
              items={checklistItems}
              tagStyles={checklistTagStyles}
              tagLabels={checklistTagLabels}
            />
          </div>
        </Reveal>
      </div>

      <Reveal>
        <CourseClosing
          endGoal="The end goal: never having to guess where you stand — a live, provable picture of your visibility, reputation, and momentum against a named rival, checked the same way, every month."
          note={
            <>
              This guide focuses specifically on measuring and comparing. It
              leans on the{" "}
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
            </>
          }
          honestPattern="Almost nothing on this list is genuinely difficult to check once. What's hard is checking it the same way, on the same schedule, for long enough to see an actual trend rather than a single snapshot. That's the actual challenge this guide can't solve for you — and it's flagged specifically, item by item, throughout."
        />
      </Reveal>

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
