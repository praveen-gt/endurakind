"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Users, Target, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Get In Touch',
    description: 'Contact us via phone, email, or our online form. We\'ll arrange a convenient time to chat.',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: Users,
    number: '02',
    title: 'Initial Consultation',
    description: 'We meet with you to understand your needs, goals, and preferences in detail.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Target,
    number: '03',
    title: 'Personalized Plan',
    description: 'We create a tailored support plan designed specifically for your unique situation.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Start Your Journey',
    description: 'Begin receiving support and start achieving your goals with our dedicated team.',
    color: 'from-amber-500 to-orange-500'
  }
];

export function ProcessSection() {
  return (
    // <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
    <section className="relative py-20 md:py-32 bg-gray-50  overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            How It{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500">
              Works
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started with Endurakind is simple. Follow these four easy steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-200 via-blue-200 via-purple-200 to-amber-200" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative z-10">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg transform rotate-12`}>
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow for larger screens */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="hidden lg:block absolute top-24 -right-4 z-20"
                >
                  <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}