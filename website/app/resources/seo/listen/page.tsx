import Link from "next/link";
import Reveal from "../../../components/Reveal";
import { pageMetadata } from "../../../lib/seo";
import { resourcesBySlug } from "../../data";

export const metadata = pageMetadata({
  title: "Listen: The Free SEO Course",
  description: "The full SEO course as an audiobook — listen here on the page, or open it in Spotify.",
});

function getSpotifyEmbedSrc(url: string) {
  const match = url.match(/open\.spotify\.com\/(episode|show|track|album)\/([a-zA-Z0-9]+)/);
  return match ? `https://open.spotify.com/embed/${match[1]}/${match[2]}` : null;
}

export default function SeoListenPage() {
  const audiobook = resourcesBySlug.seo.audiobooks[0];
  const embedSrc = audiobook ? getSpotifyEmbedSrc(audiobook.href) : null;

  return (
    <main className="flex-1">
      <div className="border-b border-border px-6 pb-16 pt-40">
        <div className="mx-auto max-w-4xl">
          <Link href="/resources/seo" className="text-sm text-foreground/60 hover:text-foreground">
            ← Back to the SEO course
          </Link>
          <p className="mb-4 mt-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
            Listen
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            The free SEO course, as an audiobook.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            Listen right here on the page, or open it directly in
            Spotify — same course, for the car or a commute.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-16">
        <Reveal>
          {embedSrc && (
            <iframe
              src={embedSrc}
              title="The Free SEO Course — audiobook"
              className="w-full rounded-3xl border border-border"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          )}

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {audiobook && (
              <a
                href={audiobook.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90"
              >
                Listen on Spotify
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
