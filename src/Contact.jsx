import React, { useState } from "react";
// import emailjs from "emailjs-com";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaRegCommentDots,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mdkwkvov", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      console.error(error);
      setStatus("ERROR");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 flex flex-col items-center p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-purple-600 mb-8 text-center underline decoration-purple-400">
        Contact Me
      </h1>

      {/* Form Container */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 p-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 p-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full pl-10 p-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <FaRegCommentDots className="absolute left-3 top-3 text-gray-400" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full pl-10 pt-3 p-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Platforms */}
        <div className="mt-6 text-center">
          <p className="text-gray-700 mb-3 font-medium">
            Or find me on these platforms:
          </p>
          <div className="flex justify-center gap-4 text-purple-600 text-xl mb-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-700 transition duration-300" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-gray-800 transition duration-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-blue-500 transition duration-300" />
            </a>
          </div>

          {/* Email Contact */}
          <div className="flex items-center justify-center gap-2 text-gray-700 mt-2">
            <FaEnvelope className="text-purple-600" />
            <a
              href="mailto:shirishaarukoti@gmail.com"
              className="hover:text-purple-800 transition duration-300"
            >
              Shirishaarukoti@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
