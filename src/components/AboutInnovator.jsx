import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Recycle, CheckCircle, Lightbulb } from "lucide-react";
import { fetchData } from "../api/Api";

export default function InnovatorSection() {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [image, setImage] = useState("");

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        const data = await fetchData();
        if (data && data[7]) {
          setTitle(data[7][0]);
          setParagraph(data[7][1]);
          setImage(data[7][2]);
        }
      } catch (error) {
        console.error("Error fetching InnovatorSection data:", error);
      }
    };
    fetchSheetData();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-2 gap-12 items-center mb-10 px-6 py-8 sm:px-8 lg:px-16 xl:px-20"
    >
      {/* Image Section */}
      <div className="relative flex justify-center md:justify-start" id="about-innovator">
        {image && (
          <img
            src={image}
            alt="Innovator"
            className="rounded-lg shadow-xl w-full max-w-full md:max-w-1/2 lg:max-w-1/3 xl:max-w-1/4 object-cover h-96 md:h-128 lg:h-112 xl:h-128 object-top"
          />
        )}
        <div className="absolute bottom-0 right-4 md:bottom-[-1rem] md:right-[-2rem] lg:bottom-[-2rem] lg:right-[-2rem] bg-green-600 text-white p-2 md:p-3 rounded-lg shadow-lg text-xs sm:text-sm md:text-base font-semibold hidden md:block">
          Passion for Sustainable Design
        </div>
      </div>

      {/* Text Section */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center md:text-left">
          {title}
        </h2>
        <h3 className="text-xl sm:text-2xl text-green-700 mb-4 text-center md:text-left">
          Robert Tuu
        </h3>
        <p className="text-gray-600 mb-6 text-lg sm:text-base text-center md:text-left">
          {paragraph}
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
