import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 mt-auto w-full">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Copyright */}
        <div className="text-sm md:text-base">
          © {new Date().getFullYear()} Shirisha | Front-End Developer
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap gap-4 text-sm">
          <Link to="/" className="hover:text-purple-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-purple-400">
            About
          </Link>
          <Link to="/skills" className="hover:text-purple-400">
            Skills
          </Link>
          <Link to="/project" className="hover:text-purple-400">
            Projects
          </Link>
          <Link to="/exp" className="hover:text-purple-400">
            Experience
          </Link>
          <Link to="/contact" className="hover:text-purple-400">
            Contact
          </Link>
        </div>

        {/* Right: Social Icons + Designed by */}
        <div className="flex items-center gap-4 text-lg">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-purple-400"
          >
            <FaEnvelope />
          </a>
          {/* Designed by */}
          <span className="text-sm md:text-base ml-4">
            Designed by Shirisha
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
