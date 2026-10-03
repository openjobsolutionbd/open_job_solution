# AGENTS.md

This file is for any AI agent/tool (Claude, ChatGPT/Codex, Cursor, Copilot, etc.) — read it before working in this repo.

> **Language note:** this file is written in English on purpose. It is agent-facing only (the project owner does not read it), and English costs far fewer tokens than Bengali. Keep it in English when editing. **Conversations with the user are a different matter — reply in the language the user writes in (currently Bengali), in plain wording (see the next section).**

**This file covers only the git/push/PR/merge workflow rules.** For project architecture, folder structure and data-format rules, see `_docs/job-app-MD.md` — the two documents complement each other; neither replaces the other. **`job-app-MD.md` is now split into 7 files** (to save tokens): always read the main file, then use its "Document index" table to read the matching file in `_docs/job-app/` for the task at hand (one file per section folder — e.g. `written-exam.md` for written-exam work, `bcs-mcq.md` / `primary-mcq.md` / `ministry-mcq.md` for the MCQ sections; every task needs exactly the main file plus its own section file — nothing else, and CI fails if one section file points into another) — do not start that kind of task without reading the matching part. The main file is in English; its prohibition block and checklist, and the `_docs/job-app/` parts, stay in Bengali. Editing `job-app-MD.md` (or its parts) is allowed only on the project owner's explicit instruction in chat — see the owner-approved-edit note inside the prohibition block.

## 🗣️ Talking to this user — no technical jargon

One user of this repo wants the git/GitHub technical words — **commit, push, PR, merge, branch** — kept out of the conversation. Instead, tell them in plain language just two things:

1. **Whether the data/changes they sent have reached the repo** (i.e. been saved on GitHub)
2. **Whether it is live on the site** (i.e. finally merged into `main` and reflected on the website)

The internal work (creating branches, opening PRs, validate checks, merging, etc.) goes on as usual — only the names/mechanics of those steps must not be told to the user. For example, say "আপনার পরীক্ষার ডেটা রিপোতে জমা হয়েছে, এখনো রিভিউ হচ্ছে — লাইভ হয়নি" ("your exam data has been saved to the repo, still under review — not live yet") or "ডেটা রিপোতে গেছে এবং এখন সাইটে লাইভ" ("the data is in the repo and now live on the site") — not "I pushed the branch" or "the PR was merged". Say it in Bengali, like those examples.

**Decisions: always show benefits and risks.** The owner is non-technical and makes the final call on every proposal himself, so he needs the trade-offs in a form he can scan. Whenever you propose something that needs his decision (a restructuring, a deletion, a new rule, a choice between options, anything that can go wrong), end your message with two short lists in plain Bengali — **✅ লাভ** and **⚠️ ঝুঁকি** (2–4 one-line bullets each, no jargon, say what it means for his work, not how the code works) — plus a one-line recommendation of what you would pick. Do this every time, without being asked; also state any risk you are accepting on your own. For a trivial, low-risk step a single line is enough.

## ⚠️ First step — mandatory before any task

**Run `bash _dev/scripts/session_status.sh` — do this first, before anything else.**

Why: the user regularly has **several Claude accounts and several chats working in this repo at the same time**. The local sandbox state may not match the conversation's current moment — the only thing that is always reliable is the remote state on GitHub. `session_status.sh` fetches the remote, compares local vs remote, shows stray/incomplete changes in the working directory, and also shows **a live list of all open branches + open/merged/abandoned PRs** — so if a task was already started or finished by another session you notice immediately and avoid duplicating it.

If the repo is not cloned yet (first time in this sandbox):
```bash
git clone https://github.com/openjobsolutionbd/open_job_solution.git
cd open_job_solution && bash _dev/scripts/session_status.sh
```

**Set the `GH_TOKEN` environment variable before running `session_status.sh`** (`export GH_TOKEN="<PAT>"`) — without it the GitHub API calls are unauthenticated and fail on rate limits.

## 🟢 Live activity feed (near-real-time coordination)

The repo has a **pinned GitHub Issue** (label: `activity-feed`, currently [#244](https://github.com/openjobsolutionbd/open_job_solution/issues/244)) that the `.github/workflows/activity-feed.yml` workflow updates automatically within seconds of any push to `main` — a new line (timestamp, commit link, message, author) is added at the top of the issue. Routine `chore: bump version` commits are not shown in the feed (to reduce noise).

- Running `session_status.sh` automatically shows the latest part of this feed — no need to open the issue separately.
- This is Git-push-based, so it is not a true push notification (no Claude session is actively "listening") — but any session that starts work (by running `session_status.sh`) immediately gets the most recent state, with no manual git-log digging.
- The issue keeps only the latest 40 entries on its own (the script trims older ones) — the issue body does not grow too large.
- The workflow's core logic is in `.github/workflows/scripts/update_activity_feed.py` (Python) — it takes input through environment variables instead of shell string interpolation, so the workflow doesn't break even if a commit message contains special characters.
- If the feed issue is ever accidentally closed/deleted: create a new issue, give it the `activity-feed` label, and keep the two markers `<!-- FEED-START -->` and `<!-- FEED-END -->` in the body (the workflow inserts entries between these markers) — the workflow finds the issue by label; the issue number is not hardcoded.

## 🔒 Claiming a work range (when several Claudes work in parallel)

When a specific part (e.g. 10 chapters of a book, or exam sequence 513–522) could be worked on in parallel from several Claude accounts/chats, the branch/PR list alone is not enough — someone may have started work without having pushed a branch yet. So a lightweight "claim" system is used, built on GitHub Issues (which, unlike branches/PRs, are not under `main` protection and can be opened/closed instantly):

1. **Before starting work**: check open issues with `label=claim` (`session_status.sh` output now shows these too). If your intended range/chapter overlaps one, skip that part and take a different one, or tell the user.
2. **Immediately when you start work** (before writing any code): open a new issue —
   - Title: `🔒 claim: <short scope>` (e.g. `🔒 claim: written-exam ক্রম ৫১৩–৫২২`, `🔒 claim: ৫০তম BCS পেজ ৩৬–৪৫`)
   - Body: exactly which range/file/exam is being worked on, plus date and time
   - Label: `claim`
3. **When the work is finished (merged or abandoned)**: close the issue right away — a stale open claim will confuse other sessions later.
4. If a claim has been open for a long time (more than a few hours) it may be stale/abandoned — don't overwrite it on your own guess; ask the user.

This system blocks nothing by force (GitHub has no automatic enforcement for it) — it is only a coordination signal, so it depends on every Claude session honestly following it.

## main branch is protected — no direct pushes

**`main` has been protected since 2026-08-20** (direct pushes used to work, now they don't). For every change:
1. Create a new branch (`git checkout -b <type>/<slug>` — e.g. `add/50th-bcs-pages-90-95`, `fix/spellcheck-bug`)
2. Commit the change and push that branch
3. Open a PR via the GitHub API (`base: main`)
4. Wait for the required status check named **`validate`** to pass (`.github/workflows/validate-data.yml` — runs `validate_data.js` + the Bengali spellcheck)
5. Check the PR's `mergeable_state` — if it shows `behind`, update the branch with `main` using `PUT /pulls/{number}/update-branch` before merging (the required check is in `strict` mode, so merging is blocked if the branch isn't up to date)
6. Squash merge

`enforce_admins: true` is set — even an admin/owner token cannot bypass these rules; GitHub rejects it even if someone accidentally pushes directly.

## 📚 When you add, remove or change a feature/folder/workflow/script — update the docs in the same PR

**This is not an optional step — it is a mandatory part of the change, just like the code.** It has happened repeatedly that a feature was added/removed/changed and merged, but no document reflected it — so the next session (or even the user) could not tell what exactly had changed.

`check_docs_consistency.js` (part of the `validate` required check) automatically catches:
- more than one `job-app-MD*.md` file being created
- a root-level folder not mentioned in `job-app-MD.md`
- the split structure of `job-app-MD.md` breaking: any of the 6 part files in `_docs/job-app/` missing/extra, any section heading (§1–§17, §5-ক, §5-খ, §9-ক, Version History, prohibition block, checklist, index) lost or present in more than one file, a part file not mentioned in the index, a section file that refers to a section living in another section file, a reference to a non-existent `job-app/<name>.md` file, or the "⛔ কঠোর নিষেধাজ্ঞা" (strict prohibitions) block moved out of the main file (an oversized file only produces a warning, it does not fail)
- the PWA rule being broken: a top-level HTML page without `<link rel="manifest" href="/manifest.json">`, or any page linking a manifest other than the root one
- a new `.github/workflows/*.yml` file not mentioned in `AGENTS.md`
- a new helper script (top level of `_dev/`, `_dev/scripts/`, `.github/workflows/scripts/`) not mentioned in `AGENTS.md`

**Limitation:** this script check scans only the three central dev-tooling folders above. Dev-tool scripts that live mixed inside a module's own folder (written-exam/, bcs-mcq/, etc.), such as `written-exam/check_bugs.js`, `written-exam/generate_index.js`, `written-exam/check-spelling.js`, **are not covered by the automated check** — those folders also contain product source code (renderer.js, sw.js, etc.) that need not be documented, and scanning every file automatically would produce false positives. So when you add a new dev-tool script (bug checker, spellcheck, index generator, etc.) to a module folder, remember to add it manually to the file table of the relevant section in `job-app-MD.md` — the automated check will not catch it.

**But this automated check only catches "no mention at all" — if a file's name is mentioned, it passes even if the description is outdated or wrong.** So when a feature's *behavior* changes (e.g. a button now does something new, a workflow's trigger condition changed, a folder's purpose changed completely), the automated check will not catch it — you must remember to update the docs yourself:

1. Is anything a new/changed/removed root-level folder, workflow, or script? → add/update/remove it in the file-structure table of `AGENTS.md` (below) and/or in `job-app-MD.md`.
2. Did a feature's behavior change without its name changing? → update the prose of the relevant document — an existence check will not catch this.
3. If a feature/system is removed entirely → don't just delete the code/data; also remove its documentation mentions (even "this used to exist, it was deleted" historical notes, unless the user explicitly wants them) in the same PR — otherwise the next session will be confused into thinking it still exists or should exist.

Right before opening a PR, ask yourself: *"After this change, can someone reading `AGENTS.md` or `job-app-MD.md` still understand the real state correctly?"* — if the answer is "no", do not merge the PR without updating the docs.

## 🔄 The repo updates often — re-check right before every push

Because several sessions/accounts work in parallel, `main` can move ahead between creating a branch and finishing the work — even several times within a single task. So checking once at the start is not enough; verify again **at every push/merge step**:

1. **Before creating a branch**: run `session_status.sh` (the mandatory step above).
2. **Right before pushing** (after editing is done): run `git fetch origin main`. If the remote is ahead, run `git rebase origin/main` before pushing — resolve any conflicts; don't blindly take one side. **Exception:** if it is not a true content conflict but just two sessions adding different new items in the same place (e.g. two new entries in the same exam-archive.js), it is fine to merge them yourself by keeping both (sorted by id/date) — no need to ask the user. For a true content conflict (two different values on the same line/field), don't guess which side to keep — show the user the conflict and both sides' changes and ask.
3. **After a rebase involving data files (`written-exam/data/exams/*.json`, `exam-archive.js`, `PROGRESS.md`, etc.)**: if you wrote any number/count/summary (e.g. "X exams total, Y questions"), **recount it with a script** to confirm it is still correct — data added by another session can get merged in by the rebase and change the numbers (this has happened twice before).
4. **After opening the PR, right before merging**: re-check the PR's `mergeable_state`. If it shows `behind` or `dirty`, rebase (or `PUT /pulls/{number}/update-branch`) and push again; do not merge until it is `clean`. Also confirm one last time, right before merging, that the required check (`validate`) has passed.
5. After a rebase, **always push with `git push --force-with-lease`**, never `--force` — to avoid accidentally overwriting someone else's work.

In short: "I did check a moment ago" is not enough. The repo changes so often that it must be verified freshly at the very moment before each push/merge.

## ⚡ Saving context tokens

Never `view`/`cat` big files in full (`bcs-mcq`/`mcq-job-solution` (primary-mcq, ministry-mcq) data, `PROGRESS.md`). (`written-exam/data/exams/*.json` is now one small file per exam, so a full `view` of those is fine — the single large combined `job-solution.js` file was removed.)

- To find things: `grep -n` → then `view_range` using the line numbers found
- To edit: `str_replace` (short, unique `old_str`)
- To add: check the end with `tail -N`, then append with bash (`cat >>`/heredoc) — without reading the whole file
- To count: `grep -c` / `grep -n`, never a full `view`
- When there is work in several places: run all the `grep`s first to find the ranges, then make targeted `view` calls

## Token (GitHub Personal Access Token)

- There is no direct-push shortcut now (since protection was enabled) — a token with **Contents: Read & Write** and **Pull requests: Read & Write** permissions is still needed to create/merge PRs
- Try to use a fine-grained PAT and, when creating the token, make sure **both Contents and Pull requests are "Read and write"** — don't trust only the repo-level `"push": true` in the API response; verify with a small write test (e.g. try creating a dummy branch)
- When the work is done, remind the user to delete the token
- Once a token is given in chat, use it for the whole session — don't ask for it repeatedly; only tell the user when it expires or there is an auth error
- For long import jobs spread over several sessions, ask the user for a **separate, short-lived fine-grained token limited to this repo**, not a long-lived classic token. A token pasted in chat should be treated as exposed: at the end of every session tell the user to revoke it, and never write the token into any file, commit message or remote URL (strip it from the remote URL after pushing)

## File structure (summary)

| Path | What |
|---|---|
| `_dev/scripts/session_status.sh [scope]` | First command of every new task — local/remote/uncommitted state, branch-based conflict risk (works without the API), PRs/`claim`s/feed (when the API is available), scope matching and a 🚦 summary at the end. Analysis: `session_status_report.py` |
| `_dev/scripts/current_affairs_health_check.py` | Daily automated health check of current-affairs' `docs/` (build output): stale domains, broken JSON, cache-scope bugs |
| `_dev/scripts/doc_staleness_check.py` | Weekly automated check of `current-affairs/`'s `AGENTS.md`, `EDITORIAL_MEMORY.md` and `PR_GUIDE.md` for broken references/stale snapshots/undocumented scripts/size limits — it never deletes prose itself, only reports in an Issue |
| `current-affairs/docs/` | Build output (generated by `build_index.py`). Since 2026-09 the standalone `open_current_affairs` repo has been brought into this monorepo via a subtree merge and is edited directly here — the old `sync-to-job-solution.yml` workflow is retired; there is no need to fix things in a separate source repo |
| `_staging/books-staging/` | Planning/design notes for the "বই সমূহ" (Books) feature (README + BOOKS_NOTES.md) |
| `_dev/validate_data.js` | Question-data validation — the `validate` job of `.github/workflows/validate-data.yml` runs it; a required PR check. It catches duplicate ids, duplicate question+options, duplicate explanations (within our own database) — but **cannot detect matches with other websites** (see the section below) |
| `_dev/check_docs_consistency.js` | Keeps the governance docs from drifting away from the repo's real state — runs six structural checks: duplicate master-doc files, unmentioned root folders, unmentioned `.github/workflows/*.yml`, unmentioned scripts in `_dev/` + `.github/workflows/scripts/`, whether the split structure of `job-app-MD.md` (`_docs/job-app/`) is intact, and the PWA rule (every HTML page near the top level links the one root `/manifest.json`; none links another manifest). Part of the same `validate` job, a required PR check. It only catches structural drift (a name is mentioned or not), not the correctness of prose or behavior changes — humans/AI still have to re-verify those from time to time |
| `_dev/explanations.js` + `_dev/explanations.json` | The bcs-mcq explanation database. `lookup` finds already-verified/existing explanations for new questions and catches answer mismatches; `check` compares the DB's answers against the data files; `add <id> [--verified --source URL]` puts a source-verified explanation into the DB. `verified:true` only after source/mathematical verification — explanations written from a guess are `false`. Existing explanations are not copied into the DB (the data files remain the original source) |
| `_dev/check-spelling.js` | Bengali spellcheck for bcs-mcq/data/*.js (advisory — failing does not block the PR) |
| `_dev/update_version.py` | Helper for `auto-bump-version.yml` — increments the version number after each merge. If a pattern doesn't match in a file it fails without writing anything. Run with `--check` it only verifies that the version is the same everywhere — the `validate` job of `validate-data.yml` (a required check) runs this |
| `written-exam/check-spelling.js` | Bengali spellcheck for written-exam/data/exams/*.json (advisory, same as `_dev/check-spelling.js` but for a different module) |
| `.github/workflows/pr-check.yml` | When a PR is opened/updated for current-affairs (paths filter): generated-file guard + conflict check + build+verify+integration-guard+test suite. After the 2026-09 subtree merge it sat in a wrong path (`current-affairs/.github/workflows/`) and never ran — this migration bug has been fixed by moving it back to the root |
| `.github/workflows/update-wiki.yml` | On a push to current-affairs, regenerates the generated output (topics-index.json, sw.js, version.json, etc.) and goes branch→PR (using `OJS_BOT_TOKEN`, following the `auto-bump-version.yml` pattern since main is branch-protected)→merge. It too had been stuck in the wrong path from the same migration bug; moved back to the root |
| `.github/workflows/auto-bump-version.yml`, `current-affairs-health-check.yml`, `current-affairs-docs-staleness.yml`, `validate-data.yml`, `activity-feed.yml` | Existing automated workflows |
| `.github/workflows/live-site-check.yml` | Every 3 hours, fetches all version files from the live site (`ojsapp.pages.dev`) and compares them with `_docs/version.txt` (`update_version.py --check-live`); opens an Issue if the deploy is stuck and closes it by itself once fixed. Needs no secret keys |
| `.github/workflows/scripts/update_activity_feed.py` | Helper for `activity-feed.yml` — updates the pinned live activity-feed issue |
| `.github/workflows/written-exam-currency.yml` | Weekly, and whenever topics change, watches written-exam's `data/current-status.json` (`written-exam/check_currency.js`); opens an Issue when the "current facts" of current affairs change, a linked verified-facts row changes (`facts` link in `current-status.json`) or a review date passes; on PRs it only checks structure; it never changes answers by itself |
| `_dev/scripts/verified_facts.js` (+ `verified_facts.test.js`) | Helper for the verified-facts ledger: `--render` builds `_docs/verified-facts.md` from `_docs/verified-facts.json`, `--check` validates the JSON and fails if the `.md` was hand-edited, `--due` lists rows whose re-verify date has passed (plus the written-exam questions that depend on them), `--update <id> --status "..."` changes a row after a human-supervised verification (date = today) and re-renders the `.md`. It never searches the web and never changes a fact by itself |
| `.github/workflows/verified-facts-watch.yml` | On PRs/pushes touching the ledger: structure + `.md`-in-sync check. Weekly: opens/updates an Issue (label `verified-facts-due`) when a row's re-verify date has passed, and closes it when none are left. Only reports — it never searches the web or changes an answer |

## 📝 When adding new MCQs/explanations — duplicate-content risk

The site is indexed by Google and monetized (AdSense-style), so "duplicate/thin content" is not just a code-quality matter — it is a direct risk to the site's revenue.

**What happened (for reference):** after explanations for new 28th BCS questions were written from general knowledge, they turned out to have significant sentence-level similarity with popular sites such as sattacademy.com and myexaminer.net — because everyone describes the same common historical/textbook facts in nearly the same words. This is a general risk in this niche (BCS/government-job MCQs).

**What to do when adding new questions/explanations:**

0. **Check the explanation DB first** — put the new questions into a JSON file of `[{question, options, correctIndex}]` and run `node _dev/explanations.js lookup <file.json>`. ✅ verified explanation exists → use it; 🟡 unverified → check the facts before reusing; ⚠️ answer mismatch → the existing entry may be wrong (a wrong correctIndex was caught this way before) — fix it from the source; ❌ → write it yourself following the rules below. Put source-verified explanations into the DB with `node _dev/explanations.js add <id> --verified --source <URL>`, and run `node _dev/explanations.js check` before pushing.
1. **Change the explanation-writing style** — don't write only in the "correct answer is X, because Y" format; write in a reasoning/elimination style: why the correct option is correct, and why 1-2 of the other options may look wrong/misleading. This makes it structurally different from fact-dump-style sites, and is also more useful to the learner.
2. **Spot-check by searching when in doubt** — quote a part of the new explanation (a specific phrase of 8-12 words) in a web search and see whether identical/near-identical text exists on other sites. You don't need to search every question one by one — a few samples per subject are enough to see the pattern.
3. **Run `node _dev/validate_data.js` before pushing** — it catches duplicate ids/questions/explanations within our own database (it also runs as a required PR check in the `validate-data.yml` workflow). But remember this script **cannot detect matches with external sites** — humans/AI must spot-check that (step 2).

**Explanation DB is options-aware.** Two different questions can have the identical question text but different options (e.g. "কোন বাক্যটি শুদ্ধ?"). `node _dev/explanations.js add` therefore stores the `options` with every DB entry, and `lookup`/`check` match on question text **and** options (an entry saved without options is matched by question text, and is accepted if at least one same-text question has the stored answer). Never reword a question just to dodge a false "answer mismatch" — run `check` and fix the script/DB entry instead.

**Marking weakly-sourced explanations.** If an answer or explanation rests on only one or two sources, or the sources disagree, save it with `node _dev/explanations.js add <id> --note "<why it needs more checking>"` (without `--verified`) so the next session knows it is unverified.

### Importing questions from a scanned PDF (page order is not trustworthy)

Scanned question-bank PDFs (e.g. "১০–৫০তম বিসিএস বাংলা প্রশ্নের সমাধান") often have pages out of order, a continuation page *before* its header page, missing middle pages, duplicated pages and misprinted dates. So:

1. **Never decide which exam a question belongs to from page layout alone.** Confirm the exam by matching at least one distinctive question against an online solved paper, then set the `exam` field.
2. If the printed answer key is blank, unreadable or clearly wrong, do **not** import the question; record it under the "বাদ / নোট" column of the tracker instead.
3. Import only what the PDF actually contains (an incomplete exam is imported as-is), and check every new question against all existing subject files first (`lookup`) — another session may have imported the same exam in parallel.
4. Keep the import tracker (`_docs/bcs-mcq-bangla-import-tracker.md`) updated in the same PR as the data, so the next session can resume from it.
5. **Add the batch with `node _dev/import_batch.js <batch.json> --exam "<exam name>"`** (use `--dry` first) instead of editing `bangla.js` by hand. It assigns ids after the file's current highest id, skips questions that already exist (same text **and** same options) in any subject file, rejects malformed entries, and appends in the file's one-line format. Run it right after fetching the latest `main`, then run `node _dev/validate_data.js`, so parallel sessions do not collide on ids.

## ✍️ Filling in information that is not in the source — when you may write it and when not

**What happened (for reference):** for the `tech-edu-cashier` exam, qno 10 (a paragraph-writing question), the original book had no model answer, but a session wrote an answer on its own. It was caught later and reverted (#238), and settled as "no model answer" (#240, details in `written-exam/PROGRESS.md`).

**Rule — when the source (question paper/book) lacks some information:**

1. **If it is objectively derivable (exactly one correct answer can be worked out)** — e.g. solving a math problem, translation, grammar correction, factual questions like dates/definitions — it is fine to solve/compute it correctly yourself and write the answer. This is not fabrication, because it is verifiable.
2. **If it is subjective/open-ended (no single "correct" answer)** — e.g. writing a paragraph/essay, a model answer for letter-writing, opinion-based questions — and the source has no model answer, **you must not write one yourself and present it as "the correct answer".** That is fabrication — an examinee may wrongly believe it is the original book's answer.
3. **If numeric metadata (marks) is unclear** — **leave it blank, do not guess, and do not even ask the project owner about it.** It is not a foundational field (see `_docs/job-app/written-exam.md` Section ৬ — the foundational fields are only ministry/post/date/qno), so totalMarks/marks being absent is no concern of the owner's at all. This is the owner's explicit, final decision (2026-08-30, recorded in `written-exam/PROGRESS.md`) — don't annoy them by bringing it up again.
4. **In any case of doubt (about anything other than marks):** leave it blank/absent and tell the project owner — being openly "don't know" is better than "solving" it by putting in a guess.

## 🔎 Before and after searching time-sensitive facts — `_docs/verified-facts.md`

Current office-holders, numbers, rankings, recent events — these must be verified by web search, and re-searching the same fact again and again wastes time. So the repo has a ledger of verified facts: [`_docs/verified-facts.md`](./verified-facts.md). **The source of truth is [`_docs/verified-facts.json`](./verified-facts.json)** — the `.md` is generated from it (never hand-edit the `.md`; the `verified-facts-watch.yml` check fails the PR if it drifts). Change a row with `node _dev/scripts/verified_facts.js --update <id> --status "..." [--source "..."] [--review YYYY-MM|fixed|always]` (sets the date to today and re-renders), or edit the JSON and run `--render`.

1. **Before searching**, check this file. If the fact is there and its "পুনর্যাচাই" (re-verify) date has not passed — no new search is needed.
2. **When you verify something by search**, add or update that row (don't keep two rows for the same topic — change the earlier one). Each row has an `id`, the fact, the date, the source and the re-verify date (`review`: `YYYY-MM`, `fixed` = never changes, `always` = re-search every time, e.g. frequently-changing office-holders). A weekly Action reports rows whose re-verify date has passed — it only reports; verifying and changing happens in a Claude session in front of the owner.
3. **If it could not be verified**, write the fact in the "অযাচাই" (unverified) section; don't put a guess into a row.
4. When putting a ledger fact into a question's answer, match the question's year/context — a year-specific question's answer must carry that year's fact.
5. No separate "current status" note is kept below a question; there is a single answer, directly in `data/exams/*.json` (decision 2026-09-30, `written-exam/data/TIME_SENSITIVE_TRACKER.md`).
6. **Question ↔ fact link:** a written-exam question that depends on a ledger row gets `"facts": ["<id>"]` in `written-exam/data/current-status.json` (see `TIME_SENSITIVE_TRACKER.md`). When the row's status changes, `check_currency.js` raises `FACT_CHANGED` for exactly those questions. Do not link year-specific questions (e.g. "2025-26 budget") — they keep that year's answer. For BCS MCQ, the exam's options stay as they were; put the current fact in the explanation.

No hand-written commit/PR status is kept in this file — it goes stale quickly and spreads wrong information. Always verify the real state from `bash _dev/scripts/session_status.sh`.
