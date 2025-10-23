export const SITE_CONFIG = {
  name: 'Endurakind',
  tagline: 'Building Bridges to Independence',
  description: 'Comprehensive disability support services focused on empowerment, independence, and quality of life.',
  phone: '0370761066',
  email: 'admin@endurakind.com.au',
  address: 'Melbourne, Victoria, Australia'
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
    color: 'primary'
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
    color: 'accent'
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
    color: 'primary'
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
    color: 'accent'
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
    color: 'primary'
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