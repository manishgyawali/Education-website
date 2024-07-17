import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/common/header/nav'
import Footer from './components/common/footer/Footer'
import Head from './components/common/header/Head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footerlast from './components/common/footer/footerlast'
import Homebanner from './components/banner/Homebanner'
import AllCourse from './components/AllCourses/AllCourse'
import Newsletter from './components/newsletter/Newsletter'
// import Pricing from './components/pricing&Packages/pricing'
import Blog from './components/Blog/Blog'
import LearningOnline from './components/learningOnl/learningOnline'
import Success from './components/success/success'
import { Route, Routes } from 'react-router'
import Home from './components/pages/Home';
import Allcourse from './components/pages/Allcourse';
import Contact from './components/pages/Contact';
import Journal from './components/pages/Journal';
import Pricing from './components/pages/Pricing';
import Team from './components/pages/Team';
import About from './components/pages/About';


function App() {
  const [count, setCount] = useState(0)

  return (


    <>
      <Toolbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allcourse' element={<Allcourse />} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<Team />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/journal' element={<Journal />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>


  
  )
}

export default App
 