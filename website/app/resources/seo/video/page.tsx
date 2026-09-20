import Link from "next/link";
import Reveal from "../../../components/Reveal";
import { pageMetadata } from "../../../lib/seo";
import { resourcesBySlug } from "../../data";

export const metadata = pageMetadata({
  title: "Watch: The Free SEO Course",
  description: "The full SEO course on video — watch it here on the page, or open it in YouTube.",
});

function getYouTubeId(url: string) {
  const match = url.match(/(?:v=|youtu\.be\/)([\w-]{11})/);
  return match?.[1] ?? null;
}

export default function SeoVideoPage() {
  const video = resourcesBySlug.seo.videos[0];
  const videoId = video ? getYouTubeId(video.href) : null;

  return (
    <main className="flex-1">
      <div className="border-b border-border px-6 pb-16 pt-40">
        <div className="mx-auto max-w-4xl">
          <Link href="/resources/seo" className="text-sm text-foreground/60 hover:text-foreground">
            ← Back to the SEO course
          </Link>
          <p className="mb-4 mt-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
            Watch
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            The free SEO course, on video.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            Watch it right here on the page, or open it directly in
            YouTube — same 32-lesson course, narrated end to end.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          {videoId && (
            <div className="aspect-video w-full overflow-hidden rounded-3xl border border-border bg-ink">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="The Free SEO Course"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {video && (
              <a
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90"
              >
                Watch on YouTube
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M6 4h6v6M12 4 4 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
            <Link
              href="/seocourse"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-foreground/40"
            >
              Or read the course instead →
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="mt-8 border-y border-border bg-ink px-6 py-20 text-ink-foreground">
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
