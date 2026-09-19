import Link from "next/link";

export default function NewsletterSignup() {
  return (
    <div className="mt-6 max-w-[220px]">
      <p className="text-sm font-medium text-foreground">Stay in the loop</p>
      <p className="mt-1 text-xs text-foreground/65">
        Occasional updates, no spam.
      </p>
      <Link
        href="/newsletter"
        className="mt-3 inline-block w-full rounded-full bg-accent px-4 py-2 text-center text-sm font-medium text-accent-foreground hover:opacity-90"
      >
        Sign up
      </Link>
    </div>
  );
}
