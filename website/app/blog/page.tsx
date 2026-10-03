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

// Content radar's own classification becomes the section a post lives in —
// same pattern as a magazine-style index grouped into named categories
// (Guides / Reviews / Answers, say) rather than one undifferentiated feed.
// Order here is the order sections appear on the page.
const TOPIC_LABELS: Record<NonNullable<Post["topic"]>, string> = {
  industry_news: "Industry news",
  seo_geo: "SEO & AI search",
};

function groupByTopic(allPosts: Post[]): Map<NonNullable<Post["topic"]>, Post[]> {
  const groups = new Map<NonNullable<Post["topic"]>, Post[]>();
  for (const post of allPosts) {
    // Absent only on a post written before this field existed — not a case
    // that exists today now the old hand-written posts are gone, but kept
    // as a safe fallback rather than letting such a post vanish silently.
    const topic = post.topic ?? "industry_news";
    groups.set(topic, [...(groups.get(topic) ?? []), post]);
  }
  return groups;
}

function PostRow({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-5 border-b border-border py-8 first:pt-0 last:border-0 sm:flex-row sm:items-center sm:justify-between sm:gap-10"
    >
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
          {TOPIC_LABELS[post.topic ?? "industry_news"]}
        </p>
        <h3 className="mt-2 flex items-center gap-2 font-heading text-2xl leading-[1.2] tracking-tight transition group-hover:text-accent-text sm:text-3xl">
          {post.title}
          <svg
            viewBox="0 0 16 16"
            className="h-4 w-4 shrink-0 -translate-x-1 text-accent-text opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </h3>
        <p className="mt-3 max-w-xl text-sm text-foreground/65">{post.excerpt}</p>
        <p className="mt-3 text-xs text-foreground/50">
          {post.date} · {post.readingTime}
        </p>
      </div>
      {post.image && (
        <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-2xl sm:h-28 sm:w-48">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 640px) 192px, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          />
        </div>
      )}
    </Link>
  );
}

function TopicSection({
  topic,
  posts: sectionPosts,
  immediate = false,
}: {
  topic: NonNullable<Post["topic"]>;
  posts: Post[];
  // The first non-empty section sits right under the hero, which on any
  // normal viewport height is still "above the fold" at mount — Reveal's
  // scroll observer never fires for an element that's already in view, so
  // it would just render fully visible with no animation at all. That
  // section gets the hero's own mount-triggered entrance instead; only
  // sections that genuinely start below the fold get the scroll reveal.
  immediate?: boolean;
}) {
  if (sectionPosts.length === 0) return null;

  const heading = <h2 className="font-heading text-4xl tracking-tight sm:text-5xl">{TOPIC_LABELS[topic]}</h2>;

  return (
    <section className="mt-20">
      {immediate ? (
        <div className="animate-[hero-fade-in_0.6s_ease-out_backwards]" style={{ animationDelay: "550ms" }}>
          {heading}
        </div>
      ) : (
        <Reveal>{heading}</Reveal>
      )}
      <div className="mt-6 border-t border-border">
        {sectionPosts.map((post, i) =>
          immediate ? (
            <div
              key={post.slug}
              className="animate-[hero-fade-in_0.6s_ease-out_backwards]"
              style={{ animationDelay: `${700 + Math.min(i, 4) * 120}ms` }}
            >
              <PostRow post={post} />
            </div>
          ) : (
            <Reveal key={post.slug} delay={Math.min(i, 4) * 90}>
              <PostRow post={post} />
            </Reveal>
          ),
        )}
      </div>
    </section>
  );
}

export default function BlogIndex() {
  const groups = groupByTopic(posts);

  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-3xl text-center">
        <p className="animate-[hero-fade-in_0.5s_ease-out_backwards] text-xs font-medium uppercase tracking-wide text-foreground/50">
          Blog
        </p>
        <h1 className="mt-4 font-heading text-4xl leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
          <RevealWords text="What we're actually seeing." startDelay={80} />
        </h1>
        <p
          className="mx-auto mt-6 max-w-xl animate-[hero-fade-in_0.6s_ease-out_backwards] text-lg text-foreground/70"
          style={{ animationDelay: "450ms" }}
        >
          Honest updates on Google, AI search, and reviews — written from
          client work, not speculation.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        {(() => {
          let firstSeen = false;
          return (Object.keys(TOPIC_LABELS) as NonNullable<Post["topic"]>[]).map((topic) => {
            const sectionPosts = groups.get(topic) ?? [];
            const immediate = !firstSeen && sectionPosts.length > 0;
            if (immediate) firstSeen = true;
            return <TopicSection key={topic} topic={topic} posts={sectionPosts} immediate={immediate} />;
          });
        })()}
      </div>
    </main>
  );
}
