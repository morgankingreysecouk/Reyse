import Image from "next/image";
import { industries } from "../industries/data";

// Repeats every 5 cards: two large (half-width) then three small (third-width),
// so the pattern keeps working as industries are added or removed.
const spanPattern = [
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
          className={`group relative col-span-2 h-56 overflow-hidden rounded-2xl border border-border transition hover:border-foreground/30 ${spanPattern[i % spanPattern.length]}`}
        >
          <Image
            src={`/images/industries/${industry.slug}.png`}
            alt={industry.label}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
          />
          <div className="absolute inset-0 flex items-end p-6">
            <span className="font-heading text-2xl leading-none text-white drop-shadow-sm">
              {industry.label}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
