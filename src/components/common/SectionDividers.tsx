// src/components/common/SectionDividers.tsx
"use client"

import React from 'react';
import { motion } from 'framer-motion';

// Wave Divider
export function WaveDivider({ color = "#ffffff", flip = false }) {
  return (
    <div className={`absolute ${flip ? 'bottom-0 rotate-180' : 'top-0'} left-0 w-full overflow-hidden leading-none`}>
      <svg className="relative block w-full h-20 md:h-28" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={color} />
      </svg>
    </div>
  );
}

// Curved Divider
export function CurvedDivider({ color = "#ffffff", flip = false }) {
  return (
    <div className={`absolute ${flip ? 'bottom-0 rotate-180' : 'top-0'} left-0 w-full overflow-hidden leading-none`}>
      <svg className="relative block w-full h-16 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" fill={color} />
      </svg>
    </div>
  );
}


export function AccessibilityDivider({ flip = false }) {
  return (
    <div
      className={`absolute ${
        flip ? "bottom-0" : "top-0"
      } left-0 w-full h-24 overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50 via-white to-amber-50 opacity-60" />
      <div className="absolute inset-0 flex items-center justify-around px-8 opacity-80">
        {/* ♿ Wheelchair Symbol */}
        <motion.img
          src="/images/icons/wheelchair-symbol.png"
          alt="Wheelchair Symbol"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 md:w-12 md:h-12 object-contain"
        />

        {/* 💖 Heart Hands */}
        <motion.img
          src="/images/icons/heart-hand.png"
          alt="Heart Hands Symbol"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 md:w-12 md:h-12 object-contain"
        />

        {/* 🧑‍🦽 Accessibility Symbol */}
        <motion.img
          src="/images/icons/accessibility-symbol.png"
          alt="Accessibility Symbol"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 md:w-12 md:h-12 object-contain"
        />

        {/* 🤝 Support Hands */}
        <motion.img
          src="/images/icons/support-hands.png"
          alt="Support Hands Symbol"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 md:w-12 md:h-12 object-contain"
        />

        {/* 🌈 Inclusive Circle */}
        <motion.img
          src="/images/icons/inclusive-circle.png"
          alt="Inclusive Circle Symbol"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 md:w-12 md:h-12 object-contain"
        />
      </div>
    </div>
  );
}



// Diagonal Split Divider
export function DiagonalDivider({ color = "#ffffff", flip = false, angle = "right" }) {
  return (
    <div className={`absolute ${flip ? 'bottom-0' : 'top-0'} left-0 w-full overflow-hidden leading-none`}>
      <svg className="relative block w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <polygon 
          points={angle === "right" ? "0,0 1200,120 1200,0" : "0,120 1200,0 0,0"} 
          fill={color} 
        />
      </svg>
    </div>
  );
}

// Dots Pattern Divider
export function DotsDivider({ flip = false }) {
  return (
    <div className={`absolute ${flip ? 'bottom-0' : 'top-0'} left-0 w-full h-20 overflow-hidden`}>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, #0d9488 2px, transparent 2px)',
        backgroundSize: '40px 40px'
      }} />
    </div>
  );
}

// Inclusive Symbols Divider (Hands, Hearts, People)
export function InclusiveSymbolsDivider({ flip = false }) {
  return (
    <div className={`absolute ${flip ? 'bottom-0' : 'top-0'} left-0 w-full h-32 overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-teal-50/30 to-white/0" />
      <div className="absolute inset-0 flex items-center justify-around px-4">
        {/* Holding Hands */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
        >
          <svg className="w-10 h-10 text-teal-500 opacity-30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16,8C16,6.9 16.9,6 18,6S20,6.9 20,8 19.1,10 18,10 16,9.1 16,8M14,17H10V9A3,3 0 0,1 7,6A3,3 0 0,1 10,3H14A3,3 0 0,1 17,6A3,3 0 0,1 14,9V17M6,8C6,6.9 6.9,6 8,6S10,6.9 10,8 9.1,10 8,10 6,9.1 6,8Z"/>
          </svg>
        </motion.div>

        {/* Support Group */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        >
          <svg className="w-10 h-10 text-amber-500 opacity-30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
        </motion.div>

        {/* Care Heart */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <svg className="w-10 h-10 text-pink-500 opacity-30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
          </svg>
        </motion.div>

        {/* Accessibility */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
        >
          <svg className="w-10 h-10 text-blue-500 opacity-30" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="4" r="2"/>
            <path d="M19,13v-2c-1.54,0.02-3.09-0.75-4.07-1.83l-1.29-1.43c-0.17-0.19-0.38-0.34-0.61-0.45c-0.01,0-0.01-0.01-0.02-0.01 H13c-0.35-0.2-0.75-0.3-1.19-0.26C10.76,7.11,10,8.04,10,9.09V15c0,1.1,0.9,2,2,2h5v5h2v-5.5c0-1.1-0.9-2-2-2h-3v-3.45 c0.95,0.62,2.09,0.95,3.29,0.95H19z"/>
          </svg>
        </motion.div>

        {/* Unity Circle */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: 2 }}
        >
          <svg className="w-10 h-10 text-teal-600 opacity-30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17V16H9V14H11V13H12V14H14V16H12V17H11M15,10V9H13V11H15V10M11,10V9H9V11H11V10M12,7.5A0.5,0.5 0 0,1 12.5,8A0.5,0.5 0 0,1 12,8.5A0.5,0.5 0 0,1 11.5,8A0.5,0.5 0 0,1 12,7.5Z"/>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

// Geometric Pattern Divider
export function GeometricDivider({ flip = false }) {
  return (
    <div className={`absolute ${flip ? 'bottom-0 rotate-180' : 'top-0'} left-0 w-full overflow-hidden leading-none`}>
      <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:"rgb(13, 148, 136)", stopOpacity:0.3}} />
            <stop offset="50%" style={{stopColor:"rgb(227, 168, 88)", stopOpacity:0.3}} />
            <stop offset="100%" style={{stopColor:"rgb(13, 148, 136)", stopOpacity:0.3}} />
          </linearGradient>
        </defs>
        <path d="M0,0 L50,50 L100,0 L150,50 L200,0 L250,50 L300,0 L350,50 L400,0 L450,50 L500,0 L550,50 L600,0 L650,50 L700,0 L750,50 L800,0 L850,50 L900,0 L950,50 L1000,0 L1050,50 L1100,0 L1150,50 L1200,0 L1200,120 L0,120 Z" fill="url(#grad1)"/>
      </svg>
    </div>
  );
}

// Slanted Edge Divider
export function SlantedDivider({ color = "#ffffff", direction = "left" }) {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d={direction === "left" ? "M0,120 L1200,0 L1200,120 Z" : "M0,0 L1200,120 L0,120 Z"} fill={color} />
      </svg>
    </div>
  );
}