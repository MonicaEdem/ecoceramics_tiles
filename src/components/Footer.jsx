import React, { useEffect, useState } from "react";
import { fetchData } from "../api/Api";
import Facebook from "../assets/facebook.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Instagram from "../assets/instagram.svg";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const [logo, setLogo] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [email, setEmail] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const data = await fetchData();
        if (data) {
          setLogo(data[15][2]?.split("\n")[0] || "");
          setPhone1(data[9][1]?.split("\n")[0] || "");
          setPhone2(data[10][1]?.split("\n")[0] || "");
          setEmail(data[11][1]?.split("\n")[0] || "");
          setFacebook(data[12][3]?.split("\n")[0] || "");
          setInstagram(data[13][3]?.split("\n")[0] || "");
          setWhatsapp(data[14][3]?.split("\n")[0] || "");
        }
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    fetchFooterData();
  }, []);

  return (
    <footer className="bg-[#16A34A]" id="contact">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {logo && <img src={logo} alt="Logo" className="w-44 mb-4" />}
            <p className="text-white text-lg">Turning waste into worth.</p>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Us</h3>
            <div className="flex items-center gap-4 text-white text-lg mb-4">
              <Phone size={24} />
              <div>
                {phone1 && (
                  <a href={`tel:${phone1}`} className="hover:text-gray-900 transition-colors block">
                    {phone1}
                  </a>
                )}
                {phone2 && (
                  <a href={`tel:${phone2}`} className="hover:text-gray-900 transition-colors block">
                    {phone2}
                  </a>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4 text-white text-lg">
              <Mail size={24} />
              {email && (
                <a href={`mailto:${email}`} className="hover:text-gray-900 transition-colors">
                  {email}
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Stay in Touch</h3>
            <div className="flex space-x-4">
              {facebook && (
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <img src={Facebook} alt="Facebook" className="w-10" />
                </a>
              )}
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <img src={Instagram} alt="Instagram" className="w-10" />
                </a>
              )}
              {whatsapp && (
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <img src={Whatsapp} alt="Whatsapp" className="w-10" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 py-6 ml-10 mr-10">
        <p className="text-center text-gray-100 text-sm">
          &copy; {new Date().getFullYear()} Your Business Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
