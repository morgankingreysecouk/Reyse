function BrowserChrome({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-border px-5 py-3.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ec6a5e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#61c454]" />
      {label ? <span className="ml-2 text-xs text-foreground/65">{label}</span> : null}
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
        <p className="mt-1 text-xs text-foreground/65">
          Every service on this site, run on this site, first.
        </p>
      </div>
    </div>
  );
}
