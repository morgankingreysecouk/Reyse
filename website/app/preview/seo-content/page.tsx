"use client";

import { useState } from "react";
import Link from "next/link";
import { addOnsMock, includedMock, type MockItem } from "./data";

type Variant = "a" | "b" | "c";

const variants: { id: Variant; label: string; blurb: string }[] = [
  {
    id: "a",
    label: "A — Lead + bullets",
    blurb: "One bold lead sentence, then 2-4 short bullets. Closest to the current layout.",
  },
  {
    id: "b",
    label: "B — Stat-first callout",
    blurb: "A big pulled number where one exists, short supporting line. Falls back to a plain lead where there's no clean stat.",
  },
  {
    id: "c",
    label: "C — Problem → Fix",
    blurb: "Every item splits into two labelled halves. Fastest to scan, biggest layout change.",
  },
];

function NumberBadge({ i }: { i: number }) {
  return (
    <span
      aria-hidden
      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent-text"
    >
      {i + 1}
    </span>
  );
}

function ItemHeading({ item }: { item: MockItem }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <h3 className="font-medium text-foreground">
        {item.title}
        {item.subtitle && <span className="font-normal text-foreground/65"> — {item.subtitle}</span>}
      </h3>
      {item.growthOnly && (
        <span className="rounded-full bg-ink px-2 py-0.5 text-[11px] font-medium text-ink-foreground">
          Growth only
        </span>
      )}
    </div>
  );
}

function GrowthNote({ note }: { note?: string }) {
  if (!note) return null;
  return (
    <div className="mt-3 rounded-xl border border-accent/20 bg-accent/5 p-4">
      <p className="text-xs font-medium text-accent-text">On Growth</p>
      <p className="mt-1 text-sm text-foreground/70">{note}</p>
    </div>
  );
}

function VariantA({ items }: { items: MockItem[] }) {
  return (
    <div className="space-y-10">
      {items.map((item, i) => (
        <div key={item.title} className="flex gap-4">
          <NumberBadge i={i} />
          <div className="flex-1">
            <ItemHeading item={item} />
            <p className="mt-2 text-[15px] font-medium leading-snug text-foreground">{item.lead}</p>
            <ul className="mt-3 space-y-1.5">
              {item.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-foreground/65">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <GrowthNote note={item.growthNote} />
          </div>
        </div>
      ))}
    </div>
  );
}

function VariantB({ items }: { items: MockItem[] }) {
  return (
    <div className="space-y-10">
      {items.map((item, i) => (
        <div key={item.title} className="flex gap-4">
          <NumberBadge i={i} />
          <div className="flex-1">
            <ItemHeading item={item} />
            {item.stat ? (
              <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="shrink-0 rounded-2xl border border-accent/20 bg-accent/5 px-5 py-3 text-center sm:w-40">
                  <p className="font-heading text-3xl leading-none tracking-tight text-accent-text">
                    {item.stat.value}
                  </p>
                  <p className="mt-1.5 text-[11px] leading-tight text-foreground/60">{item.stat.label}</p>
                </div>
                <p className="text-sm text-foreground/70">{item.lead}</p>
              </div>
            ) : (
              <p className="mt-2 text-sm text-foreground/70">{item.lead}</p>
            )}
            <GrowthNote note={item.growthNote} />
          </div>
        </div>
      ))}
    </div>
  );
}

function VariantC({ items }: { items: MockItem[] }) {
  return (
    <div className="space-y-10">
      {items.map((item, i) => (
        <div key={item.title} className="flex gap-4">
          <NumberBadge i={i} />
          <div className="flex-1">
            <ItemHeading item={item} />
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-panel p-4">
                <p className="text-xs font-medium text-foreground/50">The problem</p>
                <p className="mt-1.5 text-sm text-foreground/70">{item.problem}</p>
              </div>
              <div className="rounded-xl border border-accent/20 bg-accent/5 p-4">
                <p className="text-xs font-medium text-accent-text">What we do</p>
                <p className="mt-1.5 text-sm text-foreground/70">{item.fix}</p>
              </div>
            </div>
            <GrowthNote note={item.growthNote} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Variant({ id, items }: { id: Variant; items: MockItem[] }) {
  if (id === "a") return <VariantA items={items} />;
  if (id === "b") return <VariantB items={items} />;
  return <VariantC items={items} />;
}

export default function SeoContentPreview() {
  const [variant, setVariant] = useState<Variant>("a");

  return (
    <main className="flex-1 px-6 pb-24 pt-32">
      <div className="mx-auto max-w-3xl">
        <div className="sticky top-16 z-10 -mx-6 border-b border-border bg-background/95 px-6 py-4 backdrop-blur">
          <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
            Content mockup — not a real page, for comparison only
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {variants.map((v) => (
              <button
                key={v.id}
                onClick={() => setVariant(v.id)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  variant === v.id
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-foreground/70 hover:border-foreground/30"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-foreground/60">
            {variants.find((v) => v.id === variant)?.blurb}
          </p>
        </div>

        <div className="mt-10">
          <h1 className="font-heading text-3xl leading-[1.1] tracking-tight">Everything included</h1>
          <p className="mt-2 text-sm text-foreground/60">
            Same 9 items, same underlying facts as the real SEO page — restructured three different ways.
          </p>
          <div className="mt-10">
            <Variant id={variant} items={includedMock} />
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <h2 className="font-heading text-2xl leading-[1.1] tracking-tight">Optional add-ons</h2>
          <div className="mt-8">
            <Variant id={variant} items={addOnsMock} />
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-sm text-foreground/60">
          <Link href="/products/seo" className="underline hover:text-foreground">
            ← Compare against the real, current SEO page
          </Link>
        </div>
      </div>
    </main>
  );
}
