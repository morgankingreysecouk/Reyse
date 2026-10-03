import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleBody, { sectionId } from "../../components/ArticleBody";
import ArticleToc from "../../components/ArticleToc";
import ClipReveal from "../../components/ClipReveal";
import Reveal from "../../components/Reveal";
import RevealWords from "../../components/RevealWords";
import { pageMetadata } from "../../lib/seo";
import { posts, type ContentBlock } from "../data";
import { StackCard, topicLabel } from "../PostCards";

function domainOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M6 3h7v7M13 3 4 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    image: post.image ? `https://reyse.co.uk${post.image}` : undefined,
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);
  const headings = post.body
    .filter((b): b is Extract<ContentBlock, { type: "h2" }> => b.type === "h2")
    .map((b, i) => ({ id: sectionId(i), text: b.text }));
  const hasToc = headings.length > 1;

  // JSON-LD so search engines (and AI answer engines — the entire point
  // of the product this blog sits under) get an unambiguous, structured
  // description of the post rather than having to infer one from prose.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.publishedAt ?? post.date).toISOString(),
    author: { "@type": "Organization", name: post.author ?? "Reyse" },
    publisher: { "@type": "Organization", name: "Reyse" },
    ...(post.image ? { image: `https://reyse.co.uk${post.image}` } : {}),
    mainEntityOfPage: `https://reyse.co.uk/blog/${post.slug}`,
  };

  return (
    <main className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Everything down to the photo is above the fold, so it uses the
          mount-triggered hero entrance rather than scroll reveals. */}
      <div
        className={`relative overflow-hidden bg-ink px-6 pt-36 text-ink-foreground ${
          post.image ? "pb-44 sm:pb-56" : "pb-20"
        }`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(rgba(250,248,242,0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(70% 70% at 30% 30%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(70% 70% at 30% 30%, black 40%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/blog"
            className="inline-flex animate-[hero-fade-in_0.5s_ease-out_backwards] items-center gap-1.5 text-sm text-ink-foreground/60 transition hover:text-ink-foreground"
          >
            <span aria-hidden>←</span> All posts
          </Link>

          <p
            className="mt-10 animate-[hero-fade-in_0.5s_ease-out_backwards] text-xs font-medium uppercase tracking-wide text-accent"
            style={{ animationDelay: "60ms" }}
          >
            {topicLabel(post)}
          </p>

          <h1 className="mt-4 max-w-4xl font-heading text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            <RevealWords text={post.title} startDelay={100} delayStep={30} />
          </h1>

          <p
            className="mt-6 max-w-2xl animate-[hero-fade-in_0.6s_ease-out_backwards] text-lg text-ink-foreground/70"
            style={{ animationDelay: "450ms" }}
          >
            {post.excerpt}
          </p>

          <div
            className="mt-8 animate-[hero-fade-in_0.6s_ease-out_backwards]"
            style={{ animationDelay: "550ms" }}
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-foreground/70">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-accent-foreground">
                {post.author ? post.author.slice(0, 2).toUpperCase() : "MK"}
              </span>
              <span className="font-medium text-ink-foreground">{post.author ?? "Morgan King"}</span>
              <span aria-hidden>·</span>
              <span>{post.date}</span>
              <span aria-hidden>·</span>
              <span>{post.readingTime}</span>
            </div>
            {post.author && (
              <p className="mt-3 text-xs text-ink-foreground/45">
                Researched and written automatically, from the sources linked below — not hand-written by a person.
              </p>
            )}
          </div>
        </div>
      </div>

      {post.image && (
        <div className="px-6">
          <div
            className="relative mx-auto -mt-32 aspect-[4/3] max-w-6xl animate-[hero-fade-in_0.8s_ease-out_backwards] overflow-hidden rounded-3xl bg-panel sm:-mt-40 sm:aspect-[2/1]"
            style={{ animationDelay: "350ms" }}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(min-width: 1200px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="px-6 pb-24 pt-16 sm:pt-24">
        <div
          className={`mx-auto max-w-6xl ${
            hasToc ? "lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-20" : ""
          }`}
        >
          {hasToc && (
            <aside className="hidden lg:block">
              <ArticleToc headings={headings} />
            </aside>
          )}

          <article className={`min-w-0 ${hasToc ? "max-w-3xl" : "mx-auto max-w-3xl"}`}>
            <ArticleBody blocks={post.body} />

            {post.references && post.references.length > 0 && (
              <Reveal>
                <div className="mt-20 rounded-3xl border border-border bg-panel p-6 sm:p-8">
                  <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">Sources</p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {post.references.map((ref) => (
                      <li key={ref.url}>
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex h-full flex-col justify-between gap-4 rounded-2xl border border-border bg-background p-4 transition hover:border-foreground/30"
                        >
                          <span className="text-sm font-medium leading-snug text-foreground">{ref.label}</span>
                          <span className="flex items-center gap-1.5 text-xs text-foreground/50 transition group-hover:text-accent-text">
                            {domainOf(ref.url)}
                            <ExternalIcon />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </article>
        </div>
      </div>

      {otherPosts.length > 0 && (
        <section className="bg-ink px-6 py-24 text-ink-foreground">
          <div className="mx-auto max-w-6xl">
            <ClipReveal>
              <h2 className="font-heading text-3xl tracking-tight sm:text-4xl">Keep reading</h2>
            </ClipReveal>
            <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((p, i) => (
                <Reveal key={p.slug} delay={i * 100}>
                  <StackCard post={p} size="md" tone="dark" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
