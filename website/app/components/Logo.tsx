function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="70" cy="30" r="21" fill="currentColor" />
      <circle cx="41" cy="50" r="14" fill="currentColor" />
      <circle cx="23" cy="63" r="9" fill="currentColor" />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Mark className="h-6 w-6 text-accent" />
      <span className="text-lg font-semibold tracking-tight text-foreground">Reyse</span>
    </span>
  );
}
