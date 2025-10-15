"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const posts = [
    {
      title: "What I Learned from My First Lab Project",
      date: "June 2024",
      snippet: "Working hands-on with clinical samples taught me the importance of precision, patience, and teamwork in the lab.",
    },
    {
      title: "Why Data Accuracy Matters in Healthcare",
      date: "September 2024",
      snippet: "Every data point represents a patient. Understanding and respecting that changed my approach to lab analysis.",
    },
  ];

  return (
    <section
      id="blog"
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
            Blog
          </h2>
        </div>
        <p className="text-gray-400 text-lg mt-4 text-center max-w-2xl">
          Insights and reflections from my journey in Clinical Laboratory Science and research.
        </p>
      </motion.div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            className={`bg-slate-800/80 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/30 shadow-xl flex flex-col transition-all duration-300`}
            style={{ transitionDelay: `${i * 200}ms` }}
            initial={{ opacity: 0, translateY: 20 }}
            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
          >
            <h3 className="text-2xl font-semibold text-white mb-2">{post.title}</h3>
            <p className="text-cyan-300 text-sm mb-4">{post.date}</p>
            <p className="text-slate-300 flex-grow">{post.snippet}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
