"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { products } from "../products/data";
import MobileMenu from "./MobileMenu";
import NavDropdown from "./NavDropdown";
import {
  SearchIcon,
  SparkIcon,
  StarIcon,
  ChartIcon,
  ScaleIcon,
  LayersIcon,
  CompassIcon,
  InfoIcon,
  DocumentIcon,
  BriefcaseIcon,
  ShieldIcon,
  MailIcon,
} from "./NavIcons";

// One icon per product slug — matched by hand rather than derived, since
// each product needs a distinct, meaningful glyph, not a generated one.
const productIcons: Record<string, React.ReactNode> = {
  seo: SearchIcon,
  geo: SparkIcon,
  reviews: StarIcon,
  "market-intelligence": ChartIcon,
  scale: ScaleIcon,
};

// Split into (up to) 2 columns, sized to fit however many products there
// are — so adding or removing one never silently drops it from the menu.
const productColumnCount = 2;
const productPerColumn = Math.ceil(products.length / productColumnCount);
const productColumns: { label: string; description: string; href: string; icon?: React.ReactNode }[][] = [];
for (let c = 0; c < productColumnCount; c++) {
  const slice = products.slice(c * productPerColumn, (c + 1) * productPerColumn);
  if (slice.length === 0) break;
  productColumns.push(
    slice.map((product) => ({
      label: product.label,
      description: product.tagline,
      href: `/products/${product.slug}`,
      icon: productIcons[product.slug],
    })),
  );
}
productColumns.push([
  {
    label: "The Full System",
    description: "All 5, bundled — plus a bonus stack only the bundle unlocks.",
    href: "/system",
    icon: LayersIcon,
  },
  {
    label: "Not sure which one?",
    description: "Take the 60-second quiz.",
    href: "/quiz",
    icon: CompassIcon,
  },
]);

const companyColumns = [
  [
    {
      label: "About Reyse",
      description: "Why we help estate and letting agents get found and trusted online.",
      href: "/about",
      icon: InfoIcon,
    },
    {
      label: "Blog",
      description: "Specific, practical writing on AI search, SEO, and reviews.",
      href: "/blog",
      icon: DocumentIcon,
    },
    {
      label: "Careers",
      description: "Early-stage, and honest about what that means.",
      href: "/careers",
      icon: BriefcaseIcon,
    },
    {
      label: "Guarantees",
      description: "Eleven specific promises, each with a real remedy.",
      href: "/guarantees",
      icon: ShieldIcon,
    },
    {
      label: "Contact",
      description: "Get in touch or book a demo.",
      href: "/#contact",
      icon: MailIcon,
    },
  ],
];

const resourcesColumns = [
  [
    {
      label: "SEO",
      description: "Free course: exactly how to get found on Google, Bing, and Apple.",
      href: "/resources",
      icon: SearchIcon,
    },
    {
      label: "GEO",
      description: "Free guide: how AI tools like ChatGPT decide who to recommend.",
      href: "/geocourse",
      icon: SparkIcon,
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
      className={`fixed inset-x-0 top-0 border-b border-black/10 bg-background/90 backdrop-blur-md ${
        inFront ? "z-20" : "z-0"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Reyse
        </Link>
        <div className="hidden items-center gap-8 text-sm text-foreground/80 lg:flex">
          <NavDropdown label="Managed" href="/#product" columns={productColumns} />
          <NavDropdown label="Resources" href="/resources" columns={resourcesColumns} />
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
