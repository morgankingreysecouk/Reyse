import type { ReactNode } from "react";
import { LegalBody, type LegalBlock } from "./LegalBody";

type Section = { heading: string; body: string | LegalBlock[] };

function slugify(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  sections: Section[];
}) {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
            {eyebrow}
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">{title}</h1>
          <div className="mt-5 max-w-xl text-lg text-foreground/70">{intro}</div>
        </div>

        {/* Below lg: a collapsible jump list instead of the sticky sidebar —
            no JS needed, and native <details> keeps it accessible. */}
        <details className="mt-10 rounded-2xl border border-border p-4 lg:hidden">
          <summary className="cursor-pointer text-sm font-medium text-foreground">
            Jump to a section
          </summary>
          <ul className="mt-3 space-y-2 text-sm">
            {sections.map((section) => (
              <li key={section.heading}>
                <a href={`#${slugify(section.heading)}`} className="text-foreground/70 hover:text-foreground">
                  {section.heading}
                </a>
              </li>
            ))}
          </ul>
        </details>

        <div className="mt-12 grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
          <nav className="hidden lg:block" aria-label="Contents">
            <div className="sticky top-24">
              <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
                Contents
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {sections.map((section) => (
                  <li key={section.heading}>
                    <a
                      href={`#${slugify(section.heading)}`}
                      className="text-foreground/60 hover:text-foreground"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.heading} id={slugify(section.heading)} className="scroll-mt-24">
                <h2 className="text-lg font-semibold">{section.heading}</h2>
                <LegalBody body={section.body} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
