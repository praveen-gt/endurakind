'use client';

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
            We're proudly based in Melbourne, serving communities across Victoria.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl h-[450px] bg-gray-200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402587.5471853722!2d144.7234977984562!3d-37.97210656936051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1762243552887!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Melbourne Location"
          />
        </motion.div>
      </div>
    </section>
  );
}