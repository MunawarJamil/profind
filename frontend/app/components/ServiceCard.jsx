"use client"
import { motion } from 'framer-motion';

export default function ServiceCard({ service }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-700 p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-semibold text-blue-500">{service.name}</h3>
      <p className="text-gray-400 mt-2">{service.description}</p>
      {service.price && (
        <p className="text-gray-400 mt-2 font-bold">{service.price}</p>
      )}
    </motion.div>
  );
}