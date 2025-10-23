// components/about/StatsGrid.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

interface StatsGridProps {
  stats: Stat[];
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'gradient' | 'bordered';
}

export const StatsGrid = ({ stats, columns = 4, variant = 'default' }: StatsGridProps) => {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 lg:grid-cols-4'
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-br from-teal-50 to-cyan-50 border-none';
      case 'bordered':
        return 'bg-white border-2 border-teal-100';
      default:
        return 'bg-gradient-to-br from-gray-50 to-white border border-gray-100';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className={`grid ${gridCols[columns]} gap-6 md:gap-8`}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`${getVariantStyles()} p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl mb-4">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};