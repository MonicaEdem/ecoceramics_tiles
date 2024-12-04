import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fetchData } from "../api/Api";

const Products = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const data = await fetchData();
        if (data) {
          setTitle(data[3][0]);
          setDescription(data[3][1]);
          const fetchedProducts = [
            {
              id: 1,
              name: data[4][1],
              img: data[4][2],
            },
            {
              id: 2,
              name: data[5][1],
              img: data[5][2],
            },
            {
              id: 3,
              name: data[6][1],
              img: data[6][2],
            },
          ];
          setProducts(fetchedProducts);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductsData();
  }, []);

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="products">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {description}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-l font-normal text-gray-800">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <a
            href="#contact"
            aria-label="Navigate to the Contact Us section"
            className="inline-flex bg-green-600 text-white px-8 py-3 rounded-lg text-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all items-center space-x-2"
          >
            <span>Contact Us</span>
            <ArrowRight size={20} className="mt-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
