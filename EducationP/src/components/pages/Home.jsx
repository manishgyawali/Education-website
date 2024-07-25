import React from 'react'
import Homebanner from '../banner/Homebanner'
import Head from '../common/header/Head'
import Header from '../common/header/nav'
import LearningOnline from '../learningOnl/learningOnline'
import AllCourse from '../AllCourses/AllCourse'
import Pricing from '../pricing&Packages/pricing'
import Blog from '../Blog/Blog'
import Newsletter from '../newsletter/Newsletter'
import Footer from '../common/footer/Footer'
import Footerlast from '../common/footer/footerlast'
import HBanner from '../horizontalbanner/hBanner'

const Home = () => {
 

  return (
    <div className=''>

    <Homebanner/> 
    <div className='w-11/12 mt-96  pt-20 mx-auto'>
    <LearningOnline/>
    </div>
  

    <HBanner/>
    
    <div className='w-11/12 mt-40 pt-20 grid gap-14 mx-auto'>
    <AllCourse/>
    <Pricing/>
    <Blog/>
    </div>
    
    
    </div>

      )
}

export default Home