"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, HeartHandshake, Home, Palmtree, ClipboardList, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
// import { InclusiveSymbolsDivider } from '../common/SectionDividers';

const services = [
  {
    id: 'daily-activities',
    icon: Users,
    title: 'Daily Activities',
    description: 'Personalized support for daily living tasks, helping you maintain independence.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=400&fit=crop',
    color: 'from-teal-500 to-teal-600',
    features: ['Personal care', 'Meal prep', 'Shopping', 'Life skills']
  },
  {
    id: 'community-participation',
    icon: HeartHandshake,
    title: 'Community Participation',
    description: 'Engage with your community and build meaningful relationships.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
    color: 'from-amber-400 to-orange-500',
    features: ['Social activities', 'Group events', 'Skill building', 'Recreation']
  },
  {
    id: 'independent-living',
    icon: Home,
    title: 'Independent Living',
    description: 'Live independently with tailored 24/7 support in your own home.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    color: 'from-teal-600 to-cyan-600',
    features: ['24/7 support', 'Care plans', 'Skills dev', 'Home setup']
  },
  {
    id: 'respite-care',
    icon: Palmtree,
    title: 'Respite Care',
    description: 'Quality short-term care in a comfortable environment.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop',
    color: 'from-yellow-400 to-amber-500',
    features: ['Short stays', 'Activities', 'Expert care', 'Flexible']
  },
  {
    id: 'coordination',
    icon: ClipboardList,
    title: 'Support Coordination',
    description: 'Navigate your NDIS plan with expert guidance.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    color: 'from-teal-700 to-teal-800',
    features: ['NDIS plans', 'Providers', 'Budgets', 'Goals']
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">


      {/* Parallax Background Pattern */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(13, 148, 136) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </motion.div>

      {/* Wavy Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#f9fafb" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-teal-100 to-amber-100 rounded-full p-3">
              <Sparkles className="w-8 h-8 text-teal-600" />
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500">
              Services
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Comprehensive disability support services tailored to your individual needs and aspirations
          </p>
        </motion.div>

        {/* Services Grid with Stagger */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80 group-hover:opacity-70 transition-opacity`} />
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <Link href={`/services/${service.id}`}>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between group/btn hover:bg-teal-50 hover:text-teal-700 hover:cursor-pointer"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-400 rounded-3xl transition-colors pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Can't find what you're looking for?</p>
          <Link href="/services" passHref>
          <Button size="lg" className="hover:cursor-pointer bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl">
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          </Link>
        </motion.div>
      </div>

      {/* Wavy Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}