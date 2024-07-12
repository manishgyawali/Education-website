import React from "react";
import { coursecard } from "../../../../coursesdata";
const AllCourse = () => {
  return (
    <div className="text-center">
      <div>
        <h3 className="text-customgreen text-xl">Courses</h3>
        <h1 className="text-4xl font-semibold">Browse Our Online Courses</h1>
      </div>

      <div className="grid grid-cols-6 border gap-2 h-60 mt-16  ">
        {coursecard.map((val, i) => (
          <div className="bg-white hover:bg-customgreen  duration-500 shadow-md ">
            <h1 key={i} className="text-xl font-medium text-black ">{val.coursename}</h1>
            <h3 key={i}  className="text-customgreen " >{val.numOfCourse}</h3>

          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourse;
