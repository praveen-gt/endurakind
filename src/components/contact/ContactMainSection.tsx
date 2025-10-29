'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MessageSquare, User, Calendar, Send } from 'lucide-react';
import * as z from 'zod';
import ContactForm from '../sections/ContactForm';

const reasons = [
  { icon: MessageSquare, title: 'General Inquiry', description: 'Learn more about our services' },
  { icon: User, title: 'New Client', description: 'Start your journey with us' },
  { icon: Calendar, title: 'Book Consultation', description: 'Schedule a free consultation' },
];

const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  email: z.string().email('Please enter a valid email address').toLowerCase().trim(),
  phone: z.string()
    .min(7, 'Please enter a valid phone number')
    .regex(/^\+?[0-9\s\-().]{7,20}$/, 'Please enter a valid phone number'),
  subject: z.string()
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject must be less than 100 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
});

export default function ContactMainSection() {
 
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                Why Contact Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                We're Here to <span className="text-teal-600">Help</span>
              </h2>
              <p className="text-gray-600">
                Whether you're looking for information about our services, want to schedule a consultation,
                or have a question, our friendly team is ready to assist you.
              </p>
            </div>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{reason.title}</h3>
                    <p className="text-sm text-gray-600">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-6 rounded-2xl text-white">
              <h3 className="font-bold text-xl mb-4">Quick Response</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">Average response time: 2 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">24/7 emergency support available</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">Free initial consultation</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
