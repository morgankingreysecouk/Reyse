import Reveal from "./Reveal";

const platforms = [
  { code: "G", name: "Google", detail: "Search & Maps" },
  { code: "S", name: "Safari", detail: "~30% of UK traffic", highlight: true },
  { code: "B", name: "Bing", detail: "Built into Windows" },
  { code: "M", name: "Business profiles", detail: "Google, Bing, Apple" },
];

export function SeoPlatformsVisual() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-panel shadow-xl">
      <div className="flex items-center gap-1.5 border-b border-border px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ec6a5e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#61c454]" />
      </div>
      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-foreground/40">
          Where your customers actually search
        </p>
        <div className="mt-4 flex flex-col gap-2.5">
          {platforms.map((platform, i) => (
            <Reveal key={platform.name} delay={i * 120}>
              <div
                className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${
                  platform.highlight
                    ? "border-accent/40 bg-accent/10"
                    : "border-border bg-background"
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    platform.highlight
                      ? "bg-accent text-accent-foreground"
                      : "bg-ink text-ink-foreground"
                  }`}
                >
                  {platform.code}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{platform.name}</p>
                  <p className="text-xs text-foreground/60">{platform.detail}</p>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-medium text-accent">
                  <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Visible
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
