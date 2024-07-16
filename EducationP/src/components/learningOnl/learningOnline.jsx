import React from "react";
import { onlineLearnData } from "../../../onlineLearning";
import Learningbg from "../../assets/learning.jpg";
import learningicon from "../../assets/online-learning.png"

const LearningOnline = () => {
  return (
    <div className="grid grid-cols-2  h-fit justify-between w-11/12 mx-auto gap-10">
      <div className="h-full w-full ">
        <img src={Learningbg } className="h-full  w-full object-cover" alt="learningphoto" />
      </div>

      <div className=" flex flex-col justify-center gap-6">
        <div className="bg-pruple-500">
          <h3 className="font-semibold text-customgreen ">LEARN ANYTHING</h3>
          <h1 className="text-4xl font-semibold">
            Benefits About Online Learning Expertise
          </h1>
        </div>

        <div className="flex flex-col gap-5">
          {onlineLearnData.map((val, i) => (
            <div className="flex gap-3 h-fit rounded-md bg-white shadow-sm p-6">
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
