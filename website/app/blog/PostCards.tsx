import Image from "next/image";
import Link from "next/link";
import type { Post } from "./data";

export const TOPIC_LABELS: Record<NonNullable<Post["topic"]>, string> = {
  industry_news: "Industry news",
  seo_geo: "SEO & AI search",
};

export function topicLabel(post: Post) {
  return TOPIC_LABELS[post.topic ?? "industry_news"];
}

type Tone = "light" | "dark";

const toneStyles = {
  light: {
    tag: "text-accent-text",
    title: "text-foreground group-hover:text-accent-text",
    excerpt: "text-foreground/70",
    meta: "text-foreground/50",
    thumb: "bg-panel",
  },
  dark: {
    tag: "text-accent",
    title: "text-ink-foreground group-hover:text-accent",
    excerpt: "text-ink-foreground/70",
    meta: "text-ink-foreground/50",
    thumb: "bg-ink-foreground/10",
  },
} as const;

// Card images sit inside a link whose text already carries the title, so
// they're decorative there — a real alt would make screen readers read
// every title twice.
function PostThumb({ post, className, sizes, tone }: { post: Post; className: string; sizes: string; tone: Tone }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${toneStyles[tone].thumb} ${className}`}>
      {post.image && (
        <Image
          src={post.image}
          alt=""
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      )}
    </div>
  );
}

function Tag({ post, tone, className = "" }: { post: Post; tone: Tone; className?: string }) {
  return (
    <p className={`text-xs font-medium uppercase tracking-wide ${toneStyles[tone].tag} ${className}`}>{topicLabel(post)}</p>
  );
}

function Meta({ post, tone, className = "" }: { post: Post; tone: Tone; className?: string }) {
  return (
    <p className={`text-xs ${toneStyles[tone].meta} ${className}`}>
      <span className="whitespace-nowrap">{post.date}</span> ·{" "}
      <span className="whitespace-nowrap">{post.readingTime}</span>
    </p>
  );
}

const stackSizes = {
  lg: {
    aspect: "aspect-[16/10]",
    sizes: "(min-width: 1024px) 45vw, 100vw",
    title: "mt-3 text-2xl leading-[1.2] sm:text-[2rem]",
    excerpt: true,
  },
  md: {
    aspect: "aspect-[16/10]",
    sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
    title: "mt-3 text-xl leading-[1.25]",
    excerpt: false,
  },
  sm: {
    aspect: "aspect-[4/3]",
    sizes: "(min-width: 1280px) 15vw, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
    title: "mt-2 line-clamp-3 text-base leading-[1.3]",
    excerpt: false,
  },
} as const;

// Image on top, text below — the lead card, the small tiles, and the
// "Keep reading" cards on a post page are all this one card at different sizes.
export function StackCard({ post, size, tone = "light" }: { post: Post; size: keyof typeof stackSizes; tone?: Tone }) {
  const s = stackSizes[size];
  return (
    <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
      <PostThumb post={post} tone={tone} className={s.aspect} sizes={s.sizes} />
      <div className="flex flex-1 flex-col pt-5">
        <Tag post={post} tone={tone} />
        <h3 className={`font-heading tracking-tight transition-colors ${toneStyles[tone].title} ${s.title}`}>{post.title}</h3>
        {s.excerpt && <p className={`mt-3 text-sm leading-relaxed ${toneStyles[tone].excerpt}`}>{post.excerpt}</p>}
        <Meta post={post} tone={tone} className="mt-auto pt-4" />
      </div>
    </Link>
  );
}

// Thumbnail beside text — the sidebar list, and the fallback for anything
// too narrow for a full card.
export function RowCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex gap-5">
      <PostThumb post={post} tone="light" className="h-24 w-24 shrink-0 sm:h-28 sm:w-28 xl:h-20 xl:w-20" sizes="112px" />
      <div className="min-w-0">
        <Tag post={post} tone="light" className="text-[11px]" />
        <h3
          className={`mt-1.5 line-clamp-3 font-heading text-lg leading-[1.25] tracking-tight transition-colors ${toneStyles.light.title}`}
        >
          {post.title}
        </h3>
        <Meta post={post} tone="light" className="mt-2" />
      </div>
    </Link>
  );
}

// A section with only one post: a wide side-by-side card, rather than a
// single narrow card with empty space next to it.
export function WideCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
      <PostThumb post={post} tone="light" className="aspect-[16/10]" sizes="(min-width: 1024px) 55vw, 100vw" />
      <div>
        <Tag post={post} tone="light" />
        <h3
          className={`mt-3 font-heading text-3xl leading-[1.15] tracking-tight transition-colors sm:text-4xl ${toneStyles.light.title}`}
        >
          {post.title}
        </h3>
        <p className={`mt-4 leading-relaxed ${toneStyles.light.excerpt}`}>{post.excerpt}</p>
        <Meta post={post} tone="light" className="mt-5" />
      </div>
    </Link>
  );
}
