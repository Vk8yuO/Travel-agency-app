import React from 'react'
import Background2 from '../Assets/Background2.jpg'
function Background() {
  return (
   <div className="relative bg-transparent w-full h-screen">
  <img 
    src={Background2} 
    alt="Background Image" 
    className="w-full h-screen object-cover absolute inset-0 -z-10"
  />
</div>

  )
}

export default Background
