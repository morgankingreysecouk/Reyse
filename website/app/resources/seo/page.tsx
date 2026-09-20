import Link from "next/link";
import HorizontalTimeline from "../../components/HorizontalTimeline";
import Reveal from "../../components/Reveal";
import { AudiobookIcon, CourseIcon, DownloadIcon, VideoIcon } from "../../components/ResourceCards";
import { pageMetadata } from "../../lib/seo";
import { checklistItems, checklistTagStyles, checklistTagLabels } from "../../seocourse/data";
import { resourcesBySlug } from "../data";

export const metadata = pageMetadata({
  title: "The Free SEO Course",
  description: "A free course teaching estate and letting agents exactly how to get found on Google — no cost, no catch.",
});

const ArrowIcon = (
  <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-foreground/30 transition group-hover:translate-x-0.5 group-hover:text-foreground/60" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 pt-16">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
            Take it in however works for you
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
            {course && (
              <Link
                href={course.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-ink p-7 text-ink-foreground transition hover:opacity-95 sm:p-8"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.15]"
                  style={{
                    backgroundImage: "radial-gradient(rgba(250,248,242,0.5) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    maskImage: "radial-gradient(55% 65% at 25% 30%, black 30%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(55% 65% at 25% 30%, black 30%, transparent 100%)",
                  }}
                />
                <div className="relative">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-foreground/10 text-ink-foreground">
                    {CourseIcon}
                  </span>
                  <p className="mt-5 font-heading text-2xl leading-[1.15] tracking-tight">
                    Start the course
                  </p>
                  <p className="mt-2 max-w-xs text-sm text-ink-foreground/70">
                    All 32 lessons, one at a time — read here, free, no sign-up.
                  </p>
                </div>
                <span className="relative mt-8 inline-flex items-center gap-1.5 text-sm font-medium">
                  Read lesson one
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            )}

            <div className="flex flex-col divide-y divide-border rounded-3xl border border-border bg-panel p-2">
              {video && (
                <Link
                  href="/resources/seo/video"
                  className="group flex items-center gap-4 rounded-2xl p-4 transition hover:bg-background"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                    {VideoIcon}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{video.title}</p>
                    <p className="mt-0.5 text-xs text-foreground/60">{video.description}</p>
                  </div>
                  {ArrowIcon}
                </Link>
              )}
              {audiobook && (
                <Link
                  href="/resources/seo/listen"
                  className="group flex items-center gap-4 p-4 transition hover:bg-background"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                    {AudiobookIcon}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{audiobook.title}</p>
                    <p className="mt-0.5 text-xs text-foreground/60">{audiobook.description}</p>
                  </div>
                  {ArrowIcon}
                </Link>
              )}
              {downloads.length > 0 && (
                <Link
                  href="/resources/seo/downloads"
                  className="group flex items-center gap-4 rounded-2xl p-4 transition hover:bg-background"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                    {DownloadIcon}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Download the resources</p>
                    <p className="mt-0.5 text-xs text-foreground/60">
                      {downloads.length} free templates &amp; checklists.
                    </p>
                  </div>
                  {ArrowIcon}
                </Link>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10">
            <p className="mb-4 text-xs text-foreground/50">
              Every fix in the course, in order — drag to browse, or jump to a section above.
            </p>
            <HorizontalTimeline
              items={checklistItems}
              tagStyles={checklistTagStyles}
              tagLabels={checklistTagLabels}
            />
          </div>
        </Reveal>
      </div>

      <div className="mx-auto max-w-2xl px-6 pt-20">
        <div className="space-y-5 text-lg text-foreground/70">
          <p>
            The end goal: becoming the obvious, undisputed number one estate
            and letting agency in your area — for sales and lettings alike.
          </p>
          <p className="text-base text-foreground/60">
            One note: this guide covers traditional SEO (Google, Bing,
            Apple). GEO (Generative Engine Optimisation) — making sure AI
            tools like ChatGPT recommend you directly — overlaps heavily but
            has its own guide.
          </p>
          <p className="text-base text-foreground/60">
            One honest pattern worth noticing before you start: almost
            nothing on this list is genuinely hard to do once. What&rsquo;s
            hard is doing all of it, correctly, at the same time, and then
            keeping it that way for years while a market, an algorithm, and
            a set of competitors keep moving underneath you. That&rsquo;s the
            actual challenge this guide can&rsquo;t solve for you — and
            it&rsquo;s flagged specifically, item by item, throughout.
          </p>
        </div>
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
