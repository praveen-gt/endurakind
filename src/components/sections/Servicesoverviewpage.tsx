'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Heart, Users, Home, Palmtree,
  ClipboardList, Phone, Sparkles, Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SERVICES, SITE_CONFIG } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

const ServicesOverviewPage = () => {
  // Icon mapping
  const iconMap: { [key: string]: any } = {
    'Users': Users,
    'HeartHandshake': Heart,
    'Home': Home,
    'Palmtree': Palmtree,
    'ClipboardList': ClipboardList
  };

  const benefits = [
    {
      icon: Shield,
      title: 'Professional Care',
      description: 'Committed to highest standards of service'
    },
    {
      icon: Heart,
      title: 'Person-Centered',
      description: 'Support tailored to your unique needs'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Qualified and compassionate professionals'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'Highest standards of care and safety'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black">
          <Image
            // src="/images/services/services-hero.jpg"
            src="/images/hero/services-hero-1.jpg"
            alt="Our Services"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/55 to-white/95" />
        </div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #0d9488 1px, transparent 0)`,
            backgroundSize: '50px 50px'
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
              <div className="bg-teal-600/10 backdrop-blur-md p-4 rounded-3xl">
                <Heart className="w-12 h-12 text-teal-600" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900"
            >
              Our <span className="text-teal-600">Services</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mx-auto mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed"
            >
              Comprehensive disability support services designed to empower you
              <br className="hidden md:block" />
              to live independently and achieve your goals
            </motion.p>
          </div>
        </div>

        {/* Wavy Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230d9488' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
                What We Offer
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Explore Our <span className="text-teal-600">Support Services</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From daily living assistance to independent living support, we offer comprehensive
              services designed around your unique needs and goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || Heart;
              const isAccent = service.color === 'accent';

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full flex flex-col border border-gray-100">
                    {/* Image/Icon Section */}
                    <div className="relative h-56 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full"
                      >
                        <Image
                          src={service.posterImage}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>

                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80 group-hover:opacity-70 transition-opacity`} />

                      {/* Icon */}
                      <div className="absolute top-6 left-6">
                        <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                        {service.shortTitle}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className={`w-5 h-5 ${isAccent ? 'text-amber-500' : 'text-teal-500'} flex-shrink-0 mt-0.5`} />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Link href={service.href}>
                        <Button
                          className={`hover:cursor-pointer w-full ${isAccent ? 'bg-amber-600 hover:bg-amber-700' : 'bg-teal-600 hover:bg-teal-700'} text-white rounded-xl group/btn`}
                          size="lg"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Why Endurakind
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Why Choose <span className="text-teal-600">Our Services</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mb-8"></div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Endurakind, we understand that every person's journey is unique. That's why we
                  provide flexible, person-centered services designed around your individual needs,
                  preferences, and goals.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our experienced team is committed to empowering you to live as independently as
                  possible, while providing the support you need to thrive in your community.
                </p>

                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  {[
                    'Compassionate Care',
                    'Experienced Team',
                    '24/7 Support Available',
                    'Person-Centered Approach'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">{item}</span>
                    </div>
                  ))}
                </div>
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
                src="/images/services/why-choose-endurakind-services.jpg"
                alt="Why Choose Endurakind"
                fill
                className="object-cover"
                quality={90}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500">
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

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 drop-shadow-lg">
              Ready to Get <span className="text-white">Started?</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-800 mb-10 font-light drop-shadow">
              Contact us today to discuss which service is right for you
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="hover:cursor-pointer bg-gray-900 hover:bg-gray-800 text-white px-10 py-7 text-lg rounded-2xl shadow-2xl group min-w-[220px]"
                  >
                    Contact Us Today
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href={`tel:${SITE_CONFIG.phone}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:cursor-pointer bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-900 px-10 py-7 text-lg rounded-2xl shadow-xl min-w-[220px]"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  {SITE_CONFIG.phone}
                </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverviewPage;