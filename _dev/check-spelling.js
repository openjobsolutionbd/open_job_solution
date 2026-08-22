#!/usr/bin/env node
// check-spelling.js
// ============================================================
// bcs-mcq/data/*.js (english.js বাদে) ফাইলের question/options/explanation
// থেকে বাংলা টেক্সট বের করে cspell (bn ডিকশনারি + known-words.txt) দিয়ে
// বানান চেক করে। কোনো আর্গুমেন্ট ছাড়া চালালে সব সাবজেক্ট ফাইল চেক করে;
// নির্দিষ্ট ফাইল দিতে চাইলে: node check-spelling.js bcs-mcq/data/bangla.js
//
// এটা validate_data.js-এর মতো hard-fail করে না — শুধু রিপোর্ট করে
// (advisory), কারণ ফ্ল্যাগ হওয়া অনেক শব্দই আসলে সঠিক টেকনিক্যাল টার্ম।
// রেজাল্ট সবসময় CI লগে দেখা যাবে, কেউ ভুলে স্কিপ করতে পারবে না।
// ============================================================

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');

function loadDataArray(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/=\s*(\[[\s\S]*\])\s*;?\s*$/);
  if (!match) throw new Error(`ডেটা অ্যারে খুঁজে পাওয়া যায়নি: ${filePath}`);
  return new Function('return (' + match[1] + ')')();
}

function buildTextBlob(items) {
  const lines = [];
  for (const item of items) {
    lines.push(`###${item.id}###`);
    if (item.question) lines.push(item.question);
    if (Array.isArray(item.options)) lines.push(item.options.join('   '));
    if (item.explanation) lines.push(item.explanation);
  }
  return lines.join('\n');
}

function defaultFiles() {
  const dir = path.join(ROOT, 'bcs-mcq', 'data');
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.js') && f !== 'english.js')
    .map((f) => path.join('bcs-mcq', 'data', f));
}

function main() {
  const args = process.argv.slice(2);
  const files = args.length > 0 ? args : defaultFiles();

  const tmpDir = fs.mkdtempSync(path.join(__dirname, '.spellcheck-tmp-'));
  const configPath = path.join(__dirname, 'cspell.json');
  let anyIssue = false;

  for (const file of files) {
    const absPath = path.isAbsolute(file) ? file : path.join(ROOT, file);
    const items = loadDataArray(absPath);
    const blob = buildTextBlob(items);
    const txtPath = path.join(tmpDir, path.basename(file, '.js') + '.txt');
    fs.writeFileSync(txtPath, blob, 'utf8');

    let output;
    try {
      output = execFileSync(
        'npx',
        ['cspell', '--config', configPath, '--no-progress', '--no-summary', '--no-color', txtPath],
        { encoding: 'utf8', cwd: ROOT }
      );
    } catch (e) {
      output = e.stdout || '';
    }

    const issueLines = output.split('\n').filter((l) => l.trim());
    if (issueLines.length === 0) {
      console.log(`\u2705 ${file}: কোনো সন্দেহজনক বানান নেই`);
      continue;
    }

    anyIssue = true;
    console.log(`\u26a0\ufe0f  ${file}:`);
    const blobLines = blob.split('\n');
    for (const line of issueLines) {
      const m = line.match(/:(\d+):\d+/);
      if (m) {
        const lineNo = parseInt(m[1], 10) - 1;
        let id = '?';
        for (let i = lineNo; i >= 0; i--) {
          const idm = blobLines[i].match(/^###(.+)###$/);
          if (idm) {
            id = idm[1];
            break;
          }
        }
        const wordm = line.match(/Unknown word \(([^)]+)\)/);
        const word = wordm ? wordm[1] : line;
        console.log(`   [${id}] ${word}`);
      } else {
        console.log(`   ${line}`);
      }
    }
  }

  fs.rmSync(tmpDir, { recursive: true, force: true });

  if (!anyIssue) {
    console.log('\nসব ফাইল ঠিক আছে।');
  } else {
    console.log(
      '\nউপরের শব্দগুলো ঠিক থাকলে known-words.txt এ যোগ করে দিন (এক লাইনে একটা শব্দ), এরপর আর ফ্ল্যাগ হবে না।'
    );
    console.log('(এটা advisory চেক — merge আটকাবে না, তবে লগে সবসময় দেখা যাবে।)');
    process.exitCode = 1;
  }
}

main();
