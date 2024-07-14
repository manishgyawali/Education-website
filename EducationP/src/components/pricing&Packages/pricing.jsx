import React from "react";
import { pricePackagedata } from "../../../pricing";
const Pricing = () => {
  return (
    <div className="text-center">
    <div className=" mt-28 ">
      <h3 className="text-customgreen text-xl">OUR PRICING</h3>
      <h1 className="text-4xl font-semibold">Pricing & Packages</h1>
    </div>


    <div className=" flex  border gap-4  mt-16   ">
    {pricePackagedata.map((val, i) => (
          <div className="bg-white shadow-lg  ">
            <h1 key={i} className="text-sm font-medium text-black mt-6  ">{val.pname}</h1>
            <h3 key={i}  className="text-customgreen text-5xl font-bold mt-3" >{val.price}</h3>
            <p key={i}  className="text-ftpara mt-11" >{val.description}</p>
            <button className="bg-white text-customgreen border border-customgreen px-4 py-1 mt-12 text-semibold rounded hover:bg-customgreen duration-500">
            Get Started
            
          </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;