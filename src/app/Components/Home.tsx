"use client";
import { Linkedin, Facebook, Instagram, Globe } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col md:flex-row items-center justify-between text-white overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/video/Home.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60 -z-10 backdrop-blur-sm"></div>

      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          <TypeAnimation
            sequence={[
              "Hey, I'm Dinesh Karki.", 2000,
              "Clinical Laboratory Science Student at CQUniversity.", 2000,
              "Passionate about Research & Healthcare Innovation.", 2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-gray-200 max-w-lg"
        >
          I’m driven by curiosity, precision, and a passion for uncovering insights that improve human health.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-4"
        >
          <a href="#projects" className="bg-cyan-600 px-5 py-2 rounded-lg font-medium hover:bg-cyan-700 transition">
            View My Work
          </a>
          <a href="/Dinesh_Resume.pdf" download className="border border-white px-5 py-2 rounded-lg font-medium hover:bg-white hover:text-black transition">
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex gap-4 mt-4"
        >
          <a href="https://linkedin.com/in/dinesh-karki" target="_blank" rel="noreferrer">
            <Linkedin className="hover:text-blue-400" />
          </a>
          <a href="https://facebook.com/dinesh.karki" target="_blank" rel="noreferrer">
            <Facebook className="hover:text-blue-400" />
          </a>
          <a href="https://instagram.com/dinesh.karki" target="_blank" rel="noreferrer">
            <Instagram className="hover:text-pink-400" />
          </a>
          <a href="https://dineshkarki.com" target="_blank" rel="noreferrer">
            <Globe className="hover:text-green-400" />
          </a>
        </motion.div>
      </div>

      {/* Right Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
      >
        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full shadow-2xl border-4 border-white overflow-hidden hover:scale-105 transition-transform duration-300">
          <Image
            src="/Images/Dinesh.jpg"
            alt="Dinesh Karki"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
