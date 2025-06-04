import React from 'react'

import { Link, Routes, Router, Route } from 'react-router-dom'
import Homepage from '../../pages/Homepage'
import Apropospage from '../../pages/Apropospage'
import Servicespages from '../../pages/Servicespages'
import Contactspage from '../../pages/Contactspage'



const Navbar = () => {
  return (

    <>


  

  <nav style={{backgroundColor : '#FCFF0F', }} className="shadow-md px-10 py-3 flex justify-between items-center">
      
      <div className='flex'><img src="yael.jpg" height={60} width={60} alt="" class="mx-6" style={{borderRadius : "10px"}}/>
      
      </div>
      
        <ul className="hidden md:flex space-x-6 text-dark-400 font-medium font-family-Buckin-Demo">
        <li><Link to="/" className="text-gray-700 font-semibold">Accueil </Link></li>
        <li><Link to="/Apropos" className="text-gray-700 font-semibold">A propos</Link></li>
        <li><Link to="/services" className="text-gray-700 font-semibold">Services</Link></li>
        <li><Link to="/Contact" className="text-gray-700 font-semibold">Nous contacter</Link></li><div class="mx-7"></div>
        <li><a href="https://www.facebook.com/profile.php?id=100094312801745" className=""> <img src="logo-facebook.png"   height={25} width={25} alt="" /> </a></li>
      </ul>

      
      <div className="md:hidden">
        <button className="text-gray-700 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
   
     
    
        </button>
      </div>
    </nav>
 <Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/Apropos" element={<Apropospage />} />
  <Route path="/services" element={<Servicespages />} />
  <Route path="/Contact" element={<Contactspage />} />
</Routes>




  

  







    </>

  )
}

export default Navbar