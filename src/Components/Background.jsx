import React from 'react'
import Home from './Home'
import Background2 from '../Assets/Background2.jpg'
function Background() {
  return (
    <div className='bg-transparent w-full h-screen'>
      <img src={Background2} alt="Background Image" className='w-full h-screen object-cover absolute -z-10'/>
      <Home/>
    </div>
  )
}

export default Background
