// 'use client';

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Phone, Mail, MapPin, Clock, Send, CheckCircle, 
//   MessageSquare, User, Calendar, ArrowRight
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import Image from 'next/image';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     console.log('Form submitted:', formData);
//     setIsSubmitting(false);
    
//     // Reset form
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       subject: '',
//       message: ''
//     });
//   };

//   const contactInfo = [
//     {
//       icon: Phone,
//       title: 'Phone',
//       details: '+61493353976',
//       subtext: 'Mon-Fri, 9am-5pm',
//       color: 'from-teal-500 to-cyan-500'
//     },
//     {
//       icon: Mail,
//       title: 'Email',
//       details: 'info@endurakind.com.au',
//       subtext: 'We reply within 24 hours',
//       color: 'from-blue-500 to-indigo-500'
//     },
//     {
//       icon: MapPin,
//       title: 'Location',
//       details: 'Melbourne, Victoria',
//       subtext: 'Serving all of Victoria',
//       color: 'from-amber-500 to-orange-500'
//     },
//     {
//       icon: Clock,
//       title: 'Support Hours',
//       details: '24/7 Available',
//       subtext: 'Emergency support anytime',
//       color: 'from-pink-500 to-rose-500'
//     }
//   ];

//   const reasons = [
//     {
//       icon: MessageSquare,
//       title: 'General Inquiry',
//       description: 'Learn more about our services'
//     },
//     {
//       icon: User,
//       title: 'New Client',
//       description: 'Start your journey with us'
//     },
//     {
//       icon: Calendar,
//       title: 'Book Consultation',
//       description: 'Schedule a free consultation'
//     }
//   ];

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
//         <div className="absolute inset-0 bg-black">
//           <Image
//             src="/images/contact/contact-hero.jpg"
//             alt="Contact Endurakind"
//             fill
//             priority
//             className="object-cover"
//             quality={90}
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white/95" />
//         </div>

//         <div className="container-custom relative z-10 py-20">
//           <div className="max-w-4xl mx-auto text-center">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               className="inline-block mb-6"
//             >
//               <div className="bg-teal-600/10 backdrop-blur-md p-4 rounded-3xl">
//                 <MessageSquare className="w-12 h-12 text-teal-600" />
//               </div>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
//             >
//               Get In <span className="text-teal-600">Touch</span>
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
//               className="text-xl text-gray-700 font-light"
//             >
//               We're here to help. Reach out to us anytime and we'll respond as soon as possible.
//             </motion.p>
//           </div>
//         </div>

//         {/* Wavy Bottom */}
//         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
//           <svg className="relative block w-full h-16 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" />
//           </svg>
//         </div>
//       </section>

//       {/* Contact Info Cards */}
//       <section className="py-16 bg-white">
//         <div className="container-custom">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {contactInfo.map((info, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center border border-gray-100"
//               >
//                 <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
//                   <info.icon className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
//                 <p className="text-teal-600 font-semibold mb-1">{info.details}</p>
//                 <p className="text-sm text-gray-600">{info.subtext}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Main Contact Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
//             {/* Left Side - Why Contact Us */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="lg:col-span-2 space-y-8"
//             >
//               <div>
//                 <div className="inline-block mb-4">
//                   <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
//                     Why Contact Us
//                   </span>
//                 </div>
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
//                   We're Here to <span className="text-teal-600">Help</span>
//                 </h2>
//                 <p className="text-gray-600 leading-relaxed">
//                   Whether you're looking for information about our services, want to schedule a consultation, 
//                   or have a question, our friendly team is ready to assist you.
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 {reasons.map((reason, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1 }}
//                     className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow"
//                   >
//                     <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                       <reason.icon className="w-6 h-6 text-teal-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-gray-900 mb-1">{reason.title}</h3>
//                       <p className="text-sm text-gray-600">{reason.description}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Quick Stats */}
//               <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-6 rounded-2xl text-white">
//                 <h3 className="font-bold text-xl mb-4">Quick Response</h3>
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-3">
//                     <CheckCircle className="w-5 h-5 flex-shrink-0" />
//                     <span className="text-sm">Average response time: 2 hours</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <CheckCircle className="w-5 h-5 flex-shrink-0" />
//                     <span className="text-sm">24/7 emergency support available</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <CheckCircle className="w-5 h-5 flex-shrink-0" />
//                     <span className="text-sm">Free initial consultation</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right Side - Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="lg:col-span-3"
//             >
//               <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
//                 <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you shortly.</p>

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
//                         Full Name *
//                       </Label>
//                       <Input
//                         id="name"
//                         name="name"
//                         type="text"
//                         required
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="John Doe"
//                         className="h-12 bg-gray-50 border-gray-300 focus:border-teal-600 focus:ring-teal-600"
//                       />
//                     </div>

//                     <div>
//                       <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
//                         Email Address *
//                       </Label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         required
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="john@example.com"
//                         className="h-12 bg-gray-50 border-gray-300 focus:border-teal-600 focus:ring-teal-600"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
//                         Phone Number
//                       </Label>
//                       <Input
//                         id="phone"
//                         name="phone"
//                         type="tel"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="0400 000 000"
//                         className="h-12 bg-gray-50 border-gray-300 focus:border-teal-600 focus:ring-teal-600"
//                       />
//                     </div>

//                     <div>
//                       <Label htmlFor="subject" className="text-gray-700 font-medium mb-2 block">
//                         Subject
//                       </Label>
//                       <Input
//                         id="subject"
//                         name="subject"
//                         type="text"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         placeholder="How can we help?"
//                         className="h-12 bg-gray-50 border-gray-300 focus:border-teal-600 focus:ring-teal-600"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
//                       Message *
//                     </Label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       required
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Tell us about your needs and how we can help you..."
//                       rows={6}
//                       className="bg-gray-50 border-gray-300 focus:border-teal-600 focus:ring-teal-600 resize-none"
//                     />
//                   </div>

//                   <Button 
//                     type="submit" 
//                     disabled={isSubmitting}
//                     size="lg"
//                     className="w-full bg-teal-600 hover:bg-teal-700 text-white h-14 text-lg rounded-xl group shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <motion.div
//                           animate={{ rotate: 360 }}
//                           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                           className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
//                         />
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                         Send Message
//                       </>
//                     )}
//                   </Button>

//                   <p className="text-sm text-gray-500 text-center">
//                     <CheckCircle className="w-4 h-4 inline mr-1 text-teal-600" />
//                     Your information is secure and will never be shared.
//                   </p>
//                 </form>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section (Optional) */}
//       <section className="py-20 bg-white">
//         <div className="container-custom">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <div className="inline-block mb-4">
//               <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
//                 Visit Us
//               </span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
//               Our <span className="text-teal-600">Location</span>
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               We're proudly based in Melbourne, serving communities across Victoria
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="rounded-3xl overflow-hidden shadow-2xl h-[400px] bg-gray-200 relative"
//           >
//             {/* Placeholder for map - replace with actual Google Maps embed */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="text-center">
//                 <MapPin className="w-16 h-16 text-teal-600 mx-auto mb-4" />
//                 <p className="text-xl font-semibold text-gray-900">Melbourne, Victoria</p>
//                 <p className="text-gray-600">Serving all of Victoria</p>
//               </div>
//             </div>
//             {/* Replace above with actual Google Maps iframe */}
//             {/* <iframe
//               src="YOUR_GOOGLE_MAPS_EMBED_URL"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe> */}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative py-20 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
//         </div>

//         <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
//           <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" />
//           </svg>
//         </div>

//         <div className="container-custom relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center max-w-3xl mx-auto"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
//               Prefer to Talk Directly?
//             </h2>
//             <p className="text-xl text-gray-800 mb-8">
//               Our team is ready to answer your questions and discuss how we can support you
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button 
//                   size="lg"
//                   className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-7 text-lg rounded-2xl shadow-2xl min-w-[200px]"
//                 >
//                   <Phone className="mr-2 w-5 h-5" />
//                   +61493353976
//                 </Button>
//               </motion.div>
              
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button 
//                   size="lg"
//                   variant="outline"
//                   className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-900 px-10 py-7 text-lg rounded-2xl shadow-xl min-w-[200px]"
//                 >
//                   <Mail className="mr-2 w-5 h-5" />
//                   Email Us
//                 </Button>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactPage;


import HeroSection from '@/components/contact/HeroSection';
import ContactInfoSection from '@/components/contact/ContactInfoSection';
import ContactMainSection from '@/components/contact/ContactMainSection';
import MapSection from '@/components/contact/MapSection';
import CTASection from '@/components/contact/CTASection';

export default function ContactPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ContactInfoSection />
      <ContactMainSection />
      <MapSection />
      <CTASection />
    </div>
  );
}
