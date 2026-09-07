import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "../data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.label,
    description: product.tagline,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-3xl">
        <a href="/#product" className="text-sm text-foreground/60 hover:text-foreground">
          ← All products
        </a>
        <p className="mb-4 mt-6 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
          {product.label}
        </p>
        <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          {product.tagline}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-foreground/70">{product.description}</p>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="/get-started"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Get started
          </a>
          <p className="text-sm text-foreground/60">
            <span className="font-medium text-foreground">{product.price}</span>{" "}
            {product.priceNote}
          </p>
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <h2 className="font-heading text-2xl leading-[1.1] tracking-tight">
            Everything included
          </h2>
          <div className="mt-8 space-y-8">
            {product.included.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span
                  aria-hidden
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
                >
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-foreground/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-panel p-8 text-center">
          <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
            Ready to see where you stand?
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/60">
            Tell us about your business and we&rsquo;ll show you exactly what&rsquo;s
            missing.
          </p>
          <a
            href="/get-started"
            className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Get started
          </a>
        </div>
      </div>
    </main>
  );
}
