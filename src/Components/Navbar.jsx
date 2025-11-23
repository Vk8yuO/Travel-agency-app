import { useState } from 'react'
import React from 'react'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/outline'
function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
  return (
    <div className='w-screen h-[80px] z-10 bg-pink-100 fixed drop-shadow-lg flex items-center justify-between px-4'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>
                    Enjoy Travel
                </h1>
                <ul className='md:flex hidden'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                <button className='border-none bg-transparent text-black mr-4'>Sign Up</button>
            </div>
        </div>
        <button 
  className='border-none bg-transparent mr-4' 
  onClick={handleNav}>
    {nav ? (
    <XMarkIcon className="w-6 h-6 text-gray-700" />) : 
    (<Bars3Icon className="w-6 h-6 text-gray-700" />)}
</button>
       
    </div>  
  )
}

export default Navbar
