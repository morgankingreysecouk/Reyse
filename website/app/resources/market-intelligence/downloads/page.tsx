import DownloadsBentoPage, { type DownloadKind } from "../../../components/DownloadsBentoPage";
import { pageMetadata } from "../../../lib/seo";
import { resourcesBySlug } from "../../data";

export const metadata = pageMetadata({
  title: "Free Market & Competitive Intelligence Downloads",
  description: "Every free market intelligence download for estate and letting agents — worksheets, trackers, and templates. No sign-up, no catch.",
});

const kindByFile: Record<string, DownloadKind> = {
  "the-free-market-intelligence-course.pdf": "course",
  "reyse-real-competitive-set-worksheet.pdf": "worksheet",
  "reyse-competitor-benchmark-report.pdf": "template",
  "reyse-local-market-signal-alert-setup.pdf": "kit",
  "reyse-competitor-alert-setup-guide.pdf": "kit",
  "reyse-trust-signal-benchmark-checklist.pdf": "checklist",
  "reyse-gbp-activity-comparison-snapshot.pdf": "tracker",
  "reyse-ai-answer-monitor.pdf": "tracker",
  "reyse-review-momentum-snapshot.pdf": "tracker",
  "reyse-signal-vs-noise-decision-filter.pdf": "worksheet",
  "reyse-quarterly-market-intelligence-scorecard.pdf": "tracker",
};

export default function MarketIntelligenceDownloadsPage() {
  return (
    <DownloadsBentoPage
      downloads={resourcesBySlug["market-intelligence"].downloads}
      kindByFile={kindByFile}
      backHref="/resources/market-intelligence"
      backLabel="Back to the Market & Competitive Intelligence course"
      title="Every market intelligence download, in one place."
      description="Worksheets, trackers, and templates pulled straight from the course — no sign-up, no email gate, nothing held back."
      ctaTitle="Ready to start the course?"
      ctaDescription="No sign-up, no payment — click through and you're straight into module one."
      ctaHref="/marketcourse"
      ctaLabel="Start course →"
    />
  );
}
