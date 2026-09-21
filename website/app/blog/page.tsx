import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import { pageMetadata } from "../lib/seo";
import { posts } from "./data";

export const metadata = pageMetadata({
  title: "Blog",
  description: "Practical, specific writing on AI search, SEO, and reviews for estate and letting agents — not vague theory.",
});

// A real photo per post, specific to what that post is actually about —
// not generic real-estate stock imagery. Falls back to the topic icon
// below for any slug without one yet.
const images: Record<string, string> = {
  "invisible-to-chatgpt": "/images/blog/invisible-to-chatgpt.webp",
  "google-business-profile-mistakes": "/images/blog/google-business-profile-mistakes.webp",
  "getting-more-google-reviews": "/images/blog/getting-more-google-reviews.webp",
  "ai-search-2026-property": "/images/blog/ai-search-2026-property.webp",
  "schema-markup-explained": "/images/blog/schema-markup-explained.webp",
};

const imageAlts: Record<string, string> = {
  "invisible-to-chatgpt": "Someone checking what an AI chat assistant says about local estate agents on a laptop",
  "google-business-profile-mistakes": "A Google Business Profile listing open on a smartphone",
  "getting-more-google-reviews": "A five-star review request screen open on a smartphone",
  "ai-search-2026-property": "A laptop and phone on a desk showing an AI search assistant and a voice assistant",
  "schema-markup-explained": "A laptop showing structured schema markup code in a browser",
};

// Small topic icon per post, keyed by slug — used only as a fallback for
// any post without a photo yet. Each is a function of className so the
// same icon can render at featured size or grid size.
const icons: Record<string, (className: string) => React.ReactNode> = {
  "invisible-to-chatgpt": (className) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 5h16v11H9l-4 4V5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 10h7M8.5 13h4.5" strokeLinecap="round" />
    </svg>
  ),
  "google-business-profile-mistakes": (className) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  ),
  "getting-more-google-reviews": (className) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 4.5l2.2 4.5 4.9.7-3.55 3.47.84 4.88L12 15.8l-4.4 2.25.84-4.88L4.9 9.7l4.9-.7L12 4.5Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "ai-search-2026-property": (className) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M19.5 19.5 15.2 15.2" strokeLinecap="round" />
      <path d="M10.5 7.5v6M7.5 10.5h6" strokeLinecap="round" />
    </svg>
  ),
  "schema-markup-explained": (className) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 4 4 12l5 8M15 4l5 8-5 8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

function PostVisual({
  slug,
  iconSize,
  aspect,
  sizes,
}: {
  slug: string;
  iconSize: string;
  aspect: string;
  sizes: string;
}) {
  const src = images[slug];

  if (src) {
    return (
      <div className={`relative ${aspect} overflow-hidden rounded-2xl bg-panel`}>
        <Image src={src} alt={imageAlts[slug] ?? ""} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  return (
    <div className={`flex ${aspect} items-center justify-center rounded-2xl bg-panel`}>
      <span className="flex items-center justify-center rounded-full bg-accent/15 text-accent-text" style={{ width: "2.6em", height: "2.6em" }}>
        {icons[slug]?.(iconSize)}
      </span>
    </div>
  );
}

export default function BlogIndex() {
  const [featured, second, third, ...rest] = posts;

  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-6xl">
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

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border transition hover:border-foreground/30"
            >
              <PostVisual
                slug={featured.slug}
                iconSize="h-9 w-9"
                aspect="aspect-[16/9]"
                sizes="(min-width: 1024px) 56vw, 100vw"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium text-foreground/65">
                  {featured.date} · {featured.readingTime}
                </p>
                <h2 className="mt-3 font-heading text-2xl leading-[1.2] tracking-tight sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-sm text-foreground/70">{featured.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-accent-text opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
                  Read
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="flex flex-col gap-6">
            {[second, third].filter(Boolean).map((post, i) => (
              <Reveal key={post.slug} delay={(i + 1) * 70}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border transition hover:border-foreground/30"
                >
                  <PostVisual
                    slug={post.slug}
                    iconSize="h-6 w-6"
                    aspect="aspect-[16/10]"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-medium text-foreground/65">{post.date}</p>
                    <h3 className="mt-2 font-heading text-lg leading-[1.2] tracking-tight">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {rest.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 70}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border transition hover:border-foreground/30"
                >
                  <PostVisual
                    slug={post.slug}
                    iconSize="h-5 w-5"
                    aspect="aspect-[4/3]"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="p-5">
                    <p className="text-xs font-medium text-foreground/65">{post.date}</p>
                    <h3 className="mt-2 font-heading text-base leading-[1.25] tracking-tight">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-16 flex justify-center">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm font-medium text-foreground/70">
            1
          </span>
        </div>
      </div>
    </main>
  );
}
