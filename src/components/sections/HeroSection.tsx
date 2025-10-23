// "use client"

// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Heart } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { fadeInUp, fadeInDown } from '@/lib/animations';

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-theme-cream via-white to-theme-orange/10 pt-32 pb-20">
//       {/* Animated Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `radial-gradient(circle at 20px 20px, #09778e 1px, transparent 0)`,
//             backgroundSize: '40px 40px',
//           }}
//         />
//       </div>

//       {/* Floating Shapes */}
//       <motion.div
//         className="absolute top-20 left-10 w-72 h-72 bg-theme-green/20 rounded-full mix-blend-multiply filter blur-xl"
//         animate={{
//           y: [0, -30, 0],
//           x: [0, 20, 0],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: 'easeInOut',
//         }}
//       />
//       <motion.div
//         className="absolute bottom-20 right-10 w-72 h-72 bg-theme-orange/20 rounded-full mix-blend-multiply filter blur-xl"
//         animate={{
//           y: [0, 30, 0],
//           x: [0, -20, 0],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: 'easeInOut',
//         }}
//       />

//       <div className="container-custom relative z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div {...fadeInDown}>
//             <div className="inline-flex items-center justify-center gap-2 mb-6">
//               <Heart className="w-12 h-12 text-theme-orange fill-theme-orange" />
//             </div>
//           </motion.div>

//           <motion.h1
//             {...fadeInUp}
//             className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-endurakind font-heading"
//           >
//             Building Bridges to Independence
//           </motion.h1>

//           <motion.p
//             {...fadeInUp}
//             transition={{ delay: 0.2 }}
//             className="text-xl md:text-2xl text-gray-600 mb-4"
//           >
//             Empowering lives through compassionate disability support
//           </motion.p>

//           <motion.p
//             {...fadeInUp}
//             transition={{ delay: 0.3 }}
//             className="text-base md:text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
//           >
//             At Endurakind, we create meaningful connections and provide person-centered care that enables individuals to thrive in their communities
//           </motion.p>

//           <motion.div
//             {...fadeInUp}
//             transition={{ delay: 0.4 }}
//             className="flex flex-wrap gap-4 justify-center"
//           >
//             <Button className="btn-endurakind group">
//               Get Started
//               <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </Button>
//             <Button className="btn-endurakind-outline">
//               Learn More
//             </Button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         <div className="w-6 h-10 border-2 border-theme-green rounded-full flex items-start justify-center p-2">
//           <div className="w-1 h-3 bg-theme-green rounded-full animate-scroll" />
//         </div>
//       </motion.div>
//     </section>
//   );
// }


// "use client"

// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Heart, Phone } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { fadeInUp } from '@/lib/animations';

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-teal-50/30 to-amber-50/20 pt-32 pb-20">
//       {/* Subtle animated blob backgrounds */}
//       <motion.div
//         className="absolute top-20 right-10 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl"
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.3, 0.5, 0.3],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//       />
//       <motion.div
//         className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-3xl"
//         animate={{
//           scale: [1.2, 1, 1.2],
//           opacity: [0.5, 0.3, 0.5],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//       />

//       <div className="container-custom relative z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           {/* Icon */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="inline-block mb-6"
//           >
//             <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
//               <Heart className="w-10 h-10 text-white fill-white" />
//             </div>
//           </motion.div>

//           {/* Main Heading */}
//           <motion.h1
//             {...fadeInUp}
//             className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-800 leading-tight"
//           >
//             Building Bridges to{' '}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-700">
//               Independence
//             </span>
//           </motion.h1>

//           {/* Subtitle */}
//           <motion.p
//             {...fadeInUp}
//             transition={{ delay: 0.2 }}
//             className="text-xl md:text-2xl text-gray-600 mb-4 font-light"
//           >
//             Empowering lives through compassionate disability support
//           </motion.p>

//           {/* Description */}
//           <motion.p
//             {...fadeInUp}
//             transition={{ delay: 0.3 }}
//             className="text-base md:text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed"
//           >
//             At Endurakind, we create meaningful connections and provide person-centered care that enables individuals to thrive in their communities
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             {...fadeInUp}
//             transition={{ delay: 0.4 }}
//             className="flex flex-wrap gap-4 justify-center"
//           >
//             <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group">
//               Get Started
//               <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Button>
//             <Button size="lg" variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg rounded-xl">
//               Learn More
//             </Button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         animate={{ y: [0, 8, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         <div className="w-6 h-10 border-2 border-teal-600/50 rounded-full flex items-start justify-center p-2">
//           <motion.div 
//             className="w-1.5 h-3 bg-teal-600 rounded-full"
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// }


"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeInUp } from '@/lib/animations';
import Image from 'next/image';

// Replace these paths with your actual image paths
const HERO_IMAGES = [
  '/images/hero/disability1.jpg',
  '/images/hero/disability2.jpg',
  '/images/hero/disability3.jpg',
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Change image every 6 seconds (adjust timing as needed)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === HERO_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Images with Zoom Effect */}
      <div className="absolute inset-0 bg-black">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.15, opacity: 1 }}
            exit={{ scale: 1.25, opacity: 0 }}
            transition={{ 
              scale: { duration: 6, ease: "linear" },
              opacity: { duration: 0.8 }
            }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_IMAGES[currentImageIndex]}
              alt="Hero background"
              fill
              priority={currentImageIndex === 0}
              className="object-cover"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Static Overlay for better text readability - lighter at top for header */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white/80" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            {/* <div className="w-20 h-20 bg-gradient-to-br from-white-400 to-white-500 rounded-2xl flex items-center justify-center shadow-2xl"> */}
              {/* <Heart className="w-10 h-10 text-white fill-white" /> */}
              <Image src={'/images/hero/wheel-icon.png'} alt="Endurakind wheel icon" width={100} height={100} className="" />
            {/* </div> */}
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            {...fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-800 leading-tight drop-shadow-2xl"
          >
            Building Bridges to{' '}
            <span className="text-theme-green drop-shadow-none">
              Independence
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-4 font-light drop-shadow-lg"
          >
            Empowering lives through compassionate disability support
          </motion.p>

          {/* Description */}
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="text-base md:text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
          >
            At Endurakind, we create meaningful connections and provide person-centered care that enables individuals to thrive in their communities
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white bg-white/10 backdrop-blur-md text-gray-800 hover:bg-white/20 px-8 py-6 text-lg rounded-xl shadow-2xl"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Image Progress Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-3 justify-center mt-12"
          >
            {HERO_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'w-12 bg-white' 
                    : 'w-8 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to image ${index + 1}`}
              >
                {index === currentImageIndex && (
                  <motion.div
                    className="absolute inset-0 bg-amber-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    key={`progress-${currentImageIndex}`}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-black/20">
          <motion.div 
            className="w-1.5 h-3 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
