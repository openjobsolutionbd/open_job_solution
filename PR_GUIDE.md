# PR_GUIDE.md

**কবে পড়বেন:** নিজের branch তৈরি → push → PR খোলা → merge → branch-cleanup — এই ধাপগুলোর ঠিক আগে/সময়। কনটেন্ট এডিট করার সময় এই ফাইল পড়ার দরকার নেই, শুধু push-এর ধাপে আসলেই পড়ুন। মূল নিয়মের জন্য আগে `AGENTS.md` পড়া থাকা আবশ্যক (বিশেষত "🔒 সর্বোচ্চ-অগ্রাধিকার নীতি" ও "গুরুত্বপূর্ণ সতর্কতা" সেকশন — "rebase-conflict নিয়ম" এখানে বারবার রেফার করা হয়েছে)।

ব্যবহারকারী একই সাথে একাধিক Claude account/চ্যাট থেকে এই রিপোতে কাজ করান। তাই `main`-এ সরাসরি push না করে, প্রতিটা সেশন নিজের branch-এ কাজ শেষ করে PR খোলে; GitHub স্বয়ংক্রিয়ভাবে গঠন ও সংঘর্ষ চেক করে; সেই PR-এর পরিবর্তন যে সেশনেই জিজ্ঞেস করা হোক না কেন Claude নিজে পড়ে সহজ বাংলায় ব্যাখ্যা করে। নিচে ধাপে ধাপে কমান্ড।

**merge-অনুমোদনের অপেক্ষা এখন নেই (২০২৬-০৮-১৫ থেকে)।** এটা কোড-লেভেলে জোর করা যায় না (GitHub-এর "approve" ফিচার ব্যবহার করতে দ্বিতীয় অ্যাকাউন্ট লাগত), তাই লিখিত নিয়মের ওপরই নির্ভরশীল — কিন্তু মূল সংঘর্ষ-প্রতিরোধ ব্যবস্থা (branch protection, বাধ্যতামূলক PR) এতে অপরিবর্তিত, সেটা প্রযুক্তিগতভাবেই বাধ্যতামূলক। বর্তমান নিয়ম:

- **নিচের সবগুলো শর্ত সত্যি হলে সরাসরি merge করুন, অনুমতি চাইবেন না — শুধু ফলাফল জানিয়ে দিন:**
  1. `preflight.sh` ক্লিন পাস করেছে (build+verify+py-test)।
  2. GitHub-এর স্বয়ংক্রিয় PR-চেক (`pr-check.yml`) কোনো সমস্যা/কমেন্ট দেয়নি এবং `mergeable: true` / `mergeable_state: clean`।
  3. কোনো rebase-conflict থাকলে তা `AGENTS.md`-এর "গুরুত্বপূর্ণ সতর্কতা"-র "rebase-conflict নিয়ম" অনুযায়ী মীমাংসিত (নিজে অনুমান করে না, বা তার ব্যতিক্রম-শর্তে)।

  এটা `AGENTS.md`/`scripts/*`/`.github/workflows/*`-এ বদল, existing কনটেন্ট মোছা/replace করা, এবং content-সংযোজন — সব ধরনের PR-এর জন্যই প্রযোজ্য। "নতুন সংযোজন" বনাম "existing কনটেন্ট বদল" — এই পার্থক্যটা এখন merge-অনুমোদনের ক্ষেত্রে আর প্রাসঙ্গিক না (commit message-এ স্পষ্ট বিবরণ থাকা এখনো জরুরি, যাতে PR history থেকে বোঝা যায় কী বদলেছে)।

- **ব্যতিক্রম — এখনো স্পষ্ট অনুমতি লাগবে:**
  1. `preflight.sh` ব্যর্থ হলে, বা স্বয়ংক্রিয় চেক কোনো সমস্যা/কমেন্ট দিলে, বা `mergeable` `true`/`clean` না হলে — এসব ক্ষেত্রে সমস্যাটা আগে ঠিক করুন বা ব্যবহারকারীকে জানান।
  2. rebase-conflict-এ `AGENTS.md`-এর "rebase-conflict নিয়ম" অনুযায়ী যেসব ক্ষেত্রে স্পষ্ট নির্দেশনা লাগে (প্রকৃত বিষয়বস্তু-দ্বন্দ্ব)।
  3. যেকোনো সন্দেহ/দ্বিধা থাকলে — নিরাপদ দিকে থেকে অনুমতি চাওয়াই সঠিক পথ (`AGENTS.md`-এর "🔒 সর্বোচ্চ-অগ্রাধিকার নীতি" অনুযায়ী)।

**টোকেন-ব্যবহারের নিয়ম অপরিবর্তিত:** ব্যবহারকারীর দেওয়া অস্থায়ী PAT `http.extraheader`-এ শুধু চলতি কমান্ডের জন্য বসান (কখনো `git remote set-url`-এ না, `.git/config`-এ যেন থেকে না যায় তা প্রতিটা push/API-কলের পর `grep -i authorization .git/config` বা সমতুল্য দিয়ে যাচাই করুন)। এবারের PAT-এ শুধু "Contents" না, **"Pull requests" স্কোপও লাগবে** (branch push, PR তৈরি/লিস্ট/মার্জ — চারটাই)।

**১. নিজের branch বানানো ও কাজ করা**
```bash
git checkout -b work/2026-08-11-short-topic-slug   # তারিখ + সংক্ষিপ্ত-বিষয়
# ... এডিট ...
bash scripts/preflight.sh   # build+verify পাস কিনা লোকালি নিশ্চিত করুন
bash scripts/safe_add.sh    # git add -A + auto-generated ফাইল (GENERATED_PREFIXES) স্বয়ংক্রিয়ভাবে বাদ — খালি "git add -A" ব্যবহার করবেন না
git commit -m "বাংলায় স্পষ্ট বার্তা"
```

**২. branch পুশ করা (main না, নিজের branch) — Basic auth ব্যবহার করুন, Bearer token দিয়ে push কাজ করে না**
```bash
B64=$(printf "x-access-token:%s" "$PAT" | base64 -w0)
git -c http.extraHeader="Authorization: Basic $B64" push origin work/2026-08-11-...
```

**৩. PR খোলা**
```bash
curl -s -X POST \
  -H "Authorization: Bearer $PAT" -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/openjobsolutionbd/open_current_affairs/pulls \
  -d '{"title":"সংক্ষিপ্ত বাংলা শিরোনাম","head":"work/2026-08-11-...","base":"main","body":"কী বদলেছে — বাংলায় ২-৩ লাইন"}'
```
রেসপন্সের `"number"` ফিল্ডটাই PR নম্বর — ব্যবহারকারীকে সেটা জানান।

**৪. ব্যবহারকারীকে জানানো (এই ধাপেই preflight-এর মতো টেকনিক্যাল আউটপুট কপি করবেন না)** — "PR #N খোলা হয়েছে — [সহজ ভাষায় কী বদলেছে]। স্বয়ংক্রিয় চেক শেষ হতে ~১ মিনিট লাগবে।" চেক পাস হওয়ার পর (auto-merge শর্ত পূরণ হলে) সরাসরি merge করে শুধু জানিয়ে দিন কী merge হলো — অনুমতি চাইবেন না।

**৫. যেকোনো সেশনে "কী কাজ পেন্ডিং আছে" জিজ্ঞেস করলে — সব খোলা PR দেখানো**
```bash
curl -s -H "Authorization: Bearer $PAT" -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/openjobsolutionbd/open_current_affairs/pulls?state=open"
```
প্রতিটার আসল পরিবর্তন দেখতে (raw diff পাওয়া যায়, `.diff` ফরম্যাটে):
```bash
curl -s -H "Authorization: Bearer $PAT" -H "Accept: application/vnd.github.v3.diff" \
  "https://api.github.com/repos/openjobsolutionbd/open_current_affairs/pulls/<PR_NUMBER>"
```
স্বয়ংক্রিয় চেক কোনো সমস্যা পেলে সেটা কমেন্ট আকারে থাকে (দেখুন `pr_checks.py`):
```bash
curl -s -H "Authorization: Bearer $PAT" -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/openjobsolutionbd/open_current_affairs/issues/<PR_NUMBER>/comments"
```
diff নিজে পড়ে ব্যবহারকারীকে সহজ বাংলায় জানান (কোন টপিকে কী যোগ/বদল হলো) — raw diff/JSON কখনো সরাসরি দেখাবেন না।

**৬. auto-merge শর্ত (preflight ক্লিন + PR-চেক ক্লিন + mergeable) পূরণ হলে সরাসরি merge**

merge করার ঠিক আগে `mergeable_state` চেক করুন। `behind` দেখালে (main এগিয়ে গেছে, যেমন এই ফাঁকে অন্য একটা PR merge হয়েছে) — নিজে `git merge origin/main` করে আবার push করার বদলে GitHub-এর নিজস্ব API ব্যবহার করুন (এটাই `sync-to-job-solution.yml`-এ ব্যবহৃত, ব্যাটল-টেস্টেড পদ্ধতি — কম ধাপে, কম ভুলের সুযোগ):

```bash
curl -s -X PUT \
  -H "Authorization: Bearer $PAT" -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/openjobsolutionbd/open_current_affairs/pulls/<PR_NUMBER>/update-branch"
# কয়েক সেকেন্ড পর আবার mergeable_state চেক করুন, 'clean' না হওয়া পর্যন্ত দরকার হলে পুনরাবৃত্তি করুন
```

`clean` হলে তবেই merge করুন:
```bash
curl -s -X PUT \
  -H "Authorization: Bearer $PAT" -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/openjobsolutionbd/open_current_affairs/pulls/<PR_NUMBER>/merge \
  -d '{"merge_method":"squash"}'
```
merge ব্যর্থ হলে (checks এখনো শেষ হয়নি, বা conflict) response-এর `"message"` পড়ে ব্যবহারকারীকে সহজ ভাষায় জানান, নিজে থেকে force করার চেষ্টা করবেন না। **সত্যিকারের git conflict** (`update-branch` ব্যর্থ হয়ে "merge conflict" জাতীয় বার্তা দিলে) — সেক্ষেত্রেই শুধু নিজে `git fetch`+`git merge origin/main` করে conflict resolve করতে হবে, নিচের নিয়ম অনুযায়ী।

**৭. merge সফল হলে branch মুছে ফেলুন (পরিষ্কার রাখতে)**
```bash
curl -s -X DELETE -H "Authorization: Bearer $PAT" \
  https://api.github.com/repos/openjobsolutionbd/open_current_affairs/git/refs/heads/work/2026-08-11-...
```
merge-এর পর `main`-এ push হওয়ার কারণে `.github/workflows/update-wiki.yml` নিজে থেকেই generated output রিবিল্ড করে **সরাসরি `main`-এ commit করে দেয়** (২০২৬-০৯-২০ থেকে) — আলাদা কোনো rebuild PR খোলে না, তাই merge করার মতো বাড়তি কিছু নেই। ১–২ মিনিট পর `main`-এ `github-actions[bot]`-এর `chore: rebuild generated site output + bump version to …` commit দেখা গেলে বুঝবেন লাইভ সাইট হালনাগাদ হয়েছে; না দেখা গেলে Actions-এ `Update wiki index` run দেখুন।

**যদি PR-এ real git conflict দেখায়** (দুইটা branch একই লাইনে ভিন্ন পরিবর্তন করেছে — GitHub-এর `mergeable: false`): নিজে অনুমান করে কোনটা রাখবেন ঠিক করবেন না, `AGENTS.md`-এর "rebase-conflict নিয়ম"-এর ব্যতিক্রম-নিয়ম মেনে চলুন। Auto-generated ফাইলে conflict কখনো হাতে মার্জ করবেন না — merge-এর পর `main`-এ `build_index.py` এমনিতেই আবার চালাবে।

**৮. পুরনো/জমে-থাকা branch পর্যায়ক্রমিক পরিষ্কার (session_status.sh-এর পাশাপাশি, নিয়মিত করণীয়):** আইটেম ৭-এ প্রতিটা merge-এর পরপরই branch মুছার কথা থাকলেও, ব্যস্ত সময়ে বা একাধিক সমান্তরাল সেশনে এই ধাপ মিস হয়ে যেতে পারে, ফলে merged হয়ে যাওয়া অনেক branch remote-এ জমে থাকতে পারে। তাই মাঝেমধ্যে (ব্যবহারকারী নিজে জিজ্ঞেস করলে, বা `git branch -r`-এ বেশ কিছু অপ্রত্যাশিত branch দেখলে) এই সুইপ চালান:
```bash
git fetch --all --prune
git branch -r | grep -v "HEAD\|main\|auto/rebuild-output"
```
প্রতিটা বাকি branch-এর জন্য GitHub API দিয়ে সংশ্লিষ্ট PR-এর `merged_at` সত্যিই পূরণ (null না) কিনা যাচাই করে তবেই মুছুন:
```bash
curl -s -H "Authorization: Bearer $PAT" -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/openjobsolutionbd/open_current_affairs/pulls?state=closed&per_page=50"
```
- `merged_at` থাকলে (সত্যিই merge হয়েছে) → branch মুছে ফেলুন (আইটেম ৭-এর DELETE কমান্ড)।
- `merged_at` null থাকলে (PR বন্ধ হয়েছে কিন্তু merge হয়নি) → মুছবেন না, ব্যবহারকারীকে জানিয়ে জিজ্ঞেস করুন কী করতে চান।
- `auto/rebuild-output` কখনো এই সুইপে মুছবেন না — এটা পুরনো নকশার (২০২৬-০৯-২০-এর আগের) rebuild-PR branch; এখন আর ব্যবহার হয় না, তবে কোথাও থেকে গেলে না ঘেঁটে যেমন আছে তেমন রাখুন।
- মুছার পর প্রতিবার leak-check চালান: `grep -i "ghp_\|Authorization" .git/config`।

