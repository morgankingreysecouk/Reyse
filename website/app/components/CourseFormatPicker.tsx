import Link from "next/link";
import { CourseIcon, VideoIcon, AudiobookIcon, DownloadIcon } from "./ResourceCards";

const ArrowIcon = (
  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function FormatCard({
  href,
  icon,
  title,
  description,
  cta,
  primary,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border p-5 transition hover:border-foreground/30 ${
        primary ? "border-accent/30 bg-accent/5" : "border-border bg-panel"
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-2">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
              primary ? "bg-accent/15 text-accent-text" : "bg-ink/5 text-foreground/70"
            }`}
          >
            {icon}
          </span>
          {primary && (
            <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-accent-foreground">
              Start here
            </span>
          )}
        </div>
        <p className="mt-4 font-heading text-lg leading-[1.2] tracking-tight text-foreground">{title}</p>
        <p className="mt-1.5 text-sm text-foreground/60">{description}</p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-text">
        {cta}
        {ArrowIcon}
      </span>
    </Link>
  );
}

export default function CourseFormatPicker({
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
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <FormatCard
        href={readHref}
        icon={CourseIcon}
        title={readTitle}
        description={readDescription}
        cta={readCta}
        primary
      />
      {video && (
        <FormatCard
          href={videoHref}
          icon={VideoIcon}
          title={video.title}
          description={video.description}
          cta="Watch now"
        />
      )}
      {audiobook && (
        <FormatCard
          href={listenHref}
          icon={AudiobookIcon}
          title={audiobook.title}
          description={audiobook.description}
          cta="Listen now"
        />
      )}
      {downloadsCount > 0 && (
        <FormatCard
          href={downloadsHref}
          icon={DownloadIcon}
          title="Download the resources"
          description={`${downloadsCount} free templates & checklists.`}
          cta="Download"
        />
      )}
    </div>
  );
}
