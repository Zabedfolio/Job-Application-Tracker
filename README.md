## Answers to Questions

###1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Ans: getElementById - শুধু একটা আইডি দিয়ে একটা এলিমেন্ট খুঁজে দেয়।
        getElementsByClassName - একই ক্লাস নামের সব এলিমেন্ট খুঁজে একটা HTMLCollection দেয়।
        querySelector - CSS সিলেক্টর দিয়ে খুঁজে। প্রথম যেটা মিলবে শুধু সেটাই রিটার্ন করে।
        querySelectorAll - querySelector এর মতোই, কিন্তু সব মিলে যাওয়া এলিমেন্টের NodeList দেয়।

### 2. How do you create and insert a new element into the DOM?
   Ans: DOM এলিমেন্ট তৈরি করে, এরপর অ্যাট্রিবিউট যোগ করে, এরপর APPEND করে

### 3. What is Event Bubbling? And how does it work?
   Ans: ইভেন্ট বাবলিং মেইনলি যখন আমরা কোনো এলিমেন্ট এ ক্লিক করি প্রথমে সেই এলিমেন্ট এ গিয়ে এরপর একটা একটা করে ওইটার রুট পর্যন্ত যায়

### 4. What is Event Delegation in JavaScript? Why is it useful?
   Ans: এটার মানে হচ্ছে অনেকগুলা চাইল্ড এলিমেন্টের উপর আলাদা করে ইভেন্ট না লাগিয়ে বরং কমন প্যারেন্ট এর উপর ইভেন্ট লাগানো

### 5. What is the difference between preventDefault() and stopPropagation() methods?
   Ans: preventDefault() - শুধু ব্রাউজারের ডিফল্ট বিহেভিয়র বন্ধ করে।
        stopPropagation() - ইভেন্টের bubbling বন্ধ করে দেয়।
