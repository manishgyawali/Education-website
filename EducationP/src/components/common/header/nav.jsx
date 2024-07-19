import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [Fix, setFix] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      console.log(pageYOffset);
      if (pageYOffset >= 400) {
        setFix(true);
      } else {
        setFix(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", function () {
        if (pageYOffset >= 400) {
          setFix(true);
        } else {
          setFix(false);
        }
      });
    };
  }, [Fix]);

  return (
    <div
      className={`flex justify-between
    ${
      Fix
        ? "fixed top-5 left-0 text-black shadow-lg bg-opacity-100 right-0 "
        : "relative text-white bg-opacity-25"
    }
     bg-white  pl-4 h-20  w-11/12 mx-auto`}
    >
      <div className="flex justify-center items-center">
        <ul className="flex gap-12 cursor-pointer ">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/allcourse"} className="cursor-pointer">
            All Courses
          </NavLink>
          <NavLink to={"/about"} className="cursor-pointer">
            About
          </NavLink>
          <NavLink to={"/team"} className="cursor-pointer">
            Team
          </NavLink>

          <NavLink to={"/pricing"} className="cursor-pointer">
            Pricing
          </NavLink>

          <NavLink to={"/journal"} className="cursor-pointer">
            Journal
          </NavLink>

          <NavLink to={"/contact"} className="cursor-pointer">
            Contact
          </NavLink>
        </ul>
      </div>
      <div className="flex justify-center text-white items-center bg-customgreen clip-polygon w-[240px] cursor-pointer">
        <h2>GET CERTIFICATE</h2>
      </div>
    </div>
  );
};

export default Header;
