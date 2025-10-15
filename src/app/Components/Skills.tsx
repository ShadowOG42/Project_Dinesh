"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Skills = () => {
  const skills = [
    "Clinical Research",
    "Project Management",
    "Interpersonal Skills",
    "Communication Skills",
    "Data Analysis",
    "Analytical Thinking",
    "Laboratory Testing",
    "Scientific Writing",
    "Critical Thinking",
  ];

  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleOpen = (skill: string) => {
    setSelectedSkill(skill);
  };

  const handleClose = () => {
    setSelectedSkill(null);
  };

  return (
    <section
      id="skills"
      className="min-h-screen md:w-[90%] mt-2 bg-slate-800/50 rounded-lg border border-slate-700 shadow-xl backdrop-blur-sm mx-auto px-4 py-8 md:py-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-12">
          <CheckCircle className="w-10 h-10 text-cyan-400" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            My Skills
          </h1>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-2xl p-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-800/60 transition-all duration-300 shadow-md hover:shadow-xl backdrop-blur-sm"
              onClick={() => handleOpen(skill)}
            >
              <span className="text-white font-medium">{skill}</span>
              <CheckCircle className="w-5 h-5 text-cyan-400" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skill Modal */}
      {selectedSkill && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-md bg-gray-900 rounded-2xl p-6 shadow-2xl transition-transform duration-300 transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-white mb-4">{selectedSkill}</h2>
            <p className="text-gray-400">
              This is one of my key skills that I actively use in my academic projects, research, and laboratory work to achieve accurate results and effective collaboration.
            </p>
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300"
              onClick={handleClose}
            >
              <CheckCircle className="text-white" size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
