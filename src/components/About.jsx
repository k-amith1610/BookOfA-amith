import React from 'react';
import WebsiteName from './WebsiteName';

const About = () => {
  return (
    <div className="min-h-screen dark:bg-slate-900 py-28 px-4 md:px-24">
      <div className="text-center mb-6">
        <WebsiteName />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">About <WebsiteName /></h1>
      <p className="text-lg text-gray-700 dark:text-white mb-4">
        At BookOfA, we believe that knowledge is the key to unlocking endless opportunities. We are dedicated to providing high-quality educational content to learners around the world. Our platform offers a vast library of courses, covering a wide range of topics, to help you enhance your skills and achieve your personal and professional goals.
      </p>
      <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-black to-red-500 mb-3">Our Mission</h2>
      <p className="text-lg text-gray-700 dark:text-white mb-4">
        Our mission is to make education accessible and affordable for everyone. We strive to empower individuals by providing them with the tools and resources they need to succeed. Whether you're looking to learn a new skill, deepen your understanding of a particular subject, or advance your career, BookOfA has something for you.
      </p>
      <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-black to-red-500 mb-3">Our Vision</h2>
      <p className="text-lg text-gray-700 dark:text-white mb-4">
        We envision a world where everyone has the opportunity to learn and grow, regardless of their background or circumstances. By leveraging the power of technology, we aim to bridge the gap between education and accessibility, ensuring that quality learning experiences are within reach for all.
      </p>
      <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-black to-red-500 mb-3">Why Choose BookOfA?</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 dark:text-white mb-4 pl-5">
        <li>Extensive Library of Courses: Our platform boasts a comprehensive collection of courses in various fields, including business, technology, arts, and more. Each course is designed by industry experts and tailored to meet the needs of today's learners.</li>
        <li>Free and Premium Content: At BookOfA, we offer a mix of free and premium courses to cater to different learning needs and budgets. Our free courses provide a great starting point for beginners, while our premium courses offer in-depth knowledge and advanced skills.</li>
        <li>Expert Instructors: Learn from the best in the industry. Our instructors are seasoned professionals with years of experience in their respective fields. They bring practical insights and real-world knowledge to the table, ensuring that you gain valuable skills.</li>
        <li>Flexible Learning: We understand that everyone has different learning preferences and schedules. That's why our courses are available online, allowing you to learn at your own pace, anytime and anywhere.</li>
        <li>Community and Support: Join a vibrant community of learners and educators. Share your experiences, ask questions, and collaborate with others. Our support team is also here to assist you with any queries or concerns.</li>
      </ul>
      <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-black to-red-500 mb-3">Our Values</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 dark:text-white mb-4 pl-5">
        <li>Integrity: We uphold the highest standards of honesty and transparency in all our interactions and offerings.</li>
        <li>Innovation: We continuously seek new and better ways to deliver educational content and enhance the learning experience.</li>
        <li>Inclusivity: We are committed to creating an inclusive environment where everyone feels welcome and valued.</li>
        <li>Excellence: We strive for excellence in everything we do, from the quality of our courses to the support we provide.</li>
      </ul>
      <p className="text-lg text-gray-700 dark:text-white mb-4">
        BookOfA is more than just an online learning platform; it's a community of passionate learners and educators. We invite you to join us on this journey of discovery and growth. Whether you're a student, a professional, or a lifelong learner, we have the resources you need to succeed.
      </p>
      <p className="text-lg text-gray-700 dark:text-white mb-4">
        Thank you for choosing BookOfA. Together, let's unlock the door to knowledge and open up a world of possibilities.
      </p>
    </div>
  );
}

export default About;
