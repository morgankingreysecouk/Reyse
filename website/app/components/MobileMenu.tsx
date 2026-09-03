"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { industries } from "../industries/data";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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

  // Modal semantics: make everything outside the panel inert (removed from
  // the tab order and accessibility tree) while open, so keyboard and
  // screen-reader users can't reach content hidden behind the overlay.
  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    const siblings = Array.from(document.body.children).filter(
      (el) => el !== panelRef.current,
    ) as HTMLElement[];
    siblings.forEach((el) => el.setAttribute("inert", ""));

    return () => {
      siblings.forEach((el) => el.removeAttribute("inert"));
      openButtonRef.current?.focus();
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
        ref={openButtonRef}
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
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className={`fixed inset-0 z-40 bg-background transition-opacity duration-200 sm:hidden ${
              open ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <button
              ref={closeButtonRef}
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
