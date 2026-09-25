# GLOSSARY.md

Terms and concepts explained along the way, for quick reference.

- **Branch** — a separate copy of the codebase where changes can be made without touching the official version.
- **`main`** — the conventional name for a repo's official/default branch, the one everything else is compared against and merged into.
- **PR (pull request)** — a proposal on GitHub to merge one branch's changes into another (usually `main`). Shows the diff, allows review/comments and automated checks, before merging.
- **Cloudflare Worker** — a small backend program that runs on Cloudflare's servers instead of your own (no server to manage). Used for the lead-pipeline's background processing, separate from the portal's own website hosting.
- **Cron Trigger** — a schedule (e.g. "every day at 6am") that fires a Worker automatically, without anything else asking it to run.
- **Queue** — a to-do list a Worker feeds itself: instead of trying to process everything in one go, it drops individual jobs (e.g. "handle this one town") onto a queue, and separate Worker runs pick them off one at a time. Keeps any single run small and lets failed jobs retry without redoing everything else.
- **RLS (Row Level Security)** — a Postgres/Supabase feature that restricts which rows of a table a given login can see or change, enforced by the database itself rather than trusted to app code.
- **Service-role key vs anon key** — Supabase gives you two kinds of API key: the anon key is safe to use in a browser and is still restricted by RLS; the service-role key bypasses RLS entirely and must never leave your backend (only the pipeline Worker uses it, never the portal's browser-facing code).
