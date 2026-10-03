import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleBody from "../../components/ArticleBody";
import { pageMetadata } from "../../lib/seo";
import { posts } from "../data";

const TOPIC_LABELS: Record<string, string> = {
  industry_news: "Industry news",
  seo_geo: "SEO & AI search",
};

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

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 2);

  // JSON-LD so search engines (and AI answer engines — the entire point
  // of the product this blog sits under) get an unambiguous, structured
  // description of the post rather than having to infer one from prose.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.date).toISOString(),
    author: { "@type": "Organization", name: post.author ?? "Reyse" },
    publisher: { "@type": "Organization", name: "Reyse" },
    ...(post.image ? { image: `https://reyse.co.uk${post.image}` } : {}),
    mainEntityOfPage: `https://reyse.co.uk/blog/${post.slug}`,
  };

  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="mx-auto max-w-2xl">
        <Link href="/blog" className="text-sm text-foreground/60 hover:text-foreground">
          ← All posts
        </Link>

        {post.topic && (
          <p className="mt-6 text-xs font-medium uppercase tracking-wide text-foreground/50">
            {TOPIC_LABELS[post.topic] ?? post.topic}
          </p>
        )}

        <h1 className="mt-3 font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          {post.title}
        </h1>

        <div className="mt-5 flex items-center gap-3 text-sm text-foreground/65">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-[11px] font-semibold text-ink-foreground">
            {post.author ? post.author.slice(0, 2).toUpperCase() : "MK"}
          </span>
          <span>{post.author ?? "Morgan King"}</span>
          <span aria-hidden>·</span>
          <span>{post.date}</span>
          <span aria-hidden>·</span>
          <span>{post.readingTime}</span>
        </div>
        {post.author && (
          <p className="mt-2 text-xs text-foreground/50">
            Researched and written automatically, from the sources linked below — not hand-written by a person.
          </p>
        )}

        {post.image && (
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-panel">
            <Image src={post.image} alt={post.title} fill sizes="(min-width: 768px) 672px, 100vw" className="object-cover" />
          </div>
        )}

        <div className="mt-10">
          <ArticleBody blocks={post.body} />
        </div>

        {post.references && post.references.length > 0 && (
          <div className="mt-10 border-t border-border pt-6">
            <p className="text-sm font-medium text-foreground/65">Sources</p>
            <ul className="mt-3 space-y-2">
              {post.references.map((ref) => (
                <li key={ref.url}>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent-text hover:opacity-80"
                  >
                    {ref.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {otherPosts.length > 0 && (
          <div className="mt-16 border-t border-border pt-10">
            <p className="text-sm font-medium text-foreground/65">Read next</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-2xl border border-border p-5 transition hover:border-foreground/30 hover:bg-panel"
                >
                  <h3 className="font-heading text-base leading-[1.25] tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs text-foreground/65">{p.readingTime}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
