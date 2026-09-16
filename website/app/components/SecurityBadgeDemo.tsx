const lockIcon = (
  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3.5" y="7" width="9" height="6.5" rx="1.2" />
    <path d="M5.5 7V4.8a2.5 2.5 0 0 1 5 0V7" strokeLinecap="round" />
  </svg>
);
const warningIcon = (
  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 2.5 14.5 13.5h-13L8 2.5Z" strokeLinejoin="round" />
    <path d="M8 6.5v3.2" strokeLinecap="round" />
    <circle cx="8" cy="11.3" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

// Two address-bar mockups — this is a state you're either in or not, so a
// static comparison reads more honestly than a fake loading animation.
export default function SecurityBadgeDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
        <p className="text-xs font-medium text-accent-text">With HTTPS</p>
        <div className="mt-3 flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground/70">
          <span className="text-accent-text">{lockIcon}</span>
          <span>https://reyselettings.co.uk</span>
        </div>
        <p className="mt-3 text-xs text-foreground/60">
          A quiet, unremarkable padlock. Nobody thinks twice.
        </p>
      </div>

      <div className="rounded-2xl border border-border p-5">
        <p className="text-xs font-medium text-foreground/60">Without it</p>
        <div className="mt-3 flex items-center gap-2 rounded-full border border-foreground/20 bg-background px-4 py-2.5 text-sm text-foreground/70">
          <span className="text-foreground/50">{warningIcon}</span>
          <span>Not Secure — reyselettings.co.uk</span>
        </div>
        <p className="mt-3 text-xs text-foreground/60">
          Right where they&rsquo;re about to type their name and number in.
        </p>
      </div>
    </div>
  );
}
