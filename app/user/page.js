"use client";

import React, { useState } from 'react';

const page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendData = async () => {
    try {
      const data = {name , email , message };
    let response = await fetch('/api/contact', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    console.log(response);
    } catch(error) {
      console.log("Error logging in.");
      
    }
    
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === '' && message === '' && name === '') {
      alert("Please enter the email and password.");
    } else {
      sendData();
    }
    // form submission logic
    console.log({ email, mobile });
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side: NEXGEN Logo */}
        <div className="flex-1 flex items-center justify-center bg-white p-8">
          <h1 className="text-6xl font-bold text-[#2596BE] text-center" style={{ fontFamily: 'monospace, sans-serif' }}>
            NEXGEN
          </h1>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-1 p-8">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">Contact Us</h2>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-lg font-medium text-gray-700">Message</label>
              <input
                id="message"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <button
              type="submit"
              className="self-start px-6 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <div>
    <footer className="bg-black text-[#2596BE] py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left ml-10">
          <h3 className="text-lg font-bold">NEXGEN</h3>
          <p className="text-sm mt-2">
            Empowering students with the next generation of learning resources and tools.
          </p>
        </div>

        {/* Right Section */}
        <div className="mt-4 md:mt-0 mr-10">
          <p className="text-sm">&copy; {new Date().getFullYear()} NEXGEN. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
    </>
  );
};

export default page;
