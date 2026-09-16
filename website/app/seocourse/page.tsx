import Link from "next/link";
import ArticleBody from "../components/ArticleBody";
import Reveal from "../components/Reveal";
import { pageMetadata } from "../lib/seo";
import { courseModules } from "./data";

export const metadata = pageMetadata({
  title: "The Free SEO Course",
  description: "Five modules, about two hours total — everything an estate or letting agent needs to get found on Google, for free.",
});

export default function SeoCoursePage() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
          The Free SEO Course
        </p>
        <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          Welcome — let&rsquo;s get you found.
        </h1>
        <p className="mt-5 text-lg text-foreground/70">
          Five modules, in order, about two hours total. No technical
          background required. Work through them at your own pace — this
          page is yours to come back to whenever you like.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {courseModules.map((mod) => (
            <a
              key={mod.id}
              href={`#${mod.id}`}
              className="rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-foreground/70 hover:border-foreground/30 hover:text-foreground"
            >
              {mod.number}. {mod.title}
            </a>
          ))}
        </div>

        <div className="mt-16 space-y-20">
          {courseModules.map((mod) => (
            <Reveal key={mod.id}>
              <div id={mod.id} className="scroll-mt-28 border-t border-border pt-12">
                <span className="text-sm font-medium text-accent-text">
                  Module {mod.number} of {courseModules.length}
                </span>
                <h2 className="mt-2 font-heading text-3xl leading-[1.1] tracking-tight">
                  {mod.title}
                </h2>
                <p className="mt-3 text-foreground/65">{mod.summary}</p>
                <p className="mt-1 text-xs text-foreground/50">{mod.readingTime} read</p>
                <div className="mt-8">
                  <ArticleBody blocks={mod.body} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 rounded-2xl border border-border bg-panel p-8 text-center">
            <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
              Rather we just did this for you?
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/65">
              Tell us about your business and we&rsquo;ll show you exactly
              what&rsquo;s missing — free to ask, no obligation.
            </p>
            <Link
              href="/get-started"
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Request a free audit
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
