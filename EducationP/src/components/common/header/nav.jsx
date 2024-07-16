import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between bg-white bg-opacity-25 pl-4 h-20 text-white w-10/12 mx-auto'>
      <div className='flex justify-center items-center'>
        <ul className='flex gap-12 cursor-pointer '>
          <li>Home</li>
          <li>All Courses</li>
          <li>About</li>
          <li>Team</li>
          <li>Pricing</li>
          <li>Journal</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='flex justify-center items-center bg-customgreen clip-polygon w-[240px] cursor-pointer'>
        <h2 >GET CERTIFICATE</h2>
      </div>
    </div>
  )
}

export default Header