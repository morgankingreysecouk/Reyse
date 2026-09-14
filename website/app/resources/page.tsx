import Link from "next/link";
import Reveal from "../components/Reveal";
import { pageMetadata } from "../lib/seo";
import { guides } from "./data";

export const metadata = pageMetadata({
  title: "Free Resources",
  description:
    "Free, specific guides to improve your own Google and AI visibility as an estate or letting agent — no cost, no catch. Prefer we just do it? See our Managed service instead.",
});

const icons: Record<string, React.ReactNode> = {
  "google-business-profile-checklist": (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  ),
  "how-to-actually-get-reviews": (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 4.5l2.2 4.5 4.9.7-3.55 3.47.84 4.88L12 15.8l-4.4 2.25.84-4.88L4.9 9.7l4.9-.7L12 4.5Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "check-if-ai-recommends-you": (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M19.5 19.5 15.2 15.2" strokeLinecap="round" />
      <path d="M10.5 7.5v6M7.5 10.5h6" strokeLinecap="round" />
    </svg>
  ),
  "local-seo-checklist": (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 11.5l2 2 4-4.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="4" y="4" width="16" height="16" rx="3" />
    </svg>
  ),
};

export default function ResourcesIndex() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
            Free Resources
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            Do it yourself, properly.
          </h1>
          <p className="mt-5 text-lg text-foreground/70">
            Free, specific guides for estate and letting agents — the exact
            steps, no vague advice, no cost. Work through them yourself, no
            strings attached.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {guides.map((guide, i) => (
            <Reveal key={guide.slug} delay={i * 70}>
              <Link
                href={`/resources/${guide.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border p-6 transition hover:border-foreground/30 hover:bg-panel"
              >
                <div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                    {icons[guide.slug]}
                  </span>
                  <p className="mt-4 text-xs font-medium text-foreground/65">{guide.readingTime}</p>
                  <h2 className="mt-3 font-heading text-xl leading-[1.2] tracking-tight">
                    {guide.title}
                  </h2>
                  <p className="mt-2 text-sm text-foreground/70">{guide.excerpt}</p>
                </div>
                <div className="mt-6 flex items-center justify-end">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-text opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
                    Read
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mx-auto mt-16 max-w-xl rounded-2xl border border-border bg-panel p-8 text-center">
            <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
              Rather we just did all of this for you?
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/65">
              Tell us about your business and we&rsquo;ll tell you exactly
              what&rsquo;s missing — free to ask, no obligation.
            </p>
            <Link
              href="/get-started"
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Request a free audit
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
