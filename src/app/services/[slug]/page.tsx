// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
import ServicePage from '@/components/sections/ServicePage';
import { SERVICES } from '@/lib/constants';

// Extended service data with more details
const EXTENDED_SERVICES = {
  'daily-activities': {
    ...SERVICES[0],
    longDescription: 'Our Assistance with Daily Activities service is designed to help you maintain your independence while receiving the support you need. We provide personalized assistance with everyday tasks, ensuring you can live comfortably and confidently in your own home. Our experienced support workers are trained to respect your preferences and dignity while helping you achieve your daily goals.',
    detailedFeatures: [
      {
        title: 'Personal Care',
        description: 'Compassionate assistance with showering, dressing, grooming, and other personal hygiene needs'
      },
      {
        title: 'Meal Preparation',
        description: 'Help with planning, shopping for, and preparing nutritious meals that suit your dietary requirements'
      },
      {
        title: 'Domestic Assistance',
        description: 'Support with light housekeeping, laundry, and maintaining a clean, safe living environment'
      },
      {
        title: 'Medication Support',
        description: 'Reminders and assistance to ensure medications are taken correctly and on time'
      }
    ],
    benefits: [
      {
        title: 'Maintain Independence',
        description: 'Stay in your own home while receiving the support you need to live comfortably'
      },
      {
        title: 'Flexible Scheduling',
        description: 'Support available when you need it, from a few hours to full-day assistance'
      },
      {
        title: 'Trusted Support Workers',
        description: 'Matched with consistent, reliable support workers who understand your needs'
      },
      {
        title: 'Dignity & Respect',
        description: 'Care provided with the utmost respect for your privacy, choices, and independence'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Free Consultation',
        description: 'We discuss your needs, preferences, and goals to understand how we can best support you'
      },
      {
        step: 2,
        title: 'Customized Plan',
        description: 'We create a personalized support plan that aligns with your NDIS goals and daily routine'
      },
      {
        step: 3,
        title: 'Meet Your Team',
        description: 'We introduce you to carefully selected support workers who match your personality and needs'
      },
      {
        step: 4,
        title: 'Ongoing Support',
        description: 'Regular check-ins and plan reviews ensure you\'re getting the support you need'
      }
    ],
    heroImage: '/images/services/daily-activities-hero.jpg',
    image: '/images/services/daily-activities.jpg'
  },
  'community-participation': {
    ...SERVICES[1],
    longDescription: 'Social and Community Participation helps you engage with your local community, build meaningful relationships, and pursue your interests. Whether you want to join clubs, attend events, develop new skills, or simply connect with others, our support workers are here to facilitate your participation and help you build a fulfilling social life.',
    benefits: [
      {
        title: 'Build Connections',
        description: 'Form meaningful friendships and relationships within your community'
      },
      {
        title: 'Develop Skills',
        description: 'Learn new abilities through group activities and community engagement'
      },
      {
        title: 'Increase Confidence',
        description: 'Gain independence and self-assurance through regular social interaction'
      },
      {
        title: 'Pursue Interests',
        description: 'Explore hobbies, sports, and activities that bring you joy and fulfillment'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Discover Interests',
        description: 'We explore what activities and social opportunities interest you most'
      },
      {
        step: 2,
        title: 'Plan Activities',
        description: 'Together, we create a schedule of community activities and events you\'d like to attend'
      },
      {
        step: 3,
        title: 'Supported Participation',
        description: 'Our support workers accompany you, providing the assistance you need to fully participate'
      },
      {
        step: 4,
        title: 'Build Independence',
        description: 'Over time, we help you develop the skills and confidence to participate more independently'
      }
    ],
    heroImage: '/images/services/community-participation-hero.jpg',
    image: '/images/services/community-participation.jpg'
  },
  'supported-independent-living': {
    ...SERVICES[2],
    longDescription: 'Supported Independent Living (SIL) provides you with 24/7 support in a home environment, helping you live as independently as possible while having assistance available whenever you need it. Our SIL services are completely person-centered, designed around your goals, preferences, and the level of support that works best for you.',
    benefits: [
      {
        title: 'Your Own Home',
        description: 'Live in your own space with the security of round-the-clock support'
      },
      {
        title: 'Skill Development',
        description: 'Build life skills and independence at your own pace with expert guidance'
      },
      {
        title: '24/7 Peace of Mind',
        description: 'Support available whenever you need it, day or night, every day of the year'
      },
      {
        title: 'Personalized Support',
        description: 'Care plans tailored to your unique needs, goals, and lifestyle preferences'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Needs Assessment',
        description: 'Comprehensive evaluation of your support requirements and living preferences'
      },
      {
        step: 2,
        title: 'Home Selection',
        description: 'Find or set up the perfect living environment that suits your needs and preferences'
      },
      {
        step: 3,
        title: 'Team Assembly',
        description: 'Build your support team with carefully selected workers who align with your needs'
      },
      {
        step: 4,
        title: 'Ongoing Enhancement',
        description: 'Regular reviews and adjustments to ensure your support evolves with your goals'
      }
    ],
    heroImage: '/images/services/sil-hero.jpg',
    image: '/images/services/sil.jpg'
  },
  'short-term-accommodation': {
    ...SERVICES[3],
    longDescription: 'Short Term Accommodation (Respite) provides quality care in a comfortable environment for short stays. Whether you need a break, your regular carers need respite, or you\'re facing an emergency situation, we offer safe, supportive accommodation with experienced staff and engaging activities.',
    benefits: [
      {
        title: 'Quality Respite',
        description: 'Give yourself or your carers a well-deserved break with confidence in quality care'
      },
      {
        title: 'Comfortable Environment',
        description: 'Stay in welcoming, accessible accommodations designed for your comfort'
      },
      {
        title: 'Engaging Activities',
        description: 'Participate in planned recreational and social activities during your stay'
      },
      {
        title: 'Flexible Booking',
        description: 'Book for short stays, weekends, or longer periods based on your needs'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Booking Inquiry',
        description: 'Contact us to discuss your respite needs and preferred dates'
      },
      {
        step: 2,
        title: 'Pre-Stay Planning',
        description: 'We learn about your routines, preferences, and any specific support requirements'
      },
      {
        step: 3,
        title: 'Comfortable Stay',
        description: 'Enjoy your respite with quality care, activities, and all necessary support'
      },
      {
        step: 4,
        title: 'Feedback & Follow-up',
        description: 'We ensure your stay met your expectations and plan for future respite needs'
      }
    ],
    heroImage: '/images/services/respite-hero.jpg',
    image: '/images/services/respite.jpg'
  },
  'support-coordination': {
    ...SERVICES[4],
    longDescription: 'Support Coordination helps you understand and implement your NDIS plan, connecting you with the right service providers and ensuring you get the most value from your funding. Our experienced coordinators work alongside you to navigate the NDIS system, manage your budget, and achieve your goals.',
    benefits: [
      {
        title: 'Expert NDIS Guidance',
        description: 'Navigate the NDIS system with confidence and understand all your options'
      },
      {
        title: 'Provider Connections',
        description: 'Access our network of quality service providers matched to your needs'
      },
      {
        title: 'Budget Management',
        description: 'Make the most of your NDIS funding with strategic planning and monitoring'
      },
      {
        title: 'Goal Achievement',
        description: 'Stay on track with your goals through regular reviews and proactive support'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Plan Review',
        description: 'We thoroughly review your NDIS plan to understand your funding and goals'
      },
      {
        step: 2,
        title: 'Provider Matching',
        description: 'Connect you with suitable service providers from our trusted network'
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'Coordinate services, manage agreements, and ensure everything runs smoothly'
      },
      {
        step: 4,
        title: 'Ongoing Monitoring',
        description: 'Regular check-ins, budget tracking, and preparation for plan reviews'
      }
    ],
    heroImage: '/images/services/coordination-hero.jpg',
    image: '/images/services/coordination.jpg'
  }
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = EXTENDED_SERVICES[params.slug as keyof typeof EXTENDED_SERVICES];
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Endurakind`,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = EXTENDED_SERVICES[params.slug as keyof typeof EXTENDED_SERVICES];

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
}