আজকে ছক্কা হাঁকানোর দিন তাই রিলিজ হচ্ছে ES6 (মডিউল ৩০)

#module_release #intermediate_js_milestone #module_30

আজকের মাইলস্টোন এর নাম্বার ৬। শিখবেও ES এর ৬। আজকের মডিউল কে ৫ দিয়ে ভাগ করলেও পাবে ৬। শুধু ৬, আর ৬ আর ৬। তাই এইবার ছক্কা পেটাবে তুমি। এই মাইলস্টোন দিয়ে তুমি মূলত ES6 এবং কয়েকটা ইন্টারমেডিয়েট লেভেলের কনসেপ্টের সাথে পরিচিত হবে। সেখানে গুরুত্বপূর্ণ জিনিস হবে API অথাৎ সার্ভার থেকে ডাটা লোড করে ডানামিক ওয়েবসাইট বানানোর প্রাথমিক জিনিসগুলো শিখবে এই মাইলস্টোন এ। ES6 আর API ছাড়া বাকি জিনিসগুলো ইন্টারভিউতে বা একটু ভালো লেভেলের ডেভেলপার হওয়ার জন্য কাজে লাগবে তাই সেগুলা এখন একটু বুঝে নিতে পারলে ভালো।  

 

.

 

আজকের ES6 মডিউল:

আজকের মডিউলটা একটু ভালো করে দেখার চেষ্টা করো। যতটুকু সম্ভব বুঝার চেষ্টা করো। প্রথমেই আসবে গত মাইলস্টোন এর রিক্যাপ। অর্থাৎ গত দুইটা মাইলস্টোন এ যে মেইন মেইন জিনিসগুলো দেখেছো সেগুলাকে আবার নতুন করে বুঝানো হয়েছে। এর পর টুক টুক করে আসবে সিম্পল পাঁচটা জিনিস। তার মধ্যে আবার দুইটা জিনিস তুমি আগে থেকেই জানো। সো, এই মডিউলটা তোমার জন্য সোজা ই হবে। 

 

একদম প্ৰথমেই আছে const এবং let । যদিও এই const এবং let সম্পর্কে ইন্ডাইরেক্টলি আগেও জেনেছো তারপরেও আরেকবার নতুন করে var এর পরিবর্তে cosnt, let ইউজ করার সিস্টেম তোমাকে দেখানো হবে। এর পর আছে টেমপ্লেট স্ট্রিং। সেই টেমপ্লেট স্ট্রিং এর কিছু জিনিস তুমি হালকা করে আগেও দেখেছো। আর ব্র্যান্ড নিউ তিনটা জিনিস এর মধ্যে আছে ডিফল্ট প্যারামিটার, arrow ফাংশন আর স্প্রেড অপারেটর। 

 

.

 

আজকে জিনিসগুলা দেখে রাখো। যতটুকু সম্ভব বুঝার চেষ্টা করো। নোটস নাও। এবং এই জিনিসগুলা ফিউচারে বারবার ইউজ করবে। এর মধ্যে একটা হচ্ছে ফাংশন এর মধ্যে যেসব প্যারামিটার আছে। সেই সব প্যারামিটার এর মান যদি দেয়া না হয় তাহলে তুমি কিভাবে default parameter হিসেবে দিতে পারবে। এরপর আরেকটা জিনিস আমরা দেখবো। যেটাকে বলে Template string । এই টেম্পলেট স্ট্রিং ফিউচারে আমরা অনেক অনেক ব্যবহার করবো। বিশেষ করে দ্রুত একটা স্ট্রিং এর মধ্যে ডাইনামিক ভ্যালু বা ভেরিয়েবল মান বসিয়ে দেয়ার জন্য খুবই কাজে লাগে। 

 

.

 

এই ছাড়াও Spread operator নামে খুবই চমৎকার একটা জিনিস। যেটা দিয়ে অনেক পাওয়ারফুল জিনিস। যেটা দিয়ে আমরা খুবই সহজেই অনেকগুলা array এর মান একসাথ করে একটা array বানিয়ে ফেলা যায়। এমনকি একলাইন কোড লিখে array এর মধ্যে max বা min ভ্যালু বের করে ফেলা যায়।  

.

আজকের মডিউল থেকে নিচের তিনটা জিনিস মাস্ট বুঝে নিবে 

১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় 

২. টেম্পলেট স্ট্রিং এর মধ্যে ডাইনামিক ভাবে কিভাবে কোন একটা ভেরিয়েবলকে বসানো যায় 

৩. একটা প্যারামিটার ওয়ালা arrow ফাংশন কিভাবে ডিক্লেয়ার করতে হয়। 

.

নিচের তিনটা জিনিস বুঝে নিতে পারলে ফিউচারে কাজে লাগবে 

১. কিভাবে থ্রি ডট দিয়ে (...) একটা এরে এর সব এলিমেন্ট বসিয়ে দেয়া যায় 

২. কোন একটা ফাংশনে এর প্যারামিটার ভ্যালু না দিলে কিভাবে ডিফল্ট প্যারামিটার দিতে হয় 

৩. অনেক লাইন ওয়ালা arrow ফাংশন কিভাবে লিখতে হয়। আর কিভাবে সেটা থেকে রিটার্ন করতে হয় 

ব্যস, এই টুকুই। 

 

 

.

 

মাইলস্টোন ৬ এর টেনটেটিভ আউটলাইন: 

আগস্ট ২২: মডিউল ৩০: JS Recap, ES6 Intro

আগস্ট ২৩: মডিউল ৩১: ES6 Recap, More ES6

আগস্ট ২৪: মডিউল ৩১.৫: প্রাকটিস ডে (নো মডিউল)

আগস্ট ২৪: রাত ৯.০০ কন্সেপচুয়াল সেশন 

আগস্ট ২৫: মডিউল ৩২: Getting started with API

আগস্ট ২৬: মডিউল ৩৩: More API With Example

আগস্ট ২৭: মডিউল ৩৩.৫: Short module (Recap)

আগস্ট ২৭: রাত ৯.০০ কন্সেপচুয়াল সেশন 

আগস্ট ২৮: নো Video: API প্রাকটিস ডে

আগস্ট ২৯: মডিউল ৩৪: JavaScript Tricky Concepts

আগস্ট ৩০: মডিউল ৩৫:Object Mastering

আগস্ট ৩১: মডিউল ৩৫.৫:Practice/Revision Day  

আগস্ট ৩১: রাত ৯.০০ কন্সেপচুয়াল সেশন 

সেপ্টেম্বর ১: মডিউল ৩৬: এসাইনমেন্ট ৬

সেপ্টেম্বর ২: মাইলস্টোন ৭

---

প্রথমে দুই একদিন ডাক মারবে 

এরপর চেষ্টা করতে করতে সিঙ্গেল ডাবলস হবে 

ভুল করে দুই-একটা বাউন্ডারি হবে 

হতে হতে একদিন হয়ে যাবে ছক্কা 

তখন সামলাতে পারবে ES6 এর ধাক্কা
