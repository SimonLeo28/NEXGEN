"use client";

import React, { useState } from 'react';

const page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendData = async () => {
      try {
        const data = { email , password };
      let response = await fetch('/api/login', {
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
      if(email === '' && password === '') {
        alert("Please enter the email and password.");
      } else {
        sendData();
      }
      // form submission logic
      console.log({ email, mobile });
    };
  return (
    <>
    <div className='flex justify-center m-0 p-0 mb-0  bg-gray-100 h-[1000px] items-center'>
        <div className='bg-white h-[50%] w-[30%] flex flex-col gap-10 rounded-2xl justify-center items-center'>
            <p className='text-black font-bold text-2xl'>Welcome Back!!!</p>
            <div className='flex flex-col justify-center items-center'>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Enter your email</label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <label htmlFor="password" className="block text-lg font-medium text-gray-700">Enter your password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <button
              onSubmit={handleSubmit}
              type="submit"
              className=" px-6 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
        </div>
    </div>
    
    <div> 
    <footer className="bg-black text-[#2596BE] py-6 mt-0">
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
  )
}

export default page;