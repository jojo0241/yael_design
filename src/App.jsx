import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'


import Footer from './components/Footer'

import Home from './components/Home'
import Contacts from './components/Contacts'
import Apropospage from './pages/Apropospage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    
    
      <Navbar></Navbar>
      <Footer></Footer>
      

    
      
    

      
      
    </>
  )
}

export default App
