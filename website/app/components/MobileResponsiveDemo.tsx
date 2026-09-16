// Static (not animated) side-by-side comparison — the point here isn't
// something changing over time like load speed, it's a state you either are
// or aren't in, so two phone frames next to each other says it more
// honestly than a fake before/after animation would.
export default function MobileResponsiveDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-border p-5">
        <p className="text-xs font-medium text-foreground/60">Not responsive</p>
        <div className="mx-auto mt-3 w-[160px] rounded-[1.5rem] border-4 border-foreground/15 bg-background p-2">
          <div className="space-y-1.5 overflow-hidden rounded-lg border border-border p-2">
            <div className="h-2 w-[220%] rounded-sm bg-foreground/25" />
            <div className="h-2 w-[180%] rounded-sm bg-foreground/25" />
            <div className="mt-2 flex gap-1">
              <div className="h-3 w-3 shrink-0 rounded-sm bg-accent/40" />
              <div className="h-1.5 w-10 self-center rounded-sm bg-foreground/20" />
            </div>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-foreground/60">
          Text runs off-screen. The button&rsquo;s a sliver.
        </p>
      </div>

      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
        <p className="text-xs font-medium text-accent-text">Properly responsive</p>
        <div className="mx-auto mt-3 w-[160px] rounded-[1.5rem] border-4 border-foreground/15 bg-background p-2">
          <div className="space-y-1.5 rounded-lg border border-border p-2">
            <div className="h-2 w-full rounded-sm bg-foreground/25" />
            <div className="h-2 w-4/5 rounded-sm bg-foreground/25" />
            <div className="mt-2 h-6 w-full rounded-md bg-accent/50" />
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-foreground/60">
          Fits the screen. The button&rsquo;s actually tappable.
        </p>
      </div>
    </div>
  );
}
