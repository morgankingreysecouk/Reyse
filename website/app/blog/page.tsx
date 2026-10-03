import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import RevealWords from "../components/RevealWords";
import { pageMetadata } from "../lib/seo";
import { posts, type Post } from "./data";

export const metadata = pageMetadata({
  title: "Blog",
  description: "Practical, specific writing on AI search, SEO, and reviews for estate and letting agents — not vague theory.",
});

const TOPIC_LABELS: Record<NonNullable<Post["topic"]>, string> = {
  industry_news: "Industry news",
  seo_geo: "SEO & AI search",
};

// How many of the newest posts (after the one already shown in the hero
// band) get pulled into "Most recent" before the rest fall back to being
// organised by topic.
const RECENT_COUNT = 9;

function groupByTopic(allPosts: Post[]): Map<NonNullable<Post["topic"]>, Post[]> {
  const groups = new Map<NonNullable<Post["topic"]>, Post[]>();
  for (const post of allPosts) {
    const topic = post.topic ?? "industry_news";
    groups.set(topic, [...(groups.get(topic) ?? []), post]);
  }
  return groups;
}

// Above-the-fold content needs the hero's own mount-triggered entrance —
// Reveal's scroll observer never fires for something already in view at
// load, so it would just render fully visible with no animation at all.
// Everything below the fold gets the normal scroll reveal instead.
function CardReveal({
  immediate,
  delay,
  className = "",
  children,
}: {
  immediate: boolean;
  delay: number;
  className?: string;
  children: React.ReactNode;
}) {
  if (immediate) {
    return (
      <div
        className={`animate-[hero-fade-in_0.6s_ease-out_backwards] ${className}`}
        style={{ animationDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  }
  return (
    <Reveal delay={delay} className={className}>
      {children}
    </Reveal>
  );
}

function PostVisual({ post, aspect, sizes }: { post: Post; aspect: string; sizes: string }) {
  if (!post.image) {
    return <div className={`${aspect} rounded-2xl bg-panel`} />;
  }
  return (
    <div className={`relative ${aspect} overflow-hidden rounded-2xl bg-panel`}>
      <Image
        src={post.image}
        alt={post.title}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
      />
    </div>
  );
}

function BigCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border transition hover:border-foreground/30"
    >
      <PostVisual post={post} aspect="aspect-[16/10]" sizes="(min-width: 1024px) 40vw, 100vw" />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
          {TOPIC_LABELS[post.topic ?? "industry_news"]}
        </p>
        <h3 className="mt-3 font-heading text-2xl leading-[1.2] tracking-tight transition group-hover:text-accent-text sm:text-3xl">
          {post.title}
        </h3>
        <p className="mt-3 text-sm text-foreground/70">{post.excerpt}</p>
        <p className="mt-auto pt-6 text-xs font-medium text-foreground/50">
          {post.date} · {post.readingTime}
        </p>
      </div>
    </Link>
  );
}

// The small square cards in the 2x2 grid beside the lead card.
function GridCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border transition hover:border-foreground/30"
    >
      <PostVisual post={post} aspect="aspect-square" sizes="(min-width: 1024px) 15vw, 50vw" />
      <div className="p-4">
        <h3 className="font-heading text-base leading-[1.25] tracking-tight transition group-hover:text-accent-text">
          {post.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-xs text-foreground/60">{post.excerpt}</p>
      </div>
    </Link>
  );
}

// The compact thumbnail + text rows in the sidebar list.
function SidebarRow({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex items-start gap-4">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-panel">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="64px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
          />
        )}
      </div>
      <div className="min-w-0">
        <h3 className="font-heading text-base leading-[1.25] tracking-tight transition group-hover:text-accent-text">
          {post.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-xs text-foreground/60">{post.excerpt}</p>
      </div>
    </Link>
  );
}

// One lead card, up to four small cards in a 2x2 grid to its left, and a
// sidebar list of the remaining posts to its right. Degrades gracefully
// down to just the lead card when a section only has one post.
function VariedPostGrid({ posts: groupPosts, immediate }: { posts: Post[]; immediate: boolean }) {
  const [featured, ...rest] = groupPosts;
  const gridPosts = rest.slice(0, 4);
  const sidebarPosts = rest.slice(4);
  const hasSiblings = gridPosts.length > 0 || sidebarPosts.length > 0;

  return (
    <div className={`grid gap-8 ${hasSiblings ? "lg:grid-cols-[1fr_1.3fr_1fr]" : "max-w-2xl"}`}>
      <CardReveal immediate={immediate} delay={0} className="lg:order-2">
        <BigCard post={featured} />
      </CardReveal>

      {gridPosts.length > 0 && (
        <div className="grid grid-cols-2 content-start gap-4 lg:order-1">
          {gridPosts.map((post, i) => (
            <CardReveal key={post.slug} immediate={immediate} delay={120 + i * 90}>
              <GridCard post={post} />
            </CardReveal>
          ))}
        </div>
      )}

      {sidebarPosts.length > 0 && (
        <div className="flex flex-col gap-6 lg:order-3">
          {sidebarPosts.map((post, i) => (
            <CardReveal key={post.slug} immediate={immediate} delay={480 + Math.min(i, 4) * 90}>
              <SidebarRow post={post} />
            </CardReveal>
          ))}
        </div>
      )}
    </div>
  );
}

function PostSection({ label, posts: sectionPosts, immediate }: { label: string; posts: Post[]; immediate: boolean }) {
  if (sectionPosts.length === 0) return null;
  return (
    <section className="mt-16">
      <CardReveal immediate={immediate} delay={0}>
        <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">{label}</p>
      </CardReveal>
      <div className="mt-5">
        <VariedPostGrid posts={sectionPosts} immediate={immediate} />
      </div>
    </section>
  );
}

export default function BlogIndex() {
  const latest = posts[0];
  // The hero band below already shows the latest post in full, so the
  // listing starts from the next one instead of repeating it.
  const afterLatest = posts.slice(1);
  const recentPosts = afterLatest.slice(0, RECENT_COUNT);
  const groups = groupByTopic(afterLatest.slice(RECENT_COUNT));

  const sections: { label: string; posts: Post[] }[] = [
    { label: "Most recent", posts: recentPosts },
    ...(Object.keys(TOPIC_LABELS) as NonNullable<Post["topic"]>[]).map((topic) => ({
      label: TOPIC_LABELS[topic],
      posts: groups.get(topic) ?? [],
    })),
  ];

  return (
    <main className="flex-1 overflow-x-hidden pb-36 pt-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="animate-[hero-fade-in_0.5s_ease-out_backwards] text-xs font-medium uppercase tracking-wide text-foreground/50">
          Blog
        </p>
        <h1 className="mt-4 font-heading text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          <RevealWords text="What we're actually seeing." startDelay={80} />
        </h1>
      </div>

      {latest && (
        <div
          className="relative mx-[calc(50%-50vw)] mt-16 w-screen animate-[hero-fade-in_0.6s_ease-out_backwards] border-y border-border bg-accent/10"
          style={{ animationDelay: "450ms" }}
        >
          <Link
            href={`/blog/${latest.slug}`}
            className="group mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 sm:flex-row sm:items-stretch sm:gap-12"
          >
            <div className="flex flex-1 flex-col justify-between py-2">
              <p className="text-xs font-medium uppercase tracking-wide text-accent-text">
                {TOPIC_LABELS[latest.topic ?? "industry_news"]}
              </p>
              <h2 className="mt-8 flex items-center gap-3 font-heading text-4xl leading-[1.1] tracking-tight transition group-hover:text-accent-text sm:text-5xl">
                {latest.title}
                <svg
                  viewBox="0 0 16 16"
                  className="h-6 w-6 shrink-0 -translate-x-1 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </h2>
              <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
                <div className="text-sm text-foreground/60">
                  <p className="font-medium text-foreground">{latest.author ?? "Morgan King"}</p>
                  <p className="mt-0.5">{latest.date}</p>
                </div>
                <p className="max-w-xs text-sm text-foreground/70">{latest.excerpt}</p>
              </div>
            </div>
            {latest.image && (
              <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-2xl sm:h-auto sm:w-[38%]">
                <Image
                  src={latest.image}
                  alt={latest.title}
                  fill
                  sizes="(min-width: 640px) 38vw, 100vw"
                  priority
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>
            )}
          </Link>
        </div>
      )}

      <div className="mx-auto max-w-6xl px-6">
        {sections.map((section, i) => (
          <PostSection key={section.label} label={section.label} posts={section.posts} immediate={i === 0} />
        ))}
      </div>
    </main>
  );
}
