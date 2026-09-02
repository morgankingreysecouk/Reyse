import { industries } from "../industries/data";

const productLinks = [
  { label: "AI Live Chat", href: "/#product" },
  { label: "AI Voice Assistant", href: "/#product" },
  { label: "How it works", href: "/#how-it-works" },
];

const companyLinks = [
  { label: "About Reyse", href: "/" },
  { label: "Contact", href: "/#contact" },
];

const getStartedLinks = [
  { label: "Book a demo", href: "/get-started" },
  { label: "Get started", href: "/get-started" },
  { label: "Contact us", href: "/#contact" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-medium text-foreground">{title}</p>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-foreground/60 hover:text-foreground"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-5">
          <div className="col-span-2 sm:col-span-1">
            <a href="/" className="text-lg font-semibold tracking-tight">
              Reyse
            </a>
          </div>
          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn
            title="Industries"
            links={industries.map((industry) => ({
              label: industry.label,
              href: `/industries/${industry.slug}`,
            }))}
          />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Get started" links={getStartedLinks} />
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-foreground/50">
          &copy; {new Date().getFullYear()} Reyse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
