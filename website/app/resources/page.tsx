import Link from "next/link";
import CountUp from "../components/CountUp";
import Reveal from "../components/Reveal";
import { pageMetadata } from "../lib/seo";
import { products, type Product } from "../products/data";
import { resourcesBySlug } from "./data";
import { lessons as seoLessons } from "../seocourse/lessons";
import { lessons as geoLessons } from "../geocourse/lessons";
import { lessons as reviewLessons } from "../reviewscourse/lessons";
import { lessons as marketLessons } from "../marketcourse/lessons";
import { lessons as scaleLessons } from "../scalecourse/lessons";

export const metadata = pageMetadata({
  title: "Free Resources",
  description: "Five complete free courses for estate and letting agents — SEO, GEO, review management, market intelligence, and scale. No sign-up, no catch.",
});

const lessonCounts: Record<string, number> = {
  seo: seoLessons.length,
  geo: geoLessons.length,
  reviews: reviewLessons.length,
  "market-intelligence": marketLessons.length,
  scale: scaleLessons.length,
};

const totalLessons = Object.values(lessonCounts).reduce((a, b) => a + b, 0);
const totalDownloads = Object.values(resourcesBySlug).reduce((a, c) => a + c.downloads.length, 0);

const icons: Record<string, React.ReactNode> = {
  seo: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M19.5 19.5 15.2 15.2" strokeLinecap="round" />
    </svg>
  ),
  geo: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  reviews: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 4.5l2.2 4.5 4.9.7-3.55 3.47.84 4.88L12 15.8l-4.4 2.25.84-4.88L4.9 9.7l4.9-.7L12 4.5Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "market-intelligence": (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="12" r="2.2" />
      <path d="M8 6.5c4 0 6 2.5 8 5.5M8 17.5c4 0 6-2.5 8-5.5" strokeLinecap="round" />
    </svg>
  ),
};

const notIs = [
  { not: "An email gate before you see anything", is: "Read immediately — no signup" },
  { not: "One free chapter, then a paywall", is: "Every lesson, in full" },
  { not: "Generic templates you’ve seen on every other blog", is: "Templates built from the real course content, not padded out" },
  { not: "A funnel into a sales call", is: "Free whether or not you ever become a client" },
];

function ResourceCategoryCard({
  product,
  delay,
  large = false,
}: {
  product: Product;
  delay: number;
  large?: boolean;
}) {
  const lessonCount = lessonCounts[product.slug];
  const downloadCount = resourcesBySlug[product.slug]?.downloads.length ?? 0;

  return (
    <Reveal delay={delay}>
      <div
        className={`group flex h-full flex-col justify-between rounded-3xl border border-border p-7 transition hover:border-foreground/30 hover:bg-panel ${large ? "sm:p-9" : ""}`}
      >
        <div>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent-text">
            {icons[product.slug]}
          </span>
          <Link href={`/resources/${product.slug}`} className="mt-5 block">
            <h2
              className={`font-heading leading-[1.15] tracking-tight transition group-hover:text-accent-text ${
                large ? "text-2xl sm:text-3xl" : "text-xl"
              }`}
            >
              {product.label}
            </h2>
          </Link>
          <p className="mt-2 text-sm text-foreground/70">{product.tagline}</p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="text-xs font-medium text-foreground/50">
              {lessonCount} lesson{lessonCount === 1 ? "" : "s"}
            </span>
            <span className="text-xs font-medium text-foreground/50">
              {downloadCount} download{downloadCount === 1 ? "" : "s"}
            </span>
          </div>
          <Link
            href={`/resources/${product.slug}`}
            className="inline-flex items-center gap-1 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Explore →
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

export default function ResourcesHub() {
  const seo = products.find((p) => p.slug === "seo")!;
  const geo = products.find((p) => p.slug === "geo")!;
  const rest = products.filter((p) => p.slug !== "seo" && p.slug !== "geo");

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
          <p className="mb-4 inline-block rounded-full border border-ink-foreground/20 px-3 py-1 text-xs font-medium text-ink-foreground/70">
            Free Resources
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Free, by topic.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-foreground/70">
            Five topics, five complete courses, {totalDownloads} downloadable
            templates. No sign-up, no drip-fed emails, nothing held back for
            a sales call.
          </p>
          <a
            href="#topics"
            className="mt-9 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Browse the five topics
          </a>
        </div>
      </div>

      <div className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-3">
            <Reveal>
              <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-panel px-6 py-10 text-center">
                <p className="font-heading text-4xl leading-none tracking-tight text-accent-text">
                  <CountUp value={String(totalLessons)} />
                </p>
                <p className="mt-3 text-sm font-medium text-foreground/70">
                  free lessons, across five full courses
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-panel px-6 py-10 text-center">
                <p className="font-heading text-4xl leading-none tracking-tight text-accent-text">
                  <CountUp value={String(totalDownloads)} />
                </p>
                <p className="mt-3 text-sm font-medium text-foreground/70">
                  downloadable templates, checklists &amp; worksheets
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="flex flex-col items-center justify-center rounded-3xl bg-accent px-6 py-10 text-center text-accent-foreground">
                <p className="font-heading text-4xl leading-none tracking-tight">
                  <CountUp value="£0" />
                </p>
                <p className="mt-3 text-sm font-medium text-accent-foreground/80">
                  for all of it, no catch
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="bg-panel px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
              What you actually get
            </p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl leading-[1.15] tracking-tight sm:text-4xl">
              Not a lead magnet. The entire thing.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {notIs.map((row, i) => (
              <Reveal key={row.not} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-background p-6">
                  <div className="flex items-start gap-3 opacity-60">
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-foreground/30 text-foreground/50"
                    >
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <p className="text-sm font-medium text-foreground line-through decoration-foreground/40">
                      {row.not}
                    </p>
                  </div>
                  <div className="my-4 border-t border-dashed border-border" />
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-text"
                    >
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p className="text-sm font-medium text-foreground">{row.is}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div id="topics" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-center text-xs font-medium uppercase tracking-wide text-foreground/50">
              The five topics
            </p>
            <h2 className="mx-auto mt-3 max-w-xl text-center font-heading text-3xl leading-[1.15] tracking-tight sm:text-4xl">
              Pick where you actually are right now.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <ResourceCategoryCard product={seo} delay={0} large />
            <ResourceCategoryCard product={geo} delay={80} large />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {rest.map((product, i) => (
              <ResourceCategoryCard key={product.slug} product={product} delay={160 + i * 80} />
            ))}
          </div>
        </div>
      </div>

      <div className="border-y border-border bg-ink px-6 py-20 text-ink-foreground">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-foreground/50">
              Why it&rsquo;s free
            </p>
            <p className="mt-4 font-heading text-2xl leading-[1.4] tracking-tight sm:text-3xl">
              &ldquo;I learned this the hard way, over a whole career, and I
              don&rsquo;t want anyone else to. This exists so every agent
              gets a genuine shot at being their best &mdash; and when
              you&rsquo;re stretched too thin to do it alone, that&rsquo;s
              exactly when we step in.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>

      <div className="px-6 py-24">
        <Reveal>
          <div className="mx-auto max-w-xl rounded-2xl border border-border bg-panel p-8 text-center">
            <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/65">
              Take the 60-second quiz — a handful of quick questions about where
              your business actually stands today.
            </p>
            <Link
              href="/quiz"
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Take the quiz →
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
