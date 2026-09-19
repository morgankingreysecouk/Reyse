import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../components/Reveal";
import { AudiobookIcon, CourseIcon, DownloadIcon, ResourceCard, VideoIcon } from "../../components/ResourceCards";
import { pageMetadata } from "../../lib/seo";
import { products } from "../../products/data";
import { resourcesBySlug, resourceStatus } from "../data";

// SEO, GEO, and Reviews have their own static routes (app/resources/seo,
// app/resources/geo, app/resources/reviews) with real content — this
// generic template only serves the categories that don't have a bespoke
// page yet.
const dynamicSlugs = ["market-intelligence", "scale"];

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
  const hasCourse = resources.courses.length > 0;

  return (
    <main className="flex-1">
      <div className="relative overflow-hidden border-b border-border px-6 pb-20 pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(45% 45% at 50% 30%, rgba(166,173,62,0.16), transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(rgba(28,26,23,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(60% 60% at 50% 35%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(60% 60% at 50% 35%, black 40%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <Link href="/resources" className="text-sm text-foreground/60 hover:text-foreground">
            ← All resources
          </Link>
          <p className="mb-4 mt-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
            {resourceStatus(slug)}
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            {product.label} resources.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-foreground/70">{resources.blurb}</p>
        </div>
      </div>

      <div className="border-b border-border bg-ink px-6 py-20 text-ink-foreground">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-foreground/50">
              Why it&rsquo;s free
            </p>
            <p className="mt-4 font-heading text-2xl leading-[1.4] tracking-tight sm:text-3xl">
              &ldquo;Reyse is one person, building this in the open — the
              same knowledge the paid service is built on, free whether or
              not you ever become a client.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>

      <div className="bg-panel px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl tracking-tight sm:text-4xl">
              What&rsquo;s here
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <Reveal>
              <ResourceCard
                icon={CourseIcon}
                title="Courses"
                items={resources.courses}
                emptyNote={`No ${product.label} course yet — the SEO and GEO courses came first; this one's next.`}
                featured={hasCourse}
              />
            </Reveal>
            <Reveal delay={70}>
              <ResourceCard
                icon={VideoIcon}
                title="Videos"
                items={resources.videos}
                emptyNote="No videos yet. Nothing fake in the meantime — check back once there's something real to watch."
              />
            </Reveal>
            <Reveal delay={140}>
              <ResourceCard
                icon={AudiobookIcon}
                title="Audiobooks"
                items={resources.audiobooks}
                emptyNote="Nothing here yet."
              />
            </Reveal>
            <Reveal delay={210}>
              <ResourceCard
                icon={DownloadIcon}
                title="Free downloads"
                items={resources.downloads}
                emptyNote="No downloads yet — PDFs, templates, and code will land here as they're built."
              />
            </Reveal>
          </div>
        </div>
      </div>

      <div className="px-6 py-24">
        <Reveal>
          <div className="mx-auto max-w-xl rounded-2xl border border-border bg-panel p-8 text-center">
            <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
              Want this one built first?
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/65">
              Tell us {product.label.toLowerCase()} resources matter most to
              you and it&rsquo;ll shape what gets built next.
            </p>
            <a
              href={`mailto:hello@reyse.co.uk?subject=Build%20${encodeURIComponent(product.label)}%20resources%20next`}
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              hello@reyse.co.uk
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
