"use client";

import { useRouter } from "next/navigation";

type LessonOption = { slug: string; title: string };

export default function LessonJumpSelect({
  lessons,
  currentSlug,
  basePath,
}: {
  lessons: LessonOption[];
  currentSlug: string;
  basePath: string;
}) {
  const router = useRouter();

  return (
    <select
      value={currentSlug}
      onChange={(e) => router.push(`${basePath}/${e.target.value}`)}
      aria-label="Jump to lesson"
      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/70 hover:border-foreground/30"
    >
      {lessons.map((l, i) => (
        <option key={l.slug} value={l.slug}>
          {i + 1}. {l.title}
        </option>
      ))}
    </select>
  );
}
