# written-exam/data/exams/

এই ফোল্ডারে প্রতিটা পরীক্ষার প্রশ্ন আলাদা JSON ফাইলে রাখা হয়েছে — এটাই একমাত্র সোর্স।  
`written-exam/index.html` কোনো পরীক্ষা খোলার সময় সরাসরি এখান থেকে সেই একটা ফাইল `fetch()` করে লোড করে (lazy loading) — আর কোনো একটা বড় "সব প্রশ্ন একসাথে" ফাইল (আগেকার `job-solution.js`) নেই, বাদ দেওয়া হয়েছে।

---

## নতুন পরীক্ষা যোগ করার নিয়ম

1. **নতুন ফাইল তৈরি করুন** এই ফোল্ডারে:
   ```
   written-exam/data/exams/<examId>.json
   ```
   ফাইলের কনটেন্ট হবে সেই পরীক্ষার সব প্রশ্নের একটা JSON array।  
   উদাহরণ (`job-2025-example-office-asst.json`):
   ```json
   [
     {
       "id": "job-2025-example-office-asst-q1",
       "examId": "job-2025-example-office-asst",
       "subject": "bangla",
       "topic": "বাংলা",
       "qno": 1,
       "marks": 10,
       "type": "paragraph",
       "question": "...",
       "answer": "..."
     }
   ]
   ```
   ফাইলের নামই সরাসরি ব্রাউজার fetch করে, তাই ফাইলের নাম **অবশ্যই** `examId`-এর সাথে হুবহু মিলতে হবে।

2. **যাচাই করুন** (`_dev/` ফোল্ডার থেকে):
   ```bash
   cd _dev && npm run validate
   ```
   (বা `npm run check` — এখন এটাই শুধু validate চালায়)
   npm ছাড়া সরাসরি (repo root থেকে):
   ```bash
   node _dev/validate_data.js
   ```

3. **EXAM_INDEX.md আপডেট করুন (ঐচ্ছিক, `_dev/` থেকে):**
   ```bash
   cd _dev && npm run index
   ```

4. **Commit করুন** (feature branch থেকে, `main`-এ সরাসরি push নয়):
   ```bash
   git add written-exam/data/exams/<examId>.json
   git commit -m "feat: <examId> এক্সাম যোগ"
   ```

---

## কেন এই স্ট্রাকচার?

আগে সব পরীক্ষার ডেটা একটাই ফাইলে (`job-solution.js`) ছিল। একাধিক সেশন সমান্তরালে কাজ করলে  
সবাই ফাইলের শেষে যোগ করত — git বারবার merge conflict দেখাত, যদিও আসলে কোনো দ্বন্দ্ব ছিল না।  
এখন প্রতিটা পরীক্ষা আলাদা ফাইলে — দুটো সেশন কখনো একই ফাইল touch করবে না, তাই conflict structurally অসম্ভব।

এরপর `job-solution.js`-কে **build-time auto-generated** করা হয়েছিল (`exams/*.json` থেকে রিজেনারেট), কিন্তু সেটাও পরে সম্পূর্ণ বাদ দেওয়া হয়েছে — ব্রাউজার এখন সরাসরি প্রয়োজনীয় এক্সামের JSON ফাইলটাই `fetch()` করে (runtime lazy loading), ফলে প্রথমবার সাইট খোলার সময় ~1.4MB ডেটা একসাথে ডাউনলোড হওয়ার বদলে শুধু যে এক্সাম খোলা হচ্ছে তারই ছোট ফাইল লোড হয়।

**Trade-off:** যে এক্সাম আগে একবারও খোলা হয়নি, সেটা offline-এ দেখা যাবে না (Service Worker শুধু আগে-fetch-করা এক্সাম runtime-এ cache করে রাখে)।
