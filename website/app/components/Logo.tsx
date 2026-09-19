import VennMark from "./VennMark";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <VennMark className="h-6 w-6" />
      <span className="text-lg font-semibold tracking-tight text-foreground">Reyse</span>
    </span>
  );
}
