import Link from "next/link";
import CountdownTimer from "../components/CountdownTimer";
import { pageMetadata } from "../lib/seo";
import { CLAIMED_COUNTIES, SPOTS_REMAINING, TOTAL_SPOTS } from "../lib/freeForever";

export const metadata = pageMetadata({
  title: "The first 5 clients, free forever",
  description: "One business per county, first-come-first-served, gets the full Reyse service free — permanently. Here's exactly how it works.",
});

const terms = [
  {
    heading: "What you get",
    body: "The full Reyse service for your business, on whichever tier you'd normally be on — Foundation work and, if it's part of what you need, ongoing Growth — at no cost, for as long as your business exists and stays on the terms below. Not a trial, not a discount that reverts later.",
  },
  {
    heading: "Why only 5",
    body: "Reyse is one person right now. Five is the honest number of clients that can be given real, hands-on attention alongside everything else being built. This isn't an artificial cap for effect — it's the actual current capacity.",
  },
  {
    heading: "One per county",
    body: "Only one business per UK county gets this. It ties directly into how Reyse already works for every client — one property business per local area, full stop — so your free spot also means a genuine local exclusivity, not just a discount.",
  },
  {
    heading: "How allocation works",
    body: `Applications are reviewed and a spot is allocated at the end of each month, rather than on a rolling first-click basis — so someone who applies on the 3rd of the month has a fair shot against someone who applies on the 28th. ${CLAIMED_COUNTIES.length > 0 ? `${CLAIMED_COUNTIES.join(", ")} ${CLAIMED_COUNTIES.length === 1 ? "has" : "have"} already been claimed.` : "No counties have been claimed yet."} ${SPOTS_REMAINING} of ${TOTAL_SPOTS} spots remain.`,
  },
  {
    heading: "What keeps it free",
    body: "The spot stays free for as long as your business operates in the county it was granted for and you stay within Reyse's standard Terms of Service. It doesn't transfer if you sell the business or relocate outside the county — at that point the spot reopens for that county.",
  },
  {
    heading: "The honest catch",
    body: "Being one of the first five means being genuinely early — helping shape what the Service becomes, with less of a polished track record behind it than a client joining in a year's time would get. In return, you get the exclusivity and the cost saved, for good.",
  },
];

export default function FreeForeverPage() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
          Limited offer
        </p>
        <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          The first {TOTAL_SPOTS} clients don&rsquo;t pay. Ever.
        </h1>
        <p className="mt-5 text-lg text-foreground/70">
          One business per county. First come, first served. The full
          service, free, for as long as your business exists.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-panel p-6">
          <div>
            <p className="font-heading text-3xl leading-none tracking-tight text-accent-text">
              {SPOTS_REMAINING} / {TOTAL_SPOTS}
            </p>
            <p className="mt-1 text-xs text-foreground/65">counties still open</p>
          </div>
          <div className="h-10 w-px bg-border" />
          <div>
            <p className="text-sm font-medium">
              <CountdownTimer />
            </p>
            <p className="mt-1 text-xs text-foreground/65">until this month&rsquo;s window closes</p>
          </div>
        </div>

        <div className="mt-16 space-y-10">
          {terms.map((item) => (
            <div key={item.heading} className="border-t border-border pt-8">
              <h2 className="font-heading text-xl leading-[1.2] tracking-tight">
                {item.heading}
              </h2>
              <p className="mt-3 text-foreground/70">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-xl rounded-2xl border border-border bg-panel p-8 text-center">
          <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
            Want your county?
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/65">
            Tell us about your business through the usual form and mention
            the free-forever offer — say which county you&rsquo;re in.
          </p>
          <Link
            href="/get-started"
            className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Apply for your county
          </Link>
        </div>
      </div>
    </main>
  );
}
