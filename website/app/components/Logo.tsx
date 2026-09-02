export default function Logo() {
  return (
    <span className="flex items-center gap-1 text-foreground">
      <svg
        viewBox="0 0 100 140"
        className="h-7 w-auto"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0,0 H90 V60 H30 V140 H0 Z M30,60 L55,60 L85,110 L60,110 Z M45,15 V45 H80 V15 Z"
        />
      </svg>
      <span className="font-heading text-xl leading-none">eyse</span>
    </span>
  );
}
