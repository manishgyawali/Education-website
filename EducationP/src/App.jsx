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


function App() {
  const [count, setCount] = useState(0)

  return (
<>

<Head/>
<Header/>
<Homebanner/>
<AllCourse/>
<Pricing/>
<Newsletter/>
<Footer/>
<Footerlast/>
</>
  
  )
}

export default App
