
import { useState } from 'react'

import './App.css'
import Home from './components/pages/Home'
import Head from './components/common/header/Head'
import { Route, Routes } from 'react-router'
import Header from './components/common/header/nav'
import Footer from './components/common/footer/Footer'
import Footerlast from './components/common/footer/footerlast';
import Team from './components/pages/Team'
import Allcourse from './components/pages/Allcourse';



function App() {
  
  return <div>
        
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<Head/>} />
        <Route path='/about' element={<Header/>} />
        <Route path='/allcourse' element={<Allcourse/>} />
        <Route path='/team' element={<Team/>} />
             
             </Routes>
          
  </div>
}
export default App
 