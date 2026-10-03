import fs from "node:fs";
import path from "node:path";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] };

export type Reference = { label: string; url: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  body: ContentBlock[];
  // Absent = the existing hand-written posts, authored by Morgan directly.
  // Present = the daily research tool wrote this one — surfaced honestly
  // in the byline rather than implying a human wrote it, same standard
  // the rest of the site holds itself to.
  author?: string;
  references?: Reference[];
  // Set only on auto-generated posts whose photo generation succeeded —
  // a public path under /images/blog, same convention as the manual
  // posts' images map in page.tsx.
  image?: string;
};

// The hand-written posts. Auto-generated ones are never added here —
// the research tool writes a new file under ./posts/*.json instead, so
// it's appending a brand new file rather than editing shared source,
// which is the only way to make an unattended daily commit actually safe.
const manualPosts: Post[] = [];

// Each auto-generated post is its own JSON file (see PostsDirReadme.md),
// so writing a new one is a plain new-file commit — never a parse-modify-
// serialize round trip on source code the same tool could get wrong.
const generatedPostsDir = path.join(process.cwd(), "app/blog/posts");

function loadGeneratedPosts(): Post[] {
  if (!fs.existsSync(generatedPostsDir)) return [];
  return fs
    .readdirSync(generatedPostsDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => JSON.parse(fs.readFileSync(path.join(generatedPostsDir, file), "utf8")) as Post);
}

export const posts: Post[] = [...manualPosts, ...loadGeneratedPosts()].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);
