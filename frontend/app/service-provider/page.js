"use client";
import { motion } from "framer-motion";
import ServiceForm from "../components/ServiceForm";
import ProfilePictureUpload from "../components/ProfilePictureUpload";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProviderProfilePage() {
  return (
    <>
      <div className="flex justify-between p-6 px-10 bg-gray-800 text-white">
        <Link href="/"> ProFind</Link>

        
      </div>
      <div className="min-h-screen bg-gradient-to-r  from-blue-500 via-purple-500 to-blue-500 text-white">
        {/* Header with Gradient Background */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-500  via-purple-500 to-blue-500 py-12 text-center"
        >
          <h1 className="text-4xl font-extrabold mb-2">
            Create Your Service Provider Profile
          </h1>
          <p className="text-lg text-gray-200">
            Showcase your skills and attract clients.
          </p>
        </motion.header>

        {/* Profile Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container mx-auto lg:w-[75%]  p-6"
        >
          <div className=" bg-gradient-to-t from-blue-700 via-blue-500 to-blue-800 p-8 rounded-xl shadow-lg">
            {/* Profile Picture Upload */}
            <ProfilePictureUpload />

            {/* Profile Form */}
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-lg font-medium text-gray-100">
                  Your Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-200 border border-gray-600 rounded-md text-black focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>

              {/* Profession */}
              <div>
                <label className="block text-lg font-medium text-gray-100">
                  Profession
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-200 border border-gray-600 rounded-md text-black focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Web Developer"
                />
              </div>

              {/* Bio */}
              <div>
                <label className="block text-lg font-medium text-gray-100">
                  Bio
                </label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full px-4 py-2 bg-gray-200 border border-gray-600 rounded-md text-black focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your skills and experience..."
                />
              </div>

              {/* Services */}
              <ServiceForm />

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <button
                 
                  className="px-6 w-full text-lg py-3 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link  href="/provider-dashboard">Save Profile</Link> 
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
