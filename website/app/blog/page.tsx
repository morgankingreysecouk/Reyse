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
        <h3 className="mt-2 font-heading text-2xl leading-[1.2] tracking-tight transition group-hover:opacity-70 sm:text-3xl">
          {post.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm text-foreground/65">{post.excerpt}</p>
        <p className="mt-3 text-xs text-foreground/50">
          {post.date} · {post.readingTime}
        </p>
      </div>
      {post.image && (
        <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-2xl sm:h-28 sm:w-48">
          <Image src={post.image} alt={post.title} fill sizes="(min-width: 640px) 192px, 100vw" className="object-cover" />
        </div>
      )}
    </Link>
  );
}

function TopicSection({ topic, posts: sectionPosts }: { topic: NonNullable<Post["topic"]>; posts: Post[] }) {
  if (sectionPosts.length === 0) return null;
  return (
    <Reveal>
      <section className="mt-20">
        <h2 className="font-heading text-4xl tracking-tight sm:text-5xl">{TOPIC_LABELS[topic]}</h2>
        <div className="mt-6 border-t border-border">
          {sectionPosts.map((post) => (
            <PostRow key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </Reveal>
  );
}

export default function BlogIndex() {
  const groups = groupByTopic(posts);

  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">Blog</p>
        <h1 className="mt-4 font-heading text-4xl leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
          <RevealWords text="What we're actually seeing." />
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/70">
          Honest updates on Google, AI search, and reviews — written from
          client work, not speculation.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        {(Object.keys(TOPIC_LABELS) as NonNullable<Post["topic"]>[]).map((topic) => (
          <TopicSection key={topic} topic={topic} posts={groups.get(topic) ?? []} />
        ))}
      </div>
    </main>
  );
}
