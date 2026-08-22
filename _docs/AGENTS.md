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

## টোকেন

- সরাসরি push-এর কোনো সুবিধা নেই এখন (protection চালুর পর) — তবু PR তৈরি/merge করতে **Contents: Read & Write** ও **Pull requests: Read & Write** পারমিশনসহ টোকেন লাগবে
- Fine-grained PAT ব্যবহার করার চেষ্টা করুন এবং **Contents ও Pull requests উভয় পারমিশনই "Read and write"** আছে কিনা টোকেন বানানোর সময় নিশ্চিত করুন — শুধু repo-level "push: true" API রেসপন্স দেখে ভরসা করবেন না, একটা ছোট write টেস্ট (যেমন dummy branch তৈরির চেষ্টা) করে যাচাই করে নিন
- কাজ শেষ হলে ব্যবহারকারীকে টোকেন মুছে ফেলার কথা মনে করিয়ে দিন

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
