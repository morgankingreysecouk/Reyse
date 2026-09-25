import DownloadsBentoPage, { type DownloadKind } from "../../../components/DownloadsBentoPage";
import { pageMetadata } from "../../../lib/seo";
import { resourcesBySlug } from "../../data";

export const metadata = pageMetadata({
  title: "Free SEO Downloads",
  description: "Every free SEO download for estate and letting agents — checklists, templates, and trackers. No sign-up, no catch.",
});

// Keyed by filename rather than added to the shared ResourceLink type — this
// grouping is purely a visual/editorial concern for this one page, not part
// of the resources data model other pages rely on.
const kindByFile: Record<string, DownloadKind> = {
  "the-free-seo-course.pdf": "course",
  "reyse-schema-markup-pack.pdf": "template",
  "reyse-gbp-setup-checklist.pdf": "checklist",
  "reyse-review-request-reply-templates.pdf": "template",
  "reyse-ai-visibility-self-check-kit.pdf": "kit",
  "reyse-ai-crawler-access-checklist.pdf": "checklist",
  "reyse-nap-consistency-tracker.pdf": "tracker",
  "reyse-meta-title-description-formulas.pdf": "template",
  "reyse-competitor-snapshot-worksheet.pdf": "worksheet",
  "reyse-uk-directory-list.pdf": "list",
  "reyse-monthly-seo-health-check.pdf": "checklist",
};

// Filled in as real photos get generated — anything left out just falls
// back to the icon treatment, so this can be completed gradually.
const imageByFile: Record<string, string> = {
  "the-free-seo-course.pdf": "/images/downloads/seo/the-free-seo-course.webp",
  "reyse-schema-markup-pack.pdf": "/images/downloads/seo/reyse-schema-markup-pack.webp",
  "reyse-gbp-setup-checklist.pdf": "/images/downloads/seo/reyse-gbp-setup-checklist.webp",
  "reyse-review-request-reply-templates.pdf": "/images/downloads/seo/reyse-review-request-reply-templates.webp",
  "reyse-ai-visibility-self-check-kit.pdf": "/images/downloads/seo/reyse-ai-visibility-self-check-kit.webp",
  "reyse-uk-directory-list.pdf": "/images/downloads/seo/reyse-uk-directory-list.webp",
};

export default function SeoDownloadsPage() {
  return (
    <DownloadsBentoPage
      downloads={resourcesBySlug.seo.downloads}
      kindByFile={kindByFile}
      imageByFile={imageByFile}
      backHref="/resources/seo"
      backLabel="Back to the SEO course"
      title="Every SEO download, in one place."
      description="Checklists, templates, and trackers pulled straight from the course — no sign-up, no email gate, nothing held back."
      ctaTitle="Ready to start the course?"
      ctaDescription="No sign-up, no payment — click through and you're straight into module one."
      ctaHref="/seocourse"
      ctaLabel="Start course →"
    />
  );
}
