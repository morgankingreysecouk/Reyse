import Link from "next/link";
import CourseChecklistCarousel from "../../components/CourseChecklistCarousel";
import CourseClosing from "../../components/CourseClosing";
import CourseFormatShowcase from "../../components/CourseFormatShowcase";
import CourseHeroStats from "../../components/CourseHeroStats";
import Reveal from "../../components/Reveal";
import { pageMetadata } from "../../lib/seo";
import { checklistItems, checklistTagStyles, checklistTagLabels } from "../../reviewscourse/data";
import { resourcesBySlug } from "../data";

export const metadata = pageMetadata({
  title: "The Free Review Management Course",
  description: "A free course teaching estate and letting agents exactly how to get more Google reviews, respond properly, and turn both into a ranking signal — no cost, no catch.",
});

export default function ReviewsResourcesPage() {
  const { courses, videos, audiobooks, downloads } = resourcesBySlug.reviews;
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
              boost ranking, just makes ranking possible at all).
            </p>
          </div>

          <CourseHeroStats itemCount={checklistItems.length} downloadCount={downloads.length} />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-16">
        <Reveal>
          <p className="text-sm text-foreground/60">
            Read it, watch it, or listen to it — same 22 lessons, your call.
          </p>
          <div className="mt-4">
            {course && (
              <CourseFormatShowcase
                readHref={course.href}
                readTitle="Start the course"
                readDescription="All 22 lessons, one at a time — read here, free, no sign-up."
                readCta="Read lesson one"
                video={video}
                videoHref="/resources/reviews/video"
                audiobook={audiobook}
                listenHref="/resources/reviews/listen"
                downloadsCount={downloads.length}
                downloadsHref="/resources/reviews/downloads"
              />
            )}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14">
            <p className="mb-4 text-xs text-foreground/50">
              Every one of the {checklistItems.length} fixes in the course.
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
          endGoal="The end goal: a review profile that's actively managed, genuinely current, and answered — the kind that makes a hesitant buyer or landlord stop scrolling and actually call."
          note={
            <>
              This guide focuses specifically on reviews. It overlaps with
              both the{" "}
              <Link href="/resources/seo" className="text-foreground underline underline-offset-2 hover:text-accent-text">
                SEO course
              </Link>{" "}
              and the{" "}
              <Link href="/resources/geo" className="text-foreground underline underline-offset-2 hover:text-accent-text">
                GEO guide
              </Link>
              , since reviews feed both — but it goes deeper on this one
              topic than either of them do.
            </>
          }
          honestPattern="Almost nothing on this list is genuinely hard to do once. What's hard is doing all of it, correctly, at the same time, and then keeping it that way for years while reviews keep arriving and competitors keep moving underneath you. That's the actual challenge this guide can't solve for you — and it's flagged specifically, item by item, throughout."
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
