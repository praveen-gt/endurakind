"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Users, Target, Award, Heart, Clock } from 'lucide-react';
import { scrollReveal } from '@/lib/animations';
import Image from 'next/image';
import { AccessibilityDivider, CurvedDivider,  } from '@/components/common/SectionDividers';

export default function UpdatedAboutSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const features = [
    'Person-centered care approach',
    'Experienced and qualified staff',
    'Flexible and responsive services',
    'Community integration focus',
  ];

  const stats = [
    { icon: Heart, value: '100%', label: 'Person-Centered' },
    { icon: Users, value: '15+', label: 'Care Team' },
    { icon: Clock, value: '24/7', label: 'Available Support' },
  ];
  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden bg-white">
      {/* Accessibility Icons Divider at Top */}
      <AccessibilityDivider />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image with Parallax */}
          <motion.div 
            style={{ y }}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[680px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/home/caring-support.jpg"
                alt="Caring support"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent" />
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <stat.icon className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Decorative Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 blur-2xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full opacity-20 blur-2xl"
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div style={{ opacity }}>
            <motion.div {...scrollReveal}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-700">
                  Endurakind
                </span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mb-8"></div>
            </motion.div>

            <motion.p 
              {...scrollReveal}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 mb-6 leading-relaxed"
            >
              Endurakind is built on the foundation of compassion, respect, and empowerment. We believe that every person, regardless of ability, has the right to live independently and participate fully in their community.
            </motion.p>
            
            <motion.p 
              {...scrollReveal}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Our mission is to build bridges to independence by providing high-quality, person-centered support services that help individuals achieve their goals and live life on their own terms.
            </motion.p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* NDIS Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-50 to-amber-50 border-2 border-teal-200 rounded-full px-6 py-3"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-800 font-semibold">Quality Assured Services</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Curved Divider at Bottom */}
      <CurvedDivider color="#f9fafb" flip={true} />
    </section>
  );
}