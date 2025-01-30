"use client";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Hero() {
  return (
    <header
      id="home"
      className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-20 px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold mb-4"
      >
        Find or Offer Services Effortlessly
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-lg md:text-xl mb-6"
      >
        Whether you're looking for a service or offering one, we've got you
        covered.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-wrap justify-center space-x-4"
      >
        <Button className="px-6 py-3 bg-white text-blue-500 hover:bg-gray-200">
          Hire a Service Provider
        </Button>
        <Button className="px-6 py-3 bg-blue-600 hover:bg-blue-700">
          <Link href="/service-provider"> Offer Your Service </Link>
        </Button>
      </motion.div>
    </header>
  );
}
