import React from "react";
import { coursecard } from "../../../../coursesdata";
const AllCourse = () => {
  return (
    <div className="text-center">
      <div>
        <h3 className="text-customgreen text-2xl">Courses</h3>
        <h1 className="text-4xl font-bold">Browse Our Online Courses</h1>
      </div>

      <div className="grid grid-cols-6 border gap-1 h-60 mt-16 w-10/12 ">
        {coursecard.map((val, i) => (
          <div className="bg-gray-300 hover:bg-customgreen  duration-500 ">
            <h1 key={i} className="text-xl font-medium text-black ">{val.coursename}</h1>
            <h3 key={i}  className="text-customgreen " >{val.numOfCourse}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourse;
