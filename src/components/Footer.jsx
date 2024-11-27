import React from 'react';
import Facebook from '../assets/facebook.svg';
import Whatsapp from '../assets/whatsapp.svg';
import Instagram from '../assets/instagram.svg';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#16A34A]" id='contact'>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Logo and Slogan */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <img src="" alt="Logo" className="w-20 mb-4" />
            <p className="text-white text-lg">Turning waste into worth.</p>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Us</h3>
            <div className="flex items-center gap-4 text-white text-lg mb-4">
              <Phone size={24} />
              <div>
                <a
                  href="tel:0248559224"
                  className="hover:text-gray-900 transition-colors block"
                >
                  0248559224
                </a>
                <a
                  href="tel:0504470191"
                  className="hover:text-gray-900 transition-colors block"
                >
                  0504470191
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white text-lg">
              <Mail size={24} />
              <a
                href="mailto:ecoceramicsgh@gmail.com"
                className="hover:text-gray-900 transition-colors"
              >
                ecoceramicsgh@gmail.com
              </a>
            </div>
          </div>

          {/* Stay in Touch */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Stay in Touch</h3>
            <div className="flex space-x-4">
              <a href="#" className="transition-transform transform hover:scale-110">
                <img src={Facebook} alt="Facebook" className="w-10" />
              </a>
              <a
                href="https://www.instagram.com/ecoceramicsgh/"
                className="transition-transform transform hover:scale-110"
              >
                <img src={Instagram} alt="Instagram" className="w-10" />
              </a>
              <a href="#" className="transition-transform transform hover:scale-110">
                <img src={Whatsapp} alt="Whatsapp" className="w-10" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 py-6 ml-10 mr-10">
        <p className="text-center text-gray-100 text-sm">
          &copy; {new Date().getFullYear()} Your Business Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
