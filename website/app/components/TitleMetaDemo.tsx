function GoogleResult({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl border border-border bg-background p-4">{children}</div>;
}

// Static comparison — a title is either specific or it isn't, so this
// is a state, not something that changes over time.
export default function TitleMetaDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-border p-5">
        <p className="text-xs font-medium text-foreground/60">Vague</p>
        <div className="mt-3">
          <GoogleResult>
            <p className="text-[10px] text-foreground/50">rivingtons.co.uk</p>
            <p className="mt-0.5 text-sm leading-snug text-[#1a0dab]">Home</p>
            <p className="mt-1 text-xs leading-snug text-foreground/60">
              Welcome to our website. Browse our properties and get in touch today.
            </p>
          </GoogleResult>
        </div>
        <p className="mt-3 text-xs text-foreground/60">Tells a scanning eye nothing about what&rsquo;s on the page.</p>
      </div>

      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
        <p className="text-xs font-medium text-accent-text">Specific</p>
        <div className="mt-3">
          <GoogleResult>
            <p className="text-[10px] text-foreground/50">rivingtons.co.uk/colchester</p>
            <p className="mt-0.5 text-sm leading-snug text-[#1a0dab]">3 Bed Houses for Sale in Colchester | Rivingtons</p>
            <p className="mt-1 text-xs leading-snug text-foreground/60">
              Browse 3 bed houses for sale in Colchester, updated daily. Local experts, no fees to buyers.
            </p>
          </GoogleResult>
        </div>
        <p className="mt-3 text-xs text-foreground/60">Signals relevance immediately — before anyone&rsquo;s even clicked.</p>
      </div>
    </div>
  );
}
