"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, AlertCircle } from 'lucide-react';
import { scrollReveal } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SITE_CONFIG } from '@/lib/constants';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div {...scrollReveal} className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Ready to start your journey with Endurakind? We're here to help and answer any questions you may have.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Contact Information - 2 columns */}
          <motion.div
            {...scrollReveal}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of these channels, and our friendly team will get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="group p-5 bg-gradient-to-br from-teal-50 to-white rounded-xl border border-teal-100 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <a 
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-teal-600 hover:text-teal-700 font-medium text-lg"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                    <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Mon-Fri: 9AM - 5PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-5 bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-100 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <a 
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-amber-600 hover:text-amber-700 font-medium break-all"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="group p-5 bg-gradient-to-br from-teal-50 to-white rounded-xl border border-teal-100 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                    <p className="text-gray-600">{SITE_CONFIG.address}</p>
                    <p className="text-sm text-gray-500 mt-1">Servicing Victoria wide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact Box */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-1 flex items-center gap-2">
                    24/7 Emergency Support
                  </h4>
                  <p className="text-sm text-red-700 mb-2">
                    For urgent matters outside business hours:
                  </p>
                  <a 
                    href="tel:+61493353976" 
                    className="text-red-800 font-bold text-lg hover:text-red-900 transition-colors"
                  >
                    +61493353976
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - 3 columns */}
          <motion.div
            {...scrollReveal}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 lg:p-10 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Send us a Message
              </h3>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="h-12 bg-white border-gray-300 focus:border-teal-600 focus:ring-teal-600"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0400 000 000"
                      className="h-12 bg-white border-gray-300 focus:border-teal-600 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="h-12 bg-white border-gray-300 focus:border-teal-600 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs and how we can help..."
                    rows={6}
                    className="bg-white border-gray-300 focus:border-teal-600 focus:ring-teal-600 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white h-14 text-lg rounded-xl group shadow-lg hover:shadow-xl transition-all"
                >
                  <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We respect your privacy. Your information is secure and will never be shared.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}