import Link from "next/link";
import { lessons } from "../seocourse/lessons";

// Sequential single-hue ramp on the site's own accent — this chart's job is
// magnitude comparison (what matters most), not category identity, so one
// hue getting darker with impact is the right encoding, not a rainbow of
// categorical colours competing with the rest of the page. Category is
// still shown, just as a direct text tag rather than a color channel.
function barOpacity(percent: number, max: number) {
  return Math.max(0.3, percent / max);
}

export default function PriorityBreakdownChart() {
  const ranked = lessons
    .filter((l): l is typeof l & { impactPercent: number } => typeof l.impactPercent === "number")
    .sort((a, b) => b.impactPercent - a.impactPercent);

  const max = ranked[0]?.impactPercent ?? 1;

  return (
    <div>
      <div className="rounded-2xl border border-border bg-panel p-5">
        <p className="text-xs text-foreground/60">
          My best estimate of how much each item actually moves the needle, out of 100% across every item in this
          course — not a precise measurement, a prioritisation tool. Treat it as directional, same as everything
          else cited on this site.
        </p>
      </div>

      <div className="mt-4 space-y-1">
        {ranked.map((lesson, i) => (
          <Link
            key={lesson.slug}
            href={`/seocourse/${lesson.slug}`}
            className="group block rounded-lg px-2 py-2 hover:bg-panel"
          >
            <div className="flex items-baseline justify-between gap-3">
              <div className="flex min-w-0 items-baseline gap-2.5">
                <span className="w-5 shrink-0 text-right text-xs text-foreground/40">{i + 1}</span>
                <span className="truncate text-sm text-foreground group-hover:text-accent-text">{lesson.title}</span>
                <span className="hidden shrink-0 rounded-full bg-foreground/10 px-2 py-0.5 text-[10px] font-medium text-foreground/55 sm:inline-block">
                  {lesson.category}
                </span>
              </div>
              <span className="shrink-0 text-sm font-medium tabular-nums text-foreground/70">
                {lesson.impactPercent % 1 === 0 ? lesson.impactPercent : lesson.impactPercent.toFixed(2)}%
              </span>
            </div>
            <div className="mt-1.5 ml-[30px] h-2 overflow-hidden rounded-full bg-border/60">
              <div
                className="h-full rounded-full bg-accent"
                style={{
                  width: `${(lesson.impactPercent / max) * 100}%`,
                  opacity: barOpacity(lesson.impactPercent, max),
                }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
