import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between relative">
      {/* Left Side: Hamburger */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-between w-6 h-6 p-1 bg-transparent focus:outline-none md:hidden"
      >
        <span className="block h-0.5 bg-pink-500"></span>
        <span className="block h-0.5 bg-purple-500"></span>
        <span className="block h-0.5 bg-blue-500"></span>
      </button>

      {/* Center: Nav Links (always visible in middle) */}
      <nav className="flex-1 flex justify-center gap-6 font-semibold text-gray-700">
        <Link to="/" className="hover:text-pink-500 transition-colors">
          Home
        </Link>
        <Link to="/about" className="hover:text-purple-500 transition-colors">
          About
        </Link>
        <Link to="/skills" className="hover:text-blue-500 transition-colors">
          Skills
        </Link>
        <Link to="/project" className="hover:text-pink-500 transition-colors">
          Projects
        </Link>
        <Link to="/Exp" className="hover:text-purple-500 transition-colors">
          Experience
        </Link>
        <Link to="/contact" className="hover:text-blue-500 transition-colors">
          Contact Me
        </Link>
      </nav>

      {/* Right Side: Logo + Name */}
      <div className="flex items-center ml-6">
        <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold text-lg mr-3 shadow-md">
          S
        </div>
        <div className="font-bold text-2xl text-pink-500">Shirisha</div>
      </div>

      {/* Mobile Sidebar (optional) */}
      {menuOpen && (
        <div className="fixed top-0 left-0 h-full w-56 bg-white shadow-lg flex flex-col py-6 px-4 z-50">
          <button
            onClick={toggleMenu}
            className="self-end text-black text-2xl font-bold mb-6"
          >
            ×
          </button>
          <Link
            to="/"
            onClick={toggleMenu}
            className="font-semibold text-pink-500 hover:text-pink-700 my-2 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="font-semibold text-purple-500 hover:text-purple-700 my-2 transition-colors"
          >
            About
          </Link>
          <Link
            to="/skills"
            onClick={toggleMenu}
            className="font-semibold text-blue-500 hover:text-blue-700 my-2 transition-colors"
          >
            Skills
          </Link>
          <Link
            to="/project"
            onClick={toggleMenu}
            className="font-semibold text-pink-500 hover:text-pink-700 my-2 transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/Exp"
            onClick={toggleMenu}
            className="font-semibold text-purple-500 hover:text-purple-700 my-2 transition-colors"
          >
            Experience
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="font-semibold text-blue-500 hover:text-blue-700 my-2 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
