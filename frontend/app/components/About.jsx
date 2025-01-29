"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-16 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        About Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-gray-600 mb-8"
      >
        Our platform connects clients with trusted service providers. Whether
        you need a professional or want to showcase your expertise, this is the
        place for you.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <Card>
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">Trusted Providers</h3>
            <p className="text-gray-600">
              Find highly-rated professionals for your needs.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">Grow Your Business</h3>
            <p className="text-gray-600">
              Showcase your skills and get hired by clients.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p className="text-gray-600">
              Our platform is designed for simplicity and convenience.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
