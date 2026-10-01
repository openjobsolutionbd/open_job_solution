#!/usr/bin/env python3
"""
Open Job Solution — Root Version Manager
=========================================
যেকোনো module থেকে নয়, ROOT folder থেকে চালান:
    python3 update_version.py           # auto patch increment (1.7.1 → 1.7.2)
    python3 update_version.py 1.8.0     # নির্দিষ্ট version set করুন
    python3 update_version.py --check   # কিছু না বদলে শুধু যাচাই: সব জায়গায় version.txt-এর ভার্সনই আছে কিনা
                                        # (অমিল/প্যাটার্ন-না-মেলা থাকলে exit 1 — CI-র validate জব এটা চালায়)

এই script একসাথে করে:
    1. সব sw.js + app.js-এ version update
    2. version.txt update
    3. git init (না থাকলে), তারপর auto commit
(job-app-MD.md-এ আর কোনো changelog রো যোগ হয় না — routine bump-এর ইতিহাস git log ও version.txt-এ)
"""

import re, sys, os, subprocess
from pathlib import Path
from datetime import datetime

ROOT = Path(__file__).parent.parent

# ── Git helpers ────────────────────────────────────────────────
def run_git(*args):
    try:
        r = subprocess.run(
            ["git"] + list(args),
            cwd=ROOT, capture_output=True, text=True, timeout=10
        )
        return r.returncode, r.stdout.strip(), r.stderr.strip()
    except FileNotFoundError:
        return -1, "", "git not installed"
    except Exception as e:
        return -1, "", str(e)

def ensure_git():
    """git না থাকলে init করে, প্রথমবার initial commit করে। True/False return করে।"""
    code, out, _ = run_git("--version")
    if code != 0:
        print("  ⚠️  git পাওয়া যায়নি — changelog auto-detect কাজ করবে না")
        return False

    if not (ROOT / ".git").exists():
        print("  📁  git repo নেই — init করা হচ্ছে...")
        run_git("init")
        run_git("config", "user.email", "openjob@local")
        run_git("config", "user.name", "Open Job Solution")

        # .gitignore
        gi = ROOT / ".gitignore"
        if not gi.exists():
            gi.write_text("__pycache__/\n*.pyc\n.DS_Store\nThumbs.db\n")

        run_git("add", "-A")
        code, _, err = run_git("commit", "-m", "chore: initial commit (auto by update_version.py)")
        if code == 0:
            print("  ✅  git init + initial commit সম্পন্ন")
        else:
            print(f"  ⚠️  initial commit ব্যর্থ: {err}")
            return False
    return True

def git_stage_and_commit(new_tag):
    """সব পরিবর্তন stage করে commit করে"""
    run_git("add", "-A")
    code, _, err = run_git("commit", "-m", f"chore: bump version to {new_tag}")
    if code == 0:
        print(f"  ✅  git commit — \"chore: bump version to {new_tag}\"")
    elif "nothing to commit" in err:
        print("  ℹ️  git — পরিবর্তন নেই, commit বাদ")
    else:
        print(f"  ⚠️  git commit ব্যর্থ: {err}")

# ── Read current version ───────────────────────────────────────
VERSION_FILE = ROOT / "_docs" / "version.txt"
current = VERSION_FILE.read_text().strip() if VERSION_FILE.exists() else "1.7.1"

CHECK_ONLY = "--check" in sys.argv
args = [a for a in sys.argv[1:] if a != "--check"]

# ── কোন ফাইলে কোন প্যাটার্নে ভার্সন লেখা আছে (একমাত্র তালিকা) ──
# {tag} জায়গায় "v1.2.3" বসে। bump ও --check দুটোই এই একই তালিকা ব্যবহার করে,
# তাই নতুন ফাইল যোগ করলে শুধু এখানে একটা লাইন যোগ করলেই দুই জায়গায় কাজ করবে।
SW_PATTERN = (r"const CACHE_VERSION = CACHE_PREFIX \+ 'v[\d.]+'",
              "const CACHE_VERSION = CACHE_PREFIX + '{tag}'")
APP_PATTERN = (r"const APP_VERSION = 'v[\d.]+'", "const APP_VERSION = '{tag}'")

PATCH_SPECS = [
    ("sw.js", *SW_PATTERN),
    ("bcs-mcq/sw.js", *SW_PATTERN),
    ("bcs-mcq/app.js", *APP_PATTERN),
    ("mcq-job-solution/sw.js", *SW_PATTERN),
    ("mcq-job-solution/index.html", r"MCQ Job Solution · v[\d.]+", "MCQ Job Solution · {tag}"),
    ("mcq-job-solution/nctb-mcq/index.html", r"NCTB MCQ · v[\d.]+", "NCTB MCQ · {tag}"),
    ("mcq-job-solution/primary-mcq/sw.js", *SW_PATTERN),
    ("mcq-job-solution/primary-mcq/index.html", *APP_PATTERN),
    ("mcq-job-solution/ministry-mcq/sw.js", *SW_PATTERN),
    ("mcq-job-solution/ministry-mcq/index.html", *APP_PATTERN),
    ("written-exam/sw.js", *SW_PATTERN),
    ("written-exam/index.html", *APP_PATTERN),
    ("books/sw.js", *SW_PATTERN),
    ("index.html", r"Open Job Solution · v[\d.]+", "Open Job Solution · {tag}"),
]

def plan_patches(tag):
    """
    সব ফাইলে আগে মেমোরিতে প্যাটার্ন বসিয়ে দেখে — এখনও ডিস্কে কিছু লেখে না।
    return: (পরিকল্পনা [(path, নতুন_কনটেন্ট, বদলেছে_কিনা)], সমস্যার তালিকা)
    """
    plan, problems = [], []
    for rel, pattern, template in PATCH_SPECS:
        path = ROOT / rel
        if not path.exists():
            problems.append(f"  ❌  ফাইল পাওয়া যায়নি: {rel}")
            continue
        content = path.read_text(encoding="utf-8")
        new_content, count = re.subn(pattern, template.replace("{tag}", tag), content)
        if count == 0:
            problems.append(f"  ❌  প্যাটার্ন মেলেনি: {rel}")
            continue
        plan.append((path, new_content, new_content != content))
    return plan, problems

# ── --check মোড: কিছু না বদলে শুধু যাচাই ─────────────────────────
if CHECK_ONLY:
    plan, problems = plan_patches(f"v{current}")
    for path, _, changed in plan:
        if changed:
            problems.append(f"  ❌  ভার্সন অমিল (version.txt = {current}): {path.relative_to(ROOT)}")
    if problems:
        print(f"\n❌  ভার্সন সিঙ্ক যাচাই ব্যর্থ (version.txt = {current}):")
        print("\n".join(problems))
        print("\n    ঠিক করতে: python3 _dev/update_version.py " + current + "  (একই ভার্সন আবার সব জায়গায় বসাবে)")
        sys.exit(1)
    print(f"✅  সব {len(PATCH_SPECS)}টা জায়গায় ভার্সন v{current} — মিল আছে")
    sys.exit(0)

# ── Determine new version ──────────────────────────────────────
if args:
    new_ver = args[0].lstrip("v")
else:
    parts = current.split(".")
    parts[-1] = str(int(parts[-1]) + 1)
    new_ver = ".".join(parts)

new_tag = f"v{new_ver}"
print(f"\n🔖  Version: {current}  →  {new_ver}\n")

# ── আগে সব ফাইল যাচাই — একটাও সমস্যা থাকলে কিছুই না লিখে থামা ──
# (আগে: সমস্যা থাকলেও বাকি ফাইল বদলে "Done" বলত, ফলে আধা-আধি ভার্সন তৈরি হতো)
plan, problems = plan_patches(new_tag)
if problems:
    print("❌  কোনো ফাইল বদলানো হয়নি, কারণ নিচের সমস্যা আছে:")
    print("\n".join(problems))
    sys.exit(1)

# ── Ensure git exists ──────────────────────────────────────────
git_ok = ensure_git()

# ── সব ঠিক থাকলে তবেই লেখা ─────────────────────────────────────
for path, new_content, _ in plan:
    path.write_text(new_content, encoding="utf-8")
    print(f"  ✅  {path.relative_to(ROOT)}")

VERSION_FILE.write_text(new_ver)
print(f"  ✅  version.txt")

# ── Git commit ─────────────────────────────────────────────────
if git_ok:
    git_stage_and_commit(new_tag)

# ── Final summary ──────────────────────────────────────────────
print()
print(f"🎉  Done! সব file এখন {new_tag}")
print(f"     ZIP করুন: Open_Job_Solution-{new_tag}.zip")
