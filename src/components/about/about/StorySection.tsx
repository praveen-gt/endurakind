// components/about/StorySection.tsx
'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface Badge {
  text: string;
}

interface StorySectionProps {
  badge?: string;
  title: string;
  highlightedWord: string;
  paragraphs: string[];
  image: string;
  badges?: Badge[];
  backgroundColor?: string;
}

export const StorySection = ({
  badge,
  title,
  highlightedWord,
  paragraphs,
  image,
  badges = [],
  backgroundColor = 'bg-gray-50'
}: StorySectionProps) => {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={parallaxRef} className={`py-20 md:py-32 ${backgroundColor} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0d9488 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {badge && (
              <div className="inline-block mb-4">
                <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
                  {badge}
                </span>
              </div>
            )}
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {title} <span className="text-teal-600">{highlightedWord}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mb-8"></div>
            
            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {badges.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-4">
                {badges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="font-semibold text-gray-900">{badge.text}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            style={{ y }}
            className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              quality={90}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};