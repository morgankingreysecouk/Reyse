import type { ResourceLink } from "../resources/data";

export const CourseIcon = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 6.5c2.5-1.3 5.5-1.3 8 0 2.5-1.3 5.5-1.3 8 0v11c-2.5-1.3-5.5-1.3-8 0-2.5-1.3-5.5-1.3-8 0v-11Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 6.5v11" strokeLinecap="round" />
  </svg>
);
export const VideoIcon = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M10 8.5l6 3.5-6 3.5v-7Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const AudiobookIcon = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" strokeLinecap="round" />
    <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
    <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
  </svg>
);
export const DownloadIcon = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 4v11m0 0-4-4m4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 17v1.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function ResourceCard({
  icon,
  title,
  items,
  emptyNote,
  featured = false,
}: {
  icon: React.ReactNode;
  title: string;
  items: ResourceLink[];
  emptyNote: string;
  featured?: boolean;
}) {
  return (
    <div
      className={
        featured
          ? "flex flex-col rounded-3xl bg-accent p-7 text-accent-foreground"
          : "flex flex-col rounded-3xl border border-border bg-background p-7"
      }
    >
      <span
        className={
          featured
            ? "flex h-9 w-9 items-center justify-center rounded-full bg-ink/10 text-ink"
            : "flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-text"
        }
      >
        {icon}
      </span>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      {items.length > 0 ? (
        <ul className="mt-3 space-y-3">
          {items.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                className={
                  featured
                    ? "block rounded-xl bg-ink/10 px-4 py-3 transition hover:bg-ink/15"
                    : "block rounded-xl border border-border px-4 py-3 transition hover:border-foreground/30 hover:bg-panel"
                }
              >
                <p className="font-medium">{item.title}</p>
                <p className={`mt-0.5 text-sm ${featured ? "text-accent-foreground/80" : "text-foreground/70"}`}>
                  {item.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className={`mt-2 text-sm ${featured ? "text-accent-foreground/80" : "text-foreground/60"}`}>
          {emptyNote}
        </p>
      )}
    </div>
  );
}
