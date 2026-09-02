import { industries } from "../industries/data";
import { products } from "../products/data";

const productLinks = [
  ...products.map((product) => ({ label: product.label, href: "/#product" })),
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

// TODO: swap "#" for the real profile URLs once they exist.
const socialLinks = [
  {
    label: "X",
    href: "#",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 1.802c-3.148 0-3.499.012-4.733.068-2.68.123-3.93 1.392-4.052 4.051-.056 1.234-.067 1.585-.067 4.733 0 3.148.011 3.499.067 4.733.122 2.657 1.37 3.929 4.052 4.051 1.234.056 1.584.069 4.733.069 3.149 0 3.5-.013 4.733-.069 2.676-.122 3.93-1.399 4.052-4.051.056-1.234.068-1.585.068-4.733 0-3.148-.012-3.499-.068-4.733-.122-2.655-1.372-3.928-4.052-4.051-1.233-.056-1.584-.068-4.733-.068zm0 4.596a5.279 5.279 0 1 1 0 10.559 5.279 5.279 0 0 1 0-10.559zm0 8.702a3.423 3.423 0 1 0 0-6.846 3.423 3.423 0 0 0 0 6.846zm6.72-8.913a1.234 1.234 0 1 1-2.468 0 1.234 1.234 0 0 1 2.468 0z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm16.951-20.452h-20.454c-1.05 0-1.9.845-1.9 1.887v20.451c0 1.043.85 1.887 1.9 1.887h20.451c1.05 0 1.9-.845 1.9-1.887v-20.451c0-1.042-.85-1.887-1.9-1.887z",
  },
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
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-8 text-sm text-foreground/50 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Reyse. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-foreground/50 hover:text-foreground"
                >
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>

            <label className="flex items-center gap-2">
              <span className="sr-only">Language</span>
              <select
                defaultValue="en-GB"
                className="rounded-md border border-border bg-transparent px-2 py-1 text-sm text-foreground/50 hover:text-foreground"
              >
                <option value="en-GB">English (UK)</option>
              </select>
            </label>

            <a href="/terms" className="hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
