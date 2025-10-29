// "use client"

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Clock, Users, Target, Heart, Shield, Award } from 'lucide-react';
// import { scrollReveal, staggerContainer, staggerItem } from '@/lib/animations';

// const features = [
//   {
//     icon: Clock,
//     title: '24/7 Support Available',
//     description: 'Round-the-clock assistance whenever you need it, ensuring peace of mind.'
//   },
//   {
//     icon: Users,
//     title: 'Experienced Professionals',
//     description: 'Highly trained, compassionate staff dedicated to your wellbeing.'
//   },
//   {
//     icon: Target,
//     title: 'Personalized Approach',
//     description: 'Tailored support plans designed around your unique needs and goals.'
//   },
//   {
//     icon: Heart,
//     title: 'Person-Centered Care',
//     description: 'You at the center of everything we do, respecting your choices.'
//   },
//   {
//     icon: Shield,
//     title: 'Quality & Safety',
//     description: 'NDIS registered with rigorous safety and quality standards.'
//   },
//   {
//     icon: Award,
//     title: 'Proven Excellence',
//     description: 'Recognized for outstanding service delivery and client satisfaction.'
//   }
// ];

// export default function WhyChooseSection() {
//   return (
//     <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `linear-gradient(30deg, #e3a858 12%, transparent 12.5%, transparent 87%, #e3a858 87.5%, #e3a858), linear-gradient(150deg, #e3a858 12%, transparent 12.5%, transparent 87%, #e3a858 87.5%, #e3a858)`,
//             backgroundSize: '40px 40px',
//           }}
//         />
//       </div>

//       <div className="container-custom relative z-10">
//         <motion.div {...scrollReveal} className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
//             Why Choose Endurakind?
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             We're dedicated to delivering exceptional support services with integrity, compassion, and professionalism
//           </p>
//         </motion.div>

//         <motion.div
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               variants={staggerItem}
//               className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
//             >
//               <div className="bg-gradient-to-br from-theme-orange to-yellow-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
//                 <feature.icon className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
//               <p className="text-gray-300">{feature.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>


// "use client"

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Clock, Users, Target, Heart, Shield, Award, CheckCircle2 } from 'lucide-react';
// import { scrollReveal, staggerContainer, staggerItem } from '@/lib/animations';

// const features = [
//   {
//     icon: Clock,
//     title: '24/7 Availability',
//     description: 'Round-the-clock support whenever you need it'
//   },
//   {
//     icon: Users,
//     title: 'Expert Team',
//     description: 'Highly qualified and compassionate professionals'
//   },
//   {
//     icon: Target,
//     title: 'Personalized Plans',
//     description: 'Tailored support designed for your unique needs'
//   },
//   {
//     icon: Heart,
//     title: 'Person-Centered',
//     description: 'You at the heart of everything we do'
//   },
//   {
//     icon: Shield,
//     title: 'Quality Assured',
//     description: 'NDIS registered with rigorous standards'
//   },
//   {
//     icon: Award,
//     title: 'Proven Results',
//     description: 'Outstanding service and client satisfaction'
//   }
// ];

// export default function WhyChooseSection() {
//   return (
//     <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-teal-50/30 relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20 -z-10" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20 -z-10" />

//       <div className="container-custom">
//         {/* Header */}
//         <motion.div {...scrollReveal} className="text-center mb-16 max-w-3xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
//             Why Choose Endurakind?
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-amber-500 mx-auto mb-6"></div>
//           <p className="text-lg md:text-xl text-gray-600">
//             We're dedicated to delivering exceptional support services with integrity, compassion, and professionalism
//           </p>
//         </motion.div>

//         {/* Features Grid */}
//         <motion.div
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
//         >
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               variants={staggerItem}
//               className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300"
//             >
//               <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
//                 <feature.icon className="w-7 h-7 text-white" />
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-teal-600 transition-colors">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Bottom Stats/Trust Bar */}
//         <motion.div
//           {...scrollReveal}
//           transition={{ delay: 0.4 }}
//           className="mt-16 max-w-4xl mx-auto"
//         >
//           <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//             <div className="grid sm:grid-cols-3 gap-8 text-center">
//               <div>
//                 <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
//                 <div className="text-gray-600 font-medium">Clients Supported</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
//                 <div className="text-gray-600 font-medium">Dedicated Staff</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-teal-600 mb-2">10+</div>
//                 <div className="text-gray-600 font-medium">Years Experience</div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// "use client"

// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Clock, Users, Target, Heart, Shield, Award, Zap } from 'lucide-react';
// import Image from 'next/image';

// const features = [
//   {
//     icon: Clock,
//     title: '24/7 Support',
//     description: 'Round-the-clock assistance whenever you need it',
//     color: 'from-blue-500 to-cyan-500'
//   },
//   {
//     icon: Users,
//     title: 'Expert Team',
//     description: 'Highly qualified compassionate professionals',
//     color: 'from-purple-500 to-pink-500'
//   },
//   {
//     icon: Target,
//     title: 'Personalized Plans',
//     description: 'Tailored support for your unique needs',
//     color: 'from-orange-500 to-red-500'
//   },
//   {
//     icon: Heart,
//     title: 'Person-Centered',
//     description: 'You at the heart of everything we do',
//     color: 'from-pink-500 to-rose-500'
//   },
//   {
//     icon: Shield,
//     title: 'Quality Assured',
//     description: 'NDIS registered with rigorous standards',
//     color: 'from-teal-500 to-emerald-500'
//   },
//   {
//     icon: Award,
//     title: 'Proven Results',
//     description: 'Outstanding service and satisfaction',
//     color: 'from-amber-500 to-yellow-500'
//   }
// ];

// export default function EnhancedWhyChooseSection() {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

//   return (
//     <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden bg-white">
//       {/* Wavy Top */}
//        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
//         <svg className="relative block w-full h-20 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
//           <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#f9fafb" />
//         </svg>
//       </div>

//       <div className="container-custom relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left - Features Grid */}
//           <div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="mb-12"
//             >
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
//                 Why Choose{' '}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500">
//                   Endurakind?
//                 </span>
//               </h2>
//               <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mb-6"></div>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 We're dedicated to delivering exceptional support with integrity, compassion, and professionalism
//               </p>
//             </motion.div>

//             <div className="grid sm:grid-cols-2 gap-6">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   className="group relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
//                     <feature.icon className="w-7 h-7 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-teal-600 transition-colors">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>

//                   {/* Shine Effect on Hover */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Right - Image with Parallax */}
//           <motion.div style={{ y }} className="relative">
//             <div className="relative h-[600px] lg:h-[700px]">
//               {/* Main Image */}
//               <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
//                 <Image
//                   src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=1000&fit=crop"
//                   alt="Why choose us"
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
//               </div>

//               {/* Floating Stats Cards */}
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3 }}
//                 className="absolute top-10 -left-4 bg-white rounded-2xl p-6 shadow-2xl max-w-[200px]"
//               >
//                 <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
//                 <div className="text-sm text-gray-600">Happy Clients Supported</div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.5 }}
//                 className="absolute bottom-10 -right-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-6 shadow-2xl max-w-[200px]"
//               >
//                 <div className="text-white">
//                   <Zap className="w-10 h-10 mb-3" />
//                   <div className="text-3xl font-bold mb-2">100%</div>
//                   <div className="text-sm">NDIS Registered Provider</div>
//                 </div>
//               </motion.div>

//               {/* Decorative Elements */}
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 className="absolute top-1/2 left-1/2 w-64 h-64 border-4 border-dashed border-teal-200 rounded-full -z-10"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Wavy Bottom */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
//         <svg className="relative block w-full h-20 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
//           <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#f9fafb" />
//         </svg>
//       </div>
//     </section>
//   );
// } 

// // src/components/home/EnhancedWhyChooseSection.tsx
// "use client"

// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Clock, Users, Target, Heart, Shield, Award, Zap } from 'lucide-react';
// import Image from 'next/image';

// const features = [
//   {
//     icon: Clock,
//     title: '24/7 Support',
//     description: 'Round-the-clock assistance whenever you need it',
//     color: 'from-blue-500 to-cyan-500'
//   },
//   {
//     icon: Users,
//     title: 'Expert Team',
//     description: 'Highly qualified compassionate professionals',
//     color: 'from-purple-500 to-pink-500'
//   },
//   {
//     icon: Target,
//     title: 'Personalized Plans',
//     description: 'Tailored support for your unique needs',
//     color: 'from-orange-500 to-red-500'
//   },
//   {
//     icon: Heart,
//     title: 'Person-Centered',
//     description: 'You at the heart of everything we do',
//     color: 'from-pink-500 to-rose-500'
//   },
//   {
//     icon: Shield,
//     title: 'Quality Assured',
//     description: 'Committed to highest standards of care',
//     color: 'from-teal-500 to-emerald-500'
//   },
//   {
//     icon: Award,
//     title: 'Proven Results',
//     description: 'Outstanding service and satisfaction',
//     color: 'from-amber-500 to-yellow-500'
//   }
// ];

// export default function EnhancedWhyChooseSection() {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

//   return (
//     <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden bg-white">
//       {/* Wavy Top */}
//        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
//         <svg className="relative block w-full h-20 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
//           <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#f9fafb" />
//         </svg>
//       </div>

//       <div className="container-custom relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left - Features Grid */}
//           <div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="mb-12"
//             >
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
//                 Why Choose{' '}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500">
//                   Endurakind?
//                 </span>
//               </h2>
//               <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mb-6"></div>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 We're dedicated to delivering exceptional support with integrity, compassion, and professionalism
//               </p>
//             </motion.div>

//             <div className="grid sm:grid-cols-2 gap-6">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   className="group relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
//                     <feature.icon className="w-7 h-7 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-teal-600 transition-colors">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>

//                   {/* Shine Effect on Hover */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Right - Image with Parallax */}
// {/* Right - Inclusive Collage */}
// <motion.div style={{ y }} className="relative flex justify-center items-center">
//   <div className="relative w-full h-[650px] lg:h-[750px] flex justify-center items-center">

//     {/* Background Glow */}
//     <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-amber-50 to-white rounded-3xl blur-3xl opacity-60" />

//     {/* Collage Grid */}
//     <div className="grid grid-cols-3 gap-4 relative z-10 max-w-[600px]">
//       {/* Top Left */}
//       <motion.div whileHover={{ scale: 1.05 }} className="col-span-1 rounded-2xl overflow-hidden shadow-lg">
//         <Image
//           src="https://via.placeholder.com/400x400.png?text=Care+and+Support"
//           alt="Care and Support"
//           width={400}
//           height={400}
//           className="object-cover w-full h-full"
//         />
//       </motion.div>

//       {/* Top Right */}
//       <motion.div whileHover={{ scale: 1.05 }} className="col-span-2 rounded-2xl overflow-hidden shadow-lg">
//         <Image
//           src="https://via.placeholder.com/600x400.png?text=Inclusive+Community"
//           alt="Inclusive Community"
//           width={600}
//           height={400}
//           className="object-cover w-full h-full"
//         />
//       </motion.div>

//       {/* Middle Left */}
//       <motion.div whileHover={{ scale: 1.05 }} className="col-span-2 rounded-2xl overflow-hidden shadow-lg mt-6">
//         <Image
//           src="https://via.placeholder.com/600x400.png?text=Diverse+Abilities"
//           alt="Diverse Abilities"
//           width={600}
//           height={400}
//           className="object-cover w-full h-full"
//         />
//       </motion.div>

//       {/* Middle Right */}
//       <motion.div whileHover={{ scale: 1.05 }} className="col-span-1 rounded-2xl overflow-hidden shadow-lg mt-12">
//         <Image
//           src="https://via.placeholder.com/400x400.png?text=Respect+and+Dignity"
//           alt="Respect and Dignity"
//           width={400}
//           height={400}
//           className="object-cover w-full h-full"
//         />
//       </motion.div>

//       {/* Bottom Full */}
//       <motion.div whileHover={{ scale: 1.05 }} className="col-span-3 rounded-3xl overflow-hidden shadow-xl mt-10">
//         <Image
//           src="https://via.placeholder.com/900x500.png?text=Unity+and+Care"
//           alt="Unity and Care"
//           width={900}
//           height={500}
//           className="object-cover w-full h-full"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl" />
//       </motion.div>
//     </div>

//     {/* Floating Circle Animation */}
//     <motion.div
//       animate={{ rotate: 360 }}
//       transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//       className="absolute top-1/2 left-1/2 w-72 h-72 border-4 border-dashed border-teal-300 rounded-full -z-10"
//     />

//     {/* Floating Stats Cards */}
//     <motion.div
//       initial={{ opacity: 0, x: -50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: 0.3 }}
//       className="absolute top-10 -left-6 bg-white rounded-2xl p-6 shadow-2xl max-w-[200px]"
//     >
//       <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
//       <div className="text-sm text-gray-600">Families We Support</div>
//     </motion.div>

//     <motion.div
//       initial={{ opacity: 0, x: 50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: 0.5 }}
//       className="absolute bottom-10 -right-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-6 shadow-2xl max-w-[200px]"
//     >
//       <div className="text-white">
//         <Zap className="w-10 h-10 mb-3" />
//         <div className="text-3xl font-bold mb-2">100%</div>
//         <div className="text-sm">Committed to Quality</div>
//       </div>
//     </motion.div>
//   </div>
// </motion.div>

//         </div>
//       </div>

//       {/* Wavy Bottom */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
//         <svg className="relative block w-full h-20 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
//           <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#f9fafb" />
//         </svg>
//       </div>
//     </section>
//   );
// }


// src/components/home/EnhancedWhyChooseSection.tsx
"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Clock,
  Users,
  Target,
  Heart,
  Shield,
  Award,
  Zap,
} from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance whenever you need it",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly qualified compassionate professionals",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Personalized Plans",
    description: "Tailored support for your unique needs",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Heart,
    title: "Person-Centered",
    description: "You at the heart of everything we do",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Committed to highest standards of care",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Outstanding service and satisfaction",
    color: "from-amber-500 to-yellow-500",
  },
]

export default function WhyChooseSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden bg-white"
    >
      {/* Wavy Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20 md:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#f9fafb"
          />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500">
                Endurakind?
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're dedicated to delivering exceptional support with
              integrity, compassion, and professionalism.
            </p>
          </motion.div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Features Grid */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-teal-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Shine Effect on Hover */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Collage */}
          <motion.div
            style={{ y }}
            className="relative flex justify-center items-center px-4 lg:px-8"
          >
            <div className="relative w-full max-w-[550px] mx-auto">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-amber-50 to-white rounded-3xl blur-3xl opacity-60" />

              {/* Collage Grid */}
              <div className="grid grid-cols-3 gap-3 relative z-10">
                {/* Top Left */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="col-span-1 rounded-xl overflow-hidden shadow-lg h-40"
                >
                  <Image
                    src="/images/home/old-man-happy.jpg?q=80&w=400"
                    alt="Care and Support"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </motion.div>

                {/* Top Right */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="col-span-2 rounded-xl overflow-hidden shadow-lg h-40"
                >
                  <Image
                    src="/images/home/old-man-happy.jpg?q=80&w=600"
                    alt="Inclusive Community"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </motion.div>

                {/* Middle Left */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="col-span-2 rounded-xl overflow-hidden shadow-lg h-48"
                >
                  <Image
                    src="/images/home/old-man-happy.jpg?q=80&w=600"
                    alt="Diverse Abilities"
                    width={400}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </motion.div>

                {/* Middle Right */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="col-span-1 rounded-xl overflow-hidden shadow-lg h-48"
                >
                  <Image
                    src="/images/home/old-man-happy.jpg?q=80&w=400"
                    alt="Respect and Dignity"
                    width={200}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </motion.div>

                {/* Bottom Full */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="col-span-3 rounded-xl overflow-hidden shadow-xl relative h-52"
                >
                  <Image
                    src="/images/home/old-man-happy.jpg?q=80&w=900"
                    alt="Unity and Care"
                    width={600}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />
                </motion.div>
              </div>

              {/* Floating Circle Animation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 w-96 h-96 border-4 border-dashed border-teal-300 rounded-full -z-10 -translate-x-1/2 -translate-y-1/2"
              />

              {/* Floating Stats Cards - Positioned Inside Container */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute top-0 left-0 bg-white rounded-xl p-4 shadow-2xl z-20"
              >
                <div className="text-3xl font-bold text-teal-600 mb-1">50+</div>
                <div className="text-xs text-gray-600">
                  Families We Support
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-0 right-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl p-4 shadow-2xl z-20"
              >
                <div className="text-white">
                  <Zap className="w-8 h-8 mb-2" />
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-xs">Committed to Quality</div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wavy Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20 md:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  )
}
