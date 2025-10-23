// components/about/Timeline.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  badge?: string;
  title: string;
  highlightedWord: string;
  subtitle?: string;
  milestones: Milestone[];
  backgroundColor?: string;
}

export const Timeline = ({
  badge,
  title,
  highlightedWord,
  subtitle,
  milestones,
  backgroundColor = 'bg-white'
}: TimelineProps) => {
  return (
    <section className={`py-20 md:py-32 ${backgroundColor}`}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {badge && (
            <div className="inline-block mb-4">
              <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
                {badge}
              </span>
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {title} <span className="text-teal-600">{highlightedWord}</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mx-auto mb-6"></div>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 border-l-2 border-teal-200 last:pb-0"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                className="absolute left-[-9px] top-0 w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-lg"
              />
              
              {/* Content card */}
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="text-3xl font-bold text-teal-600 mb-2">{milestone.year}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};