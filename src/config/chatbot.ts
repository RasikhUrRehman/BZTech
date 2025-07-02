// Gemini AI Configuration
export const GEMINI_CONFIG = {
  apiKey: import.meta.env.VITE_GEMINI_API_KEY || 'AIzaSyBx4jsIUp6I_I9Hk0eDhwh0reWyFdqBFzE',
  model: 'gemini-1.5-flash',
  maxTokens: 1000,
  temperature: 0.7,
} as const;

// Company Information for AI Context
export const COMPANY_INFO = {
  name: 'BZTech Academic Services',
  whatsapp: '+447482576463',
  website: window.location.origin,
  email: 'info@bztech.com', // Update with actual email
  description: 'Professional academic writing and research support services',
} as const;

// Services Configuration
export const SERVICES_CONFIG = {
  categories: [
    'Academic Assignments',
    'Thesis Writing',
    'Research Papers',
    'Dissertation Help',
    'Essay Writing',
    'Research Proposals',
    'Research Publication',
    'Online Teaching',
    'Plagiarism Removal',
    'Paper Preparation'
  ],
  academicLevels: [
    { name: 'High School', price: '$15-20' },
    { name: 'Undergraduate', price: '$20-25' },
    { name: 'Graduate', price: '$25-30' },
    { name: 'PhD', price: '$30-40' }
  ],
  freeServices: [
    'Research Proposals',
    'Plagiarism & AI Reports',
    'Unlimited Revisions',
    'Research Guidance'
  ],
  discounts: [
    '30% OFF first order for new clients',
    '30% OFF orders above $1000',
    'FREE reports with every order'
  ]
} as const;

export default {
  GEMINI_CONFIG,
  COMPANY_INFO,
  SERVICES_CONFIG
};
