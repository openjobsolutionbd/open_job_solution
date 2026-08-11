# TEST_CHECKLIST

কোনো বড় পরিবর্তনের পর deploy করার আগে/পরে এই তালিকা ধরে ৫–১০ মিনিটে যাচাই করো।

## Build

- [ ] `python3 scripts/build_index.py` exit code 0 দিয়ে শেষ হয়।
- [ ] `python3 scripts/verify_site.py` exit code 0 দিয়ে শেষ হয় (এটা build-এর পরে পুরো সাইট জুড়ে সব ফাইল একসাথে মিলিয়ে দেখে — টপিক-সংখ্যা মিলছে কিনা, কোনো `[[slug]]` ভাঙা লিংক নেই কিনা, প্রতিটা টপিকের পাতা/sitemap এন্ট্রি তৈরি হয়েছে কিনা, VERSION সব জায়গায় মিলছে কিনা। এটা এখন GitHub Action-এ build-এর পরপরই স্বয়ংক্রিয়ভাবে চলে — fail করলে generated output commit/push হয় না)।
- [ ] ভুল frontmatter দিয়ে test করলে build non-zero exit দেয়।
- [ ] `docs/topics/`-এর প্রতিটা valid `.md` ফাইল `docs/topics-index.json`-এ ইনডেক্স হয়েছে (কপি-তুলনার আলাদা `topics/` সোর্স ফোল্ডার আর নেই — single-copy architecture)।
- [ ] `docs/topics-index.json`-এর topic count, `docs/topics/`-এ থাকা valid `.md` ফাইলের সংখ্যার সঙ্গে মেলে।
- [ ] `docs/sw.js`-এর CACHE_NAME-এ `VERSION`-এর সংখ্যা বসেছে।
- [ ] `docs/version.json`-এর ভার্সন `VERSION` ফাইলের সংখ্যার সাথে মেলে।
- [ ] `docs/mcq-index.json` বা কোনো quiz output তৈরি হয় না।
- [ ] repo-তে `mcq/` বা `revision/` নামে কোনো ফোল্ডার অবশিষ্ট নেই।
- [ ] `scripts/__pycache__/` বা অন্য কোনো `*.pyc` ফাইল কমিট হয়নি।

## Website

- [ ] Homepage লোড হয় এবং topic list দেখা যায়।
- [ ] Search title, tags ও full text-এ কাজ করে।
- [ ] Topic খুললে Markdown ঠিকভাবে render হয়।
- [ ] URL hash-এ topic slug বসে এবং shareable link কাজ করে।
- [ ] দৈনিক ঘটনাপ্রবাহ view-তে মাস অনুযায়ী দিন-তালিকা ঠিকভাবে দেখা যায়।
- [ ] দৈনিক ঘটনাপ্রবাহ মোডে ভাসমান সার্চ বাডি দেখা যায় এবং কাজ করে।
- [ ] `[[topic-slug]]` দেওয়া ঘটনাপ্রবাহ এন্ট্রিতে লিংক-ব্যাজ দেখা যায় এবং ক্লিক করলে সঠিক টপিক খোলে।
- [ ] টপ নিউজ ট্যাব লোড হয় এবং তারিখ-ভিত্তিক হাইলাইট দেখা যায়।
- [ ] প্রতিটা টপিকের `docs/topic/<slug>/index.html` পাতা খুললে সঠিক meta description/canonical দেখা যায় এবং লোড হয়েই মূল অ্যাপে (`/#slug`) রিডাইরেক্ট করে।
- [ ] `docs/sitemap.xml`-এ হোমপেজ ও সবগুলো টপিক পাতার URL আছে; `docs/robots.txt` সঠিকভাবে সার্ভ হয়।
- [ ] Dashboard, quiz button বা quiz screen নেই (এগুলো এই প্রজেক্টের scope-এ নেই)।

## Mobile ও error handling

- [ ] Mobile view-তে topic খুলে তালিকায় ফেরা যায়।
- [ ] Topic খোলা অবস্থায় search ও tag click করলে তালিকা ঠিক থাকে।
- [ ] Browser Back চাপলে article view থেকে তালিকায় ফেরা যায়।
- [ ] না-থাকা slug দিলে পরিষ্কার error দেখায়।
- [ ] Sanitizer-এর কারণে topic content-এ HTML event handler চালু হয় না।

## Offline / PWA

- [ ] একবার site visit করার পর offline reload-এ app shell খোলে।
- [ ] আগে দেখা topic offline-এ খোলা যায়।
- [ ] Service worker install-এর সময় কোনো না-থাকা file cache করতে যায় না।
- [ ] PWA icon ও Add to Home Screen কাজ করে।

## Theme ও version

- [ ] Dark mode কাজ করে এবং preference মনে থাকে।
- [ ] VERSION বাড়িয়ে rebuild করলে নতুন service-worker cache তৈরি হয়।
- [ ] Footer-এ সংস্করণ নম্বর দেখা যায় এবং সেটা `VERSION` ফাইলের সংখ্যার সাথে মেলে।
- [ ] `docs/version.json` না থাকলে/লোড ব্যর্থ হলেও পাতা ভাঙে না (footer-এ ভার্সন অংশ চুপচাপ বাদ পড়ে)।
