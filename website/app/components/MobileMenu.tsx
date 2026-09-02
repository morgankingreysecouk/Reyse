"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { industries } from "../industries/data";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // The panel is portaled to <body> because the header uses backdrop-blur,
  // which — like transform/filter — creates a new containing block for
  // fixed-position descendants, so a nested "fixed inset-0" only fills the
  // header's own box instead of the viewport.
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex h-9 w-9 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <div className="flex flex-col gap-[5px]">
          <span className="h-[1.5px] w-5 bg-foreground" />
          <span className="h-[1.5px] w-5 bg-foreground" />
          <span className="h-[1.5px] w-5 bg-foreground" />
        </div>
      </button>

      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-40 bg-background transition-opacity duration-200 sm:hidden ${
              open ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="absolute right-6 top-4 flex h-9 w-9 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
            <div className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-24">
              <nav className="flex flex-col gap-8">
                <a href="/#product" onClick={close} className="text-2xl font-medium">
                  Product
                </a>

                <div>
                  <p className="text-2xl font-medium">Industries</p>
                  <ul className="mt-4 flex flex-col gap-3 border-l border-border pl-4">
                    {industries.map((industry) => (
                      <li key={industry.slug}>
                        <a
                          href={`/industries/${industry.slug}`}
                          onClick={close}
                          className="text-base text-foreground/70 hover:text-foreground"
                        >
                          {industry.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-2xl font-medium">Company</p>
                  <ul className="mt-4 flex flex-col gap-3 border-l border-border pl-4">
                    <li>
                      <a
                        href="/"
                        onClick={close}
                        className="text-base text-foreground/70 hover:text-foreground"
                      >
                        About Reyse
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#contact"
                        onClick={close}
                        className="text-base text-foreground/70 hover:text-foreground"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>

              <a
                href="/get-started"
                onClick={close}
                className="mt-10 inline-block rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-neutral-900 hover:bg-white/90"
              >
                Get started
              </a>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
