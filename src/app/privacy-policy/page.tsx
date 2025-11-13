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
            Last Updated: July 2025
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Endurakind - Melbourne, Victoria, Australia
          </p>
        </div>
      </div>
    </div>
  );
}