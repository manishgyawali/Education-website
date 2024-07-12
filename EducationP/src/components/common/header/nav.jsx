import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between bg-gray-300 h-20 text-white '>
      <div className='flex justify-center items-center'>
        <ul className='flex gap-12 '>
          <li>Home</li>
          <li>All Courses</li>
          <li>About</li>
          <li>Team</li>
          <li>Pricing</li>
          <li>Journal</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='flex justify-center items-center bg-customgreen clip-polygon w-[240px] '>
        <h2 >GET CERTIFICATE</h2>
      </div>
    </div>
  )
}

export default Header