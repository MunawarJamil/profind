"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ServiceForm() {
    const [services, setServices] = useState([{ name: '', description: '', price: '' }]);
  
    const addService = () => {
      if (services.length < 4) {
        setServices([...services, { name: '', description: '', price: '' }]);
      }
    };
  
    return (
      <div>
        <h2 className="text-xl font-semibold text-gray-100 mb-4">Your Services (Max 4)</h2>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-4 p-4  rounded-lg"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-lg font-medium text-gray-100">Service Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-200 border border-gray-200 rounded-md text-black focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Service Name"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-100">Service Description</label>
                <textarea
                  rows={2}
                  className="mt-1 block w-full px-4 py-2 bg-gray-300 border border-gray-300 rounded-md text-black focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe your service..."
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-100">Price (Optional)</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-300 border border-gray-300 rounded-md text-black focus:ring-blue-500 focus:border-blue-500"
                  placeholder="$50"
                />
              </div>
            </div>
          </motion.div>
        ))}
        {services.length < 4 && (
          <Button
            onClick={addService}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Add Service
          </Button>
        )}
      </div>
    );
}
