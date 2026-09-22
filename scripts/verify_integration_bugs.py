#!/usr/bin/env python3
"""
open_current_affairs → open_job_solution ইন্টিগ্রেশনে যে ৪ ধরনের বাগ আগে
পাওয়া গিয়েছিল (২০২৬-০৮ বাগ-অডিট), সেগুলোর প্রতিটার জন্য একটা স্থায়ী
regression guard — নির্দিষ্ট কোড-প্যাটার্ন এখনো ঠিক জায়গায় আছে কিনা তা
স্ট্যাটিকভাবে (কোড না চালিয়ে) যাচাই করে।

verify_site.py শুধু build_index.py-এর generated output (docs/) যাচাই
করে — sync workflow বা service worker JS-এর ভেতরের নির্দিষ্ট behavior
সেখানে ধরা পড়ে না। এই স্ক্রিপ্ট সেই ফাঁকটা পূরণ করে।

গুরুত্বপূর্ণ সীমাবদ্ধতা: এগুলো *স্ট্যাটিক প্যাটার্ন-চেক*, পূর্ণাঙ্গ
আচরণ-পরীক্ষা (behavioral test) না। যেমন concurrency guard আসলেই দুইটা
সমান্তরাল রান আটকায় কিনা তা এই স্ক্রিপ্ট বাস্তবে চালিয়ে দেখে না —
শুধু YAML-এ concurrency ব্লক অনুপস্থিত হয়ে যায়নি তা নিশ্চিত করে। তাও
এটা মূল্যবান কারণ এটা "কেউ ভুলে ফিক্সটা মুছে ফেলল" ধরনের নিঃশব্দ
রিগ্রেশন আটকায়।

চেক করা হয় যেগুলো:
  ১. sync-to-job-solution.yml-এ concurrency ব্লক আছে কিনা
     (BUG: সমান্তরাল sync রান একে অপরের পুশের সাথে রেস করত)
  ২. sync-to-job-solution.yml-এর safety-check ধাপ `git ls-files` দিয়ে
     ট্র্যাকড ফাইল গোনে, ডিস্কের raw ফাইল-কাউন্ট (find/ls) দিয়ে না
     (BUG: .gitignore করা বা untracked ফাইলও গুনে ফেলত)
  ৩. scripts/sw_template.js-এর activate handler শুধু "oca-cache-"
     প্রিফিক্সের cache মোছে, পুরো origin-এর সব cache না
     (BUG: প্রতি ভার্সন বাম্পে অন্য অ্যাপের cache-ও মুছে যেত)
  ৪. docs/index.html-এর cache-refresh বাটন একইভাবে শুধু নিজের
     প্রিফিক্সড cache মোছে
     (BUG: "সর্বশেষ ভার্সন লোড করুন" বাটনে পুরো origin-এর cache মুছে যেত)
  ৫. docs/ ফোল্ডারের generated output-এ পুরনো standalone ডোমেইন
     (open-current-affairs.pages.dev)-এর কোনো অবশিষ্ট চিহ্ন নেই
     (BUG: টপিক স্টাব পেজ ভিজিটরকে ভুল পুরনো সাইটে redirect করত)
  ৬. update-wiki.yml-এ push-URL-এ PAT (x-access-token:) বসানো থাকলে
     checkout-এ `persist-credentials: false` আছে
     (BUG-26: এটা না থাকলে checkout-এর সংরক্ষিত GITHUB_TOKEN PAT-কে ছাপিয়ে যায়,
     push সবসময় github-actions[bot] নামে হয়, আর PR-চেক action_required-এ আটকায়)
  ৭. update-wiki.yml-এর কোডে (মন্তব্য বাদে) skip-ci ট্যাগ নেই
     (BUG: skip-ci commit-এ workflow/deploy বাদ পড়ে, সাইট stale থাকে)
  ৮. pr_checks.py-এর SOURCE_PREFIXES-এ "archive/" আছে
     (BUG: আর্কাইভ-ফাইলে সমান্তরাল-সেশন সংঘর্ষ ধরা পড়ত না; PR_GUIDE-এর দাবির সাথে কোড মিলছিল না)
  ৯. update-wiki.yml-এ ব্যর্থতা-সতর্কতা আছে: `if: failure()` ধাপ, site-build-failed লেবেল,
     `issues: write` permission
     (BUG: দুটো PR আলাদাভাবে পাস করে একসাথে merge হয়ে build ভাঙলে bot কিছু push করে না —
     সাইট নীরবে stale থাকত, কেউ জানত না)

exit code 0 = নিরাপদ, 1 = কোনো প্যাটার্ন হারিয়ে গেছে (রিগ্রেশন)।
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SYNC_WORKFLOW = ROOT / ".github" / "workflows" / "sync-to-job-solution.yml"
UPDATE_WIKI_WORKFLOW = ROOT / ".github" / "workflows" / "update-wiki.yml"
SW_TEMPLATE = ROOT / "scripts" / "sw_template.js"
INDEX_HTML = ROOT / "docs" / "index.html"
DOCS_DIR = ROOT / "docs"

OLD_DOMAIN = "open-current-affairs.pages.dev"


def fail(errors):
    print("✗ verify_integration_bugs.py ব্যর্থ — এই প্যাটার্নগুলো আগের একটা বাগ-ফিক্সের অংশ,")
    print("  এগুলো হারিয়ে যাওয়া মানে সেই বাগ আবার ফিরে এসেছে:\n")
    for e in errors:
        print(f"  - {e}")
    print(f"\nমোট {len(errors)}টা সমস্যা পাওয়া গেছে।")
    sys.exit(1)


def main():
    errors = []

    # ১. concurrency guard
    if SYNC_WORKFLOW.exists():
        sync_text = SYNC_WORKFLOW.read_text(encoding="utf-8")
        if not re.search(r"^concurrency:", sync_text, re.MULTILINE):
            errors.append(
                f"{SYNC_WORKFLOW.relative_to(ROOT)}-এ 'concurrency:' ব্লক নেই — "
                "সমান্তরাল sync রান আবার একে অপরের পুশের সাথে রেস করতে পারে"
            )

        # ২. safety-check: git ls-files ব্যবহার হচ্ছে কিনা (raw file-count না)
        if "git" not in sync_text or "ls-files" not in sync_text:
            errors.append(
                f"{SYNC_WORKFLOW.relative_to(ROOT)}-এ 'git ls-files' দিয়ে ফাইল-গণনা পাওয়া যায়নি — "
                "safety check হয়তো আবার raw ডিস্ক ফাইল-কাউন্ট (untracked ফাইলসহ) ব্যবহার করছে"
            )
    else:
        errors.append(f"{SYNC_WORKFLOW.relative_to(ROOT)} ফাইলই খুঁজে পাওয়া যায়নি")

    # ৩. sw_template.js activate handler — শুধু oca-cache- প্রিফিক্স মোছে
    if SW_TEMPLATE.exists():
        sw_text = SW_TEMPLATE.read_text(encoding="utf-8")
        if not re.search(
            r'\.filter\(\s*\(?\w+\)?\s*=>\s*\w+\.startsWith\(\s*["\']oca-cache-["\']',
            sw_text,
        ):
            errors.append(
                f"{SW_TEMPLATE.relative_to(ROOT)}-এ 'oca-cache-' প্রিফিক্স দিয়ে cache filter করার "
                "প্যাটার্ন পাওয়া যায়নি — activate handler হয়তো আবার পুরো origin-এর cache মুছছে"
            )
    else:
        errors.append(f"{SW_TEMPLATE.relative_to(ROOT)} ফাইলই খুঁজে পাওয়া যায়নি")

    # ৪. cache-refresh বাটন — docs/index.html
    if INDEX_HTML.exists():
        index_text = INDEX_HTML.read_text(encoding="utf-8")
        if "cache-refresh-btn" in index_text and not re.search(
            r'\.filter\(\s*\(?\w+\)?\s*=>\s*\w+\.startsWith\(\s*["\']oca-cache-["\']',
            index_text,
        ):
            errors.append(
                f"{INDEX_HTML.relative_to(ROOT)}-এর cache-refresh বাটনে 'oca-cache-' প্রিফিক্স "
                "ফিল্টার পাওয়া যায়নি — বাটনটা হয়তো আবার পুরো origin-এর cache মুছছে"
            )
    else:
        errors.append(f"{INDEX_HTML.relative_to(ROOT)} ফাইলই খুঁজে পাওয়া যায়নি")

    # ৫. পুরনো ডোমেইনের অবশিষ্ট চিহ্ন — শুধু generated output (docs/)
    if DOCS_DIR.exists():
        offenders = []
        for path in DOCS_DIR.rglob("*"):
            if path.is_file() and path.suffix in {".html", ".json", ".xml", ".txt", ".js"}:
                try:
                    text = path.read_text(encoding="utf-8")
                except (UnicodeDecodeError, OSError):
                    continue
                if OLD_DOMAIN in text:
                    offenders.append(str(path.relative_to(ROOT)))
        if offenders:
            sample = ", ".join(offenders[:5])
            more = f" (+আরও {len(offenders) - 5}টা)" if len(offenders) > 5 else ""
            errors.append(
                f"docs/-এর নিচে {len(offenders)}টা ফাইলে এখনো পুরনো ডোমেইন '{OLD_DOMAIN}' "
                f"পাওয়া যাচ্ছে: {sample}{more}"
            )

    # ৬-৭. update-wiki.yml — bot-এর `git push` আসলে কোন টোকেনে যায়, আর skip-ci নেই
    if UPDATE_WIKI_WORKFLOW.exists():
        wiki_text = UPDATE_WIKI_WORKFLOW.read_text(encoding="utf-8")
        # মন্তব্য-লাইন (# দিয়ে শুরু) বাদ — মন্তব্যে এই প্যাটার্নগুলোর ব্যাখ্যা থাকতেই পারে
        wiki_code = "\n".join(
            line for line in wiki_text.splitlines() if not line.lstrip().startswith("#")
        )
        # YAML-কী হিসেবেই খুঁজি (লাইনের শুরুতে) — নইলে ::error:: বার্তা বা অন্য কোনো
        # স্ট্রিংয়ের ভেতরের একই লেখা ভুলবশত আসল সেটিং ধরে নেওয়া হবে
        has_persist_false = re.search(
            r"^\s*persist-credentials:\s*false\s*$", wiki_code, re.MULTILINE
        )
        if "x-access-token:" in wiki_code and not has_persist_false:
            errors.append(
                f"{UPDATE_WIKI_WORKFLOW.relative_to(ROOT)}-এ push-URL-এ PAT (x-access-token:) আছে, "
                "কিন্তু checkout-এ 'persist-credentials: false' নেই — checkout-এর সংরক্ষিত "
                "GITHUB_TOKEN PAT-কে ছাপিয়ে যায়, ফলে push আবার github-actions[bot] নামে হবে "
                "(BUG-26, BUGFIX.md দেখুন)"
            )
        if re.search(
            r"\[\s*(skip ci|ci skip|no ci|skip actions|actions skip)\s*\]",
            wiki_code,
            re.IGNORECASE,
        ):
            errors.append(
                f"{UPDATE_WIKI_WORKFLOW.relative_to(ROOT)}-এর কোডে skip-ci ট্যাগ পাওয়া গেছে — "
                "এতে workflow/deploy বাদ পড়ে সাইট stale থাকতে পারে"
            )
        # ৯. ব্যর্থতা-সতর্কতা — নীরব-stale ঠেকাতে
        wiki_rel = UPDATE_WIKI_WORKFLOW.relative_to(ROOT)
        if not re.search(r"^\s*if:\s*failure\(\)\s*$", wiki_code, re.MULTILINE) or "site-build-failed" not in wiki_code:
            errors.append(
                f"{wiki_rel}-এ ব্যর্থতা-সতর্কতা (`if: failure()` ধাপ + site-build-failed Issue) নেই — "
                "build ভাঙলে সাইট নীরবে stale থাকবে, কেউ জানবে না"
            )
        if not re.search(r"^\s*issues:\s*write\s*(#.*)?$", wiki_code, re.MULTILINE):
            errors.append(f"{wiki_rel}-এ `issues: write` permission নেই — সতর্কতা-Issue খোলা/বন্ধ করা যাবে না")
    else:
        errors.append(f"{UPDATE_WIKI_WORKFLOW.relative_to(ROOT)} ফাইলই খুঁজে পাওয়া যায়নি")

    # ৮. pr_checks.py — archive/ সংঘর্ষ-চেকের আওতায়
    pr_checks_path = ROOT / "scripts" / "pr_checks.py"
    if pr_checks_path.exists():
        pc_text = pr_checks_path.read_text(encoding="utf-8")
        m = re.search(r"SOURCE_PREFIXES\s*=\s*\[(.*?)\]", pc_text, re.DOTALL)
        # মন্তব্য (# …) বাদ দিয়ে দেখি — নইলে কমেন্ট-আউট করা "archive/"-ও আসল উপাদান ধরা পড়ত
        prefixes_code = "\n".join(ln.split("#", 1)[0] for ln in m.group(1).splitlines()) if m else ""
        if not m or '"archive/"' not in prefixes_code:
            errors.append(
                'scripts/pr_checks.py-এর SOURCE_PREFIXES-এ "archive/" নেই — আর্কাইভ-ফাইলের সমান্তরাল-সেশন '
                "সংঘর্ষ ধরা পড়বে না (অথচ PR_GUIDE.md ধরা পড়ার দাবি করে)"
            )
    else:
        errors.append("scripts/pr_checks.py ফাইলই খুঁজে পাওয়া যায়নি")

    if errors:
        fail(errors)

    print("✓ verify_integration_bugs.py পাস করেছে — sync/cache-scope/domain রিগ্রেশন-গার্ড সব ঠিক আছে।")


if __name__ == "__main__":
    main()
