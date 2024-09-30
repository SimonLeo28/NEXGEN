import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-gray-50">
   <div className="flex flex-col justify-center items-center h-[400px] bg-gray-50">
    <h1 className="text-7xl text-[#2596BE] font-bold">Welcome to Yuvamytr</h1>
    <p className="text-black font-bold">Empowering students with the next generation of learning resources and tools.</p>
    {/* <Image src="https://bootcamp-lms-omega.vercel.app/assets/HeroSection.svg"
           alt="Hero-senction image"
           width={50}
           height={50}
           /> */}
    </div>
   <div className="flex flex-col justify-center items-center">
   <h1 className="p-7 text-5xl font-extrabold text-black">Courses of the week</h1>
   </div>
   <div className="flex justify-center items-center gap-9 bg-gray- h-[400px] ml-[50px] mr-[50px] rounded-[10px]">
    {/* <div className="rounded-xl border-2 border-gray-300 gap-3 flex flex-col justify-center items-center text-black h-[80%] w-[20%] font-semibold ml-6 hover:bg-white hover:border-4 hover:border-[#2596BE] hover:text-black hover:font-bold">
    <Image src="https://bootcamp-lms-omega.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInteractiveContent.e7d32ffd.jpg&w=3840&q=75"
           alt="card thumbnail"
           width={200}
           height={200}
           />
      <h1 className="font-extrabold">Introduction to Python</h1> <span className="font-extrabold"> Programming</span>
      <span className="text-gray-500">Angela Yu</span>
      <button className="bg-white border-2 border-[#2596BE] text-[#2596BE] hover:bg-[#2596BE] hover:text-white rounded-md p-2">Learn More</button>
    </div> */}
    <div className="rounded-xl border-2 border-gray-300 gap-3 flex flex-col justify-center items-center text-black h-[80%] w-[20%] font-semibold ml-6 hover:bg-white  hover:w-[22%] hover:h-[82%] hover:text-black hover:font-bold">
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
   <div className="p-0 flex justify-center items-center">
    <h1 className="text-5xl font-extrabold text-black">Why Choose Us? </h1>
   </div>
   <div className="flex flex-col gap-[10%] justify-center items-center h-[1000px] ml-20 mr-20">
    <div className="grid grid-cols-2  grid-rows-1">
      <h1 className="flex justify-start items-start text-4xl font-extrabold text-gray-600">Comprehensive Learning</h1>
      <p className="text-black font-medium ml-[50px]">Our diverse range of courses covers everything from essential technical skills <br/>
      to in-demand soft skills. Access a wide range of courses designed to meet <br/>
      industry demands and enhance your skills.
      </p>
    </div>
    <div className="grid grid-cols-2 grid-rows-1">
      <h1 className="flex justify-start items-start text-4xl font-extrabold text-gray-600">Expert-Led Instruction</h1>
      <p className="text-black font-medium ml-[50px]">Learn from industry leaders and seasoned professionals who bring real-world  <br/>
      experience and insights into every lesson. Our instructors are committed to  <br/>
      providing practical knowledge that you can apply directly to your career.
      </p>
    </div>
    <div className="grid grid-cols-2 grid-rows-1">
      <h1 className="flex justify-start items-start text-4xl font-extrabold text-gray-600">Flexible Learning Experience</h1>
      <p className="text-black font-medium ml-[50px]">Enjoy the freedom to learn at your own pace with our flexible course formats.   <br/>
      Access high-quality video lectures, interactive quizzes, and hands-on projects  <br/>
      whenever and wherever you prefer.
      </p>
    </div>
    <div className="grid grid-cols-2 grid-rows-1">
      <h1 className="flex justify-start items-start text-4xl font-extrabold text-gray-600">Real-Time Industry Insights</h1>
      <p className="text-black font-medium ml-[50px]">Stay ahead of the curve with courses that reflect the latest trends and    <br/>
      technologies. Our content is regularly updated to ensure you’re learning the   <br/>
      most current and relevant skills.
      </p>
    </div>
    <div className="grid grid-cols-2 grid-rows-1">
      <h1 className="flex justify-start items-start text-4xl font-extrabold text-gray-600">Affordable and Accessible</h1>
      <p className="text-black font-medium ml-[50px]">Get access to high-quality education without breaking the bank. Our courses   <br/>
      are priced competitively, and we offer various discounts and promotions to   <br/>
      make learning more accessible.
      </p>
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
  );
}
