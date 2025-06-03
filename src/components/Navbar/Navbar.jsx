import React from 'react'

import { Link, Routes, Router, Route } from 'react-router-dom'
import Homepage from '../../pages/Homepage'



const Navbar = () => {
  return (

    <>

  

  <nav style={{backgroundColor : '#FCFF0F', }} className="shadow-md px-10 py-3 flex justify-between items-center">
      
      <div className='flex'><img src="yael.jpg" height={60} width={60} alt="" style={{borderRadius : "10px"}}/>
      
      </div>
      
        <ul className="hidden md:flex space-x-6 text-dark-400 font-medium font-family-Buckin-Demo">
        <li><Link to="/" className="text-[#05df72] font-semibold">Accueil </Link></li>
        <li><a href="#" className="hover:text-blue-500">À propos</a></li>
        <li><a href="#" className="hover:text-blue-500">Services</a></li>
        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100094312801745" className=""> <img src="logo-facebook.png" height={25} width={25} alt="" /> </a></li>
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







    </>

  )
}

export default Navbar