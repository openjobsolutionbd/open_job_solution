// check_currency.test.js
// চালানো: node --test written-exam/check_currency.test.js
// আসল ডেটা ছোঁয় না — প্রতিটা টেস্ট নিজের temp ডিরেক্টরিতে ছোট নমুনা ডেটা বানিয়ে চালায়।

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const SCRIPT = path.join(__dirname, 'check_currency.js');

function fixture(overrides = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'currency-'));
  const exams = path.join(dir, 'exams');
  const topics = path.join(dir, 'topics');
  fs.mkdirSync(exams);
  fs.mkdirSync(topics);

  fs.writeFileSync(path.join(exams, 'e1.json'), JSON.stringify([
    { id: 'job-e1-q1', examId: 'job-e1', subject: 'general-knowledge', qno: 1, type: 'paragraph',
      question: 'ব্রিকসের সদস্য সংখ্যা কত?', answer: '১০টি' },
    { id: 'job-e1-q2', examId: 'job-e1', subject: 'general-knowledge', qno: 2, type: 'short-qa',
      question: 'সংক্ষেপে উত্তর দিন:',
      parts: [{ label: 'ক', q: 'বাজেটের পরিমাণ কত?', a: '৭ লাখ কোটি' },
              { label: 'খ', q: 'রাজধানী কোথায়?', a: 'ঢাকা' }] },
  ]));

  fs.writeFileSync(path.join(topics, 'brics.md'),
    '---\ntitle: ব্রিকস\n---\n\n## বর্তমান তথ্য\n\nসদস্য ১১টি।\n\n## পরিবর্তনের ইতিহাস\n\n- পুরনো\n');

  const doc = overrides.doc || {
    version: 1,
    items: [
      { key: 'brics', class: 'slow', topics: ['brics'], status: '', asOf: null, reviewAfter: '2027-03-27',
        targets: [{ id: 'job-e1-q1', part: null, qMatch: 'ব্রিকসের সদস্য' }] },
      { key: 'budget', class: 'fast', topics: [], status: '', asOf: null, reviewAfter: '2026-11-12',
        targets: [{ id: 'job-e1-q2', part: 0, qMatch: 'বাজেটের পরিমাণ' }] },
    ],
  };
  const statusFile = path.join(dir, 'current-status.json');
  fs.writeFileSync(statusFile, JSON.stringify(doc, null, 2));

  const env = { ...process.env, CURRENCY_STATUS_FILE: statusFile, CURRENCY_TOPICS_DIR: topics,
    CURRENCY_EXAMS_DIR: exams, CURRENCY_TODAY: '2026-09-28' };
  const run = (args = [], extraEnv = {}) =>
    spawnSync('node', [SCRIPT, ...args], { env: { ...env, ...extraEnv }, encoding: 'utf8' });
  const read = () => JSON.parse(fs.readFileSync(statusFile, 'utf8'));
  return { dir, topics, statusFile, run, read };
}

test('হ্যাশ বসানোর পর সব পরিষ্কার: exit 0', () => {
  const f = fixture();
  assert.strictEqual(f.run(['--init']).status, 0);
  assert.ok(f.read().items[0].topicHashes.brics, 'হ্যাশ বসেনি');
  assert.strictEqual(f.run().status, 0);
});

test('"বর্তমান তথ্য" অংশ বদলালে TOPIC_CHANGED ধরে (exit 2)', () => {
  const f = fixture();
  f.run(['--init']);
  const p = path.join(f.topics, 'brics.md');
  fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replace('সদস্য ১১টি।', 'সদস্য ১২টি।'));
  const r = f.run();
  assert.strictEqual(r.status, 2);
  assert.match(r.stdout, /brics/);
  assert.match(r.stdout, /বদলেছে/);
});

test('শুধু "পরিবর্তনের ইতিহাস" বদলালে সতর্কতা নয় (শব্দের ঝামেলা এড়ানো)', () => {
  const f = fixture();
  f.run(['--init']);
  const p = path.join(f.topics, 'brics.md');
  fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replace('- পুরনো', '- পুরনো\n- নতুন লাইন'));
  assert.strictEqual(f.run().status, 0);
});

test('শুধু ফাঁকা জায়গা/লাইন বদলালে সতর্কতা নয়', () => {
  const f = fixture();
  f.run(['--init']);
  const p = path.join(f.topics, 'brics.md');
  fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replace('সদস্য ১১টি।', '\n\n  সদস্য   ১১টি।\n'));
  assert.strictEqual(f.run().status, 0);
});

test('reviewAfter পেরোলে REVIEW_DUE (exit 2), আগে হলে না', () => {
  const f = fixture();
  f.run(['--init']);
  assert.strictEqual(f.run().status, 0);
  const r = f.run([], { CURRENCY_TODAY: '2026-12-01' });
  assert.strictEqual(r.status, 2);
  assert.match(r.stdout, /budget/);
  assert.doesNotMatch(r.stdout, /`brics`/);
});

test('প্রশ্ন হারিয়ে গেলে কাঠামোগত ERROR (exit 1)', () => {
  const f = fixture();
  const doc = f.read();
  doc.items[0].targets[0].id = 'job-e1-q99';
  fs.writeFileSync(f.statusFile, JSON.stringify(doc));
  const r = f.run();
  assert.strictEqual(r.status, 1);
  assert.match(r.stderr, /q99/);
});

test('parts-এর ক্রম সরে গেলে (qMatch না মিললে) ERROR ধরে', () => {
  const f = fixture();
  const doc = f.read();
  doc.items[1].targets[0].part = 1; // এখন "রাজধানী..." প্রশ্নে পড়ছে, "বাজেটের..." নয়
  fs.writeFileSync(f.statusFile, JSON.stringify(doc));
  const r = f.run(['--validate-only']);
  assert.strictEqual(r.status, 1);
  assert.match(r.stderr, /qMatch/);
});

test('topic পাতা না থাকলে ERROR', () => {
  const f = fixture();
  fs.unlinkSync(path.join(f.topics, 'brics.md'));
  assert.strictEqual(f.run(['--validate-only']).status, 1);
});

test('status আছে কিন্তু asOf নেই — ERROR', () => {
  const f = fixture();
  const doc = f.read();
  doc.items[0].status = 'কিছু একটা';
  fs.writeFileSync(f.statusFile, JSON.stringify(doc));
  assert.strictEqual(f.run(['--validate-only']).status, 1);
});

test('--accept: হ্যাশ হালনাগাদ, verifiedOn বসে, reviewAfter সরে, সতর্কতা মুছে যায়', () => {
  const f = fixture();
  f.run(['--init']);
  const p = path.join(f.topics, 'brics.md');
  fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replace('সদস্য ১১টি।', 'সদস্য ১২টি।'));
  assert.strictEqual(f.run().status, 2);
  assert.strictEqual(f.run(['--accept', 'brics']).status, 0);
  const it = f.read().items[0];
  assert.strictEqual(it.verifiedOn, '2026-09-28');
  assert.strictEqual(it.reviewAfter, '2027-03-27'); // slow: আজ + ১৮০ দিন
  assert.strictEqual(f.run().status, 0);
});

test('--accept <key> --status: নোট ও asOf বসে', () => {
  const f = fixture();
  const r = f.run(['--accept', 'budget', '--status', 'নতুন বাজেট ৮ লাখ কোটি']);
  assert.strictEqual(r.status, 0);
  const it = f.read().items[1];
  assert.strictEqual(it.status, 'নতুন বাজেট ৮ লাখ কোটি');
  assert.strictEqual(it.asOf, '2026-09-28');
  assert.strictEqual(it.reviewAfter, '2026-11-12'); // fast: আজ + ৪৫ দিন
});

test('--status সব item-এ একসাথে (all) বসাতে দেয় না', () => {
  const f = fixture();
  assert.strictEqual(f.run(['--accept', 'all', '--status', 'x']).status, 1);
});

function withLogs(f, files) {
  // files: { 'ghotonaprobaho/a.md': '...', 'top-news/b.md': '...' } — topics-এর পাশের docs ডিরেক্টরিতে
  const docs = path.dirname(f.topics);
  for (const [rel, body] of Object.entries(files)) {
    const full = path.join(docs, rel);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, body);
  }
  return docs;
}
function logFixture(files) {
  const f = fixture({ doc: { version: 1, items: [
    { key: 'pm', class: 'fast', topics: [], logs: ['ghotonaprobaho:২৬ আগস্ট ২০২৬', 'top-news:২৬ আগস্ট ২০২৬'],
      status: '', asOf: null, reviewAfter: '2027-03-27',
      targets: [{ id: 'job-e1-q1', part: null, qMatch: 'ব্রিকসের সদস্য' }] },
  ] } });
  withLogs(f, files);
  return f;
}
const LOGS = {
  'ghotonaprobaho/a.md': '# লগ\n\n## ২৬ আগস্ট ২০২৬\n- ঘটনা এক।\n- ঘটনা দুই।\n',
  'top-news/a.md': '# টপ নিউজ\n\n## ২৬ আগস্ট ২০২৬\n- হাইলাইট।\n',
};

test('ঘটনাপ্রবাহ/টপ-নিউজ: হ্যাশ বসার পর পরিষ্কার, নতুন বুলেট এলে LOG_CHANGED (exit 2)', () => {
  const f = logFixture(LOGS);
  assert.strictEqual(f.run(['--init']).status, 0);
  assert.ok(f.read().items[0].logHashes['ghotonaprobaho:২৬ আগস্ট ২০২৬'], 'লগের হ্যাশ বসেনি');
  assert.strictEqual(f.run().status, 0);
  fs.appendFileSync(path.join(path.dirname(f.topics), 'ghotonaprobaho/a.md'), '- ঘটনা তিন।\n');
  const r = f.run();
  assert.strictEqual(r.status, 2);
  assert.match(r.stdout, /ঘটনাপ্রবাহ\/টপ-নিউজের তারিখ বদলেছে/);
});

test('একই তারিখ নতুন ফাইলে যোগ হলেও ধরে (নতুন সেশন আলাদা ফাইল বানায়)', () => {
  const f = logFixture(LOGS);
  f.run(['--init']);
  withLogs(f, { 'ghotonaprobaho/b-session.md': '## ২৬ আগস্ট ২০২৬\n- নতুন সেশনের ঘটনা।\n' });
  assert.strictEqual(f.run().status, 2);
});

test('লাইনের ক্রম বদলালে বা হুবহু ডুপ্লিকেট বুলেট এলে সতর্কতা নয়', () => {
  const f = logFixture(LOGS);
  f.run(['--init']);
  withLogs(f, { 'ghotonaprobaho/a.md': '# লগ\n\n## ২৬ আগস্ট ২০২৬\n- ঘটনা দুই।\n- ঘটনা এক।\n- ঘটনা এক।\n' });
  assert.strictEqual(f.run().status, 0);
});

test('লগের তারিখ না থাকলে বা রেফ ফরম্যাট ভুল হলে ERROR (exit 1)', () => {
  const f = logFixture(LOGS);
  const doc = f.read();
  doc.items[0].logs = ['ghotonaprobaho:০১ জানুয়ারি ২০৩০'];
  fs.writeFileSync(f.statusFile, JSON.stringify(doc));
  assert.strictEqual(f.run(['--validate-only']).status, 1);
  doc.items[0].logs = ['ফালতু-রেফ'];
  fs.writeFileSync(f.statusFile, JSON.stringify(doc));
  assert.strictEqual(f.run(['--validate-only']).status, 1);
});

test('--accept লগের হ্যাশ হালনাগাদ করে, সতর্কতা মুছে যায়', () => {
  const f = logFixture(LOGS);
  f.run(['--init']);
  fs.appendFileSync(path.join(path.dirname(f.topics), 'top-news/a.md'), '- আরেকটা।\n');
  assert.strictEqual(f.run().status, 2);
  assert.strictEqual(f.run(['--accept', 'pm']).status, 0);
  assert.strictEqual(f.run().status, 0);
});

test('--find টপিক, ঘটনাপ্রবাহ ও টপ-নিউজ সবখানে খোঁজে', () => {
  const f = logFixture(LOGS);
  fs.writeFileSync(path.join(f.topics, 'x.md'), '## বর্তমান তথ্য\n\nহাইলাইট শব্দ।\n');
  const r = f.run(['--find', 'হাইলাইট']);
  assert.match(r.stdout, /topic: x/);
  assert.match(r.stdout, /top-news:২৬ আগস্ট ২০২৬/);
});

function watchFixture(files, watch) {
  const f = fixture({ doc: { version: 1, items: [
    { key: 'ukr', class: 'slow', topics: [], watch,
      status: '', asOf: null, reviewAfter: '2027-03-27',
      targets: [{ id: 'job-e1-q1', part: null, qMatch: 'ব্রিকসের সদস্য' }] },
  ] } });
  withLogs(f, files);
  return f;
}
const WLOGS = {
  'ghotonaprobaho/a.md': '## ০১ জুলাই ২০২৬\n- ইউক্রেন যুদ্ধ চলছে।\n- অন্য খবর।\n',
  'top-news/a.md': '## ০১ জুলাই ২০২৬\n- আসিয়ান সম্মেলন।\n',
};

test('শব্দ-নজর: নতুন তারিখে শব্দ এলে WATCH_NEW (exit 2), আগের বুলেটে নয়', () => {
  const f = watchFixture(WLOGS, ['ইউক্রেন']);
  f.run(['--init']);
  assert.deepStrictEqual(f.read().items[0].watchSeen.length, 1);
  assert.strictEqual(f.run().status, 0);
  withLogs(f, { 'ghotonaprobaho/b.md': '## ১৫ জুলাই ২০২৬\n- ইউক্রেনে যুদ্ধবিরতি ঘোষণা।\n' });
  const r = f.run();
  assert.strictEqual(r.status, 2);
  assert.match(r.stdout, /নজরে-রাখা শব্দে নতুন খবর/);
  assert.match(r.stdout, /যুদ্ধবিরতি/);
});

test('শব্দ-নজর: শব্দ নেই এমন নতুন বুলেটে সতর্কতা নয়', () => {
  const f = watchFixture(WLOGS, ['ইউক্রেন']);
  f.run(['--init']);
  withLogs(f, { 'ghotonaprobaho/b.md': '## ১৫ জুলাই ২০২৬\n- সম্পর্কহীন খবর।\n' });
  assert.strictEqual(f.run().status, 0);
});

test('শব্দ-নজর: --accept-এর পর পরিষ্কার', () => {
  const f = watchFixture(WLOGS, ['ইউক্রেন']);
  f.run(['--init']);
  withLogs(f, { 'ghotonaprobaho/b.md': '## ১৫ জুলাই ২০২৬\n- ইউক্রেনে যুদ্ধবিরতি।\n' });
  assert.strictEqual(f.run().status, 2);
  assert.strictEqual(f.run(['--accept', 'ukr']).status, 0);
  assert.strictEqual(f.run().status, 0);
});

test('শব্দ-নজর: watch ফাঁকা বা ভুল হলে ERROR (exit 1)', () => {
  const f = watchFixture(WLOGS, []);
  assert.strictEqual(f.run(['--validate-only']).status, 1);
});

test('আসল current-status.json কাঠামোগতভাবে ঠিক আছে', () => {
  const r = spawnSync('node', [SCRIPT, '--validate-only'], { encoding: 'utf8', env: { ...process.env, CURRENCY_STATUS_FILE: '', CURRENCY_TOPICS_DIR: '', CURRENCY_EXAMS_DIR: '' } });
  assert.strictEqual(r.status, 0, r.stderr);
});
