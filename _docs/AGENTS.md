# AGENTS.md

এই ফাইলটা যেকোনো AI এজেন্ট/টুলের জন্য (Claude, ChatGPT/Codex, Cursor, Copilot ইত্যাদি) — এই রিপোতে কাজ করার আগে এটা পড়ে নিন।

## ⚠️ প্রথম ধাপ — যেকোনো কাজ শুরুর আগে বাধ্যতামূলক

**`bash _dev/scripts/session_status.sh` চালান — এটাই সবার আগে করুন, অন্য যেকোনো কিছুর আগে।**

কারণ: ব্যবহারকারী নিয়মিত **একাধিক Claude অ্যাকাউন্ট এবং একাধিক চ্যাট থেকে একই সময়ে এই রিপোতে কাজ করান**। local sandbox-এর অবস্থা কথোপকথনের এই মুহূর্তের সাথে নাও মিলতে পারে — একমাত্র জিনিস যেটা সবসময় নির্ভরযোগ্য তা হলো GitHub-এর remote অবস্থা। `session_status.sh` remote ফেচ করে, local-remote তুলনা করে, working directory-তে stray/অসম্পূর্ণ পরিবর্তন আছে কিনা দেখায়, এবং **সব খোলা branch + খোলা/merge/abandoned PR-এর লাইভ তালিকাও** দেখায় — যাতে কোনো টাস্ক অন্য সেশন থেকে ইতিমধ্যে শুরু বা শেষ হয়ে গিয়ে থাকলে সেটা সাথে সাথে ধরা পড়ে, পুনরাবৃত্তি না ঘটে।

repo এখনো ক্লোন করা না থাকলে (প্রথমবার এই sandbox-এ):
```bash
git clone https://github.com/openjobsolutionbd/open_job_solution.git
cd open_job_solution && bash _dev/scripts/session_status.sh
```

## main branch protected — সরাসরি push করা যায় না

**২০২৬-০৮-২০ থেকে `main` branch protected** (আগে সরাসরি push করা যেত, এখন যায় না)। প্রতিটা পরিবর্তনের জন্য:
1. নতুন branch বানান (`git checkout -b <type>/<slug>` — যেমন `add/50th-bcs-pages-90-95`, `fix/spellcheck-bug`)
2. পরিবর্তন কমিট করে সেই branch push করুন
3. GitHub API দিয়ে PR খুলুন (`base: main`)
4. **`validate`** নামের required status check পাস হওয়ার অপেক্ষা করুন (`.github/workflows/validate-data.yml` — `validate_data.js` + বাংলা spellcheck চালায়)
5. PR-এর `mergeable_state` চেক করুন — `behind` দেখালে merge করার আগে `PUT /pulls/{number}/update-branch` দিয়ে ব্রাঞ্চ main-এর সাথে আপডেট করুন (required check `strict` মোডে আছে, তাই ব্রাঞ্চ আপ-টু-ডেট না থাকলে merge আটকাবে)
6. squash merge করুন

`enforce_admins: true` করা আছে — admin/owner token দিয়েও এই নিয়ম bypass করা যায় না, কেউ ভুলবশত সরাসরি push করলেও GitHub সেটা প্রত্যাখ্যান করবে।

## 🔄 রিপো ঘনঘন আপডেট হয় — push-এর ঠিক আগে অবশ্যই re-check করুন

একাধিক সেশন/অ্যাকাউন্ট সমান্তরালে কাজ করায়, branch তৈরির পর কাজ শেষ হতে হতে `main` এগিয়ে যেতে পারে — এমনকি একই টাস্কের মাঝেও একাধিকবার এটা ঘটতে পারে। তাই শুধু কাজ শুরুর আগে একবার চেক করাই যথেষ্ট নয়; **push/merge করার প্রতিটা ধাপে** আবার যাচাই করুন:

1. **branch তৈরির আগে**: `session_status.sh` চালান (উপরে বাধ্যতামূলক ধাপ)।
2. **push করার ঠিক আগে** (এডিটিং শেষে): `git fetch origin main` চালান। remote এগিয়ে থাকলে push-এর আগেই `git rebase origin/main` করুন — conflict এলে resolve করুন, শুধু এক পক্ষ blindly নেবেন না।
3. **ডেটা ফাইল (`job-solution.js`, `exam-archive.js`, `PROGRESS.md` ইত্যাদি) সংক্রান্ত rebase-এর পর**: আপনার লেখা কোনো সংখ্যা/count/সারাংশ (যেমন "মোট X এক্সাম, Y প্রশ্ন") থাকলে সেটা **script দিয়ে আবার গণনা করে** নিশ্চিত হন এখনো সঠিক আছে কিনা — rebase-এ অন্য সেশনের যোগ করা ডেটা মিশে গিয়ে সংখ্যা বদলে যেতে পারে (এটা আগে দুইবার ঘটেছে)।
4. **PR খোলার পর, merge করার ঠিক আগে**: PR-এর `mergeable_state` আবার চেক করুন। `behind` বা `dirty` দেখালে rebase করে (বা `PUT /pulls/{number}/update-branch`) আবার push করুন, `clean` না হওয়া পর্যন্ত merge করবেন না। merge করার ঠিক আগে required check (`validate`) পাস করেছে কিনা সেটাও শেষবার নিশ্চিত করুন।
5. rebase-এর পর push করতে **সবসময় `git push --force-with-lease`** ব্যবহার করুন, কখনো `--force` না — অন্য কারো কাজ ভুলবশত overwrite হওয়া এড়াতে।

সংক্ষেপে: "চেক করেছিলাম তো একটু আগে" — যথেষ্ট না। রিপো এত ঘনঘন বদলায় যে প্রতিটা push/merge-এর ঠিক আগমুহূর্তেই freshly যাচাই করা লাগবে।

## ⚡ কনটেক্সট-টোকেন সাশ্রয়

বড় ফাইল (`job-solution.js`, `bcs-mcq`/`primary-mcq` ডেটা, `PROGRESS.md`) কখনো পুরো `view`/`cat` করবেন না।

- খুঁজতে: `grep -n` → পাওয়া লাইন নম্বর দিয়ে `view_range`
- এডিটে: `str_replace` (ছোট, ইউনিক `old_str`)
- যোগ করতে: `tail -N` দিয়ে শেষ দেখে, bash append (`cat >>`/heredoc) — পুরো ফাইল না পড়ে
- গণনায়: `grep -c` / `grep -n`, কখনো পুরো `view` না
- একাধিক জায়গায় কাজ থাকলে: আগে সব `grep` চালিয়ে রেঞ্জ বের করুন, পরে টার্গেটেড `view` কল করুন

## টোকেন (GitHub Personal Access Token)

- সরাসরি push-এর কোনো সুবিধা নেই এখন (protection চালুর পর) — তবু PR তৈরি/merge করতে **Contents: Read & Write** ও **Pull requests: Read & Write** পারমিশনসহ টোকেন লাগবে
- Fine-grained PAT ব্যবহার করার চেষ্টা করুন এবং **Contents ও Pull requests উভয় পারমিশনই "Read and write"** আছে কিনা টোকেন বানানোর সময় নিশ্চিত করুন — শুধু repo-level "push: true" API রেসপন্স দেখে ভরসা করবেন না, একটা ছোট write টেস্ট (যেমন dummy branch তৈরির চেষ্টা) করে যাচাই করে নিন
- কাজ শেষ হলে ব্যবহারকারীকে টোকেন মুছে ফেলার কথা মনে করিয়ে দিন
- চ্যাটে একবার টোকেন দেওয়া হলে পুরো সেশন জুড়ে সেটা ব্যবহার করুন — বারবার টোকেন চাইবেন না; expire/auth error হলেই শুধু জানান

## ফাইল-কাঠামো (সংক্ষেপে)

| পাথ | কী |
|---|---|
| `_dev/scripts/session_status.sh` | প্রতিটা নতুন টাস্কের প্রথম কমান্ড — local/remote/uncommitted অবস্থা ও সব branch/PR-এর লাইভ তালিকা দেখায় |
| `_dev/scripts/current_affairs_health_check.py` | current-affairs সিঙ্ক করা কনটেন্টের দৈনিক স্বয়ংক্রিয় স্বাস্থ্য-পরীক্ষা |
| `current-affairs/docs/` | **generated/synced** — `open_current_affairs` রিপো থেকে `sync-to-job-solution.yml` workflow-এর মাধ্যমে আসে। **এখানে সরাসরি এডিট করবেন না** — মূল ফিক্স `open_current_affairs`-এর সোর্স ফাইলে করতে হবে, তারপর sync workflow চালাতে হবে |
| `_staging/bcs-mcq-staging/` | ৫০তম BCS প্রশ্নব্যাংক প্রসেসিংয়ের raw স্টেজিং এলাকা (README + STATUS.md) |
| `_staging/books-staging/` | বই-সংক্রান্ত কনটেন্ট প্রসেসিংয়ের স্টেজিং এলাকা |
| `_dev/validate_data.js` | প্রশ্ন-ডেটা ভ্যালিডেশন — `.github/workflows/validate-data.yml`-এর `validate` জব এটা চালায়, PR-এর required check |
| `_dev/check-spelling.js` | বাংলা spellcheck (advisory, ব্যর্থ হলেও PR আটকায় না) |
| `.github/workflows/auto-bump-version.yml`, `current-affairs-health-check.yml`, `validate-data.yml` | বিদ্যমান স্বয়ংক্রিয় workflow |

## বর্তমান অবস্থা

এই ফাইলে হাতে-লেখা কমিট/PR-স্ট্যাটাস রাখা হয় না — দ্রুত stale হয়ে ভুল তথ্য ছড়ায়। বাস্তব অবস্থা সবসময় `bash _dev/scripts/session_status.sh` থেকে যাচাই করুন।
