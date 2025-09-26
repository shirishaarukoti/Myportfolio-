import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiHuggingface,
} from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiCopilotFill } from "react-icons/ri";
import { TbBrandGoogle } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";

const Skills = () => {
  const frontendSkills = [
    { name: "React", icon: <FaReact className="text-sky-500 text-xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-xl" /> },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600 text-xl" />,
    },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-xl" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-500 text-xl" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-600 text-xl" />,
    },
    {
      name: "Responsive Design",
      icon: <MdOutlineDesignServices className="text-green-600 text-xl" />,
    },
    {
      name: "Git & GitHub",
      icon: <FaGithub className="text-gray-800 text-xl" />,
    },
  ];

  const aiTools = [
    { name: "ChatGPT", icon: <SiOpenai className="text-green-600 text-xl" /> },
    {
      name: "GitHub Copilot",
      icon: <RiCopilotFill className="text-blue-700 text-xl" />,
    },
    {
      name: "Gemini AI",
      icon: <TbBrandGoogle className="text-red-500 text-xl" />,
    },
    {
      name: "TensorFlow",
      icon: <SiTensorflow className="text-orange-600 text-xl" />,
    },
    { name: "Claude", icon: <FaRobot className="text-purple-600 text-xl" /> },
    { name: "PyTorch", icon: <SiPytorch className="text-red-600 text-xl" /> },
    {
      name: "OpenAI API",
      icon: <SiOpenai className="text-teal-600 text-xl" />,
    },
    {
      name: "Hugging Face",
      icon: <SiHuggingface className="text-yellow-500 text-xl" />,
    },
  ];

  // Animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.05, type: "spring", stiffness: 120 },
    }),
    hover: { scale: 1.05, boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" },
  };

  return (
    <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 text-gray-800 flex flex-col">
      <main className="flex flex-col items-center justify-center p-4 gap-6">
        <h1 className="text-3xl underline font-bold text-purple-600">
          Technical Skills
        </h1>

        {/* Front-End Developer Skills */}
        <div className="w-full max-w-4xl bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold text-pink-500 mb-3">
            Front-End Developer Skills
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-md"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={index}
              >
                {skill.icon}
                <span className="mt-1 text-xs">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI Tools */}
        <div className="w-full max-w-4xl bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold text-blue-500 mb-3">AI Tools</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {aiTools.map((tool, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-md"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={index}
              >
                {tool.icon}
                <span className="mt-1 text-xs">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;
