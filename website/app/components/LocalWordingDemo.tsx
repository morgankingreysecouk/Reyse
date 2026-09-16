// Static comparison — the area name is either mentioned on the page
// or it isn't, so this is a state, not something that plays out over time.
export default function LocalWordingDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-border p-5">
        <p className="text-xs font-medium text-foreground/60">Generic</p>
        <div className="mt-3 rounded-xl border border-border bg-background p-3">
          <p className="text-sm text-foreground/70">
            We&rsquo;re a friendly, experienced team helping people buy, sell, and let property with confidence.
          </p>
        </div>
        <p className="mt-3 text-xs text-foreground/60">Could be any agency, anywhere. No sense this page is actually local.</p>
      </div>

      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
        <p className="text-xs font-medium text-accent-text">Local</p>
        <div className="mt-3 rounded-xl border border-border bg-background p-3">
          <p className="text-sm text-foreground/70">
            We&rsquo;re <span className="rounded bg-accent/25 px-1 font-medium text-foreground">Bristol&rsquo;s</span>{" "}
            friendly, experienced team helping people buy, sell, and let property with confidence.
          </p>
        </div>
        <p className="mt-3 text-xs text-foreground/60">Immediately reassures anyone searching for a Bristol agent.</p>
      </div>
    </div>
  );
}
