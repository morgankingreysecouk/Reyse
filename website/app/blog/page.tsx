import Link from "next/link";
import { pageMetadata } from "../lib/seo";
import { posts } from "./data";

export const metadata = pageMetadata({
  title: "Blog",
  description: "Practical, specific writing on AI search, SEO, and reviews for property businesses — not vague theory.",
});

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
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-border p-6 transition hover:border-foreground/30 hover:bg-panel"
            >
              <div>
                <p className="text-xs font-medium text-foreground/65">
                  {post.date} · {post.readingTime}
                </p>
                <h2 className="mt-3 font-heading text-xl leading-[1.2] tracking-tight">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-foreground/70">{post.excerpt}</p>
              </div>
              <div className="mt-6 flex items-center justify-end">
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-text opacity-0 transition group-hover:opacity-100">
                  Read
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
