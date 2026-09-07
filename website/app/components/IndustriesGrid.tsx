import IndustryIcon from "./IndustryIcons";
import { industries } from "../industries/data";

export default function IndustriesGrid() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {industries.map((industry) => (
        <a
          key={industry.slug}
          href={`/industries/${industry.slug}`}
          className="group flex flex-col justify-between rounded-2xl border border-border p-6 transition hover:border-foreground/30 hover:bg-panel"
        >
          <div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
              <IndustryIcon slug={industry.slug} />
            </span>
            <h3 className="mt-4 font-heading text-xl">{industry.label}</h3>
            <p className="mt-2 text-sm text-foreground/60">{industry.tagline}</p>
          </div>
          <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition group-hover:opacity-100">
            Learn more
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      ))}
    </div>
  );
}
