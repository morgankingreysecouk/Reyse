"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import NavDropdown from "./NavDropdown";

const productColumns = [
  [
    {
      label: "AI Live Chat",
      description: "Instant answers on your website, WhatsApp and social DMs.",
      href: "/#how-it-works",
    },
    {
      label: "AI Voice Assistant",
      description: "Coming soon — the same intelligence, now on the phone.",
      href: "/#how-it-works",
    },
  ],
];

const industryColumns = [
  [
    {
      label: "Estate agents",
      description: "Answer buyer questions and book viewings the moment they message.",
    },
    {
      label: "Letting agents",
      description: "Qualify tenants and fill vacancies faster, day or night.",
    },
    {
      label: "Property management",
      description: "Handle resident queries at scale without adding headcount.",
    },
  ],
  [
    {
      label: "New homes & developers",
      description: "Turn plot and pricing questions into booked show-home visits.",
    },
    {
      label: "Short-term lets",
      description: "Confirm availability and bookings before guests look elsewhere.",
    },
    {
      label: "Wedding & event venues",
      description: "Answer date and pricing enquiries the instant they land.",
    },
  ],
  [
    {
      label: "Serviced apartments",
      description: "Convert corporate enquiries into confirmed stays, faster.",
    },
    {
      label: "Student accommodation",
      description: "Handle intake-season enquiry spikes without extra staff.",
    },
  ],
  [
    {
      label: "Holiday parks",
      description: "Keep pitches and lodges booked through every peak season.",
    },
    {
      label: "Self-storage",
      description: "Turn unit enquiries into move-ins the same day.",
    },
  ],
];

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
        <a href="/">
          <Logo />
        </a>
        <div className="hidden items-center gap-8 text-sm text-foreground/80 sm:flex">
          <NavDropdown label="Product" href="/#how-it-works" columns={productColumns} />
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
