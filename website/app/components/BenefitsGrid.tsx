import { benefits } from "../benefits/data";

export default function BenefitsGrid() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {benefits.map((benefit) => (
        <div key={benefit.slug} className="rounded-2xl border border-border p-6">
          <h3 className="text-lg font-semibold">{benefit.label}</h3>
          <p className="mt-2 text-sm text-foreground/60">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
}
