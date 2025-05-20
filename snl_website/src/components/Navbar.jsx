import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // ✅ import both icons
import icon from '../assets/SNL_Logo.png';

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="md:static sticky top-0 z-50 bg-white border-b border-gray-200 py-2 px-4 md:px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={icon} alt="SNL Logo" className="w-16 h-16" />
        </div>

        {/* Mobile menu icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />} {/* ✅ Toggle icon */}
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
                <a key={index} href={item.href} className="px-3 py-2 rounded-lg hover:bg-yellow-50 transition-all">
                    {item.label}
                </a>
            ))}
        </nav>

        {/* Quote button (Desktop only) */}
        <button className="hidden md:inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Get a Quote
        </button>
      </div>

      {/* Mobile nav with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? 'max-h-[500px] opacity-100 ease-out mt-4'
            : 'max-h-0 opacity-0 ease-in'
        } flex flex-col space-y-2`}
      >
       {navItems.map((item, index) => (
                <a key={index} href={item.href} className="px-3 py-2 rounded-lg hover:bg-yellow-50 transition-all">
                    {item.label}
                </a>
            ))}
      </div>
    </header>
  );
};

export default Navbar;
