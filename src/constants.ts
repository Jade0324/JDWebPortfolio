import { Project, Experience, Press, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Phil-Aid',
    description: 'A comprehensive Budget Tracker Application designed to help users manage their finances efficiently with real-time tracking.',
    image: 'https://picsum.photos/seed/philaid/800/600',
    tags: ['WEB APP', 'FINTECH'],
    year: '2025',
    featured: true,
    link: 'https://phil-aid.vercel.app/',
  },
  {
    id: '2',
    title: 'Exoskeleton Prototype',
    description: 'Hardware integration prototype focusing on assistive technology using C++ and Arduino for movement assistance.',
    image: 'https://picsum.photos/seed/exoskeleton/800/600',
    tags: ['HARDWARE', 'C++', 'ARDUINO'],
    year: '2024',
    featured: true,
  },
  {
    id: '3',
    title: 'MediCheck',
    description: 'A secure, HIPAA-compliant healthcare account dashboard for managing patient records and medical data.',
    image: 'https://picsum.photos/seed/medicheck/800/600',
    tags: ['HEALTHCARE', 'DASHBOARD'],
    year: '2025',
  },
  {
    id: '4',
    title: 'Inventory System',
    description: 'Internal business resource management tool developed to streamline operations for a family-owned business.',
    image: 'https://picsum.photos/seed/inventory/800/600',
    tags: ['INTERNAL TOOL', 'MANAGEMENT'],
    year: '2024',
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'ALORICA',
    role: 'Customer Service Representative',
    description: 'Top Performer recognized for exceeding CSAT and AHT targets. Managed high-volume inbound calls for US-based healthcare members, handling billing, insurance, and secure payments.',
    period: 'July 2025 - November 2025',
    location: 'Laguna, Philippines',
  },
  {
    id: '2',
    company: 'ROMERO\'S PARTY NEEDS',
    role: 'Operations Assistant & Event Coordinator',
    description: 'Managing end-to-end client communication and logistics for large-scale events. Coordinating equipment inventory and delivery schedules with 5+ years of operational experience.',
    period: '2016 - Present',
    location: 'Cavite, Philippines',
  },
  {
    id: '3',
    company: 'ACADEMIC PROJECTS',
    role: 'Software Engineer Lead',
    description: 'Led development teams for various academic software projects, focusing on full-stack web applications and hardware-software integration.',
    period: '2024',
    location: 'PUP',
  }
];

export const PRESS: Press[] = [
  {
    id: '1',
    title: "Hack the Flood 2025: Top 10 Finalist",
    source: 'Hackathon',
    image: 'https://picsum.photos/seed/hackathon/800/600',
    link: '#',
    featured: true,
  },
  {
    id: '2',
    title: 'UMAK 2025 Web Development Competitor',
    source: 'Competition',
    image: 'https://picsum.photos/seed/umak/800/600',
    link: '#',
  }
];

export const SKILLS: Skill[] = [
  {
    id: 'web-dev',
    name: 'Software Engineering',
    icon: 'Code',
    description: 'Full-stack development specializing in modern web architectures and robust backend logic.',
    technologies: ['JavaScript', 'React', 'Tailwind', 'Node.js', 'Python', 'Java', 'C#', 'SQL', 'Git'],
  },
  {
    id: 'hardware',
    name: 'Hardware Integration',
    icon: 'Briefcase',
    description: 'Prototyping and developing hardware-software interfaces, specifically for assistive technologies.',
    technologies: ['C++', 'C', 'Arduino', 'Robotics', 'IoT'],
  },
  {
    id: 'customer-service',
    name: 'Technical Support',
    icon: 'MessageSquare',
    description: 'High-performing customer service and technical troubleshooting with a focus on CSAT performance.',
    technologies: ['De-escalation', 'CRM Navigation', 'Data Entry', 'MS Office', 'HIPAA Compliance'],
  }
];
