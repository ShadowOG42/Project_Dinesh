"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("⚠️ Please fill in all required fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus("⚠️ Please enter a valid email address.");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setFormStatus("⏳ Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setFormStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus(`❌ Failed to send: ${data.error || "Unknown error"}`);
      }
    } catch (err: unknown) {
      let errorMsg = "❌ Something went wrong. Please try again.";
      if (err instanceof Error) errorMsg = `❌ Error: ${err.message}`;
      setFormStatus(errorMsg);
      console.error("Contact form error:", err);
    } finally {
      setLoading(false);
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
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-slate-900/50 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
          disabled={loading}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-slate-900/50 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
          disabled={loading}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-slate-900/50 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
          disabled={loading}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition flex justify-center items-center"
          disabled={loading}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          )}
          {loading ? "Sending..." : "Send Message"}
        </button>

        {formStatus && (
          <p className="text-center text-cyan-300 font-medium mt-2">{formStatus}</p>
        )}
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
