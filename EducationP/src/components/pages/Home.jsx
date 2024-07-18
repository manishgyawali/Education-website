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

const Home = () => {
 

  return (
    <div className='relative bg-gray-100'>
    <div className='relative z-10'>
    <Head/>
    <Header/>
    </div>
    <Homebanner/>
    <div className='w-11/12 mt-96  pt-20 mx-auto'>
    <LearningOnline/>
    </div>
 
    
    <div className='w-11/12 mt-40 pt-20 grid gap-14 mx-auto'>
    <AllCourse/>
    <Pricing/>
    <Blog/>
    
    </div>
    
    <Newsletter/>
    <div  className='w-10/12  grid gap-14 mx-auto'>
    <Footer/>
    </div>
    <Footerlast/>
    </div>

      )
}

export default Home