import Link from "next/link";
import ChecklistTimeline from "../components/ChecklistTimeline";
import Reveal from "../components/Reveal";
import { pageMetadata } from "../lib/seo";
import { checklistItems, checklistCategoryBlurbs, checklistTagStyles, checklistTagLabels } from "./data";
import { lessons } from "./lessons";

export const metadata = pageMetadata({
  title: "The Free GEO Guide",
  description: "A free guide teaching estate and letting agents exactly how to get recommended by ChatGPT, Gemini, and Copilot — no cost, no catch.",
});

export default function GeoCoursePage() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
          Free Guide
        </p>
        <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          The free GEO guide for estate &amp; letting agents.
        </h1>

        <div className="mt-10 space-y-5 text-lg text-foreground/70">
          <p>
            GEO stands for Generative Engine Optimisation — making sure AI
            tools like ChatGPT, Google&rsquo;s Gemini, Microsoft&rsquo;s
            Copilot, and Perplexity actually name your business when someone
            asks a question relevant to what you do.
          </p>
          <p>
            This is genuinely different from a normal Google search. When
            someone searches Google the traditional way, they get a list of
            links and pick one themselves. When someone asks an AI tool the
            same question, the AI picks a small handful of businesses to name
            directly — often just one or two — and the person often never
            sees any other options at all. If you&rsquo;re not one of the
            names it picks, you&rsquo;re not &ldquo;ranked lower.&rdquo; You
            simply don&rsquo;t exist in that conversation.
          </p>
          <p>
            Every item below is marked with how confident the underlying
            evidence actually is: <strong className="text-foreground">confirmed</strong> (the
            AI companies themselves have stated this is a factor),{" "}
            <strong className="text-foreground">strongly observed</strong> (independent
            research consistently shows the pattern, even without an official
            confirmation), <strong className="text-foreground">emerging</strong> (a
            genuine, reasonable bet, not yet backed by solid evidence), or{" "}
            <strong className="text-foreground">measurement</strong> (not a
            ranking factor itself, but how you know the rest is working).
            Watch the panel on the left as you scroll — it tracks exactly
            which stage of the guide you&rsquo;re looking at.
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
            The end goal: being the name AI tools actually say, not just a
            website that technically exists somewhere in their training data.
          </p>
          <p className="text-base text-foreground/60">
            One note: this guide covers GEO — AI tools like ChatGPT
            recommending you directly. Traditional SEO (Google, Bing, Apple)
            overlaps heavily but has{" "}
            <Link href="/resources" className="text-foreground underline underline-offset-2 hover:text-accent-text">
              its own guide
            </Link>
            .
          </p>
          <p className="text-base text-foreground/60">
            One honest pattern worth flagging before you start: this field is
            newer than traditional SEO, and anyone claiming total certainty
            about how AI models pick who to cite is overselling what&rsquo;s
            actually known. Nothing in here is beyond what you can genuinely
            do yourself — I&rsquo;ll tell you plainly where the evidence is
            solid and where it&rsquo;s still a reasonable bet, item by item,
            throughout.
          </p>
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <h2 className="font-heading text-2xl leading-[1.15] tracking-tight">
            Why it&rsquo;s free
          </h2>
          <p className="mt-3 text-foreground/70">
            Reyse is one person right now, at an early stage, and this guide
            is the same knowledge our paid work is built on. We&rsquo;d
            rather every agent — customer or not — actually check whether AI
            tools recommend them, and know how to fix it if they don&rsquo;t.
            If working through it yourself makes you decide you&rsquo;d
            rather we just did it for you, that&rsquo;s what our Done For You
            service is for. If it doesn&rsquo;t, you&rsquo;ve still got
            everything you need, free, for good.
          </p>
        </div>

        <Reveal>
          <div className="mt-16 rounded-2xl border border-border bg-panel p-8 text-center">
            <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
              Ready to start?
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/65">
              No sign-up, no payment — click through and you&rsquo;re straight
              into item one.
            </p>
            <Link
              href={`/geocourse/${lessons[0].slug}`}
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Start guide →
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
