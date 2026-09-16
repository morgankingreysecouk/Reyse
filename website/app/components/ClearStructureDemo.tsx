// Static comparison — a page either reads as a wall of text or it
// doesn't, so this is a state, not something that changes over time.
export default function ClearStructureDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-border p-5">
        <p className="text-xs font-medium text-foreground/60">Wall of text</p>
        <div className="mt-3 rounded-xl border border-border bg-background p-3">
          <div className="space-y-1.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className={`h-1.5 rounded-sm bg-foreground/25 ${i === 11 ? "w-2/3" : "w-full"}`} />
            ))}
          </div>
        </div>
        <p className="mt-3 text-xs text-foreground/60">Nothing to latch onto. Most people skim, then leave.</p>
      </div>

      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
        <p className="text-xs font-medium text-accent-text">Broken up</p>
        <div className="mt-3 space-y-3 rounded-xl border border-border bg-background p-3">
          {[3, 4, 2].map((lines, gi) => (
            <div key={gi}>
              <div className="h-2 w-1/3 rounded-sm bg-accent/60" />
              <div className="mt-1.5 space-y-1.5">
                {Array.from({ length: lines }).map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-sm bg-foreground/25 ${i === lines - 1 ? "w-3/5" : "w-full"}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-foreground/60">Subheadings to scan, short paragraphs to actually read.</p>
      </div>
    </div>
  );
}
