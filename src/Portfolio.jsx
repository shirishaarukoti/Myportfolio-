import React from "react";

const BodySection = () => {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center min-h-screen p-10 gap-10 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 text-gray-800">
      {/* Right - Introduction */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-bold text-pink-600">
          Hello, I'm Shirisha 👋
        </h1>
        <h2 className="text-xl text-purple-600 font-semibold mt-2">
          Front-End Developer
        </h2>
        <p className="mt-4 text-gray-700 font-medium leading-tight text-justify">
          I specialize in developing modern, responsive, and highly
          user-friendly web applications. I am passionate about crafting designs
          that are both elegant and intuitive, ensuring seamless and engaging
          user experiences. In my workflow, I leverage AI-powered tools such as
          ChatGPT, GitHub Copilot, and Figma AI to enhance design creativity,
          optimize code efficiency, and accelerate project delivery.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-row justify-center md:justify-start gap-4">
          <a
            href="/FrontEnd New Resume|Shirisha.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 text-gray-800 font-semibold rounded-lg shadow-md hover:from-pink-300 hover:via-purple-300 hover:to-blue-300 transition-all"
          >
            Download CV
          </a>

          <a
            href="#exp"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-gray-800 font-semibold rounded-lg shadow-md hover:from-blue-300 hover:via-purple-300 hover:to-pink-300 transition-all"
          >
            View My Work
          </a>
        </div>
      </div>
    </main>
  );
};

export default BodySection;
