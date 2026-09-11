import type { Metadata } from "next";
import { type LegalBlock } from "../components/LegalBody";
import { LegalPage } from "../components/LegalPage";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Reyse handles your data.",
});

const sections: { heading: string; body: string | LegalBlock[] }[] = [
  {
    heading: "1. Who we are",
    body: [
      {
        type: "p",
        text: "This policy explains how Reyse (\"we\", \"us\", \"our\") collects and uses personal data when you visit reyse.co.uk, get in touch with us, or use the Service as a client. Reyse is the data controller for the personal data described in this policy, except where we're acting as a processor on a client's behalf — see section 2.",
      },
      {
        type: "p",
        text: "[Reyse's registered company name, company number, registered office address, and ICO registration number will be inserted here once incorporation and ICO registration are complete.] Until then, Reyse is operated by Morgan King. For any privacy query, contact hello@reyse.co.uk.",
      },
    ],
  },
  {
    heading: "2. The two roles we play with data",
    body: [
      {
        type: "p",
        text: "It matters which role we're in, because it changes whose instructions govern the data and who you should contact.",
      },
      {
        type: "list",
        items: [
          "Controller — for data about you as a website visitor, a person enquiring through our forms, or a contact at a client business (name, email, phone, what you asked us). We decide why and how this is processed, and this policy is about that data.",
          "Processor — for personal data that belongs to our clients' businesses, which we access or process only to deliver the Service (for example, a client's customer or review data, while we're managing their reviews or auditing their listings). Here, our client is the controller, we act on their documented instructions, and their own privacy policy — not this one — governs that data. If you're an individual whose data has been processed this way and you have a query, please contact the business you dealt with directly; we'll support them in responding.",
        ],
      },
    ],
  },
  {
    heading: "3. What we collect",
    body: [
      {
        type: "p",
        text: "When you fill in a form on this site (for example, the \"Get started\" enquiry form), we collect what you submit — typically your name, business name, email address, phone number if given, and anything you write in the message field.",
      },
      {
        type: "p",
        text: "If you become a client, we also collect account and billing information (business name, address, contact details, payment details — processed by our payment provider, not stored by us directly) and correspondence between us.",
      },
      {
        type: "p",
        text: "If you email us directly, we keep that correspondence and any personal data it contains for as long as it's needed to deal with your query and for a reasonable period afterwards.",
      },
      {
        type: "p",
        text: "We use privacy-friendly, cookieless website analytics (see section 5) that records aggregate, anonymised visit data — it does not identify you individually and is not linked back to your name or contact details.",
      },
    ],
  },
  {
    heading: "4. How we use it, and our lawful basis",
    body: [
      {
        type: "p",
        text: "UK GDPR requires us to have a valid \"lawful basis\" for each way we use personal data. Here's what we rely on:",
      },
      {
        type: "list",
        items: [
          "To respond to an enquiry or provide a quote — legitimate interests (responding to someone who's actively asked us to), or steps taken at your request prior to entering a contract.",
          "To provide the Service to a client and manage that account, including billing — performance of a contract with you.",
          "To improve the site and understand how it's used, via aggregate, anonymised analytics — legitimate interests, balanced against your privacy (see section 5 on why this doesn't need cookie consent).",
          "To send you information you've specifically asked for, or, where we have a client relationship with you, occasional relevant updates about the Service — legitimate interests, or consent where required by PECR for electronic marketing. You can opt out of marketing at any time.",
          "To meet our own legal and accounting obligations — legal obligation.",
        ],
      },
    ],
  },
  {
    heading: "5. Cookies and similar technologies",
    body: [
      {
        type: "p",
        text: "This site uses Vercel Web Analytics, which is cookieless by design — it identifies visits using a temporary, anonymised hash rather than a cookie or persistent identifier, doesn't track you across other websites, and automatically discards session data after 24 hours. Because it doesn't use cookies or equivalent storage and access technology at all, it falls outside what the Privacy and Electronic Communications Regulations (PECR) require consent for — it would also separately qualify for the statistical-purposes exemption the Data (Use and Access) Act 2025 introduced into PECR from 5 February 2026, since it's used solely to understand and improve the site and nothing is shared beyond that.",
      },
      {
        type: "p",
        text: "Even though it isn't legally required, we give you the choice anyway: the banner you see on first visit lets you accept, reject, or customise this, and you can change your mind at any time via \"Cookie settings\" in the footer of every page. Turning analytics off means your visit simply isn't counted.",
      },
      {
        type: "p",
        text: "The only other thing stored in your browser is a single, strictly necessary preference — your cookie choice itself — kept in your browser's local storage rather than as a cookie, used solely to remember that choice and never sent anywhere.",
      },
      {
        type: "p",
        text: "If we add tools in future that do use cookies or similar technology for analytics, marketing, or embedded content (for example, a booking widget), we'll add them as a new category in the same preference centre and ask for your consent first wherever PECR requires it.",
      },
    ],
  },
  {
    heading: "6. Who we share it with",
    body: [
      {
        type: "p",
        text: "We don't sell personal data. We share it only with the service providers we use to run the site and business, each acting as our processor and bound to only use it as we instruct:",
      },
      {
        type: "list",
        items: [
          "Vercel Inc. — website hosting and the cookieless analytics described in section 5.",
          "Web3Forms — delivers form submissions from this site to our inbox by email; it processes the content of what you submit solely to route that email.",
          "Our email provider, for correspondence with you.",
          "Our accounting and payment providers, where you're a client, solely to manage billing.",
        ],
      },
      {
        type: "p",
        text: "We may also disclose personal data where required by law, to enforce our Terms of Service, or to protect the rights, safety, or property of Reyse or others.",
      },
    ],
  },
  {
    heading: "7. International transfers",
    body: "Some of the service providers listed in section 6 are based in, or process data in, the United States. Where that's the case, we rely on a valid transfer mechanism recognised under UK GDPR — typically the UK-US Data Bridge (the UK extension to the EU-US Data Privacy Framework) where the provider is certified under it, or the UK International Data Transfer Agreement / Standard Contractual Clauses where it isn't. You can ask us for details of the safeguard that applies to a specific provider at hello@reyse.co.uk.",
  },
  {
    heading: "8. How long we keep it",
    body: "We keep enquiry and prospect data for up to 24 months from your last contact with us, unless you ask us to delete it sooner or you become a client (in which case client account data is kept for the duration of the relationship and for up to 6 years afterwards, to meet our accounting and legal obligations). We keep correspondence only for as long as it's genuinely useful, and delete or anonymise personal data once it's no longer needed for the purpose it was collected for.",
  },
  {
    heading: "9. How we keep it secure",
    body: "We use appropriate technical and organisational measures to protect personal data, including access controls, encrypted connections (HTTPS) for all data submitted through this site, and choosing service providers who maintain their own appropriate security standards. No system is completely secure, but we take reasonable steps proportionate to the sensitivity of the data involved.",
  },
  {
    heading: "10. Automated decision-making",
    body: "We don't use your personal data to make decisions about you using solely automated means that would have a legal or similarly significant effect on you. Where AI is used as part of the Service (for example, drafting review responses for a client), that's described in our Terms of Service — it involves generating content, not making automated decisions about individuals.",
  },
  {
    heading: "11. Children's data",
    body: "Reyse's website and Service are directed at businesses and aren't intended for use by children. We don't knowingly collect personal data from children.",
  },
  {
    heading: "12. Your rights",
    body: [
      {
        type: "p",
        text: "Under UK GDPR, you have the right to:",
      },
      {
        type: "list",
        items: [
          "Be informed about how your data is used (this policy).",
          "Access the personal data we hold about you.",
          "Have inaccurate data corrected, or incomplete data completed.",
          "Ask us to erase your data, in certain circumstances.",
          "Restrict how we use your data, in certain circumstances.",
          "Receive your data in a portable format, or ask us to send it to another organisation, where we process it based on consent or contract and by automated means.",
          "Object to processing based on legitimate interests, including direct marketing at any time.",
          "Withdraw consent at any time, where we rely on consent — this won't affect processing already carried out.",
        ],
      },
      {
        type: "p",
        text: "To exercise any of these, email hello@reyse.co.uk. We'll respond within one month, as required by UK GDPR, and won't normally charge a fee.",
      },
    ],
  },
  {
    heading: "13. How to complain",
    body: [
      {
        type: "p",
        text: "If you're unhappy with how we've handled your personal data, please tell us first at hello@reyse.co.uk so we can put it right. In line with the statutory complaints-handling duty introduced by the Data (Use and Access) Act 2025, we'll acknowledge your complaint within 30 days of receiving it and investigate without unjustified delay.",
      },
      {
        type: "p",
        text: "If you're not satisfied with our response, or you'd rather complain directly, you have the right to lodge a complaint with the UK's data protection regulator, the Information Commissioner's Office (ICO): ico.org.uk/make-a-complaint, or by phone on 0303 123 1113.",
      },
    ],
  },
  {
    heading: "14. Changes to this policy",
    body: "We may update this policy as the Service and the law develop. If we make material changes, we'll update the date below and, where appropriate, let clients know directly.",
  },
  {
    heading: "15. Contact us",
    body: "Questions about this policy or your data? Email hello@reyse.co.uk.",
  },
];

export default function Privacy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro={
        <>
          Last updated 10 September 2026. This is a considered draft, written
          specifically for Reyse&rsquo;s actual data flows, but it is not a
          substitute for review by a qualified solicitor — that review should
          happen before Reyse launches publicly or takes its first paying
          client.
        </>
      }
      sections={sections}
    />
  );
}
