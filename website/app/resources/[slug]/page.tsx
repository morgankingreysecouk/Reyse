import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../components/Reveal";
import { pageMetadata } from "../../lib/seo";
import { products } from "../../products/data";
import { resourcesBySlug, type ResourceLink } from "../data";

// SEO and GEO have their own static routes (app/resources/seo,
// app/resources/geo) with real content — this generic template only
// serves the categories that don't have a bespoke page yet.
const dynamicSlugs = ["reviews", "market-intelligence", "scale"];

export function generateStaticParams() {
  return dynamicSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return pageMetadata({
    title: `Free ${product.label} resources`,
    description: `Free videos, courses, and downloads on ${product.label.toLowerCase()} for estate and letting agents.`,
  });
}

function ResourceSection({
  title,
  items,
  emptyNote,
}: {
  title: string;
  items: ResourceLink[];
  emptyNote: string;
}) {
  return (
    <div className="border-t border-border pt-10">
      <h2 className="font-heading text-2xl leading-[1.15] tracking-tight">{title}</h2>
      {items.length > 0 ? (
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                className="block rounded-2xl border border-border p-5 transition hover:border-foreground/30 hover:bg-panel"
              >
                <p className="font-medium text-foreground">{item.title}</p>
                <p className="mt-1 text-sm text-foreground/70">{item.description}</p>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm text-foreground/60">{emptyNote}</p>
      )}
    </div>
  );
}

export default async function ResourceCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!dynamicSlugs.includes(slug)) notFound();
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();
  const resources = resourcesBySlug[slug];

  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-2xl">
        <Link href="/resources" className="text-sm text-foreground/60 hover:text-foreground">
          ← All resources
        </Link>
        <p className="mb-4 mt-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
          Free Resources
        </p>
        <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          {product.label} resources.
        </h1>
        <p className="mt-5 text-lg text-foreground/70">
          Free videos, courses, and downloads on {product.label.toLowerCase()} —
          for estate and letting agents, whether or not you ever become a
          client. Being built out the same way the SEO and GEO courses were,
          so it&rsquo;s genuinely thin here right now rather than padded out
          to look busier than it is.
        </p>

        <div className="mt-14 space-y-10">
          <Reveal>
            <ResourceSection
              title="Courses"
              items={resources.courses}
              emptyNote={`No ${product.label} course yet — the SEO and GEO courses came first; this one's next.`}
            />
          </Reveal>
          <Reveal delay={70}>
            <ResourceSection
              title="Videos"
              items={resources.videos}
              emptyNote="No videos yet. Nothing fake in the meantime — check back once there's something real to watch."
            />
          </Reveal>
          <Reveal delay={140}>
            <ResourceSection
              title="Audiobooks"
              items={resources.audiobooks}
              emptyNote="Nothing here yet."
            />
          </Reveal>
          <Reveal delay={210}>
            <ResourceSection
              title="Free downloads"
              items={resources.downloads}
              emptyNote="No downloads yet — PDFs, templates, and code will land here as they're built."
            />
          </Reveal>
        </div>
      </div>
    </main>
  );
}
