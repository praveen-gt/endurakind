'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function TermsAndConditions() {
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
                            <span className="text-sm font-semibold text-white">Our Terms</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Terms and Conditions
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Please read these terms carefully before using our services
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
                        "Welcome to Endurakind. These Terms and Conditions outline the rules and guidelines for using our website and services. By accessing our services, you agree to comply with these terms."
                    </p>
                </section>

                {/* Use of Services */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Services:</h2>
                    <p className="text-gray-700 leading-relaxed">
                        "Our services are intended for personal, non-commercial use. You agree not to use our services for unlawful purposes or in a way that may disrupt or damage our services."
                    </p>
                </section>

                {/* User Responsibilities */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities:</h2>
                    <p className="text-gray-700 leading-relaxed">
                        "As a user, you are responsible for providing accurate and current information. You must also maintain the confidentiality of your account details and accept responsibility for all activities under your account."
                    </p>
                </section>

                {/* Intellectual Property */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property:</h2>
                    <p className="text-gray-700 leading-relaxed">
                        "All content on our website, including text, graphics, logos, and images, is owned by Endurakind and is protected by intellectual property laws. Unauthorized use of our content is strictly prohibited."
                    </p>
                </section>

                {/* Privacy */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy:</h2>
                    <p className="text-gray-700 leading-relaxed">
                        "Your privacy is important to us. Our Privacy Policy, which is part of these Terms, describes how we collect, use, and protect your personal data."
                    </p>
                </section>

                {/* Limitation of Liability */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability:</h2>
                    <p className="text-gray-700 leading-relaxed">
                        "Endurakind will not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services."
                    </p>
                </section>

                {/* Amendments to Terms */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Amendments to Terms:</h2>
                    <p className="text-gray-700 leading-relaxed">
                        "We reserve the right to modify these Terms at any time. We will provide notice of changes, and your continued use of our services will constitute acceptance of the modified terms."
                    </p>
                </section>

                {/* Governing Law */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law:</h2>
                    <p className="text-gray-700 leading-relaxed">
                        "These Terms are governed by the laws of Victoria, Australia. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts of Victoria, Australia."
                    </p>
                </section>

                {/* Contact Information */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information:</h2>
                    <p className="text-gray-700 leading-relaxed">
                        "If you have any questions or concerns about these Terms, please contact us at{' '}
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