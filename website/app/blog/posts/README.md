# Auto-generated blog posts

Each file here is one post, written by the daily content-radar research job
(see the `reyse-portal` repo's worker). `app/blog/data.ts` loads every
`*.json` file in this directory at build time and merges it with the
hand-written posts in that file, sorted by date.

Adding a post is always a **new file** — nothing here is ever edited by the
tool once committed, so there's no risk of a bad automated run corrupting an
existing post or another post's entry.

## File naming

`<slug>.json`, where `<slug>` matches the `slug` field inside — e.g.
`google-algorithm-update-march-2027.json`.

## Shape

Matches the `Post` type in `../data.ts`:

```json
{
  "slug": "example-post",
  "title": "Post title",
  "excerpt": "One or two sentences shown on the blog index.",
  "date": "12 March 2027",
  "readingTime": "3 min read",
  "author": "Reyse Radar",
  "body": [
    { "type": "p", "text": "A paragraph." },
    { "type": "h2", "text": "A subheading." },
    { "type": "list", "items": ["A bullet.", "Another bullet."] }
  ],
  "references": [
    { "label": "Source article title", "url": "https://example.com/article" }
  ]
}
```

`author` should always be set for an automated post (e.g. `"Reyse Radar"`),
never left blank and never set to `"Morgan King"` — the byline on the blog
page renders whatever `author` says, so this is the only thing that keeps
an AI-written post from silently reading as if a person wrote it by hand.
