import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='flex fixed top-0 left-0 w-full h-20 justify-between items-center bg-white/10 backdrop-blur-sm px-10 z-50 shadow-sm border-b border-white/20'>
      <Link to="/" className='flex items-center'>
        <img src="/hire in.png" alt="HireIn logo" className='w-20 h-auto'/>
        <h1 className='text-[#3a8b95] text-3xl font-bold'>HireIn</h1>
      </Link>
      <ul className='hidden md:flex items-center gap-8 font-medium text-gray-700'>
        <li><NavLink to="/" className={({isActive}) => isActive? "text-[#3a8b95] border-b-2 border-[#e2b808]" : "hover:text-[#3a8b95] transition"}>Home</NavLink></li>
        <li><NavLink to="/features" className="hover:text-[#3a8b95]">Features</NavLink></li>
        <li><NavLink to="/about" className="hover:text-[#3a8b95]">About Us</NavLink></li>
        <li><NavLink to="/howItWorks" className="hover:text-[#3a8b95]">How it Works</NavLink></li>
      </ul>
      <div className='flex items-center gap-4'>
        <Link to="/login" className='py-2 px-6 border-2 border-[#3a8b95] text-[#3a8b95] font-semibold rounded-xl hover:bg-[#f0f7f7] transition'>Log In</Link>
        <Link to="/signup" className='py-2 px-6 bg-[#e2b808] text-white font-semibold rounded-xl hover:bg-[#c9a307] shadow-md transition'>Sign Up</Link>
      </div>
    </nav>
  )
}
