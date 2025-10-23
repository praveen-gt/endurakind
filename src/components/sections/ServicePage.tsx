'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Phone, Calendar, Shield, Award,
  Users, Clock, Target, Heart, Sparkles, TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceFeature {
  title: string;
  description: string;
  icon?: any;
}

interface ServiceBenefit {
  title: string;
  description: string;
}

interface ServicePageProps {
  service: {
    id: string;
    title: string;
    shortTitle: string;
    description: string;
    longDescription?: string;
    features: string[];
    detailedFeatures?: ServiceFeature[];
    benefits?: ServiceBenefit[];
    process?: {
      step: number;
      title: string;
      description: string;
    }[];
    image?: string;
    heroImage?: string;
    color?: string;
  };
}

const ServicePage = ({ service }: ServicePageProps) => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: featuresScroll } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"]
  });

  const heroY = useTransform(heroScroll, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroScroll, [0, 0.5, 1], [1, 0.8, 0.6]);
  const featuresY = useTransform(featuresScroll, [0, 1], [100, -100]);

  // Color mappings
  const colorSchemes = {
    primary: {
      gradient: 'from-teal-600 to-cyan-600',
      light: 'from-teal-50 to-cyan-50',
      text: 'text-teal-600',
      bg: 'bg-teal-600',
      border: 'border-teal-600'
    },
    accent: {
      gradient: 'from-amber-500 to-orange-500',
      light: 'from-amber-50 to-orange-50',
      text: 'text-amber-600',
      bg: 'bg-amber-600',
      border: 'border-amber-600'
    }
  };

  const colors = colorSchemes[service.color as keyof typeof colorSchemes] || colorSchemes.primary;

  // Default benefits if not provided
  const benefits = service.benefits || [
    {
      title: 'Personalized Care',
      description: 'Tailored support plans designed around your unique needs and goals'
    },
    {
      title: 'Experienced Team',
      description: 'Qualified professionals dedicated to your wellbeing and independence'
    },
    {
      title: 'Flexible Support',
      description: 'Services that adapt to your changing needs and circumstances'
    },
    {
      title: 'Quality Assured',
      description: 'NDIS registered provider maintaining the highest standards of care'
    }
  ];

  // Default process if not provided
  const process = service.process || [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We meet with you to understand your needs, goals, and preferences'
    },
    {
      step: 2,
      title: 'Personalized Plan',
      description: 'We create a customized support plan tailored to your requirements'
    },
    {
      step: 3,
      title: 'Team Matching',
      description: 'We match you with support workers who align with your needs'
    },
    {
      step: 4,
      title: 'Ongoing Support',
      description: 'We provide consistent care and regularly review your progress'
    }
  ];

  const stats = [
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: TrendingUp, value: '95%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 bg-black"
        >
          <Image
            // src={service.heroImage || `/images/services/${service.id}-hero.jpg`}
            src={`/images/hero/disability1.jpg`}
            alt={service.title}
            fill
            priority
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95" />
        </motion.div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '50px 50px',
            color: service.color === 'accent' ? '#f59e0b' : '#0d9488'
          }} />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className={`bg-gradient-to-br ${colors.gradient} bg-opacity-10 backdrop-blur-md p-4 rounded-3xl`}>
                <Heart className={`w-12 h-12 text-white`} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className={`inline-block ${colors.bg} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                Our Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
            >
              {service.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`w-24 h-1.5 bg-gradient-to-r ${colors.gradient} rounded-full mx-auto mb-6`}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed"
            >
              {service.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <Button 
                size="lg"
                className={`${colors.bg} hover:opacity-90 text-white px-8 py-6 text-lg rounded-xl shadow-lg group`}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className={`bg-white hover:bg-gray-50 ${colors.text} ${colors.border} border-2 px-8 py-6 text-lg rounded-xl`}
              >
                <Phone className="mr-2 w-5 h-5" />
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Wavy Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${colors.light} p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-xl mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-4xl font-bold ${colors.text} mb-2`}>{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section with Parallax */}
      <section ref={featuresRef} className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <motion.div 
          style={{ y: featuresY }}
          className="absolute inset-0 opacity-5"
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230d9488' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </motion.div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <span className={`${colors.bg} bg-opacity-10 text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                  Service Overview
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                What We <span className={colors.text}>Offer</span>
              </h2>
              <div className={`w-20 h-1 bg-gradient-to-r ${colors.gradient} rounded-full mb-8`}></div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {service.longDescription || service.description}
              </p>

              <div className="space-y-4">
                {service.features.slice(0, 6).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className={`w-6 h-6 ${colors.text} flex-shrink-0 mt-1`} />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                // src={service.image || `/images/services/${service.id}.jpg`}
                src={`/images/hero/disability2.jpg`}
                alt={service.title}
                fill
                className="object-cover"
                quality={90}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-20`}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className={`${colors.bg} bg-opacity-10 text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                Why Choose This Service
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Key <span className={colors.text}>Benefits</span>
            </h2>
            <div className={`w-24 h-1.5 bg-gradient-to-r ${colors.gradient} rounded-full mx-auto mb-6`}></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our service can make a positive difference in your life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            color: service.color === 'accent' ? '#f59e0b' : '#0d9488'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className={`${colors.bg} bg-opacity-10 text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                How It Works
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className={colors.text}>Process</span>
            </h2>
            <div className={`w-24 h-1.5 bg-gradient-to-r ${colors.gradient} rounded-full mx-auto mb-6`}></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A simple, straightforward approach to getting the support you need
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                    <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient}`}>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" />
          </svg>
        </div>

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-white/30 rounded-2xl backdrop-blur-sm hidden lg:block"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-white/30 rounded-full backdrop-blur-sm hidden lg:block"
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8 }}
              className="inline-block mb-8 relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-white rounded-3xl blur-xl"
              />
              <div className="relative bg-white/20 backdrop-blur-md p-4 rounded-3xl">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Ready to Get Started?
            </h2>
            
            <p className="text-xl md:text-2xl text-white/95 mb-10 font-light drop-shadow">
              Contact us today to discuss how {service.shortTitle} can support you
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-7 text-lg rounded-2xl shadow-2xl group min-w-[220px]"
                >
                  Book Consultation
                  <Calendar className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-10 py-7 text-lg rounded-2xl shadow-xl min-w-[220px]"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  0370761066
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-white"
            >
              {['NDIS Registered', 'Quality Certified', '24/7 Support'].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full"
                >
                  <Shield className="w-5 h-5" />
                  <span className="font-semibold text-sm md:text-base">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Explore Our Other <span className={colors.text}>Services</span>
            </h2>
            <p className="text-gray-600">
              Discover more ways we can support you
            </p>
          </motion.div>

          <div className="text-center">
            <Link href="/services">
              <Button 
                size="lg"
                variant="outline"
                className={`${colors.text} ${colors.border} border-2 hover:bg-gray-50 px-8 py-6 text-lg rounded-xl group`}
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;