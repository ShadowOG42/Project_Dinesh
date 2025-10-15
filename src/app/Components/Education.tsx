"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const educationList = [
    {
      degree: "Bachelor’s Degree in Clinical/Medical Laboratory Science",
      university: "CQUniversity",
      duration: "Mar 2022 - Nov 2025",
      activities: "Campus Life Events",
      subjects: ["Biochemistry", "Microbiology", "Hematology", "Molecular Diagnostics", "Project Management"],
    },
    // Add more education entries here if needed
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col justify-center items-center px-8 py-20 font-[Montserrat]"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16"
      >
        <div className="flex items-center space-x-3">
          <BookOpen className="w-10 h-10 text-cyan-400" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text text-center">
            Education
          </h2>
        </div>
        <p className="text-gray-400 text-lg mt-4 text-center max-w-2xl">
          My academic journey in Clinical Laboratory Science and related research projects.
        </p>
      </motion.div>

      {/* Education Cards */}
      <div className="grid md:grid-cols-1 gap-8 max-w-6xl w-full">
        {educationList.map((edu, i) => (
          <motion.div
            key={i}
            className={`bg-slate-800/80 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/30 shadow-xl flex flex-col transition-all duration-300`}
            style={{ transitionDelay: `${i * 200}ms` }}
            initial={{ opacity: 0, translateY: 20 }}
            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
          >
            <h3 className="text-2xl font-semibold text-white mb-2">{edu.degree}</h3>
            <p className="text-cyan-300 text-sm mb-2">{edu.university} | {edu.duration}</p>
            <p className="text-slate-300 mb-4">Activities: {edu.activities}</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              {edu.subjects.map((subj, idx) => (
                <li key={idx}>{subj}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
