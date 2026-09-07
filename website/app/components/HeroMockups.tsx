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

export function ChatMockup() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 border-b border-border pb-3">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <p className="text-sm font-medium text-foreground">Live chat</p>
        <span className="text-xs text-foreground/40">· Online</span>
      </div>
      <div className="flex flex-1 flex-col justify-end gap-3 py-4">
        <div className="max-w-[85%] rounded-2xl rounded-bl-sm border border-border bg-background px-4 py-2.5 text-sm text-foreground/80">
          Hi! Is the 2-bed on Elm Street still available?
        </div>
        <div className="max-w-[85%] self-end rounded-2xl rounded-br-sm bg-chat-bubble px-4 py-2.5 text-sm text-foreground">
          Yes, it is! Would you like to book a viewing this week?
        </div>
        <div className="flex items-center gap-1 self-start rounded-2xl border border-border bg-background px-4 py-3">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/30 [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/30 [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/30" />
        </div>
      </div>
      <div className="rounded-full border border-border px-4 py-2.5 text-sm text-foreground/40">
        Type a message…
      </div>
    </div>
  );
}
