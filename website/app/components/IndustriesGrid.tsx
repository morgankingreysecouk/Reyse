import Image from "next/image";
import Link from "next/link";
import { industries } from "../industries/data";

export default function IndustriesGrid() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
      {industries.map((industry) => (
        <Link
          key={industry.slug}
          href={`/industries/${industry.slug}`}
          className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border sm:aspect-square"
        >
          <Image
            src={industry.image}
            alt={industry.imageAlt}
            fill
            sizes="(min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <h3 className="font-heading text-base leading-[1.15] text-ink-foreground sm:text-lg">
              {industry.label}
            </h3>
            <p className="mt-1 line-clamp-2 max-h-0 text-xs text-ink-foreground/80 opacity-0 transition-all duration-300 group-hover:mt-1.5 group-hover:max-h-12 group-hover:opacity-100">
              {industry.tagline}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
