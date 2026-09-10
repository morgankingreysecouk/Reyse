"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { industries } from "../industries/data";
import { products } from "../products/data";
import MobileMenu from "./MobileMenu";
import NavDropdown from "./NavDropdown";

// Split into (up to) 2 columns, sized to fit however many products there
// are — so adding or removing one never silently drops it from the menu.
const productColumnCount = 2;
const productPerColumn = Math.ceil(products.length / productColumnCount);
const productColumns: { label: string; description: string; href: string }[][] = [];
for (let c = 0; c < productColumnCount; c++) {
  const slice = products.slice(c * productPerColumn, (c + 1) * productPerColumn);
  if (slice.length === 0) break;
  productColumns.push(
    slice.map((product) => ({
      label: product.label,
      description: product.tagline,
      href: `/products/${product.slug}`,
    })),
  );
}

// Split into (up to) 4 columns, sized to fit however many industries there
// are — so adding or removing one never silently drops it from the menu.
const industryColumnCount = 4;
const industryPerColumn = Math.ceil(industries.length / industryColumnCount);
const industryColumns: { label: string; description: string; href: string }[][] = [];
for (let c = 0; c < industryColumnCount; c++) {
  const slice = industries.slice(c * industryPerColumn, (c + 1) * industryPerColumn);
  if (slice.length === 0) break;
  industryColumns.push(
    slice.map((industry) => ({
      label: industry.label,
      description: industry.tagline,
      href: `/industries/${industry.slug}`,
    })),
  );
}

const companyColumns = [
  [
    {
      label: "About Reyse",
      description: "Why we help property businesses get found and trusted online.",
      href: "/about",
    },
    {
      label: "Blog",
      description: "Specific, practical writing on AI search, SEO, and reviews.",
      href: "/blog",
    },
    {
      label: "Careers",
      description: "Early-stage, and honest about what that means.",
      href: "/careers",
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
      className={`fixed inset-x-0 top-0 border-b border-black/10 bg-background/70 backdrop-blur-md ${
        inFront ? "z-20" : "z-0"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Reyse
        </Link>
        <div className="hidden items-center gap-8 text-sm text-foreground/80 lg:flex">
          <NavDropdown label="Solutions" href="/#product" columns={productColumns} />
          <NavDropdown label="Industries" href="/#industries" columns={industryColumns} />
          <NavDropdown label="Company" href="/about" columns={companyColumns} />
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/get-started"
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-ink-foreground hover:opacity-90 lg:inline-block"
          >
            Get started
          </Link>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
