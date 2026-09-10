import type { Metadata } from "next";
import { type LegalBlock } from "../components/LegalBody";
import { LegalPage } from "../components/LegalPage";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "The terms that govern your use of Reyse.",
});

const sections: { heading: string; body: string | LegalBlock[] }[] = [
  {
    heading: "1. Who we are",
    body: [
      {
        type: "p",
        text: "These terms are between you (\"you\", \"your\", the business you represent) and Reyse (\"we\", \"us\", \"our\"), a business based in the United Kingdom providing AI-assisted search visibility (SEO and GEO), review management, and market and competitive intelligence services for property businesses — including estate and letting agents, property managers, developers, and short-term let operators.",
      },
      {
        type: "p",
        text: "[Reyse's registered company name, company number, and registered office address will be inserted here once incorporation is complete. Until then, Reyse is operated by Morgan King, contactable at hello@reyse.co.uk.]",
      },
      {
        type: "p",
        text: "This Service is offered to businesses only. By accepting these terms you confirm you're entering into this agreement in the course of a trade, business, or profession, and not as a consumer. That means the consumer protections in the Consumer Rights Act 2015 and the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013 don't apply to this agreement — the commercial terms below apply instead.",
      },
    ],
  },
  {
    heading: "2. Accepting these terms",
    body: "By creating an account, signing an order form or proposal, or otherwise instructing us to begin work, you agree to these terms on behalf of yourself and the business you represent, and you confirm you have the authority to bind that business. If you don't agree to these terms, please don't use the Service. Where we've agreed a separate written contract or order form with you and its terms conflict with this page, the separately agreed terms take priority for the matters they cover.",
  },
  {
    heading: "3. The Service",
    body: "Reyse provides one or more of the following, as agreed with you at signup: technical, on-page and profile SEO audits and implementation; AI-search (GEO) visibility audits and implementation; AI-assisted review monitoring and response management; market and competitive intelligence reporting; and multi-branch replication of the above (\"Scale\"). The exact scope, deliverables, and whether we implement changes ourselves or advise you to, are set out in the proposal, order form, or onboarding materials agreed with you — those documents form part of this agreement.",
  },
  {
    heading: "4. Your account",
    body: "You're responsible for keeping your account credentials secure and for all activity that happens under your account. Tell us immediately at hello@reyse.co.uk if you suspect unauthorised access. We may suspend access to protect the security of the Service if we reasonably believe your account has been compromised.",
  },
  {
    heading: "5. Fees, payment and cancellation",
    body: [
      {
        type: "p",
        text: "Where the Service is offered on a paid basis, pricing and billing terms (one-off fee, monthly subscription, or a combination) are agreed with you separately at signup and set out in your order form or proposal.",
      },
      {
        type: "p",
        text: "For one-off (\"Foundation\") work, fees are payable as set out in your order form, typically on completion or in agreed instalments. For ongoing (\"Growth\") subscriptions, fees are billed in advance on a recurring basis and continue until the subscription is cancelled in line with the notice period in your order form.",
      },
      {
        type: "p",
        text: "Fees are non-refundable except: where required by law, where we fail to deliver the agreed Service and haven't remedied that within a reasonable period after you tell us, or where we cancel in advance of starting work. Late payment may result in suspension of the Service after we've given you reasonable notice.",
      },
      {
        type: "p",
        text: "All fees are exclusive of VAT unless stated otherwise. VAT will be added at the applicable rate where chargeable.",
      },
    ],
  },
  {
    heading: "6. Term and termination",
    body: [
      {
        type: "p",
        text: "For one-off work, this agreement ends once the agreed deliverables are complete. For ongoing subscriptions, this agreement continues until either party ends it with the notice period set out in your order form (or, if none is specified, 30 days' written notice).",
      },
      {
        type: "p",
        text: "We may suspend or end this agreement immediately, on written notice, if: you materially breach these terms and don't fix that within 14 days of being asked to, you become insolvent or unable to pay your debts, or we reasonably believe the Service is being used unlawfully or in a way that risks harm to Reyse, our other clients, or the public.",
      },
      {
        type: "p",
        text: "On ending the agreement, you remain liable for fees for work carried out or committed before the end date. We'll stop active implementation work but won't automatically undo changes already made (for example, schema, listings, or profile updates already live).",
      },
    ],
  },
  {
    heading: "7. Acceptable use",
    body: "You agree not to use the Service for unlawful, harassing, or deceptive purposes, to impersonate another person or business, to submit content that is defamatory, discriminatory, or infringes someone else's rights, to attempt to disrupt, reverse-engineer, or gain unauthorised access to the Service, or to use it in a way that breaches applicable data protection, consumer protection, or advertising standards law (including the CAP Code and Consumer Protection from Unfair Trading Regulations 2008, where relevant to content we publish on your behalf).",
  },
  {
    heading: "8. Your content and our processing of it",
    body: [
      {
        type: "p",
        text: "You retain ownership of the content and data you provide to us or that we access on your behalf — for example, property listings, business profile information, customer and review data, and website content (together, \"Client Data\"). You grant us a licence to access, use, and process Client Data solely to provide, maintain, and improve the Service for you.",
      },
      {
        type: "p",
        text: "Where Client Data includes personal data (for example, details of your customers or reviewers), we act as a data processor on your instructions and you act as the data controller, in each case as those terms are defined in UK GDPR. We'll process that personal data only in line with your documented instructions (which include the scope of the agreed Service), keep it confidential, apply appropriate security measures, and assist you in responding to data subject requests and meeting your own UK GDPR obligations, so far as that's reasonably necessary for the Service. Full processor terms are available as a Data Processing Addendum on request at hello@reyse.co.uk, and form part of this agreement once provided.",
      },
      {
        type: "p",
        text: "You're responsible for having the right to share any Client Data with us and for it being accurate and lawfully obtained.",
      },
    ],
  },
  {
    heading: "9. AI-generated content",
    body: [
      {
        type: "p",
        text: "Parts of the Service — including drafting review responses and some content recommendations — use AI tools. Where we draft content intended to be published in your name (for example, a review reply), our standard process includes a human check before it goes live, and you always have final visibility and control over what's posted under your business's name unless we've agreed a fully automated workflow with you in writing.",
      },
      {
        type: "p",
        text: "AI-generated output may occasionally be incomplete, inaccurate, or not quite right for a specific situation. You remain responsible for reviewing and standing behind any communication published or sent to your customers under your business's name, whether drafted by us, by AI, or by you.",
      },
    ],
  },
  {
    heading: "10. Confidentiality",
    body: "Each party will keep the other's confidential information (including business, pricing, and technical information not publicly available) confidential, and use it only to perform this agreement, except where disclosure is required by law or by a regulator.",
  },
  {
    heading: "11. Intellectual property",
    body: "Reyse and its licensors own all rights in the Service itself, including our software, methodology, templates, and branding. Nothing in these terms transfers ownership of that intellectual property to you. Deliverables created specifically for your business as part of the Service (for example, schema implemented on your site, or content written for your pages) become yours to use as part of your website and business once delivered and paid for, except for any underlying Reyse tooling or methodology used to produce them.",
  },
  {
    heading: "12. Service availability and disclaimers",
    body: "We aim to provide the Service to a good professional standard, but the Service is provided on an \"as available\" basis. We don't guarantee specific search rankings, AI citation outcomes, review volumes, or business results, since these depend on factors outside our control — including decisions made by Google, other search engines, and AI providers, and actions taken by your competitors. Nothing in this clause excludes our obligation to provide the Service with reasonable care and skill under the Supply of Goods and Services Act 1982 / Consumer Rights Act 2015 principles that apply to commercial contracts by implication under English law.",
  },
  {
    heading: "13. Limitation of liability",
    body: [
      {
        type: "p",
        text: "Nothing in these terms limits or excludes either party's liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that can't be limited or excluded under English law.",
      },
      {
        type: "p",
        text: "Subject to the paragraph above, our total liability to you arising out of or in connection with this agreement in any 12-month period is limited to the total fees paid by you to us in that same 12-month period. We're not liable for indirect or consequential losses, or for loss of profits, revenue, business opportunity, or data, even if we've been advised such losses were possible.",
      },
      {
        type: "p",
        text: "This limitation reflects the price of the Service and the allocation of risk between the parties, and you should hold appropriate business insurance if you require cover beyond it.",
      },
    ],
  },
  {
    heading: "14. Indemnity",
    body: "You agree to indemnify us against reasonable losses, costs, and claims we incur as a result of Client Data you provide infringing a third party's rights, or your material breach of clause 7 (Acceptable use), except to the extent we caused or contributed to the issue.",
  },
  {
    heading: "15. Data protection",
    body: "Our use of personal data — including yours, your team's, and (where we act as processor) your customers' — is described in our Privacy Policy and, for processor activities, the Data Processing Addendum referenced in clause 8. Both parties will comply with applicable UK data protection law, including UK GDPR and the Data Protection Act 2018, in relation to this agreement.",
  },
  {
    heading: "16. Force majeure",
    body: "Neither party is liable for delay or failure to perform obligations (other than payment obligations) caused by events reasonably outside their control, including internet or third-party platform outages, changes to search engine or AI provider policies that materially affect the Service, natural disasters, or government action — provided the affected party tells the other as soon as reasonably possible and takes reasonable steps to minimise the impact.",
  },
  {
    heading: "17. Changes to these terms",
    body: "We may update these terms from time to time, for example to reflect changes in the law or how the Service works. If we make material changes, we'll let you know by email or by a notice on this site before they take effect. Continued use of the Service after that point means you accept the updated terms; if you don't agree, you may end the agreement in line with clause 6.",
  },
  {
    heading: "18. General",
    body: [
      {
        type: "list",
        items: [
          "Assignment — you may not transfer your rights under this agreement without our consent. We may transfer our rights and obligations to another business that continues to provide the Service, provided your rights under these terms aren't materially reduced.",
          "Entire agreement — these terms, together with your order form or proposal and any Data Processing Addendum, form the entire agreement between us regarding the Service, and supersede any prior discussions on the same subject.",
          "Severability — if any part of these terms is found unenforceable, the rest continues to apply.",
          "No waiver — failing to enforce a right under these terms doesn't waive that right.",
          "Third-party rights — this agreement doesn't give any rights to anyone who isn't a party to it, under the Contracts (Rights of Third Parties) Act 1999 or otherwise.",
        ],
      },
    ],
  },
  {
    heading: "19. Governing law and disputes",
    body: "These terms, and any dispute arising from them or the Service, are governed by the laws of England and Wales. Both parties submit to the exclusive jurisdiction of the courts of England and Wales, except that we may seek an injunction in any jurisdiction to protect our intellectual property or confidential information.",
  },
  {
    heading: "20. Contact us and complaints",
    body: "Questions about these terms, or a complaint about the Service, should be sent to hello@reyse.co.uk. We aim to acknowledge complaints within 5 working days and resolve or provide a substantive response within 30 days wherever reasonably possible.",
  },
];

export default function Terms() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro={
        <>
          Last updated 10 September 2026. This is a considered draft, written
          specifically for Reyse&rsquo;s business, but it is not a substitute for
          review by a qualified solicitor — that review should happen before
          Reyse launches publicly or takes its first paying client.
        </>
      }
      sections={sections}
    />
  );
}
