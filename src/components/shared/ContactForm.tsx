'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SITE_CONFIG } from '@/lib/constants';
import { scrollReveal } from '@/lib/animations';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={scrollReveal} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">Start Your Journey Today</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ready to take the first step? We're here to help. Contact us today to learn more about our services.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={scrollReveal} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">Have questions or need guidance? Our dedicated team is here to support you every step of the way.</p>
            </div>

            <div className="space-y-6">
              <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 p-6 bg-primary-50 rounded-xl">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Phone</div>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="text-primary-600 hover:text-primary-700 transition-colors text-lg">{SITE_CONFIG.phone}</a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 p-6 bg-accent-50 rounded-xl">
                <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email</div>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-accent-600 hover:text-accent-700 transition-colors break-all">{SITE_CONFIG.email}</a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 p-6 bg-primary-50 rounded-xl">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Location</div>
                  <p className="text-gray-600">{SITE_CONFIG.address}</p>
                </div>
              </motion.div>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-accent-600 text-white p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-3">Available 24/7</h4>
              <p className="text-white/90">We're here for you around the clock. Whether it's day or night, our support team is ready to assist you.</p>
            </div>
          </motion.div>

          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={scrollReveal} transition={{ delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                  <Input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                  <Input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full" placeholder="Doe" />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full" placeholder="john.doe@example.com" />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full" placeholder="0400 000 000" />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full" placeholder="Tell us about your needs and how we can help..." />
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">Thank you! We'll get back to you soon.</div>
              )}

              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold text-lg py-6 rounded-xl">
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}