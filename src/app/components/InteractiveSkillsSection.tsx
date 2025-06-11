"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React/Next.js", level: 95, color: "bg-blue-500" },
      { name: "TypeScript", level: 90, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 88, color: "bg-purple-500" }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85, color: "bg-green-500" },
      { name: "Python", level: 80, color: "bg-yellow-500" },
      { name: "MongoDB", level: 82, color: "bg-green-600" },
      { name: "REST APIs", level: 88, color: "bg-orange-500" }
    ]
  },
  {
    name: "Design",
    skills: [
      { name: "UI/UX Design", level: 90, color: "bg-pink-500" },
      { name: "Figma", level: 92, color: "bg-purple-600" },
      { name: "Prototyping", level: 85, color: "bg-indigo-500" },
      { name: "Design Systems", level: 88, color: "bg-red-500" }
    ]
  }
];

export default function InteractiveSkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <motion.section
      id="skills"
      className="w-full max-w-6xl px-4 py-16 mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black dark:text-white">
        Skills & Expertise
      </h2>
      
      {/* Category Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-black/10 dark:bg-white/10 backdrop-blur-xl rounded-full p-1 border border-black/20 dark:border-white/20">
          {skillCategories.map((category, idx) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(idx)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === idx
                  ? 'bg-appleBlue text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>
      
      {/* Skills Display */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 md:grid-cols-2"
      >
        {skillCategories[activeCategory].skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white/70 dark:bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/40 dark:border-white/20 shadow-glass"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-black dark:text-white">
                {skill.name}
              </h3>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {skill.level}%
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <motion.div
                className={`h-full ${skill.color} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}