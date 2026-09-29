"use client";

// Splits text into words, each masked behind overflow-hidden and slid up
// into place with a staggered delay — runs on mount rather than on scroll
// visibility, since this is built for above-the-fold content (a hero
// heading) that's never actually scrolled into view.
export default function RevealWords({
  text,
  className = "",
  delayStep = 45,
  startDelay = 0,
}: {
  text: string;
  className?: string;
  delayStep?: number;
  startDelay?: number;
}) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.15em] align-bottom">
          <span
            className="inline-block animate-[reveal-word_0.7s_cubic-bezier(0.22,1,0.36,1)_backwards]"
            style={{ animationDelay: `${startDelay + i * delayStep}ms` }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
