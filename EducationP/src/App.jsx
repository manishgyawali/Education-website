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
import Pricing from './components/pricing&Packages/pricing'
import Blog from './components/Blog/Blog'
import LearningOnline from '../learningOnl/learningOnline'


function App() {
  const [count, setCount] = useState(0)

  return (
<div className='relative'>

<div className='relative z-10'>
<Head/>
<Header/>
</div>

<Homebanner/>
<div className='w-11/12 mt-96 pt-20 grid gap-14 mx-auto'>
<LearningOnline/>
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

export default App
 