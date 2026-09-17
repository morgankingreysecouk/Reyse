import Link from "next/link";
import { products } from "../products/data";
import CookieSettingsLink from "./CookieSettingsLink";
import NewsletterSignup from "./NewsletterSignup";

const solutionsLinks = [
  { label: "The Full System", href: "/system", emphasis: true },
  ...products.map((product) => ({
    label: product.label,
    href: `/products/${product.slug}`,
  })),
  { label: "Not sure which one? Take the quiz", href: "/quiz", emphasis: true },
];

const companyLinks = [
  { label: "About Reyse", href: "/about" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Guarantees", href: "/guarantees" },
  { label: "Charity", href: "/charity" },
  { label: "Contact", href: "/get-started" },
];

const getStartedLinks = [
  { label: "Get started", href: "/get-started" },
  { label: "Take the quiz", href: "/quiz" },
  { label: "Contact us", href: "/get-started" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/reyseai/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 1.802c-3.148 0-3.499.012-4.733.068-2.68.123-3.93 1.392-4.052 4.051-.056 1.234-.067 1.585-.067 4.733 0 3.148.011 3.499.067 4.733.122 2.657 1.37 3.929 4.052 4.051 1.234.056 1.584.069 4.733.069 3.149 0 3.5-.013 4.733-.069 2.676-.122 3.93-1.399 4.052-4.051.056-1.234.068-1.585.068-4.733 0-3.148-.012-3.499-.068-4.733-.122-2.655-1.372-3.928-4.052-4.051-1.233-.056-1.584-.068-4.733-.068zm0 4.596a5.279 5.279 0 1 1 0 10.559 5.279 5.279 0 0 1 0-10.559zm0 8.702a3.423 3.423 0 1 0 0-6.846 3.423 3.423 0 0 0 0 6.846zm6.72-8.913a1.234 1.234 0 1 1-2.468 0 1.234 1.234 0 0 1 2.468 0z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61578502494744",
    path: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z",
  },
  // Placeholder handles matching the Instagram handle (reyseai) — swap for
  // the real profile URLs once these accounts exist.
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/reyseai",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "X",
    href: "https://x.com/reyseai",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@reyseai",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; emphasis?: boolean }[];
}) {
  return (
    <div>
      <p className="text-sm font-medium text-foreground">{title}</p>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={
                link.emphasis
                  ? "text-sm font-medium text-accent-text hover:text-foreground"
                  : "text-sm text-foreground/60 hover:text-foreground"
              }
            >
              {link.label}
            </Link>
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
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Reyse
            </Link>
            <p className="mt-1 text-xs text-foreground/50">Get Found &amp; Stay Found</p>
            <NewsletterSignup />
          </div>
          <FooterColumn title="Managed" links={solutionsLinks} />
          <FooterColumn
            title="Resources"
            links={[
              { label: "The Free SEO Course", href: "/resources", emphasis: true },
              { label: "Go straight to the course", href: "/seocourse" },
            ]}
          />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Get started" links={getStartedLinks} />
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 pt-6 text-xs text-foreground/65">
          <p>
            Statistics cited across this site are industry estimates and
            composite figures drawn from published research and Reyse&rsquo;s
            own work, not single-study citations — treat them as
            directional, not exact.
          </p>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-sm text-foreground/65 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Reyse. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="-m-3 p-3 text-foreground/65 hover:text-foreground"
                >
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
            <CookieSettingsLink />
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
