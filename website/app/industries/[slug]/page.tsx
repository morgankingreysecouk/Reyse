import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../components/Reveal";
import { pageMetadata } from "../../lib/seo";
import { products } from "../../products/data";
import { industries } from "../data";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
    <main className="flex-1 pb-24 pt-40">
      <div className="mx-auto max-w-5xl px-6">
        <Link href="/#industries" className="text-sm text-foreground/60 hover:text-foreground">
          ← All industries
        </Link>

        <div className="mt-6 grid gap-10 sm:grid-cols-2 sm:items-center sm:gap-14">
          <div>
            <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
              {industry.label}
            </p>
            <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
              {industry.tagline}
            </h1>
            <p className="mt-5 text-lg text-foreground/70">{industry.description}</p>
            <Link
              href="/get-started"
              className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Get started
            </Link>
          </div>

          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border sm:aspect-[3/4]">
              <Image
                src={industry.image}
                alt={industry.imageAlt}
                fill
                sizes="(min-width: 640px) 40vw, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-20 border-t border-border pt-14">
          <Reveal>
            <h2 className="font-heading text-2xl leading-[1.1] tracking-tight sm:text-3xl">
              What this actually looks like
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-6">
            {industry.scenarios.map((scenario, i) => (
              <Reveal key={scenario} delay={i * 100}>
                <div className="h-full rounded-2xl border border-border p-6">
                  <span className="text-sm font-medium text-accent-text">0{i + 1}</span>
                  <p className="mt-3 text-sm text-foreground/70">{scenario}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-14">
          <Reveal>
            <h2 className="font-heading text-2xl leading-[1.1] tracking-tight sm:text-3xl">
              What Reyse does about it
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/60">
              Every product below works for {industry.label.toLowerCase()} specifically — on
              its own, or bundled together as you grow.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={i * 80}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border p-6 transition hover:border-foreground/30 hover:bg-panel"
                >
                  <div>
                    <span className="inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
                      {product.label}
                    </span>
                    <h3 className="mt-4 font-heading text-lg leading-[1.15]">
                      {product.tagline}
                    </h3>
                  </div>
                  <div className="mt-6 flex items-center justify-end">
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-text opacity-0 transition group-hover:opacity-100">
                      Learn more
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-3xl rounded-2xl border border-border bg-panel p-8 text-center">
          <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
            Ready to see where you stand?
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/60">
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
      </div>
    </main>
  );
}
