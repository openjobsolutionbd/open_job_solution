# written-exam/data/exams/

এই ফোল্ডারে প্রতিটা পরীক্ষার প্রশ্ন আলাদা JSON ফাইলে রাখা হয়েছে।  
`written-exam/data/job-solution.js` এখন **auto-generated** — সরাসরি ওই ফাইল এডিট করবেন না।

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

2. **`job-solution.js` রিজেনারেট করুন:**
   ```bash
   node written-exam/build_job_solution.js
   ```

3. **ডেটা যাচাই করুন:**
   ```bash
   node _dev/validate_data.js
   ```

4. **EXAM_INDEX.md আপডেট করুন (ঐচ্ছিক):**
   ```bash
   node written-exam/generate_index.js
   ```

5. **Commit করুন** (feature branch থেকে, `main`-এ সরাসরি push নয়):
   ```bash
   git add written-exam/data/exams/<examId>.json written-exam/data/job-solution.js
   git commit -m "feat: <examId> এক্সাম যোগ"
   ```

---

## কেন এই স্ট্রাকচার?

আগে সব পরীক্ষার ডেটা একটাই `job-solution.js`-এ ছিল। একাধিক সেশন সমান্তরালে কাজ করলে  
সবাই ফাইলের শেষে যোগ করত — git বারবার merge conflict দেখাত, যদিও আসলে কোনো দ্বন্দ্ব ছিল না।  
এখন প্রতিটা পরীক্ষা আলাদা ফাইলে — দুটো সেশন কখনো একই ফাইল touch করবে না, তাই conflict structurally অসম্ভব।
