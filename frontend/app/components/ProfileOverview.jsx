"use client";
import { motion } from "framer-motion";

export default function ProfileOverview({ provider }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={provider.profilePicture}
            alt=" "
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">{provider.name}</h2>
          <p className="text-gray-400">{provider.profession}</p>
          <p className="text-gray-400 mt-2">{provider.bio}</p>
        </div>
      </div>
    </motion.div>
  );
}
