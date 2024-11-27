import React from 'react';
import { motion } from 'framer-motion';
import Background from '../assets/backgroundpicture.avif';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
    <div className="absolute inset-0">
      <img
        src={Background}
        className="w-full h-full object-cover"
        alt="Hero background"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
    <div className="relative z-10 text-center text-white px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-6"
      >
        Sustainable Beauty in Every Tile
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl mb-8"
      >
        Eco-friendly ceramic tiles for your sustainable lifestyle
        </motion.p>
        <motion.a
  href="#products" 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition-colors inline-block"
>
  Explore Collection
</motion.a>


    </div>
  </section>

  )
}

export default HeroSection