import Link from "next/link";
import PrintButton from "../../components/PrintButton";
import Reveal from "../../components/Reveal";
import { pageMetadata } from "../../lib/seo";
import { lessons } from "../lessons";

export const metadata = pageMetadata({
  title: "Your SEO Maintenance Schedule",
  description: "A printable weekly, monthly and quarterly schedule covering every item in the free SEO course.",
});

const bySlug = (slug: string) => {
  const lesson = lessons.find((l) => l.slug === slug);
  if (!lesson) throw new Error(`Schedule references missing lesson: ${slug}`);
  return lesson;
};

const groups = [
  {
    heading: "Weekly",
    note: "Little and often — these are the habits, not one-off checks.",
    slugs: ["duplicate-content-redirects", "reddit-forum-presence", "profile-activity", "reviews"],
  },
  {
    heading: "Monthly",
    note: "One sitting, once a month, covers all of these.",
    slugs: [
      "core-web-vitals",
      "https-security",
      "server-uptime",
      "schema-markup",
      "syndicated-listing-duplication",
      "google-business-profile",
      "analytics-enquiry-tracking",
      "backlinks",
    ],
  },
  {
    heading: "Quarterly",
    note: "Every few months — set a reminder, since it's easy to let these slide.",
    slugs: [
      "keyword-research",
      "canonicalization",
      "nap-consistency",
      "multi-platform-presence",
      "comprehensive-topic-depth",
      "competitor-gaps",
    ],
  },
  {
    heading: "Whenever You Publish Something New",
    note: "Tied to actually adding pages or listings, not the calendar.",
    slugs: [
      "mobile-usability",
      "site-architecture",
      "xml-sitemap",
      "robots-txt",
      "no-intrusive-interstitials",
      "titles-headers-meta-descriptions",
      "clear-structure",
      "near-me-local-wording",
      "phone-number-meta-descriptions",
    ],
  },
  {
    heading: "Ongoing Habits",
    note: "No fixed slot — just worth keeping in mind as you go.",
    slugs: ["original-content", "agent-bios", "being-early-new-platforms"],
  },
];

export default function SchedulePage() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-2xl">
        <Link href="/seocourse/course-complete" className="text-sm text-foreground/60 hover:text-foreground">
          ← Back to the course
        </Link>

        <h1 className="mt-6 font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          Your SEO Maintenance Schedule
        </h1>
        <p className="mt-4 text-lg text-foreground/70">
          Every check and habit from the course, grouped by how often it actually needs doing. Print it, stick it
          somewhere you'll see it, or save it as a PDF to keep on file.
        </p>

        <div className="no-print mt-6">
          <PrintButton label="Print / Save as PDF ↓" />
        </div>

        <Reveal>
          <div className="mt-10 rounded-2xl border border-border bg-panel p-6">
            <p className="text-xs font-medium text-foreground/65">Roughly, all together</p>
            <p className="mt-2 font-heading text-2xl leading-[1.15] tracking-tight">
              ~3&ndash;4 hours a month for the fixed, timed checks
            </p>
            <p className="mt-2 text-sm text-foreground/70">
              That's under an hour a week for everything on this page with a set number of minutes attached. On top
              of that sit a handful of weekly habits — posting, replying to reviews, a bit of outreach — that don't
              have a fixed number of minutes, but are worth building into the same routine. Treat this as directional,
              not exact — some months will be lighter, some heavier.
            </p>
          </div>
        </Reveal>

        {groups.map((group, gi) => (
          <div key={group.heading} className={gi === 0 ? "mt-14" : "mt-12 border-t border-border pt-10"}>
            <h2 className="font-heading text-2xl leading-[1.15] tracking-tight">{group.heading}</h2>
            <p className="mt-1 text-sm text-foreground/60">{group.note}</p>
            <div className="mt-5 space-y-2.5">
              {group.slugs.map((slug, i) => {
                const lesson = bySlug(slug);
                return (
                  <Reveal key={slug} delay={i * 50}>
                    <Link
                      href={`/seocourse/${lesson.slug}`}
                      className="flex items-center justify-between gap-4 rounded-xl border border-border p-4 hover:border-foreground/30"
                    >
                      <span className="text-sm font-medium text-foreground">{lesson.title}</span>
                      {lesson.cadenceBadge && (
                        <span className="shrink-0 rounded-full bg-ink px-2.5 py-1 text-[11px] font-medium text-ink-foreground">
                          {lesson.cadenceBadge}
                        </span>
                      )}
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        ))}

        <div className="no-print mt-14 border-t border-border pt-10 text-center">
          <Link
            href="/seocourse/course-complete"
            className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            ← Back to the course
          </Link>
        </div>
      </div>
    </main>
  );
}
