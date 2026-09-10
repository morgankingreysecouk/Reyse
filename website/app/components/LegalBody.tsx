export type LegalBlock = { type: "p"; text: string } | { type: "list"; items: string[] };

export function LegalBody({ body }: { body: string | LegalBlock[] }) {
  if (typeof body === "string") {
    return <p className="mt-2 text-foreground/70">{body}</p>;
  }
  return (
    <div className="mt-2 space-y-3 text-foreground/70">
      {body.map((block, i) =>
        block.type === "list" ? (
          <ul key={i} className="list-disc space-y-1.5 pl-5 marker:text-accent-text">
            {block.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        ) : (
          <p key={i}>{block.text}</p>
        ),
      )}
    </div>
  );
}
