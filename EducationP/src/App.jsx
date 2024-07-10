import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/common/header/header'
import Footer from './components/common/footer/Footer'
import Head from './components/common/header/Head'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Head/>
<Header/>
<Footer/>
</>
  
  )
}

export default App
