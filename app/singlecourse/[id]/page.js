"use client"; 

import React, { useEffect, useState } from 'react';

export default function Page({ params }) {
  const { id } = params; 

  const [course, setCourse] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/SimonLeo28/NEXGEN/refs/heads/master/courseData.json"); 
        const data = await response.json();
        const foundCourse = data.find(course => course._id === parseInt(id)); 
        setCourse(foundCourse);
      } catch (error) {
        console.error('Error fetching course data:', error);
      } finally {
        setLoading(false); 
      }
    };

    if (id) {
      fetchCourseData(); 
    }
  }, [id]);

  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // If course is not found
  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <section className="bg-black p-10 flex justify-between items-center shadow-lg rounded-lg mx-5">
        <div>
          <h1 className="text-[#2596BE] text-4xl font-bold">{course.title}</h1>
          <p className="text-gray-400 mt-2">{course.description}</p>
          <div className="flex items-center text-gray-400 mt-4">
            <span className="mr-5">4.5 ⭐ (5000 Ratings)</span>
            <span className="mr-5">30,000 students enrolled</span>
            <span>Last updated: Sep 2023</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end">
          <p className="text-3xl font-bold text-white">${course.price}</p>
          <button className="bg-[#2596BE] text-white py-2 px-6 rounded-lg hover:bg-[#1c768a] mt-4 transition duration-300">
            Buy Now
          </button>
        </div>
      </section>

      <div className="flex flex-row gap-10 p-10">
        {/* Left Side - Course Content */}
        <div className="w-2/3">
          <section className="mb-10 p-5 border border-gray-300 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-black">What you'll learn</h2>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <ul className="text-black list-disc list-inside">
                <li>Master Python programming by building 100 unique projects over 100 days.</li>
                <li>Learn to program professionally in Python.</li>
                <li>Create a portfolio of 100 Python projects for developer job applications.</li>
              </ul>
              <ul className="text-black list-disc list-inside">
                <li>Build real-world apps and games with Python.</li>
                <li>Understand automation, web development, and data science.</li>
                <li>Learn to apply Python in professional environments.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10 p-5 border border-gray-300 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-black">Course Content</h2>
            <p className="text-gray-600 mt-3">25 sections • 120 lectures • 60 hours total length</p>

            {/* course content */}
            <div className="mt-5">
              <div className="mt-5">
                <ul className="list-disc text-black list-inside">
                  <li>Introduction to Python (10 lectures)</li>
                  <li>Advanced Python Concepts (8 lectures)</li>
                  <li>Web Development with Flask (15 lectures)</li>
                  <li>Automation and Scripting (12 lectures)</li>
                  <li>Data Science with Pandas (18 lectures)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 p-5 border border-gray-300 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-black">Requirements</h2>
            <ul className="text-black list-disc list-inside mt-5">
              <li>No programming experience needed – I'll teach you everything you need to know.</li>
              <li>A Mac or PC computer with access to the internet.</li>
              <li>Step-by-step guidance to install and set up all software.</li>
            </ul>
          </section>

          <section className="mb-10 p-5 border border-gray-300 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-black">Who is this course for?</h2>
            <ul className="list-disc text-black list-inside mt-5">
              <li>If you want to learn to code through fun and useful projects, this course is for you.</li>
              <li>If you are a complete beginner, this course will make you a Python professional.</li>
              <li>If you're an intermediate Python programmer, the 100 days of code challenge will help you level up.</li>
            </ul>
          </section>
        </div>

        {/* Right Side - Sidebar with Price & CTA */}
        <div className="w-1/3 p-5 h-fit bg-gray-100 rounded-lg shadow-lg">
          <div className="mb-10">
            <h3 className="text-xl font-bold text-black">This Course Includes:</h3>
            <ul className="list-inside mt-5 text-black">
              <li>✔️ 60 hours on-demand video</li>
              <li>✔️ 120 downloadable resources</li>
              <li>✔️ Full lifetime access</li>
              <li>✔️ Access on mobile and TV</li>
              <li>✔️ Certificate of completion</li>
            </ul>
          </div>

          {/* Enroll Now Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-3xl font-bold text-black">${course.price}</p>
            <button className="bg-[#2596BE] text-white py-2 px-6 rounded-lg hover:bg-[#1c768a] mt-4 transition duration-300">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-[#2596BE] py-6 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="text-center md:text-left ml-10">
            <h3 className="text-lg font-bold">Yuvamytr</h3>
            <p className="text-sm mt-2">
              Empowering students with the next generation of learning resources and tools.
            </p>
          </div>

          {/* Right Section */}
          <div className="mt-4 md:mt-0 mr-10">
            <p className="text-sm">&copy; {new Date().getFullYear()} Yuvamytr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
