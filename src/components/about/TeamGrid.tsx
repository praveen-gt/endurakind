// components/about/TeamGrid.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: {
    linkedin?: string;
    email?: string;
  };
}

interface TeamGridProps {
  badge?: string;
  title: string;
  highlightedWord: string;
  subtitle?: string;
  members: TeamMember[];
  columns?: 2 | 3 | 4;
  backgroundColor?: string;
}

export const TeamGrid = ({
  badge,
  title,
  highlightedWord,
  subtitle,
  members,
  columns = 4,
  backgroundColor = 'bg-white'
}: TeamGridProps) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

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

        <div className={`grid ${gridCols[columns]} gap-8`}>
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
            >
              {/* Image */}
              <div className="relative h-80 bg-gradient-to-br from-teal-400 to-teal-600 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                
                {/* Social links if provided */}
                {member.social && (
                  <div className="flex justify-center gap-3 mt-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-gray-100 hover:bg-teal-600 rounded-full flex items-center justify-center transition-colors group/social"
                      >
                        <svg className="w-4 h-4 text-gray-600 group-hover/social:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-9 h-9 bg-gray-100 hover:bg-teal-600 rounded-full flex items-center justify-center transition-colors group/social"
                      >
                        <svg className="w-4 h-4 text-gray-600 group-hover/social:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};