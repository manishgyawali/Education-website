import React from "react";
import { CiClock2 } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Head = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-10/12 mx-auto  text-white py-4">
        <div>
          <h1 className="font-bold text-xl cursor-pointer hover:text-customgreen duration-500 ">
            ACADEMIA
          </h1>
          <h3 className="text-sm font-medium cursor-pointer">
            ONLINE EDUCATION & LEARNING
          </h3>
        </div>

        <div className="flex gap-4 text-md">
          <div>
            <CiClock2 className="text-4xl " />
          </div>
          <div>
            <h3>Monday-Friday</h3>
            <h3 className="font-bold">8:00AM-8:00PM</h3>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <FaPhoneAlt className="text-3xl " />
          </div>
          <div className="text-md">
            <h3>Call Us</h3>
            <h3 className="font-bold">+977-987654321</h3>
          </div>
        </div>

        <div className="flex gap-4">
          <FaFacebookF className="border rounded-full text-xl  text-bgmain bg-white bg-opacity-70 h-10 w-10 p-2 " />
          <CiTwitter className="border rounded-full text-xl  text-bgmain bg-white bg-opacity-70 h-10 w-10 p-2 " />
          <FaInstagram className="border rounded-full text-xl  text-bgmain bg-white bg-opacity-70 h-10 w-10 p-2 " />
        </div>
      </div>
    </div>
  );
};

export default Head;
