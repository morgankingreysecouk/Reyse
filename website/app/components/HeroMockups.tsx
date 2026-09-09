export function SeoMockup() {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs text-foreground/50">
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="7" cy="7" r="5" />
          <path d="m11 11 3.5 3.5" strokeLinecap="round" />
        </svg>
        best letting agent manchester
      </div>
      <div className="rounded-2xl border border-accent/40 bg-accent/10 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
            R
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">Reyse Lettings</p>
            <p className="text-xs text-foreground/60">★★★★★ 4.9 (128) · reyse-lettings.co.uk</p>
          </div>
        </div>
        <p className="mt-2.5 text-sm text-foreground/70">
          Manchester&rsquo;s highest-rated letting agent. Fast response times, verified
          listings.
        </p>
      </div>
      <div className="rounded-2xl border border-border bg-background px-4 py-3 opacity-50">
        <p className="text-sm font-medium text-foreground/70">Competitor Lettings Ltd</p>
        <p className="text-xs text-foreground/40">competitor-lettings.co.uk</p>
      </div>
      <div className="mt-auto flex items-center gap-2 text-xs font-medium text-foreground/50">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[10px] text-ink-foreground">
          ✓
        </span>
        Schema verified · rich result live
      </div>
    </div>
  );
}

function IntelligenceBar({ label, you, them }: { label: string; you: number; them: number }) {
  return (
    <div>
      <p className="text-xs font-medium text-foreground/60">{label}</p>
      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-border">
        <div className="h-full rounded-full bg-accent" style={{ width: `${you}%` }} />
      </div>
      <div className="mt-1 h-2 overflow-hidden rounded-full bg-border">
        <div className="h-full rounded-full bg-foreground/20" style={{ width: `${them}%` }} />
      </div>
    </div>
  );
}

export function MarketIntelligenceMockup() {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center gap-3 text-xs font-medium text-foreground/50">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent" /> You
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-foreground/20" /> Nearest competitor
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-4">
        <IntelligenceBar label="Google ranking" you={88} them={61} />
        <IntelligenceBar label="AI mentions" you={74} them={35} />
        <IntelligenceBar label="Review rating" you={92} them={70} />
      </div>
      <div className="rounded-2xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-foreground">
        You&rsquo;ve pulled ahead on AI mentions this month — up 12 points.
      </div>
    </div>
  );
}

function BranchRow({ name, status }: { name: string; status: "live" | "launching" }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-2.5">
      <span className="text-sm font-medium text-foreground">{name}</span>
      {status === "live" ? (
        <span className="flex items-center gap-1.5 text-xs font-medium text-foreground/50">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Live
        </span>
      ) : (
        <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-medium text-accent-foreground">
          Launching
        </span>
      )}
    </div>
  );
}

export function ScaleMockup() {
  return (
    <div className="flex h-full flex-col gap-2.5">
      <div className="mb-1 text-xs font-medium text-foreground/50">
        Branch network · 12 locations
      </div>
      <BranchRow name="London" status="live" />
      <BranchRow name="Manchester" status="live" />
      <BranchRow name="Leeds" status="live" />
      <BranchRow name="Bristol" status="launching" />
      <div className="mt-auto rounded-2xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-foreground">
        Same setup, every branch — live across Google, Bing, and Apple from day one.
      </div>
    </div>
  );
}

export function GeoMockup() {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center gap-2 text-xs font-medium text-foreground/50">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[10px] text-ink-foreground">
          AI
        </span>
        ChatGPT
      </div>
      <div className="max-w-[85%] self-end rounded-2xl rounded-br-sm border border-border bg-background px-4 py-2.5 text-sm text-foreground">
        best letting agent in Manchester?
      </div>
      <div className="max-w-[92%] rounded-2xl rounded-bl-sm border border-border bg-background px-4 py-3 text-sm text-foreground/80">
        Based on response times and reviews, here&rsquo;s a strong option:
      </div>
      <div className="flex items-center gap-3 rounded-2xl border border-accent/40 bg-accent/10 px-4 py-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
          R
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">Reyse Lettings</p>
          <p className="text-xs text-foreground/60">Responds in minutes · 4.9★ (128 reviews)</p>
        </div>
        <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-medium text-accent-foreground">
          Recommended
        </span>
      </div>
    </div>
  );
}

export function ReviewMockup() {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-foreground">
            S
          </span>
          <div>
            <p className="text-sm font-medium text-foreground">Sarah M.</p>
            <div className="text-xs tracking-tight text-accent">★★★★★</div>
          </div>
        </div>
        <span className="text-xs text-foreground/40">Google review</span>
      </div>
      <p className="rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground/80">
        Quick to respond and really helpful with the whole move-in process. Would
        recommend!
      </p>
      <div className="mt-1 flex items-center gap-2 text-xs font-medium text-foreground/50">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[10px] text-ink-foreground">
          AI
        </span>
        Reyse reply · drafted in 4s
      </div>
      <div className="rounded-2xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-foreground">
        Thank you so much, Sarah — really glad we could make the move smooth for
        you. Welcome home!
      </div>
      <button
        type="button"
        tabIndex={-1}
        className="mt-auto self-start rounded-full bg-accent px-4 py-2 text-xs font-medium text-accent-foreground"
      >
        Post reply
      </button>
    </div>
  );
}
