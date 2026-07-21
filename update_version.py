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
    3. job-app-MD-*.md-এ changelog entry
    4. git init (না থাকলে), তারপর auto commit
"""

import re, sys, os, subprocess
from pathlib import Path
from datetime import datetime

ROOT = Path(__file__).parent

# ── Bengali helpers ────────────────────────────────────────────
BN_MONTHS = [
    "", "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
    "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
]
BN_DIGITS = str.maketrans("0123456789", "০১২৩৪৫৬৭৮৯")

def bn_date(dt):
    day = str(dt.day).translate(BN_DIGITS)
    return f"{day} {BN_MONTHS[dt.month]} {str(dt.year).translate(BN_DIGITS)}"

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

def get_changed_files():
    """git diff HEAD দিয়ে changed files list করে"""
    changed = []
    # staged + unstaged
    for cmd in [["diff", "--name-only", "HEAD"], ["diff", "--name-only"]]:
        code, out, _ = run_git(*cmd)
        if code == 0 and out:
            changed += [f.strip() for f in out.splitlines() if f.strip()]
    return list(dict.fromkeys(changed))  # deduplicate

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
VERSION_FILE = ROOT / "version.txt"
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

# ── Ensure git exists BEFORE patching (so diff is accurate) ───
git_ok = ensure_git()

# ── Detect changed files BEFORE we overwrite anything ─────────
changed_files = get_changed_files() if git_ok else []

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
    (ROOT / "primary-mcq" / "sw.js",
     r"const CACHE_VERSION = CACHE_PREFIX \+ 'v[\d.]+'",
     f"const CACHE_VERSION = CACHE_PREFIX + '{new_tag}'"),
    (ROOT / "written-exam" / "sw.js",
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

# ── Build changelog summary ────────────────────────────────────
FILE_LABELS = {
    "bcs-mcq/app.js":             "BCS MCQ লজিক",
    "bcs-mcq/style.css":          "BCS MCQ স্টাইল",
    "bcs-mcq/index.html":         "BCS MCQ UI",
    "primary-mcq/index.html":     "Primary MCQ UI",
    "primary-mcq/style.css":      "Primary MCQ স্টাইল",
    "written-exam/index.html":    "লিখিত পরীক্ষা UI",
    "written-exam/style.css":     "লিখিত পরীক্ষা স্টাইল",
    "written-exam/renderer.js":   "লিখিত পরীক্ষা renderer",
    "index.html":                 "হোম পেজ",
    "manifest.json":              "PWA manifest",
    "_redirects":                 "Cloudflare routing",
    "_headers":                   "HTTP headers",
}
DATA_LABELS = {
    "bangla": "বাংলা", "english": "English", "math": "গণিত",
    "science": "বিজ্ঞান", "computer": "কম্পিউটার", "geography": "ভূগোল",
    "bangladesh": "বাংলাদেশ", "international": "আন্তর্জাতিক",
    "mental": "মানসিক", "ethics": "নৈতিকতা", "data": "ডেটা",
    "general-knowledge": "সাধারণ জ্ঞান", "job-solution": "প্রশ্নব্যাংক",
    "exam-archive": "পরীক্ষা আর্কাইভ",
}
SKIP = {"version.txt", "update_version.py"}

def build_summary(files):
    if not files:
        return f"Version {new_tag}-এ আপগ্রেড। Cache সব module-এ update।"

    parts = []
    data_subjects = set()
    labeled = []

    for f in files:
        fname = Path(f).name
        if any(s in f for s in SKIP): continue
        if "job-app-MD" in f: continue
        if any(s in f for s in ["sw.js", "update_version"]): continue

        if "/data/" in f:
            stem = Path(f).stem
            data_subjects.add(DATA_LABELS.get(stem, stem))
        elif f in FILE_LABELS:
            labeled.append(FILE_LABELS[f])
        else:
            labeled.append(fname)

    if data_subjects:
        parts.append(f"ডেটা আপডেট ({', '.join(sorted(data_subjects))})")
    if labeled:
        parts.append(f"{', '.join(dict.fromkeys(labeled))} পরিবর্তন")
    if not parts:
        parts.append(f"Cache সব module-এ {new_tag}-এ আপডেট")

    return ". ".join(parts) + "."

summary = build_summary(changed_files)

# ── Update MD changelog ────────────────────────────────────────
md_files = list(ROOT.glob("*.md"))
md_updated = False

for md_path in md_files:
    content = md_path.read_text(encoding="utf-8")
    if "## Version History" not in content:
        continue
    if f"| {new_tag} |" in content:
        print(f"  ⏭️  {md_path.name} — {new_tag} already logged")
        md_updated = True
        continue

    new_row = f"| {new_tag} | {bn_date(datetime.now())} | {summary} |"
    pattern = r"(## Version History\s*\n\s*\|[^\n]+\|\s*\n\s*\|[-| ]+\|\s*\n)"
    new_content, count = re.subn(pattern, r"\g<1>" + new_row + "\n", content)

    if count == 0:
        errors.append(f"  ⚠️  Version History table not found in {md_path.name}")
        continue

    md_path.write_text(new_content, encoding="utf-8")
    print(f"  ✅  {md_path.name}  →  \"{summary[:70]}\"")
    md_updated = True

if not md_updated:
    errors.append("  ⚠️  কোনো MD file-এ Version History section পাওয়া যায়নি")

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
