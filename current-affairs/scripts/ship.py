#!/usr/bin/env python3
"""ship.py — বর্তমান branch-এর কাজ এক কমান্ডে লাইভ করা (টোকেন-সাশ্রয়ের জন্য)।

কী করে (ক্রমানুসারে): preflight → generated-ফাইল সাফ → push (http.extraheader, config-এ টোকেন
থাকে না) → PR খোলা/পুনর্ব্যবহার → নিয়মফাইল-গেট → চেক-অপেক্ষা (`validate`, `check`) →
`update-branch` (পিছিয়ে থাকলে) → `safe_merge.sh` (= `premerge_check.sh` + সেই sha squash-merge) →
branch মোছা → দখল ছাড়া (`--claim` দিলে) → টোকেন-leak চেক। আউটপুট ইচ্ছে করেই ছোট।

ব্যবহার:
  CLAIM_OWNER=<সেশন-নাম> GH_TOKEN=<PAT> python3 scripts/ship.py [--claim slug ...] [--no-merge]
                          [--allow-protected] [--timeout সেকেন্ড] [--title ..] [--body ..]
  --no-merge         শুধু push + PR; merge নয়।
  --allow-protected  নিয়মফাইল/স্ক্রিপ্ট/workflow বদলের PR merge করতে — শুধু ব্যবহারকারীর স্পষ্ট
                     অনুমতির পরে (PR_GUIDE.md: এসব ক্ষেত্রে অনুমতি লাগে)।
  --timeout          এক চালানোয় সর্বোচ্চ অপেক্ষা (ডিফল্ট ২৭০ সেকেন্ড)। শেষ না হলে exit 6 — একই
                     কমান্ড আবার চালান (নিরাপদ: আগের PR নিয়েই এগোয়)।

exit code: 0 merge হয়েছে (বা --no-merge-এ PR প্রস্তুত) | 2 ব্যবহার/পরিবেশ-ভুল | 3 ব্যর্থতা (চেক/conflict/API) |
           4 নিয়মফাইল বদল — অনুমতি লাগে | 5 premerge_check ব্যর্থ | 6 সময় শেষ, আবার চালান
"""
import argparse
import base64
import json
import os
import subprocess
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

REPO = "openjobsolutionbd/open_job_solution"
API = f"https://api.github.com/repos/{REPO}"
REQUIRED_CHECKS = ("validate", "check")  # main-এর branch protection-এ বাধ্যতামূলক চেক
PROTECTED_NAMES = {"AGENTS.md", "EDITORIAL_MEMORY.md", "PR_GUIDE.md", "PR_GUIDE_REFERENCE.md"}


# ---------- বিশুদ্ধ (pure) ফাংশন — নেটওয়ার্ক ছাড়াই টেস্টযোগ্য ----------

def is_protected(path):
    """নিয়মফাইল/স্ক্রিপ্ট/workflow কি না — এসবের বদলে merge-এর আগে ব্যবহারকারীর অনুমতি লাগে।"""
    p = path[2:] if path.startswith("./") else path.lstrip("/")  # lstrip("./") ".github"-এর dot কেটে ফেলত
    return (
        os.path.basename(p) in PROTECTED_NAMES
        or "/scripts/" in "/" + p
        or p.startswith(".github/workflows/")
    )


def protected_files(paths):
    return sorted(p for p in paths if is_protected(p))


def decide(pr, behind_by, check_runs):
    """(action, বার্তা) — action: done | fail | update | wait | merge।"""
    if pr.get("merged"):
        return "done", "merge হয়ে গেছে"
    if pr.get("state") != "open":
        return "fail", "PR বন্ধ (merge হয়নি)"
    if pr.get("mergeable") is False:
        return "fail", "আসল git conflict — নিজে অনুমান নয়; PR_GUIDE_REFERENCE.md ও AGENTS.md-এর conflict-নিয়ম দেখুন"
    if behind_by > 0:
        return "update", f"main থেকে {behind_by}টা কমিট পিছিয়ে"
    by = {r.get("name"): r for r in check_runs}
    waiting = [n for n in REQUIRED_CHECKS if n not in by or by[n].get("status") != "completed"]
    if waiting:
        return "wait", "চেক চলছে: " + ", ".join(waiting)
    bad = [n for n in REQUIRED_CHECKS if by[n].get("conclusion") not in ("success", "skipped", "neutral")]
    if bad:
        return "fail", "চেক ব্যর্থ: " + ", ".join(bad)
    return "merge", "প্রস্তুত"


# ---------- সাইড-ইফেক্টের অংশ ----------

def sh(cmd, **kw):
    return subprocess.run(cmd, capture_output=True, text=True, errors="replace", **kw)


def out(msg):
    print(msg, flush=True)


def die(code, msg):
    out(msg)
    sys.exit(code)


def api(token, method, path, data=None):
    req = urllib.request.Request(
        API + path, method=method,
        data=json.dumps(data).encode() if data is not None else None,
        headers={"Authorization": f"Bearer {token}", "Accept": "application/vnd.github+json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            body = r.read()
            return r.status, (json.loads(body) if body else {})
    except urllib.error.HTTPError as e:
        try:
            return e.code, json.loads(e.read() or b"{}")
        except ValueError:
            return e.code, {}
    except (urllib.error.URLError, TimeoutError):
        return 0, {}


def clean_generated(root):
    """preflight-এর build-এ বদলে-যাওয়া generated ফাইল সাফ (এগুলো commit হয় না — bot বানায়)।"""
    import pr_checks
    for pref in pr_checks.GENERATED_PREFIXES:
        sh(["git", "checkout", "--", pref], cwd=root)
        if pref.endswith("/"):
            sh(["git", "clean", "-fdq", "--", pref], cwd=root)


def main():
    ap = argparse.ArgumentParser(add_help=True)
    ap.add_argument("--claim", action="append", default=[])
    ap.add_argument("--no-merge", action="store_true")
    ap.add_argument("--allow-protected", action="store_true")
    ap.add_argument("--timeout", type=int, default=270)
    ap.add_argument("--title")
    ap.add_argument("--body")
    a = ap.parse_args()

    token = os.environ.get("GH_TOKEN", "").strip()
    if not token:
        die(2, "✗ GH_TOKEN সেট করুন (PAT: Contents + Pull requests স্কোপ)।")
    root = sh(["git", "rev-parse", "--show-toplevel"]).stdout.strip()
    if not root:
        die(2, "✗ git রিপোর ভেতরে চালান।")
    sub = Path(root) / "current-affairs"
    branch = sh(["git", "rev-parse", "--abbrev-ref", "HEAD"], cwd=root).stdout.strip()
    if branch in ("main", "HEAD"):
        die(2, "✗ main-এ নয় — আগে নিজের work/... branch-এ commit করুন।")
    deadline = time.time() + a.timeout
    b64 = base64.b64encode(f"x-access-token:{token}".encode()).decode()

    # ১. main-এর সাথে সমন্বয় (preflight 'remote এগিয়ে' বললে আটকে যায়); conflict হলে থামা
    sh(["git", "fetch", "-q", "origin", "main"], cwd=root)
    if sh(["git", "merge-base", "--is-ancestor", "origin/main", "HEAD"], cwd=root).returncode != 0:
        r = sh(["git", "-c", "user.name=ship", "-c", "user.email=noreply@anthropic.com",
                "merge", "--no-edit", "origin/main"], cwd=root)
        if r.returncode != 0:
            sh(["git", "merge", "--abort"], cwd=root)
            die(3, "✗ origin/main মেলাতে git conflict — নিজে অনুমান নয়; AGENTS.md-এর conflict-নিয়ম দেখুন।")

    # ২. preflight
    r = sh(["bash", "scripts/preflight.sh"], cwd=sub)
    last = (r.stdout.strip().splitlines() or [""])[-1]
    if r.returncode != 0 or "preflight পাস" not in r.stdout:
        clean_generated(root)
        die(3, "✗ preflight ব্যর্থ:\n" + "\n".join(r.stdout.strip().splitlines()[-12:]))
    clean_generated(root)
    dirty = [l for l in sh(["git", "status", "--porcelain"], cwd=root).stdout.splitlines() if l.strip()]
    if dirty:
        die(2, "✗ commit না-হওয়া বদল আছে (generated ছাড়া) — আগে safe_add.sh + commit:\n" + "\n".join(dirty[:8]))

    # ৩. push — শুধু চলতি কমান্ডের extraheader, config-এ কিছু থাকে না
    r = sh(["git", "-c", f"http.extraHeader=Authorization: Basic {b64}", "push", "-q", "origin", branch], cwd=root)
    if r.returncode != 0:
        die(3, "✗ push ব্যর্থ:\n" + (r.stderr or r.stdout).strip()[-400:])

    # ৪. PR খোলা বা পুনর্ব্যবহার
    owner = REPO.split("/")[0]
    _, prs = api(token, "GET", f"/pulls?head={owner}:{branch}&state=open")
    if prs:
        n = prs[0]["number"]
    else:
        title = a.title or sh(["git", "log", "-1", "--format=%s"], cwd=root).stdout.strip()
        body = a.body or sh(["git", "log", "-1", "--format=%b"], cwd=root).stdout.strip() or title
        st, p = api(token, "POST", "/pulls", {"title": title, "head": branch, "base": "main", "body": body})
        if st != 201:
            die(3, f"✗ PR খোলা যায়নি: {p.get('message', st)}")
        n = p["number"]
    out(f"PR #{n} ← {branch}")

    # ৫. নিয়মফাইল-গেট
    _, files = api(token, "GET", f"/pulls/{n}/files?per_page=100")
    prot = protected_files([f["filename"] for f in files]) if isinstance(files, list) else []
    if prot and not a.allow_protected and not a.no_merge:
        die(4, "⛔ নিয়মফাইল/স্ক্রিপ্ট/workflow বদলেছে (" + ", ".join(prot[:4])
            + ") — merge-এর আগে ব্যবহারকারীর স্পষ্ট অনুমতি লাগে। PR খোলা আছে; অনুমতি পেলে `--allow-protected` দিয়ে আবার চালান।")
    if a.no_merge:
        out(f"✓ PR #{n} প্রস্তুত (merge করা হয়নি)।")
        return 0

    # ৬. চেক-অপেক্ষা → update-branch → safe_merge
    merged = False
    while time.time() < deadline:
        _, pr = api(token, "GET", f"/pulls/{n}")
        sha = pr.get("head", {}).get("sha", "")
        _, cmp_ = api(token, "GET", f"/compare/main...{sha}")
        _, runs = api(token, "GET", f"/commits/{sha}/check-runs")
        action, msg = decide(pr, cmp_.get("behind_by", 0), runs.get("check_runs", []))
        if action == "done":
            merged = True
            break
        if action == "fail":
            die(3, f"✗ #{n}: {msg}")
        if action == "update":
            api(token, "PUT", f"/pulls/{n}/update-branch", {})
            time.sleep(20)
            continue
        if action == "wait":
            time.sleep(10)
            continue
        env = dict(os.environ, GH_TOKEN=token)
        r = sh(["bash", str(HERE / "safe_merge.sh"), str(n)], cwd=root, env=env)
        if r.returncode == 0:
            merged = True
            break
        if r.returncode == 1:
            die(5, f"✗ #{n}: premerge_check ব্যর্থ — merge হয়নি:\n" + "\n".join(r.stdout.strip().splitlines()[-10:]))
        time.sleep(15)  # exit 3 = sha বদলেছে/API সমস্যা → আবার চেষ্টা
    if not merged:
        die(6, f"⏳ #{n}: চেক/merge এখনো শেষ হয়নি — একই কমান্ড আবার চালান।")

    # ৭. cleanup
    api(token, "DELETE", f"/git/refs/heads/{branch}")
    notes = ["branch মোছা"]
    if a.claim:
        r = sh(["bash", "scripts/claim_check.sh", "--release", *a.claim], cwd=sub,
               env=dict(os.environ, GH_TOKEN=token))
        notes.append("দখল ছাড়া: " + ", ".join(a.claim) if r.returncode == 0 else "⚠️ দখল ছাড়া যায়নি")
    sh(["git", "checkout", "-q", "main"], cwd=root)
    sh(["git", "pull", "-q", "--ff-only", "origin", "main"], cwd=root)
    cfg = (Path(sh(["git", "rev-parse", "--git-dir"], cwd=root).stdout.strip() or ".git") / "config")
    cfg = cfg if cfg.is_absolute() else Path(root) / cfg
    text = cfg.read_text(errors="ignore").lower() if cfg.exists() else ""
    notes.append("⚠️ টোকেন config-এ আছে!" if ("authorization" in text or "ghp_" in text) else "config-এ টোকেন নেই")
    out(f"✓ #{n} merge হয়েছে · " + " · ".join(notes))
    return 0


if __name__ == "__main__":
    sys.exit(main())
