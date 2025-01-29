"use client"
import Hero from "./components/Hero";
import About from "./components/About";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Home() {
  return (


    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
     <Navbar/>

      {/* Hero Section */}
    
<Hero/>
      {/* About Section */}
   <About/>

      {/* Footer */}
    <Footer/>
    </div>
  );
}
