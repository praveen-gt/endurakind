// "use client"

// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Phone, Sparkles, CheckCircle } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { SITE_CONFIG } from '@/lib/constants';
// import Link from 'next/link';

// export default function CTASection() {
//   const trustIndicators = [
//     'Person-Centered Care',
//     '24/7 Support Available',
//     'Compassionate Team'
//   ];

//   return (
//     <section className="relative py-20 md:py-32 overflow-hidden">
//       {/* Animated Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
//       </div>

//       {/* Wavy Top */}
//       <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
//         <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
//           <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" />
//         </svg>
//       </div>

//       {/* Floating Elements */}
//       <motion.div
//         animate={{
//           y: [0, -20, 0],
//           rotate: [0, 5, 0]
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//         className="absolute top-20 left-10 w-20 h-20 bg-white/30 rounded-2xl backdrop-blur-sm"
//       />
//       <motion.div
//         animate={{
//           y: [0, 20, 0],
//           rotate: [0, -5, 0]
//         }}
//         transition={{
//           duration: 7,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//         className="absolute bottom-20 right-10 w-32 h-32 bg-white/30 rounded-full backdrop-blur-sm"
//       />

//       <div className="container-custom relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center max-w-4xl mx-auto"
//         >
//           {/* Icon with Pulse Effect */}
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ type: "spring", duration: 0.8 }}
//             className="inline-block mb-8 relative"
//           >
//             <motion.div
//               animate={{
//                 scale: [1, 1.2, 1],
//                 opacity: [0.5, 0, 0.5]
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               className="absolute inset-0 bg-white rounded-3xl blur-xl"
//             />
//             <div className="relative bg-white/20 backdrop-blur-md p-4 rounded-3xl">
//               <Sparkles className="w-12 h-12 text-white" />
//             </div>
//           </motion.div>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 drop-shadow-lg">
//             Ready to Build Your Bridge to{' '}
//             <span className="text-white">Independence?</span>
//           </h2>

//           <p className="text-xl md:text-2xl text-gray-800 mb-10 font-light drop-shadow">
//             Join the Endurakind community and take the first step towards achieving your goals
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link href="/contact">
//                 <Button
//                   size="lg"
//                   className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-7 text-lg rounded-2xl shadow-2xl group min-w-[220px] hover:cursor-pointer"
//                 >
//                   Contact Us Today
//                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
//                 </Button>
//               </Link>
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link href={`tel:${SITE_CONFIG.phone}`}>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-900 px-10 py-7 text-lg rounded-2xl shadow-xl min-w-[220px] hover:cursor-pointer"
//                 >
//                   <Phone className="mr-2 w-5 h-5" />
//                   {SITE_CONFIG.phone}
//                 </Button>
//               </Link>
//             </motion.div>
//           </div>

//           {/* Trust Indicators with Animation */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//             className="flex flex-wrap justify-center items-center gap-8 text-gray-900"
//           >
//             {trustIndicators.map((indicator, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.4 + index * 0.1 }}
//                 className="flex items-center gap-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full"
//               >
//                 <CheckCircle className="w-5 h-5 text-green-600" />
//                 <span className="font-semibold">{indicator}</span>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';

export default function CTASection() {
  const trustIndicators = [
    'Person-Centered Care',
    '24/7 Support Available',
    'Compassionate Team'
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Gradient Background - pointer-events-none */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      {/* Wavy Top - pointer-events-none */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Floating Elements - Optimized animations with will-change */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-white/30 rounded-2xl backdrop-blur-sm pointer-events-none will-change-transform"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-white/30 rounded-full backdrop-blur-sm pointer-events-none will-change-transform"
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Icon with Pulse Effect - Optimized */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
            className="inline-block mb-8 relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-white rounded-3xl blur-xl pointer-events-none will-change-transform"
            />
            <div className="relative bg-white/20 backdrop-blur-md p-4 rounded-3xl">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 drop-shadow-lg">
            Ready to Build Your Bridge to{' '}
            <span className="text-white">Independence?</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-800 mb-10 font-light drop-shadow">
            Join the Endurakind community and take the first step towards achieving your goals
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* Primary CTA - CSS-only hover for better performance */}
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-7 text-lg rounded-2xl shadow-2xl group min-w-[220px] transition-all duration-300 ease-out hover:scale-105 active:scale-95"
              >
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 ease-out" />
              </Button>
            </Link>

            {/* Secondary CTA - CSS-only hover */}
            <Link href={`tel:${SITE_CONFIG.phone}`}>
              <Button
                size="lg"
                variant="outline"
                className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-900 px-10 py-7 text-lg rounded-2xl shadow-xl min-w-[220px] transition-all duration-300 ease-out hover:scale-105 active:scale-95"
              >
                <Phone className="mr-2 w-5 h-5" />
                {SITE_CONFIG.phone}
              </Button>
            </Link>
          </div>

          {/* Trust Indicators with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
            className="flex flex-wrap justify-center items-center gap-8 text-gray-900"
          >
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.3 + index * 0.08, duration: 0.3, ease: "easeOut" }}
                className="flex items-center gap-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full"
              >
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold">{indicator}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}