import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleBody from "../../components/ArticleBody";
import { pageMetadata } from "../../lib/seo";
import { posts } from "../data";

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

  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-2xl">
        <Link href="/blog" className="text-sm text-foreground/60 hover:text-foreground">
          ← All posts
        </Link>

        <h1 className="mt-6 font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          {post.title}
        </h1>

        <div className="mt-5 flex items-center gap-3 text-sm text-foreground/65">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-[11px] font-semibold text-ink-foreground">
            MK
          </span>
          <span>Morgan King</span>
          <span aria-hidden>·</span>
          <span>{post.date}</span>
          <span aria-hidden>·</span>
          <span>{post.readingTime}</span>
        </div>

        <div className="mt-10">
          <ArticleBody blocks={post.body} />
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-panel p-8 text-center">
          <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
            Want to know where your own business stands?
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/65">
            Tell us about your business and we&rsquo;ll show you exactly what&rsquo;s
            missing.
          </p>
          <Link
            href="/get-started"
            className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Get started
          </Link>
        </div>

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
