import React from "react";
import { motion, useInView } from "framer-motion"; // Import useInView hook
import { Leaf } from "lucide-react"; // Ensure Leaf is imported properly

const AboutProducts = () => {
  const ref = React.useRef(null); // Create a ref for the element
  const inView = useInView(ref, { once: true }); // Check if the element is in view

  return (
    <div id="about" className="py-20 px-4 lg:px-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref} // Attach the ref here
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Trigger animation when in view
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            {/* Apply text sizes similar to the Innovator Section */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Our Commitment to Sustainability
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              At TUU Ceramic Works, we believe in creating beautiful spaces without compromising our planet's future. Our tiles are crafted from sustainable materials using eco-friendly processes, ensuring minimal environmental impact while maintaining the highest quality standards.
            </p>
            <div className="flex items-center space-x-4 text-green-600">
              <Leaf size={24} />
              <span className="font-medium">100% Eco-friendly Materials</span>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=2070"
              alt="Sustainable manufacturing"
              className="rounded-lg shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutProducts;
