import Link from "next/link";
import Reveal from "./Reveal";
import type { ResourceLink } from "../resources/data";

export type DownloadKind = "course" | "checklist" | "template" | "kit" | "tracker" | "worksheet" | "list";

export const kindLabels: Record<DownloadKind, string> = {
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

// A fixed, pre-verified shape sequence for exactly 8 "rest" cards — one
// big 2x2, two small 1x1s, one tall 1x2, another big 2x2, one wide 2x1,
// and two more small 1x1s. Area sums to 16 (a clean 4x4 block) and this
// exact ordering has been checked against actual computed grid-column/
// grid-row placement to tile with zero gaps under grid-flow-dense —
// changing the sequence or its length needs the same verification, not
// just eyeballing a screenshot.
const SHAPE_SEQUENCE = ["big", "small", "tall", "small", "big", "wide", "small", "small"] as const;

const shapeSpecs: Record<(typeof SHAPE_SEQUENCE)[number], { col: string; row: string; icon: string; title: string; blurb?: boolean }> = {
  big: { col: "sm:col-span-2", row: "sm:row-span-2", icon: "h-7 w-7", title: "text-lg", blurb: true },
  small: { col: "sm:col-span-1", row: "sm:row-span-1", icon: "h-5 w-5", title: "text-sm" },
  tall: { col: "sm:col-span-1", row: "sm:row-span-2", icon: "h-6 w-6", title: "text-base" },
  wide: { col: "sm:col-span-2", row: "sm:row-span-1", icon: "h-6 w-6", title: "text-base" },
};

export default function DownloadsBentoPage({
  downloads,
  kindByFile,
  backHref,
  backLabel,
  title,
  description,
  ctaTitle,
  ctaDescription,
  ctaHref,
  ctaLabel,
}: {
  downloads: ResourceLink[];
  kindByFile: Record<string, DownloadKind>;
  backHref: string;
  backLabel: string;
  title: string;
  description: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaHref: string;
  ctaLabel: string;
}) {
  const withKind = downloads.map((d) => ({
    ...d,
    file: d.href.split("/").pop() ?? "",
    kind: kindByFile[d.href.split("/").pop() ?? ""] ?? ("template" as DownloadKind),
  }));
  const [featured, second, third, ...rest] = withKind;

  return (
    <main className="flex-1">
      <div className="border-b border-border px-6 pb-16 pt-40">
        <div className="mx-auto max-w-6xl">
          <Link href={backHref} className="text-sm text-foreground/60 hover:text-foreground">
            ← {backLabel}
          </Link>
          <p className="mb-4 mt-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
            {withKind.length} free downloads
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">{description}</p>
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
              const spec = shapeSpecs[SHAPE_SEQUENCE[i % SHAPE_SEQUENCE.length]];
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
            <h2 className="font-heading text-xl leading-[1.1] tracking-tight">{ctaTitle}</h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/65">{ctaDescription}</p>
            <Link
              href={ctaHref}
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              {ctaLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
