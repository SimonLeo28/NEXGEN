import Image from "next/image";
import React from 'react'

const  page = () => {
  return (
    <>
    <div className="bg-gray-50">
    <div className='flex justify-center items-center w-[100%] h-[100%] p-5'>
        <input className='flex justify-items-center text-black text-center w-[60%] h-[50px] rounded-md border-4 border-[#2596BE]' type='text' placeholder='Have Something On Mind...'></input>
    </div>
    <div className="flex flex-col justify-center items-center">
   <h1 className="p-7 text-5xl font-extrabold text-black">Courses of the week</h1>
   </div>
   <div className="flex justify-center items-center gap-9 bg-gray-50 h-[400px] ml-[50px] mr-[50px] rounded-[10px]">
    <div className="rounded-xl border-2 border-gray-300 gap-3 flex flex-col justify-center items-center text-black h-[80%] w-[20%] font-semibold ml-6 hover:bg-white hover:bg-white  hover:w-[22%] hover:h-[82%] hover:text-black hover:font-bold">
    <Image src="https://bootcamp-lms-omega.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInteractiveContent.e7d32ffd.jpg&w=3840&q=75"
           alt="card thumbnail"
           width={200}
           height={200}
           />
      <h1 className="font-extrabold">Introduction to Python</h1> <span className="font-extrabold"> Programming</span>
      <span className="text-gray-500">Angela Yu</span>
      <button className="bg-white border-2 border-[#2596BE] text-[#2596BE] hover:bg-[#2596BE] hover:text-white rounded-md p-2">Learn More</button>
    </div>
    {/* <div className="rounded-xl border-2 border-gray-300 gap-3 flex flex-col justify-center items-center text-black h-[80%] w-[20%] font-semibold ml-6 hover:bg-white hover:bg-white  hover:w-[22%] hover:h-[82%] hover:text-black hover:font-bold">
    <Image src="https://bootcamp-lms-omega.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInteractiveContent.e7d32ffd.jpg&w=3840&q=75"
           alt="card thumbnail"
           width={200}
           height={200}
           />
      <h1 className="font-extrabold">Introduction to Python</h1> <span className="font-extrabold"> Programming</span>
      <span className="text-gray-500">Angela Yu</span>
      <button className="bg-white border-2 border-[#2596BE] text-[#2596BE] hover:bg-[#2596BE] hover:text-white rounded-md p-2">Learn More</button>
    </div> */}
    <div className="rounded-xl border-2 border-gray-300 gap-3 flex flex-col justify-center items-center text-black h-[80%] w-[20%] font-semibold ml-6 hover:bg-white hover:bg-white  hover:w-[22%] hover:h-[82%] hover:text-black hover:font-bold">
    <Image src="https://bootcamp-lms-omega.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInteractiveContent.e7d32ffd.jpg&w=3840&q=75"
           alt="card thumbnail"
           width={200}
           height={200}
           />
      <h1 className="font-extrabold">Introduction to Python</h1> <span className="font-extrabold"> Programming</span>
      <span className="text-gray-500">Angela Yu</span>
      <button className="bg-white border-2 border-[#2596BE] text-[#2596BE] hover:bg-[#2596BE] hover:text-white rounded-md p-2">Learn More</button>
    </div>
    <div className="rounded-xl border-2 border-gray-300 gap-3 flex flex-col justify-center items-center text-black h-[80%] w-[20%] font-semibold ml-6 hover:bg-white hover:bg-white  hover:w-[22%] hover:h-[82%] hover:text-black hover:font-bold">
    <Image src="https://bootcamp-lms-omega.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInteractiveContent.e7d32ffd.jpg&w=3840&q=75"
           alt="card thumbnail"
           width={200}
           height={200}
           />
      <h1 className="font-extrabold">Introduction to Python</h1> <span className="font-extrabold"> Programming</span>
      <span className="text-gray-500">Angela Yu</span>
      <button className="bg-white border-2 border-[#2596BE] text-[#2596BE] hover:bg-[#2596BE] hover:text-white rounded-md p-2">Learn More</button>
    </div>
   </div>
   <div className="flex flex-col justify-center items-center">
   <h1 className="p-7 text-5xl font-extrabold text-black">Courses related to business management</h1>
   </div>
   <div className="flex justify-center items-center gap-9 bg-gray-50 h-[400px] ml-[50px] mr-[50px] rounded-[10px]">
    <div className="rounded-xl border-2 border-gray-300 gap-3 flex flex-col justify-center items-center text-black h-[80%] w-[20%] font-semibold ml-6 hover:bg-white hover:bg-white  hover:w-[22%] hover:h-[82%] hover:text-black hover:font-bold">
    <Image src="https://bootcamp-lms-omega.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInteractiveContent.e7d32ffd.jpg&w=3840&q=75"
           alt="card thumbnail"
           width={200}
           height={200}
           />
      <h1 className="font-extrabold">Introduction to Stratergic</h1> <span className="font-extrabold"> management</span>
      <span className="text-gray-500">Sundar Pichai</span>
      <button className="bg-white border-2 border-[#2596BE] text-[#2596BE] hover:bg-[#2596BE] hover:text-white rounded-md p-2">Learn More</button>
    </div>
    <div className="rounded-xl border-2 border-gray-300 gap-3 flex flex-col justify-center items-center text-black h-[80%] w-[20%] font-semibold ml-6 hover:bg-white hover:bg-white  hover:w-[22%] hover:h-[82%] hover:text-black hover:font-bold">
    <Image src="https://bootcamp-lms-omega.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInteractiveContent.e7d32ffd.jpg&w=3840&q=75"
           alt="card thumbnail"
           width={200}
           height={200}
           />
      <h1 className="font-extrabold">Introduction to Digital</h1> <span className="font-extrabold"> marketing</span>
      <span className="text-gray-500">Steve Jobs</span>
      <button className="bg-white border-2 border-[#2596BE] text-[#2596BE] hover:bg-[#2596BE] hover:text-white rounded-md p-2">Learn More</button>
    </div>
    <div className="rounded-xl border-2 border-gray-300 gap-3 flex flex-col justify-center items-center text-black h-[80%] w-[20%] font-semibold ml-6 hover:bg-white hover:bg-white  hover:w-[22%] hover:h-[82%] hover:text-black hover:font-bold">
    <Image src="https://bootcamp-lms-omega.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInteractiveContent.e7d32ffd.jpg&w=3840&q=75"
           alt="card thumbnail"
           width={200}
           height={200}
           />
      <h1 className="font-extrabold">Introduction to Stock</h1> <span className="font-extrabold"> market analysis</span>
      <span className="text-gray-500">Elon Musk</span>
      <button className="bg-white border-2 border-[#2596BE] text-[#2596BE] hover:bg-[#2596BE] hover:text-white rounded-md p-2">Learn More</button>
    </div>
    <div className="rounded-xl border-2 border-gray-300 gap-3 flex flex-col justify-center items-center text-black h-[80%] w-[20%] font-semibold ml-6 hover:bg-white hover:bg-white  hover:w-[22%] hover:h-[82%] hover:text-black hover:font-bold">
    <Image src="https://bootcamp-lms-omega.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInteractiveContent.e7d32ffd.jpg&w=3840&q=75"
           alt="card thumbnail"
           width={200}
           height={200}
           />
      <h1 className="font-extrabold">Introduction to Excel</h1> <span className="font-extrabold"> Analytics</span>
      <span className="text-gray-500">Melanie Perkins</span>
      <button className="bg-white border-2 border-[#2596BE] text-[#2596BE] hover:bg-[#2596BE] hover:text-white rounded-md p-2">Learn More</button>
    </div>
   </div>
   <div className="flex flex-col justify-center items-center">
   <h1 className="p-7 text-5xl font-extrabold text-black">Courses related to Design Technologies</h1>
   </div>
   <div className="flex justify-center items-center gap-9 bg-gray-50 h-[400px] ml-[50px] mr-[50px] rounded-[10px]">
    <div className="rounded-xl border-2 border-gray-300 gap-3 flex flex-col justify-center items-center text-black h-[80%] w-[20%] font-semibold ml-6 hover:bg-white hover:bg-white  hover:w-[22%] hover:h-[82%] hover:text-black hover:font-bold">
    <Image src="https://bootcamp-lms-omega.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInteractiveContent.e7d32ffd.jpg&w=3840&q=75"
           alt="card thumbnail"
           width={200}
           height={200}
           />
      <h1 className="font-extrabold">Introduction to Industrial</h1> <span className="font-extrabold"> Design</span>
      <span className="text-gray-500">Raymond Loewy</span>
      <button className="bg-white border-2 border-[#2596BE] text-[#2596BE] hover:bg-[#2596BE] hover:text-white rounded-md p-2">Learn More</button>
    </div>
    <div className="rounded-xl border-2 border-gray-300 gap-3 flex flex-col justify-center items-center text-black h-[80%] w-[20%] font-semibold ml-6 hover:bg-white hover:bg-white  hover:w-[22%] hover:h-[82%] hover:text-black hover:font-bold">
    <Image src="https://bootcamp-lms-omega.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInteractiveContent.e7d32ffd.jpg&w=3840&q=75"
           alt="card thumbnail"
           width={200}
           height={200}
           />
      <h1 className="font-extrabold">Introduction to Interaction</h1> <span className="font-extrabold"> Design</span>
      <span className="text-gray-500">Don Norman</span>
      <button className="bg-white border-2 border-[#2596BE] text-[#2596BE] hover:bg-[#2596BE] hover:text-white rounded-md p-2">Learn More</button>
    </div>
    <div className="rounded-xl border-2 border-gray-300 gap-3 flex flex-col justify-center items-center text-black h-[80%] w-[20%] font-semibold ml-6 hover:bg-white hover:bg-white  hover:w-[22%] hover:h-[82%] hover:text-black hover:font-bold">
    <Image src="https://bootcamp-lms-omega.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInteractiveContent.e7d32ffd.jpg&w=3840&q=75"
           alt="card thumbnail"
           width={200}
           height={200}
           />
      <h1 className="font-extrabold">Introduction to Graphic</h1> <span className="font-extrabold"> Design</span>
      <span className="text-gray-500">Jakob Nielsen</span>
      <button className="bg-white border-2 border-[#2596BE] text-[#2596BE] hover:bg-[#2596BE] hover:text-white rounded-md p-2">Learn More</button>
    </div>
    <div className="rounded-xl border-2 border-gray-300 gap-3 flex flex-col justify-center items-center text-black h-[80%] w-[20%] font-semibold ml-6 hover:bg-white hover:bg-white  hover:w-[22%] hover:h-[82%] hover:text-black hover:font-bold">
    <Image src="https://bootcamp-lms-omega.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInteractiveContent.e7d32ffd.jpg&w=3840&q=75"
           alt="card thumbnail"
           width={200}
           height={200}
           />
      <h1 className="font-extrabold">Introduction to Product</h1> <span className="font-extrabold"> Design</span>
      <span className="text-gray-500">Paul Rand</span>
      <button className="bg-white border-2 border-[#2596BE] text-[#2596BE] hover:bg-[#2596BE] hover:text-white rounded-md p-2">Learn More</button>
    </div>
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
  )
}

export default page;