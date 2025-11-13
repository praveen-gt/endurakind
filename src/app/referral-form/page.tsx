// 'use client';

// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { motion } from 'framer-motion';
// import { CheckCircle, Send, UserPlus, Users, Heart } from 'lucide-react';

// interface ReferralFormData {
//   // Referrer Information
//   referrerName: string;
//   referrerEmail: string;
//   referrerPhone: string;
//   referrerOrganization: string;
//   referrerRelationship: string;

//   // Participant Information
//   participantFirstName: string;
//   participantLastName: string;
//   participantEmail: string;
//   participantPhone: string;
//   participantDOB: string;
//   participantAddress: string;

//   // Support Needs
//   servicesRequired: string[];
//   supportNeeds: string;
//   urgency: string;

//   // Additional Information
//   additionalInfo: string;
//   consentGiven: boolean;
// }

// interface FormErrors {
//   [key: string]: string;
// }

// export default function ReferralForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
// const [formData, setFormData] = useState<ReferralFormData>({
//     // Referrer Information
//     referrerName: '',
//     referrerEmail: '',
//     referrerPhone: '',
//     referrerOrganization: '',
//     referrerRelationship: '',

//     // Participant Information
//     participantFirstName: '',
//     participantLastName: '',
//     participantEmail: '',
//     participantPhone: '',
//     participantDOB: '',
//     participantAddress: '',

//     // Support Needs
//     servicesRequired: [],
//     supportNeeds: '',
//     urgency: '',

//     // Additional Information
//     additionalInfo: '',
//     consentGiven: false,
//   });

//   const [errors, setErrors] = useState<FormErrors>({});

//   const services = [
//     'Assistance with Daily Activities',
//     'Social & Community Participation',
//     'Supported Independent Living (SIL)',
//     'Short Term Accommodation (Respite)',
//     'Support Coordination',
//   ];

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type } = e.target;
//     const checked = (e.target as HTMLInputElement).checked;

//     // Only allow numbers for phone fields
//   if (name === 'referrerPhone' || name === 'participantPhone') {
//     // Remove all non-numeric characters
//     const numericValue = value.replace(/\D/g, '');
//     setFormData((prev) => ({
//       ...prev,
//       [name]: numericValue,
//     }));
//     return;
//   }

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleServiceToggle = (service: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       servicesRequired: prev.servicesRequired.includes(service)
//         ? prev.servicesRequired.filter((s) => s !== service)
//         : [...prev.servicesRequired, service],
//     }));
//   };

//  const validateForm = (): boolean => {
//     const newErrors: FormErrors = {};

//     // Referrer
//     if (!formData.referrerName.trim())
//       newErrors.referrerName = 'Referrer name is required';
//     if (!formData.referrerEmail.trim())
//       newErrors.referrerEmail = 'Referrer email is required';
//     if (!formData.referrerPhone.trim())
//       newErrors.referrerPhone = 'Referrer phone is required';

//     // Participant
//     if (!formData.participantFirstName.trim())
//       newErrors.participantFirstName = 'First name is required';
//     if (!formData.participantLastName.trim())
//       newErrors.participantLastName = 'Last name is required';

//     // Services
//     if (formData.servicesRequired.length === 0)
//       newErrors.servicesRequired = 'Please select at least one service';

//     // Consent
//     if (!formData.consentGiven)
//       newErrors.consentGiven = 'Consent is required to submit referral';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };


//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const response = await fetch('/api/referral', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setIsSubmitted(true);
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       } else {
//         throw new Error('Failed to submit referral');
//       }
//     } catch (error) {
//       console.error('Form submission error:', error);
//       alert('Failed to submit referral. Please try again or call us directly.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Success State
//   if (isSubmitted) {
//     return (
//       <div className="min-h-screen bg-white pt-20">
//         <div className="container mx-auto px-4 py-16">
//           <div className="max-w-2xl mx-auto text-center">
//             <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
//               <CheckCircle className="h-12 w-12 text-green-600" />
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Referral Submitted Successfully!
//             </h2>
//             <p className="text-gray-600 mb-6 text-lg">
//               Thank you for your referral. Our team will review the information and contact the participant within 24-48 hours.
//             </p>
//             <div className="space-y-3 mb-8">
//               <div className="flex items-center justify-center text-sm text-gray-600">
//                 <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
//                 Confirmation email sent to referrer
//               </div>
//               <div className="flex items-center justify-center text-sm text-gray-600">
//                 <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
//                 Referral assigned for immediate review
//               </div>
//             </div>
//             <button
//               onClick={() => {
//                 setIsSubmitted(false);
//                 setFormData({
//                   referrerName: '',
//                   referrerEmail: '',
//                   referrerPhone: '',
//                   referrerOrganization: '',
//                   referrerRelationship: '',
//                   participantFirstName: '',
//                   participantLastName: '',
//                   participantEmail: '',
//                   participantPhone: '',
//                   participantDOB: '',
//                   participantAddress: '',
//                   servicesRequired: [],
//                   supportNeeds: '',
//                   urgency: '',
//                   additionalInfo: '',
//                   consentGiven: false,
//                 });
//               }}
//               className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-all"
//             >
//               Submit Another Referral
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white pt-20">
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
//               <UserPlus className="w-4 h-4 text-white" />
//               <span className="text-sm font-semibold text-white">Make a Referral</span>
//             </div>

//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//               Referral Form
//             </h1>
//             <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
//               Help connect individuals with the support they need. Complete this form to refer someone to our services.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Why Refer Section */}
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//          <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6">
//             <div className="text-center p-6 bg-white rounded-xl shadow-sm">
//               <Users className="w-10 h-10 text-teal-600 mx-auto mb-3" />
//               <h3 className="font-bold text-gray-900 mb-2">Expert Care</h3>
//               <p className="text-sm text-gray-600">Professional support from experienced staff</p>
//             </div>
//             <div className="text-center p-6 bg-white rounded-xl shadow-sm">
//               <Heart className="w-10 h-10 text-teal-600 mx-auto mb-3" />
//               <h3 className="font-bold text-gray-900 mb-2">Person-Centered</h3>
//               <p className="text-sm text-gray-600">Tailored support plans for individual needs</p>
//             </div>
//             <div className="text-center p-6 bg-white rounded-xl shadow-sm">
//               <CheckCircle className="w-10 h-10 text-teal-600 mx-auto mb-3" />
//               <h3 className="font-bold text-gray-900 mb-2">Quick Response</h3>
//               <p className="text-sm text-gray-600">We'll contact the participant within 24-48 hours</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Form Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">

//               {/* Referrer Information */}
//               <div className="mb-10">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
//                   Referrer Information
//                 </h2>
//                 <div className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Your Name *
//                       </label>
//                       <input
//                         type="text"
//                         name="referrerName"
//                         value={formData.referrerName}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                         placeholder="John Smith"
//                       />
//                       {errors.referrerName && <p className="text-sm text-red-600 mt-1">{errors.referrerName}</p>}
//                     </div>
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Your Email *
//                       </label>
//                       <input
//                         type="email"
//                         name="referrerEmail"
//                         value={formData.referrerEmail}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                         placeholder="john@example.com"
//                       />
//                       {errors.referrerEmail && <p className="text-sm text-red-600 mt-1">{errors.referrerEmail}</p>}
//                     </div>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Your Phone *
//                       </label>
//                       <input
//                         type="tel"
//                         name="referrerPhone"
//                         value={formData.referrerPhone}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                         placeholder="0400 000 000"
//                       />
//                       {errors.referrerPhone && <p className="text-sm text-red-600 mt-1">{errors.referrerPhone}</p>}
//                     </div>
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Organization (Optional)
//                       </label>
//                       <input
//                         type="text"
//                         name="referrerOrganization"
//                         value={formData.referrerOrganization}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                         placeholder="Healthcare Provider"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Relationship to Participant
//                     </label>
//                     <select
//                       name="referrerRelationship"
//                       value={formData.referrerRelationship}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                     >
//                       <option value="">Select relationship</option>
//                       <option value="family">Family Member</option>
//                       <option value="friend">Friend</option>
//                       <option value="healthcare">Healthcare Professional</option>
//                       <option value="support-coordinator">Support Coordinator</option>
//                       <option value="social-worker">Social Worker</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Participant Information */}
//               <div className="mb-10">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
//                   Participant Information
//                 </h2>
//                 <div className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         First Name *
//                       </label>
//                       <input
//                         type="text"
//                         name="participantFirstName"
//                         value={formData.participantFirstName}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                         placeholder="Jane"
//                       />
//                       {errors.participantFirstName && <p className="text-sm text-red-600 mt-1">{errors.participantFirstName}</p>}
//                     </div>
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Last Name *
//                       </label>
//                       <input
//                         type="text"
//                         name="participantLastName"
//                         value={formData.participantLastName}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                         placeholder="Doe"
//                       />
//                       {errors.participantLastName && <p className="text-sm text-red-600 mt-1">{errors.participantLastName}</p>}
//                     </div>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         name="participantEmail"
//                         value={formData.participantEmail}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                         placeholder="jane@example.com"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Phone
//                       </label>
//                       <input
//                         type="tel"
//                         name="participantPhone"
//                         value={formData.participantPhone}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                         placeholder="0400 000 000"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Date of Birth
//                       </label>
//                       <input
//                         type="date"
//                         name="participantDOB"
//                         value={formData.participantDOB}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Address
//                     </label>
//                     <input
//                       type="text"
//                       name="participantAddress"
//                       value={formData.participantAddress}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                       placeholder="123 Main Street, Melbourne VIC 3000"
//                     />
//                   </div>

//                 </div>
//               </div>

//               {/* Services Required */}
//               <div className="mb-10">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
//                   Services Required
//                 </h2>
//                 <div className="space-y-3">
//                   {services.map((service) => (
//                     <label
//                       key={service}
//                       className="flex gap-2 items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-teal-500 transition-all"
//                     >
//                       <input
//                         type="checkbox"
//                         checked={formData.servicesRequired.includes(service)}
//                         onChange={() => handleServiceToggle(service)}
//                         className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
//                       />
//                       <span className="ml-3 font-medium text-gray-700">{service}</span>
//                     </label>
//                   ))}
//                   {errors.servicesRequired && <p className="text-sm text-red-600 mt-2">{errors.servicesRequired}</p>}
//                 </div>
//               </div>

//               {/* Support Needs & Urgency */}
//               <div className="mb-10">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
//                   Support Details
//                 </h2>
//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Describe Support Needs
//                     </label>
//                     <textarea
//                       name="supportNeeds"
//                       value={formData.supportNeeds}
//                       onChange={handleChange}
//                       rows={5}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                       placeholder="Please describe the specific support needs, any current challenges, and goals..."
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Urgency Level
//                     </label>
//                     <select
//                       name="urgency"
//                       value={formData.urgency}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                     >
//                       <option value="">Select urgency level</option>
//                       <option value="urgent">Urgent (Immediate support needed)</option>
//                       <option value="high">High (Within 1 week)</option>
//                       <option value="medium">Medium (Within 2-4 weeks)</option>
//                       <option value="low">Low (Flexible timeline)</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Additional Information
//                     </label>
//                     <textarea
//                       name="additionalInfo"
//                       value={formData.additionalInfo}
//                       onChange={handleChange}
//                       rows={4}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                       placeholder="Any other relevant information about the participant's needs, preferences, or circumstances..."
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Consent */}
//               <div className="mb-8">
//                 <label className="flex gap-2 items-start p-4 bg-teal-50 border-2 border-teal-200 rounded-lg cursor-pointer">
//                   <input
//                     type="checkbox"
//                     name="consentGiven"
//                     checked={formData.consentGiven}
//                     onChange={handleChange}
//                     className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500 mt-0.5"
//                   />
//                   <span className="ml-3 text-sm text-gray-700">
//                     I confirm that I have obtained consent from the participant (or their legal guardian) to share their information with Endurakind for the purpose of assessing their eligibility for support services. *
//                   </span>
//                 </label>
//                 {errors.consentGiven && <p className="text-sm text-red-600 mt-2">{errors.consentGiven}</p>}
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-2"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <motion.div
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
//                       className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//                     />
//                     Submitting Referral...
//                   </>
//                 ) : (
//                   <>
//                     <Send className="w-5 h-5" />
//                     Submit Referral
//                   </>
//                 )}
//               </button>

//               <p className="text-sm text-gray-500 text-center mt-4">
//                 <CheckCircle className="w-4 h-4 inline mr-1 text-teal-600" />
//                 All information is kept strictly confidential
//               </p>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle, Send, UserPlus, Users, Heart } from 'lucide-react';
import { toast } from 'sonner';

// ✅ Zod Schema
const referralFormSchema = z.object({
  // Referrer Information
  referrerName: z.string().min(2, 'Referrer name is required'),
  referrerEmail: z.string().email('Please enter a valid email address'),
  referrerPhone: z
    .string()
    .min(7, 'Please enter a valid phone number')
    .regex(/^\+?[0-9\s\-().]{7,20}$/, 'Please enter a valid phone number'),
  referrerOrganization: z.string().optional(),
  referrerRelationship: z.string().optional(),

  // Participant Information
  participantFirstName: z.string().min(2, 'First name is required'),
  participantLastName: z.string().min(2, 'Last name is required'),
  participantEmail: z.string().email('Invalid email').optional().or(z.literal('')),
  participantPhone: z
    .string()
    .regex(/^\+?[0-9\s\-().]{0,20}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  participantDOB: z.string().optional(),
  participantAddress: z.string().optional(),

  // Support Needs
  servicesRequired: z
    .array(z.string())
    .min(1, 'Please select at least one service'),
  supportNeeds: z.string().optional(),
  urgency: z.string().optional(),

  // Additional Info
  additionalInfo: z.string().optional(),
  consentGiven: z.literal(true, {
    message: 'Consent is required to submit referral',
  }),
});

type ReferralFormData = z.infer<typeof referralFormSchema>;

export default function ReferralForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<ReferralFormData>({
    resolver: zodResolver(referralFormSchema),
    defaultValues: {
      servicesRequired: [],
      consentGiven: true,
    },
  });

  const services = [
    'Assistance with Daily Activities',
    'Social & Community Participation',
    'Supported Independent Living (SIL)',
    'Short Term Accommodation (Respite)',
    'Support Coordination',
  ];

  const onSubmit = async (data: ReferralFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success('Referral submitted successfully!', {
          description: 'We’ll contact the participant within 24–48 hours.',
          duration: 6000,
        });
        reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        toast.error('Failed to submit referral. Please try again.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ Success Screen
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Referral Submitted Successfully!
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Thank you for your referral. Our team will review the information and contact the participant within 24–48 hours.
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-center justify-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
              Confirmation email sent to referrer
            </div>
            <div className="flex items-center justify-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
              Referral assigned for immediate review
            </div>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false);
              reset();
            }}
            className="hover:cursor-pointer px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-all"
          >
            Submit Another Referral
          </button>
        </div>
      </div>
    );
  }

  // ✅ Main Form
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#09778e] to-[#016938] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <UserPlus className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">Make a Referral</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Referral Form
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Help connect individuals with the support they need. Complete this form to refer someone to our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Refer Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <Users className="w-10 h-10 text-teal-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Expert Care</h3>
            <p className="text-sm text-gray-600">Professional support from experienced staff</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <Heart className="w-10 h-10 text-teal-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Person-Centered</h3>
            <p className="text-sm text-gray-600">Tailored support plans for individual needs</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <CheckCircle className="w-10 h-10 text-teal-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Quick Response</h3>
            <p className="text-sm text-gray-600">We’ll contact the participant within 24–48 hours</p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 space-y-10"
          >
            {/* Referrer Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
                Referrer Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-semibold text-gray-700">Your Name *</label>
                  <input {...register('referrerName')} placeholder="John Smith" className="w-full px-4 py-3 border rounded-lg" />
                  {errors.referrerName && <p className="text-sm text-red-600 mt-1">{errors.referrerName.message}</p>}
                </div>
                <div>
                  <label className="font-semibold text-gray-700">Your Email *</label>
                  <input {...register('referrerEmail')} placeholder="john@example.com" className="w-full px-4 py-3 border rounded-lg" />
                  {errors.referrerEmail && <p className="text-sm text-red-600 mt-1">{errors.referrerEmail.message}</p>}
                </div>
                <div>
                  <label className="font-semibold text-gray-700">Your Phone *</label>
                  <input
                    {...register('referrerPhone')}
                    inputMode='numeric'
                    placeholder="0400 000 000"
                    className="w-full px-4 py-3 border rounded-lg"
                    onInput={(e) => {
                      const target = e.target as HTMLInputElement;
                      target.value = target.value.replace(/\D/g, ''); // removes anything not a digit
                    }} />
                  {errors.referrerPhone && <p className="text-sm text-red-600 mt-1">{errors.referrerPhone.message}</p>}
                </div>
                <div>
                  <label className="font-semibold text-gray-700">Organization (Optional)</label>
                  <input {...register('referrerOrganization')} placeholder="Healthcare Provider" className="w-full px-4 py-3 border rounded-lg" />
                </div>
              </div>

              <div className="mt-6">
                <label className="font-semibold text-gray-700">Relationship to Participant</label>
                <select {...register('referrerRelationship')} className="w-full px-4 py-3 border rounded-lg">
                  <option value="">Select relationship</option>
                  <option value="Family">Family Member</option>
                  <option value="Friend">Friend</option>
                  <option value="Healthcare">Healthcare Professional</option>
                  <option value="Support-coordinator">Support Coordinator</option>
                  <option value="Social-worker">Social Worker</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Participant Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
                Participant Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-semibold text-gray-700">First Name *</label>
                  <input {...register('participantFirstName')} placeholder="Jane" className="w-full px-4 py-3 border rounded-lg" />
                  {errors.participantFirstName && <p className="text-sm text-red-600 mt-1">{errors.participantFirstName.message}</p>}
                </div>
                <div>
                  <label className="font-semibold text-gray-700">Last Name *</label>
                  <input {...register('participantLastName')} placeholder="Doe" className="w-full px-4 py-3 border rounded-lg" />
                  {errors.participantLastName && <p className="text-sm text-red-600 mt-1">{errors.participantLastName.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="font-semibold text-gray-700">Email</label>
                  <input {...register('participantEmail')} placeholder="jane@example.com" className="w-full px-4 py-3 border rounded-lg" />
                </div>
                <div>
                  <label className="font-semibold text-gray-700">Phone</label>
                  <input {...register('participantPhone')} 
                                      inputMode='numeric'
                                      placeholder="0400 000 000" className="w-full px-4 py-3 border rounded-lg"
                                                      onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  target.value = target.value.replace(/\D/g, ''); // removes anything not a digit
                }}
                                      />
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-semibold text-gray-700">Date of Birth</label>
                  <input type="date" {...register('participantDOB')} className="w-full px-4 py-3 border rounded-lg" />
                </div>
                <div>
                  <label className="font-semibold text-gray-700">Address</label>
                  <input {...register('participantAddress')} placeholder="123 Main Street, Melbourne VIC 3000" className="w-full px-4 py-3 border rounded-lg" />
                </div>
              </div>
            </div>

            {/* Services Required */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
                Services Required
              </h2>
              <div className="space-y-3">
                {services.map((service) => (
                  <label key={service} className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-teal-500 transition-all">
                    <input
                      type="checkbox"
                      checked={watch('servicesRequired').includes(service)}
                      onChange={(e) => {
                        const current = watch('servicesRequired');
                        if (e.target.checked) setValue('servicesRequired', [...current, service]);
                        else setValue('servicesRequired', current.filter((s) => s !== service));
                      }}
                      className="w-5 h-5 text-teal-600"
                    />
                    <span>{service}</span>
                  </label>
                ))}
                {errors.servicesRequired && (
                  <p className="text-sm text-red-600 mt-1">{errors.servicesRequired.message}</p>
                )}
              </div>
            </div>

            {/* Support Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-600">
                Support Details
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="font-semibold text-gray-700">Describe Support Needs</label>
                  <textarea {...register('supportNeeds')} rows={5} placeholder="Please describe support needs..." className="w-full px-4 py-3 border rounded-lg" />
                </div>
                <div>
                  <label className="font-semibold text-gray-700">Urgency Level</label>
                  <select {...register('urgency')} className="w-full px-4 py-3 border rounded-lg">
                    <option value="">Select urgency level</option>
                    <option value="Urgent">Urgent (Immediate support)</option>
                    <option value="High">High (Within 1 week)</option>
                    <option value="Medium">Medium (Within 2–4 weeks)</option>
                    <option value="Low">Low (Flexible timeline)</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold text-gray-700">Additional Information</label>
                  <textarea {...register('additionalInfo')} rows={4} placeholder="Any other relevant info..." className="w-full px-4 py-3 border rounded-lg" />
                </div>
              </div>
            </div>

            {/* Consent */}
            <div>
              <label className="flex gap-3 items-start p-4 bg-teal-50 border-2 border-teal-200 rounded-lg">
                <input type="checkbox" {...register('consentGiven')} className="w-5 h-5 mt-1 text-teal-600" />
                <span className="text-sm text-gray-700">
                  I confirm that I have obtained consent from the participant (or their legal guardian) to share their information with Endurakind. *
                </span>
              </label>
              {errors.consentGiven && (
                <p className="text-sm text-red-600 mt-2">{errors.consentGiven.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="hover:cursor-pointer w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Submitting Referral...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Referral
                </>
              )}
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              <CheckCircle className="w-4 h-4 inline mr-1 text-teal-600" />
              All information is kept strictly confidential
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
