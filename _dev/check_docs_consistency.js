#!/usr/bin/env node
/**
 * check_docs_consistency.js
 *
 * প্রজেক্টের গভর্নেন্স ডকুমেন্ট (_docs/job-app-MD.md, _docs/AGENTS.md) যেন
 * repo-র বাস্তব অবস্থা থেকে "হিবিজিবি" হয়ে সরে না যায় — সেটার জন্য পাঁচটা
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
 *   ৫. job-app-MD.md এখন মূল ফাইল + _docs/job-app/-এর ৬টা অংশ-ফাইলে ভাগ করা (সেকশন-ফোল্ডার অনুযায়ী একটা করে + শেয়ার্ড দুটো)
 *      (কাজ অনুযায়ী শুধু প্রয়োজনীয় অংশ পড়ে টোকেন বাঁচাতে)। ভাগ করা কাঠামো যেন
 *      নিঃশব্দে ভেঙে না যায় — অংশ-ফাইলের তালিকা ঠিক থাকে (কোনোটা হারায়নি, বাড়তি/অনাথ
 *      ফাইল নেই), প্রতিটা সেকশন-শিরোনাম সব ফাইল মিলিয়ে ঠিক একবার আছে (কোনো সেকশন
 *      হারায়নি বা ডুপ্লিকেট হয়নি), মূল ফাইলের সূচিতে প্রতিটা অংশ-ফাইল উল্লিখিত, এবং
 *      "⛔ কঠোর নিষেধাজ্ঞা" ব্লক মূল ফাইলে আছে, এবং কোনো ডকুমেন্ট `job-app/<নাম>.md` বলে এমন ফাইলের
 *      উল্লেখ করছে না যা নেই (নাম বদলের পর ভাঙা রেফারেন্স), এবং কোনো সেকশন-ফাইল অন্য সেকশন-ফাইলের
 *      সেকশন/ফাইলের দিকে পয়েন্ট করছে না (প্রতিটা সেকশন-ফাইল + মূল ফাইল = স্বয়ংসম্পূর্ণ)
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

// ── চেক ৫: ভাগ-করা job-app-MD কাঠামো অক্ষত আছে তো? ─────────────
// মূল ফাইল: _docs/job-app-MD.md; অংশ-ফাইল: _docs/job-app/*.md (নিচের PARTS তালিকা)।
// নতুন অংশ-ফাইল বানালে PARTS তালিকা ও job-app-MD.md-এর "Document index" টেবিল একসাথে আপডেট করুন।
const PARTS_DIR = path.join(DOCS_DIR, "job-app");
const PARTS = [
  "version-history.md",
  "written-exam.md",
  "bcs-mcq.md",
  "primary-mcq.md",
  "ministry-mcq.md",
  "roadmap.md",
];
const toBn = (n) => String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);
// প্রতিটা শিরোনাম-প্রিফিক্স সব ফাইল মিলিয়ে ঠিক একবার থাকতে হবে
const EXPECTED_HEADINGS = [
  "## ⛔ ",
  "## ✅ ",
  "## 📑 ",
  "## Version History",
  ...Array.from({ length: 17 }, (_, i) => `## ${toBn(i + 1)}. `),
  "## ৫-ক. ",
  "## ৫-খ. ",
  "## ৯-ক. ",
];
const warnings = [];

if (mdCandidates.length >= 1) {
  const masterText = fs.readFileSync(MASTER_DOC, "utf8");

  if (!fs.existsSync(PARTS_DIR)) {
    errors.push("❌ _docs/job-app/ ফোল্ডার পাওয়া যায়নি — job-app-MD.md-এর ভাগ-করা অংশগুলো মিসিং।");
  } else {
    const present = fs.readdirSync(PARTS_DIR);
    const missingParts = PARTS.filter((f) => !present.includes(f));
    const extraParts = present.filter((f) => !PARTS.includes(f));
    if (missingParts.length > 0) {
      errors.push(`❌ _docs/job-app/-এ এই অংশ-ফাইল(গুলো) মিসিং: ${missingParts.join(", ")}।`);
    }
    if (extraParts.length > 0) {
      errors.push(
        `❌ _docs/job-app/-এ অনাথ/অনিবন্ধিত ফাইল: ${extraParts.join(", ")}। ` +
          `নতুন অংশ-ফাইল বানালে _dev/check_docs_consistency.js-এর PARTS তালিকায় ও job-app-MD.md-এর "Document index" টেবিলে যোগ করুন; ` +
          `অনাথ ডুপ্লিকেট (আগে job-app-MD-v1.22.md-এর মতো) এখানেও বিভ্রান্তি তৈরি করবে।`
      );
    }

    // সূচিতে প্রতিটা অংশ-ফাইল উল্লিখিত? + প্রতিটা অংশ-ফাইল মূল ফাইলে ফিরে লিংক করে? (নিষেধাজ্ঞা-ব্যানার)
    const notIndexed = PARTS.filter((f) => !masterText.includes(f));
    if (notIndexed.length > 0) {
      errors.push(`❌ job-app-MD.md-এর "Document index" সেকশনে এই অংশ-ফাইল(গুলো) উল্লেখ নেই: ${notIndexed.join(", ")}।`);
    }
    const noBackLink = PARTS.filter(
      (f) => fs.existsSync(path.join(PARTS_DIR, f)) && !fs.readFileSync(path.join(PARTS_DIR, f), "utf8").includes("job-app-MD.md")
    );
    if (noBackLink.length > 0) {
      errors.push(`❌ এই অংশ-ফাইলে মূল job-app-MD.md-এর লিংক/নিষেধাজ্ঞা-ব্যানার নেই: ${noBackLink.join(", ")}।`);
    }

    // সেকশন-শিরোনাম: কোনোটা হারায়নি, কোনোটা একাধিক জায়গায় নেই
    const headingLines = [];
    for (const f of [MASTER_DOC, ...PARTS.map((p) => path.join(PARTS_DIR, p))]) {
      if (!fs.existsSync(f)) continue;
      let inFence = false;
      for (const line of fs.readFileSync(f, "utf8").split("\n")) {
        if (/^\s*```/.test(line)) inFence = !inFence;
        if (!inFence && line.startsWith("## ")) headingLines.push({ file: path.relative(ROOT, f), line });
      }
    }
    // "Section ৯, ৬", "sections ৮ ও ৬", "§৫–§৭", "সেকশন ৫-ক" — তালিকা/রেঞ্জ/ছোট-হাতের/বহুবচনসহ সব সেকশন-নম্বর বের করে।
    // (শুধু বাংলা অঙ্ক — ডকুমেন্টের নিয়ম; ASCII অঙ্কে "section 3" মানে সাধারণত অ্যাপের সেকশন, তাই ইচ্ছা করেই ধরা হয় না)
    const NUM = "[০-৯]+(?:-[কখ])?";
    const REF = new RegExp(`(?:Sections?|সেকশন(?:গুলো)?|§)\\s*(${NUM}(?:\\s*(?:,|ও|এবং|/|–|-|—|বা|and|or|to)\\s*(?:§\\s*)?${NUM})*)`, "gi");
    const sectionRefs = (line) => {
      const out = [];
      for (const m of line.matchAll(REF)) for (const n of m[1].match(new RegExp(NUM, "g"))) out.push(n);
      return out;
    };
    // সেকশন-নম্বর → যে ফাইলে তার "## N." শিরোনাম আছে
    const owner = {};
    for (const h of headingLines) {
      const m = h.line.match(/^## ([০-৯]+(?:-[কখ])?)\. /);
      if (m) owner[m[1]] = path.basename(h.file);
    }
    // স্বয়ংসম্পূর্ণতা: প্রতিটা সেকশন-ফাইল (written-exam/bcs-mcq/primary-mcq/ministry-mcq) + মূল ফাইল = সেই সেকশনের কাজের সবকিছু।
    // তাই এক সেকশন-ফাইল অন্য সেকশন-ফাইলের সেকশনের দিকে পয়েন্ট করতে পারবে না (পাঠক/এজেন্টকে অন্য ফাইলে যেতে হবে — ভুলের ঝুঁকি)।
    // মূল ফাইলের সেকশন (§১–§২, §১০–§১৪) সবসময় পড়া হয়, তাই সেগুলোর উল্লেখ চলবে। roadmap.md/version-history.md এই নিয়মের বাইরে।
    {
      const SECTION_FILES = ["written-exam.md", "bcs-mcq.md", "primary-mcq.md", "ministry-mcq.md"];
      for (const f of SECTION_FILES) {
        const fp = path.join(PARTS_DIR, f);
        if (!fs.existsSync(fp)) continue;
        let inFence = false;
        fs.readFileSync(fp, "utf8").split("\n").forEach((line, i) => {
          if (/^\s*```/.test(line)) { inFence = !inFence; return; }
          if (inFence) return;
          for (const n of sectionRefs(line)) {
            const o = owner[n];
            if (o && o !== f && o !== path.basename(MASTER_DOC)) {
              errors.push(`❌ _docs/job-app/${f}:${i + 1} §${n}-এর উল্লেখ করছে, যা ${o}-এ আছে — সেকশন-ফাইল স্বয়ংসম্পূর্ণ হতে হবে (মূল ফাইল + নিজের ফাইলই যথেষ্ট); প্রয়োজনীয় নিয়ম এই ফাইলে আনুন বা উল্লেখটা সরান।`);
            }
          }
          for (const m of line.matchAll(/\]\(\.\/([A-Za-z0-9_-]+\.md)\)/g)) {
            if (m[1] !== f) errors.push(`❌ _docs/job-app/${f}:${i + 1} অন্য অংশ-ফাইল (${m[1]})-এ লিংক দিচ্ছে — সেকশন-ফাইল স্বয়ংসম্পূর্ণ হতে হবে।`);
          }
        });
      }
    }

    // মূল ফাইল সবসময় পড়া হয় — তাই এর কোনো লাইন "Section N দেখুন" বলে সেকশন-ফাইলের দিকে পাঠালে সেই লাইনেই ফাইলের নাম থাকতে হবে,
    // নইলে অন্য সেকশনের কাজ করা এজেন্ট ভুল ফাইলে চলে যেতে পারে। কোড-ব্লক (ফোল্ডার-ট্রির "section 3" = অ্যাপের সেকশন)
    // এবং "Document index" সেকশন (এটাই নম্বর→ফাইল মানচিত্র) বাদ।
    {
      let inFence = false, inIndex = false;
      masterText.split("\n").forEach((line, i) => {
        if (/^\s*```/.test(line)) { inFence = !inFence; return; }
        if (inFence) return;
        if (line.startsWith("## ")) inIndex = line.startsWith("## 📑");
        if (inIndex) return;
        const missing = new Set();
        for (const n of sectionRefs(line)) {
          const o = owner[n];
          if (o && o !== path.basename(MASTER_DOC) && !line.includes(o)) missing.add(`§${n} (${o})`);
        }
        if (missing.size > 0) {
          errors.push(`❌ _docs/job-app-MD.md:${i + 1} সেকশন-ফাইলের দিকে পাঠাচ্ছে কিন্তু ফাইলের নাম লেখেনি: ${[...missing].join(", ")} — একই লাইনে ফাইলের নাম যোগ করুন (যেমন \`job-app/written-exam.md\`)।`);
        }
      });
    }

    for (const prefix of EXPECTED_HEADINGS) {
      const hits = headingLines.filter((h) => h.line.startsWith(prefix));
      if (hits.length === 0) {
        errors.push(`❌ সেকশন "${prefix.trim()}" _docs/job-app-MD.md বা _docs/job-app/-এর কোনো ফাইলে পাওয়া যায়নি — ভাগ করার সময় হারিয়ে গেছে?`);
      } else if (hits.length > 1) {
        errors.push(
          `❌ সেকশন "${prefix.trim()}" একাধিক জায়গায় আছে (${hits.map((h) => h.file).join(", ")}) — ডুপ্লিকেট; প্রতিটা সেকশন ঠিক একটা ফাইলে থাকবে।`
        );
      }
    }
  }

  // মৃত রেফারেন্স: "job-app/<নাম>.md" বলে কিছু উল্লেখ করা হলে সেই ফাইল আসলেই থাকতে হবে
  // (অংশ-ফাইলের নাম বদলালে পুরনো নামের রেফারেন্স নিঃশব্দে ভেঙে যাওয়া আটকায়)।
  // version-history.md ইতিহাস-খাতা, তাই বাদ — সেখানে পুরনো নাম থাকতেই পারে।
  {
    const scan = [];
    const walk = (dir) => {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walk(p);
        else if (e.name.endsWith(".md")) scan.push(p);
      }
    };
    walk(DOCS_DIR);
    const progress = path.join(ROOT, "written-exam", "PROGRESS.md");
    if (fs.existsSync(progress)) scan.push(progress);
    for (const f of scan) {
      if (path.basename(f) === "version-history.md") continue;
      const text = fs.readFileSync(f, "utf8");
      const names = new Set();
      for (const m of text.matchAll(/job-app\/([A-Za-z0-9_-]+\.md)/g)) names.add(m[1]);
      if (path.dirname(f) === PARTS_DIR) {
        for (const m of text.matchAll(/\]\(\.\/([A-Za-z0-9_-]+\.md)\)/g)) names.add(m[1]);
      }
      for (const n of names) {
        if (!PARTS.includes(n)) {
          errors.push(`❌ ${path.relative(ROOT, f)} এমন ফাইলের উল্লেখ করছে যা নেই: job-app/${n} — অংশ-ফাইলের নাম বদলের পর রেফারেন্স আপডেট হয়নি?`);
        }
      }
    }
  }

  if (!masterText.includes("## ⛔ AI-এর জন্য কঠোর নিষেধাজ্ঞা")) {
    errors.push("❌ job-app-MD.md-এ \"⛔ AI-এর জন্য কঠোর নিষেধাজ্ঞা\" ব্লক নেই — এটা কখনো সরানো যাবে না (ব্লকের নিজের নিয়ম)।");
  }

  // আকার-সতর্কতা (ব্যর্থ করে না) — ভাগ করার উদ্দেশ্যই ছিল মূল ফাইল ছোট রাখা
  const MAIN_WARN_BYTES = 40000;
  const PART_WARN_BYTES = 40000;
  const mainSize = Buffer.byteLength(masterText, "utf8");
  if (mainSize > MAIN_WARN_BYTES) {
    warnings.push(`⚠️  job-app-MD.md এখন ${mainSize} বাইট (সীমা ${MAIN_WARN_BYTES}) — এটা সব কাজেই পড়তে হয়, তাই বড় কোনো অংশ _docs/job-app/-এর ফাইলে সরানো বিবেচনা করুন।`);
  }
  if (fs.existsSync(PARTS_DIR)) {
    for (const f of PARTS) {
      const fp = path.join(PARTS_DIR, f);
      if (!fs.existsSync(fp)) continue;
      const sz = fs.statSync(fp).size;
      if (sz > PART_WARN_BYTES) warnings.push(`⚠️  _docs/job-app/${f} এখন ${sz} বাইট (সীমা ${PART_WARN_BYTES}) — ভাগ করা বা ছাঁটাই বিবেচনা করুন।`);
    }
  }
}

// ── ফলাফল ──────────────────────────────────────────────────────
warnings.forEach((w) => console.warn(w));
if (errors.length > 0) {
  console.error("🔴 ডকুমেন্ট-কনসিস্টেন্সি চেক ব্যর্থ:\n");
  errors.forEach((e) => console.error(e + "\n"));
  process.exit(1);
} else {
  console.log("✅ ডকুমেন্ট-কনসিস্টেন্সি চেক পাস — কোনো স্ট্রাকচারাল ড্রিফট পাওয়া যায়নি।");
  process.exit(0);
}
