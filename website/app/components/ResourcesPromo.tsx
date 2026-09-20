import Link from "next/link";
import { AudiobookIcon, CourseIcon, DownloadIcon, VideoIcon } from "./ResourceCards";

const included = [
  { icon: CourseIcon, label: "Courses" },
  { icon: VideoIcon, label: "Videos" },
  { icon: AudiobookIcon, label: "Audiobooks" },
  { icon: DownloadIcon, label: "Downloads" },
];

export default function ResourcesPromo() {
  return (
    <section className="border-t border-border bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <p className="mb-3 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
              Free Resources
            </p>
            <h2 className="font-heading text-3xl leading-[1.1] tracking-tight sm:text-4xl">
              Everything we know, free to take.
            </h2>
            <div className="mt-6 space-y-4 text-foreground/70">
              <p>
                Courses, videos, audiobooks, and downloads — one set per
                topic: SEO, GEO, reviews, market intelligence, and scale.
                The same knowledge our paid work is built on, not a
                watered-down teaser.
              </p>
              <p>
                For any estate or letting agent, whether or not you ever
                become a client. Work through it yourself, or get partway
                through and decide you&rsquo;d rather we just did it for
                you.
              </p>
              <p className="text-sm text-foreground/60">
                Why free? I learned this the hard way, over a whole career,
                and I don&rsquo;t want anyone else to. It&rsquo;s here so
                every agent gets a genuine shot at being their best — and
                when you&rsquo;re stretched too thin to do it alone,
                that&rsquo;s exactly when we step in.
              </p>
            </div>
            <Link
              href="/resources"
              className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Browse free resources
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {included.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                  {item.icon}
                </span>
                <p className="mt-4 font-medium text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
