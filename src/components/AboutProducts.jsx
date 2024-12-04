import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf } from "lucide-react";
import { fetchData } from "../api/Api";

const AboutProducts = () => {
  const [title, setTitle] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [image, setImage] = useState('');
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        const data = await fetchData();
        if (data && data[2]) {
          setTitle(data[2][0]);
          setParagraph(data[2][1]);
          setImage(data[2][2]);
        }
      } catch (error) {
        console.error('Error fetching AboutProducts data:', error);
      }
    };
    fetchSheetData();
  }, []);

  return (
    <div id="about" className="py-20 px-4 lg:px-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              {title}
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              {paragraph}
            </p>
            <div className="flex items-center space-x-4 text-green-600">
              <Leaf size={24} />
              <span className="font-medium">100% Eco-friendly Materials</span>
            </div>
          </div>
          <div className="relative">
            {image && (
              <img
                src={image}
                alt="Sustainable manufacturing"
                className="rounded-lg shadow-xl"
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'cover',
                }}
              />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutProducts;
