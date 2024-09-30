// import React from 'react';

// export default function Page() {
//   return (
//     <>
//       <div className='flex flex-col gap-5'>
//         {/* Course Header */}
//         <section className='bg-black p-10'>
//           <h1 className='text-[#2596BE] text-4xl font-bold mt-10 ml-10'>
//             100 Days of Code: The Complete Python Pro Bootcamp.
//           </h1>
//           <p className='text-gray-400 ml-10'>
//             Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games, and apps!
//           </p>
//         </section>

//         {/* What You'll Learn */}
//         <section className='w-fit p-5 ml-10 mt-10 border-2 border-gray-300'>
//           <h2 className='text-2xl font-bold text-black'>What you'll learn</h2>
//           <div className='grid grid-cols-2 gap-5'>
//             <ul className='text-black list-disc list-inside'>
//               <li className='mt-3'>
//                 Master Python programming by building 100 unique projects over 100 days.
//               </li>
//               <li>
//                 Learn to program professionally in Python.
//               </li>
//               <li>
//                 Create a portfolio of 100 Python projects for developer job applications.
//               </li>
//             </ul>
//             <ul className='text-black list-disc list-inside'>
//               <li className='mt-3'>
//                 Build real-world apps and games with Python.
//               </li>
//               <li>
//                 Understand automation, web development, and data science.
//               </li>
//               <li>
//                 Learn to apply Python in professional environments.
//               </li>
//             </ul>
//           </div>
//         </section>

//         {/* Course Content */}
//         <section className='w-[50%] mt-10 ml-10'>
//           <h2 className='text-black text-2xl font-bold p-3'>Course Content</h2>
//           <p className='text-black ml-10'>Course videos...</p>
//         </section>

//         {/* Requirements */}
//         <section className='ml-10 mt-10 w-[70%]'>
//           <h2 className='text-black text-2xl font-bold p-3'>Requirements</h2>
//           <ul className='text-black list-disc list-inside p-5'>
//             <li>No programming experience needed – I'll teach you everything you need to know.</li>
//             <li>A Mac or PC computer with access to the internet.</li>
//             <li>No paid software required – I'll show you how to use PyCharm, Jupyter Notebooks, and Google Colab.</li>
//             <li>Step-by-step guidance to install and set up all software.</li>
//           </ul>
//         </section>

//         {/* Description */}
//         <section className='ml-10 mt-10 w-[80%]'>
//           <h2 className='text-black text-2xl font-bold p-3'>Description</h2>
//           <p className='text-black'>
//             Here will be the course description sliced accordingly, with a "Read More" option to display the full text.
//           </p>
//         </section>

//         {/* Who is this course for */}
//         <section className='p-5'>
//           <h2 className='text-2xl text-black font-bold p-3 ml-3'>Who is this course for?</h2>
//           <ul className='list-disc text-black list-inside ml-10'>
//             <li>If you want to learn to code through fun and useful projects, this course is for you.</li>
//             <li>If you want to start your own startup by building your own websites and web apps.</li>
//             <li>If you are a complete beginner, this course will make you a Python professional.</li>
//             <li>If you're a seasoned programmer switching to Python, this is the quickest way to learn through coding projects.</li>
//             <li>If you're an intermediate Python programmer, the 100 days of code challenge will help you level up.</li>
//           </ul>
//         </section>

//         {/* Footer */}
//         <footer className="bg-black text-[#2596BE] py-6 mt-10">
//           <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//             {/* Left Section */}
//             <div className="text-center md:text-left ml-10">
//               <h3 className="text-lg font-bold">Yuvamytr</h3>
//               <p className="text-sm mt-2">
//                 Empowering students with the next generation of learning resources and tools.
//               </p>
//             </div>

//             {/* Right Section */}
//             <div className="mt-4 md:mt-0 mr-10">
//               <p className="text-sm">&copy; {new Date().getFullYear()} Yuvamytr. All rights reserved.</p>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// }

import React from 'react';

export default function Page() {
  return (
    <>
      <div className='flex flex-col gap-5'>
        {/* Course Header */}
        <section className='bg-black p-10'>
          <h1 className='text-[#2596BE] text-4xl font-bold mt-10 ml-10'>
            100 Days of Code: The Complete Python Pro Bootcamp.
          </h1>
          <p className='text-gray-400 ml-10'>
            Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games, and apps!
          </p>
        </section>

        {/* What You'll Learn */}
        <section className='w-fit p-5 ml-10 mt-10 border-2 border-gray-300'>
          <h2 className='text-2xl font-bold text-black'>What you'll learn</h2>
          <div className='grid grid-cols-2 gap-5'>
            <ul className='text-black list-disc list-inside'>
              <li className='mt-3'>
                Master Python programming by building 100 unique projects over 100 days.
              </li>
              <li>Learn to program professionally in Python.</li>
              <li>Create a portfolio of 100 Python projects for developer job applications.</li>
            </ul>
            <ul className='text-black list-disc list-inside'>
              <li className='mt-3'>
                Build real-world apps and games with Python.
              </li>
              <li>Understand automation, web development, and data science.</li>
              <li>Learn to apply Python in professional environments.</li>
            </ul>
          </div>
        </section>

        {/* Course Content */}
        <section className='w-[50%] mt-10 ml-10'>
          <h2 className='text-black text-2xl font-bold p-3'>Course Content</h2>
          <p className='text-black ml-10'>Course videos...</p>
        </section>

        {/* Requirements */}
        <section className='ml-10 mt-10 w-[70%]'>
          <h2 className='text-black text-2xl font-bold p-3'>Requirements</h2>
          <ul className='text-black list-disc list-inside p-5'>
            <li>No programming experience needed – I'll teach you everything you need to know.</li>
            <li>A Mac or PC computer with access to the internet.</li>
            <li>No paid software required – I'll show you how to use PyCharm, Jupyter Notebooks, and Google Colab.</li>
            <li>Step-by-step guidance to install and set up all software.</li>
          </ul>
        </section>

        {/* Description */}
        <section className='ml-10 mt-10 w-[80%]'>
          <h2 className='text-black text-2xl font-bold p-3'>Description</h2>
          <p className='text-black'>
            Here will be the course description sliced accordingly, with a "Read More" option to display the full text.
          </p>
        </section>

        {/* Who is this course for */}
        <section className='p-5'>
          <h2 className='text-2xl text-black font-bold p-3 ml-3'>Who is this course for?</h2>
          <ul className='list-disc text-black list-inside ml-10'>
            <li>If you want to learn to code through fun and useful projects, this course is for you.</li>
            <li>If you want to start your own startup by building your own websites and web apps.</li>
            <li>If you are a complete beginner, this course will make you a Python professional.</li>
            <li>If you're a seasoned programmer switching to Python, this is the quickest way to learn through coding projects.</li>
            <li>If you're an intermediate Python programmer, the 100 days of code challenge will help you level up.</li>
          </ul>
        </section>

        {/* Price Details and Buy Now */}
        <section className="bg-white p-6 w-[60%] mx-auto mt-10 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-black mb-4">Price Details</h2>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold text-black">$99.99</p>
            <button className="bg-[#2596BE] text-white py-2 px-4 rounded hover:bg-[#1c768a] transition duration-300">
              Buy Now
            </button>
          </div>
        </section>

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
    </>
  );
}
