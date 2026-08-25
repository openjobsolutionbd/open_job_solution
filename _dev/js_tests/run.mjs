#!/usr/bin/env node
// _dev/js_tests/run.mjs
//
// প্রতিটা সেকশনের (bcs-mcq/primary-mcq/written-exam) app.js-এর জন্য jsdom-ভিত্তিক
// regression test চালায় (open_current_affairs-এর scripts/js_tests প্যাটার্ন
// অনুসরণ করে বানানো)। নতুন সেকশনের টেস্ট যোগ করতে নিচের import তালিকায়
// একটা লাইন যোগ করুন — প্রতিটা টেস্ট-ফাইল `export const tests = [...]` দেয়।
//
// চালানোর নিয়ম: node _dev/js_tests/run.mjs (বা npm run test:js)
import { tests as bcsMcqTests } from "./bcs-mcq.test.mjs";

const tests = [...bcsMcqTests];
// এখানে ভবিষ্যতে যোগ করুন: primary-mcq.test.mjs, written-exam.test.mjs ইত্যাদি।

async function main() {
  let passed = 0;
  const failed = [];
  for (const t of tests) {
    try {
      await t.fn();
      passed++;
    } catch (err) {
      failed.push({ name: t.name, error: err });
    }
  }
  if (failed.length === 0) {
    console.log(`✓ js regression tests পাস — ${passed}/${tests.length}টা।`);
    process.exit(0);
  } else {
    console.log(`✗ js regression tests ব্যর্থ — ${passed}/${tests.length} পাস, ${failed.length}টা ব্যর্থ:\n`);
    for (const f of failed) {
      console.log(`  ✗ ${f.name}`);
      console.log(`    ${f.error.message}\n`);
    }
    process.exit(1);
  }
}

main();
