import type { Metadata } from "next";

/**
 * Next.js shallow-merges metadata per segment — a page that sets its own
 * `openGraph`/`twitter` object replaces the parent's entirely, dropping
 * its image unless the child re-declares one. This keeps every page's
 * social preview correct (real title/description) without silently
 * losing the shared OG image.
 */
export function pageMetadata({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  // Lets a page (a blog post, specifically) use its own real image for
  // link previews instead of always falling back to the generic
  // site-wide OG image — otherwise sharing a post never actually shows
  // the photo generated for it.
  image?: string;
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} — Reyse`,
      description,
      url: "https://reyse.co.uk",
      siteName: "Reyse",
      locale: "en_GB",
      type: "website",
      images: [image ?? "/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — Reyse`,
      description,
    },
  };
}
