"use client";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between md:px-10 p-4 px-6 bg-gray-800 text-white">
        <h1 className="text-xl font-bold "><Link href="/">ProFinder</Link> </h1>
        <ul className="  md:flex   md:space-x-20">
          <li>
          <motion.button
      whileHover={{ scale: 1.05 }} // Scale up on hover
      whileTap={{ scale: 0.95 }}   // Scale down on click
      transition={{ type: "spring", stiffness: 300 }} // Smooth spring animation
      className="px-6 py-2 animate-pulse bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <a href="#home" className="hover:text-white">
        Login Now
      </a>
    </motion.button>
          </li>
          
          
         
        </ul>
        
      </nav>
    </>
  );
}
