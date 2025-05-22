import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import icon from "../assets/SNL_Logo.png";
import { Link } from "react-scroll";

const navItems = [
  { label: "Home", href: "home" },
  { label: "Mission", href: "mission" },
  { label: "Our Journey", href: "journey" },
  { label: "What We Do", href: "whatwedo" },
  { label: "Impact", href: "impact" },
  { label: "Stories", href: "testimonials" },
  { label: "Partners", href: "partner" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const [scrollOffset, setScrollOffset] = useState(-80);

  const headerRef = useRef(null);

  const updateOffset = () => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;

      // Detect mobile screen width (you can tweak this breakpoint)
      const isMobile = window.innerWidth < 768;

      // On mobile, add extra offset to account for sticky menu and potential padding
      const extraMobileOffset = 350;

      const offset = isMobile ? -(height + extraMobileOffset) : -(height + 10);

      setScrollOffset(offset);
    }
  };

  useEffect(() => {
    updateOffset();

    window.addEventListener("resize", updateOffset);

    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  // Also update offset when menu toggles
  useEffect(() => {
    updateOffset();
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white border-b border-gray-200 py-2 px-4 md:px-8 drop-shadow-md"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={scrollOffset}
          duration={500}
          className="flex items-center space-x-2 hover:cursor-pointer"
        >
          <img src={icon} alt="SNL Logo" className="w-16 h-16" />
        </Link>

        {/* Mobile menu icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}{" "}
          {/* ✅ Toggle icon */}
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              spy={true}
              smooth={true}
              offset={scrollOffset}
              duration={500}
              onClick={() => {
                setMenuOpen(false);
                setActiveSection(item.href);
              }}
              onSetActive={() => setActiveSection(item.href)}
              className={`px-3 py-2 rounded-lg hover:bg-green-50 transition-all hover:cursor-pointer ${
                activeSection === item.href ? "bg-green-100 font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Quote button (Desktop only) */}
        <button className="hidden md:inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Contact Us
        </button>
      </div>

      {/* Mobile nav with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-[500px] opacity-100 ease-out mt-4"
            : "max-h-0 opacity-0 ease-in"
        } flex flex-col space-y-2`}
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            spy={true}
            smooth={true}
            offset={scrollOffset}
            duration={500}
            onClick={() => {
              setActiveSection(item.href);
              setMenuOpen(false);
            }}
            onSetActive={() => setActiveSection(item.href)}
            className={`px-3 py-2 rounded-lg hover:bg-green-50 transition-all hover:cursor-pointer ${
              activeSection === item.href ? "bg-green-100 font-semibold" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
