import Link from "next/link";
import CourseChecklistAccordion from "../../components/CourseChecklistAccordion";
import CourseClosing from "../../components/CourseClosing";
import CourseFormatShowcase from "../../components/CourseFormatShowcase";
import CourseHeroStats from "../../components/CourseHeroStats";
import Reveal from "../../components/Reveal";
import { pageMetadata } from "../../lib/seo";
import { checklistItems, checklistTagStyles, checklistTagLabels, checklistCategoryBlurbs } from "../../seocourse/data";
import { resourcesBySlug } from "../data";

export const metadata = pageMetadata({
  title: "The Free SEO Course",
  description: "A free course teaching estate and letting agents exactly how to get found on Google — no cost, no catch.",
});

export default function SeoResourcesPage() {
  const { courses, videos, audiobooks, downloads } = resourcesBySlug.seo;
  const course = courses[0];
  const video = videos[0];
  const audiobook = audiobooks[0];

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
            The free SEO course for estate &amp; letting agents.
          </h1>

          <div className="mt-10 space-y-5 text-lg text-foreground/70">
            <p>
              SEO stands for Search Engine Optimisation — making your website
              easy for search engines to find, understand, and trust, so it
              appears higher when someone searches for something related to
              your business.
            </p>
            <p>
              The vast majority of buyers, sellers, landlords, and tenants now
              start their search online, often long before they ever speak to
              a human. If your website isn&rsquo;t visible, fast, trustworthy,
              and genuinely useful at that exact moment, you lose that
              business to whichever agency did show up — not because
              they&rsquo;re better at the job than you, but because you were
              invisible at the exact moment it mattered.
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

      <div className="mx-auto max-w-4xl px-6 pt-16">
        <Reveal>
          <p className="text-sm text-foreground/60">
            Read it, watch it, or listen to it — same 32 lessons, your call.
          </p>
          <div className="mt-4">
            {course && (
              <CourseFormatShowcase
                readHref={course.href}
                readTitle="Start the course"
                readDescription="All 32 lessons, one at a time — read here, free, no sign-up."
                readCta="Read lesson one"
                video={video}
                videoHref="/resources/seo/video"
                audiobook={audiobook}
                listenHref="/resources/seo/listen"
                downloadsCount={downloads.length}
                downloadsHref="/resources/seo/downloads"
              />
            )}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14">
            <p className="mb-4 text-xs text-foreground/50">
              {checklistItems.length} fixes across six categories — pick one to see what&rsquo;s inside.
            </p>
            <CourseChecklistAccordion
              items={checklistItems}
              tagStyles={checklistTagStyles}
              tagLabels={checklistTagLabels}
              categoryBlurbs={checklistCategoryBlurbs}
            />
          </div>
        </Reveal>
      </div>

      <Reveal>
        <CourseClosing
          endGoal="The end goal: becoming the obvious, undisputed number one estate and letting agency in your area — for sales and lettings alike."
          note={
            <>
              This guide covers traditional SEO (Google, Bing, Apple). GEO
              (Generative Engine Optimisation) — making sure AI tools like
              ChatGPT recommend you directly — overlaps heavily but has its
              own guide.
            </>
          }
          honestPattern="Almost nothing on this list is genuinely hard to do once. What's hard is doing all of it, correctly, at the same time, and then keeping it that way for years while a market, an algorithm, and a set of competitors keep moving underneath you. That's the actual challenge this guide can't solve for you — and it's flagged specifically, item by item, throughout."
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
