function TreeNode({ label, last = false }: { label: string; last?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs text-foreground/70">
        {label}
      </div>
      {!last && <div className="h-4 w-px bg-border" />}
    </div>
  );
}

// Two simple click-depth trees — this is a structural state, not something
// that changes over time, so a static comparison says it more honestly
// than an animation would.
export default function SiteStructureDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-border p-5">
        <p className="text-xs font-medium text-foreground/60">Buried — 4 clicks deep</p>
        <div className="mt-4 flex flex-col items-center">
          <TreeNode label="Homepage" />
          <TreeNode label="Properties" />
          <TreeNode label="Residential" />
          <TreeNode label="Lettings" />
          <TreeNode label="Available listing" last />
        </div>
        <p className="mt-3 text-center text-xs text-foreground/60">
          The listing exists. Almost nobody finds it by clicking through.
        </p>
      </div>

      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
        <p className="text-xs font-medium text-accent-text">Easy to reach — 2 clicks deep</p>
        <div className="mt-4 flex flex-col items-center">
          <TreeNode label="Homepage" />
          <TreeNode label="Lettings" />
          <TreeNode label="Available listing" last />
        </div>
        <p className="mt-3 text-center text-xs text-foreground/60">
          Same listing, same site. Found in two clicks, from any page.
        </p>
      </div>
    </div>
  );
}
