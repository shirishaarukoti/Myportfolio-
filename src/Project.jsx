import React from "react";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 text-gray-800 p-10">
      <h1 className="text-3xl font-bold text-center text-pink-600 underline mb-10">
        My Projects
      </h1>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 w-1 h-full bg-gradient-to-b from-pink-400 via-purple-400 to-blue-400 rounded-full"></div>

        {/* Project 1 - ToDo List */}
        <div className="ml-12 mb-10">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 bg-pink-500 rounded-full shadow-md"></div>
            <h2 className="ml-4 text-xl font-semibold text-purple-600">
              To-Do List App
            </h2>
          </div>
          <p className="ml-10 text-gray-500 text-sm mb-4">
            React JS | Tailwind CSS | APIs
          </p>
          <ul className="ml-10 list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>
              Built a modern to-do list app where users can add, edit, and
              delete tasks.
            </li>
            <li>
              Used React Hooks (useState, useEffect) for state management.
            </li>
            <li>Styled with Tailwind CSS for responsive design.</li>
            <li>
              Integrated local storage API so tasks remain saved after refresh.
            </li>
            <li>Added filtering options (All, Completed, Pending).</li>
          </ul>
          {/* Buttons */}
          <div className="ml-10 flex gap-4">
            <a
              href="https://github.com/shirishaarukoti/Myportfolio-"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition"
            >
              GitHub Repo
            </a>
            <a
              href="https://github.com/shirishaarukoti/Myportfolio-"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 2 - Weather App */}
        <div className="ml-12 mb-10">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full shadow-md"></div>
            <h2 className="ml-4 text-xl font-semibold text-pink-600">
              Weather App
            </h2>
          </div>
          <p className="ml-10 text-gray-500 text-sm mb-4">
            React JS | Tailwind CSS | OpenWeather API
          </p>
          <ul className="ml-10 list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>
              Created a real-time weather app using the OpenWeatherMap API.
            </li>
            <li>Users can search by city name to get live weather details.</li>
            <li>
              Displays temperature, humidity, wind speed, and weather icons.
            </li>
            <li>Used async/await with fetch API to call weather data.</li>
            <li>
              Fully responsive with Tailwind for mobile and desktop screens.
            </li>
          </ul>
          {/* Buttons */}
          <div className="ml-10 flex gap-4">
            <a
              href="https://github.com/yourusername/weatherapp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              GitHub Repo
            </a>
            <a
              href="https://yourweatherdemo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
