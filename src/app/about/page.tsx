// 'use client';

// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { 
//   Heart, Users, Target, Shield, ArrowRight, CheckCircle, Sparkles, 
//   Award, Clock, TrendingUp, MapPin, Phone, Mail
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Image from 'next/image';

// const AboutPage = () => {
//   const parallaxRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: parallaxRef,
//     offset: ["start end", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

//   const values = [
//     {
//       icon: Heart,
//       title: 'Compassion First',
//       description: 'We care deeply about every individual we support, treating everyone with dignity and kindness.',
//       color: 'from-pink-500 to-rose-500',
//       stat: '100%'
//     },
//     {
//       icon: Users,
//       title: 'Inclusive Community',
//       description: 'Everyone deserves respect, equal opportunities, and a place where they truly belong.',
//       color: 'from-teal-500 to-cyan-500',
//       stat: '200+'
//     },
//     {
//       icon: Target,
//       title: 'Goal Focused',
//       description: 'Helping you achieve independence, reach your goals, and live your best life.',
//       color: 'from-amber-500 to-orange-500',
//       stat: '500+'
//     },
//     {
//       icon: Shield,
//       title: 'Trust & Integrity',
//       description: 'Transparent, honest, and ethical in everything we do. Your trust is our priority.',
//       color: 'from-blue-500 to-indigo-500',
//       stat: '10+'
//     }
//   ];

//   const stats = [
//     { 
//       icon: Clock,
//       value: '10+', 
//       label: 'Years Experience',
//       description: 'Serving our community'
//     },
//     { 
//       icon: Users,
//       value: '200+', 
//       label: 'Families Supported',
//       description: 'Building independence together'
//     },
//     { 
//       icon: Award,
//       value: '50+', 
//       label: 'Care Professionals',
//       description: 'Dedicated to excellence'
//     },
//     { 
//       icon: TrendingUp,
//       value: '24/7', 
//       label: 'Available Support',
//       description: 'We\'re here when you need us'
//     }
//   ];

//   const milestones = [
//     {
//       year: '2014',
//       title: 'The Beginning',
//       description: 'Endurakind was founded with a vision to create truly person-centered care in Victoria.'
//     },
//     {
//       year: '2017',
//       title: 'Growing Impact',
//       description: 'Expanded our services to support over 100 individuals and families across Melbourne.'
//     },
//     {
//       year: '2020',
//       title: 'Building Bridges',
//       description: 'Launched our community programs and 24/7 support services during challenging times.'
//     },
//     {
//       year: '2025',
//       title: 'Today & Beyond',
//       description: 'Supporting 200+ families with a team of 50+ dedicated professionals, looking to the future.'
//     }
//   ];

//   const team = [
//     { 
//       name: 'Sarah Johnson', 
//       role: 'Founder & Director', 
//       image: '/images/team/sarah.jpg',
//       bio: 'Passionate about creating inclusive communities'
//     },
//     { 
//       name: 'Michael Chen', 
//       role: 'Support Coordinator', 
//       image: '/images/team/michael.jpg',
//       bio: 'Dedicated to personalized care plans'
//     },
//     { 
//       name: 'Emma Williams', 
//       role: 'Care Specialist', 
//       image: '/images/team/emma.jpg',
//       bio: 'Expert in disability support services'
//     },
//     { 
//       name: 'David Brown', 
//       role: 'Community Liaison', 
//       image: '/images/team/david.jpg',
//       bio: 'Building lasting community connections'
//     }
//   ];

//   return (
//     <div className="bg-white">
//       {/* Hero Section - Matching Homepage Style */}
//       <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0 bg-black">
//           <Image
//             src="/images/about/about-hero.jpg"
//             alt="About Endurakind"
//             fill
//             priority
//             className="object-cover"
//             quality={90}
//           />
//           {/* White overlay matching homepage */}
//           <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/90" />
//         </div>

//         {/* Content */}
//         <div className="container-custom relative z-10 py-20">
//           <div className="max-w-4xl mx-auto text-center">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               className="inline-block mb-6"
//             >
//               <div className="bg-teal-600/10 backdrop-blur-md p-4 rounded-3xl">
//                 <Heart className="w-12 h-12 text-teal-600" />
//               </div>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900"
//             >
//               About <span className="text-teal-600">Endurakind</span>
//             </motion.h1>

//             <motion.div
//               initial={{ opacity: 0, scaleX: 0 }}
//               animate={{ opacity: 1, scaleX: 1 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mx-auto mb-6"
//             />

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed"
//             >
//               Building bridges to independence through compassionate,
//               <br className="hidden md:block" />
//               person-centered care since 2014
//             </motion.p>
//           </div>
//         </div>

//         {/* Wavy Bottom */}
//         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
//           <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" />
//           </svg>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-white">
//         <div className="container-custom">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center border border-gray-100"
//               >
//                 <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-xl mb-4">
//                   <stat.icon className="w-6 h-6 text-teal-600" />
//                 </div>
//                 <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
//                   {stat.value}
//                 </div>
//                 <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
//                 <p className="text-sm text-gray-600">{stat.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Story Section with Parallax */}
//       <section ref={parallaxRef} className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `radial-gradient(circle at 2px 2px, #0d9488 1px, transparent 0)`,
//             backgroundSize: '40px 40px'
//           }} />
//         </div>

//         <div className="container-custom relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="inline-block mb-4">
//                 <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
//                   Our Journey
//                 </span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
//                 Where It All <span className="text-teal-600">Began</span>
//               </h2>
//               <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mb-8"></div>
              
//               <div className="space-y-6">
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   Endurakind was founded with a simple yet powerful vision: to create an inclusive 
//                   community where every person, regardless of ability, can live independently and thrive.
//                 </p>
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   Our journey began over a decade ago when our founder recognized the need for truly 
//                   person-centered disability support services. What started as a small team with big 
//                   dreams has grown into a comprehensive support network serving hundreds of families 
//                   across Victoria.
//                 </p>
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   Today, we're proud to be one of Melbourne's most trusted disability support providers, 
//                   but our core values remain unchanged: compassion, inclusivity, empowerment, and integrity 
//                   guide everything we do.
//                 </p>
//               </div>

//               <div className="mt-8 flex flex-wrap gap-4">
//                 <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md">
//                   <CheckCircle className="w-5 h-5 text-teal-600" />
//                   <span className="font-semibold text-gray-900">NDIS Registered</span>
//                 </div>
//                 <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md">
//                   <CheckCircle className="w-5 h-5 text-teal-600" />
//                   <span className="font-semibold text-gray-900">Quality Certified</span>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               style={{ y }}
//               className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
//             >
//               <Image
//                 src="/images/about/our-story.jpg"
//                 alt="Our Story"
//                 fill
//                 className="object-cover"
//                 quality={90}
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Timeline/Milestones Section */}
//       <section className="py-20 md:py-32 bg-white">
//         <div className="container-custom">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <div className="inline-block mb-4">
//               <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
//                 Our Journey
//               </span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
//               Key <span className="text-teal-600">Milestones</span>
//             </h2>
//             <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mx-auto mb-6"></div>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               A decade of growth, impact, and unwavering commitment to our community
//             </p>
//           </motion.div>

//           <div className="max-w-4xl mx-auto">
//             {milestones.map((milestone, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="relative pl-8 pb-12 border-l-2 border-teal-200 last:pb-0"
//               >
//                 <div className="absolute left-[-9px] top-0 w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-lg"></div>
//                 <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
//                   <div className="text-3xl font-bold text-teal-600 mb-2">{milestone.year}</div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
//                   <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Values Section - Enhanced Design */}
//       <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `radial-gradient(circle at 2px 2px, #0d9488 1px, transparent 0)`,
//             backgroundSize: '40px 40px'
//           }} />
//         </div>

//         <div className="container-custom relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <div className="inline-block mb-4">
//               <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
//                 What Drives Us
//               </span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
//               Our Core <span className="text-teal-600">Values</span>
//             </h2>
//             <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mx-auto mb-6"></div>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               These principles guide every decision we make and every interaction we have
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {values.map((value, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group border border-gray-100"
//               >
//                 <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
//                   <value.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
//                 <p className="text-gray-600 leading-relaxed mb-4">{value.description}</p>
//                 <div className="flex items-center gap-2 text-teal-600">
//                   <span className="text-2xl font-bold">{value.stat}</span>
//                   <span className="text-sm font-semibold">Impact</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 md:py-32 bg-white">
//         <div className="container-custom">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <div className="inline-block mb-4">
//               <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
//                 The People Behind Our Mission
//               </span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
//               Meet Our <span className="text-teal-600">Team</span>
//             </h2>
//             <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mx-auto mb-6"></div>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Our dedicated professionals are passionate about making a real difference in people's lives
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {team.map((member, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -10 }}
//                 className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
//               >
//                 <div className="relative h-80 bg-gradient-to-br from-teal-400 to-teal-600 overflow-hidden">
//                   <Image
//                     src={member.image}
//                     alt={member.name}
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="p-6 text-center">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
//                   <p className="text-teal-600 font-semibold mb-3">{member.role}</p>
//                   <p className="text-sm text-gray-600">{member.bio}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section - Matching Homepage Orange/Amber Style */}
//       <section className="relative py-20 md:py-32 overflow-hidden">
//         {/* Animated Gradient Background */}
//         <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
//         </div>

//         {/* Wavy Top */}
//         <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
//           <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" />
//           </svg>
//         </div>

//         {/* Floating Elements */}
//         <motion.div
//           animate={{
//             y: [0, -20, 0],
//             rotate: [0, 5, 0]
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           className="absolute top-20 left-10 w-20 h-20 bg-white/30 rounded-2xl backdrop-blur-sm hidden lg:block"
//         />
//         <motion.div
//           animate={{
//             y: [0, 20, 0],
//             rotate: [0, -5, 0]
//           }}
//           transition={{
//             duration: 7,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           className="absolute bottom-20 right-10 w-32 h-32 bg-white/30 rounded-full backdrop-blur-sm hidden lg:block"
//         />

//         <div className="container-custom relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             {/* Icon with Pulse Effect */}
//             <motion.div
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ type: "spring", duration: 0.8 }}
//               className="inline-block mb-8 relative"
//             >
//               <motion.div
//                 animate={{
//                   scale: [1, 1.2, 1],
//                   opacity: [0.5, 0, 0.5]
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//                 className="absolute inset-0 bg-white rounded-3xl blur-xl"
//               />
//               <div className="relative bg-white/20 backdrop-blur-md p-4 rounded-3xl">
//                 <Sparkles className="w-12 h-12 text-white" />
//               </div>
//             </motion.div>

//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 drop-shadow-lg">
//               Ready to Start Your{' '}
//               <span className="text-white">Journey?</span>
//             </h2>
            
//             <p className="text-xl md:text-2xl text-gray-800 mb-10 font-light drop-shadow">
//               Contact us today to learn how we can support you or your loved ones
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button 
//                   size="lg"
//                   className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-7 text-lg rounded-2xl shadow-2xl group min-w-[220px]"
//                 >
//                   Get In Touch
//                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
//                 </Button>
//               </motion.div>
              
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button 
//                   size="lg"
//                   variant="outline"
//                   className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-900 px-10 py-7 text-lg rounded-2xl shadow-xl min-w-[220px]"
//                 >
//                   <Phone className="mr-2 w-5 h-5" />
//                   Call Us Now
//                 </Button>
//               </motion.div>
//             </div>

//             {/* Trust Indicators */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 }}
//               className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-gray-900"
//             >
//               {['Person-Centered Care', '24/7 Support', 'NDIS Registered'].map((indicator, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.4 + index * 0.1 }}
//                   className="flex items-center gap-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full"
//                 >
//                   <CheckCircle className="w-5 h-5 text-green-600" />
//                   <span className="font-semibold text-sm md:text-base">{indicator}</span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;



'use client';

import React from 'react';
import { Heart, Users, Target, Shield, Award, Clock, TrendingUp, Phone } from 'lucide-react';
import { HeroSection } from '@/components/about/HeroSection';
import { StatsGrid } from '@/components/about/StatsGrid';
import { StorySection } from '@/components/about/StorySection';
import { Timeline } from '@/components/about/Timeline';
import { ValuesGrid } from '@/components/about/ValuesGrid';
import { TeamGrid } from '@/components/about/TeamGrid';
import { CTASection } from '@/components/about/CTASection';

const AboutPage = () => {
  // Stats data
  // const stats = [
  //   { 
  //     icon: Clock,
  //     value: '10+', 
  //     label: 'Years Experience',
  //     description: 'Serving our community'
  //   },
  //   { 
  //     icon: Users,
  //     value: '200+', 
  //     label: 'Families Supported',
  //     description: 'Building independence together'
  //   },
  //   { 
  //     icon: Award,
  //     value: '50+', 
  //     label: 'Care Professionals',
  //     description: 'Dedicated to excellence'
  //   },
  //   { 
  //     icon: TrendingUp,
  //     value: '24/7', 
  //     label: 'Available Support',
  //     description: 'We\'re here when you need us'
  //   }
  // ];

  // Story section data
  // const storyParagraphs = [
  //   'Endurakind was founded with a simple yet powerful vision: to create an inclusive community where every person, regardless of ability, can live independently and thrive.',
  //   'Our journey began over a decade ago when our founder recognized the need for truly person-centered disability support services. What started as a small team with big dreams has grown into a comprehensive support network serving hundreds of families across Victoria.',
  //   'Today, we\'re proud to be one of Melbourne\'s most trusted disability support providers, but our core values remain unchanged: compassion, inclusivity, empowerment, and integrity guide everything we do.'
  // ];

    const storyParagraphs = [
    'Endurakind is dedicated to fostering a community that celebrates individuality, inclusion, and human potential. We believe every person deserves the opportunity to live a meaningful, empowered life—regardless of ability, background, or circumstance.',
    'Our mission is to create supportive environments where kindness, understanding, and opportunity thrive. At Endurakind, we are guided by compassion, integrity, and the shared goal of helping each individual live with dignity and purpose.'
  ];

  const storyBadges = [
    { text: 'NDIS Registered' },
    { text: 'Quality Certified' }
  ];

  // Timeline data
  // const milestones = [
  //   {
  //     year: '2014',
  //     title: 'The Beginning',
  //     description: 'Endurakind was founded with a vision to create truly person-centered care in Victoria.'
  //   },
  //   {
  //     year: '2017',
  //     title: 'Growing Impact',
  //     description: 'Expanded our services to support over 100 individuals and families across Melbourne.'
  //   },
  //   {
  //     year: '2020',
  //     title: 'Building Bridges',
  //     description: 'Launched our community programs and 24/7 support services during challenging times.'
  //   },
  //   {
  //     year: '2025',
  //     title: 'Today & Beyond',
  //     description: 'Supporting 200+ families with a team of 50+ dedicated professionals, looking to the future.'
  //   }
  // ];

    const milestones = [
    {
      year: '2025',
      title: 'Our Beginning',
      description: 'Endurakind was founded with the vision to bring empathy-driven, inclusive support to individuals and families across Victoria.'
    },
    {
      year: '2026',
      title: 'Expanding Reach',
      description: 'Growing our network and impact through compassionate care and meaningful partnerships.'
    }
  ];


  // Values data
  const values = [
    {
      icon: Heart,
      title: 'Compassion First',
      description: 'We care deeply about every individual we support, treating everyone with dignity and kindness.',
      color: 'from-pink-500 to-rose-500',
      stat: '100%'
    },
    {
      icon: Users,
      title: 'Inclusive Community',
      description: 'Everyone deserves respect, equal opportunities, and a place where they truly belong.',
      color: 'from-teal-500 to-cyan-500',
      stat: '200+'
    },
    {
      icon: Target,
      title: 'Goal Focused',
      description: 'Helping you achieve independence, reach your goals, and live your best life.',
      color: 'from-amber-500 to-orange-500',
      stat: '500+'
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'Transparent, honest, and ethical in everything we do. Your trust is our priority.',
      color: 'from-blue-500 to-indigo-500',
      stat: '10+'
    }
  ];

  // Team data
  const team = [
    { 
      name: 'Sarah Johnson', 
      role: 'Founder & Director', 
      image: '/images/team/sarah.jpg',
      bio: 'Passionate about creating inclusive communities and empowering individuals.',
      social: {
        linkedin: 'https://linkedin.com',
        email: 'sarah@endurakind.com.au'
      }
    },
    { 
      name: 'Michael Chen', 
      role: 'Support Coordinator', 
      image: '/images/team/michael.jpg',
      bio: 'Dedicated to personalized care plans and client success.',
      social: {
        linkedin: 'https://linkedin.com',
        email: 'michael@endurakind.com.au'
      }
    },
    { 
      name: 'Emma Williams', 
      role: 'Care Specialist', 
      image: '/images/team/emma.jpg',
      bio: 'Expert in disability support services with 8+ years experience.',
      social: {
        linkedin: 'https://linkedin.com',
        email: 'emma@endurakind.com.au'
      }
    },
    { 
      name: 'David Brown', 
      role: 'Community Liaison', 
      image: '/images/team/david.jpg',
      bio: 'Building lasting community connections and partnerships.',
      social: {
        linkedin: 'https://linkedin.com',
        email: 'david@endurakind.com.au'
      }
    }
  ];

  // CTA data
  const ctaButtons = [
    {
      text: 'Get In Touch',
      variant: 'primary' as const,
      onClick: () => window.location.href = '/contact'
    },
    {
      text: 'Call Us Now',
      icon: Phone,
      variant: 'secondary' as const,
      onClick: () => window.location.href = 'tel:0370761066'
    }
  ];

  const trustIndicators = [
    { text: 'Person-Centered Care' },
    { text: '24/7 Support' },
    { text: 'NDIS Registered' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title='About <span class="text-teal-600">Endurakind</span>'
        subtitle='Building bridges to independence through compassionate,<br class="hidden md:block" />person-centered care since 2014'
        // backgroundImage="/images/about/about-hero.jpg"
        backgroundImage="/images/hero/disability1.jpg"
      />

      {/* Stats Section */}
      {/* <StatsGrid 
        stats={stats}
        columns={4}
      /> */}

       {/* About Intro Section (replaces StatsGrid) */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-teal-600">Endurakind</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Endurakind is dedicated to fostering a community that celebrates individuality, inclusion, and human potential.
            We believe every person deserves the opportunity to live a meaningful, empowered life—regardless of ability, background, or circumstance.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Guided by compassion and integrity, we’re building supportive environments where kindness and opportunity thrive for all.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <StorySection
        badge="Our Journey"
        title="Where It All"
        highlightedWord="Began"
        paragraphs={storyParagraphs}
        // image="/images/about/our-story.jpg"
        image="/images/hero/disability2.jpg"
        badges={storyBadges}
        backgroundColor="bg-gray-50"
      />

      {/* Timeline Section */}
      <Timeline
        badge="Our Journey"
        title="Key"
        highlightedWord="Milestones"
        subtitle="A decade of growth, impact, and unwavering commitment to our community"
        milestones={milestones}
        backgroundColor="bg-white"
      />

      {/* Values Section */}
      <ValuesGrid
        badge="What Drives Us"
        title="Our Core"
        highlightedWord="Values"
        subtitle="These principles guide every decision we make and every interaction we have"
        values={values}
        columns={4}
        backgroundColor="bg-gray-50"
      />

      {/* Team Section */}
      <TeamGrid
        badge="The People Behind Our Mission"
        title="Meet Our"
        highlightedWord="Team"
        subtitle="Our dedicated professionals are passionate about making a real difference in people's lives"
        members={team}
        columns={4}
        backgroundColor="bg-white"
      />

      {/* CTA Section */}
      <CTASection
        title='Ready to Start Your <span class="text-white">Journey?</span>'
        subtitle="Contact us today to learn how we can support you or your loved ones"
        buttons={ctaButtons}
        trustIndicators={trustIndicators}
        backgroundColor="amber"
      />
    </div>
  );
};

export default AboutPage;