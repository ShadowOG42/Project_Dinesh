// components/Navbar.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";


const Navbar = () => {
const links = ["Home", "About", "Education", "Projects", "Skills", "Blog", "Contact"];


return (
<motion.nav
initial={{ y: -80, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6 }}
className="fixed top-0 left-0 w-full bg-white/60 backdrop-blur-md z-50 shadow-sm"
>
<div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
<h1 className="text-xl font-bold text-gray-800">Dinesh Karki</h1>
<ul className="hidden md:flex gap-6 text-gray-700 font-medium">
{links.map((link) => (
<li key={link}>
<ScrollLink
to={link.toLowerCase()}
smooth={true}
duration={500}
className="cursor-pointer hover:text-blue-600"
>
{link}
</ScrollLink>
</li>
))}
</ul>
</div>
</motion.nav>
);
};


export default Navbar;