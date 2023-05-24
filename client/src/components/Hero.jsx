import React from 'react'
import AstronautCanvas from '../canvas/Astronaut'
import StarsCanvas from '../canvas/Stars'
import { fadeIn, textVariant } from '../helpers/motion'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <div 
    className='flex w-full h-screen flex-col-reverse md:flex-row relative py-24 items-center justify-center md:ml-14'>
      <motion.div variants={textVariant()}>
      <motion.h1 variants={fadeIn("", "", 0, 1)} className='header-text'>UI <br /> Generator</motion.h1>
      </motion.div>
      <StarsCanvas />
      <AstronautCanvas/>
    </div>
  );
};
export default Hero