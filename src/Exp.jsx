import React from "react";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 text-gray-800 p-10">
      <h1 className="text-3xl font-bold text-center text-pink-600 underline mb-10">
        My Experience
      </h1>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 w-1 h-full bg-gradient-to-b from-pink-400 via-purple-400 to-blue-400 rounded-full"></div>

        {/* Experience Item */}
        <div className="ml-12 mb-10">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 bg-pink-500 rounded-full shadow-md"></div>
            <h2 className="ml-4 text-xl font-semibold text-purple-600">
              Front-End Developer
            </h2>
          </div>
          <p className="ml-10 text-gray-600 font-medium">Infoscience Labs</p>
          <p className="ml-10 text-gray-500 text-sm mb-4">
            2022 - Present (3 Years)
          </p>
          <ul className="ml-10 list-disc list-inside text-gray-700 space-y-2">
            <li>
              Built and maintained responsive web applications using{" "}
              <span className="font-semibold">
                React, JavaScript, HTML, CSS, and Tailwind CSS
              </span>
              .
            </li>
            <li>
              Collaborated with designers and backend developers to deliver
              scalable solutions.
            </li>
            <li>
              Improved performance, accessibility, and cross-browser
              compatibility.
            </li>
          </ul>
        </div>

        {/* AI Tools Section */}
        <div className="ml-12 mb-10">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full shadow-md"></div>
            <h2 className="ml-4 text-xl font-semibold text-pink-600">
              AI Tools Used
            </h2>
          </div>
          <ul className="ml-10 list-disc list-inside text-gray-700 space-y-2">
            <li>
              ChatGPT – for code suggestions, debugging, and learning new
              concepts.
            </li>
            <li>
              GitHub Copilot – to speed up coding with smart auto-completions.
            </li>
            <li>Figma AI Plugins – for faster UI design workflows.</li>
            <li>Notion AI – to organize project documentation and notes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
