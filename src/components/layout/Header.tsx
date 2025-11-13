
"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { NAVIGATION_LINKS, SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
    { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      {/* Top Bar - Always Visible */}
      <div className={`bg-theme-green text-white transition-all duration-300 hidden md:block ${isScrolled ? 'py-1.5' : 'py-2'
        }`}>
        <div className="container-custom">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-sm'
            }`}>
            {/* Left - Contact Info */}
            <div className="flex items-center gap-6">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 hover:text-theme-orange transition-colors"
              >
                <Phone className={`transition-all duration-300 ${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`} />
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 hover:text-theme-orange transition-colors"
              >
                <Mail className={`transition-all duration-300 ${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`} />
                {SITE_CONFIG.email}
              </a>
            </div>

            {/* Right - Social Media */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-theme-orange transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className={`transition-all duration-300 ${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`bg-white/95 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}>
        <div className="container-custom">
          <nav className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'
            }`}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div>
                <div className={`font-bold text-theme-green font-heading transition-all duration-300 ${isScrolled ? 'text-2xl' : 'text-3xl'
                  }`}>
                  Endurakind
                </div>
                <div className={`text-theme-green/80 -mt-1 ml-[1px] hidden sm:block transition-all duration-300 ${isScrolled ? 'text-[9px]' : 'text-[10.5px]'
                  }`}>
                  Building Bridges to Independence
                </div>
              </div>
              <div className="relative">
                <Image
                  src={'/icon.png'}
                  alt="Endurakind Icon"
                  width={isScrolled ? 40 : 50}
                  height={isScrolled ? 40 : 50}
                  className="object-contain transition-all duration-300"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {NAVIGATION_LINKS.map((link) => (
                <div key={link.name} className="relative group">
                  {link.submenu ? (
                    <>
                      {/* <button className="flex items-center gap-1 text-gray-700 hover:text-theme-green transition-colors font-medium py-2">
                        {link.name}
                        <ChevronDown className="w-4 h-4" />
                      </button> */}
                      <div className="flex items-center gap-1 text-gray-700 hover:text-theme-green transition-colors font-medium py-2">
                        <Link href={link.href} className="hover:text-theme-green">
                          {link.name}
                        </Link>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="bg-white rounded-lg shadow-lg py-2 min-w-[250px] border border-gray-100">
                          {link.submenu.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-theme-cream hover:text-theme-green transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-theme-green transition-colors font-medium"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/contact" passHref>
                <Button className="btn-endurakind hover:cursor-pointer">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col gap-4">
                {/* Mobile Contact Info */}
                <div className="pb-4 border-b border-gray-200">
                  <div className="flex flex-col gap-2 text-sm">
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-theme-green transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {SITE_CONFIG.phone}
                    </a>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-theme-green transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {SITE_CONFIG.email}
                    </a>
                  </div>

                  {/* Mobile Social Links */}
                  <div className="flex items-center gap-3 mt-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-theme-green/10 rounded-full flex items-center justify-center text-theme-green hover:bg-theme-green hover:text-white transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Navigation Links */}
                {NAVIGATION_LINKS.map((link) => (
                  <div key={link.name}>
                    {link.submenu ? (
                      <>
                        <button
                          onClick={() => setOpenSubmenu(openSubmenu === link.name ? null : link.name)}
                          className="flex items-center justify-between w-full text-gray-700 font-medium py-2"
                        >
                          {link.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === link.name ? 'rotate-180' : ''}`} />
                        </button>
                        {openSubmenu === link.name && (
                          <div className="pl-4 flex flex-col gap-2 mt-2">
                            {link.submenu.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-600 hover:text-theme-green transition-colors py-1"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-700 font-medium block py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}

                <Link href="/contact" passHref>
                  <Button className="btn-endurakind w-full mt-2 hover:cursor-pointer">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}