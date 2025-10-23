// components/about/CTASection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles, CheckCircle, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTAButton {
  text: string;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
}

interface TrustIndicator {
  text: string;
  icon?: LucideIcon;
}

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttons: CTAButton[];
  trustIndicators?: TrustIndicator[];
  backgroundColor?: 'amber' | 'teal' | 'gradient';
}

export const CTASection = ({
  title,
  subtitle,
  buttons,
  trustIndicators = [],
  backgroundColor = 'amber'
}: CTASectionProps) => {
  const bgGradients = {
    amber: 'from-amber-400 via-orange-400 to-amber-500',
    teal: 'from-teal-500 via-teal-600 to-cyan-600',
    gradient: 'from-amber-400 via-orange-400 to-amber-500'
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradients[backgroundColor]}`}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      {/* Wavy Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Floating Elements */}
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
          {/* Icon with Pulse Effect */}
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

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          
          <p className="text-xl md:text-2xl text-gray-800 mb-10 font-light drop-shadow">
            {subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {buttons.map((button, index) => {
              const Icon = button.icon || ArrowRight;
              const isPrimary = button.variant !== 'secondary';
              
              return (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg"
                    variant={isPrimary ? 'default' : 'outline'}
                    className={`${
                      isPrimary 
                        ? 'bg-gray-900 hover:bg-gray-800 text-white' 
                        : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-900'
                    } px-10 py-7 text-lg rounded-2xl shadow-2xl group min-w-[220px]`}
                    onClick={button.onClick}
                  >
                    <Icon className={`${button.icon ? 'mr-2' : 'ml-2'} w-5 h-5 ${isPrimary ? 'group-hover:translate-x-2' : ''} transition-transform`} />
                    {button.text}
                  </Button>
                </motion.div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          {trustIndicators.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-gray-900"
            >
              {trustIndicators.map((indicator, index) => {
                const Icon = indicator.icon || CheckCircle;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full"
                  >
                    <Icon className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-sm md:text-base">{indicator.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};