import React from 'react';
import california from '../Assets/california.jpg';
import { useState } from 'react';
import {motion} from 'framer-motion';

function Home() {
  const  [whoAreWe, setWhoAreWe] = useState(false);
  function toggleWhoAreWe(){
    setWhoAreWe(!whoAreWe);
  }
  return (
    
    <div className="absolute z-20 top-20 left-0 w-full h-auto p-8 text-black bg-opacity-70">

  <button onClick={toggleWhoAreWe}>
    Who are we ?
  </button>

  {whoAreWe && (
    <motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -10 }}
  transition={{
    duration: 0.45,
    ease: "easeOut"
  }}
>

      <p className="bg-white bg-opacity-80 p-4 rounded-md max-w-3xl">
        We are a team of passionate travel enthusiasts dedicated to helping you explore the world...
      </p>
    </motion.div>
  )}
</div>

  );
}

export default Home;
