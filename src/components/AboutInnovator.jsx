import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, TreePine, Recycle } from 'lucide-react';

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
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=2069"
          alt="Sarah Chen - Founder"
          className="rounded-lg shadow-xl"
        />
        <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-4 rounded-lg shadow-lg hidden md:block">
          <p className="font-semibold">20+ Years Experience</p>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Meet Our Innovator</h2>
        <h3 className="text-2xl text-green-700 mb-4">Sarah Chen</h3>
        <p className="text-gray-600 mb-6">
          With over two decades of experience in sustainable architecture and ceramic design, Sarah Chen has revolutionized
          the way we think about eco-friendly building materials. Her passion for environmental conservation led her to
          found EcoCeramic in 2010, with a vision to create beautiful, sustainable tiles that don't compromise on quality
          or aesthetics.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 text-gray-700">
            <Award className="text-green-600" size={24} />
            <span>Sustainable Design Award 2023</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-700">
            <TreePine className="text-green-600" size={24} />
            <span>Environmental Conservation Pioneer</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-700">
            <Recycle className="text-green-600" size={24} />
            <span>Zero Waste Manufacturing Expert</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
