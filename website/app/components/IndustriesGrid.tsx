import { industries } from "../industries/data";

const spans = [
  "sm:col-span-3",
  "sm:col-span-3",
  "sm:col-span-2",
  "sm:col-span-2",
  "sm:col-span-2",
  "sm:col-span-3",
  "sm:col-span-3",
  "sm:col-span-2",
  "sm:col-span-2",
  "sm:col-span-2",
];

export default function IndustriesGrid() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-6">
      {industries.map((industry, i) => (
        <a
          key={industry.slug}
          href={`/industries/${industry.slug}`}
          className={`group relative col-span-2 h-56 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-panel to-background transition hover:border-foreground/30 ${spans[i]}`}
        >
          <div className="absolute inset-0 flex items-end p-6">
            <span className="font-heading text-2xl leading-none text-foreground/90 transition group-hover:text-foreground">
              {industry.label}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
