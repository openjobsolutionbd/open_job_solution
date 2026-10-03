# PR_GUIDE.md

**কবে পড়বেন:** push → PR → merge-এর আগে। ত্রুটি, conflict বা বিশেষ ক্ষেত্রে (branch-সুইপ, মাসশেষের গোছানো, build-ব্যর্থতা, `main`-protection) — `PR_GUIDE_REFERENCE.md` (আগের পূর্ণ গাইড; ধাপ-নম্বর অপরিবর্তিত)। মূল নিয়মের জন্য আগে `AGENTS.md`।

## দ্রুত পথ (কনটেন্ট-PR)

1. **দখল:** `CLAIM_OWNER=<সেশন-নাম> GH_TOKEN=$PAT bash scripts/claim_check.sh --claim <slug>`
2. **কাজ:** `git checkout -b work/<YYYY-MM-DD>-<slug>`; এডিট; `bash scripts/safe_add.sh` (খালি `git add -A` নয়); commit (স্পষ্ট বাংলা বার্তা)।
3. **লাইভ করা:** `CLAIM_OWNER=<সেশন-নাম> GH_TOKEN=$PAT python3 scripts/ship.py --claim <slug>`
   - এক কমান্ডে: preflight → push → PR → চেক-অপেক্ষা → `update-branch` → `premerge_check.sh` + squash merge → branch মোছা → দখল ছাড়া → টোকেন-leak চেক। শেষে এক লাইনের ফল।
   - exit 6 (সময় শেষ, চেক চলছে) হলে একই কমান্ড আবার চালান — নিরাপদ, আগের PR নিয়েই এগোয়।
   - শুধু PR খুলে রাখতে `--no-merge`; ব্যাচে একাধিক দখল: `--claim a --claim b`।
4. **ব্যবহারকারীকে জানানো:** সহজ বাংলায় ("ডেটা লাইভ হয়েছে"); কারিগরি আউটপুট ও গিট-শব্দ (PR, merge, branch) নয়।

## কঠোর নিয়ম

- `main` protected: সরাসরি push নয়; সব কাজ নিজের branch → PR।
- **অনুমতি ছাড়া merge চলে** কনটেন্ট-PR-এ, যদি preflight পাস, `validate` ও `check` সবুজ, conflict নেই এবং `premerge_check.sh` ✓ — `ship.py` এগুলো নিজেই যাচাই করে।
- **স্পষ্ট অনুমতি লাগে:** (ক) `AGENTS.md`, `EDITORIAL_MEMORY.md`, `PR_GUIDE*.md`, `scripts/*` বা `.github/workflows/*` বদলালে — `ship.py` আটকে দেয় (exit 4); ব্যবহারকারী অনুমতি দিলে `--allow-protected`; (খ) preflight/চেক ব্যর্থ বা আসল conflict; (গ) যেকোনো সন্দেহ।
- **টোকেন:** শুধু env `GH_TOKEN`-এ; স্ক্রিপ্টগুলো `http.extraheader` ব্যবহার করে; `git remote set-url` কখনো নয়; PAT-এ Contents + Pull requests স্কোপ।
- merge ব্যর্থ হলে force নয়, কারণ জানান। conflict-এ নিজে অনুমান নয় — `AGENTS.md`-এর rebase-conflict নিয়ম; generated ফাইল হাতে merge নয়।
- নতুন কাজের আগে `bash scripts/session_status.sh`। **সাইট build ব্যর্থ হলে** (🚨): নতুন কাজ থামিয়ে আগে সেটা ঠিক করুন — কারণ ও পথ `PR_GUIDE_REFERENCE.md`-এর ধাপ ৯-এ।

## একাধিক সেশন একসাথে কাজ

নীতি: **একটা টপিক = একটা সেশন = একটা PR = শুধু নিজের নতুন ফাইল।** একটা টপিক কখনো দুই সেশনে ভাগ হয় না।

1. **দখল:** `bash scripts/session_status.sh`, তারপর `--claim` (পারমাণবিক তালা; ⛔ পেলে অন্য টপিক নিন)। merge-এর পর `--release` (`ship.py` নিজে করে); ৩ দিনের পুরনো দখল 'সম্ভবত পরিত্যক্ত'।
2. **নিজের নতুন ফাইল, অন্যের ফাইল নয়।** স্কোপ = branch-এর slug; `<YYYY-MM>` = ম্যাগাজিন-সংখ্যার মাস:

   | কনটেন্ট | নতুন ফাইল |
   |---|---|
   | স্থায়ী বিষয় | `docs/topics/<slug>.md` |
   | ঘটনাপ্রবাহ | `docs/ghotonaprobaho/<YYYY-MM>-<স্কোপ>.md` |
   | টপ নিউজ | `docs/top-news/<YYYY-MM>-<স্কোপ>.md` |
   | MCQ | `docs/mcq/<YYYY-MM>-<স্কোপ>.md` (স্কোপ অক্ষর দিয়ে শুরু) |
   | আর্কাইভ | `archive/<YYYY-MM>-<স্কোপ>.md` |

   বিদ্যমান মাসিক ফাইল (যেমন `docs/ghotonaprobaho/2026-04-25_2026-08-27.md`) বদলাবেন না, rename করবেন না — শুধু ভুল-সংশোধন।
3. **একই তারিখ অন্য সেশনের ফাইলে থাকলে সমস্যা নেই** (build জোড়া লাগায়); লেখার আগে তারিখ grep করে ডুপ্লিকেট-চেক।
4. **শেয়ার্ড ফাইলে হাত নয়:** generated ফাইল, `VERSION`।
5. **বিদ্যমান টপিক বদল:** একজন সেশনই বদলাবে; অন্যের দখল দেখালে অপেক্ষা।
6. **সংঘর্ষ:** `pr_checks.py` অন্য খোলা PR-এর সাথে একই সোর্স-ফাইল (`docs/topics`, `ghotonaprobaho`, `top-news`, `mcq`, `proshnottor`, `archive/`) বদলালে PR ব্যর্থ করে। `mergeable: false` হলে `git fetch origin && git merge origin/main`, হাতে মিলিয়ে, preflight, আবার push।
7. **build-সতর্কতা** (ডুপ্লিকেট/স্কোপ-নাম): `preflight.sh`-এর ⚠️ ব্লক ও PR-এর CI কমেন্টে আসে — merge-এর আগে ঠিক করুন।
8. **ব্যাচ PR (২০২৬-১০-০৩):** একই সংখ্যার **শুধু-নতুন টপিক-ফাইল** একটা PR-এ ব্যাচ করা যায় (আলাদা PR-এ প্রতিটি merge-এর পর বাকিগুলো 'behind' হয়ে CI আবার চলে — ১৮টা PR-এ প্রায় ৪০ মিনিট লেগেছে)। শর্ত: প্রতি টপিকের আলাদা `--claim`/`--release`; প্রতি টপিক আলাদা কনফার্মেশনের নিয়ম (`AGENTS.md`, `PROJECT.md`) বহাল — ব্যবহারকারী স্পষ্টভাবে 'একবারে' বললে সেটাই অনুমতি; PR-বর্ণনায় টপিকের তালিকা; বিদ্যমান টপিক সংশোধন বা অনিশ্চিত তথ্য ব্যাচে নয়, আলাদা PR।
