import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Recycle, CheckCircle, Lightbulb } from 'lucide-react';

export default function InnovatorSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-2 gap-12 items-center mb-10 px-6 py-8 sm:px-8 lg:px-16 xl:px-20"
    >
      {/* Image Section */}
      <div className="relative flex justify-center md:justify-start" id='about-innovator'>
        <img
          src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=2069"
          alt="Sarah Chen - Founder"
          className="rounded-lg shadow-xl max-w-full md:max-w-3/4 lg:max-w-2/3 xl:max-w-1/2"
        />
        {/* Text Box (visible only on medium screens and above) */}
        <div className="absolute bottom-0 right-4 md:bottom-[-1rem] md:right-[-2rem] lg:bottom-[-2rem] lg:right-[-2rem] bg-green-600 text-white p-2 md:p-3 rounded-lg shadow-lg text-xs sm:text-sm md:text-base font-semibold hidden md:block">
          Passion for Sustainable Design
        </div>
      </div>

      {/* Text Section */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center md:text-left">
          Meet Our Innovator
        </h2>
        <h3 className="text-xl sm:text-2xl text-green-700 mb-4 text-center md:text-left">
          Name
        </h3>
        <p className="text-gray-600 mb-6 text-lg sm:text-base text-center md:text-left">
          With a deep passion for sustainable design and eco-friendly materials, [Founder’s Name] set out to create a brand that combines beauty and responsibility. Inspired by the need for environmentally conscious building materials, TUU Ceramic Works was born with a vision to craft high-quality tiles that not only enhance spaces but also contribute to a greener planet. At EcoCeramic, we're committed to offering products that reflect our dedication to sustainability, innovation, and design excellence.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 text-gray-700">
            <CheckCircle className="text-green-600" size={24} />
            <span>Committed to Eco-Friendly Manufacturing</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-700">
            <Lightbulb className="text-green-600" size={24} />
            <span>Redefining Ceramic Design with Innovation</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-700">
            <Recycle className="text-green-600" size={24} />
            <span>Striving for Zero Waste in Every Product</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
