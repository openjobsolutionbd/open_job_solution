#!/usr/bin/env node
/**
 * check_docs_consistency.js
 *
 * প্রজেক্টের গভর্নেন্স ডকুমেন্ট (_docs/job-app-MD.md, _docs/AGENTS.md) যেন
 * repo-র বাস্তব অবস্থা থেকে "হিবিজিবি" হয়ে সরে না যায় — সেটার জন্য চারটা
 * স্ট্রাকচারাল চেক করে। এটা prose/বিবরণ সঠিক কিনা যাচাই করে না (সেটা
 * মানুষ/AI-কেই মাঝেমধ্যে re-verify করতে হবে) — শুধু নিচের ধরনের ড্রিফট
 * আটকায়, যেগুলো আগে সমস্যা তৈরি করেছিল:
 *
 *   ১. একাধিক job-app-MD*.md ফাইল যেন আবার তৈরি না হয় (অনাথ ডুপ্লিকেট
 *      স্ন্যাপশট — যেটা ঘটেছিল job-app-MD-v1.22.md-তে)
 *   ২. root-এর প্রতিটা deploy-able ফোল্ডার যেন job-app-MD.md-এর
 *      ফোল্ডার-স্ট্রাকচার সেকশনে অন্তত উল্লেখ থাকে (যেমন books/ আগে
 *      পুরোপুরি বাদ পড়েছিল)
 *   ৩. প্রতিটা GitHub Actions workflow ফাইল (.github/workflows/*.yml)
 *      যেন AGENTS.md-এ অন্তত ফাইলনাম হিসেবে উল্লেখ থাকে — নতুন workflow
 *      যোগ করে ডকুমেন্টে লিখতে ভুলে যাওয়াটা একটা বারবার ঘটা ভুল, তাই এটা
 *      এখন স্বয়ংক্রিয়ভাবে আটকানো হয়
 *   ৪. প্রতিটা helper script (_dev/-এর টপ-লেভেল ফাইল, _dev/scripts/, ও
 *      .github/workflows/scripts/-এর ভেতরের .js/.py/.sh ফাইল) যেন AGENTS.md-এ অন্তত ফাইলনাম হিসেবে উল্লেখ থাকে
 *
 * exit code 0 = ঠিক আছে, 1 = সমস্যা পাওয়া গেছে (CI fail করবে)।
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DOCS_DIR = path.join(ROOT, "_docs");
const MASTER_DOC = path.join(DOCS_DIR, "job-app-MD.md");
const AGENTS_DOC = path.join(DOCS_DIR, "AGENTS.md");

let errors = [];

// ── চেক ১: একাধিক job-app-MD*.md ফাইল নেই তো? ──────────────────
const mdCandidates = fs
  .readdirSync(DOCS_DIR)
  .filter((f) => /^job-app-MD.*\.md$/.test(f));

if (mdCandidates.length === 0) {
  errors.push("❌ _docs/job-app-MD.md পাওয়া যায়নি — মাস্টার রেফারেন্স ডকুমেন্ট মিসিং।");
} else if (mdCandidates.length > 1) {
  errors.push(
    `❌ _docs/-এ একাধিক job-app-MD*.md ফাইল পাওয়া গেছে (${mdCandidates.join(", ")})। ` +
      `আগে এই প্যাটার্নে একটা অনাথ ডুপ্লিকেট (job-app-MD-v1.22.md) তৈরি হয়ে বহুদিন confusion তৈরি করেছিল। ` +
      `শুধু একটা job-app-MD.md-ই থাকা উচিত — নতুন ভার্সন দরকার হলে পুরনোটা প্রতিস্থাপন করুন, পাশে নতুন ফাইল বানাবেন না।`
  );
}

// ── চেক ২: root-level ফোল্ডারগুলো job-app-MD.md-এ উল্লেখ আছে তো? ──
if (mdCandidates.length >= 1) {
  const masterContent = fs.readFileSync(MASTER_DOC, "utf8");

  const SKIP_DIRS = new Set([".git", ".github", "node_modules", "admin"]);
  const rootDirs = fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !SKIP_DIRS.has(d.name))
    .map((d) => d.name);

  const missing = rootDirs.filter((dir) => !masterContent.includes(dir));

  if (missing.length > 0) {
    errors.push(
      `❌ এই root-level ফোল্ডারগুলো _docs/job-app-MD.md-এর কোথাও উল্লেখ নেই: ${missing.join(", ")}। ` +
        `নতুন সেকশন/ফোল্ডার যোগ করলে job-app-MD.md-এর ফোল্ডার-স্ট্রাকচার সেকশনেও (Section ২) যোগ করুন।`
    );
  }
}

// ── চেক ৩ ও ৪: workflow ও script ফাইলগুলো AGENTS.md-এ উল্লেখ আছে তো? ──
if (fs.existsSync(AGENTS_DOC)) {
  const agentsContent = fs.readFileSync(AGENTS_DOC, "utf8");

  const WORKFLOWS_DIR = path.join(ROOT, ".github", "workflows");
  if (fs.existsSync(WORKFLOWS_DIR)) {
    const workflowFiles = fs
      .readdirSync(WORKFLOWS_DIR, { withFileTypes: true })
      .filter((f) => f.isFile() && f.name.endsWith(".yml"))
      .map((f) => f.name);

    const missingWorkflows = workflowFiles.filter((f) => !agentsContent.includes(f));
    if (missingWorkflows.length > 0) {
      errors.push(
        `❌ এই GitHub Actions workflow ফাইলগুলো _docs/AGENTS.md-এর কোথাও উল্লেখ নেই: ${missingWorkflows.join(", ")}। ` +
          `নতুন workflow যোগ করলে সেটা কী করে, কখন চলে — এক লাইনেও AGENTS.md-এর ফাইল-স্ট্রাকচার টেবিলে যোগ করুন।`
      );
    }
  }

  const SCRIPT_DIRS = [
    { dir: path.join(ROOT, "_dev"), recursive: false }, // top-level dev-tooling (validate_data.js, update_version.py, ইত্যাদি)
    { dir: path.join(ROOT, "_dev", "scripts"), recursive: false },
    { dir: path.join(ROOT, ".github", "workflows", "scripts"), recursive: false },
  ];
  const SCRIPT_EXTENSIONS = [".js", ".py", ".sh"];
  let scriptFiles = [];
  for (const { dir } of SCRIPT_DIRS) {
    if (fs.existsSync(dir)) {
      scriptFiles = scriptFiles.concat(
        fs
          .readdirSync(dir, { withFileTypes: true })
          .filter(
            (f) =>
              f.isFile() &&
              SCRIPT_EXTENSIONS.includes(path.extname(f.name))
          )
          .map((f) => f.name)
      );
    }
  }
  const missingScripts = scriptFiles.filter((f) => !agentsContent.includes(f));
  if (missingScripts.length > 0) {
    errors.push(
      `❌ এই হেল্পার স্ক্রিপ্টগুলো _docs/AGENTS.md-এর কোথাও উল্লেখ নেই: ${missingScripts.join(", ")}। ` +
        `নতুন স্ক্রিপ্ট যোগ করলে সেটা কী করে — এক লাইনেও AGENTS.md-এর ফাইল-স্ট্রাকচার টেবিলে যোগ করুন।`
    );
  }
}

// ── ফলাফল ──────────────────────────────────────────────────────
if (errors.length > 0) {
  console.error("🔴 ডকুমেন্ট-কনসিস্টেন্সি চেক ব্যর্থ:\n");
  errors.forEach((e) => console.error(e + "\n"));
  process.exit(1);
} else {
  console.log("✅ ডকুমেন্ট-কনসিস্টেন্সি চেক পাস — কোনো স্ট্রাকচারাল ড্রিফট পাওয়া যায়নি।");
  process.exit(0);
}
