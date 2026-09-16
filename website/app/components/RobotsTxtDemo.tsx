function FileCard({
  tone,
  line,
  label,
  detail,
}: {
  tone: "danger" | "safe";
  line: string;
  label: string;
  detail: string;
}) {
  const safe = tone === "safe";
  return (
    <div
      className={`rounded-2xl border p-5 ${
        safe ? "border-accent/30 bg-accent/5" : "border-border"
      }`}
    >
      <p className={`text-xs font-medium ${safe ? "text-accent-text" : "text-foreground/60"}`}>{label}</p>
      <div className="mt-3 rounded-lg border border-border bg-background px-3 py-2.5 font-mono text-xs">
        <span className="text-foreground/40">User-agent: *</span>
        <br />
        <span className={safe ? "text-accent-text" : "text-foreground/70"}>{line}</span>
      </div>
      <p className="mt-3 text-xs text-foreground/60">{detail}</p>
    </div>
  );
}

// Same file, one word different — the whole point of this lesson is how
// small that difference looks and how total the consequence is, so the
// two files sit side by side with nothing else changed.
export default function RobotsTxtDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <FileCard
        tone="danger"
        line="Disallow: /"
        label="robots.txt — one line wrong"
        detail="Every page on the site, blocked from every search engine. Nobody's typo shows up as an error — the site just stops appearing."
      />
      <FileCard
        tone="safe"
        line="Allow: /"
        label="robots.txt — correct"
        detail="Same file, same structure, one word different. Fully visible to every search engine."
      />
    </div>
  );
}
