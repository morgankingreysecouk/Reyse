import Quiz from "../components/Quiz";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Which service do you need?",
  description: "A 60-second quiz to find out whether SEO, GEO, Reviews, Market Intelligence, or Scale is the right place to start for your business.",
});

export default function QuizPage() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-3xl">
        <div className="max-w-2xl">
          <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
            60-second quiz
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            Not sure what you need? Let&rsquo;s find out.
          </h1>
          <p className="mt-5 text-lg text-foreground/70">
            Five quick questions about where your business actually stands
            today — no email required until you&rsquo;re ready.
          </p>
        </div>

        <div className="mt-14">
          <Quiz />
        </div>
      </div>
    </main>
  );
}
