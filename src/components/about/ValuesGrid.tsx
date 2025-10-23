// components/about/ValuesGrid.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  stat?: string;
}

interface ValuesGridProps {
  badge?: string;
  title: string;
  highlightedWord: string;
  subtitle?: string;
  values: Value[];
  columns?: 2 | 3 | 4;
  backgroundColor?: string;
}

export const ValuesGrid = ({
  badge,
  title,
  highlightedWord,
  subtitle,
  values,
  columns = 4,
  backgroundColor = 'bg-gray-50'
}: ValuesGridProps) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <section className={`py-20 md:py-32 ${backgroundColor} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0d9488 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mx-auto mb-6"></div>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className={`grid ${gridCols[columns]} gap-6 md:gap-8`}>
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{value.description}</p>
              {value.stat && (
                <div className="flex items-center gap-2 text-teal-600">
                  <span className="text-2xl font-bold">{value.stat}</span>
                  <span className="text-sm font-semibold">Impact</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};