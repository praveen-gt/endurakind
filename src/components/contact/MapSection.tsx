'use client';

import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MapSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            Visit Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our <span className="text-teal-600">Location</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We’re proudly based in Melbourne, serving communities across Victoria.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl h-[400px] bg-gray-200 relative"
        >
          {/* Replace with actual Google Maps embed */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <MapPin className="w-16 h-16 text-teal-600 mb-4" />
            <p className="text-xl font-semibold text-gray-900">Melbourne, Victoria</p>
            <p className="text-gray-600">Serving all of Victoria</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
