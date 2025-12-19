export const siteConfig = {
  name: "CNC Vending",
  tagline: "Modern Vending & Micro-Markets for New England Businesses",
  description:
    "Premium vending solutions, upscale micro-markets, and self-serve kegerators for businesses across New England. Family-owned, white-glove service.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://cnc-vending.com",

  contact: {
    phone: "508-713-1874",
    phoneFormatted: "(508) 713-1874",
    email: "Team@cnc-vending.com",
  },

  location: {
    region: "Central Massachusetts",
    tagline: "Proudly Serving New England",
    states: [
      "Massachusetts",
      "Rhode Island",
      "Connecticut",
      "New Hampshire",
      "Vermont",
      "Maine",
    ],
  },

  social: {},

  navigation: [
    { name: "Solutions", href: "/#solutions" },
    { name: "Industries", href: "/#industries" },
    { name: "Service Area", href: "/service-area" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/contact" },
  ],

  solutions: [
    {
      id: "markets",
      name: "Upscale Markets",
      slug: "/solutions/markets",
      shortDescription: "Premium self-serve micro-markets with self-checkout",
      description:
        "Transform your break room into a premium self-service market. Fresh food, snacks, and beverages available 24/7 with modern self-checkout technology.",
      features: [
        "24/7 self-service convenience",
        "Fresh food & healthy options",
        "Modern self-checkout kiosks",
        "Customized product selection",
        "Cashless & mobile payments",
      ],
      image: "/images/upscale-market.png",
      locations: [
        "Corporate offices",
        "Tech campuses",
        "Healthcare facilities",
        "Multi-tenant buildings",
      ],
    },
    {
      id: "vending",
      name: "Modern Amenities",
      slug: "/solutions/vending",
      shortDescription: "Traditional to cutting-edge vending solutions",
      description:
        "From classic snack machines to state-of-the-art smart vending, we deliver solutions that keep your team satisfied and productive.",
      features: [
        "Smart inventory management",
        "Touchless payment options",
        "Energy-efficient machines",
        "Custom product mix",
        "Regular restocking & maintenance",
      ],
      image: "/images/modern-amenities.png",
      locations: [
        "Manufacturing facilities",
        "Distribution centers",
        "Schools & universities",
        "Gyms & fitness centers",
      ],
    },
    {
      id: "kegerators",
      name: "Kegerators",
      slug: "/solutions/kegerators",
      shortDescription: "Self-serve nitro brew, kombucha & more",
      description:
        "Skip the coffee shop line. Bring premium nitro cold brew, kombucha, tea, and energy drinks directly to your team. Just tap, pour, and enjoy.",
      features: [
        "Nitro cold brew coffee",
        "Kombucha & wellness drinks",
        "Energy drinks on tap",
        "Tea & specialty beverages",
        "Self-serve convenience",
      ],
      image: "/images/kegerators.png",
      locations: [
        "Creative agencies",
        "Tech startups",
        "Co-working spaces",
        "Modern offices",
      ],
    },
  ],

  industries: [
    {
      name: "Corporate Offices",
      icon: "building",
      description: "Keep your team fueled and focused",
    },
    {
      name: "Healthcare",
      icon: "heart",
      description: "24/7 options for staff and visitors",
    },
    {
      name: "Manufacturing",
      icon: "cog",
      description: "Reliable service for every shift",
    },
    {
      name: "Apartments",
      icon: "home",
      description: "Premium amenities for residents",
    },
    {
      name: "Gyms & Fitness",
      icon: "dumbbell",
      description: "Healthy options on demand",
    },
    {
      name: "Schools",
      icon: "graduation",
      description: "Smart choices for students & staff",
    },
  ],

  howItWorks: [
    {
      step: 1,
      title: "Request a Quote",
      description:
        "Tell us about your space and needs. We'll respond within 24 hours.",
    },
    {
      step: 2,
      title: "Site Visit & Proposal",
      description:
        "We'll assess your location and create a custom solution tailored to your team.",
    },
    {
      step: 3,
      title: "Install & Ongoing Service",
      description:
        "Professional installation followed by reliable restocking and maintenance.",
    },
  ],

  trustBadges: [
    { text: "Family-Owned", icon: "heart" },
    { text: "Serving New England", icon: "map" },
    { text: "Fast Response", icon: "clock" },
    { text: "Custom Solutions", icon: "settings" },
  ],

  faqs: [
    {
      question: "What areas do you serve?",
      answer:
        "We proudly serve all of New England, with our home base in Central Massachusetts. This includes Massachusetts, Rhode Island, Connecticut, New Hampshire, Vermont, and Maine.",
    },
    {
      question: "How often do you restock?",
      answer:
        "Restocking frequency is customized to your needs. Most locations receive weekly service, but high-traffic sites can be serviced more frequently. We monitor inventory to ensure you never run low.",
    },
    {
      question: "Is there a cost to the business?",
      answer:
        "In most cases, our vending and micro-market services are provided at no cost to your business. We handle equipment, installation, stocking, and maintenance. You just provide the space and power.",
    },
    {
      question: "Can we customize the product selection?",
      answer:
        "Absolutely! We work with you to curate a product mix that fits your team's preferences, including healthy options, local favorites, and dietary accommodations.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Most installations are completed within 1-2 weeks of approval. We coordinate with your team to minimize disruption and ensure a clean, professional setup.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "Our machines accept credit/debit cards, mobile payments (Apple Pay, Google Pay), and cashless options. Select machines also accept cash.",
    },
  ],
} as const;

export type Solution = (typeof siteConfig.solutions)[number];
export type Industry = (typeof siteConfig.industries)[number];

