import Link from "next/link";
import { CourseIcon, VideoIcon, AudiobookIcon, DownloadIcon } from "./ResourceCards";

const ArrowIcon = (
  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function AltFormatLink({
  href,
  icon,
  label,
  cta,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-1 items-center gap-3 px-5 py-4 transition hover:bg-ink/[0.03] sm:px-6"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink/5 text-foreground/60">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm text-foreground/60">{label}</span>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-text">
          {cta}
          {ArrowIcon}
        </span>
      </span>
    </Link>
  );
}

// One obvious primary path (read it here, free) plus a lightweight row of
// alternate formats — sized and styled so the hierarchy is immediate: this
// is one course, and here are three other ways to take it in, not four
// competing options that all look the same.
export default function CourseFormatShowcase({
  readHref,
  readTitle,
  readDescription,
  readCta,
  video,
  videoHref,
  audiobook,
  listenHref,
  downloadsCount,
  downloadsHref,
}: {
  readHref: string;
  readTitle: string;
  readDescription: string;
  readCta: string;
  video?: { title: string; description: string };
  videoHref: string;
  audiobook?: { title: string; description: string };
  listenHref: string;
  downloadsCount: number;
  downloadsHref: string;
}) {
  return (
    <div>
      <Link
        href={readHref}
        className="group flex flex-col gap-5 rounded-2xl border border-accent/30 bg-accent/5 p-6 transition hover:border-accent/50 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-text">
            {CourseIcon}
          </span>
          <div>
            <p className="font-heading text-xl leading-[1.2] tracking-tight text-foreground">{readTitle}</p>
            <p className="mt-1.5 text-sm text-foreground/60">{readDescription}</p>
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-ink-foreground transition group-hover:opacity-90">
          {readCta}
          {ArrowIcon}
        </span>
      </Link>

      <div className="mt-3 flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border bg-panel sm:flex-row sm:divide-x sm:divide-y-0">
        {video && (
          <AltFormatLink href={videoHref} icon={VideoIcon} label="Prefer to watch?" cta="Watch now" />
        )}
        {audiobook && (
          <AltFormatLink href={listenHref} icon={AudiobookIcon} label="Prefer to listen?" cta="Listen now" />
        )}
        {downloadsCount > 0 && (
          <AltFormatLink
            href={downloadsHref}
            icon={DownloadIcon}
            label="Want it as templates?"
            cta={`${downloadsCount} downloads`}
          />
        )}
      </div>
    </div>
  );
}
