// 'use client';

// import { motion } from 'framer-motion';
// import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react';
// import Link from 'next/link';

// export default function PrivacyPolicyPage() {
//   const sections = [
//     {
//       icon: FileText,
//       title: 'Information We Collect',
//       content: [
//         'Personal identification information (name, email address, phone number)',
//         'Participant information and support plan details',
//         'Health and disability-related information necessary for service delivery',
//         'Communication preferences and service history',
//         'Website usage data and cookies'
//       ]
//     },
//     {
//       icon: Lock,
//       title: 'How We Use Your Information',
//       content: [
//         'To provide and improve our disability support services',
//         'To communicate with you about services, appointments, and updates',
//         'To comply with legal obligations and regulatory requirements',
//         'To process payments and maintain accurate records',
//         'To ensure the safety and quality of our services'
//       ]
//     },
//     {
//       icon: Shield,
//       title: 'Information Protection',
//       content: [
//         'We implement industry-standard security measures to protect your data',
//         'Access to personal information is restricted to authorized personnel only',
//         'All staff are trained in privacy and confidentiality requirements',
//         'We use secure systems for storing and transmitting sensitive information',
//         'Regular security audits and updates to our systems'
//       ]
//     },
//     {
//       icon: Eye,
//       title: 'Information Sharing',
//       content: [
//         'We do not sell or rent your personal information to third parties',
//         'Information may be shared with relevant authorities as required by law',
//         'We may share data with healthcare providers with your consent',
//         'Service providers and contractors bound by confidentiality agreements',
//         'Legal disclosures when required by law or to protect rights and safety'
//       ]
//     }
//   ];

//   return (
//     <div className="bg-white pt-20">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-[#09778e] to-[#016938] py-20 overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
//           <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
//         </div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
//               <Shield className="w-4 h-4 text-white" />
//               <span className="text-sm font-semibold text-white">Your Privacy Matters</span>
//             </div>
            
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//               Privacy Policy
//             </h1>
//             <p className="text-xl text-white/90 leading-relaxed">
//               At Endurakind, we are committed to protecting your privacy and handling your personal information with care and respect.
//             </p>
            
//             <div className="mt-8 text-white/80 text-sm">
//               Last Updated: November 2024
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Introduction */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="max-w-4xl mx-auto"
//           >
//             <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 Endurakind ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website.
//               </p>
//               <p className="text-gray-700 leading-relaxed">
//                 We comply with the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth). By using our services, you consent to the data practices described in this policy.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Content Sections */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto space-y-12">
//             {sections.map((section, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
//               >
//                 <div className="flex items-start gap-4 mb-6">
//                   <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#09778e] to-[#016938] flex items-center justify-center flex-shrink-0">
//                     <section.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
//                   </div>
//                 </div>
                
//                 <ul className="space-y-3">
//                   {section.content.map((item, idx) => (
//                     <li key={idx} className="flex items-start gap-3">
//                       <div className="w-1.5 h-1.5 rounded-full bg-[#09778e] flex-shrink-0 mt-2" />
//                       <span className="text-gray-700 leading-relaxed">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Additional Sections */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto space-y-8">
//             {/* Your Rights */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
//             >
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
//               <div className="space-y-4 text-gray-700">
//                 <p className="leading-relaxed">You have the right to:</p>
//                 <ul className="space-y-2 ml-4">
//                   <li className="flex items-start gap-3">
//                     <span className="text-[#09778e] font-bold">•</span>
//                     <span>Access your personal information we hold</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-[#09778e] font-bold">•</span>
//                     <span>Request correction of inaccurate or incomplete information</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-[#09778e] font-bold">•</span>
//                     <span>Request deletion of your personal information (subject to legal requirements)</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-[#09778e] font-bold">•</span>
//                     <span>Opt-out of marketing communications</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-[#09778e] font-bold">•</span>
//                     <span>Lodge a complaint about our handling of your information</span>
//                   </li>
//                 </ul>
//               </div>
//             </motion.div>

//             {/* Cookies */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
//             >
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us understand how you use our website and improve our services.
//               </p>
//               <p className="text-gray-700 leading-relaxed">
//                 You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
//               </p>
//             </motion.div>

//             {/* Data Retention */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
//             >
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Service records are retained in accordance with applicable legal and regulatory requirements.
//               </p>
//             </motion.div>

//             {/* Changes to Policy */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
//             >
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-16 bg-gradient-to-br from-[#09778e]/5 to-[#016938]/5">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="max-w-3xl mx-auto text-center"
//           >
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Privacy?</h2>
//             <p className="text-gray-700 leading-relaxed mb-8">
//               If you have any questions about this Privacy Policy or our data practices, please contact us:
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="mailto:info@endurakind.com.au"
//                 className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-lg border-2 border-[#09778e] text-[#09778e] font-semibold hover:bg-[#09778e] hover:text-white transition-all"
//               >
//                 <Mail className="w-5 h-5" />
//                 info@endurakind.com.au
//               </a>
//               <a
//                 href="tel:+61493353976"
//                 className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-lg border-2 border-[#09778e] text-[#09778e] font-semibold hover:bg-[#09778e] hover:text-white transition-all"
//               >
//                 <Phone className="w-5 h-5" />
//                 +61 493 353 976
//               </a>
//             </div>

//             <p className="mt-8 text-sm text-gray-600">
//               Endurakind - Melbourne, Victoria, Australia
//             </p>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';


export default function PrivacyPolicy() {
  return (
    <div className="bg-white pt-20 lg:pt-24">
       {/* Hero Section */}
       <section className="relative bg-gradient-to-br from-[#09778e] to-[#016938] py-20 overflow-hidden">
         <div className="absolute inset-0 opacity-10">
           <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
           <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
         </div>
      
         <div className="container mx-auto px-4 relative z-10">
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">Your Privacy Matters</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              At Endurakind, we are committed to protecting your privacy and handling your personal information with care and respect.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction:</h2>
          <p className="text-gray-700 leading-relaxed">
            "Welcome to Endurakind. Your privacy and trust are vital to us. This Privacy Policy outlines how we handle the personal information you share with us."
          </p>
        </section>

        {/* Information Collection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Collection:</h2>
          <p className="text-gray-700 leading-relaxed">
            "We collect personal data such as names, email addresses, and interaction records. This information is gathered through our services, website interactions, and direct communications."
          </p>
        </section>

        {/* Use of Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Information:</h2>
          <p className="text-gray-700 leading-relaxed">
            "Your data is primarily used to provide and improve our services. We also use it for communication purposes, to respond to inquiries, and to enhance user experience on our website."
          </p>
        </section>

        {/* Data Sharing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing and Disclosure:</h2>
          <p className="text-gray-700 leading-relaxed">
            "We respect your privacy and only share your information with third parties when necessary for service provision, or as required by law. We ensure these parties respect privacy in line with this policy."
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security:</h2>
          <p className="text-gray-700 leading-relaxed">
            "To safeguard your personal information, we employ strict security measures. These include technical and organizational methods to prevent unauthorized access, loss, or misuse."
          </p>
        </section>

        {/* User Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">User Rights:</h2>
          <p className="text-gray-700 leading-relaxed">
            "You have the right to access, update, or delete your personal information that we hold. You can also object to or restrict certain processing activities."
          </p>
        </section>

        {/* Policy Updates */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates:</h2>
          <p className="text-gray-700 leading-relaxed">
            "We may update this policy occasionally. We will notify you of significant changes and post the updated policy on our website."
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information:</h2>
          <p className="text-gray-700 leading-relaxed">
            "If you have any questions about this policy or our privacy practices, please contact us at{' '}
            <a 
              href="mailto:info@endurakind.com.au" 
              className="text-[#09778e] hover:text-[#016938] font-semibold underline"
            >
              info@endurakind.com.au
            </a>
            "
          </p>
        </section>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            Last Updated: November 2024
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Endurakind - Melbourne, Victoria, Australia
          </p>
        </div>
      </div>
    </div>
  );
}