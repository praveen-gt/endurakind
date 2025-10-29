'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Phone, Calendar, Shield, 
  Users, Clock, Target, Heart, Sparkles, Mail, User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from './ContactForm';

interface ServiceFeature {
  title: string;
  description: string;
  icon?: any;
}

interface ServiceBenefit {
  title: string;
  description: string;
}

interface ServicePageProps {
  service: {
    id: string;
    title: string;
    shortTitle: string;
    description: string;
    longDescription?: string;
    features: string[];
    detailedFeatures?: ServiceFeature[];
    benefits?: ServiceBenefit[];
    process?: {
      step: number;
      title: string;
      description: string;
    }[];
    image?: string;
    heroImage?: string;
    color?: string;
  };
}

const ServicePage = ({ service }: ServicePageProps) => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: contentScroll } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"]
  });

  const heroY = useTransform(heroScroll, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0.3]);

  // Updated color scheme to match global.css
  const colorScheme = {
    primary: 'rgb(9, 119, 142)', // theme-green from global.css
    accent: 'rgb(227, 168, 88)', // theme-orange from global.css
    gradient: 'from-[#09778e] to-[#016938]', // theme-green to theme-lightgreen
    lightBg: 'bg-orange-50',
    accentBg: 'bg-[#e3a858]',
    accentText: 'text-[#e3a858]',
    primaryText: 'text-[#09778e]',
    primaryBg: 'bg-[#09778e]',
  };

  // Default benefits for new startup
  const benefits = service.benefits || [
    {
      title: 'Personalized Approach',
      description: 'Every individual is unique, and so are our support plans. We work closely with you to understand your needs and goals.'
    },
    {
      title: 'Experienced Team',
      description: 'Our qualified support workers bring compassion, professionalism, and dedication to every interaction.'
    },
    {
      title: 'Flexible Support',
      description: 'Services that adapt to your schedule and changing needs, providing the right support at the right time.'
    },
    {
      title: 'Quality Focused',
      description: 'We are committed to maintaining the highest standards of care while working towards NDIS registration.'
    }
  ];

  // Service features in card format
  const serviceCards = [
    {
      icon: User,
      title: 'Respecting Individual Preferences',
      description: 'We honor your choices and preferences in all aspects of our service delivery.'
    },
    {
      icon: Users,
      title: 'Dedicated Tailored Support',
      description: 'Personalized care plans based on your unique needs and aspirations.'
    },
    {
      icon: Target,
      title: 'Nutritious Daily Meals',
      description: 'Support with meal planning and preparation to meet your dietary needs.'
    },
    {
      icon: Heart,
      title: 'Mobility and Accessibility Support',
      description: 'Assistance to help you navigate your community with confidence.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Modern Trendy Design */}
      {/* <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white"> */}
        {/* Animated Background Gradient Orbs */}
        {/* <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#09778e]/30 to-[#016938]/20 blur-3xl"
          /> */}


<section
  ref={heroRef}
  className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white"
>
  {/* Background Image Layer */}
  <div className="absolute inset-0">
    <Image
      src={service.heroImage || '/images/hero/disability1.jpg'}
      alt={service.title}
      fill
      priority
      quality={90}
      className="object-cover object-center"
    />
    <div className="absolute inset-0 bg-white/85" /> {/* Optional dark overlay for contrast */}

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#09778e]/20 to-[#016938]/30 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#09778e]/10 blur-3xl"
          />
        </div>

        {/* Floating Decorative Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 right-20 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#09778e]/20 to-[#016938]/10 backdrop-blur-sm border border-[#09778e]/20 hidden lg:block"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-32 left-20 w-16 h-16 rounded-full bg-gradient-to-br from-[#016938]/20 to-[#09778e]/10 backdrop-blur-sm border border-[#09778e]/20 hidden lg:block"
        />

        <div className="container-custom relative z-10 py-20">
          <div className=" mx-auto">
            {/* Breadcrumb - Minimal & Modern */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-sm text-gray-500 mb-12"
            >
              <Link href="/" className="hover:text-[#09778e] transition-colors">Home</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/services" className="hover:text-[#09778e] transition-colors">Services</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[#09778e] font-medium">{service.shortTitle}</span>
            </motion.div>

            {/* Main Content */}
            <div className="">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#09778e]/10 backdrop-blur-sm border border-[#09778e]/20 mb-8"
              >
                <Sparkles className="w-4 h-4 text-[#09778e]" />
                <span className="text-sm font-semibold text-[#09778e]">Premium Service</span>
              </motion.div>

              {/* Main Heading - Large & Bold */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-56l font-bold mb-8 leading-tight"
              >
                <span className="text-gray-900">{service.title.split(' ').slice(0, -2).join(' ')}</span>
                <br />
                <span className="bg-gradient-to-r from-[#09778e] to-[#016938] bg-clip-text text-transparent">
                  {service.title.split(' ').slice(-2).join(' ')}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl"
              >
                {service.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 "
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-[#09778e] to-[#016938] hover:from-[#07687d] hover:to-[#015030] text-white px-10 py-7 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all group"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                
                {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#09778e] text-[#09778e] hover:bg-[#09778e]/5 px-10 py-7 text-lg font-semibold rounded-2xl backdrop-blur-sm bg-white/50"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    +61493353976
                  </Button>
                </motion.div> */}
              </motion.div>

            </div>
          </div>
        </div>

      </section>

      {/* Main Content Section */}
      <section ref={contentRef} className="pt-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl z-10">
                <Image
                  src={`/images/hero/disability2.jpg`}
                  alt={service.title}
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-lg z-0" />
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Enhancing Everyday Living with {service.shortTitle}
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.longDescription || `At Endurakind, we understand that maintaining independence while receiving support is essential for your quality of life. Our ${service.shortTitle} service is designed to help you achieve your everyday goals with dignity and respect. We work alongside you to ensure that you can continue living life on your terms.`}
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  Our approach is centered around your individual needs and preferences. We believe that everyone deserves compassionate, professional support that enhances their independence and wellbeing. Whether you need assistance with personal care, household tasks, or community participation, our experienced team is here to help.
                </p>
              </div>

              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-[#09778e] text-[#09778e] hover:bg-[#09778e]/10 px-6 py-6 text-base rounded-md"
              >
                MORE INFORMATION
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          {/* Service Cards Grid - Light Green Background Section - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-gradient-to-br from-[#09778e]/10 to-[#016938]/5 py-16"
          >
            <div className="container-custom px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {serviceCards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="mb-4 flex justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[#09778e]/20">
                        <card.icon className="w-8 h-8 text-[#09778e]" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Care Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={`/images/hero/disability1.jpg`}
                  alt="Personal Care"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Personal Care with Dignity
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We approach all personal care with empathy and sensitivity. We assist with activities that you may need support with, such as showering, dressing, and grooming—always ensuring that your comfort and preferences are prioritized. Whether it's grooming, dressing, or managing your personal hygiene, we are here to help with dignity.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Bathing & Grooming:</h3>
                  <p className="text-gray-700">Respectful assistance to residents with their bathing and grooming routines.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Dressing Aids:</h3>
                  <p className="text-gray-700">In choosing and wearing clothes for the day.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Meal Preparation:</h3>
                  <p className="text-gray-700">Help them select preferred meals including all cooking for them.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Medication Reminders:</h3>
                  <p className="text-gray-700">Ensuring you take the right medication at the right time.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Household Management Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Efficient Household Management
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                A well-maintained home has a critical impact of your life. Our team assists with daily household tasks, ensuring your living space is safe, organized, and welcoming.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#09778e] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Cleaning & Tidying:</span>
                    <span className="text-gray-700"> Keeping your home clean and clutter-free.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#09778e] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Laundry:</span>
                    <span className="text-gray-700"> Washing, drying, and ironing clothes to your preferences.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#09778e] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Shopping Assistance:</span>
                    <span className="text-gray-700"> Help with grocery shopping and managing supplies.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#09778e] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Transport Assistance:</span>
                    <span className="text-gray-700"> Support with transportation needs.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-6 text-base rounded-md"
                >
                  MORE INFORMATION
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl z-1">
                <Image
                  src={`/images/hero/disability3.jpg`}
                  alt="Household Management"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-lg z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tailored Support Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={`/images/hero/disability2.jpg`}
                  alt="Tailored Support"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Tailored Support Plans
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We recognize that no two people are the same, and neither are their needs. Our support is flexible and designed around your lifestyle, ensuring that you receive the right assistance at the right time.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Customized Schedules:</h3>
                  <p className="text-gray-700">Support that fits seamlessly into your day.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Goal-Driven Services:</h3>
                  <p className="text-gray-700">Surely aline of our care and type of support.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Consistent Caregivers:</h3>
                  <p className="text-gray-700">Building a lasting relationship with familiar faces.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Split Design */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#09778e]/5" />
        
        {/* Decorative Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#09778e]/20 blur-3xl"
        />

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#09778e]/10 backdrop-blur-sm border border-[#09778e]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#09778e]" />
              <span className="text-sm font-semibold text-[#09778e]">Let's Connect</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to answer your questions and help you begin your journey
            </p>
          </motion.div>

          {/* Split Layout */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Get in Touch
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you have questions or want to learn more about our services, we're here to help. Reach out today!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone Card */}
                <motion.a
                  href="tel:+61493353976"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#09778e] hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#09778e] to-[#016938] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-500 mb-1">Call Us Directly</div>
                    <div className="text-xl font-bold text-gray-900 group-hover:text-[#09778e] transition-colors">
                      +61493353976
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#09778e] group-hover:translate-x-1 transition-all" />
                </motion.a>

                {/* Email Card */}
                <motion.a
                  href="mailto:info@endurakind.com.au"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#09778e] hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#09778e] to-[#016938] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-500 mb-1">Email Us</div>
                    <div className="text-base font-bold text-gray-900 group-hover:text-[#09778e] transition-colors break-all">
                      info@endurakind.com.au
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#09778e] group-hover:translate-x-1 transition-all" />
                </motion.a>

                {/* Location Card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#09778e] hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#09778e] to-[#016938] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-500 mb-1">Visit Us</div>
                    <div className="text-base font-bold text-gray-900">
                      Melbourne, VIC
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Operating Hours */}
              <div className="bg-gradient-to-br from-[#09778e]/5 to-[#016938]/5 rounded-2xl p-6 border border-[#09778e]/10">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-[#09778e]" />
                  <h4 className="font-bold text-gray-900">Available Support</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We're here to help you 24/7. Contact us anytime, and we'll get back to you as soon as possible.
                </p>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
          <ContactForm />
          </div>
        </div>
      </section>

      {/* Start Your Journey Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#09778e] to-[#016938]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8"
          >
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                Start Your Journey with Us
              </h2>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Explore our range of supportive services tailored to meet your everyday needs. Join us today as we help you achieve your personal goals, creating the independence, wellbeing and quality of life you deserve.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button 
                size="lg"
                className="bg-white hover:bg-gray-100 text-[#09778e] px-8 py-6 text-base font-semibold rounded-lg shadow-lg transition-all hover:shadow-xl whitespace-nowrap"
              >
                CONTACT NOW
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;