import Image from "next/image";

function GoogleResult({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl border border-border bg-background p-4">{children}</div>;
}

// Static comparison — schema is either on the page or it isn't, so this
// is a state, not something that changes over time. Real photo used for
// the rich-result thumbnail so it reads as an actual listing, not a mockup.
export default function SchemaMarkupDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-border p-5">
        <p className="text-xs font-medium text-foreground/60">No schema — plain result</p>
        <div className="mt-3">
          <GoogleResult>
            <p className="text-[10px] text-foreground/50">rivingtons.co.uk</p>
            <p className="mt-0.5 text-sm leading-snug text-[#1a0dab]">3-Bed Semi-Detached House For Sale, Oak Street</p>
            <p className="mt-1 text-xs leading-snug text-foreground/60">
              Guide price available on request. Contact us for viewing details and full particulars of this
              property&hellip;
            </p>
          </GoogleResult>
        </div>
        <p className="mt-3 text-xs text-foreground/60">Just a title and grey text. Nothing to catch the eye.</p>
      </div>

      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
        <p className="text-xs font-medium text-accent-text">With schema — rich result</p>
        <div className="mt-3">
          <GoogleResult>
            <p className="text-[10px] text-foreground/50">rivingtons.co.uk</p>
            <p className="mt-0.5 text-sm leading-snug text-[#1a0dab]">3-Bed Semi-Detached House For Sale, Oak Street</p>
            <div className="mt-2 flex gap-3">
              <div className="relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-md">
                <Image src="/images/industries/estate-agents.jpg" alt="" fill className="object-cover" />
              </div>
              <div className="min-w-0">
                <p className="flex items-center gap-1 text-xs text-foreground/70">
                  <span className="text-amber-500">★★★★★</span> 4.8 (127 reviews)
                </p>
                <p className="mt-0.5 text-xs font-medium text-foreground">Guide price £450,000</p>
                <p className="mt-0.5 text-xs text-foreground/60">3 bed · Semi-detached · Oak Street</p>
              </div>
            </div>
          </GoogleResult>
        </div>
        <p className="mt-3 text-xs text-foreground/60">Photo, rating, and price — pulled straight from the schema code.</p>
      </div>
    </div>
  );
}
