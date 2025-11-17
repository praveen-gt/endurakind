export const SITE_CONFIG = {
  name: 'Endurakind',
  tagline: 'Building Bridges to Independence',
  description: 'Comprehensive disability support services focused on empowerment, independence, and quality of life.',
  phone: '+61493353976',
  email: 'info@endurakind.com.au',
  address: 'PO Box 2419, Melton South VIC 3338, Melbourne',
};

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'Assistance with Daily Activities', href: '/services/daily-activities' },
      { name: 'Social & Community Participation', href: '/services/community-participation' },
      { name: 'Supported Independent Living', href: '/services/supported-independent-living' },
      { name: 'Short Term Accommodation', href: '/services/short-term-accommodation' },
      { name: 'Support Coordination', href: '/services/support-coordination' }
    ]
  },
  { name: 'Contact Us', href: '/contact' }
];

export const SERVICES = [
  {
    id: 'daily-activities',
    title: 'Assistance with Daily Activities',
    shortTitle: 'Daily Activities',
    icon: 'Users',
    description: 'Personalized support for daily living tasks, helping you maintain independence and dignity.',
    features: [
      'Personal care assistance',
      'Meal preparation and cooking',
      'Shopping assistance',
      'Light housekeeping',
      'Medication reminders',
      'Transport support'
    ],
    href: '/services/daily-activities',
    color: 'from-teal-500 to-teal-600',
    heroImage: '/images/services/daily-activities-hero.jpg',
    posterImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=400&fit=crop',
  },
  {
    id: 'community-participation',
    title: 'Social & Community Participation',
    shortTitle: 'Community Participation',
    icon: 'HeartHandshake',
    description: 'Engage with your community and build meaningful relationships.',
    features: [
      'Community activity support',
      'Social skills development',
      'Group activities',
      'Event participation',
      'Recreation programs',
      'Building social connections'
    ],
    href: '/services/community-participation',
    color: 'from-amber-400 to-orange-500',
    heroImage: '/images/hero/disability1.jpg',
    posterImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
  },
  {
    id: 'supported-independent-living',
    title: 'Supported Independent Living (SIL)',
    shortTitle: 'Independent Living',
    icon: 'Home',
    description: 'Live independently with tailored 24/7 support.',
    features: [
      '24/7 support available',
      'Personalized care plans',
      'Skill development',
      'Home setup assistance',
      'Life skills training',
      'Goal achievement support'
    ],
    href: '/services/supported-independent-living',
    color: 'from-teal-600 to-cyan-600',
    heroImage: '/images/hero/disability1.jpg',
    posterImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
  },
  {
    id: 'short-term-accommodation',
    title: 'Short Term Accommodation (Respite)',
    shortTitle: 'Respite Care',
    icon: 'Palmtree',
    description: 'Quality short-term care in a comfortable environment.',
    features: [
      'Comfortable accommodation',
      'Planned activities',
      'Experienced staff',
      'Family respite support',
      'Emergency accommodation',
      'Flexible booking options'
    ],
    href: '/services/short-term-accommodation',
    color: 'from-yellow-400 to-amber-500',
    heroImage: '/images/hero/disability1.jpg',
    posterImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop',
  },
  {
    id: 'support-coordination',
    title: 'Support Coordination',
    shortTitle: 'Coordination',
    icon: 'ClipboardList',
    description: 'Navigate your NDIS plan with expert guidance.',
    features: [
      'NDIS plan implementation',
      'Service provider connection',
      'Budget management',
      'Crisis support',
      'Goal setting and review',
      'Provider liaison'
    ],
    href: '/services/support-coordination',
    color: 'from-teal-700 to-teal-800',
    heroImage: '/images/hero/disability1.jpg',
    posterImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: 'Clock',
    title: '24/7 Support Available',
    description: 'Round-the-clock assistance whenever you need it.'
  },
  {
    icon: 'Users',
    title: 'Experienced Professionals',
    description: 'Highly trained, compassionate staff.'
  },
  {
    icon: 'Target',
    title: 'Personalized Approach',
    description: 'Tailored support plans for your unique needs.'
  },
  {
    icon: 'Heart',
    title: 'Person-Centered Care',
    description: 'You at the center of everything we do.'
  }
];

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/endurakind',
  instagram: 'https://instagram.com/endurakind',
  linkedin: 'https://linkedin.com/company/endurakind',
  twitter: 'https://twitter.com/endurakind'
};