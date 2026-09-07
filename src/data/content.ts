export interface Service {
  number: string;
  title: string;
  description: string;
  items?: string[];
  icon: string;
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Modern, responsive websites and web applications built with clean frontend architecture.',
    items: ['React', 'TypeScript', 'Responsive UI', 'Modern frontend architecture'],
    icon: 'Globe',
  },
  {
    number: '02',
    title: 'Full-Stack Applications',
    description:
      'Complete applications covering frontend, backend, APIs, databases, authentication and business logic.',
    items: ['React', 'Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
    icon: 'Layers',
  },
  {
    number: '03',
    title: 'AI-Powered Applications',
    description:
      'AI-powered products that integrate intelligent workflows into useful user experiences.',
    items: ['Gemini', 'AI APIs', 'AI assistants', 'Content generation', 'AI workflows'],
    icon: 'Sparkles',
  },
  {
    number: '04',
    title: 'AI API Integration',
    description:
      'Connect your application to modern AI services and turn AI capabilities into practical product features.',
    icon: 'Plug',
  },
  {
    number: '05',
    title: 'Flutter Mobile Apps',
    description:
      'Cross-platform mobile applications with modern interfaces, state management, APIs and backend integration.',
    icon: 'Smartphone',
  },
  {
    number: '06',
    title: 'Backend & APIs',
    description:
      'Reliable backend services, REST APIs, authentication, business logic and database systems.',
    icon: 'Server',
  },
  {
    number: '07',
    title: 'PostgreSQL & Databases',
    description:
      'Structured database design, data modeling, queries and application data architecture.',
    icon: 'Database',
  },
  {
    number: '08',
    title: 'Website Redesign',
    description:
      'Modernize an existing website with improved structure, responsive design, performance and user experience.',
    icon: 'RefreshCw',
  },
];

export interface TechCategory {
  category: string;
  icon: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    category: 'Frontend',
    icon: 'Monitor',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend',
    icon: 'Server',
    items: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    category: 'Database',
    icon: 'Database',
    items: ['PostgreSQL', 'Prisma'],
  },
  {
    category: 'Mobile',
    icon: 'Smartphone',
    items: ['Flutter', 'Dart', 'Riverpod'],
  },
  {
    category: 'AI',
    icon: 'Sparkles',
    items: ['Google Gemini', 'AI APIs', 'AI-powered workflows'],
  },
  {
    category: 'Tools',
    icon: 'Wrench',
    items: ['Git', 'GitHub', 'FFmpeg', 'Firebase', 'Vercel', 'GoDaddy', 'Hostinger'],
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Understand your idea, users, requirements and business goal.',
    icon: 'Search',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'Define features, architecture, technology and project scope.',
    icon: 'ClipboardList',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Develop the interface, backend, APIs, database and integrations.',
    icon: 'Code2',
  },
  {
    number: '04',
    title: 'Test & Refine',
    description:
      'Test functionality, responsiveness, edge cases and user experience.',
    icon: 'CheckCircle2',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'Prepare the product for deployment and help with final improvements.',
    icon: 'Rocket',
  },
];

export interface WhyPoint {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const whyPoints: WhyPoint[] = [
  {
    number: '01',
    title: 'Full-Stack Thinking',
    description:
      'I can work across the interface, API, database and application logic.',
    icon: 'Layers',
  },
  {
    number: '02',
    title: 'AI Integration',
    description:
      'I build practical AI features rather than adding AI simply for the sake of it.',
    icon: 'Sparkles',
  },
  {
    number: '03',
    title: 'Product Mindset',
    description:
      "I focus on what the product needs to accomplish for its users.",
    icon: 'Target',
  },
  {
    number: '04',
    title: 'Real Projects',
    description:
      'My portfolio is built around products and working prototypes rather than only tutorial projects.',
    icon: 'FolderGit2',
  },
  {
    number: '05',
    title: 'End-to-End Development',
    description:
      'I can take an idea from architecture and interface through implementation.',
    icon: 'Workflow',
  },
];
