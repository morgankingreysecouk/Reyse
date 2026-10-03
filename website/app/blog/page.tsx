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

// How many of the newest posts get pulled into "Most recent" before the
// rest fall back to being organised by topic — otherwise that section
// would quietly swallow the entire archive forever as more posts land.
const RECENT_COUNT = 7;

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
  children,
}: {
  immediate: boolean;
  delay: number;
  children: React.ReactNode;
}) {
  if (immediate) {
    return (
      <div className="animate-[hero-fade-in_0.6s_ease-out_backwards]" style={{ animationDelay: `${delay}ms` }}>
        {children}
      </div>
    );
  }
  return <Reveal delay={delay}>{children}</Reveal>;
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
      <PostVisual post={post} aspect="aspect-[16/9]" sizes="(min-width: 1024px) 56vw, 100vw" />
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

function MediumCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border transition hover:border-foreground/30"
    >
      <PostVisual post={post} aspect="aspect-[16/10]" sizes="(min-width: 1024px) 40vw, 100vw" />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium text-foreground/50">{post.date}</p>
        <h3 className="mt-2 font-heading text-lg leading-[1.2] tracking-tight transition group-hover:text-accent-text">
          {post.title}
        </h3>
      </div>
    </Link>
  );
}

function SmallCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border transition hover:border-foreground/30"
    >
      <PostVisual post={post} aspect="aspect-[4/3]" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
      <div className="p-5">
        <p className="text-xs font-medium text-foreground/50">{post.date}</p>
        <h3 className="mt-2 font-heading text-base leading-[1.25] tracking-tight transition group-hover:text-accent-text">
          {post.title}
        </h3>
      </div>
    </Link>
  );
}

// Deliberately varied sizes rather than a uniform grid — one large lead
// card, up to two medium ones beside it, the rest smaller below. Degrades
// gracefully: with just one post, it's only the big card.
function VariedPostGrid({ posts: groupPosts, immediate }: { posts: Post[]; immediate: boolean }) {
  const [featured, second, third, ...rest] = groupPosts;
  const sideCards = [second, third].filter((p): p is Post => Boolean(p));

  return (
    <div>
      <div className={`grid gap-6 ${sideCards.length > 0 ? "lg:grid-cols-[1.4fr_1fr]" : ""}`}>
        <CardReveal immediate={immediate} delay={0}>
          <BigCard post={featured} />
        </CardReveal>
        {sideCards.length > 0 && (
          <div className="flex flex-col gap-6">
            {sideCards.map((post, i) => (
              <CardReveal key={post.slug} immediate={immediate} delay={120 + i * 120}>
                <MediumCard post={post} />
              </CardReveal>
            ))}
          </div>
        )}
      </div>
      {rest.length > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((post, i) => (
            <CardReveal key={post.slug} immediate={immediate} delay={360 + Math.min(i, 4) * 80}>
              <SmallCard post={post} />
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
  const recentPosts = posts.slice(0, RECENT_COUNT);
  const groups = groupByTopic(posts.slice(RECENT_COUNT));

  const sections: { label: string; posts: Post[] }[] = [
    { label: "Most recent", posts: recentPosts },
    ...(Object.keys(TOPIC_LABELS) as NonNullable<Post["topic"]>[]).map((topic) => ({
      label: TOPIC_LABELS[topic],
      posts: groups.get(topic) ?? [],
    })),
  ];

  return (
    <main className="flex-1 px-6 pb-20 pt-40">
      <div className="mx-auto max-w-4xl text-center">
        <p className="animate-[hero-fade-in_0.5s_ease-out_backwards] text-xs font-medium uppercase tracking-wide text-foreground/50">
          Blog
        </p>
        <h1 className="mt-4 font-heading text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          <RevealWords text="What we're actually seeing." startDelay={80} />
        </h1>
      </div>

      {latest && (
        <div
          className="mx-auto mt-12 max-w-4xl animate-[hero-fade-in_0.6s_ease-out_backwards] rounded-3xl border border-accent/25 bg-accent/10 px-6 py-8 sm:flex sm:items-center sm:justify-between sm:gap-10 sm:px-10 sm:py-10"
          style={{ animationDelay: "450ms" }}
        >
          <p className="max-w-xl text-lg text-foreground/70">
            Honest updates on Google, AI search, and reviews — written from
            client work, not speculation.
          </p>
          {latest.image && (
            <Link
              href={`/blog/${latest.slug}`}
              className="group mt-6 flex shrink-0 items-center gap-3 sm:mt-0"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-20">
                <Image
                  src={latest.image}
                  alt={latest.title}
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                />
              </div>
              <span className="max-w-[9rem] text-xs font-medium text-foreground/60 transition group-hover:text-accent-text">
                Latest: {latest.title}
              </span>
            </Link>
          )}
        </div>
      )}

      <div className="mx-auto max-w-6xl">
        {sections.map((section, i) => (
          <PostSection key={section.label} label={section.label} posts={section.posts} immediate={i === 0} />
        ))}
      </div>
    </main>
  );
}
