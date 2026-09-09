function BrowserChrome({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-border px-5 py-3.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ec6a5e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#61c454]" />
      {label ? <span className="ml-2 text-xs text-foreground/40">{label}</span> : null}
    </div>
  );
}

export function InvisibleMockup() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-panel shadow-sm">
      <BrowserChrome />
      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center gap-2 text-xs font-medium text-foreground/50">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[10px] text-ink-foreground">
            AI
          </span>
          ChatGPT
        </div>
        <div className="max-w-[85%] self-end rounded-2xl rounded-br-sm border border-border bg-background px-4 py-2.5 text-sm text-foreground">
          best letting agent in the area?
        </div>
        <div className="max-w-[92%] rounded-2xl rounded-bl-sm border border-border bg-background px-4 py-3 text-sm text-foreground/80">
          Based on reviews and reputation, here are a few worth contacting:
        </div>
        <div className="space-y-2">
          <div className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground/60">
            Ashcroft Property
          </div>
          <div className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground/60">
            Willowmere Homes
          </div>
        </div>
        <div className="rounded-2xl border border-dashed border-border px-4 py-3 text-sm italic text-foreground/40">
          We weren&rsquo;t on the list.
        </div>
      </div>
    </div>
  );
}

export function SelfAuditMockup() {
  const rows = [
    "SEO — schema, speed, structure",
    "GEO — AI crawler access, trust signals",
    "Reviews — response & monitoring",
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-panel shadow-sm">
      <BrowserChrome label="reyse.co.uk" />
      <div className="flex flex-col gap-3 p-6">
        {rows.map((row) => (
          <div
            key={row}
            className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3"
          >
            <span className="text-sm text-foreground/70">{row}</span>
            <span className="shrink-0 rounded-full bg-accent px-2.5 py-1 text-[10px] font-medium text-accent-foreground">
              Applied
            </span>
          </div>
        ))}
        <p className="mt-1 text-xs text-foreground/40">
          Every service on this site, run on this site, first.
        </p>
      </div>
    </div>
  );
}
