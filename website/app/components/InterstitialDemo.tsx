function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background">
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-foreground/15" />
        <span className="h-2 w-2 rounded-full bg-foreground/15" />
        <span className="h-2 w-2 rounded-full bg-foreground/15" />
      </div>
      <div className="relative h-32 p-3">{children}</div>
    </div>
  );
}

// Static comparison — this is a state a visitor either lands in or
// doesn't, so no animation needed, just the two outcomes side by side.
export default function InterstitialDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-border p-5">
        <p className="text-xs font-medium text-foreground/60">Blocked on arrival</p>
        <div className="mt-3">
          <BrowserFrame>
            <div className="space-y-1.5 opacity-30">
              <div className="h-2 w-4/5 rounded-sm bg-foreground/40" />
              <div className="h-2 w-3/5 rounded-sm bg-foreground/40" />
              <div className="h-2 w-full rounded-sm bg-foreground/40" />
            </div>
            <div className="absolute inset-3 flex items-center justify-center rounded-lg border border-border bg-panel shadow-lg">
              <div className="text-center">
                <p className="text-[10px] font-medium text-foreground">Sign up for 10% off!</p>
                <span className="mt-1.5 inline-block rounded-full border border-border px-2 py-0.5 text-[9px] text-foreground/60">
                  ✕ close
                </span>
              </div>
            </div>
          </BrowserFrame>
        </div>
        <p className="mt-3 text-xs text-foreground/60">
          Nothing else is visible until they find the close button.
        </p>
      </div>

      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
        <p className="text-xs font-medium text-accent-text">Visible on arrival</p>
        <div className="mt-3">
          <BrowserFrame>
            <div className="space-y-1.5">
              <div className="h-2 w-4/5 rounded-sm bg-foreground/25" />
              <div className="h-2 w-3/5 rounded-sm bg-foreground/25" />
              <div className="h-2 w-full rounded-sm bg-foreground/25" />
              <div className="mt-2 h-6 w-1/3 rounded-md bg-accent/50" />
            </div>
          </BrowserFrame>
        </div>
        <p className="mt-3 text-xs text-foreground/60">
          The actual page, immediately. The same offer can still show later.
        </p>
      </div>
    </div>
  );
}
