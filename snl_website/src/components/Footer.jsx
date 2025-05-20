import React from 'react';
import icon from '../assets/SNL_Logo.png';

const Footer = () => {
  return (
            <footer className="py-8 border-t border-gray-200 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={icon} alt="SNL" className="w-20 h-20" />
              </div>
              <p className="text-gray-600 mb-4">Powering a sustainable future with innovative solar solutions since 2019.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a  href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
                <li><a  href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a></li>
                <li><a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Residential Solar</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Commercial Solar</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Battery Storage</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">System Maintenance</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Energy Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
              <form className="flex">
                <input type="email" placeholder="Your email address" className="px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all flex-grow" />
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-all">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2025 SNL Energy Solution. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
              <a  href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Sitemap</a>
            </div>
          </div>
          {/* Next: "Add back to top button" */}
        </footer>
  )
}

export default Footer