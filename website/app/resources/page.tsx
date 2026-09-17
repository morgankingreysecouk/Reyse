import Link from "next/link";
import ChecklistTimeline from "../components/ChecklistTimeline";
import Reveal from "../components/Reveal";
import { pageMetadata } from "../lib/seo";
import { checklistItems, checklistCategoryBlurbs, checklistTagStyles, checklistTagLabels } from "../seocourse/data";

export const metadata = pageMetadata({
  title: "The Free SEO Course",
  description: "A free course teaching estate and letting agents exactly how to get found on Google — no cost, no catch.",
});

export default function ResourcesPage() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
          Free Resources
        </p>
        <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          The free SEO course for estate &amp; letting agents.
        </h1>

        <div className="mt-10 space-y-5 text-lg text-foreground/70">
          <p>
            SEO stands for Search Engine Optimisation — making your website
            easy for search engines to find, understand, and trust, so it
            appears higher when someone searches for something related to
            your business.
          </p>
          <p>
            The vast majority of buyers, sellers, landlords, and tenants now
            start their search online, often long before they ever speak to
            a human. If your website isn&rsquo;t visible, fast, trustworthy,
            and genuinely useful at that exact moment, you lose that
            business to whichever agency did show up — not because
            they&rsquo;re better at the job than you, but because you were
            invisible at the exact moment it mattered.
          </p>
          <p>
            Every fix below works one of three ways: <strong className="text-foreground">direct</strong> (Google&rsquo;s
            algorithm measures it and uses it as a ranking input),{" "}
            <strong className="text-foreground">indirect</strong> (it changes
            customer behaviour, and that behaviour is what Google eventually
            notices), or it&rsquo;s a <strong className="text-foreground">prerequisite</strong> (doesn&rsquo;t
            boost ranking, just makes ranking possible at all). Watch the
            panel on the left as you scroll — it tracks exactly which stage
            of the course you&rsquo;re looking at.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl">
        <ChecklistTimeline
          items={checklistItems}
          categoryBlurbs={checklistCategoryBlurbs}
          tagStyles={checklistTagStyles}
          tagLabels={checklistTagLabels}
        />
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="mt-14 space-y-5 text-lg text-foreground/70">
          <p>
            The end goal: becoming the obvious, undisputed number one estate
            and letting agency in your area — for sales and lettings alike.
          </p>
          <p className="text-base text-foreground/60">
            One note: this guide covers traditional SEO (Google, Bing,
            Apple). GEO (Generative Engine Optimisation) — making sure AI
            tools like ChatGPT recommend you directly — overlaps heavily but
            has its own guide.
          </p>
          <p className="text-base text-foreground/60">
            One honest pattern worth noticing before you start: almost
            nothing on this list is genuinely hard to do once. What&rsquo;s
            hard is doing all of it, correctly, at the same time, and then
            keeping it that way for years while a market, an algorithm, and
            a set of competitors keep moving underneath you. That&rsquo;s the
            actual challenge this guide can&rsquo;t solve for you — and
            it&rsquo;s flagged specifically, item by item, throughout.
          </p>
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <h2 className="font-heading text-2xl leading-[1.15] tracking-tight">
            Why it&rsquo;s free
          </h2>
          <p className="mt-3 text-foreground/70">
            Reyse is one person right now, at an early stage, and this
            course is the same knowledge our paid work is built on. We&rsquo;d
            rather every agent — customer or not — actually check whether
            they&rsquo;re visible where it counts, and know how to fix it if
            they&rsquo;re not. If working through it yourself makes you
            decide you&rsquo;d rather we just did it for you, that&rsquo;s
            what our Done For You service is for. If it doesn&rsquo;t,
            you&rsquo;ve still got everything you need, free, for good.
          </p>
        </div>

        <Reveal>
          <div className="mt-16 rounded-2xl border border-border bg-panel p-8 text-center">
            <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
              Ready to start?
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/65">
              No sign-up, no payment — click through and you&rsquo;re straight
              into module one.
            </p>
            <Link
              href="/seocourse"
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Start course →
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
