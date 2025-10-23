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

// Accessibility Icons Divider
// export function AccessibilityDivider({ flip = false }) {
//   return (
//     <div className={`absolute ${flip ? 'bottom-0' : 'top-0'} left-0 w-full h-24 overflow-hidden`}>
//       <div className="absolute inset-0 bg-gradient-to-r from-teal-50 via-white to-amber-50 opacity-60" />
//       <div className="absolute inset-0 flex items-center justify-around px-8 opacity-20">
//         {/* Wheelchair Symbol */}
//         <motion.svg 
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//           className="w-12 h-12 text-teal-600" 
//           fill="currentColor" 
//           viewBox="0 0 24 24"
//         >
//           <path d="M12 2C13.1 2 14 2.9 14 4S13.1 6 12 6 10 5.1 10 4 10.9 2 12 2M21 9H15V11H17.8C17.3 13.2 15.4 14.9 13 14.9C10.3 14.9 8.1 12.7 8.1 10S10.3 5.1 13 5.1C13.7 5.1 14.4 5.3 15 5.6L16.7 3.9C15.6 3.3 14.3 3 13 3C9.1 3 6 6.1 6 10S9.1 17 13 17C16.9 17 20 13.9 20 10V9H21Z"/>
//         </motion.svg>

//         {/* Heart Hands Symbol */}
//         <motion.svg 
//           animate={{ scale: [1, 1.1, 1] }}
//           transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
//           className="w-12 h-12 text-pink-500" 
//           fill="currentColor" 
//           viewBox="0 0 24 24"
//         >
//           <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
//         </motion.svg>

//         {/* Accessibility Symbol */}
//         <motion.svg 
//           animate={{ rotate: [0, 5, -5, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           className="w-12 h-12 text-blue-600" 
//           fill="currentColor" 
//           viewBox="0 0 24 24"
//         >
//           <circle cx="12" cy="5" r="2"/>
//           <path d="M12 7c-1.1 0-2 .9-2 2v4h1.5v7h3v-7H16V9c0-1.1-.9-2-2-2h-2z"/>
//         </motion.svg>

//         {/* Support Hands */}
//         <motion.svg 
//           animate={{ y: [0, 8, 0] }}
//           transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
//           className="w-12 h-12 text-amber-500" 
//           fill="currentColor" 
//           viewBox="0 0 24 24"
//         >
//           <path d="M20 13c-1.1 0-2 .9-2 2v4h-2v-4c0-2.21 1.79-4 4-4v2M2 15c0-1.1.9-2 2-2v-2c-2.21 0-4 1.79-4 4v4h2v-4M12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0 4c-2.67 0-8 1.34-8 4v4h16v-4c0-2.66-5.33-4-8-4z"/>
//         </motion.svg>

//         {/* Inclusive Circle */}
//         <motion.svg 
//           animate={{ scale: [1, 1.15, 1] }}
//           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//           className="w-12 h-12 text-teal-600" 
//           fill="currentColor" 
//           viewBox="0 0 24 24"
//         >
//           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7v-2z"/>
//         </motion.svg>
//       </div>
//     </div>
//   );
// }


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
          className="w-12 h-12 object-contain"
        />

        {/* 💖 Heart Hands */}
        <motion.img
          src="/images/icons/heart-hand.png"
          alt="Heart Hands Symbol"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 object-contain"
        />

        {/* 🧑‍🦽 Accessibility Symbol */}
        <motion.img
          src="/images/icons/accessibility-symbol.png"
          alt="Accessibility Symbol"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 object-contain"
        />

        {/* 🤝 Support Hands */}
        <motion.img
          src="/images/icons/support-hands.png"
          alt="Support Hands Symbol"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 object-contain"
        />

        {/* 🌈 Inclusive Circle */}
        <motion.img
          src="/images/icons/inclusive-circle.png"
          alt="Inclusive Circle Symbol"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 object-contain"
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