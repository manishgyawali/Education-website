import React from "react";
import { CiClock2 } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Head = () => {
  return (
    <div className="flex justify-between bg-bgmain text-white py-7">
      <div>
        <h1 className="font-bold text-2xl cursor-pointer hover:text-customgreen duration-500 ">
          ACADEMIA
        </h1>
        <h3 className="text-sm font-medium cursor-pointer">
          ONLINE EDUCATION & LEARNING
        </h3>
      </div>

      <div className="flex gap-4">
        <div>
          <CiClock2 className="text-5xl " />
        </div>
        <div>
          <h3>Monday-Friday</h3>
          <h3>8:00AM-8:00PM</h3>
        </div>
      </div>

      <div className="flex gap-4">
        <div>
          <FaPhoneAlt className="text-4xl " />
        </div>
        <div>
          <h3>Call Us</h3>
          <h3>+977-987654321</h3>
        </div>
      </div>

      <div className="flex gap-4">
        <FaFacebookF className="border rounded-full text-3xl " />
        <CiTwitter  className="border rounded-full text-3xl "/>
        <FaInstagram  className="border rounded-full text-3xl "/>
      </div>
    </div>
  );
};

export default Head;
