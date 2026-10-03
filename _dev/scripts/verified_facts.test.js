// verified_facts.test.js
// চালানো: node --test _dev/scripts/verified_facts.test.js
// আসল খাতা ছোঁয় না — প্রতিটা টেস্ট নিজের temp ডিরেক্টরিতে ছোট নমুনা বানায়।

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const SCRIPT = path.join(__dirname, 'verified_facts.js');

function fixture(facts) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'vf-'));
  const jsonFile = path.join(dir, 'verified-facts.json');
  const mdFile = path.join(dir, 'verified-facts.md');
  const statusFile = path.join(dir, 'current-status.json');
  const doc = {
    version: 1, title: 'টেস্ট খাতা', intro: ['ভূমিকা'],
    sections: [{ title: 'রাজনীতি', facts: facts || [
      { id: 'pm', label: 'প্রধানমন্ত্রী', status: 'ক খ', date: '2026-09-30', source: 'টেস্ট', review: '2027-02' },
      { id: 'war', label: 'যুদ্ধ', status: 'চলছে', date: '2026-09-30', source: 'টেস্ট', review: 'fixed' },
      { id: 'dc', label: 'ডিসি', status: 'পাওয়া যায়নি', date: '2026-09-30', source: 'টেস্ট', review: 'always' },
    ] }],
    unverifiedTitle: 'অযাচাই', unverified: ['কিছু একটা'], bcsNoteTitle: 'সতর্কতা', bcsNote: 'নোট',
    caughtErrorsTitle: 'ভুল', caughtErrors: ['একটা ভুল'],
  };
  fs.writeFileSync(jsonFile, JSON.stringify(doc, null, 2));
  fs.writeFileSync(statusFile, JSON.stringify({ items: [{ key: 'q-pm', facts: ['pm'] }] }));
  const env = { ...process.env, VF_JSON_FILE: jsonFile, VF_MD_FILE: mdFile, VF_STATUS_FILE: statusFile, VF_TODAY: '2026-10-02' };
  const run = (args, extra = {}) => spawnSync('node', [SCRIPT, ...args], { env: { ...env, ...extra }, encoding: 'utf8' });
  return { dir, jsonFile, mdFile, run, read: () => JSON.parse(fs.readFileSync(jsonFile, 'utf8')) };
}

test('render না করলে --check ব্যর্থ, render-এর পর পাস', () => {
  const f = fixture();
  assert.strictEqual(f.run(['--check']).status, 1);
  assert.strictEqual(f.run(['--render']).status, 0);
  assert.strictEqual(f.run(['--check']).status, 0);
  assert.match(fs.readFileSync(f.mdFile, 'utf8'), /২০২৭-০২/); // বাংলা সংখ্যা
});

test('.md হাতে বদলালে --check ধরে ফেলে', () => {
  const f = fixture();
  f.run(['--render']);
  fs.appendFileSync(f.mdFile, '\nহাতে লেখা লাইন\n');
  const r = f.run(['--check']);
  assert.strictEqual(r.status, 1);
  assert.match(r.stderr, /মিলছে না/);
});

test('--due: মেয়াদ না পেরোলে exit 0; পেরোলে exit 2 আর নির্ভরশীল প্রশ্ন দেখায়', () => {
  const f = fixture();
  assert.strictEqual(f.run(['--due']).status, 0);
  const r = f.run(['--due'], { VF_TODAY: '2027-02-10' });
  assert.strictEqual(r.status, 2);
  assert.match(r.stdout, /`pm`/);
  assert.match(r.stdout, /q-pm/);
  assert.doesNotMatch(r.stdout, /`war`/); // fixed
  assert.doesNotMatch(r.stdout, /`dc`/);  // always — সাপ্তাহিক Issue-তে বারবার আসবে না
});

test('--update: অবস্থা, তারিখ ও .md বদলায়; id ভুল হলে ব্যর্থ', () => {
  const f = fixture();
  f.run(['--render']);
  const r = f.run(['--update', 'pm', '--status', 'নতুন নাম', '--review', '2027-09']);
  assert.strictEqual(r.status, 0, r.stderr);
  const pm = f.read().sections[0].facts[0];
  assert.strictEqual(pm.status, 'নতুন নাম');
  assert.strictEqual(pm.date, '2026-10-02');
  assert.strictEqual(pm.review, '2027-09');
  assert.strictEqual(f.run(['--check']).status, 0);
  assert.strictEqual(f.run(['--update', 'nai', '--status', 'x']).status, 1);
});

test('কাঠামো ভুল ধরে: ডুপ্লিকেট id, ভুল তারিখ, status-এ | চিহ্ন', () => {
  const dup = { id: 'a', label: 'ল', status: 's', date: '2026-09-30', source: 'x', review: 'fixed' };
  assert.strictEqual(fixture([dup, { ...dup }]).run(['--check']).status, 1);
  assert.strictEqual(fixture([{ ...dup, date: '30-09-2026' }]).run(['--check']).status, 1);
  assert.strictEqual(fixture([{ ...dup, status: 'ক | খ' }]).run(['--check']).status, 1);
  assert.strictEqual(fixture([{ ...dup, review: 'শীঘ্রই' }]).run(['--check']).status, 1);
});

test('আসল খাতা ঠিক আছে এবং .md মিলছে', () => {
  const r = spawnSync('node', [SCRIPT, '--check'], { encoding: 'utf8', env: { ...process.env, VF_JSON_FILE: '', VF_MD_FILE: '', VF_STATUS_FILE: '', VF_TODAY: '' } });
  assert.strictEqual(r.status, 0, r.stderr + r.stdout);
});
