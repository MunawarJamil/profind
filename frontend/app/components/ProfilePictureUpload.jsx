"use client"
import { motion } from 'framer-motion';

export default function ProfilePictureUpload() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 text-center"
    >
      <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
        <span className="text-gray-900">Upload Photo</span>
      </div>
      <input type="file" className="hidden" />
    </motion.div>
  );
}