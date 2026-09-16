const searchIcon = (
  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="7" cy="7" r="5" />
    <path d="m11 11 3.5 3.5" strokeLinecap="round" />
  </svg>
);
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

function SearchBar({ query }: { query: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground/70">
      <span className="text-foreground/40">{searchIcon}</span>
      <span>{query}</span>
    </div>
  );
}

// Static comparison — the same page either uses the customer's words or
// it doesn't, so this is a state, not something that plays out over time.
export default function KeywordMatchDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-border p-5">
        <p className="text-xs font-medium text-foreground/60">Written the way you think about it</p>
        <div className="mt-3">
          <SearchBar query="letting agent fees" />
          <div className="mt-3 rounded-xl border border-border bg-background p-3">
            <p className="text-sm font-medium text-foreground">Our Pricing Structure</p>
            <p className="mt-1 text-xs text-foreground/60">
              A transparent breakdown of our management and administration charges.
            </p>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-foreground/50">
            <span className="text-foreground/40">{crossIcon}</span> No match
          </div>
        </div>
        <p className="mt-3 text-xs text-foreground/60">Same meaning, different words — Google can&rsquo;t match them.</p>
      </div>

      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
        <p className="text-xs font-medium text-accent-text">Written the way they search for it</p>
        <div className="mt-3">
          <SearchBar query="letting agent fees" />
          <div className="mt-3 rounded-xl border border-border bg-background p-3">
            <p className="text-sm font-medium text-foreground">Letting Agent Fees, Explained</p>
            <p className="mt-1 text-xs text-foreground/60">
              Here&rsquo;s exactly what our letting agent fees cover, and how they compare.
            </p>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-accent-text">
            <span>{checkIcon}</span> Match
          </div>
        </div>
        <p className="mt-3 text-xs text-foreground/60">Same words as the search. Straightforward match.</p>
      </div>
    </div>
  );
}
