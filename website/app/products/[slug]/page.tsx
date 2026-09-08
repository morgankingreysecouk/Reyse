import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../components/Reveal";
import IncludedItemsScroll from "../../components/IncludedItemsScroll";
import { SeoPlatformsVisual } from "../../components/ProductVisuals";
import { products, type ComparisonRow } from "../data";

function TierCell({ value }: { value: string }) {
  const included = value.startsWith("✓");
  const note = value.replace(/^[✓✗]/, "").trim();
  return (
    <div className="flex items-baseline gap-2">
      <span className={included ? "text-accent" : "text-foreground/30"} aria-hidden>
        {included ? "✓" : "✗"}
      </span>
      <span className="sr-only">{included ? "Included" : "Not included"}</span>
      {note && <span className="text-xs text-foreground/50">{note}</span>}
    </div>
  );
}

function ComparisonTable({
  heading,
  tierLabels,
  rows,
}: {
  heading: string;
  tierLabels: [string, string];
  rows: ComparisonRow[];
}) {
  return (
    <div className="mt-16">
      <h2 className="font-heading text-2xl leading-[1.1] tracking-tight">{heading}</h2>
      {/* Table for sm+ — a nested horizontal scroll on mobile has no
         visible affordance, so narrow viewports get a stacked list
         instead rather than two hidden columns. */}
      <div className="mt-6 hidden overflow-x-auto rounded-2xl border border-border sm:block">
        <table className="w-full min-w-[600px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-panel text-left">
              <th className="px-4 py-3 font-medium text-foreground/50">#</th>
              <th className="px-4 py-3 font-medium text-foreground/50">Service</th>
              <th className="px-4 py-3 font-medium text-foreground/50">{tierLabels[0]}</th>
              <th className="px-4 py-3 font-medium text-foreground/50">{tierLabels[1]}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.service} className="border-b border-border last:border-0">
                <td className="px-4 py-3 text-foreground/40">{i + 1}</td>
                <td className="px-4 py-3 font-medium text-foreground">{row.service}</td>
                <td className="px-4 py-3">
                  <TierCell value={row.foundation} />
                </td>
                <td className="px-4 py-3">
                  <TierCell value={row.growth} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 divide-y divide-border rounded-2xl border border-border sm:hidden">
        {rows.map((row, i) => (
          <div key={row.service} className="p-4">
            <p className="text-sm font-medium text-foreground">
              {i + 1}. {row.service}
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-xs font-medium text-foreground/40">{tierLabels[0]}</p>
                <div className="mt-1">
                  <TierCell value={row.foundation} />
                </div>
              </div>
              <div>
                <p className="text-xs font-medium text-foreground/40">{tierLabels[1]}</p>
                <div className="mt-1">
                  <TierCell value={row.growth} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Product detail pages share one template; a product can opt into a custom
// hero visual by slug. Products without an entry here just get the
// text-only hero, so adding a product never requires touching this file.
const heroVisuals: Partial<Record<string, () => React.ReactElement>> = {
  seo: SeoPlatformsVisual,
};

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
  const comparison = product.comparison;
  const addOnsComparison = product.addOnsComparison;
  const HeroVisual = heroVisuals[product.slug];

  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-5xl">
        <div className={HeroVisual ? "grid gap-12 sm:grid-cols-[1.1fr_1fr] sm:items-center" : ""}>
          <div className="max-w-2xl">
            <Link href="/#product" className="text-sm text-foreground/60 hover:text-foreground">
              ← All products
            </Link>
            <p className="mb-4 mt-6 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
              {product.label}
            </p>
            <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
              {product.tagline}
            </h1>
            <p className="mt-5 text-lg text-foreground/70">{product.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/get-started"
                className="shrink-0 rounded-full bg-accent px-6 py-3 text-sm font-medium whitespace-nowrap text-accent-foreground hover:opacity-90"
              >
                Get started
              </Link>
              <p className="text-sm text-foreground/60">
                <span className="font-medium text-foreground">{product.price}</span>{" "}
                {product.priceNote}
              </p>
            </div>
          </div>

          {HeroVisual && (
            <Reveal delay={100}>
              <HeroVisual />
            </Reveal>
          )}
        </div>

        {product.stats && (
          <div className="mt-16 grid grid-cols-1 gap-4 border-y border-border py-10 sm:grid-cols-3 sm:gap-8">
            {product.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div>
                  <p className="font-heading text-4xl leading-none tracking-tight text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-foreground/60">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {comparison && (
          <Reveal>
            <ComparisonTable
              heading={`Reyse ${product.label} — ${comparison.tierLabels[0]} vs. ${comparison.tierLabels[1]}`}
              tierLabels={comparison.tierLabels}
              rows={comparison.rows}
            />
          </Reveal>
        )}

        {addOnsComparison && (
          <Reveal>
            <ComparisonTable
              heading="Optional add-ons"
              tierLabels={addOnsComparison.tierLabels}
              rows={addOnsComparison.rows}
            />
          </Reveal>
        )}

        <div className="mt-16 border-t border-border pt-10">
          <h2 className="font-heading text-2xl leading-[1.1] tracking-tight">
            Everything included
          </h2>
          <IncludedItemsScroll items={product.included} comparisonRows={comparison?.rows} />
        </div>

        {product.addOns && (
          <div className="mx-auto mt-16 max-w-3xl border-t border-border pt-10">
            <h2 className="font-heading text-2xl leading-[1.1] tracking-tight">
              Optional add-on{product.addOns.length !== 1 ? "s" : ""}, in detail
            </h2>
            <div className="mt-10 space-y-10">
              {product.addOns.map((addOn) => (
                <Reveal key={addOn.title}>
                  <div className="flex gap-4">
                    <span
                      aria-hidden
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-panel text-accent"
                    >
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M8 3.5v9M3.5 8h9" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-medium text-foreground">{addOn.title}</h3>
                        {addOn.growthOnly && (
                          <span className="rounded-full bg-ink px-2 py-0.5 text-[11px] font-medium text-ink-foreground">
                            Growth only
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-foreground/60">{addOn.description}</p>
                      {addOn.growthNote && (
                        <div className="mt-3 rounded-xl border border-accent/20 bg-accent/5 p-4">
                          <p className="text-xs font-medium text-accent">On Growth</p>
                          <p className="mt-1 text-sm text-foreground/70">{addOn.growthNote}</p>
                        </div>
                      )}
                      {addOn.note && (
                        <p className="mt-3 text-xs text-foreground/50">{addOn.note}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-panel p-8 text-center">
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
