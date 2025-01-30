"use client"
import { motion } from 'framer-motion';
import ProfileOverview from '../components/ProfileOverview';
import ServiceCard from '../components/ServiceCard';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function ProviderDashboard() {
  // Mock data (replace with actual data from your backend)
  const provider = {
    name: "John Doe",
    profession: "Web Developer",
    bio: "Experienced in building modern web applications using React, Next.js, and Node.js.",
    profilePicture: "https://via.placeholder.com/150",
  };

  const services = [
    {
      name: "Web Development",
      description: "Build responsive and scalable web applications.",
      price: "$100/hour",
    },
    {
      name: "UI/UX Design",
      description: "Design user-friendly and visually appealing interfaces.",
      price: "$80/hour",
    },
  ];

  return (<>


    <div className="flex justify-between p-6 px-10 bg-gray-800 text-white">
    <Link href="/"> ProFind</Link>

    <button>LogOut</button>
  </div>
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-12 text-center"
      >
        <h1 className="text-4xl font-extrabold mb-2">Welcome, {provider.name}!</h1>
        <p className="text-lg text-gray-200">Manage your profile and services here.</p>
      </motion.header>

      {/* Dashboard Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto p-6"
      >
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          {/* Profile Overview */}
          <ProfileOverview provider={provider} />

          {/* Listed Services */}
          <h2 className="text-2xl font-semibold text-gray-400 mb-6">Your Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>

          {/* Actions */}
          <div className="mt-8 flex space-x-4">
            <Button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white">
              Edit Profile
            </Button>
            <Button className="px-6 py-3 bg-white text-blue-600 hover:bg-gray-200">
              Add Service
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
    </>);
}