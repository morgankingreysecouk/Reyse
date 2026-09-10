import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries } from "../data";
import { pageMetadata } from "../../lib/seo";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return pageMetadata({
    title: industry.label,
    description: industry.tagline,
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-3xl">
        <Link href="/#industries" className="text-sm text-foreground/60 hover:text-foreground">
          ← All industries
        </Link>
        <p className="mb-4 mt-6 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
          {industry.label}
        </p>
        <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          {industry.tagline}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-foreground/70">
          {industry.description}
        </p>
        <Link
          href="/get-started"
          className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
        >
          Get started
        </Link>
      </div>
    </main>
  );
}
