"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, ArrowRight, X } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Hemoglobin Level Analysis Across Age Groups",
      desc: "A data-driven study exploring variations in hemoglobin levels and their medical implications.",
    },
    {
      title: "PCR-based Detection of Bacterial DNA",
      desc: "A molecular biology project focused on optimizing PCR conditions for bacterial detection.",
    },
    {
      title: "Comparative Study of Blood Glucose Measurement Methods",
      desc: "Analyzed the accuracy of different glucose monitoring techniques and instruments.",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  const handleOpen = (project: typeof projects[0]) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className="min-h-screen md:w-[90%] mt-2 bg-slate-800/50 rounded-lg border border-slate-700 shadow-xl backdrop-blur-sm mx-auto px-4 py-8 md:py-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-12">
          <FileText className="w-10 h-10 text-cyan-400" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Projects & Research
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-gray-800/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              onClick={() => handleOpen(project)}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 flex-grow">{project.desc}</p>
              <div className="mt-4 flex justify-end">
                <ArrowRight className="w-5 h-5 text-cyan-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-3xl bg-gray-900 rounded-2xl p-6 shadow-2xl transition-transform duration-300 transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h2>
            <p className="text-gray-400">{selectedProject.desc}</p>

            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300"
              onClick={handleClose}
            >
              <X className="text-white" size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
