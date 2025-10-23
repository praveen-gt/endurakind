"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Quote, Star } from 'lucide-react';
import { scrollReveal, staggerContainer, staggerItem } from '@/lib/animations';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Client Family Member',
    content: 'Endurakind has been a blessing for our family. The care and attention my brother receives is exceptional. The staff truly understand person-centered care and treat him with dignity and respect.',
    rating: 5,
    location: 'Melbourne, VIC'
  },
  {
    name: 'Michael Chen',
    role: 'NDIS Participant',
    content: 'The independence I have gained through Endurakind\'s support has been life-changing. They helped me achieve goals I never thought possible and supported me every step of the way.',
    rating: 5,
    location: 'Geelong, VIC'
  },
  {
    name: 'Emma Thompson',
    role: 'Support Coordinator',
    content: 'Working with Endurakind is always a pleasure. Their professionalism, responsiveness, and genuine care for participants sets them apart from other providers.',
    rating: 5,
    location: 'Ballarat, VIC'
  }
];

export default function ImprovedTestimonialsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div {...scrollReveal} className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            What People Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-amber-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600">
            Hear from the families and individuals whose lives we've touched through our compassionate care
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 bg-teal-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          {...scrollReveal}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-teal-50 border border-teal-200 rounded-full px-8 py-4">
            <CheckCircle2 className="w-6 h-6 text-teal-600" />
            <span className="text-gray-700 font-medium">
              Trusted by over 500 families across Victoria
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}