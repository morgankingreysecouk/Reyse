const paths: Record<string, string[]> = {
  "estate-agents": [
    "M4 11l8-6 8 6",
    "M6 10v9h12v-9",
    "M10 19v-5h4v5",
  ],
  "letting-agents": [
    "M3.5 15a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0",
    "M9.5 12.5L18 4",
    "M15 7l2 2",
    "M12.5 9.5l2 2",
  ],
  "property-management": [
    "M6 3h12v18H6z",
    "M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1",
    "M10 21v-3h4v3",
  ],
  "new-homes-developers": [
    "M6 21V4",
    "M6 6h12",
    "M16 6v6",
    "M3 21h9",
  ],
  "short-term-lets": [
    "M3 18v-7a2 2 0 012-2h14a2 2 0 012 2v7",
    "M3 15h18",
    "M7 13V9h4v4",
    "M3 18v2M21 18v2",
  ],
  "wedding-event-venues": [
    "M6 12a3.2 3.2 0 106.4 0 3.2 3.2 0 00-6.4 0",
    "M11.6 12a3.2 3.2 0 106.4 0 3.2 3.2 0 00-6.4 0",
  ],
  "student-accommodation": [
    "M12 4l10 5-10 5L2 9l10-5z",
    "M6 11.5V17c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5.5",
    "M22 9v6",
  ],
  "holiday-parks": [
    "M3 8h11l4 4v4H3z",
    "M8.2 19.8a1.8 1.8 0 103.6 0 1.8 1.8 0 00-3.6 0",
    "M1 16h2",
  ],
  "self-storage": [
    "M3 8l9-5 9 5-9 5-9-5z",
    "M3 8v8l9 5 9-5V8",
    "M12 13v8",
  ],
  "holiday-rental-agencies": [
    "M12 3l9 5-9 5-9-5 9-5z",
    "M3 13l9 5 9-5",
  ],
  "campsites-glamping": [
    "M3 20L12 4l9 16",
    "M8 20l4-7 4 7",
    "M3 20h18",
  ],
};

export default function IndustryIcon({ slug }: { slug: string }) {
  const d = paths[slug] ?? paths["estate-agents"];
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {d.map((path, i) => (
        <path key={i} d={path} />
      ))}
    </svg>
  );
}
