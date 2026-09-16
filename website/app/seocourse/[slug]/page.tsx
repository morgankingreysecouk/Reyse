import Link from "next/link";
import { notFound } from "next/navigation";
import LoadSpeedDemo from "../../components/LoadSpeedDemo";
import MobileResponsiveDemo from "../../components/MobileResponsiveDemo";
import SecurityBadgeDemo from "../../components/SecurityBadgeDemo";
import Reveal from "../../components/Reveal";
import { pageMetadata } from "../../lib/seo";
import { lessons } from "../lessons";

const demoComponents = {
  "load-speed": LoadSpeedDemo,
  "mobile-responsive": MobileResponsiveDemo,
  "security-badge": SecurityBadgeDemo,
};

const demoCaptions: Record<string, string> = {
  "load-speed": "Same search, two agencies. Watch what happens by the time the slow one finishes loading.",
  "mobile-responsive": "Same listing page, two versions. One of these gets a tap on the enquiry button.",
  "security-badge": "Same enquiry form. One of these address bars makes people hesitate.",
};

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = lessons.find((l) => l.slug === slug);
  if (!lesson) return {};
  return pageMetadata({
    title: `${lesson.title} — The Free SEO Course`,
    description: lesson.whatIsIt,
  });
}

const doorIcon = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 3h9v18H6z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 3l3 1.5v15L15 21" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
const staffIcon = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="8" r="3.2" />
    <path d="M5 20c0-3.9 3.13-7 7-7s7 3.1 7 7" strokeLinecap="round" />
  </svg>
);
const stabilityIcon = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M4 14h16M9 4v16" strokeLinecap="round" />
  </svg>
);
const analogyIcons = [doorIcon, staffIcon, stabilityIcon];

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = lessons.find((l) => l.slug === slug);
  if (!lesson) notFound();

  const index = lessons.findIndex((l) => l.slug === slug);
  const next = lessons[index + 1];

  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-2xl">
        <Link href="/resources" className="text-sm text-foreground/60 hover:text-foreground">
          ← Back to course info
        </Link>

        <p className="mb-4 mt-6 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
          {lesson.category} · {lesson.categoryIndex}.{lesson.itemIndex}
        </p>
        <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          {lesson.title}
        </h1>

        {/* What is it */}
        <div className="mt-10">
          <p className="text-lg text-foreground/70">{lesson.whatIsIt}</p>
          {lesson.analogy && lesson.analogy.length === 1 && (
            <Reveal>
              <p className="mt-6 rounded-2xl border border-border bg-panel p-5 text-sm italic text-foreground/70">
                &ldquo;{lesson.analogy[0].text}&rdquo;
              </p>
            </Reveal>
          )}
          {lesson.analogy && lesson.analogy.length > 1 && (
            <div
              className={`mt-6 grid gap-3 ${
                lesson.analogy.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"
              }`}
            >
              {lesson.analogy.map((a, i) => (
                <Reveal key={a.label} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-border p-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                      {analogyIcons[i % analogyIcons.length]}
                    </span>
                    <p className="mt-3 text-sm font-medium text-foreground">{a.label}</p>
                    <p className="mt-1 text-xs text-foreground/60">{a.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>

        {/* Why it matters */}
        <div className="mt-16 border-t border-border pt-10">
          <h2 className="font-heading text-2xl leading-[1.15] tracking-tight">
            Why this matters
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border p-5">
                <p className="text-xs font-medium text-foreground/65">The customer&rsquo;s side</p>
                {lesson.whyCustomerStat && (
                  <div className="mt-3 flex items-center gap-3">
                    <span className="font-heading text-3xl leading-none tracking-tight text-accent-text">
                      {lesson.whyCustomerStat.value}
                    </span>
                    <span className="text-xs text-foreground/60">{lesson.whyCustomerStat.label}</span>
                  </div>
                )}
                <p className="mt-3 text-sm text-foreground/70">{lesson.whyCustomer}</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-2xl border border-accent/20 bg-accent/5 p-5">
                <p className="text-xs font-medium text-accent-text">The search engine&rsquo;s side</p>
                <p className="mt-3 inline-block rounded-full bg-ink px-2.5 py-1 text-[11px] font-medium text-ink-foreground">
                  {lesson.whySearchEngineBadge}
                </p>
                <p className="mt-3 text-sm text-foreground/70">{lesson.whySearchEngine}</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Live demo */}
        {lesson.demoComponent && (
          <div className="mt-16 border-t border-border pt-10">
            <h2 className="font-heading text-2xl leading-[1.15] tracking-tight">
              See it happen
            </h2>
            <p className="mt-2 text-sm text-foreground/60">{demoCaptions[lesson.demoComponent]}</p>
            <div className="mt-6">
              {(() => {
                const DemoComponent = demoComponents[lesson.demoComponent];
                return <DemoComponent />;
              })()}
            </div>
          </div>
        )}

        {/* Diagnose */}
        <div className="mt-16 border-t border-border pt-10">
          <h2 className="font-heading text-2xl leading-[1.15] tracking-tight">
            How to check yours
          </h2>
          <ol className="mt-6 space-y-3">
            {lesson.diagnoseSteps.map((step, i) => (
              <Reveal key={step} delay={i * 60}>
                <li className="flex gap-4 rounded-xl border border-border p-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-medium text-accent-text">
                    {i + 1}
                  </span>
                  <p className="text-sm text-foreground/70">{step}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          {lesson.diagnoseLink && (
            <a
              href={lesson.diagnoseLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Open {lesson.diagnoseLink.label} →
            </a>
          )}
        </div>

        {/* Fix */}
        <div className="mt-16 border-t border-border pt-10">
          <h2 className="font-heading text-2xl leading-[1.15] tracking-tight">
            How to fix what you find
          </h2>
          <div className="mt-6 space-y-3">
            {lesson.fixBranches.map((branch, i) => (
              <Reveal key={branch.condition} delay={i * 70}>
                <div className="rounded-2xl border border-border p-5">
                  <p className="text-sm font-medium text-foreground">{branch.condition}</p>
                  <p className="mt-1.5 text-sm text-foreground/70">{branch.action}</p>
                  {branch.links && branch.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {branch.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground/70 hover:border-foreground/30 hover:text-foreground"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          {lesson.fixShortcut && (
            <div className="mt-4 rounded-2xl border border-accent/20 bg-accent/5 p-5">
              <p className="text-xs font-medium text-accent-text">The easiest route</p>
              <p className="mt-1.5 text-sm text-foreground/70">{lesson.fixShortcut}</p>
              {lesson.fixShortcutLinks && lesson.fixShortcutLinks.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {lesson.fixShortcutLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-background px-3 py-1.5 text-xs font-medium text-foreground/70 hover:border-foreground/30 hover:text-foreground"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
          {lesson.fixFollowUp && (
            <p className="mt-4 text-sm text-foreground/60">{lesson.fixFollowUp}</p>
          )}
        </div>

        {/* Cadence */}
        <div className="mt-16 border-t border-border pt-10">
          <h2 className="font-heading text-2xl leading-[1.15] tracking-tight">
            Keeping on top of it
          </h2>
          <div className="mt-5 flex flex-wrap items-start gap-4 rounded-2xl border border-border bg-panel p-5">
            <span className="shrink-0 rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-ink-foreground">
              {lesson.cadenceBadge}
            </span>
            <p className="text-sm text-foreground/70">{lesson.cadence}</p>
          </div>
        </div>

        {/* Done With You / Done For You */}
        <div className="mt-16 border-t border-border pt-10">
          <h2 className="font-heading text-2xl leading-[1.15] tracking-tight">
            How Reyse handles this
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border p-5">
              <p className="text-sm font-medium text-foreground">Done With You</p>
              <p className="mt-2 text-sm text-foreground/70">{lesson.doneWithYou}</p>
            </div>
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5">
              <p className="text-sm font-medium text-accent-text">Done For You</p>
              <p className="mt-2 text-sm text-foreground/70">{lesson.doneForYou}</p>
            </div>
          </div>
        </div>

        {/* Next */}
        <Reveal>
          <div className="mt-16 rounded-2xl border border-border bg-panel p-8 text-center">
            {next ? (
              <>
                <p className="text-xs font-medium text-foreground/65">Next up</p>
                <h2 className="mt-2 font-heading text-xl leading-[1.1] tracking-tight">
                  {next.title}
                </h2>
                <Link
                  href={`/seocourse/${next.slug}`}
                  className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
                >
                  Next →
                </Link>
              </>
            ) : (
              <>
                <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
                  That&rsquo;s everything published so far.
                </h2>
                <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/65">
                  More of the course is on its way. Rather we just handled all of this
                  for you in the meantime?
                </p>
                <Link
                  href="/get-started"
                  className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
                >
                  Request a free audit
                </Link>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </main>
  );
}
