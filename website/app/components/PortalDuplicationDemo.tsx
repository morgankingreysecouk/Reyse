function ResultRow({ site, sub, dimmed }: { site: string; sub: string; dimmed?: boolean }) {
  return (
    <div className={`rounded-lg border border-border bg-background p-2.5 ${dimmed ? "opacity-40" : ""}`}>
      <p className="text-xs font-medium text-foreground">{site}</p>
      <p className="mt-0.5 text-[11px] text-foreground/50">{sub}</p>
    </div>
  );
}

// Static comparison — which site outranks which is a state, not
// something that plays out over time, so no animation needed.
export default function PortalDuplicationDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-border p-5">
        <p className="text-xs font-medium text-foreground/60">No canonical tag</p>
        <div className="mt-3 space-y-2">
          <ResultRow site="rightmove.co.uk" sub="3-Bed Semi-Detached House, Oak Street" />
          <ResultRow site="rivingtons.co.uk" sub="3-Bed Semi-Detached House, Oak Street" dimmed />
        </div>
        <p className="mt-3 text-xs text-foreground/60">
          The portal ranks above you — for your own listing. Your branding, reviews, and other properties never get seen.
        </p>
      </div>

      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
        <p className="text-xs font-medium text-accent-text">Self-referencing canonical</p>
        <div className="mt-3 space-y-2">
          <ResultRow site="rivingtons.co.uk" sub="3-Bed Semi-Detached House, Oak Street" />
          <ResultRow site="rightmove.co.uk" sub="3-Bed Semi-Detached House, Oak Street" dimmed />
        </div>
        <p className="mt-3 text-xs text-foreground/60">
          Your own listing ranks first. The click, and the trust that comes with it, lands on you.
        </p>
      </div>
    </div>
  );
}
