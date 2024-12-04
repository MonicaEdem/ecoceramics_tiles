import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchData } from '../api/Api';

const HeroSection = () => {
  const [background, setBackground] = useState('');
  const [title, setTitle] = useState('');
  const [paragraph, setParagraph] = useState('');

  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        const data = await fetchData();
        if (data && data[1]) {
          setTitle(data[1][0]);
          setParagraph(data[1][1]);

          const imageSrc = data[1][2];
          setBackground(imageSrc); // Immediately set the image source
        }
      } catch (error) {
        console.error('Error loading HeroSection data:', error);
      }
    };
    fetchSheetData();
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        {/* Image with lazy loading */}
        <img
          src={background}
          className="w-full h-full object-cover"
          alt="Hero background"
          loading="lazy" // Enable lazy loading for the image
          style={{ filter: background ? 'none' : 'blur(10px)' }} // Apply blur until image is set
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
          {title || 'Loading...'}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8"
        >
          {paragraph || 'Loading...'}
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
  );
};

export default HeroSection;
