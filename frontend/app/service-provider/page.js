"use client";
import { motion } from "framer-motion";
import ProfilePictureUpload from "../components/ProfilePictureUpload";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function ProviderProfilePage() {
  const router = useRouter();
  const [personName, setPersonName] = useState("");
  const [profession, setProfession] = useState("");
  const [bio, setBio] = useState("");

  const [serviceName, setServiceName] = useState("");
  const [serviceDiscription, setServiceDiscription] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");

  // Handle form submission
  const handleForm = async (event) => {
    event.preventDefault();

    const profileData = {
      personName,
      profession,
      bio,
      serviceName,
      serviceDiscription,
      contact,
      address,
      location,
    };

    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/services/addservice",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(profileData),
        }
      );

      const data = await response.json();
      if (data) {
        router.push("/provider-dashboard");
      }
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
    console.log(
      personName,
      profession,
      bio,
      serviceName,
      serviceDiscription,
      contact,
      address,
      location
    );
  };

  return (
    <>
      <div className="flex justify-between p-6 px-10 bg-gray-800 text-white">
        <Link href="/">ProFind</Link>
      </div>
      <div className="min-h-screen bg-gradient-to-r from-gray-600 via-blue-500 to-gray-600 text-white">
        {/* Header with Gradient Background */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 py-12 text-center"
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
          className="container mx-auto lg:w-[75%] p-6"
        >
          <form
            onSubmit={handleForm}
            className="bg-gradient-to-t from-blue-700 via-blue-500 to-blue-800 p-8 rounded-xl shadow-lg"
          >
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
                  onChange={(e) => setPersonName(e.target.value)}
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
                  onChange={(e) => setProfession(e.target.value)}
                />
              </div>

              {/* Bio */}
              <div>
                <label className="block text-lg font-medium text-gray-100">
                  Bio
                </label>
                <textarea
                  rows={4}
                  onChange={(e) => setBio(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 bg-gray-200 border border-gray-600 rounded-md text-black focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your skills and experience..."
                />
              </div>

              {/* Services */}
              <div>
                <h2 className="text-xl font-semibold text-gray-100 mb-4">
                  Your Services
                  {/* (Max 4) */}
                </h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mb-4 p-4 rounded-lg"
                >
                  <div className="space-y-4">
                    {/* Service Name */}
                    <div>
                      <label className="block text-lg font-medium text-gray-100">
                        Service Name
                      </label>
                      <input
                        name="serviceName"
                        type="text"
                        onChange={(e) => setServiceName(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 bg-gray-200 border border-gray-200 rounded-md text-black focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Service Name"
                      />
                    </div>

                    {/* Service Description */}
                    <div>
                      <label className="block text-lg font-medium text-gray-100">
                        Service Description
                      </label>
                      <textarea
                        rows={2}
                        onChange={(e) => setServiceDiscription(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 bg-gray-300 border border-gray-300 rounded-md text-black focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Describe your service..."
                      />
                    </div>

                    {/* Price */}
                    <div>
                      <label className="block text-lg font-medium text-gray-100">
                        Contact
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setContact(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 bg-gray-300 border border-gray-300 rounded-md text-black focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your contact info"
                      />
                    </div>

                    <div>
                      <label className="block text-lg font-medium text-gray-100">
                        Address
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setAddress(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 bg-gray-300 border border-gray-300 rounded-md text-black focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Yuor current address"
                      />
                    </div>

                    <div>
                      <label className="block text-lg font-medium text-gray-100">
                        Locatio via map
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setLocation(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 bg-gray-300 border border-gray-300 rounded-md text-black focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Add map location"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* {services.length < 4 && (
                  <Button
                    onClick={addService}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Add Service
                  </Button>
                )} */}
              </div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <button
                  type="submit"
                  className="px-6 w-full text-lg py-3 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Save Profile
                </button>
              </motion.div>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
}
