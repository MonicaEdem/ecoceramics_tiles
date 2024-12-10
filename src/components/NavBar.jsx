import { ShoppingBag, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { fetchData } from "../api/Api";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [logo, setLogo] = useState("");

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const data = await fetchData();
        if (data) {
          setLogo(data[16][2] || "");
        }
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    };

    fetchLogo();
  }, []);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="fixed w-full bg-white py-4 px-6 lg:px-20 shadow-md z-50">
      <div className="flex items-center justify-between">
        <a href="#home" onClick={() => handleClick("home")}>
          {logo && <img src={logo} alt="logo" className="w-44 h-auto" />}
        </a>

        <button
          className="lg:hidden block text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X /> : <Menu size={24} />}
        </button>

        <div className="hidden lg:flex items-center gap-10">
          <a
            href="#about"
            onClick={() => handleClick("about")}
            className={`text-gray-700 transition ${
              activeLink === "about" ? "text-green-600" : "hover:text-green-600"
            }`}
          >
            About
          </a>
          <a
            href="#products"
            onClick={() => handleClick("products")}
            className={`text-gray-700 transition ${
              activeLink === "products" ? "text-green-600" : "hover:text-green-600"
            }`}
          >
            Products
          </a>
          <a
            href="#about-innovator"
            onClick={() => handleClick("about-innovator")}
            className={`text-gray-700 transition ${
              activeLink === "about-innovator"
                ? "text-green-600"
                : "hover:text-green-600"
            }`}
          >
            Our Story
          </a>
          <a
            href="#contact"
            onClick={() => handleClick("contact")}
            className={`text-gray-700 transition ${
              activeLink === "contact"
                ? "text-green-600"
                : "hover:text-green-600"
            }`}
          >
            Contact Us
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col items-start mt-4 gap-4 lg:hidden transition-transform duration-300 ease-in-out transform">
          <a
            href="#about"
            onClick={() => handleClick("about")}
            className={`text-gray-700 transition ${
              activeLink === "about" ? "text-green-600" : "hover:text-green-600"
            }`}
          >
            About
          </a>
          <a
            href="#products"
            onClick={() => handleClick("products")}
            className={`text-gray-700 transition ${
              activeLink === "products" ? "text-green-600" : "hover:text-green-600"
            }`}
          >
            Products
          </a>
          <a
            href="#about-innovator"
            onClick={() => handleClick("about-innovator")}
            className={`text-gray-700 transition ${
              activeLink === "about-innovator"
                ? "text-green-600"
                : "hover:text-green-600"
            }`}
          >
            Our Story
          </a>
          <a
            href="#contact"
            onClick={() => handleClick("contact")}
            className={`text-gray-700 transition ${
              activeLink === "contact"
                ? "text-green-600"
                : "hover:text-green-600"
            }`}
          >
            Contact Us
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
