// মন্ত্রণালয়ের MCQ — পরীক্ষার তালিকা (মেটাডেটা)
// প্রতিটা এন্ট্রির id-র সাথে data/exams/<id>.json ফাইলের নাম হুবহু মিলতে হবে।
// totalQuestions অবশ্যই ওই JSON ফাইলের প্রশ্নসংখ্যার সমান হতে হবে (CI চেক করে)।
// date ফরম্যাট: YYYY-MM-DD

const EXAM_ARCHIVE = [
  {
    id: "uttara-bank-plc-2026-ao",
    ministry: "উত্তরা ব্যাংক পিএলসি",
    post: "সহকারী কর্মকর্তা (জেনারেল)",
    date: "2026-07-24",
    totalQuestions: 74,
  },
  {
    id: "health-ministry-2026-sub-engineer-civil",
    ministry: "স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়",
    post: "সহকারী প্রকৌশলী (সিভিল)",
    date: "2026-08-04",
    totalQuestions: 60,
  },
  {
    id: "bd-navy-2026-storeman",
    ministry: "বাংলাদেশ নৌবাহিনী",
    post: "স্টোরম্যান",
    date: "2026-08-07",
    totalQuestions: 80,
  },
  {
    id: "govt-employee-hospital-2026-senior-staff-nurse",
    ministry: "সরকারি কর্মচারী হাসপাতাল",
    post: "সিনিয়র স্টাফ নার্স",
    date: "2026-08-03",
    totalQuestions: 58,
  },
  {
    id: "baec-2026-laboratory-attendant",
    ministry: "বাংলাদেশ পরমাণু শক্তি কমিশন",
    post: "ল্যাবরেটরি এ্যাটেনডেন্ট",
    date: "2026-07-31",
    totalQuestions: 46,
  },
  {
    id: "culture-ministry-2026-protocol-officer",
    ministry: "সংস্কৃতি বিষয়ক মন্ত্রণালয়",
    post: "প্রটোকল অফিসার",
    date: "2026-07-15",
    totalQuestions: 91,
  },
  {
    id: "public-admin-ministry-2026-assistant-registrar",
    ministry: "জনপ্রশাসন মন্ত্রণালয়",
    post: "সহকারী রেজিস্ট্রার",
    date: "2026-07-13",
    totalQuestions: 57,
  },
  {
    id: "govt-employee-hospital-2026-medical-officer",
    ministry: "সরকারি কর্মচারী হাসপাতাল",
    post: "মেডিকেল অফিসার",
    date: "2026-07-07",
    totalQuestions: 57,
  },
  // পরবর্তী পরীক্ষা এখানে যোগ করুন
];
