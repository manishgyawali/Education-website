import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  const footerData=[
    {},
    {},
    {},
    {},
    {},

  ]
  return (
   <div className='grid grid-cols-5 gap-3 pt-24'>
    <div>
      <h1 className='font-bold text-2xl '>ACADEMIA</h1>
      <h3 className='text-sm text-customgreen font-medium'>ONLINE EDUCATION & LEARNING</h3>
      <p className='mt-9 text-ftpara'>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
        <div className="flex gap-4">
          <FaFacebookF className="border rounded-full text-xl  text-bgmain bg-white bg-opacity-70 h-10 w-10 p-2 " />
          <CiTwitter className="border rounded-full text-xl  text-bgmain bg-white bg-opacity-70 h-10 w-10 p-2 " />
          <FaInstagram className="border rounded-full text-xl  text-bgmain bg-white bg-opacity-70 h-10 w-10 p-2 " />
        </div>
    </div>


    <div>
      <h2 className='font-semibold text-lg'>Explore</h2>
  <div className='mt-9'>
  <ul>
    {
      footerData.map((val,i)=>{
        return(
          <li> About Us</li>

        )
      })
    }
        {/* <li>Services</li>
        <li>Courses</li>
        <li>Blog</li>
        <li>Contact Us</li> */}
      </ul>
  </div>
    </div>



    <div>
      <h2 className='font-semibold text-lg'>Quick Links</h2>
     <div className='mt-9' >
     <ul>
        <li>Contact Us</li>
        <li>Pricing</li>
        <li>Terms & Conditions</li>
        <li>Privacy</li>
        <li>Feedbacks</li>
      </ul>
     </div>
    </div>



    <div>
      <h2 className='font-semibold text-lg'>Recent Posts</h2>
    </div>



    <div>
      <h2 className='font-semibold text-lg'>Have a Questions?</h2>
      <div className='mt-9'>
        <h4>	203 Fake St. Mountain View, San Francisco, California, USA</h4>
        <h4>	+2 392 3929 210</h4>
        <h4>	info@yourdomain.com</h4>
      </div>
    </div>


   </div>
  )
}

export default Footer