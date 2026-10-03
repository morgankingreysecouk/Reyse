import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import RevealWords from "../components/RevealWords";
import { pageMetadata } from "../lib/seo";
import { posts, type Post } from "./data";
import { RowCard, StackCard, TOPIC_LABELS, WideCard, topicLabel } from "./PostCards";

const DESCRIPTION =
  "Practical, specific writing on AI search, SEO, and reviews for estate and letting agents — not vague theory.";

export const metadata = pageMetadata({ title: "Blog", description: DESCRIPTION });

// How many of the newest posts (after the one already shown in the
// featured band) go into "Most recent" before the rest fall back to being
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

// Card sizes vary with how many posts a section actually has, so it never
// shows empty columns or cards too narrow to read:
//   1 post   — one wide side-by-side card
//   2–5      — a lead card beside a list of the rest
//   6+       — on wide screens, a 2x2 grid of tiles | lead card | list
function SectionLayout({ posts: sectionPosts }: { posts: Post[] }) {
  const [lead, ...rest] = sectionPosts;

  if (rest.length === 0) {
    return (
      <Reveal>
        <WideCard post={lead} />
      </Reveal>
    );
  }

  const tiles = rest.length >= 5 ? rest.slice(0, 4) : [];
  const listPosts = rest.slice(tiles.length);

  return (
    <div
      className={`grid gap-12 lg:grid-cols-[1.35fr_1fr] ${tiles.length > 0 ? "xl:grid-cols-[1.2fr_1.4fr_1fr] xl:gap-10" : ""}`}
    >
      <Reveal className="xl:order-2">
        <StackCard post={lead} size="lg" />
      </Reveal>

      {tiles.length > 0 && (
        // Below xl there's no room for the tiles beside the lead card, so
        // they drop into their own row underneath it instead.
        <div className="grid content-start gap-x-5 gap-y-10 sm:grid-cols-2 lg:order-last lg:col-span-2 lg:grid-cols-4 xl:order-1 xl:col-span-1 xl:grid-cols-2">
          {tiles.map((post, i) => (
            <Reveal key={post.slug} delay={80 + i * 70}>
              <StackCard post={post} size="sm" />
            </Reveal>
          ))}
        </div>
      )}

      {listPosts.length > 0 && (
        <div className="divide-y divide-border xl:order-3">
          {listPosts.map((post, i) => (
            <Reveal key={post.slug} delay={120 + Math.min(i, 5) * 70} className="py-6 first:pt-0 last:pb-0">
              <RowCard post={post} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}

function PostSection({ label, posts: sectionPosts }: { label: string; posts: Post[] }) {
  if (sectionPosts.length === 0) return null;
  return (
    <section className="mt-24 first:mt-20">
      <Reveal>
        <div className="flex items-end justify-between gap-4 border-b border-border pb-5">
          <h2 className="font-heading text-3xl tracking-tight sm:text-4xl">{label}</h2>
          <p className="shrink-0 text-xs text-foreground/50">
            {sectionPosts.length} {sectionPosts.length === 1 ? "post" : "posts"}
          </p>
        </div>
      </Reveal>
      <div className="mt-10">
        <SectionLayout posts={sectionPosts} />
      </div>
    </section>
  );
}

function FeaturedBand({ post }: { post: Post }) {
  return (
    <section
      className="relative mt-16 animate-[hero-fade-in_0.7s_ease-out_backwards] overflow-hidden bg-ink text-ink-foreground"
      style={{ animationDelay: "450ms" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(rgba(250,248,242,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(70% 80% at 25% 40%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(70% 80% at 25% 40%, black 40%, transparent 100%)",
        }}
      />
      <Link
        href={`/blog/${post.slug}`}
        className="group relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:py-20 lg:flex-row lg:items-stretch lg:gap-14"
      >
        <div className="flex flex-1 flex-col justify-between">
          <p className="text-xs font-medium uppercase tracking-wide text-accent">Latest · {topicLabel(post)}</p>
          <h2 className="mt-6 font-heading text-4xl leading-[1.08] tracking-tight transition-colors group-hover:text-accent sm:text-5xl lg:text-[3.25rem]">
            {post.title}
            <svg
              viewBox="0 0 16 16"
              className="ml-3 inline-block h-7 w-7 -translate-x-1 align-middle opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </h2>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
            <div className="flex shrink-0 items-center gap-3 text-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-accent-foreground">
                {post.author ? post.author.slice(0, 2).toUpperCase() : "MK"}
              </span>
              <div>
                <p className="font-medium">{post.author ?? "Morgan King"}</p>
                <p className="whitespace-nowrap text-ink-foreground/60">
                  {post.date} · {post.readingTime}
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink-foreground/70">{post.excerpt}</p>
          </div>
        </div>

        {post.image && (
          <div className="relative order-first aspect-[16/10] overflow-hidden rounded-3xl lg:order-last lg:aspect-auto lg:min-h-[420px] lg:w-[44%]">
            <Image
              src={post.image}
              alt=""
              fill
              loading="eager"
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        )}
      </Link>
    </section>
  );
}

export default function BlogIndex() {
  const latest = posts[0];
  // The featured band shows the latest post in full, so the listing starts
  // from the next one instead of repeating it.
  const afterLatest = posts.slice(1);
  const groups = groupByTopic(afterLatest.slice(RECENT_COUNT));

  const sections: { label: string; posts: Post[] }[] = [
    { label: "Most recent", posts: afterLatest.slice(0, RECENT_COUNT) },
    ...(Object.keys(TOPIC_LABELS) as NonNullable<Post["topic"]>[]).map((topic) => ({
      label: TOPIC_LABELS[topic],
      posts: groups.get(topic) ?? [],
    })),
  ];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Reyse blog",
    url: "https://reyse.co.uk/blog",
    description: DESCRIPTION,
    publisher: { "@type": "Organization", name: "Reyse" },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `https://reyse.co.uk/blog/${p.slug}`,
      datePublished: new Date(p.publishedAt ?? p.date).toISOString(),
      ...(p.image ? { image: `https://reyse.co.uk${p.image}` } : {}),
    })),
  };

  return (
    <main className="flex-1 pb-36 pt-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="animate-[hero-fade-in_0.5s_ease-out_backwards] text-xs font-medium uppercase tracking-wide text-foreground/50">
          Blog
        </p>
        <h1 className="mt-4 font-heading text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          <RevealWords text="What we're actually seeing." startDelay={80} />
        </h1>
      </div>

      {latest ? (
        <FeaturedBand post={latest} />
      ) : (
        <p className="mx-auto mt-16 max-w-md px-6 text-center text-foreground/60">
          Nothing published yet — the first post is on its way.
        </p>
      )}

      <div className="mx-auto max-w-6xl px-6">
        {sections.map((section) => (
          <PostSection key={section.label} label={section.label} posts={section.posts} />
        ))}
      </div>
    </main>
  );
}
