"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  ArrowRight,
  Heart,
  Award,
  Shield,
  Clock
} from 'lucide-react';
import { SITE_CONFIG, NAVIGATION_LINKS, SERVICES, SOCIAL_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import NewsletterSignup from '../sections/NewsletterSignup';

export default function EnhancedFooter() {
  const [email, setEmail] = React.useState('');

const handleNewsletterSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message || 'Thanks for subscribing!');
      setEmail('');
    } else {
      alert(data.error || 'Failed to subscribe.');
    }
  } catch (err) {
    console.error('Newsletter submit failed:', err);
    alert('Something went wrong. Please try again later.');
  }
};


  const quickStats = [
    { icon: Heart, label: 'Compassionate Care', color: 'text-pink-400' },
    { icon: Shield, label: 'Quality Service', color: 'text-blue-400' },
    { icon: Clock, label: '24/7 Support', color: 'text-amber-400' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
        
        {/* Animated Dots Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>
      </div>

      {/* Top Section with Newsletter */}
      <div className="relative z-10 border-b border-gray-800">
        <div className="container-custom py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Newsletter */}
            {/* <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-2">
                <Heart className="w-7 h-7 md:w-8 md:h-8 text-pink-500 fill-pink-500" />
                Stay Connected
              </h3>
              <p className="text-gray-400 mb-6 text-sm md:text-base">
                Subscribe to our newsletter for updates, tips, and stories from our community.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 bg-white/5 border-white/10 focus:border-teal-500 text-white placeholder:text-gray-500"
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 px-6 h-12 w-full sm:w-auto"
                >
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </motion.div> */}

              <NewsletterSignup /> 

            {/* Right - Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-3 gap-3 md:gap-4"
            >
              {quickStats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center border border-white/10 hover:border-white/20 transition-all"
                >
                  <stat.icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.color} mx-auto mb-2`} />
                  <p className="text-xs md:text-sm text-gray-300 font-medium leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info - Takes 2 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Image 
                  src={'/wheel-icon-white.png'} 
                  alt="Endurakind Icon" 
                  width={50} 
                  height={50} 
                  className="object-contain" 
                />
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-heading">Endurakind</div>
                <div className="text-xs text-gray-400">Building Bridges to Independence</div>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Endurakind provides compassionate, person-centered disability support services across Victoria. We're committed to empowering individuals to live independently and achieve their goals.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
                { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
                { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
                { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-700 transition-all border border-white/10 hover:border-white/20"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4 text-white">Our Services</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={service.href} 
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`tel:${SITE_CONFIG.phone}`} 
                  className="flex items-start gap-3 text-gray-400 hover:text-teal-400 transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Call Us</p>
                    <p className="font-medium text-white">{SITE_CONFIG.phone}</p>
                  </div>
                </a>
              </li>
              
              <li>
                <a 
                  href={`mailto:${SITE_CONFIG.email}`} 
                  className="flex items-start gap-3 text-gray-400 hover:text-teal-400 transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email Us</p>
                    <p className="font-medium text-white text-sm break-all">{SITE_CONFIG.email}</p>
                  </div>
                </a>
              </li>
              
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Location</p>
                    <p className="font-medium text-white text-sm">{SITE_CONFIG.address}</p>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-400"
            >
              <p className="flex items-center gap-1">
                &copy; {new Date().getFullYear()} Endurakind. Made with 
                <Heart className="w-4 h-4 text-red-500 fill-red-500 inline mx-1" /> 
                in Australia
              </p>
              <span className="hidden sm:inline text-gray-700">|</span>
              <span className="text-gray-400">
                Building Bridges to Independence
              </span>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-6 text-sm"
            >
              <Link 
                href="/privacy-policy" 
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-conditions" 
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link 
                href="/accessibility" 
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Accessibility
              </Link>
              <Link 
                href="/sitemap" 
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Sitemap
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full flex items-center justify-center hover:from-teal-700 hover:to-teal-800 transition-all shadow-lg hover:shadow-xl group"
        aria-label="Back to top"
      >
        <ArrowRight className="w-5 h-5 -rotate-90 group-hover:-translate-y-1 transition-transform" />
      </motion.button>
    </footer>
  );
}