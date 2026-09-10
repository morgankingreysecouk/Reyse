import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Careers",
  description: "Reyse is early-stage and honest about what that means. No open roles right now — here's what joining early would actually look like.",
});

const realities = [
  {
    heading: "It's one person right now",
    body: "Reyse doesn't have a team yet. It has a founder who was a lettings negotiator, spent a year researching AI search, and is now building the product and the business at the same time. Anyone who joins early is joining that, not an established company with an HR department and a perks list.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8.5" r="3.5" />
        <path d="M4.5 20c1.2-4 4.2-6 7.5-6s6.3 2 7.5 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    heading: "There's nothing to apply for yet",
    body: "No open roles, no application form, no pipeline. That's not false modesty — it's just accurate. The honest version of a careers page for a company at this stage is one that says so, rather than dressing up an empty roles list to look busier than it is.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 13l3-8h10l3 8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 13h5a1 1 0 0 1 1 1 2 2 0 0 0 4 0 1 1 0 0 1 1-1h5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    heading: "Early means real ownership, not a title",
    body: "When Reyse does start hiring, the people who join first won't be slotting into a defined role in an existing structure — they'll be helping build the structure. That's genuinely more interesting for the right person, and genuinely harder, and it's worth being upfront about both sides of that before anyone gets excited about the wrong thing.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="13" width="7" height="7" rx="1" />
        <rect x="13" y="13" width="7" height="7" rx="1" />
        <rect x="8.5" y="4" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

export default function CareersPage() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
          Careers
        </p>
        <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          No open roles. Here&rsquo;s the honest version anyway.
        </h1>
        <Reveal delay={100}>
          <p className="mt-5 text-lg text-foreground/70">
            Most careers pages perform a team and a culture that doesn&rsquo;t exist
            yet, for a company this early. This one won&rsquo;t. Here&rsquo;s exactly
            where things stand.
          </p>
        </Reveal>

        <div className="mt-16 space-y-10">
          {realities.map((item, i) => (
            <Reveal key={item.heading} delay={i * 100}>
              <div className="border-t border-border pt-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                  {item.icon}
                </span>
                <h2 className="mt-4 font-heading text-xl leading-[1.2] tracking-tight">
                  {item.heading}
                </h2>
                <p className="mt-3 text-foreground/70">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mx-auto mt-20 max-w-xl rounded-2xl border border-border bg-panel p-8 text-center">
            <h2 className="font-heading text-xl leading-[1.1] tracking-tight">
              Want to be on the list for when that changes?
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-foreground/65">
              If Reyse sounds like somewhere you&rsquo;d want to work once there
              actually is a team to join, send a short note — who you are, what
              you&rsquo;d bring — and it&rsquo;ll be read personally, not filtered
              by an applicant tracking system that doesn&rsquo;t exist yet.
            </p>
            <a
              href="mailto:hello@reyse.co.uk?subject=Interested%20in%20Reyse"
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              hello@reyse.co.uk
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
