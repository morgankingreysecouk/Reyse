// The Reyse mark: two overlapping circles — SEO and GEO, Google and AI,
// whichever framing fits — meeting in one shared space. Single-hue
// (accent + accent-text), consistent with the rest of the brand rather
// than introducing new colors just for the mark.
export default function VennMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="38" cy="50" r="28" fill="#6c7128" fillOpacity="0.85" />
      <circle cx="62" cy="50" r="28" fill="#a6ad3e" fillOpacity="0.85" />
    </svg>
  );
}
