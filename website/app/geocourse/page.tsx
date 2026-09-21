import Link from "next/link";
import HorizontalTimeline from "../components/HorizontalTimeline";
import Reveal from "../components/Reveal";
import { CourseIcon, DownloadIcon } from "../components/ResourceCards";
import { pageMetadata } from "../lib/seo";
import { checklistItems, checklistTagStyles, checklistTagLabels } from "./data";
import { lessons } from "./lessons";
import { resourcesBySlug } from "../resources/data";

export const metadata = pageMetadata({
  title: "The Free GEO Guide",
  description: "A free guide teaching estate and letting agents exactly how to get recommended by ChatGPT, Gemini, and Copilot — no cost, no catch.",
});

const ArrowIcon = (
  <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-foreground/30 transition group-hover:translate-x-0.5 group-hover:text-foreground/60" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function GeoCoursePage() {
  const { videos, audiobooks, downloads } = resourcesBySlug.geo;
  const firstLessonHref = `/geocourse/${lessons[0].slug}`;
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
            The free GEO guide for estate &amp; letting agents.
          </h1>

          <div className="mt-10 space-y-5 text-lg text-foreground/70">
            <p>
              GEO stands for Generative Engine Optimisation — making sure AI
              tools like ChatGPT, Google&rsquo;s Gemini, Microsoft&rsquo;s
              Copilot, and Perplexity actually name your business when someone
              asks a question relevant to what you do.
            </p>
            <p>
              This is genuinely different from a normal Google search. When
              someone searches Google the traditional way, they get a list of
              links and pick one themselves. When someone asks an AI tool the
              same question, the AI picks a small handful of businesses to name
              directly — often just one or two — and the person often never
              sees any other options at all. If you&rsquo;re not one of the
              names it picks, you&rsquo;re not &ldquo;ranked lower.&rdquo; You
              simply don&rsquo;t exist in that conversation.
            </p>
            <p>
              Every item below is marked with how confident the underlying
              evidence actually is: <strong className="text-foreground">confirmed</strong> (the
              AI companies themselves have stated this is a factor),{" "}
              <strong className="text-foreground">strongly observed</strong> (independent
              research consistently shows the pattern, even without an official
              confirmation), <strong className="text-foreground">emerging</strong> (a
              genuine, reasonable bet, not yet backed by solid evidence), or{" "}
              <strong className="text-foreground">measurement</strong> (not a
              ranking factor itself, but how you know the rest is working).
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
            <Link
                href={firstLessonHref}
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
                    Start the guide
                  </p>
                  <p className="mt-2 max-w-xs text-sm text-ink-foreground/70">
                    Every item, one at a time — read here, free, no sign-up.
                  </p>
                </div>
                <span className="relative mt-8 inline-flex items-center gap-1.5 text-sm font-medium">
                  Read item one
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>

            <div className="flex flex-col divide-y divide-border rounded-3xl border border-border bg-panel p-2">
              {video && (
                <Link
                  href="/geocourse/video"
                  className="group flex items-center gap-4 rounded-2xl p-4 transition hover:bg-background"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                    {CourseIcon}
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
                  href="/geocourse/listen"
                  className="group flex items-center gap-4 p-4 transition hover:bg-background"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                    {CourseIcon}
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
                  href="/geocourse/downloads"
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
              Every item in the guide, in order — jump to a section above, drag to browse, or leave it to scroll itself.
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
            The end goal: being the name AI tools actually say, not just a
            website that technically exists somewhere in their training data.
          </p>
          <p className="text-base text-foreground/60">
            One note: this guide covers GEO — AI tools like ChatGPT
            recommending you directly. Traditional SEO (Google, Bing, Apple)
            overlaps heavily but has{" "}
            <Link href="/resources/seo" className="text-foreground underline underline-offset-2 hover:text-accent-text">
              its own guide
            </Link>
            .
          </p>
          <p className="text-base text-foreground/60">
            One honest pattern worth flagging before you start: this field is
            newer than traditional SEO, and anyone claiming total certainty
            about how AI models pick who to cite is overselling what&rsquo;s
            actually known. Nothing in here is beyond what you can genuinely
            do yourself — I&rsquo;ll tell you plainly where the evidence is
            solid and where it&rsquo;s still a reasonable bet, item by item,
            throughout.
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
