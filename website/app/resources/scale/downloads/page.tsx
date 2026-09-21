import DownloadsBentoPage, { type DownloadKind } from "../../../components/DownloadsBentoPage";
import { pageMetadata } from "../../../lib/seo";
import { resourcesBySlug } from "../../data";

export const metadata = pageMetadata({
  title: "Free Scale Downloads",
  description: "Every free scale download for growing estate and letting agent groups — checklists, templates, and worksheets. No sign-up, no catch.",
});

const kindByFile: Record<string, DownloadKind> = {
  "the-free-scale-course.pdf": "course",
  "reyse-branch-launch-checklist.pdf": "checklist",
  "reyse-branch-schema-template-kit.pdf": "template",
  "reyse-branch-nap-launch-check.pdf": "checklist",
  "reyse-branch-page-architecture-guide.pdf": "worksheet",
  "reyse-pre-launch-content-checklist.pdf": "checklist",
  "reyse-group-vs-branch-reporting-template.pdf": "template",
  "reyse-new-branch-directory-claim-checklist.pdf": "checklist",
  "reyse-listing-data-format-template.pdf": "template",
  "reyse-pre-launch-brand-consistency-checklist.pdf": "checklist",
  "reyse-moat-strength-test.pdf": "worksheet",
};

export default function ScaleDownloadsPage() {
  return (
    <DownloadsBentoPage
      downloads={resourcesBySlug.scale.downloads}
      kindByFile={kindByFile}
      backHref="/resources/scale"
      backLabel="Back to the Scale course"
      title="Every scale download, in one place."
      description="Checklists, templates, and worksheets pulled straight from the course — no sign-up, no email gate, nothing held back."
      ctaTitle="Ready to start the course?"
      ctaDescription="No sign-up, no payment — click through and you're straight into module one."
      ctaHref="/scalecourse"
      ctaLabel="Start course →"
    />
  );
}
