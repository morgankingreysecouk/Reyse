import type { Metadata } from "next";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Reyse handles your data.",
});

const sections = [
  {
    heading: "1. Who we are",
    body: "This policy explains how Reyse (“we”, “us”, “our”) collects and uses personal data when you visit reyse.co.uk or use the Service. For questions, email hello@reyse.co.uk.",
  },
  {
    heading: "2. What we collect",
    body: "When you fill in a form on this site (for example, requesting a demo), we collect what you submit — typically your name, business name, email address, and anything you write in the message field. If you use the Service itself, we also process the business and customer data described in our Terms of Service — for example property listings, business profile data, and review data — solely to provide the Service.",
  },
  {
    heading: "3. Cookies",
    body: "We use essential cookies to make the site work, and may use analytics cookies to understand how visitors use the site — for example which pages get read and where people drop off — so we can improve it. Analytics data is aggregated and isn't used to build individual profiles for advertising.",
  },
  {
    heading: "4. How we use your data",
    body: "We use the information you submit to respond to your enquiry, provide the Service, and improve the site. We don't sell your personal data, and we don't share it with third parties except the tools we use to run the business (for example, the service that delivers form submissions to our inbox) and where required by law.",
  },
  {
    heading: "5. How long we keep it",
    body: "We keep enquiry data for as long as it's useful for following up with you, and delete it when it's no longer needed. Data processed as part of the Service is kept for as long as your account is active, or as agreed at signup.",
  },
  {
    heading: "6. Your rights",
    body: "Under UK GDPR, you can ask us what data we hold about you, ask us to correct or delete it, or object to how we use it. Email hello@reyse.co.uk and we'll respond as quickly as we can.",
  },
  {
    heading: "7. Changes to this policy",
    body: "We may update this policy as the Service develops. If we make material changes, we'll update the date below.",
  },
  {
    heading: "8. Contact us",
    body: "Questions about this policy or your data? Email us at hello@reyse.co.uk.",
  },
];

export default function Privacy() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
          Legal
        </p>
        <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-5 max-w-xl text-lg text-foreground/70">
          Last updated 10 September 2026.
          This is a draft policy and should be reviewed by a solicitor before Reyse launches publicly.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-semibold">{section.heading}</h2>
              <p className="mt-2 text-foreground/70">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
