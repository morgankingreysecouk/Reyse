import DownloadsBentoPage, { type DownloadKind } from "../../../components/DownloadsBentoPage";
import { pageMetadata } from "../../../lib/seo";
import { resourcesBySlug } from "../../data";

export const metadata = pageMetadata({
  title: "Free Review Management Downloads",
  description: "Every free review management download for estate and letting agents — templates, checklists, and worksheets. No sign-up, no catch.",
});

const kindByFile: Record<string, DownloadKind> = {
  "the-free-review-management-course.pdf": "course",
  "reyse-review-request-templates.pdf": "template",
  "reyse-review-reply-template-library.pdf": "template",
  "reyse-review-platform-coverage-checklist.pdf": "checklist",
  "reyse-negative-review-decision-tree.pdf": "worksheet",
  "reyse-review-badge-embed-kit.pdf": "kit",
  "reyse-review-monitoring-alert-checklist.pdf": "checklist",
  "reyse-monthly-review-health-check.pdf": "checklist",
  "reyse-review-reply-builder-worksheet.pdf": "worksheet",
  "reyse-fake-review-flagging-guide.pdf": "checklist",
  "reyse-ai-reputation-self-check-kit.pdf": "kit",
};

export default function ReviewsDownloadsPage() {
  return (
    <DownloadsBentoPage
      downloads={resourcesBySlug.reviews.downloads}
      kindByFile={kindByFile}
      backHref="/resources/reviews"
      backLabel="Back to the Review Management course"
      title="Every review management download, in one place."
      description="Templates, checklists, and worksheets pulled straight from the course — no sign-up, no email gate, nothing held back."
      ctaTitle="Ready to start the course?"
      ctaDescription="No sign-up, no payment — click through and you're straight into module one."
      ctaHref="/reviewscourse"
      ctaLabel="Start course →"
    />
  );
}
