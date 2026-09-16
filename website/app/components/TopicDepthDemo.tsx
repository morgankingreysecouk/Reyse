const checkIcon = (
  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3.5 8.5 6.5 11.5 12.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const crossIcon = (
  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
  </svg>
);

function SectionRow({ label, present }: { label: string; present: boolean }) {
  return (
    <div className={`flex items-center gap-2 text-xs ${present ? "text-foreground" : "text-foreground/35"}`}>
      <span className={present ? "text-accent-text" : "text-foreground/30"}>{present ? checkIcon : crossIcon}</span>
      {label}
    </div>
  );
}

// Static comparison — page coverage is a state you're either in or
// out of, so no animation needed, just the two outcomes side by side.
export default function TopicDepthDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-border p-5">
        <p className="text-xs font-medium text-foreground/60">&ldquo;Houses for sale in [town]&rdquo; — thin</p>
        <div className="mt-3 space-y-2 rounded-xl border border-border bg-background p-3">
          <SectionRow label="Listings" present />
          <SectionRow label="Schools nearby" present={false} />
          <SectionRow label="Transport links" present={false} />
          <SectionRow label="Price trends" present={false} />
          <SectionRow label="Local FAQ" present={false} />
        </div>
        <p className="mt-3 text-xs text-foreground/60">Answers a fifth of what they actually came to find out.</p>
      </div>

      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
        <p className="text-xs font-medium text-accent-text">Same page — comprehensive</p>
        <div className="mt-3 space-y-2 rounded-xl border border-border bg-background p-3">
          <SectionRow label="Listings" present />
          <SectionRow label="Schools nearby" present />
          <SectionRow label="Transport links" present />
          <SectionRow label="Price trends" present />
          <SectionRow label="Local FAQ" present />
        </div>
        <p className="mt-3 text-xs text-foreground/60">Covers what the top-ranking competitors cover, and then some.</p>
      </div>
    </div>
  );
}
