import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const Homebanner = () => {
  return (
    <div className="py-24 bg-bgmain text-white">
      <div className="">
        <h3 className="font-medium">WELCOME TO ACADEMIA</h3>
        <h1 className="font-bold text-4xl mt-2">Best Online Education Expertise</h1>
        <p className="mt-5">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div>
        <button className="bg-customgreen px-5 py-3 font-medium mt-5 rounded ">
          GET STARTED NOW! <FaArrowRight className="text-sm" />
        </button>
        <button className="bg-white text-customgreen px-5 py-3 font-medium ml-1 rounded">
          VIEW COURSE <FaArrowRight className="text-sm"  />
        </button>
      </div>
    </div>
  );
};

export default Homebanner;
