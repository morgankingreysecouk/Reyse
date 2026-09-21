import DownloadsBentoPage, { type DownloadKind } from "../../components/DownloadsBentoPage";
import { pageMetadata } from "../../lib/seo";
import { lessons } from "../lessons";
import { resourcesBySlug } from "../../resources/data";

export const metadata = pageMetadata({
  title: "Free GEO Downloads",
  description: "Every free GEO download for estate and letting agents — checklists, templates, and worksheets. No sign-up, no catch.",
});

const kindByFile: Record<string, DownloadKind> = {
  "the-free-geo-guide.pdf": "course",
  "reyse-llms-txt-template.pdf": "template",
  "reyse-ai-query-mapping-worksheet.pdf": "worksheet",
  "reyse-answer-ready-content-checklist.pdf": "checklist",
  "reyse-entity-sameas-schema-kit.pdf": "kit",
  "reyse-ai-crawler-access-checklist.pdf": "checklist",
  "reyse-content-visibility-checklist.pdf": "checklist",
  "reyse-ai-recommendation-test-script.pdf": "kit",
  "reyse-ai-source-audit-worksheet.pdf": "worksheet",
  "reyse-property-forum-finder.pdf": "list",
  "reyse-competitor-ai-visibility-gap-finder.pdf": "worksheet",
};

export default function GeoDownloadsPage() {
  return (
    <DownloadsBentoPage
      downloads={resourcesBySlug.geo.downloads}
      kindByFile={kindByFile}
      backHref="/geocourse"
      backLabel="Back to the GEO guide"
      title="Every GEO download, in one place."
      description="Checklists, templates, and worksheets pulled straight from the guide — no sign-up, no email gate, nothing held back."
      ctaTitle="Ready to start the guide?"
      ctaDescription="No sign-up, no payment — click through and you're straight into item one."
      ctaHref={`/geocourse/${lessons[0].slug}`}
      ctaLabel="Start guide →"
    />
  );
}
