import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Reyse",
  description: "The terms that govern your use of Reyse.",
};

const sections = [
  {
    heading: "1. Who we are",
    body: "Reyse (“we”, “us”, “our”) provides AI-powered live chat and messaging automation for property businesses, including estate and letting agents, property managers, developers, and short-term let operators. These terms apply whenever you use our website, product, or related services (the “Service”).",
  },
  {
    heading: "2. Accepting these terms",
    body: "By creating an account, installing our chat widget, or otherwise using the Service, you agree to these terms on behalf of yourself and, if applicable, the business you represent. If you don't agree, please don't use the Service.",
  },
  {
    heading: "3. Your account",
    body: "You're responsible for keeping your account credentials secure and for all activity that happens under your account. Tell us immediately if you suspect unauthorised access.",
  },
  {
    heading: "4. Acceptable use",
    body: "You agree not to use the Service to send unlawful, harassing, or deceptive messages, to impersonate another person or business, to attempt to disrupt or reverse-engineer the Service, or to use it in any way that breaches applicable data protection or consumer protection law.",
  },
  {
    heading: "5. Your content and data",
    body: "You retain ownership of the content and customer data you provide to Reyse (for example, property listings or conversation data). You grant us a licence to process that data solely to provide and improve the Service. Our use of personal data is described in our Privacy Policy.",
  },
  {
    heading: "6. Fees and payment",
    body: "Where the Service is offered on a paid basis, pricing and billing terms will be agreed separately at signup. Fees are non-refundable except where required by law.",
  },
  {
    heading: "7. Intellectual property",
    body: "Reyse and its licensors own all rights in the Service, including its software, design, and branding. Nothing in these terms transfers ownership of that intellectual property to you.",
  },
  {
    heading: "8. Disclaimers",
    body: "The Service is provided “as is”. While we work hard to keep responses accurate and timely, Reyse's AI-generated replies may occasionally be incomplete or incorrect, and you remain responsible for reviewing and standing behind communications sent to your customers.",
  },
  {
    heading: "9. Limitation of liability",
    body: "To the fullest extent permitted by law, Reyse is not liable for indirect, incidental, or consequential losses arising from your use of the Service. Nothing in these terms limits liability that cannot be excluded under English law, such as liability for fraud or death or personal injury caused by negligence.",
  },
  {
    heading: "10. Termination",
    body: "You may stop using the Service at any time. We may suspend or terminate access if these terms are breached, or if we reasonably believe the Service is being used unlawfully or in a way that risks harm to Reyse or others.",
  },
  {
    heading: "11. Changes to these terms",
    body: "We may update these terms from time to time. If we make material changes, we'll let you know before they take effect. Continued use of the Service after that point means you accept the updated terms.",
  },
  {
    heading: "12. Governing law",
    body: "These terms are governed by the laws of England and Wales, and any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.",
  },
  {
    heading: "13. Contact us",
    body: "Questions about these terms? Email us at hello@reyse.co.uk.",
  },
];

export default function Terms() {
  return (
    <main className="flex-1 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
          Legal
        </p>
        <h1 className="font-heading text-4xl leading-[1.4] tracking-tight sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-5 max-w-xl text-lg text-foreground/70">
          Last updated {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}.
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
