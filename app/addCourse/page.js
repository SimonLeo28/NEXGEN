"use client";

import React, { useState } from 'react';

export default function page() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [expectation, setExpectation] = useState('');
  const [requirement, setRequirement] = useState('');
  const [eligibility, setEligibility] = useState('');
  const [content, setContent] = useState('');

  const sendData = async () => {
    try {
      const data = {title, description, price, expectation, requirement, eligibility, content };
    let response = await fetch('http://localhost:3000/api/course', {
      cache: "no-cache",
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    console.log(response);
    } catch(error) {
      console.log("Error sending message.");
      
    }
    
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !price || !expectation || !requirement || !eligibility || !content) {
      alert('Please enter all the details.');
      return;
    } else {
        sendData();
    }
    console.log({
      title,
      description,
      price,
      expectation,
      requirement,
      eligibility,
      content,
    });
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        {/* Header Section */}
        <section className="flex flex-col justify-items-center bg-black p-10 justify-between items-center shadow-lg rounded-lg mx-5">
          <div className='flex flex-col justify-center items-center'>
            <h1 className="text-[#2596BE] text-4xl font-bold">
              Enter your course details
            </h1>
            <p className="text-gray-400 mt-2">
              Enter the details for your course...
            </p>
          </div>
        </section>

        {/* Course Form */}
        <div className="flex flex-row gap-10 p-10">
          {/* Left Side - Form */}
          <div className="w-2/3">
            <section className="mb-10 p-5 border border-gray-300 shadow-lg rounded-lg bg-white">
              <h2 className="text-2xl font-bold text-black">Add Course Details</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5 mt-5">
                {/* Course Title */}
                <div className="col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Course Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter course title"
                  />
                </div>

                {/* Description */}
                <div className="col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    id="description"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter course description"
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                    Price
                  </label>
                  <input
                    id="price"
                    type="number"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter course price"
                  />
                </div>

                {/* What to Expect */}
                <div className="col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expectation">
                    What to Expect
                  </label>
                  <textarea
                    id="expectation"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={expectation}
                    onChange={(e) => setExpectation(e.target.value)}
                    placeholder="What students can expect"
                  />
                </div>

                {/* Requirements */}
                <div className="col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="requirement">
                    Requirements
                  </label>
                  <textarea
                    id="requirement"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                    placeholder="Enter course requirements"
                  />
                </div>

                {/* Eligibility */}
                <div className="col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eligibility">
                    Eligibility Criteria
                  </label>
                  <textarea
                    id="eligibility"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={eligibility}
                    onChange={(e) => setEligibility(e.target.value)}
                    placeholder="Enter eligibility criteria"
                  />
                </div>

                {/* Course Content */}
                <div className="col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                    Content
                  </label>
                  <textarea
                    id="content"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter course content details"
                  />
                </div>

                <div className="col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#2596BE] text-white py-2 px-6 rounded-lg hover:bg-[#1c768a] transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </section>
          </div>

          {/* Right Side - Sidebar */}
          <div className="w-1/3 p-5 h-fit bg-gray-100 rounded-lg shadow-lg">
            <div className="mb-10">
              <h3 className="text-xl font-bold text-black">Instructions</h3>
              <ul className="list-inside mt-5 text-black">
                <li>✔️ Regular practical assignments should be given and checked.</li>
                <li>✔️ Doubt from the student must be adressed within 24hrs of time.</li>
                <li>✔️ The course materials should be given for lifetime access.</li>
                <li>✔️ The course materials must be given access to be downloaded.</li>
                <li>✔️ The students must be given certificate of completion</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black text-[#2596BE] py-6 mt-10">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left ml-10">
              <h3 className="text-lg font-bold">Yuvamytr</h3>
              <p className="text-sm mt-2">
                Empowering students with the next generation of learning resources and tools.
              </p>
            </div>

            <div className="mt-4 md:mt-0 mr-10">
              <p className="text-sm">&copy; {new Date().getFullYear()} Yuvamytr. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
