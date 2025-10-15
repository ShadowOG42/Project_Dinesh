"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
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
          <Mail className="w-10 h-10 text-cyan-400" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text text-center">
            Contact Me
          </h2>
        </div>
        <p className="text-gray-400 text-lg mt-4 text-center max-w-2xl">
          I&apos;d love to hear from you! Reach out for collaboration, questions, or just to say hi.
        </p>

      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-xl p-8 max-w-lg w-full space-y-4 hover:shadow-2xl transition-all duration-300"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-slate-900/50 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-slate-900/50 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-slate-900/50 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition"
        >
          Send Message
        </button>
      </motion.form>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-8 flex flex-col items-center text-gray-300 space-y-2 text-center"
      >
        <div className="flex items-center space-x-2">
          <MapPin /> <span>CQUniversity, Australia</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail /> <span>dinesh.karki@example.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone /> <span>+61 123 456 789</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
