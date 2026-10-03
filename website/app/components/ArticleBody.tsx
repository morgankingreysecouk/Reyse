import type { ContentBlock } from "../blog/data";
import Reveal from "./Reveal";

export default function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-5 text-foreground/70">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          // Only section headings get a scroll-triggered rise, not body
          // text — fading in paragraphs as a reader scrolls past them
          // fights reading flow instead of adding polish.
          return (
            <Reveal key={i} className="!mt-12">
              <h2 className="font-heading text-2xl leading-[1.15] tracking-tight text-foreground">
                {block.text}
              </h2>
            </Reveal>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="list-disc space-y-2.5 pl-5 marker:text-accent-text">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{block.text}</p>;
      })}
    </div>
  );
}
