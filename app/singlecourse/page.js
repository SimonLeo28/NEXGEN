// import React from 'react'


// export default function page() {
//   return (
//     <>
//     <div className='flex-col gap-5'>
//       <div className='bg-black'>
//         <div className='p-10'>
//         <h1 className='mt-10 ml-10 text-[#2596BE] text-4xl font-bold'>100 Days of Code: The Complete Python<br/> Pro Bootcamp.</h1>
//         <p className='ml-10 text-white-600'>Master Python by building 100 projects in 100 days. Learn data science,<br/> automation, build websites, games and apps!</p>
//         </div>
//       </div>
//       <div className=' w-fit p-5 ml-10 mt-10 border-2 border-gray'>
//         <h1 className='text-2xl font-bold text-black'>What you'll learn</h1>
//         <div className='flex gap-3'>
//           <div>
//           <li className='text-black mt-3 ml-7'>You will master the Python programming <br/> 
//           language by building 100 unique projects <br/>
//           over 100 days.          
//           </li>
//           <li className='text-black ml-7'>You will be able to program in Python  <br/> 
//           prefessionally.          
//           </li>
//           <li className='text-black ml-7'>Create a portfolio of 100 Python projects to <br/> 
//           apply for developer jobs.
//           </li>
//           </div>
//           <div>
//           <li className='text-black mt-3 ml-7'>You will master the Python programming <br/> 
//           language by building 100 unique projects <br/>
//           over 100 days.          
//           </li>
//           <li className='text-black ml-7'>You will be able to program in Python  <br/> 
//           prefessionally.          
//           </li>
//           <li className='text-black ml-7'>Create a portfolio of 100 Python projects to <br/> 
//           apply for developer jobs.
//           </li>
//           </div>
//           </div>
//       </div>
//       <div className=' w-[50%] mt-10 ml-10 h-[50%]'>
//         <h1 className='p-3 text-black text-2xl font-bold'>Course Content</h1>
//         <h1 className='text-black p-1 ml-10'>Course videos...</h1>
//       </div>
//       <div className='ml-10 mt-10 w-[70%] '>
//         <h1 className='p-3 text-2xl font-bold text-black'>Requirements...</h1>
//         <div className='p-5'>
//         <li className='p-1 text-black'>No programming experience needed - I'll teach you everything you need to know</li>
//         <li className='p-1 text-black'>A Mac or PC computer with access to the internet</li>
//         <li className='p-1 text-black'>No paid software required - I'll teach you how to use PyCharm, Jupyter Notebooks and Google Colab</li>
//         <li className='p-1 text-black'>I'll walk you through, step-by-step how to get all the software installed and set up</li>
//         </div>
//       </div>
//       <div className='  mt-10 ml-10 w-[80%]'>
//         <h1 className='text-black font-bold text-2xl p-3'>Description</h1>
//         <p className='text-black'>Here will be the course description sliced accordingly and have a read more and then will display the text.</p>
//       </div>
//       <div className='p-5'>
//         <h1 className='text-black font-bold text-2xl p-3 ml-3'>Who is this course for?</h1>
//         <li className='ml-10 p-1 text-black'>If you want to learn to code from scratch through building fun and useful projects, then take this course.</li>
//         <li className='ml-10 p-1 text-black'>If you want to start your own startup by building your own websites and web apps.</li>
//         <li className='ml-10 p-1 text-black'>If you are a complete beginner then this course will be everything you need to become a Python <br/>Professional.</li>
//         <li className='ml-10 p-1 text-black'>If you are a seasoned programmer wanting to switch to Python then this is the quickest way. Learn through <br/>coding projects.</li>
//         <li className='ml-10 p-1 text-black'>If you are an intermediate Python programmer then you know 100 days of code challenges will help you  <br/>Level up.</li>
//       </div>
//       <footer className="bg-black text-[#2596BE] py-6 mt-10">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//         {/* Left Section */}
//         <div className="text-center md:text-left ml-10">
//           <h3 className="text-lg font-bold">NEXGEN</h3>
//           <p className="text-sm mt-2">
//             Empowering students with the next generation of learning resources and tools.
//           </p>
//         </div>

//         {/* Right Section */}
//         <div className="mt-4 md:mt-0 mr-10">
//           <p className="text-sm">&copy; {new Date().getFullYear()} NEXGEN. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//     </div>
//     </>
//   )
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
              <li>
                Learn to program professionally in Python.
              </li>
              <li>
                Create a portfolio of 100 Python projects for developer job applications.
              </li>
            </ul>
            <ul className='text-black list-disc list-inside'>
              <li className='mt-3'>
                Build real-world apps and games with Python.
              </li>
              <li>
                Understand automation, web development, and data science.
              </li>
              <li>
                Learn to apply Python in professional environments.
              </li>
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

        {/* Footer */}
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
}
