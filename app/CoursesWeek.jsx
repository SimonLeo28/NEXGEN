import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CoursesWeek = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/SimonLeo28/NEXGEN/refs/heads/master/courseData.json"
      );

      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }

      const result = await response.json();
      setCourses(result.slice(0, 3));  // Take only the first 3 courses
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("Failed to load courses");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center bg-black text-white font-bold">The data is loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="h-[500px] mt-[50px] flex flex-col gap-[10%]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="p-0 text-5xl font-extrabold text-black">Courses of the Week</h1>
      </div>
      <center>
      <div className="flex justify-center items-center gap-9 bg-gray-  ml-[50px] mr-[50px] rounded-[10px]">
        {courses.map((course, index) => (
          <div
            key={index}
            className="rounded-xl border-2 border-gray-300 gap-3 flex flex-col justify-center items-center text-black h-[340px] w-[20%] font-semibold ml-6 hover:bg-white hover:shadow-lg hover:shadow-gray-400 hover:w-[22%] hover:h-[360px] hover:text-black hover:font-bold transition-all duration-300"
          >
            <Image
              src="https://bootcamp-lms-omega.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInteractiveContent.e7d32ffd.jpg&w=3840&q=75"
              alt={course.title}
              width={200}
              height={200}
            />
            <h1 className="font-extrabold">{course.title}</h1>
            <Link href={`/singlecourse/${course._id}`}>
            <button className="bg-white border-2 border-[#2596BE] text-[#2596BE] hover:bg-[#2596BE] hover:text-white rounded-md p-2">
              Learn More
            </button>
            </Link>
          </div>
        ))}
      </div>
      </center>
    </div>
  );
};

export { CoursesWeek };
