"use client";

import { useRouter } from "next/navigation";

type LessonOption = { slug: string; title: string; itemIndex: number };

export default function LessonJumpSelect({
  lessons,
  currentSlug,
}: {
  lessons: LessonOption[];
  currentSlug: string;
}) {
  const router = useRouter();

  return (
    <select
      value={currentSlug}
      onChange={(e) => router.push(`/seocourse/${e.target.value}`)}
      aria-label="Jump to lesson"
      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/70 hover:border-foreground/30"
    >
      {lessons.map((l) => (
        <option key={l.slug} value={l.slug}>
          {l.itemIndex}. {l.title}
        </option>
      ))}
    </select>
  );
}
