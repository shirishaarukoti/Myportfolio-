import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="flex flex-row items-center justify-center gap-12 p-10">
        {/* Left - Text */}
        <div className="max-w-lg flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-purple-600 underline mb-4">
            About Me
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Hi, I'm Shirisha, a passionate Front-End Developer with experience
            in creating modern, responsive, and user-friendly web applications.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            I enjoy learning new technologies, solving complex problems, and
            building projects that make a difference. My focus is on creating
            clean and interactive user experiences.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            I specialize in React, JavaScript, HTML, CSS, and Tailwind CSS, and
            I am always looking to expand my skills with new tools and
            frameworks.
          </p>

          {/* Download CV Button */}
          <div className="mt-6 flex flex-row justify-center md:justify-start gap-4">
            <a
              href="/FrontEnd New Resume|Shirisha.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 text-gray-800 font-semibold rounded-lg shadow-md hover:from-pink-300 hover:via-purple-300 hover:to-blue-300 transition-all"
            >
              Download CV
            </a>
            <a
              href="#Exp"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-gray-800 font-semibold rounded-lg shadow-md hover:from-blue-300 hover:via-purple-300 hover:to-pink-300 transition-all"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Right - Image */}
        <div className="w-68 h-100 overflow-hidden shadow-lg border-4 border-pink-200 flex-shrink-0">
          <img
            src="image.jpeg"
            alt="About Me"
            className="w-full h-full object-cover"
          />
        </div>
      </main>
    </div>
  );
};

export default About;
