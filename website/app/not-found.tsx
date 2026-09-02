import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center px-6 pb-24 pt-40">
      <div className="mx-auto max-w-lg text-center">
        <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/70">
          404
        </p>
        <h1 className="font-heading text-4xl leading-[1.4] tracking-tight sm:text-5xl">
          Nothing here.
        </h1>
        <p className="mt-5 text-lg text-foreground/70">
          The page you're looking for doesn't exist — or moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Back to home
          </a>
          <a
            href="/#contact"
            className="rounded-full border border-border bg-background/40 px-6 py-3 text-sm font-medium backdrop-blur hover:border-foreground/40"
          >
            Contact us
          </a>
        </div>
      </div>
    </main>
  );
}
