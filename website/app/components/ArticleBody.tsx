import type { ContentBlock } from "../blog/data";
import ClipReveal from "./ClipReveal";
import Reveal from "./Reveal";

export function sectionId(index: number) {
  return `section-${index + 1}`;
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Section headings, their numerals and list cards animate in on scroll;
// body paragraphs deliberately don't — fading text in as someone reads
// past it fights reading flow instead of adding polish.
export default function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  // The first paragraph is set larger as the lede, wherever it falls —
  // posts don't consistently open with a paragraph rather than a heading.
  const ledeIndex = blocks.findIndex((b) => b.type === "p");
  let sectionCount = 0;

  return (
    <div className="text-[17px] leading-[1.75] text-foreground/75">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          const n = sectionCount++;
          return (
            <div key={i} id={sectionId(n)} className="scroll-mt-28 pt-16 first:pt-0">
              <Reveal>
                <p aria-hidden className="font-heading text-6xl leading-none tracking-tight text-foreground/15">
                  {String(n + 1).padStart(2, "0")}
                </p>
              </Reveal>
              <ClipReveal>
                <h2 className="mt-4 font-heading text-3xl leading-[1.15] tracking-tight text-foreground sm:text-[2.1rem]">
                  {block.text}
                </h2>
              </ClipReveal>
            </div>
          );
        }

        if (block.type === "list") {
          return (
            <Reveal key={i}>
              <ul className="mt-8 space-y-3">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-4 rounded-2xl border border-border bg-panel/70 p-5 text-base leading-relaxed text-foreground/80"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-text">
                      <ArrowIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        }

        if (i === ledeIndex) {
          return (
            <p
              key={i}
              className="mt-6 font-heading text-2xl leading-[1.45] tracking-tight text-foreground first:mt-0 sm:text-[1.7rem]"
            >
              {block.text}
            </p>
          );
        }

        return (
          <p key={i} className="mt-6 first:mt-0">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
