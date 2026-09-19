export default function PhotoPlaceholder({
  label,
  note,
  aspect = "aspect-[4/5]",
}: {
  label: string;
  note: string;
  aspect?: string;
}) {
  return (
    <div
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-border bg-panel p-6 text-center`}
    >
      <span
        aria-hidden
        className="flex h-14 w-14 items-center justify-center rounded-full bg-background text-foreground/30"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8.5" r="3.5" />
          <path d="M4.5 20c1.2-4 4.2-6 7.5-6s6.3 2 7.5 6" strokeLinecap="round" />
        </svg>
      </span>
      <div>
        <p className="text-sm font-medium text-foreground/60">{label}</p>
        <p className="mt-1 text-xs text-foreground/65">{note}</p>
      </div>
    </div>
  );
}
