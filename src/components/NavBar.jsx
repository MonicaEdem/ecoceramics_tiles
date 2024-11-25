import { ShoppingBag, Menu, X} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navBarRef = useRef(null)

  const handleClicksOutside = event =>{
    if (navBarRef.current && !navBarRef.current.contains(event.target)){
        setMenuOpen(false);
    }};


    useEffect(() =>{
        document.addEventListener('mousedown', handleClicksOutside);

        return () => {
            document.removeEventListener('mousedown', handleClicksOutside);
         }
    
    }, []);


  return (
    <div ref={navBarRef} className="fixed w-full bg-white py-4 px-6 lg:px-20 shadow-md z-50">
      <div className="flex items-center justify-between">
        <img src="" alt="logo" />

        {/* Menu for Small Screens */}
        <button
          className="lg:hidden block text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen?<X />:<Menu size={24} />}
        </button>

        {/* Links for Large Screens */}
        <div className="hidden lg:flex items-center gap-10">
          <a href="" className="text-gray-700 hover:text-deepBlue transition">
            About
          </a>
          <a href="" className="text-gray-700 hover:text-deepBlue transition">
            Products
          </a>
          <a href="" className="text-gray-700 hover:text-deepBlue transition">
            Our Story
          </a>
          <a href="" className="text-gray-700 hover:text-deepBlue transition">
            Contact-US
          </a>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-300 rounded-full text-gray-700 hover:bg-slate-400 transition">
            <ShoppingBag className="size-5" /> Shop now
          </button>
        </div>
      </div>

      {/* Links for Small Screens */}
      {menuOpen && (
        <div className="flex flex-col items-start mt-4 gap-4 lg:hidden transition-transform duration-300 ease-in-out transform">
          <a href="" className="text-gray-700 hover:text-deepBlue transition">
            About
          </a>
          <a href="" className="text-gray-700 hover:text-deepBlue transition">
            Products
          </a>
          <a href="" className="text-gray-700 hover:text-deepBlue transition">
            Our Story
          </a>
          <a href="" className="text-gray-700 hover:text-deepBlue transition">
            Contact-US
          </a>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-300 rounded-full text-gray-700 hover:bg-slate-400 transition">
            <ShoppingBag className="size-5" /> Shop now
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
