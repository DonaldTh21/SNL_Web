import React from "react";
import icon from "../assets/SNL_Logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <img src={icon} alt="SNL" className="w-20 h-20" />
          </div>
          <p className="text-gray-600 mb-4">
            Bringing sustainable energy solutions to Northeast India's
            underserved communities since our inception.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                <span className="material-symbols-outlined text-primary-600">
                  location_on
                </span>
              </div>
              <p>Thoubal, IN 795138</p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                <span className="material-symbols-outlined text-primary-600">
                  phone
                </span>
              </div>
              <p>7005615168</p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                <span className="material-symbols-outlined text-primary-600">
                  email
                </span>
              </div>
              <p>info@snlenergysolutions.com</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Connect With Us</h4>
          <div className="space-y-2">
            <div className="mt-8 flex space-x-4">
              <a
                href="https://www.facebook.com/p/SNL-Energy-Solutions-100063917748233/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
              >
                <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-colors"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/snl-energy-solutions-private-limted/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-center items-center text-center">
        <p className="text-gray-600 text-sm">
          © 2025 SNL Energy Solution. All rights reserved.
        </p>
      </div>
      {/* Next: "Add back to top button" */}
    </footer>
  );
};

export default Footer;
