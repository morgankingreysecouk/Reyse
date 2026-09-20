import Link from "next/link";
import HorizontalTimeline from "../../components/HorizontalTimeline";
import Reveal from "../../components/Reveal";
import { AudiobookIcon, CourseIcon, DownloadIcon, VideoIcon } from "../../components/ResourceCards";
import { pageMetadata } from "../../lib/seo";
import { checklistItems, checklistCategoryBlurbs, checklistTagStyles, checklistTagLabels } from "../../seocourse/data";
import { resourcesBySlug } from "../data";

export const metadata = pageMetadata({
  title: "The Free SEO Course",
  description: "A free course teaching estate and letting agents exactly how to get found on Google — no cost, no catch.",
});

const ExternalIcon = (
  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M6 4h6v6M12 4 4 12" strokeLinecap="round" strokeLinejoin="round" />
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
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {course && (
              <Link
                href={course.href}
                className="group flex flex-col justify-between gap-6 rounded-2xl border border-border bg-panel p-6 transition hover:border-foreground/30"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                  {CourseIcon}
                </span>
                <div>
                  <p className="font-medium text-foreground">Start the course</p>
                  <p className="mt-1 text-sm text-foreground/65">Read it here, lesson by lesson.</p>
                </div>
              </Link>
            )}
            {video && (
              <a
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between gap-6 rounded-2xl border border-border bg-panel p-6 transition hover:border-foreground/30"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                  {VideoIcon}
                </span>
                <div>
                  <p className="flex items-center gap-1.5 font-medium text-foreground">
                    {video.title}
                    <span className="text-foreground/40">{ExternalIcon}</span>
                  </p>
                  <p className="mt-1 text-sm text-foreground/65">{video.description}</p>
                </div>
              </a>
            )}
            {audiobook && (
              <a
                href={audiobook.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between gap-6 rounded-2xl border border-border bg-panel p-6 transition hover:border-foreground/30"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                  {AudiobookIcon}
                </span>
                <div>
                  <p className="flex items-center gap-1.5 font-medium text-foreground">
                    {audiobook.title}
                    <span className="text-foreground/40">{ExternalIcon}</span>
                  </p>
                  <p className="mt-1 text-sm text-foreground/65">{audiobook.description}</p>
                </div>
              </a>
            )}
            {downloads.length > 0 && (
              <Link
                href="/resources/seo/downloads"
                className="group flex flex-col justify-between gap-6 rounded-2xl border border-border bg-panel p-6 transition hover:border-foreground/30"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                  {DownloadIcon}
                </span>
                <div>
                  <p className="font-medium text-foreground">Download the resources</p>
                  <p className="mt-1 text-sm text-foreground/65">
                    {downloads.length} free templates &amp; checklists.
                  </p>
                </div>
              </Link>
            )}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10">
            <p className="mb-4 text-xs text-foreground/50">
              Every fix in the course, in order — drag to browse, or leave it to scroll itself.
            </p>
            <HorizontalTimeline
              items={checklistItems}
              categoryBlurbs={checklistCategoryBlurbs}
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
