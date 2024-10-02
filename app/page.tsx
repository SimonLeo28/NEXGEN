"use client";
import Image from "next/image";
import React from "react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Timeline } from "@/components/ui/timeline";

const words = [
  "Build the Career You Deserve.",
  "Master the Skills You Need."
];
  

const content = [
  {
    title: "Comprehensive Learning",
    description:
      "Our diverse range of courses covers everything from essential technical skills to in-demand soft skills. Access a wide range of courses designed to meet industry demands and enhance your skills.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://bootcamp-lms-omega.vercel.app/assets/landingPage/1.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Expert-Led Instruction",
    description:
      "Learn from industry leaders and seasoned professionals who bring real-world experience and insights into every lesson. Our instructors are committed to providing practical knowledge that you can apply directly to your career.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://bootcamp-lms-omega.vercel.app/assets/landingPage/2.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Flexible Learning Experience",
    description:
      "Enjoy the freedom to learn at your own pace with our flexible course formats. Access high-quality video lectures, interactive quizzes, and hands-on projects whenever and wherever you prefer.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://bootcamp-lms-omega.vercel.app/assets/landingPage/3.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Real-Time Industry Insights",
    description:
      "Stay ahead of the curve with courses that reflect the latest trends and technologies. Our content is regularly updated to ensure you’re learning the most current and relevant skills.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://bootcamp-lms-omega.vercel.app/assets/landingPage/4.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function Home() {

  const data = [
    {
      title: "Comprehensive Learning",
      content: (
        <div>
          <p className="text-black dark:text-black text-xs md:text-2xl font-normal mb-8">
          Our diverse range of courses covers everything from essential technical skills <br/>
          to in-demand soft skills. Access a wide range of courses designed to meet <br/>
          industry demands and enhance your skills.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://bootcamp-lms-omega.vercel.app/assets/landingPage/1.svg"
              alt="startup template"
              width={700}
              height={700}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "Expert-Led Instruction",
      content: (
        <div>
          <p className="text-black dark:text-black text-xs md:text-2xl font-normal mb-8">
          Learn from industry leaders and seasoned professionals who bring real-world  <br/>
          experience and insights into every lesson. Our instructors are committed to  <br/>
          providing practical knowledge that you can apply directly to your career.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://bootcamp-lms-omega.vercel.app/assets/landingPage/2.svg"
              alt="startup template"
              width={700}
              height={700}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "Flexible Learning Experience",
      content: (
        <div>
          <p className="text-black dark:text-black text-xs md:text-2xl font-normal mb-8">
          Enjoy the freedom to learn at your own pace with our flexible course formats.   <br/>
          Access high-quality video lectures, interactive quizzes, and hands-on projects   <br/>
          whenever and wherever you prefer.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://bootcamp-lms-omega.vercel.app/assets/landingPage/3.svg"
              alt="startup template"
              width={700}
              height={700}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Real-Time Industry Insights",
      content: (
        <div>
          <p className="text-black dark:text-black text-xs md:text-2xl font-normal mb-8">
          Stay ahead of the curve with courses that reflect the latest trends and    <br/>
          technologies. Our content is regularly updated to ensure you’re learning the    <br/>
          most current and relevant skills.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://bootcamp-lms-omega.vercel.app/assets/landingPage/3.svg"
              alt="startup template"
              width={700}
              height={700}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Affordable and Accessible",
      content: (
        <div>
          <p className="text-black dark:text-black text-xs md:text-2xl font-normal mb-8">
          Get access to high-quality education without breaking the bank. Our courses    <br/>
          are priced competitively, and we offer various discounts and promotions to    <br/>
          make learning more accessible
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://bootcamp-lms-omega.vercel.app/assets/landingPage/3.svg"
              alt="startup template"
              width={700}
              height={700}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
    <div className="bg-white">
   <div className="p-5 flex flex-col justify-center items-center h-[100%] bg-white">
    <TextGenerateEffect words={words} />
    <Image 
          src="https://bootcamp-lms-omega.vercel.app/assets/HeroSection.svg"
          alt="card thumbnail"
          width={1000}
          height={700}
           />
    </div>



   <div className="flex flex-col justify-center items-center">
   <h1 className="p-7 text-5xl font-extrabold text-black">Courses of the week</h1>
   </div>
   <div className="flex justify-center items-center gap-9 bg-gray- h-[400px] ml-[50px] mr-[50px] rounded-[10px]">

    {/* The below section 3 div's are of course card */}
    <div className="rounded-xl border-2 border-gray-300 gap-3 flex flex-col justify-center items-center text-black h-[80%] w-[20%] font-semibold ml-6 hover:bg-white hover:shadow-lg hover:shadow-gray-400 hover:w-[22%] hover:h-[82%] hover:text-black hover:font-bold transition-all duration-300">
         <Image 
          src="https://bootcamp-lms-omega.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInteractiveContent.e7d32ffd.jpg&w=3840&q=75"
          alt="card thumbnail"
          width={200}
          height={200}
           />
       <h1 className="font-extrabold">Introduction to Python</h1> 
       <span className="font-extrabold">Programming</span>
       <span className="text-gray-500">Angela Yu</span>
       <button className="bg-white border-2 border-[#2596BE] text-[#2596BE] hover:bg-[#2596BE] hover:text-white rounded-md p-2"><a href="/singlecourse">Learn More</a></button>
    </div>

    <div className="rounded-xl border-2 border-gray-300 gap-3 flex flex-col justify-center items-center text-black h-[80%] w-[20%] font-semibold ml-6 hover:bg-white hover:shadow-lg hover:shadow-gray-400 hover:w-[22%] hover:h-[82%] hover:text-black hover:font-bold transition-all duration-300">
  <Image 
    src="https://bootcamp-lms-omega.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInteractiveContent.e7d32ffd.jpg&w=3840&q=75"
    alt="card thumbnail"
    width={200}
    height={200}
  />
  <h1 className="font-extrabold">Introduction to Python</h1> 
  <span className="font-extrabold">Programming</span>
  <span className="text-gray-500">Angela Yu</span>
  <button className="bg-white border-2 border-[#2596BE] text-[#2596BE] hover:bg-[#2596BE] hover:text-white rounded-md p-2"><a href="/singlecourse">Learn More</a></button>
</div>

<div className="rounded-xl border-2 border-gray-300 gap-3 flex flex-col justify-center items-center text-black h-[80%] w-[20%] font-semibold ml-6 hover:bg-white hover:shadow-lg hover:shadow-gray-400 hover:w-[22%] hover:h-[82%] hover:text-black hover:font-bold transition-all duration-300">
  <Image 
    src="https://bootcamp-lms-omega.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInteractiveContent.e7d32ffd.jpg&w=3840&q=75"
    alt="card thumbnail"
    width={200}
    height={200}
  />
  <h1 className="font-extrabold">Introduction to Python</h1> 
  <span className="font-extrabold">Programming</span>
  <span className="text-gray-500">Angela Yu</span>
  <button className="bg-white border-2 border-[#2596BE] text-[#2596BE] hover:bg-[#2596BE] hover:text-white rounded-md p-2"><a href="/singlecourse">Learn More</a></button>
</div>

   </div>
   <div className="p-0 flex justify-center items-center">
    <h1 className="text-5xl font-extrabold text-black">Why Choose Us? </h1>
   </div>
    <div className="w-full">
      <Timeline data={data} />
    </div>
  
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
   </>
  );
}
