import CountUp from "./CountUp";

export default function CourseHeroStats({
  itemCount,
  downloadCount,
}: {
  itemCount: number;
  downloadCount: number;
}) {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border/70 pt-8">
      <div>
        <p className="font-heading text-3xl leading-none tracking-tight text-accent-text">
          <CountUp value={String(itemCount)} />
        </p>
        <p className="mt-1 text-xs text-foreground/60">things covered, in order</p>
      </div>
      <div className="h-10 w-px bg-border" />
      <div>
        <p className="font-heading text-3xl leading-none tracking-tight text-accent-text">
          <CountUp value={String(downloadCount)} />
        </p>
        <p className="mt-1 text-xs text-foreground/60">free downloads included</p>
      </div>
      <div className="h-10 w-px bg-border" />
      <div>
        <p className="font-heading text-3xl leading-none tracking-tight text-accent-text">
          <CountUp value="£0" />
        </p>
        <p className="mt-1 text-xs text-foreground/60">cost, no catch</p>
      </div>
    </div>
  );
}
