import React from "react";
import { onlineLearnData } from "../onlineLearning";
import Learningbg from "../src/assets/learning.jpg";

const LearningOnline = () => {
  return (
    <div className="flex justify-evenly w-10/12 gap-10">
      <div className="h-100 w-full overflow-clip bg-gray-300">
       <img src={Learningbg} alt="learningphoto" />
      </div>

      <div>
        <div>
          <h3 className="font-semibold text-customgreen ">LEARN ANYTHING</h3>
          <h1 className="text-4xl font-semibold">
            Benefits About Online Learning Expertise
          </h1>
        </div>

        <div className="bg-white ">
          {onlineLearnData.map((val, i) => (
            <div className="flex gap-10 border">
                <div>
                <h1 key={i}>{val.icon}</h1> 
                </div>
                <div className="grid gap-4">
                <h1 key={i} className="text-2xl font-semibold">{val.title}</h1> 
                <p key={i} className="mt-10">{val.paragraph}</p> 
                </div>
            </div>
   
          ))}
        </div>
     
      </div>
    </div>
  );
};

export default LearningOnline;
