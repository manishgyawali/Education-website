import React from "react";
import { onlineLearnData } from "../../../onlineLearning";
import Learningbg from "../../assets/learning.jpg";
import learningicon from "../../assets/online-learning.png"

const LearningOnline = () => {
  return (
    <div className="grid grid-cols-2  h-fit justify-between w-11/12  mx-auto gap-10 ">
      <div className="h-full w-full ">
        <img src={Learningbg } className="h-full  w-full object-cover" alt="learningphoto" />
      </div>

      <div className=" justify-center gap-6 bg-bgwhite p-10 w-11/12">
        <div className="">
          <h3 className="font-semibold text-customgreen ">LEARN ANYTHING</h3>
          <h1 className="text-5xl font-semibold mt-4">
            Benefits About Online Learning Expertise
          </h1>
        </div>

        <div className="flex flex-col gap-1 mt-10  group">
          {onlineLearnData.map((val, i) => (
            <div className="flex gap-3 h-fit rounded-md bg-white shadow-sm p-6  hover:bg-customgreen text-white  duration-200">
              <div className="h-20 w-20 flex items-center justify-center bg-gray-200">
                <img src={val.icon} alt="icons"></img>
              </div>
              <div className="flex flex-col h-fit  gap-4">
                <h1 key={i} className="text-2xl font-semibold">
                  {val.title}
                </h1>
                <p key={i} className="">
                  {val.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningOnline;
