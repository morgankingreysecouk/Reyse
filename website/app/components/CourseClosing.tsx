export default function CourseClosing({
  endGoal,
  note,
  honestPattern,
}: {
  endGoal: React.ReactNode;
  note: React.ReactNode;
  honestPattern: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-20">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start lg:gap-16">
        <div className="border-l-2 border-accent pl-6">
          <p className="font-heading text-2xl leading-[1.35] tracking-tight text-foreground sm:text-3xl lg:text-[2rem]">
            {endGoal}
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-panel p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">Worth knowing</p>
            <p className="mt-2.5 text-sm text-foreground/70">{note}</p>
          </div>
          <div className="rounded-2xl border border-border bg-panel p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">The honest pattern</p>
            <p className="mt-2.5 text-sm text-foreground/70">{honestPattern}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
