"use client";

import { useEffect, useRef, useState } from "react";
import { industries } from "../industries/data";
import NavDropdown from "./NavDropdown";

const productColumns = [
  [
    {
      label: "AI Live Chat",
      description: "Instant answers on your website, WhatsApp and social DMs.",
      href: "/#product",
    },
    {
      label: "AI Voice Assistant",
      description: "Coming soon — the same intelligence, now on the phone.",
      href: "/#product",
    },
  ],
];

const industryChunkSizes = [3, 3, 2, 2];
const industryColumns: { label: string; description: string; href: string }[][] = [];
{
  let cursor = 0;
  for (const size of industryChunkSizes) {
    industryColumns.push(
      industries.slice(cursor, cursor + size).map((industry) => ({
        label: industry.label,
        description: industry.tagline,
        href: `/industries/${industry.slug}`,
      })),
    );
    cursor += size;
  }
}

const companyColumns = [
  [
    {
      label: "About Reyse",
      description: "Why we're building AI live chat for the property industry.",
      href: "/",
    },
    {
      label: "Contact",
      description: "Get in touch or book a demo.",
      href: "/#contact",
    },
  ],
];

export default function Header() {
  const [inFront, setInFront] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const socialProofThreshold = () => window.innerHeight * 0.85;

    const onScroll = () => {
      const y = window.scrollY;

      if (y < socialProofThreshold()) {
        setInFront(true);
      } else if (y > lastScrollY.current) {
        setInFront(false);
      } else if (y < lastScrollY.current) {
        setInFront(true);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 border-b border-white/10 bg-background/30 backdrop-blur-md ${
        inFront ? "z-20" : "z-0"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-semibold tracking-tight">
          Reyse
        </a>
        <div className="hidden items-center gap-8 text-sm text-foreground/80 sm:flex">
          <NavDropdown label="Product" href="/#product" columns={productColumns} />
          <a href="/#how-it-works" className="hover:text-foreground">
            How it works
          </a>
          <NavDropdown label="Industries" href="/#industries" columns={industryColumns} />
          <NavDropdown label="Company" href="/#contact" columns={companyColumns} />
          <a href="/#contact" className="hover:text-foreground">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-foreground backdrop-blur hover:bg-white/15"
          >
            Contact
          </a>
          <a
            href="/get-started"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-white/90"
          >
            Get started
          </a>
        </div>
      </nav>
    </header>
  );
}
