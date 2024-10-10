"use client";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const courses = [
    { name: "Python for Beginners", mentor: "Angela Yu" },
    { name: "JavaScript Essentials", mentor: "Colt Steele" },
    { name: "Data Structures & Algorithms", mentor: "Robert C. Martin" },
    { name: "Leadership in Business", mentor: "Sundar Pichai" },
    { name: "Marketing Strategies", mentor: "Philip Kotler" },
    { name: "Financial Management", mentor: "Warren Buffett" },
    { name: "Introduction to UI/UX", mentor: "Damini M Naidu" },
    { name: "Advanced UX Design", mentor: "Don Norman" },
    { name: "Design Thinking Fundamentals", mentor: "David Kelley" }
  ];

  const [search, setSearch] = useState("");

  // Filter courses based on search input
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="bg-gray-50">
        {/* Search Bar */}
        <div className="flex justify-center items-center w-[100%] h-[100%] p-5">
          <input
            onChange={handleSearch}
            value={search}
            className="flex justify-items-center text-black text-center w-[50%] h-[50px] rounded-l-md border-4 border-[#2596BE] focus:outline-none"
            type="text"
            placeholder="Search for a course"
          />
          <button className="bg-[#2596BE] text-white font-semibold h-[50px] w-[10%] rounded-r-md hover:bg-[#1f7a9b] transition duration-300">
            Search
          </button>
        </div>

        {/* Courses Cards */}
        <div className="flex flex-wrap justify-center items-center gap-9 bg-gray-50 mx-[50px] py-5 rounded-[10px]">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="rounded-xl border-2 border-gray-300 gap-3 flex flex-col justify-center items-center text-black h-[300px] w-[20%] font-semibold transition-all duration-300 hover:bg-white hover:shadow-lg hover:w-[22%] hover:h-[310px] hover:text-black hover:font-bold"
            >
              <Image
                src="https://bootcamp-lms-omega.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInteractiveContent.e7d32ffd.jpg&w=3840&q=75"
                alt="course thumbnail"
                width={200}
                height={200}
              />
              <h1 className="font-extrabold">{course.name}</h1>
              <span className="text-gray-500">{course.mentor}</span>
              <button className="bg-white border-2 border-[#2596BE] text-[#2596BE] hover:bg-[#2596BE] hover:text-white rounded-md p-2 transition duration-300">
                <a href="/singlecourse">Learn More</a>
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="bg-black text-[#2596BE] py-6 mt-10">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            {/* Left Section */}
            <div className="text-center md:text-left ml-10">
              <h3 className="text-lg font-bold">Yuvamytr</h3>
              <p className="text-sm mt-2">
                Empowering students with the next generation of learning
                resources and tools.
              </p>
            </div>

            {/* Right Section */}
            <div className="mt-4 md:mt-0 mr-10">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Yuvamytr. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Page;
