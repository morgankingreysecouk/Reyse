"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { industries } from "../industries/data";
import { products } from "../products/data";

function subscribeNever() {
  return () => {};
}

// The portal target (document.body) only exists on the client, so this
// hook reports false during SSR and true once hydrated — the standard
// useSyncExternalStore pattern for client-only state, without the
// setState-in-effect that a "mounted" boolean + useEffect would need.
function useIsClient() {
  return useSyncExternalStore(subscribeNever, () => true, () => false);
}

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const mounted = useIsClient();
  const panelRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // The panel is portaled to <body> because the header uses backdrop-blur,
  // which — like transform/filter — creates a new containing block for
  // fixed-position descendants, so a nested "fixed inset-0" only fills the
  // header's own box instead of the viewport.

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

    const openButton = openButtonRef.current;
    return () => {
      siblings.forEach((el) => el.removeAttribute("inert"));
      openButton?.focus();
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
    <div className="lg:hidden">
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
            className={`fixed inset-0 z-40 bg-background transition-opacity duration-200 lg:hidden ${
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
                  <p className="text-2xl font-medium">Solutions</p>
                  <ul className="mt-4 flex flex-col gap-3 border-l border-border pl-4">
                    {products.map((product) => (
                      <li key={product.slug}>
                        <Link
                          href={`/products/${product.slug}`}
                          onClick={close}
                          className="text-base text-foreground/70 hover:text-foreground"
                        >
                          {product.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/quiz"
                        onClick={close}
                        className="text-base font-medium text-accent-text"
                      >
                        Not sure which one? Take the quiz
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-2xl font-medium">Industries</p>
                  <ul className="mt-4 flex flex-col gap-3 border-l border-border pl-4">
                    {industries.map((industry) => (
                      <li key={industry.slug}>
                        <Link
                          href={`/industries/${industry.slug}`}
                          onClick={close}
                          className="text-base text-foreground/70 hover:text-foreground"
                        >
                          {industry.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-2xl font-medium">Company</p>
                  <ul className="mt-4 flex flex-col gap-3 border-l border-border pl-4">
                    <li>
                      <Link
                        href="/about"
                        onClick={close}
                        className="text-base text-foreground/70 hover:text-foreground"
                      >
                        About Reyse
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        onClick={close}
                        className="text-base text-foreground/70 hover:text-foreground"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers"
                        onClick={close}
                        className="text-base text-foreground/70 hover:text-foreground"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#contact"
                        onClick={close}
                        className="text-base text-foreground/70 hover:text-foreground"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>

              <Link
                href="/get-started"
                onClick={close}
                className="mt-10 inline-block rounded-full bg-ink px-6 py-3 text-center text-sm font-medium text-ink-foreground hover:opacity-90"
              >
                Get started
              </Link>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
