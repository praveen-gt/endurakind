'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MessageSquare, User, Calendar, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { scrollReveal } from '@/lib/animations';

const reasons = [
  { icon: MessageSquare, title: 'General Inquiry', description: 'Learn more about our services' },
  { icon: User, title: 'New Client', description: 'Start your journey with us' },
  { icon: Calendar, title: 'Book Consultation', description: 'Schedule a free consultation' },
];

const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  email: z.string().email('Please enter a valid email address').toLowerCase().trim(),
  phone: z.string()
    .min(7, 'Please enter a valid phone number')
    .regex(/^\+?[0-9\s\-().]{7,20}$/, 'Please enter a valid phone number'),
  subject: z.string()
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject must be less than 100 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        toast.success('Message Sent Successfully!', {
          description:
            "We'll get back to you within 2 hours during business hours (Mon–Fri, 9AM–5PM AEST).",
          duration: 5000,
        });
        reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Unable to Send Message', {
        description:
          error instanceof Error
            ? error.message
            : 'Failed to send message. Please try again or call us directly.',
        duration: 6000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ Success State
  if (isSubmitted) {
    return (
      <div className="text-center py-12 px-6 lg:pt-0">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Thank You for Getting in Touch!
        </h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Your message has been sent successfully. Kevin or Sam will personally respond within 2 hours
          during business hours (Monday to Friday, 9:00 AM - 5:00 PM AEST).
        </p>
        <div className="space-y-3 mb-8">
          <div className="flex items-center justify-center text-sm text-gray-600">
            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
            Confirmation email sent to your inbox
          </div>
          <div className="flex items-center justify-center text-sm text-gray-600">
            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
            Your inquiry has been assigned a priority status
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Send Another Message
          </Button>
          <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
            <a href="tel:+61493353976">Call Us Now</a>
          </Button>
        </div>
      </div>
    );
  }

  // ✅ Main Form
  return (

          <motion.div
          {...scrollReveal}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you shortly.</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input {...register('name')} placeholder="John Doe" className="h-12" />
                    {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input {...register('email')} placeholder="john@example.com" className="h-12" />
                    {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input {...register('phone')} placeholder="0400 000 000" className="h-12" />
                    {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input {...register('subject')} placeholder="How can we help?" className="h-12" />
                    {errors.subject && <p className="text-sm text-red-600 mt-1">{errors.subject.message}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea {...register('message')} rows={6} placeholder="Tell us about your needs..." />
                  {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white h-14 text-lg rounded-xl group shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  <CheckCircle className="w-4 h-4 inline mr-1 text-teal-600" />
                  Your information is secure and will never be shared.
                </p>
              </form>
            </div>
          </motion.div>
  );
}
