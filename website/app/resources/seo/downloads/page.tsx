import Link from "next/link";
import Reveal from "../../../components/Reveal";
import { pageMetadata } from "../../../lib/seo";
import { resourcesBySlug } from "../../data";

export const metadata = pageMetadata({
  title: "Free SEO Downloads",
  description: "Every free SEO download for estate and letting agents — checklists, templates, and trackers. No sign-up, no catch.",
});

export default function SeoDownloadsPage() {
  const downloads = resourcesBySlug.seo.downloads;

  return (
    <main className="flex-1">
      <div className="border-b border-border px-6 pb-16 pt-40">
        <div className="mx-auto max-w-4xl">
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

      <div className="mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {downloads.map((d) => (
              <div
                key={d.href}
                className="flex flex-col justify-between gap-4 rounded-2xl border border-border bg-panel p-6"
              >
                <div>
                  <p className="font-medium text-foreground">{d.title}</p>
                  <p className="mt-1 text-sm text-foreground/65">{d.description}</p>
                </div>
                <a
                  href={d.href}
                  download
                  className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90"
                >
                  Download PDF
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M8 2.5v8M4.5 7l3.5 3.5L11.5 7M3 13.5h10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </Reveal>

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
