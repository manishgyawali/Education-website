import React from "react";
import { blogData } from "../../../blog";
import { IoPerson } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { FaComment } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="text-center grid gap-10 ">
      <div className="  ">
        <h3 className="text-customgreen text-xl">OUR PRICING</h3>
        <h1 className="text-4xl font-semibold">Pricing & Packages</h1>
      </div>

      <div className=" flex  border gap-4     ">
        {blogData.map((val, i) => (
          <div className="bg-white shadow-lg py-7  ">
            <div className="flex">
             <div className="">
             <IoPerson />
              <h4 key={i} className="text-sm font-bold">
                {val.admin}
              </h4>
             </div>


            
              <div  className="">
              <MdDateRange />
              <h4 key={i} className="text-sm font-bold">
                {val.date}
              </h4>
              </div>

              <div  className="">
          <FaComment />{" "}
              <h4 key={i} className="text-customgreen text-sm font-bold">
                {val.comments}
              </h4>
              </div>
            </div>

            <div className="mt-8">
              <h2 key={i} className=" text-2xl">
                {val.heading}
              </h2>
              <p key={i} className="text-ftpara mt-6">
                {val.parag}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
