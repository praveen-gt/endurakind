'use client';

import React from 'react';
import {
  Heart,
  Users,
  Target,
  Shield,
  // Award, 
  // Clock, 
  // TrendingUp, 
  Phone
} from 'lucide-react';
import { HeroSection } from '@/components/about/HeroSection';
// import { StatsGrid } from '@/components/about/StatsGrid';
import { StorySection } from '@/components/about/StorySection';
import { Timeline } from '@/components/about/Timeline';
import { ValuesGrid } from '@/components/about/ValuesGrid';
// import { TeamGrid } from '@/components/about/TeamGrid';
// import { CTASection } from '@/components/about/CTASection';
import CTASection from '@/components/sections/HomeCTASection';

const AboutPage = () => {

  const storyParagraphs = [
    'Endurakind was founded with a simple yet powerful vision: to create a truly inclusive community where every individual can live independently and thrive.',
    'Our story began when our founder recognized that disability support needed to go beyond basic assistance—it needed to be about genuine connection, empowerment, and human dignity.',
    'What started as a small local initiative has grown into a compassionate network supporting individuals and families across Victoria, while staying true to our core values of empathy, inclusion, and integrity.'
  ];

  const storyBadges = [
    { text: 'Empowering Independence' },
    { text: 'Supporting Every Ability' }
  ];


  const milestones = [
    {
      year: '2025',
      title: 'Our Beginning',
      description: 'Endurakind was founded with the vision to bring empathy-driven, inclusive support to individuals and families across Victoria.'
    },
    {
      year: '2026',
      title: 'Expanding Reach',
      description: 'Growing our network and impact through compassionate care and meaningful partnerships.'
    }
  ];


  // Values data
  const values = [
    {
      icon: Heart,
      title: 'Compassion First',
      description: 'We care deeply about every individual we support, treating everyone with dignity and kindness.',
      color: 'from-pink-500 to-rose-500',
      stat: '100%'
    },
    {
      icon: Users,
      title: 'Inclusive Community',
      description: 'Everyone deserves respect, equal opportunities, and a place where they truly belong.',
      color: 'from-teal-500 to-cyan-500',
      stat: '200+'
    },
    {
      icon: Target,
      title: 'Goal Focused',
      description: 'Helping you achieve independence, reach your goals, and live your best life.',
      color: 'from-amber-500 to-orange-500',
      stat: '500+'
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'Transparent, honest, and ethical in everything we do. Your trust is our priority.',
      color: 'from-blue-500 to-indigo-500',
      stat: '10+'
    }
  ];

  // Team data
  // const team = [
  //   {
  //     name: 'Sarah Johnson',
  //     role: 'Founder & Director',
  //     image: '/images/team/sarah.jpg',
  //     bio: 'Passionate about creating inclusive communities and empowering individuals.',
  //     social: {
  //       linkedin: 'https://linkedin.com',
  //       email: 'sarah@endurakind.com.au'
  //     }
  //   },
  //   {
  //     name: 'Michael Chen',
  //     role: 'Support Coordinator',
  //     image: '/images/team/michael.jpg',
  //     bio: 'Dedicated to personalized care plans and client success.',
  //     social: {
  //       linkedin: 'https://linkedin.com',
  //       email: 'michael@endurakind.com.au'
  //     }
  //   },
  //   {
  //     name: 'Emma Williams',
  //     role: 'Care Specialist',
  //     image: '/images/team/emma.jpg',
  //     bio: 'Expert in disability support services with 8+ years experience.',
  //     social: {
  //       linkedin: 'https://linkedin.com',
  //       email: 'emma@endurakind.com.au'
  //     }
  //   },
  //   {
  //     name: 'David Brown',
  //     role: 'Community Liaison',
  //     image: '/images/team/david.jpg',
  //     bio: 'Building lasting community connections and partnerships.',
  //     social: {
  //       linkedin: 'https://linkedin.com',
  //       email: 'david@endurakind.com.au'
  //     }
  //   }
  // ];

  // CTA data
  const ctaButtons = [
    {
      text: 'Get In Touch',
      variant: 'primary' as const,
      onClick: () => window.location.href = '/contact'
    },
    {
      text: 'Call Us Now',
      icon: Phone,
      variant: 'secondary' as const,
      onClick: () => window.location.href = 'tel:+61493353976'
    }
  ];

  const trustIndicators = [
    { text: 'Person-Centered Care' },
    { text: '24/7 Support' },
    { text: 'Compassionate Team' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title='About <span class="text-teal-600">Endurakind</span>'
        subtitle='Building bridges to independence through compassionate,<br class="hidden md:block" />person-centered care since 2014'
        // backgroundImage="/images/about/about-hero.jpg"
        backgroundImage="/images/hero/disability2-1.jpg"
      />

      {/* About Intro Section (replaces StatsGrid) */}
      <section className="pt-20 md:pt-32 bg-gray-50">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-teal-600">Endurakind</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Endurakind is dedicated to fostering a community that celebrates individuality, inclusion, and human potential.
            We believe every person deserves the opportunity to live a meaningful, empowered life—regardless of ability, background, or circumstance.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Guided by compassion and integrity, we’re building supportive environments where kindness and opportunity thrive for all.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <StorySection
        badge="Our Journey"
        title="Where It All"
        highlightedWord="Began"
        paragraphs={storyParagraphs}
        // image="/images/about/our-story.jpg"
        image="/images/hero/disability2.jpg"
        badges={storyBadges}
        backgroundColor="bg-gray-50"
      />

      {/* Timeline Section */}
      <Timeline
        badge="Our Journey"
        title="Key"
        highlightedWord="Milestones"
        subtitle="A decade of growth, impact, and unwavering commitment to our community"
        milestones={milestones}
        backgroundColor="bg-white"
      />

      {/* Values Section */}
      <ValuesGrid
        badge="What Drives Us"
        title="Our Core"
        highlightedWord="Values"
        subtitle="These principles guide every decision we make and every interaction we have"
        values={values}
        columns={4}
        backgroundColor="bg-gray-50"
      />

      {/* Team Section */}
      {/* <TeamGrid
        badge="The People Behind Our Mission"
        title="Meet Our"
        highlightedWord="Team"
        subtitle="Our dedicated professionals are passionate about making a real difference in people's lives"
        members={team}
        columns={4}
        backgroundColor="bg-white"
      /> */}

      {/* CTA Section */}
      {/* <CTASection
        title='Ready to Start Your <span class="text-white">Journey?</span>'
        subtitle="Contact us today to learn how we can support you or your loved ones"
        buttons={ctaButtons}
        trustIndicators={trustIndicators}
        backgroundColor="amber"
      /> */}

      <CTASection />
    </div>
  );
};

export default AboutPage;