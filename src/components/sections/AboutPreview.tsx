// "use client"

// import React from 'react';
// import { motion } from 'framer-motion';
// import { scrollReveal } from '@/lib/animations';
// import { CheckCircle2 } from 'lucide-react';
// import Image from 'next/image';

// export default function AboutPreview() {
//   const values = [
//     'Person-centered care approach',
//     'Experienced and qualified staff',
//     'Flexible and responsive services',
//     'Community integration focus',
//     'Dignity and respect at all times',
//     'Continuous improvement commitment'
//   ];

//   return (
//     <section id="about" className="section-padding bg-white">
//       <div className="container-custom">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Content */}
//           <motion.div {...scrollReveal}>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-endurakind">
//               About Endurakind
//             </h2>
//             <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//               Endurakind is built on the foundation of compassion, respect, and empowerment. We believe that every person, regardless of ability, has the right to live independently and participate fully in their community.
//             </p>
//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//               Our mission is to build bridges to independence by providing high-quality, person-centered disability support services that help individuals achieve their goals and live life on their own terms.
//             </p>

//             <div className="grid sm:grid-cols-2 gap-4 mb-8">
//               {values.map((value, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <CheckCircle2 className="w-5 h-5 text-theme-green flex-shrink-0 mt-0.5" />
//                   <span className="text-gray-700">{value}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Image/Visual */}
//           <motion.div
//             {...scrollReveal}
//             transition={{ delay: 0.2 }}
//             className="relative"
//           >
//             <div className="bg-gradient-to-br from-theme-green to-theme-lightgreen p-12 rounded-3xl shadow-2xl text-white">
//               <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
//               <p className="text-lg leading-relaxed mb-4">
//                 We envision a world where every individual with disability is valued, included, and empowered to reach their full potential.
//               </p>
//               <p className="text-lg leading-relaxed">
//                 Through personalized support, community engagement, and unwavering advocacy, Endurakind is committed to creating lasting positive change in the lives of those we serve.
//               </p>
              
//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
//                 <div>
//                   <div className="text-3xl font-bold mb-1">500+</div>
//                   <div className="text-sm opacity-90">Clients Supported</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold mb-1">50+</div>
//                   <div className="text-sm opacity-90">Dedicated Staff</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold mb-1">10+</div>
//                   <div className="text-sm opacity-90">Years Experience</div>
//                 </div>
//               </div>
//             </div>

//             {/* Decorative elements */}
//             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-theme-orange rounded-full opacity-20 -z-10" />
//             <div className="absolute -top-6 -left-6 w-24 h-24 bg-theme-green rounded-full opacity-20 -z-10" />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client"

// import React from 'react';
// import { motion } from 'framer-motion';
// import { CheckCircle2 } from 'lucide-react';
// import { scrollReveal } from '@/lib/animations';

// export default function AboutPreview() {
//   const features = [
//     'Person-centered care approach',
//     'Flexible and responsive services',
//     'Experienced and qualified staff',
//     'Community integration focus',
//     'Quality and respect at all times',
//     'Continuous improvement commitment'
//   ];

//   return (
//     <section className="section-padding bg-white relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-30 -z-10" />
      
//       <div className="container-custom">
//         <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
//           {/* Left Column - Text Content */}
//           <motion.div {...scrollReveal}>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
//                 About Endurakind
//               </h2>
//               <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-amber-500 mb-8"></div>
//             </motion.div>

//             <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//               Endurakind is built on the foundation of compassion, respect, and empowerment. We believe that every person, regardless of ability, has the right to live independently and participate fully in their community.
//             </p>
            
//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//               Our mission is to build bridges to independence by providing high-quality, person-centered support services that help individuals achieve their goals and live life on their own terms.
//             </p>

//             {/* Features List - 2 Columns */}
//             <div className="grid sm:grid-cols-2 gap-4">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-start gap-3"
//                 >
//                   <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
//                   <span className="text-gray-700">{feature}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right Column - Image/Visual Card */}
//           <motion.div
//             {...scrollReveal}
//             transition={{ delay: 0.2 }}
//             className="relative"
//           >
//             {/* Main Card */}
//             <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 p-10 lg:p-12 rounded-3xl shadow-2xl text-white relative overflow-hidden">
//               {/* Decorative pattern */}
//               <div className="absolute inset-0 opacity-10">
//                 <div className="absolute inset-0" style={{
//                   backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
//                   backgroundSize: '30px 30px'
//                 }} />
//               </div>

//               <div className="relative z-10">
//                 <h3 className="text-3xl lg:text-4xl font-bold mb-6">Our Vision</h3>
//                 <p className="text-lg lg:text-xl leading-relaxed mb-8 text-teal-50">
//                   An inclusive society where every person, regardless of ability, has equal opportunity to thrive, contribute, and live their best life.
//                 </p>

//                 {/* Stats */}
//                 <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
//                   <div>
//                     <div className="text-4xl font-bold mb-2">500+</div>
//                     <div className="text-sm text-teal-100">Clients Served</div>
//                   </div>
//                   <div>
//                     <div className="text-4xl font-bold mb-2">50+</div>
//                     <div className="text-sm text-teal-100">Team Members</div>
//                   </div>
//                   <div>
//                     <div className="text-4xl font-bold mb-2">10+</div>
//                     <div className="text-sm text-teal-100">Years Experience</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating accent card */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4 }}
//               className="absolute -bottom-6 -left-6 bg-amber-400 p-6 rounded-2xl shadow-xl max-w-[200px]"
//             >
//               <div className="text-gray-900">
//                 <div className="text-3xl font-bold mb-1">100%</div>
//                 <div className="text-sm font-medium">NDIS Registered</div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client"

// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { CheckCircle2, Users, Target, Award } from 'lucide-react';
// import { scrollReveal } from '@/lib/animations';
// import Image from 'next/image';

// export default function EnhancedAboutSection() {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
//   const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

//   const features = [
//     'Person-centered care approach',
//     'Experienced and qualified staff',
//     'Flexible and responsive services',
//     'Community integration focus',
//   ];

//   const stats = [
//     { icon: Users, value: '500+', label: 'Clients Supported' },
//     { icon: Target, value: '50+', label: 'Team Members' },
//     { icon: Award, value: '10+', label: 'Years Experience' },
//   ];

//   return (
//     <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden bg-white">
//       {/* Wavy Top Border */}
//       <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
//         <svg className="relative block w-full h-20 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
//           <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f0fdfa" />
//         </svg>
//       </div>

//       <div className="container-custom relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Column - Image with Parallax */}
//           <motion.div 
//             style={{ y }}
//             className="relative"
//           >
//             <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
//               <Image
//                 src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop"
//                 alt="Caring support"
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent" />
              
//               {/* Floating Stats Card */}
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3 }}
//                 className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl"
//               >
//                 <div className="grid grid-cols-3 gap-4 text-center">
//                   {stats.map((stat, index) => (
//                     <div key={index}>
//                       <stat.icon className="w-6 h-6 text-teal-600 mx-auto mb-2" />
//                       <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
//                       <div className="text-xs text-gray-600">{stat.label}</div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>

//             {/* Decorative Floating Elements */}
//             <motion.div
//               animate={{ y: [0, -20, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 blur-2xl"
//             />
//             <motion.div
//               animate={{ y: [0, 20, 0] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full opacity-20 blur-2xl"
//             />
//           </motion.div>

//           {/* Right Column - Content */}
//           <motion.div style={{ opacity }}>
//             <motion.div {...scrollReveal}>
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
//                 About{' '}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-700">
//                   Endurakind
//                 </span>
//               </h2>
//               <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mb-8"></div>
//             </motion.div>

//             <motion.p 
//               {...scrollReveal}
//               transition={{ delay: 0.1 }}
//               className="text-lg text-gray-600 mb-6 leading-relaxed"
//             >
//               Endurakind is built on the foundation of compassion, respect, and empowerment. We believe that every person, regardless of ability, has the right to live independently and participate fully in their community.
//             </motion.p>
            
//             <motion.p 
//               {...scrollReveal}
//               transition={{ delay: 0.2 }}
//               className="text-lg text-gray-600 mb-8 leading-relaxed"
//             >
//               Our mission is to build bridges to independence by providing high-quality, person-centered support services that help individuals achieve their goals and live life on their own terms.
//             </motion.p>

//             {/* Features List */}
//             <div className="space-y-4 mb-8">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-center gap-3 group"
//                 >
//                   <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center group-hover:bg-teal-600 transition-colors">
//                     <CheckCircle2 className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors" />
//                   </div>
//                   <span className="text-gray-700 font-medium">{feature}</span>
//                 </motion.div>
//               ))}
//             </div>

//             {/* NDIS Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4 }}
//               className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-50 to-amber-50 border-2 border-teal-200 rounded-full px-6 py-3"
//             >
//               <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//               <span className="text-gray-800 font-semibold">NDIS Registered Provider</span>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Wavy Bottom Border */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
//         <svg className="relative block w-full h-20 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
//           <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f9fafb" />
//         </svg>
//       </div>
//     </section>
//   );
// }


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