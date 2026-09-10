import Link from "next/link";
import Reveal from "../components/Reveal";
import { pageMetadata } from "../lib/seo";
import { posts } from "./data";

export const metadata = pageMetadata({
  title: "Blog",
  description: "Practical, specific writing on AI search, SEO, and reviews for property businesses — not vague theory.",
});

// Small topic icon per post, keyed by slug — not a photo. These are
// abstract concepts (schema, AI search behaviour), so a real photo would
// mean generic stock imagery; an icon gives visual differentiation without
// faking a subject that doesn't exist.
const icons: Record<string, React.ReactNode> = {
  "invisible-to-chatgpt": (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 5h16v11H9l-4 4V5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 10h7M8.5 13h4.5" strokeLinecap="round" />
    </svg>
  ),
  "google-business-profile-mistakes": (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  ),
  "getting-more-google-reviews": (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 4.5l2.2 4.5 4.9.7-3.55 3.47.84 4.88L12 15.8l-4.4 2.25.84-4.88L4.9 9.7l4.9-.7L12 4.5Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "ai-search-2026-property": (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M19.5 19.5 15.2 15.2" strokeLinecap="round" />
      <path d="M10.5 7.5v6M7.5 10.5h6" strokeLinecap="round" />
    </svg>
  ),
  "schema-markup-explained": (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 4 4 12l5 8M15 4l5 8-5 8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function BlogIndex() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
            Blog
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            Specifics, not theory.
          </h1>
          <p className="mt-5 text-lg text-foreground/70">
            The same standard we hold client work to: concrete, checkable, and
            useful whether or not you ever become a customer.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 70}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border p-6 transition hover:border-foreground/30 hover:bg-panel"
              >
                <div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                    {icons[post.slug]}
                  </span>
                  <p className="mt-4 text-xs font-medium text-foreground/65">
                    {post.date} · {post.readingTime}
                  </p>
                  <h2 className="mt-3 font-heading text-xl leading-[1.2] tracking-tight">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-foreground/70">{post.excerpt}</p>
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
      </div>
    </main>
  );
}
