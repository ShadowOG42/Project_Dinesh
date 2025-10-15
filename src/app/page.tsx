"use client";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Blog from "./Components/Blog";
import Contact from "./Components/Contacts";
import Footer from "./Components/Footer";


export default function Home() {
  return (
    <div className="font-[Montserrat] scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Education Section */}
      <Education />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Blog Section */}
      <Blog />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
