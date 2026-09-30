#!/usr/bin/env python3
"""
Open Job Solution — Root Version Manager
=========================================
যেকোনো module থেকে নয়, ROOT folder থেকে চালান:
    python3 update_version.py           # auto patch increment (1.7.1 → 1.7.2)
    python3 update_version.py 1.8.0     # নির্দিষ্ট version set করুন

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

# ── Determine new version ──────────────────────────────────────
if len(sys.argv) > 1:
    new_ver = sys.argv[1].lstrip("v")
else:
    parts = current.split(".")
    parts[-1] = str(int(parts[-1]) + 1)
    new_ver = ".".join(parts)

new_tag = f"v{new_ver}"
print(f"\n🔖  Version: {current}  →  {new_ver}\n")

# ── Ensure git exists ──────────────────────────────────────────
git_ok = ensure_git()

# ── Patch all version strings ──────────────────────────────────
PATCHES = [
    (ROOT / "sw.js",
     r"const CACHE_VERSION = CACHE_PREFIX \+ 'v[\d.]+'",
     f"const CACHE_VERSION = CACHE_PREFIX + '{new_tag}'"),
    (ROOT / "bcs-mcq" / "sw.js",
     r"const CACHE_VERSION = CACHE_PREFIX \+ 'v[\d.]+'",
     f"const CACHE_VERSION = CACHE_PREFIX + '{new_tag}'"),
    (ROOT / "bcs-mcq" / "app.js",
     r"const APP_VERSION = 'v[\d.]+'",
     f"const APP_VERSION = '{new_tag}'"),
    (ROOT / "mcq-job-solution" / "sw.js",
     r"const CACHE_VERSION = CACHE_PREFIX \+ 'v[\d.]+'",
     f"const CACHE_VERSION = CACHE_PREFIX + '{new_tag}'"),
    (ROOT / "mcq-job-solution" / "index.html",
     r"MCQ Job Solution · v[\d.]+",
     f"MCQ Job Solution · {new_tag}"),
    (ROOT / "mcq-job-solution" / "nctb-mcq" / "index.html",
     r"NCTB MCQ · v[\d.]+",
     f"NCTB MCQ · {new_tag}"),
    (ROOT / "mcq-job-solution" / "primary-mcq" / "sw.js",
     r"const CACHE_VERSION = CACHE_PREFIX \+ 'v[\d.]+'",
     f"const CACHE_VERSION = CACHE_PREFIX + '{new_tag}'"),
    (ROOT / "mcq-job-solution" / "primary-mcq" / "index.html",
     r"const APP_VERSION = 'v[\d.]+'",
     f"const APP_VERSION = '{new_tag}'"),
    (ROOT / "mcq-job-solution" / "ministry-mcq" / "sw.js",
     r"const CACHE_VERSION = CACHE_PREFIX \+ 'v[\d.]+'",
     f"const CACHE_VERSION = CACHE_PREFIX + '{new_tag}'"),
    (ROOT / "mcq-job-solution" / "ministry-mcq" / "index.html",
     r"const APP_VERSION = 'v[\d.]+'",
     f"const APP_VERSION = '{new_tag}'"),
    (ROOT / "written-exam" / "sw.js",
     r"const CACHE_VERSION = CACHE_PREFIX \+ 'v[\d.]+'",
     f"const CACHE_VERSION = CACHE_PREFIX + '{new_tag}'"),
    (ROOT / "written-exam" / "index.html",
     r"const APP_VERSION = 'v[\d.]+'",
     f"const APP_VERSION = '{new_tag}'"),
    (ROOT / "books" / "sw.js",
     r"const CACHE_VERSION = CACHE_PREFIX \+ 'v[\d.]+'",
     f"const CACHE_VERSION = CACHE_PREFIX + '{new_tag}'"),
    (ROOT / "index.html",
     r"Open Job Solution · v[\d.]+",
     f"Open Job Solution · {new_tag}"),
]

errors = []
for filepath, pattern, replacement in PATCHES:
    if not filepath.exists():
        errors.append(f"  ⚠️  File not found: {filepath.relative_to(ROOT)}")
        continue
    content = filepath.read_text(encoding="utf-8")
    new_content, count = re.subn(pattern, replacement, content)
    if count == 0:
        errors.append(f"  ⚠️  Pattern not matched: {filepath.relative_to(ROOT)}")
        continue
    filepath.write_text(new_content, encoding="utf-8")
    print(f"  ✅  {filepath.relative_to(ROOT)}")

VERSION_FILE.write_text(new_ver)
print(f"  ✅  version.txt")

# ── Git commit ─────────────────────────────────────────────────
if git_ok:
    git_stage_and_commit(new_tag)

# ── Final summary ──────────────────────────────────────────────
print()
if errors:
    print("⚠️  কিছু সমস্যা:")
    for e in errors: print(e)
else:
    print(f"🎉  Done! সব file এখন {new_tag}")
    print(f"     ZIP করুন: Open_Job_Solution-{new_tag}.zip")
