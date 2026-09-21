import Link from "next/link";
import Reveal from "../../../components/Reveal";
import { pageMetadata } from "../../../lib/seo";
import { resourcesBySlug } from "../../data";

export const metadata = pageMetadata({
  title: "Free SEO Downloads",
  description: "Every free SEO download for estate and letting agents — checklists, templates, and trackers. No sign-up, no catch.",
});

type DownloadKind = "course" | "checklist" | "template" | "kit" | "tracker" | "worksheet" | "list";

// Keyed by filename rather than added to the shared ResourceLink type — this
// grouping is purely a visual/editorial concern for this one page, not part
// of the resources data model other pages rely on.
const kindByFile: Record<string, DownloadKind> = {
  "the-free-seo-course.pdf": "course",
  "reyse-schema-markup-pack.pdf": "template",
  "reyse-gbp-setup-checklist.pdf": "checklist",
  "reyse-review-request-reply-templates.pdf": "template",
  "reyse-ai-visibility-self-check-kit.pdf": "kit",
  "reyse-ai-crawler-access-checklist.pdf": "checklist",
  "reyse-nap-consistency-tracker.pdf": "tracker",
  "reyse-meta-title-description-formulas.pdf": "template",
  "reyse-competitor-snapshot-worksheet.pdf": "worksheet",
  "reyse-uk-directory-list.pdf": "list",
  "reyse-monthly-seo-health-check.pdf": "checklist",
};

const kindLabels: Record<DownloadKind, string> = {
  course: "Full course",
  checklist: "Checklist",
  template: "Template",
  kit: "Self-check kit",
  tracker: "Tracker",
  worksheet: "Worksheet",
  list: "Directory list",
};

const kindIcons: Record<DownloadKind, (className: string) => React.ReactNode> = {
  course: (c) => (
    <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6.5c2.5-1.3 5.5-1.3 8 0 2.5-1.3 5.5-1.3 8 0v11c-2.5-1.3-5.5-1.3-8 0-2.5-1.3-5.5-1.3-8 0v-11Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 6.5v11" strokeLinecap="round" />
    </svg>
  ),
  checklist: (c) => (
    <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="5" width="4" height="4" rx="1" />
      <rect x="4" y="15" width="4" height="4" rx="1" />
      <path d="M4.7 7l0.9 0.9L7.3 6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.7 17l0.9 0.9L7.3 16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 7h9M11 17h9" strokeLinecap="round" />
    </svg>
  ),
  template: (c) => (
    <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 9.5h16M9.5 9.5V20" strokeLinecap="round" />
    </svg>
  ),
  kit: (c) => (
    <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3.5l1.9 4.6 4.9.7-3.6 3.5.9 4.9L12 14.7l-4.1 2.5.9-4.9-3.6-3.5 4.9-.7L12 3.5Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  tracker: (c) => (
    <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  ),
  worksheet: (c) => (
    <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4.5 6h10M4.5 10h10M4.5 14h6" strokeLinecap="round" />
      <path d="M15.5 17.5l4-4-2-2-4 4v2h2Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  list: (c) => (
    <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="5" cy="17.5" r="1" fill="currentColor" stroke="none" />
      <path d="M9 6.5h11M9 12h11M9 17.5h11" strokeLinecap="round" />
    </svg>
  ),
};

function DownloadBadge() {
  return (
    <span
      aria-hidden
      className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-background text-foreground/60 shadow-sm"
    >
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 2.5v8M4.5 7l3.5 3.5L11.5 7M3 13.5h10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function DownloadVisual({ kind, iconSize, aspect }: { kind: DownloadKind; iconSize: string; aspect: string }) {
  return (
    <div className={`relative flex ${aspect} items-center justify-center rounded-2xl bg-panel`}>
      <span
        className="flex items-center justify-center rounded-full bg-accent/15 text-accent-text"
        style={{ width: "2.6em", height: "2.6em" }}
      >
        {kindIcons[kind](iconSize)}
      </span>
      <DownloadBadge />
    </div>
  );
}

// Fills whatever height the bento cell gives it, rather than a fixed
// aspect ratio — the cell's own col/row span decides how tall that is.
function BentoVisual({ kind, iconSize }: { kind: DownloadKind; iconSize: string }) {
  return (
    <div className="relative flex min-h-[64px] flex-1 items-center justify-center bg-panel">
      <span
        className="flex items-center justify-center rounded-full bg-accent/15 text-accent-text"
        style={{ width: "2.6em", height: "2.6em" }}
      >
        {kindIcons[kind](iconSize)}
      </span>
      <DownloadBadge />
    </div>
  );
}

// Deliberately irregular — a real bento grid, not a uniform 4-up list.
// Sized by editorial weight (the full-scope template gets the big block,
// the narrow trackers get the small ones), with the area of every cell
// summing to a clean multiple of the 4-column grid so `grid-flow-dense`
// packs it without leftover gaps.
const bentoSpec: Record<string, { col: string; row: string; icon: string; title: string; blurb?: boolean }> = {
  "reyse-review-request-reply-templates.pdf": { col: "sm:col-span-2", row: "sm:row-span-2", icon: "h-7 w-7", title: "text-lg", blurb: true },
  "reyse-ai-visibility-self-check-kit.pdf": { col: "sm:col-span-1", row: "sm:row-span-1", icon: "h-5 w-5", title: "text-sm" },
  "reyse-ai-crawler-access-checklist.pdf": { col: "sm:col-span-1", row: "sm:row-span-2", icon: "h-6 w-6", title: "text-base" },
  "reyse-nap-consistency-tracker.pdf": { col: "sm:col-span-1", row: "sm:row-span-1", icon: "h-5 w-5", title: "text-sm" },
  "reyse-meta-title-description-formulas.pdf": { col: "sm:col-span-2", row: "sm:row-span-2", icon: "h-7 w-7", title: "text-lg", blurb: true },
  "reyse-competitor-snapshot-worksheet.pdf": { col: "sm:col-span-2", row: "sm:row-span-1", icon: "h-6 w-6", title: "text-base" },
  "reyse-uk-directory-list.pdf": { col: "sm:col-span-1", row: "sm:row-span-1", icon: "h-5 w-5", title: "text-sm" },
  "reyse-monthly-seo-health-check.pdf": { col: "sm:col-span-1", row: "sm:row-span-1", icon: "h-5 w-5", title: "text-sm" },
};

export default function SeoDownloadsPage() {
  const downloads = resourcesBySlug.seo.downloads.map((d) => ({
    ...d,
    file: d.href.split("/").pop() ?? "",
    kind: kindByFile[d.href.split("/").pop() ?? ""] ?? "template",
  }));
  const [featured, second, third, ...rest] = downloads;

  return (
    <main className="flex-1">
      <div className="border-b border-border px-6 pb-16 pt-40">
        <div className="mx-auto max-w-6xl">
          <Link href="/resources/seo" className="text-sm text-foreground/60 hover:text-foreground">
            ← Back to the SEO course
          </Link>
          <p className="mb-4 mt-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
            {downloads.length} free downloads
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            Every SEO download, in one place.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            Checklists, templates, and trackers pulled straight from the
            course — no sign-up, no email gate, nothing held back.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <a
              href={featured.href}
              download
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border transition hover:border-foreground/30"
            >
              <DownloadVisual kind={featured.kind} iconSize="h-9 w-9" aspect="aspect-[16/9]" />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium text-foreground/65">{kindLabels[featured.kind]}</p>
                <h2 className="mt-3 font-heading text-2xl leading-[1.2] tracking-tight sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-sm text-foreground/70">{featured.description}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-accent-text">
                  Download PDF
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          </Reveal>

          <div className="flex flex-col gap-6">
            {[second, third].filter(Boolean).map((d, i) => (
              <Reveal key={d.href} delay={(i + 1) * 70}>
                <a
                  href={d.href}
                  download
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border transition hover:border-foreground/30"
                >
                  <DownloadVisual kind={d.kind} iconSize="h-6 w-6" aspect="aspect-[16/10]" />
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-medium text-foreground/65">{kindLabels[d.kind]}</p>
                    <h3 className="mt-2 font-heading text-lg leading-[1.2] tracking-tight">{d.title}</h3>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {rest.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[150px] sm:grid-flow-dense sm:gap-5">
            {rest.map((d, i) => {
              const spec = bentoSpec[d.file] ?? { col: "sm:col-span-1", row: "sm:row-span-1", icon: "h-5 w-5", title: "text-base" };
              return (
                <Reveal key={d.href} delay={i * 60} className={`${spec.col} ${spec.row}`}>
                  <a
                    href={d.href}
                    download
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border transition hover:border-foreground/30"
                  >
                    <BentoVisual kind={d.kind} iconSize={spec.icon} />
                    <div className="min-h-0 shrink-0 p-4">
                      <p className="text-xs font-medium text-foreground/65">{kindLabels[d.kind]}</p>
                      <h3 className={`mt-1.5 line-clamp-2 font-heading leading-[1.25] tracking-tight ${spec.title}`}>{d.title}</h3>
                      {spec.blurb && (
                        <p className="mt-2 line-clamp-2 text-sm text-foreground/65">{d.description}</p>
                      )}
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        )}

        <Reveal>
          <div className="mt-16 rounded-2xl border border-border bg-panel p-8 text-center">
            <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
              Ready to start the course?
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/65">
              No sign-up, no payment — click through and you&rsquo;re straight
              into module one.
            </p>
            <Link
              href="/seocourse"
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Start course →
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
