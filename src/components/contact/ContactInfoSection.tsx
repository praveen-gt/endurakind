'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '+61493353976',
    subtext: 'Mon-Fri, 9am-5pm',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'info@endurakind.com.au',
    subtext: 'We reply within 24 hours',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: MapPin,
    title: 'Location',
    details: 'Melbourne, Victoria',
    subtext: 'Serving all of Victoria',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Clock,
    title: 'Support Hours',
    details: '24/7 Available',
    subtext: 'Emergency support anytime',
    color: 'from-pink-500 to-rose-500'
  }
];

export default function ContactInfoSection() {
  return (
    <section className="py-16 bg-white">
         <div className="container-custom">
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {contactInfo.map((info, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 whileHover={{ y: -5 }}
                 className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center border border-gray-100"
               >
                 <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                   <info.icon className="w-7 h-7 text-white" />
                 </div>
                 <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                 <p className="text-teal-600 font-semibold mb-1">{info.details}</p>
                 <p className="text-sm text-gray-600">{info.subtext}</p>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
  );
}
